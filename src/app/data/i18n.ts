// Bilingual content for the Renukai Consultants website.
// Structural data (icons, images, category keys, stat values, process numbers,
// nav hrefs, client logos) lives in `data/index.ts`. Only user-visible TEXT is
// stored here, in both English ("en") and Marathi ("mr"). Components zip the two
// together by index, so the arrays below MUST stay aligned with the structural
// arrays in `data/index.ts`.

export type Language = "en" | "mr";

interface TitleDesc {
  title: string;
  desc: string;
}

interface ProjectText {
  title: string;
  location: string;
  services: string;
  client: string;
}

export interface SiteContent {
  nav: string[]; // aligned with NAV_LINKS
  navCta: string;
  mobileCta: string;
  chooseTheme: string;

  gate: {
    welcome: string;
    title: string;
    subtitle: string;
    englishLabel: string;
    englishSub: string;
    marathiLabel: string;
    marathiSub: string;
    hint: string;
  };

  hero: {
    badge: string;
    headlinePre: string;
    headlineAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };

  stats: string[]; // aligned with STATS

  about: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    p1: string;
    p2: string;
    blocks: { label: string; text: string }[]; // Mission / Vision / Values
    trustedTop: string;
    trustedBottom: string;
    projectsLabel: string;
    citiesLabel: string;
  };

  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: TitleDesc[]; // aligned with SERVICES
  };

  whyUs: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    stats: { val: string; lbl: string }[];
    items: TitleDesc[]; // aligned with WHY_US
  };

  team: {
    eyebrow: string;
    title: string;
    role: string;
    dept: string;
    quals: string;
    highrise: string;
    education: string;
    residential: string;
    commercial: string;
    steel: string;
    linkedin: string;
  };

  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: { key: string; label: string }[]; // key matches data category / "All"
    categories: Record<string, string>; // English key -> display label
    items: ProjectText[]; // aligned with PROJECTS
  };

  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: TitleDesc[]; // aligned with PROCESS_STEPS
  };

  clients: {
    eyebrow: string;
    title: string;
    subtitle: string;
    names: string[]; // aligned with CLIENTS
  };

  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formHeading: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    serviceRequired: string;
    selectService: string;
    serviceOptions: string[];
    projectDescription: string;
    projectPlaceholder: string;
    sending: string;
    send: string;
    errorMsg: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    info: { label: string; sub: string }[]; // aligned with contact info items
    whatsapp: string;
  };

  footer: {
    brandDesc: string;
    quickLinks: string;
    services: string;
    contactDetails: string;
    address1: string;
    address2: string;
    officeHoursLabel: string;
    officeHours: string;
    copyright: string;
    tagline: string;
  };
}

const en: SiteContent = {
  nav: ["Home", "About", "Services", "Projects", "Team", "Process", "Contact"],
  navCta: "Get Consultation",
  mobileCta: "Request Consultation",
  chooseTheme: "Choose Theme",

  gate: {
    welcome: "Welcome to",
    title: "Renukai Consultants & Constructions",
    subtitle: "Please choose your preferred language to continue.",
    englishLabel: "English",
    englishSub: "Continue in English",
    marathiLabel: "मराठी",
    marathiSub: "मराठीत पुढे जा",
    hint: "You can change the language anytime from the menu bar.",
  },

  hero: {
    badge: "Renukai Consultants & Constructions",
    headlinePre: "Building Strong Foundations for a",
    headlineAccent: "Better Tomorrow",
    subtitle:
      "Professional Structural Consulting & Designing, RCC Design, Construction Consulting, Project Management, and Engineering Solutions for Residential, Commercial, and Industrial Projects.",
    ctaPrimary: "Request Consultation",
    ctaSecondary: "View Projects",
    scroll: "Scroll",
  },

  stats: ["Projects Completed", "Cities Served", "Quality Assured"],

  about: {
    eyebrow: "About Renukai Consultants & Constructions",
    titleLine1: "Engineering Excellence,",
    titleLine2: "Built on Trust",
    p1: "Renukai Consultants & Constructions (RCC) is a leading structural consulting & designing firm. We specialize in the complete structural lifecycle — from concept design and analysis through construction supervision and quality certification.",
    p2: "Our firm has successfully delivered over 150 projects spanning Residential Apartments, Commercial Complexes, Industrial Structures, and critical infrastructure including railway station buildings across Maharashtra and beyond.",
    blocks: [
      { label: "Mission", text: "Delivering safe, efficient, and economical structural solutions that stand the test of time." },
      { label: "Vision", text: "To be Maharashtra's most trusted structural consulting & designing practice, known for precision and integrity." },
      { label: "Values", text: "Safety First · Technical Excellence · Client Commitment · Timely Delivery" },
    ],
    trustedTop: "Trusted",
    trustedBottom: "Consultants",
    projectsLabel: "Projects",
    citiesLabel: "Cities",
  },

  services: {
    eyebrow: "What We Do",
    title: "Our Engineering Services",
    subtitle: "Comprehensive structural consulting & designing solutions tailored to every project scale and complexity.",
    learnMore: "Learn more",
    items: [
      { title: "RCC Structural Design", desc: "Complete reinforced cement concrete structural design for residential, commercial, and institutional buildings — including slabs, beams, columns, footings, and staircases as per IS 456 and NBC standards." },
      { title: "Steel Structural Design", desc: "Heavy-duty industrial sheds, warehouses, and pre-engineered building steel structural design." },
      { title: "Construction Supervision", desc: "On-site quality supervision ensuring construction conforms to approved structural drawings and standards." },
      { title: "Project Management", desc: "End-to-end project management including scheduling, resource planning, and progress monitoring (PMC Services)." },
      { title: "Site Inspection", desc: "Detailed structural site inspections, condition assessments, and structural audit reports for existing buildings." },
      { title: "Retrofitting & Rehabilitation", desc: "Strengthening of distressed structures using FRP jacketing, column jacketing, and modern repair techniques." },
      { title: "BIM Services", desc: "Building Information Modeling (BIM) for coordinated 3D structural models, clash detection, quantity take-offs, and seamless collaboration across architectural, MEP, and structural disciplines — delivered in Revit and compatible formats." },
      { title: "Post Tensioning & Pre Tensioning Works", desc: "Design and supervision of post-tensioned and pre-tensioned slabs, beams, and bridge elements for long spans and load-intensive structures." },
      { title: "Structural Auditing", desc: "Comprehensive structural audit of existing buildings including condition assessment, load-carrying capacity evaluation, crack mapping, and written audit certification." },
    ],
  },

  whyUs: {
    eyebrow: "Why Us",
    titleLine1: "Why Choose RCC",
    titleLine2: "Structural Consulting?",
    subtitle: "Clients across Maharashtra trust us because we combine deep technical expertise with a genuine commitment to their project's success. Here is what sets us apart:",
    stats: [
      { val: "IS 456", lbl: "Code Compliance" },
      { val: "ETABS", lbl: "Advanced Analysis" },
      { val: "24/7", lbl: "Project Support" },
      { val: "Zero", lbl: "Structural Failures" },
    ],
    items: [
      { title: "Certified Engineers", desc: "Our team comprises licensed structural engineers with advanced degrees and professional certifications from leading institutions." },
      { title: "Proven Expertise", desc: "Executing complex structural projects across Residential, Commercial, Industrial, and Infrastructure sectors." },
      { title: "Quality Assurance", desc: "Rigorous design checks, peer reviews, and adherence to IS codes, NBC, and international standards on every project." },
      { title: "Timely Delivery", desc: "We respect project schedules. Systematic planning and monitoring ensure your structural designs are delivered on time." },
      { title: "Cost-Effective Solutions", desc: "Optimized structural designs that reduce material usage while maintaining full safety — saving significant construction costs." },
      { title: "Modern Engineering Practices", desc: "Latest software tools, BIM workflows, and contemporary design methodologies for precision engineering outcomes." },
    ],
  },

  team: {
    eyebrow: "The People Behind the Work",
    title: "Meet the Principal Consultant",
    role: "Principal Consultant",
    dept: "RCC",
    quals: "BE, ME, BJS-MCJ",
    highrise: "High-rise RCC structures up to G+42 stories with post-tensioned slabs and seismic-zone design compliance.",
    education: "Bachelor of Engineering · Master of Engineering · BJS-MCJ",
    residential: "Extensive experience in residential projects — bungalows, row houses, and multi-storey apartments across Maharashtra.",
    commercial: "Delivered structural designs for commercial complexes, IT parks, hospitals, and public infrastructure including railway buildings.",
    steel: "Proficient in steel structure design — pre-engineered buildings (PEB), industrial sheds, mezzanine floors, steel trusses, and composite steel-concrete systems using STAAD Pro and ETABS.",
    linkedin: "LinkedIn",
  },

  projects: {
    eyebrow: "Our Portfolio",
    title: "Completed Projects",
    subtitle: "A showcase of structural consulting & designing projects delivered across Residential, Commercial, and Infrastructure sectors.",
    filters: [
      { key: "All", label: "All" },
      { key: "Residential", label: "Residential" },
      { key: "Commercial", label: "Commercial" },
      { key: "Industrial", label: "Industrial" },
    ],
    categories: { Residential: "Residential", Commercial: "Commercial", Industrial: "Industrial" },
    items: [
      { title: "OM Builders – P+6 Residential Apartment", location: "Maharashtra", services: "RCC Structural Design, Construction Supervision", client: "OM Builders" },
      { title: "84 Elite – Township Development", location: "Latur, Maharashtra", services: "Structural Design, Project Management, CAD Drafting", client: "JK Associates" },
      { title: "Multi-Storey Residential Complex", location: "Solapur, Maharashtra", services: "RCC Structural Design, Site Inspection", client: "Confidential" },
      { title: "Structural Audit – Institutional Building", location: "Latur, Maharashtra", services: "Structural Auditing, Post-Tensioning Works, PMC Services", client: "Confidential" },
      { title: "MIT – Multi-Storey Institutional Complex", location: "Latur, Maharashtra", services: "RCC Structural Design, 3D Visualization, PMC Services", client: "MIT" },
      { title: "Rajmane Commercial Apartment", location: "Latur, Maharashtra", services: "RCC Structural Design, 3D Visualization", client: "Rajmane" },
      { title: "Panchshil Developers – G+5 Residential Apartment", location: "Latur, Maharashtra", services: "RCC Structural Design, Construction Supervision", client: "Panchshil Developers" },
      { title: "Tushar Birajdar – G+5 Residential Apartment", location: "Deoni, Maharashtra", services: "RCC Structural Design, Construction Supervision", client: "Tushar Birajdar" },
      { title: "Udaigiri Heights – Commercial Complex", location: "Latur, Maharashtra", services: "RCC Structural Design, Construction Supervision", client: "Mr. Kiranji Pensalwar" },
    ],
  },

  process: {
    eyebrow: "How We Work",
    title: "Our Engineering Process",
    subtitle: "A systematic 7-step process that ensures every project is delivered to the highest technical standards, on time and within budget.",
    steps: [
      { title: "Initial Consultation", desc: "Understanding client requirements, project scope, site conditions, and budget constraints." },
      { title: "Site Analysis", desc: "Soil investigation review, site visit, and assessment of existing structural conditions." },
      { title: "Structural Planning", desc: "Conceptual structural layout, system selection, and load calculation framework." },
      { title: "Design Development", desc: "Detailed structural analysis and design using STAAD Pro / ETABS and IS code provisions." },
      { title: "Approval Process", desc: "Preparation of drawings and documentation for local authority / municipal approvals." },
      { title: "Execution Support", desc: "On-site support, RFI responses, and technical guidance during construction phase." },
      { title: "Quality Verification", desc: "Final structural inspection, certification, and project closeout documentation." },
    ],
  },

  clients: {
    eyebrow: "Who We Work With",
    title: "Our Trusted Clients",
    subtitle: "Proud to have partnered with leading institutions and organisations across infrastructure, education, and industry.",
    names: [
      "JSPM Latur",
      "Public Works Department, Maharashtra",
      "Indian Railways",
      "Topse",
      "Maharashtra Institute of Technology",
      "KUND per square unit",
    ],
  },

  contact: {
    eyebrow: "Get In Touch",
    title: "Contact Us",
    subtitle: "Ready to start your structural consulting project? Reach out for a free initial consultation.",
    formHeading: "Request a Consultation",
    fullName: "Full Name *",
    fullNamePlaceholder: "Your full name",
    email: "Email Address *",
    emailPlaceholder: "your@email.com",
    phone: "Phone Number",
    phonePlaceholder: "+91 98765 43210",
    serviceRequired: "Service Required",
    selectService: "Select a service",
    serviceOptions: ["RCC Structural Design", "Steel Structural Design", "Project Management", "Structural Audit", "Retrofitting", "Other"],
    projectDescription: "Project Description",
    projectPlaceholder: "Briefly describe your project, location, and requirements...",
    sending: "Sending…",
    send: "Send Message",
    errorMsg: "Failed to send message. Please try again or contact us directly.",
    successTitle: "Message Received!",
    successText: "Thank you for reaching out. Our team will contact you within 24 hours.",
    sendAnother: "Send Another Message",
    info: [
      { label: "Phone / WhatsApp", sub: "Mon–Sat, 9am–7pm" },
      { label: "Email", sub: "We respond within 24 hours" },
      { label: "Instagram", sub: "Follow us for project updates" },
      { label: "Office Address", sub: "Latur, Maharashtra, India – 413512" },
    ],
    whatsapp: "Chat on WhatsApp",
  },

  footer: {
    brandDesc: "Professional structural consulting & designing firm serving clients across Maharashtra with integrity and engineering excellence.",
    quickLinks: "Quick Links",
    services: "Services",
    contactDetails: "Contact Details",
    address1: "Latur, Maharashtra,",
    address2: "India – 413512",
    officeHoursLabel: "Office Hours:",
    officeHours: "Monday – Saturday: 9:00 AM – 7:00 PM",
    copyright: "© 2026 Renukai Consultants & Constructions. All rights reserved.",
    tagline: "Structural Consulting & Designing · RCC Design · Construction Consulting · Maharashtra",
  },
};

const mr: SiteContent = {
  nav: ["मुख्यपृष्ठ", "आमच्याबद्दल", "सेवा", "प्रकल्प", "आमची टीम", "कार्यपद्धती", "संपर्क"],
  navCta: "सल्ला घ्या",
  mobileCta: "सल्ल्यासाठी विनंती करा",
  chooseTheme: "थीम निवडा",

  gate: {
    welcome: "स्वागत आहे",
    title: "रेणुकाई कन्सल्टंट्स अँड कन्स्ट्रक्शन्स",
    subtitle: "पुढे जाण्यासाठी कृपया आपली पसंतीची भाषा निवडा.",
    englishLabel: "English",
    englishSub: "इंग्रजीमध्ये पुढे जा",
    marathiLabel: "मराठी",
    marathiSub: "मराठीत पुढे जा",
    hint: "आपण मेनू बारमधून कधीही भाषा बदलू शकता.",
  },

  hero: {
    badge: "रेणुकाई कन्सल्टंट्स अँड कन्स्ट्रक्शन्स",
    headlinePre: "उज्ज्वल भविष्यासाठी भक्कम",
    headlineAccent: "पाया उभारत आहोत",
    subtitle:
      "निवासी, व्यावसायिक आणि औद्योगिक प्रकल्पांसाठी व्यावसायिक स्ट्रक्चरल सल्ला व डिझाइन, आरसीसी डिझाइन, बांधकाम सल्ला, प्रकल्प व्यवस्थापन आणि अभियांत्रिकी उपाय.",
    ctaPrimary: "सल्ल्यासाठी विनंती करा",
    ctaSecondary: "प्रकल्प पहा",
    scroll: "स्क्रोल करा",
  },

  stats: ["पूर्ण झालेले प्रकल्प", "सेवा दिलेली शहरे", "गुणवत्ता हमी"],

  about: {
    eyebrow: "रेणुकाई कन्सल्टंट्स अँड कन्स्ट्रक्शन्स बद्दल",
    titleLine1: "अभियांत्रिकी उत्कृष्टता,",
    titleLine2: "विश्वासावर उभारलेली",
    p1: "रेणुकाई कन्सल्टंट्स अँड कन्स्ट्रक्शन्स (आरसीसी) ही एक आघाडीची स्ट्रक्चरल सल्ला व डिझाइन कंपनी आहे. संकल्पना डिझाइन व विश्लेषणापासून ते बांधकाम पर्यवेक्षण व गुणवत्ता प्रमाणनापर्यंत संपूर्ण स्ट्रक्चरल प्रक्रियेत आम्ही तज्ज्ञ आहोत.",
    p2: "महाराष्ट्र व त्यापलीकडे निवासी अपार्टमेंट्स, व्यावसायिक संकुले, औद्योगिक संरचना आणि रेल्वे स्थानक इमारतींसह महत्त्वाच्या पायाभूत सुविधांचा समावेश असलेले १५० हून अधिक प्रकल्प आमच्या कंपनीने यशस्वीरीत्या पूर्ण केले आहेत.",
    blocks: [
      { label: "ध्येय", text: "काळाच्या कसोटीवर टिकणारे सुरक्षित, कार्यक्षम व किफायतशीर स्ट्रक्चरल उपाय देणे." },
      { label: "दृष्टी", text: "अचूकता व प्रामाणिकपणासाठी ओळखली जाणारी महाराष्ट्रातील सर्वात विश्वासार्ह स्ट्रक्चरल सल्ला व डिझाइन कंपनी बनणे." },
      { label: "मूल्ये", text: "सुरक्षा प्रथम · तांत्रिक उत्कृष्टता · ग्राहक बांधिलकी · वेळेवर वितरण" },
    ],
    trustedTop: "विश्वासार्ह",
    trustedBottom: "सल्लागार",
    projectsLabel: "प्रकल्प",
    citiesLabel: "शहरे",
  },

  services: {
    eyebrow: "आम्ही काय करतो",
    title: "आमच्या अभियांत्रिकी सेवा",
    subtitle: "प्रत्येक प्रकल्पाच्या आकार व जटिलतेनुसार तयार केलेले सर्वसमावेशक स्ट्रक्चरल सल्ला व डिझाइन उपाय.",
    learnMore: "अधिक जाणून घ्या",
    items: [
      { title: "आरसीसी स्ट्रक्चरल डिझाइन", desc: "निवासी, व्यावसायिक व संस्थात्मक इमारतींसाठी संपूर्ण आरसीसी (प्रबलित सिमेंट काँक्रीट) स्ट्रक्चरल डिझाइन — IS 456 व NBC मानकांनुसार स्लॅब, बीम, कॉलम, फूटिंग व जिने यांचा समावेश." },
      { title: "स्टील स्ट्रक्चरल डिझाइन", desc: "मोठ्या क्षमतेच्या औद्योगिक शेड, गोदामे व प्री-इंजिनिअर्ड इमारतींचे स्टील स्ट्रक्चरल डिझाइन." },
      { title: "बांधकाम पर्यवेक्षण", desc: "बांधकाम मंजूर स्ट्रक्चरल आराखडे व मानकांनुसार होत असल्याची खात्री करणारे ऑन-साइट गुणवत्ता पर्यवेक्षण." },
      { title: "प्रकल्प व्यवस्थापन", desc: "वेळापत्रक, संसाधन नियोजन व प्रगती देखरेखीसह संपूर्ण प्रकल्प व्यवस्थापन (PMC सेवा)." },
      { title: "साइट तपासणी", desc: "विद्यमान इमारतींसाठी सविस्तर स्ट्रक्चरल साइट तपासणी, स्थिती मूल्यांकन व स्ट्रक्चरल ऑडिट अहवाल." },
      { title: "रेट्रोफिटिंग व पुनर्वसन", desc: "FRP जॅकेटिंग, कॉलम जॅकेटिंग व आधुनिक दुरुस्ती तंत्रांचा वापर करून कमकुवत संरचनांचे बळकटीकरण." },
      { title: "BIM सेवा", desc: "समन्वित 3D स्ट्रक्चरल मॉडेल्स, क्लॅश डिटेक्शन, क्वांटिटी टेक-ऑफ आणि वास्तुशास्त्र, MEP व स्ट्रक्चरल विभागांमध्ये सुलभ समन्वयासाठी बिल्डिंग इन्फॉर्मेशन मॉडेलिंग (BIM) — Revit व सुसंगत स्वरूपात." },
      { title: "पोस्ट टेन्शनिंग व प्री टेन्शनिंग कामे", desc: "लांब स्पॅन व जड भार असलेल्या संरचनांसाठी पोस्ट-टेन्शन्ड व प्री-टेन्शन्ड स्लॅब, बीम व पूल घटकांचे डिझाइन व पर्यवेक्षण." },
      { title: "स्ट्रक्चरल ऑडिटिंग", desc: "स्थिती मूल्यांकन, भार-वहन क्षमता मूल्यमापन, क्रॅक मॅपिंग व लेखी ऑडिट प्रमाणनासह विद्यमान इमारतींचे सर्वसमावेशक स्ट्रक्चरल ऑडिट." },
    ],
  },

  whyUs: {
    eyebrow: "आम्हीच का",
    titleLine1: "आरसीसी स्ट्रक्चरल सल्ला",
    titleLine2: "का निवडावा?",
    subtitle: "महाराष्ट्रभरातील ग्राहक आमच्यावर विश्वास ठेवतात कारण आम्ही सखोल तांत्रिक तज्ज्ञता त्यांच्या प्रकल्पाच्या यशासाठीच्या खऱ्या बांधिलकीसोबत जोडतो. आम्हाला वेगळे ठरवणारे हे आहे:",
    stats: [
      { val: "IS 456", lbl: "कोड अनुपालन" },
      { val: "ETABS", lbl: "प्रगत विश्लेषण" },
      { val: "24/7", lbl: "प्रकल्प सहाय्य" },
      { val: "शून्य", lbl: "स्ट्रक्चरल अपयश" },
    ],
    items: [
      { title: "प्रमाणित अभियंते", desc: "आमच्या टीममध्ये आघाडीच्या संस्थांकडून प्रगत पदव्या व व्यावसायिक प्रमाणपत्रे असलेले परवानाधारक स्ट्रक्चरल अभियंते आहेत." },
      { title: "सिद्ध तज्ज्ञता", desc: "निवासी, व्यावसायिक, औद्योगिक व पायाभूत सुविधा क्षेत्रांतील जटिल स्ट्रक्चरल प्रकल्प राबवणे." },
      { title: "गुणवत्ता हमी", desc: "प्रत्येक प्रकल्पात कठोर डिझाइन तपासणी, समवयस्क पुनरावलोकन व IS कोड, NBC व आंतरराष्ट्रीय मानकांचे पालन." },
      { title: "वेळेवर वितरण", desc: "आम्ही प्रकल्प वेळापत्रकांचा आदर करतो. पद्धतशीर नियोजन व देखरेखीमुळे आपले स्ट्रक्चरल डिझाइन वेळेवर वितरित होते." },
      { title: "किफायतशीर उपाय", desc: "पूर्ण सुरक्षितता राखत साहित्याचा वापर कमी करणारे अनुकूलित स्ट्रक्चरल डिझाइन — बांधकाम खर्चात लक्षणीय बचत." },
      { title: "आधुनिक अभियांत्रिकी पद्धती", desc: "अचूक अभियांत्रिकी निष्कर्षांसाठी नवीनतम सॉफ्टवेअर साधने, BIM कार्यप्रवाह व आधुनिक डिझाइन पद्धती." },
    ],
  },

  team: {
    eyebrow: "कामामागील माणसे",
    title: "मुख्य सल्लागारांची भेट घ्या",
    role: "मुख्य सल्लागार",
    dept: "आरसीसी",
    quals: "BE, ME, BJS-MCJ",
    highrise: "पोस्ट-टेन्शन्ड स्लॅब व भूकंप-क्षेत्र डिझाइन अनुपालनासह G+42 मजल्यांपर्यंतच्या उंच आरसीसी संरचना.",
    education: "अभियांत्रिकी पदवी · अभियांत्रिकी पदव्युत्तर · BJS-MCJ",
    residential: "निवासी प्रकल्पांमध्ये व्यापक अनुभव — महाराष्ट्रभरातील बंगले, रो हाऊस व बहुमजली अपार्टमेंट्स.",
    commercial: "व्यावसायिक संकुले, आयटी पार्क, रुग्णालये व रेल्वे इमारतींसह सार्वजनिक पायाभूत सुविधांसाठी स्ट्रक्चरल डिझाइन पूर्ण केले.",
    steel: "स्टील स्ट्रक्चर डिझाइनमध्ये प्रवीण — STAAD Pro व ETABS वापरून प्री-इंजिनिअर्ड इमारती (PEB), औद्योगिक शेड, मेझानाइन मजले, स्टील ट्रस व संयुक्त स्टील-काँक्रीट प्रणाली.",
    linkedin: "LinkedIn",
  },

  projects: {
    eyebrow: "आमचा पोर्टफोलिओ",
    title: "पूर्ण झालेले प्रकल्प",
    subtitle: "निवासी, व्यावसायिक व पायाभूत सुविधा क्षेत्रांत पूर्ण केलेल्या स्ट्रक्चरल सल्ला व डिझाइन प्रकल्पांचे प्रदर्शन.",
    filters: [
      { key: "All", label: "सर्व" },
      { key: "Residential", label: "निवासी" },
      { key: "Commercial", label: "व्यावसायिक" },
      { key: "Industrial", label: "औद्योगिक" },
    ],
    categories: { Residential: "निवासी", Commercial: "व्यावसायिक", Industrial: "औद्योगिक" },
    items: [
      { title: "OM बिल्डर्स – P+6 निवासी अपार्टमेंट", location: "महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, बांधकाम पर्यवेक्षण", client: "OM बिल्डर्स" },
      { title: "84 एलिट – टाउनशिप विकास", location: "लातूर, महाराष्ट्र", services: "स्ट्रक्चरल डिझाइन, प्रकल्प व्यवस्थापन, CAD ड्राफ्टिंग", client: "JK असोसिएट्स" },
      { title: "बहुमजली निवासी संकुल", location: "सोलापूर, महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, साइट तपासणी", client: "गोपनीय" },
      { title: "स्ट्रक्चरल ऑडिट – संस्थात्मक इमारत", location: "लातूर, महाराष्ट्र", services: "स्ट्रक्चरल ऑडिटिंग, पोस्ट-टेन्शनिंग कामे, PMC सेवा", client: "गोपनीय" },
      { title: "MIT – बहुमजली संस्थात्मक संकुल", location: "लातूर, महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, 3D व्हिज्युअलायझेशन, PMC सेवा", client: "MIT" },
      { title: "राजमाने व्यावसायिक अपार्टमेंट", location: "लातूर, महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, 3D व्हिज्युअलायझेशन", client: "राजमाने" },
      { title: "पंचशील डेव्हलपर्स – G+5 निवासी अपार्टमेंट", location: "लातूर, महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, बांधकाम पर्यवेक्षण", client: "पंचशील डेव्हलपर्स" },
      { title: "तुषार बिराजदार – G+5 निवासी अपार्टमेंट", location: "देवणी, महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, बांधकाम पर्यवेक्षण", client: "तुषार बिराजदार" },
      { title: "उदयगिरी हाइट्स – व्यावसायिक संकुल", location: "लातूर, महाराष्ट्र", services: "आरसीसी स्ट्रक्चरल डिझाइन, बांधकाम पर्यवेक्षण", client: "श्री. किरणजी पेनसळवार" },
    ],
  },

  process: {
    eyebrow: "आम्ही कसे काम करतो",
    title: "आमची अभियांत्रिकी प्रक्रिया",
    subtitle: "प्रत्येक प्रकल्प सर्वोच्च तांत्रिक मानकांनुसार, वेळेवर व बजेटमध्ये पूर्ण होईल याची खात्री देणारी पद्धतशीर 7-टप्प्यांची प्रक्रिया.",
    steps: [
      { title: "प्रारंभिक सल्लामसलत", desc: "ग्राहकाच्या गरजा, प्रकल्प व्याप्ती, साइट परिस्थिती व बजेट मर्यादा समजून घेणे." },
      { title: "साइट विश्लेषण", desc: "माती तपासणी पुनरावलोकन, साइट भेट व विद्यमान स्ट्रक्चरल स्थितीचे मूल्यांकन." },
      { title: "स्ट्रक्चरल नियोजन", desc: "संकल्पनात्मक स्ट्रक्चरल आराखडा, प्रणाली निवड व भार गणना आराखडा." },
      { title: "डिझाइन विकास", desc: "STAAD Pro / ETABS व IS कोड तरतुदी वापरून सविस्तर स्ट्रक्चरल विश्लेषण व डिझाइन." },
      { title: "मंजुरी प्रक्रिया", desc: "स्थानिक प्राधिकरण / महापालिका मंजुरीसाठी आराखडे व कागदपत्रांची तयारी." },
      { title: "अंमलबजावणी सहाय्य", desc: "बांधकाम टप्प्यात ऑन-साइट सहाय्य, RFI उत्तरे व तांत्रिक मार्गदर्शन." },
      { title: "गुणवत्ता पडताळणी", desc: "अंतिम स्ट्रक्चरल तपासणी, प्रमाणन व प्रकल्प समाप्ती कागदपत्रे." },
    ],
  },

  clients: {
    eyebrow: "आम्ही कोणासोबत काम करतो",
    title: "आमचे विश्वासार्ह ग्राहक",
    subtitle: "पायाभूत सुविधा, शिक्षण व उद्योग क्षेत्रांतील आघाडीच्या संस्था व संघटनांसोबत भागीदारी केल्याचा अभिमान आहे.",
    names: [
      "JSPM लातूर",
      "सार्वजनिक बांधकाम विभाग, महाराष्ट्र",
      "भारतीय रेल्वे",
      "Topse",
      "महाराष्ट्र इन्स्टिट्यूट ऑफ टेक्नॉलॉजी",
      "KUND per square unit",
    ],
  },

  contact: {
    eyebrow: "संपर्कात राहा",
    title: "आमच्याशी संपर्क साधा",
    subtitle: "आपला स्ट्रक्चरल सल्ला प्रकल्प सुरू करण्यास तयार आहात? मोफत प्रारंभिक सल्ल्यासाठी संपर्क साधा.",
    formHeading: "सल्ल्यासाठी विनंती करा",
    fullName: "पूर्ण नाव *",
    fullNamePlaceholder: "आपले पूर्ण नाव",
    email: "ईमेल पत्ता *",
    emailPlaceholder: "your@email.com",
    phone: "दूरध्वनी क्रमांक",
    phonePlaceholder: "+91 98765 43210",
    serviceRequired: "आवश्यक सेवा",
    selectService: "सेवा निवडा",
    serviceOptions: ["आरसीसी स्ट्रक्चरल डिझाइन", "स्टील स्ट्रक्चरल डिझाइन", "प्रकल्प व्यवस्थापन", "स्ट्रक्चरल ऑडिट", "रेट्रोफिटिंग", "इतर"],
    projectDescription: "प्रकल्प वर्णन",
    projectPlaceholder: "आपला प्रकल्प, स्थान व गरजा थोडक्यात सांगा...",
    sending: "पाठवत आहे…",
    send: "संदेश पाठवा",
    errorMsg: "संदेश पाठवण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा किंवा थेट आमच्याशी संपर्क साधा.",
    successTitle: "संदेश मिळाला!",
    successText: "संपर्क साधल्याबद्दल धन्यवाद. आमची टीम 24 तासांत आपल्याशी संपर्क साधेल.",
    sendAnother: "आणखी एक संदेश पाठवा",
    info: [
      { label: "दूरध्वनी / व्हॉट्सअ‍ॅप", sub: "सोम–शनि, सकाळी 9 – सायं 7" },
      { label: "ईमेल", sub: "आम्ही 24 तासांत उत्तर देतो" },
      { label: "Instagram", sub: "प्रकल्प अपडेट्ससाठी आम्हाला फॉलो करा" },
      { label: "कार्यालय पत्ता", sub: "लातूर, महाराष्ट्र, भारत – 413512" },
    ],
    whatsapp: "व्हॉट्सअ‍ॅपवर चॅट करा",
  },

  footer: {
    brandDesc: "प्रामाणिकपणा व अभियांत्रिकी उत्कृष्टतेसह महाराष्ट्रभरातील ग्राहकांना सेवा देणारी व्यावसायिक स्ट्रक्चरल सल्ला व डिझाइन कंपनी.",
    quickLinks: "जलद दुवे",
    services: "सेवा",
    contactDetails: "संपर्क तपशील",
    address1: "लातूर, महाराष्ट्र,",
    address2: "भारत – 413512",
    officeHoursLabel: "कार्यालयीन वेळ:",
    officeHours: "सोमवार – शनिवार: सकाळी 9:00 – सायंकाळी 7:00",
    copyright: "© 2026 रेणुकाई कन्सल्टंट्स अँड कन्स्ट्रक्शन्स. सर्व हक्क राखीव.",
    tagline: "स्ट्रक्चरल सल्ला व डिझाइन · आरसीसी डिझाइन · बांधकाम सल्ला · महाराष्ट्र",
  },
};

export const CONTENT: Record<Language, SiteContent> = { en, mr };
