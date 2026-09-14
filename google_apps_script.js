/**
 * INCOZENT TECHNOLOGIES — Google Apps Script for Form Submissions
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.new) and create a new spreadsheet named "Incozent Inquiries & Leads".
 * 2. Click on "Extensions" -> "Apps Script".
 * 3. Delete any code in Code.gs and paste THIS entire script.
 * 4. Click "Deploy" (top right blue button) -> "New deployment".
 * 5. Click the gear icon next to "Select type" -> select "Web app".
 * 6. Set Description: "Incozent Form Handler".
 * 7. Set "Execute as": "Me" (your Google account).
 * 8. Set "Who has access": "Anyone" (VERY IMPORTANT!).
 * 9. Click "Deploy" -> grant permissions if prompted -> Copy the "Web app URL" (ends with /exec).
 * 10. Paste that Web app URL into js/config.js as googleSheetWebhookUrl.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for concurrent requests
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = {};

    // Parse incoming payload
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Identify sheet name from form_type
    var sheetName = data.sheet_name || data.form_type || "Submissions";
    var sheet = ss.getSheetByName(sheetName);

    // If sheet tab doesn't exist yet, automatically create it with styled headers
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      var initialHeaders = ["Timestamp", "Status"];
      for (var key in data) {
        if (key !== "sheet_name" && key !== "form_type" && key !== "status" && key !== "submitted_at") {
          initialHeaders.push(key);
        }
      }
      sheet.appendRow(initialHeaders);
      
      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, initialHeaders.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0ea5a3");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    // Read current sheet headers
    var lastCol = sheet.getLastColumn();
    var existingHeaders = lastCol > 0 ? sheet.getRange(1, 1, 1, lastCol).getValues()[0] : [];

    // Dynamically add any new headers if new fields are introduced
    for (var key in data) {
      if (key !== "sheet_name" && key !== "form_type" && existingHeaders.indexOf(key) === -1) {
        sheet.getRange(1, existingHeaders.length + 1).setValue(key)
          .setFontWeight("bold").setBackground("#0ea5a3").setFontColor("#ffffff");
        existingHeaders.push(key);
      }
    }

    // Build row matching header positions
    var newRow = [];
    var nowFormatted = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || "GMT+5:30", "yyyy-MM-dd HH:mm:ss");

    for (var i = 0; i < existingHeaders.length; i++) {
      var header = existingHeaders[i];
      if (header === "Timestamp") {
        newRow.push(nowFormatted);
      } else if (header === "Status") {
        newRow.push(data.status || "New");
      } else {
        var value = data[header] !== undefined ? data[header] : "";
        if (Array.isArray(value)) {
          value = value.join(", ");
        } else if (typeof value === "object" && value !== null) {
          value = JSON.stringify(value);
        }
        newRow.push(value);
      }
    }

    sheet.appendRow(newRow);

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Submission recorded" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Optional: Test function to verify script runs inside Apps Script Editor
function testSubmission() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        form_type: "Contact Inquiries",
        full_name: "Test Client",
        email: "test@example.com",
        company: "AI Labs Inc",
        subject: "Custom Facial Dataset",
        message: "We need 50,000 consented facial images with landmarks.",
        status: "New"
      })
    }
  };
  var res = doPost(mockEvent);
  Logger.log(res.getContent());
}
