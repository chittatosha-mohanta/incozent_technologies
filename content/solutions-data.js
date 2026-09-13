/**
 * Solutions content data — drives the Solutions dropdown, /solutions hub,
 * homepage capability cards, and every individual solution page template.
 * Keeping this separate from markup avoids duplicating UI code across pages.
 */
const solutionsData = [
  {
    slug: "facial-biometric-data",
    icon: "fa-solid fa-face-viewfinder",
    title: "Facial & Biometric Data",
    shortDesc: "Consented facial imagery and video collected around defined project specifications.",
    applications: "Face recognition, liveness, anti-spoofing, deepfake detection, identity verification",
    heroText: "We design participant-based collection programs around customer-defined requirements, including capture conditions, devices, activities, demographic targets, consent procedures and delivery specifications.",
    supports: [
      "Face recognition and verification models",
      "Liveness detection and anti-spoofing research",
      "Deepfake and synthetic media detection",
      "Digital human and avatar training pipelines",
      "Identity verification systems"
    ],
    categories: [
      { title: "Selfie Images", desc: "Single or multi-angle selfie capture under defined conditions." },
      { title: "Facial Videos", desc: "Short video sequences for temporal and liveness-related research." },
      { title: "Head Poses", desc: "Structured pose variation across defined angles." },
      { title: "Facial Expressions", desc: "Expression sets for emotion and behavior modeling." },
      { title: "Lighting Variation", desc: "Controlled lighting conditions for robustness testing." },
      { title: "Device Variation", desc: "Capture across multiple device and camera types." },
      { title: "Identity Verification", desc: "Project-based capture for identity-matching research." },
      { title: "Liveness-Related Research", desc: "Sequences designed to support liveness model training." },
      { title: "Anti-Spoofing Research", desc: "Spoof and presentation-attack research scenarios." },
      { title: "Deepfake Detection", desc: "Data designed to support detection model development." }
    ],
    disclaimer: "Custom collection is available based on project requirements. No public biometric upload is required through this website.",
    ctaLabel: "Discuss Facial Data Collection"
  },
  {
    slug: "computer-vision-data",
    icon: "fa-solid fa-camera-viewfinder",
    title: "Computer Vision Data",
    shortDesc: "Structured image and video data for detection, segmentation and recognition models.",
    applications: "Object detection, scene understanding, segmentation, visual recognition",
    heroText: "We build image and video collection programs designed around the objects, scenes, environments and conditions your computer vision models need to learn.",
    supports: [
      "Object detection and classification",
      "Scene understanding and segmentation",
      "Visual recognition and search",
      "Retail, industrial and outdoor vision systems"
    ],
    categories: [
      { title: "Object-Centric Capture", desc: "Structured capture of defined objects across conditions." },
      { title: "Scene Variation", desc: "Indoor, outdoor, urban and rural environment coverage." },
      { title: "Multi-Angle Capture", desc: "Multiple viewpoints for consistent object representation." },
      { title: "Condition Variation", desc: "Lighting, weather and occlusion variation." },
      { title: "Sequential Frames", desc: "Frame sequences to support tracking-related research." },
      { title: "Custom Annotation Sets", desc: "Bounding boxes, segmentation or keypoint annotation." }
    ],
    disclaimer: "Collection scope, environments and annotation are defined per project specification.",
    ctaLabel: "Discuss Computer Vision Data"
  },
  {
    slug: "image-data",
    icon: "fa-solid fa-image",
    title: "Image Data",
    shortDesc: "Custom photographic datasets captured to defined specifications.",
    applications: "Classification, visual search, quality inspection, generative model training",
    heroText: "We coordinate photographic collection programs across participants, environments and devices to match the visual conditions your models require.",
    supports: [
      "Image classification and tagging models",
      "Visual search and retrieval systems",
      "Quality inspection and defect detection",
      "Generative and multimodal model training"
    ],
    categories: [
      { title: "Single-Subject Images", desc: "Focused image capture of a defined subject or category." },
      { title: "Environment Sets", desc: "Location- and setting-based image collection." },
      { title: "Condition Variation", desc: "Lighting, angle and background variation." },
      { title: "Paired/Sequence Images", desc: "Before-after or sequential image sets." },
      { title: "Device Variation", desc: "Capture across a defined set of camera or phone models." }
    ],
    disclaimer: "Image categories, volumes and metadata are defined per project.",
    ctaLabel: "Discuss Image Data Collection"
  },
  {
    slug: "video-data",
    icon: "fa-solid fa-video",
    title: "Video Data",
    shortDesc: "Structured video capture for temporal, activity and multimodal AI models.",
    applications: "Activity recognition, temporal modeling, multimodal AI, video understanding",
    heroText: "We coordinate video collection programs across participants, activities and environments, with metadata and annotation designed around your model requirements.",
    supports: [
      "Activity and gesture recognition",
      "Temporal and sequence modeling",
      "Multimodal (audio-visual) AI systems",
      "Video understanding and captioning models"
    ],
    categories: [
      { title: "Short-Form Clips", desc: "Brief structured video sequences for defined activities." },
      { title: "Long-Form Sessions", desc: "Extended capture sessions for continuous behavior." },
      { title: "Multi-Camera Sets", desc: "Synchronized capture from multiple viewpoints." },
      { title: "Audio-Visual Pairs", desc: "Video with synchronized audio for multimodal training." },
      { title: "Scenario-Based Capture", desc: "Scripted or semi-scripted activity scenarios." }
    ],
    disclaimer: "Video length, format and annotation requirements are defined per project.",
    ctaLabel: "Discuss Video Data Collection"
  },
  {
    slug: "egocentric-data",
    icon: "fa-solid fa-glasses",
    title: "Egocentric Data",
    shortDesc: "First-person perspective video and sensor data for wearable and spatial AI.",
    applications: "AR/VR, wearable devices, spatial computing, human-object interaction",
    heroText: "We coordinate first-person, wearable-device collection programs to support spatial computing, AR/VR and human-object interaction research.",
    supports: [
      "AR/VR perception models",
      "Wearable device and smart-glasses applications",
      "Spatial computing and scene mapping",
      "Human-object and human-environment interaction research"
    ],
    categories: [
      { title: "First-Person Video", desc: "Wearable-camera capture of daily or task-based activity." },
      { title: "Hand-Object Interaction", desc: "Egocentric footage focused on manipulation tasks." },
      { title: "Indoor Navigation", desc: "First-person movement through indoor environments." },
      { title: "Task-Based Scenarios", desc: "Structured task sequences from a first-person view." }
    ],
    disclaimer: "Devices, environments and task scripts are defined per project specification.",
    ctaLabel: "Discuss Egocentric Data Collection"
  },
  {
    slug: "robotics-physical-ai",
    icon: "fa-solid fa-robot",
    title: "Robotics & Physical AI",
    shortDesc: "Real-world interaction and environment data for embodied and robotic AI.",
    applications: "Manipulation, navigation, embodied AI, human-robot interaction",
    heroText: "We coordinate real-world data collection for robotics and physical AI teams, covering environments, objects, human interaction and task execution.",
    supports: [
      "Robotic manipulation and grasping models",
      "Navigation and mapping systems",
      "Embodied AI and simulation-to-real transfer",
      "Human-robot interaction research"
    ],
    categories: [
      { title: "Environment Capture", desc: "Structured capture of physical environments and layouts." },
      { title: "Object Interaction", desc: "Human or robotic manipulation of defined objects." },
      { title: "Navigation Sequences", desc: "Movement paths through defined physical spaces." },
      { title: "Human-Robot Interaction", desc: "Recorded interaction scenarios for behavior modeling." }
    ],
    disclaimer: "Environments, objects and task design are defined per project specification.",
    ctaLabel: "Plan a Robotics Data Pilot"
  },
  {
    slug: "autonomous-driving",
    icon: "fa-solid fa-car-side",
    title: "Autonomous Driving",
    shortDesc: "Real-world driving and road-environment data for autonomous vehicle systems.",
    applications: "Perception, path planning, driver monitoring, road-condition modeling",
    heroText: "We coordinate road and vehicle data collection programs to support perception, planning and driver-monitoring systems, designed around customer routes, vehicles and sensor configurations.",
    supports: [
      "Perception and object detection for AV systems",
      "Path planning and scenario modeling",
      "Driver monitoring and in-cabin systems",
      "Road-condition and infrastructure modeling"
    ],
    categories: [
      { title: "On-Road Video", desc: "Forward, rear or multi-camera driving footage." },
      { title: "In-Cabin Capture", desc: "Driver-facing footage for monitoring research." },
      { title: "Route Variation", desc: "Urban, highway and rural route coverage." },
      { title: "Condition Variation", desc: "Weather, lighting and traffic-density variation." }
    ],
    disclaimer: "Vehicle, sensor and route specifications are defined per project.",
    ctaLabel: "Discuss Driving Data"
  },
  {
    slug: "human-activity",
    icon: "fa-solid fa-person-walking",
    title: "Human Activity Data",
    shortDesc: "Structured human movement and activity data across real-world settings.",
    applications: "Activity recognition, fitness/health AI, behavior modeling, safety monitoring",
    heroText: "We coordinate structured activity-capture programs across participants and environments to support movement, behavior and safety-related AI models.",
    supports: [
      "Activity and movement recognition models",
      "Fitness, health and wellness AI",
      "Workplace and public-safety monitoring research",
      "General behavior modeling"
    ],
    categories: [
      { title: "Scripted Activities", desc: "Defined activity sets performed by participants." },
      { title: "Natural Behavior Capture", desc: "Less-scripted, natural activity sequences." },
      { title: "Multi-Participant Scenarios", desc: "Group or interaction-based activity capture." },
      { title: "Environment Variation", desc: "Indoor, outdoor and workplace activity settings." }
    ],
    disclaimer: "Activity scripts and environments are defined per project specification.",
    ctaLabel: "Discuss Activity Data Collection"
  },
  {
    slug: "custom-data-collection",
    icon: "fa-solid fa-sliders",
    title: "Custom Data Collection",
    shortDesc: "A collection program designed entirely around your model's requirements.",
    applications: "Any project that does not fit a standard category",
    heroText: "When a project does not fit a standard category, we design a collection program from scratch — participants, environments, devices, metadata, annotation and delivery format built around your specification.",
    supports: [
      "Novel or emerging AI model categories",
      "Multimodal combinations of image, video, audio and sensor data",
      "Highly specific demographic, geographic or device requirements",
      "Research projects requiring a bespoke methodology"
    ],
    categories: [
      { title: "Requirement Definition", desc: "We work with you to define the exact data specification." },
      { title: "Methodology Design", desc: "A collection methodology built for your project alone." },
      { title: "Pilot Validation", desc: "A small pilot to validate the approach before scaling." },
      { title: "Scaled Delivery", desc: "Full-scale collection once the methodology is validated." }
    ],
    disclaimer: "Every custom project begins with a defined specification and, where appropriate, a pilot.",
    ctaLabel: "Discuss a Custom Collection"
  }
];

const industriesData = [
  { name: "AI & Machine Learning", icon: "fa-solid fa-brain", desc: "Training and validation data for foundation and applied ML models." },
  { name: "Computer Vision", icon: "fa-solid fa-camera-viewfinder", desc: "Image and video data for detection, segmentation and recognition systems." },
  { name: "Robotics & Physical AI", icon: "fa-solid fa-robot", desc: "Real-world interaction data for embodied and robotic systems." },
  { name: "Autonomous Vehicles", icon: "fa-solid fa-car-side", desc: "Road, driver and environment data for autonomous driving systems." },
  { name: "Identity & Biometrics", icon: "fa-solid fa-fingerprint", desc: "Consented facial and biometric data for identity systems." },
  { name: "Deepfake Detection", icon: "fa-solid fa-shield-halved", desc: "Data designed to support synthetic media detection research." },
  { name: "Digital Humans", icon: "fa-solid fa-user-astronaut", desc: "Facial and motion data for avatar and digital human pipelines." },
  { name: "Multimodal AI", icon: "fa-solid fa-layer-group", desc: "Combined image, video, audio and sensor data for multimodal models." }
];

window.solutionsData = solutionsData;
window.industriesData = industriesData;
