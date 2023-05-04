"use strict";
const filter_btn = document.querySelector(".filter-link");
let block = document.querySelector(".main_block");

let a = [
  {
    main_img: `/img/aimsdelhi.jpeg`,
    logo_img: `/img/aiims-delhi-logo.jpeg`,
    cl_name: "AIIMS-Delhi",
    state_name: "Delhi",
  },
  {
    main_img: `/img/aiims-bhopal.jpeg`,
    logo_img: `/img/aiims-bhopal-logo.jpeg`,
    cl_name: "AIIMS-Bhopal",
    state_name: "Madhya Pradesh",
  },
  {
    main_img: `/img/aimms-bhubneswaer.jpeg`,
    logo_img: `/img/aiims-bhubn-logo.png`,
    cl_name: "AIMMS-Bhubneswar",
    state_name: "Odisha",
  },
  {
    main_img: `/img/aiims-jodhpur.jpeg`,
    logo_img: "/img/aiims-jodhpur-logo.jpeg",
    cl_name: "AIIMS-Jodpur",
    state_name: "Rajasthan",
  },
  {
    main_img: `/img/aiims-risikiesh.jpeg`,
    logo_img: `/img/aiims-risikesh-logo.jpeg`,
    cl_name: "AIIMS-Rishikesh",
    state_name: "Uttarakhand",
  },
  {
    main_img: `/img/aiims-mangalagiri.jpeg`,
    logo_img: `/img/aiims-mangalagiri-logo.jpeg`,
    cl_name: "AIIMS-Mangalagiri",
    state_name: "Andhra Pradesh",
  },
  {
    main_img: `/img/b-m-c.jpeg`,
    logo_img: `/img/b-m-c-logo.jpeg`,
    cl_name: "BANGALORE MEDICAL COLLEGE ",
    state_name: "Karnataka",
  },

  {
    main_img: `/img/maluna-azad.jpeg`,
    logo_img: `/img/maluna-azad-logo.jpeg`,
    cl_name: "MALUNA AZAD MEDICAL COLLEGE",
    state_name: "Delhi",
  },
  {
    main_img: `/img/madras-medical-college-chennai.jpeg`,
    logo_img: `/img/m-m-c-c-logo.jpeg`,
    cl_name: "MADARAS MADECAL COLLEGE",
    state_name: "Tamil Nadu",
  },
  {
    main_img: `/img/jipmer.jpeg`,
    logo_img: `/img/jipmer-logo.jpeg`,
    cl_name: "JIPMER",
    state_name: "Puducherry",
  },
  {
    main_img: `/img/bjmc-pune.jpeg`,
    logo_img: `/img/bjms-logo.jpeg`,
    cl_name: "BAHIRAMJEE JIJIBHAI MEDICAL COLLEGE",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/rml-newdelhi.jpeg`,
    logo_img: `/img/rml-logo.jpeg`,
    cl_name: "DR RML HOSPITAL ",
    state_name: "Delhi",
  },
  {
    main_img: `/img/sms-jaipur.jpeg`,
    logo_img: `/img/sms-logo.png`,
    cl_name: "S.M.S. MEDICAL COLLEGE",
    state_name: "Rajasthan",
  },
  {
    main_img: `/img/seth-gs.jpeg`,
    logo_img: `/img/seth-gs-logo.jpeg`,
    cl_name: "SETH G.S. MEDICAL COLLEGE",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/ucoms.jpeg`,
    logo_img: `/img/ucoms-logo.jpg`,
    cl_name: "UNIVERSITY COLLEGE OF MEDICAL SCIENCES",
    state_name: "Delhi",
  },
  {
    main_img: `/img/vmmc.jpeg`,
    logo_img: `/img/vmmc-logo.png`,
    cl_name: "VMMC AND SAFDARJUNG HOSPITAL",
    state_name: "Delhi",
  },
  {
    main_img: `/img/lady-h-m-newdelhi.jpeg`,
    logo_img: `/img/lady-h-m-newdelhi-logo.jpeg`,
    cl_name: "LADY HARDINGE MEDICAL COLLEGE",
    state_name: "DELHI",
  },
  {
    main_img: `/img/bjmc-pune.jpeg`,
    logo_img: `/img/bjms-logo.jpeg`,
    cl_name: "BAHIRAMJEE JIJIBHAI MEDICAL COLLEGE",
    state_name: "MAHARASTRA",
  },
  {
    main_img: `/img/rml-newdelhi.jpeg`,
    logo_img: `/img/rml-logo.jpeg`,
    cl_name: "DR RML HOSPITAL ",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/sms-jaipur.jpeg`,
    logo_img: `/img/sms-logo.png`,
    cl_name: "S.M.S. MEDICAL COLLEGE",
    state_name: "RAJASTHAN",
  },
  {
    main_img: `/img/seth-gs.jpeg`,
    logo_img: `/img/seth-gs-logo.jpeg`,
    cl_name: "SETH G.S. MEDICAL COLLEGE",
    state_name: "MAHARASTRA",
  },
  {
    main_img: `/img/ucoms.jpeg`,
    logo_img: `/img/ucoms-logo.jpg`,
    cl_name: "UNIVERSITY COLLEGE OF MEDICAL SCIENCES",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/vmmc.jpeg`,
    logo_img: `/img/vmmc-logo.png`,
    cl_name: "VMMC AND SAFDARJUNG HOSPITAL",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/lady-h-m-newdelhi.jpeg`,
    logo_img: `/img/lady-h-m-newdelhi-logo.jpeg`,
    cl_name: "LADY HARDINGE MEDICAL COLLEGE",
    state_name: "New DELHI",
  },
  {
    main_img: `/img/106_college.jpeg`,
    logo_img: `/img/106_logo.jpeg`,
    cl_name: `RANI DURGAVATI MEDICAL COLLEGE`,
    state_name: `UTTAR PRADESH`,
  },
  {
    main_img: `/img/107_college.jpeg`,
    logo_img: `/img/107_logo.jpeg`,
    cl_name: `DR.RAJENDRA PRASAD MEDICAL COLLEGE`,
    state_name: `HIMACHAL PRADESH`,
  },
  {
    main_img: `/img/108 _college.jpeg`,
    logo_img: `/img/108_logo.png`,
    cl_name: `DR.YASH PRAMAR GOVT. MEDICAL COLLEGE`,
    state_name: `HIMACHAL PRADESH`,
  },
  {
    main_img: `/img/109_college.jpeg`,
    logo_img: `/img/109_logo.jpeg`,
    cl_name: `GOVT. MEDICAL COLLEGE HAMIRPUR`,
    state_name: `HIMACHAL PRADESH`,
  },
  {
    main_img: `/img/110_college.jpeg `,
    logo_img: `/img/110_logo.jpeg`,
    cl_name: `PT,JAWAHARLAL NEHRU MEDICAL COLLEGE`,
    state_name: `HIMACHAL PRADESH`,
  },
  {
    main_img: `/img/111_college.jpeg `,
    logo_img: `/img/111_logo.png`,
    cl_name: `SH. LAL BAHADUR SHASHTRI GOVT. MEDICAL COLLEGE`,
    state_name: `HIMACHAL PRADESH`,
  },
  {
    main_img: `/img/112_college.jpeg `,
    logo_img: `/img/112_logo.jpeg`,
    cl_name: `GR MEDICAL COLLEGE GWALIOR`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/113_college.jpeg `,
    logo_img: `/img/113_logo.jpeg`,
    cl_name: `NETAJI SUBASH CHANDRA BOSE MEDICAL COLLEGE`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/114_college.jpeg`,
    logo_img: `/img/114_logo.jpeg`,
    cl_name: `BUNDELKHAND MEDICAL COLLEGE`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/115_college.jpeg`,
    logo_img: `/img/115_logo.jpeg`,
    cl_name: `S.S. MEDICAL COLLEGE`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/116_college.jpeg `,
    logo_img: `/img/116_logo.jpeg`,
    cl_name: `GOVT. MEDICAL COLLEGE RATLAM`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/117_college.jpeg `,
    logo_img: `/img/117_logo.jpeg`,
    cl_name: `GOVT. MEDICAL COLLEGE KHANDWA`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/118_college.jpeg `,
    logo_img: `/img/118_logo.jpeg`,
    cl_name: `ATAL VIHARI BAJPAYEE GOVT. MEDICAL COLLEGE`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/119_college.jpeg `,
    logo_img: `/img/119_logo.jpeg`,
    cl_name: `GOVT. MEDICAL COLLEGE SHIVPURI`,
    state_name: `Madhya Pradesh`,
  },

  {
    main_img: `/img/135_college.jpeg `,
    logo_img: `/img/135_logo.jpeg`,
    cl_name: ``,
    state_name: ``,
  },
  {
    main_img: `/img/136_college.jpeg `,
    logo_img: `/img/136_logo.jpeg`,
    cl_name: ``,
    state_name: ``,
  },
  {
    main_img: `/img/137_college.jpeg `,
    logo_img: `/img/137_logo.jpeg`,
    cl_name: ``,
    state_name: ``,
  },
  {
    main_img: `/img/138_college.jpeg `,
    logo_img: `/img/138_logo.jpeg`,
    cl_name: ``,
    state_name: ``,
  },
  {
    main_img: `/img/139_college.jpeg `,
    logo_img: `/img/139_logo.jpeg`,
    cl_name: ``,
    state_name: ``,
  },
  {
    main_img: `/img/140_college.jpeg `,
    logo_img: `/img/140_logo.jpeg`,
    cl_name: ``,
    state_name: ``,
  },
  {
    main_img: `/img/246_c.jpg `,
    logo_img: `/img/246_l.jpg`,
    cl_name: `TOOTHUKUDI MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/247_c.jpg `,
    logo_img: `/img/247_l.jpg`,
    cl_name: `GTMC,THIRUVARUR`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/248_c.jpg `,
    logo_img: `/img/248_l.jpg`,
    cl_name: `CHENGALPATTU MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/249_c.jpg `,
    logo_img: `/img/249_l.jpg`,
    cl_name: `THANJAVUR MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/250_c.jpg `,
    logo_img: `/img/250_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Tirunelveli`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/251_c.jpg `,
    logo_img: `/img/251_l.jpg`,
    cl_name: `GOVT MOHAN KUMARAMANGALAM MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/252_c.jpg `,
    logo_img: `/img/252_l.jpg`,
    cl_name: `KANYAKUMARI GOVT MEDICAL COLLEGE,Asaripallam`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/253_c.jpg `,
    logo_img: `/img/253_l.jpg`,
    cl_name: `THENI GOVT MEDICAL COLLEGE,Theni`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/254_c.jpg `,
    logo_img: `/img/254_l.jpg`,
    cl_name: `GOVT DHARAMPURI MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/255_c.jpg `,
    logo_img: `/img/255_l.jpg`,
    cl_name: `GVMC,Villupuram`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/256_c.jpg `,
    logo_img: `/img/256_l.png`,
    cl_name: `GOVT SIVGANGAL MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/257_c.jpg `,
    logo_img: `/img/257_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Omandurar`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/258_c.jpg `,
    logo_img: `/img/258_l.jpg`,
    cl_name: `GOVT PUDUKKOTTAI MEDICAL COLLEGE`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/259_c.jpg `,
    logo_img: `/img/259_l.png`,
    cl_name: `GOVT MEDICAL COLLEGE,Karur`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/260_c.jpg `,
    logo_img: `/img/260_l.png`,
    cl_name: `GOVT MEDICAL COLLEGE ESI AND HOSPITAL,Coimbatore`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/261_c.jpg `,
    logo_img: `/img/261_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Ariyalur`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/262_c.jpg `,
    logo_img: `/img/262_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Dindigul`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/263_c.jpg `,
    logo_img: `/img/263_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Kallakurichi`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/264_c.jpg `,
    logo_img: `/img/264_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Krishnagiri`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/265_c.jpg `,
    logo_img: `/img/265_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Nagapattinam`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/266_c.jpg `,
    logo_img: `/img/266_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Namakkal`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/267_c.jpg `,
    logo_img: `/img/267_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Nilgiris`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/268_c.jpg `,
    logo_img: `/img/268_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Ramanathapuram`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/269_c.jpg `,
    logo_img: `/img/269_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Thiruvallur`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/270_c.jpg `,
    logo_img: `/img/270_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Triuppur`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/271_c.jpg `,
    logo_img: `/img/271_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Virudhunagar`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/272_c.jpg `,
    logo_img: `/img/272_l.svg`,
    cl_name: `MAHARAJA K.C GAJAPATI M.C,Brahmapur`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/273_c.jpg `,
    logo_img: `/img/273_l.png`,
    cl_name: `V.S.S MEDICAL COLLEGE,Burla`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/274_c.jpg `,
    logo_img: `/img/274_l.jpg`,
    cl_name: `PT RAGHUNATH MURMU MED. COLLEGE`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/275_c.jpg `,
    logo_img: `/img/275_l.jpg`,
    cl_name: `SAHEED LAXMAN NAYAK MED. COLLEGE AND HOSPITAL`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/276_c.jpg `,
    logo_img: `/img/276_l.jpg`,
    cl_name: `BHIMA BHOI MEDICAL COLLEGE AND HOSPITAL`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/277_c.jpg `,
    logo_img: `/img/277_l.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE AND HOSPITAL`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/278_c.jpg `,
    logo_img: `/img/278_l.png`,
    cl_name: `SRI JAGANNATH MEDICAL COLLEGE & HOSPITAL`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/279_c.jpg `,
    logo_img: `/img/279_l.jpg`,
    cl_name: `TOMO RIBA INSTITUTE HEALTH AND MEDICAL SCIENCE`,
    state_name: `Arunchal Pradesh`,
  },
  {
    main_img: `/img/280_c.jpg `,
    logo_img: `/img/280_l.png`,
    cl_name: `BEGIONAL INSTITUTE OF MEDICAL SCIENCE`,
    state_name: `Manipur`,
  },
  {
    main_img: `/img/211_c.jpg `,
    logo_img: `/img/211.jpg`,
    cl_name: `KAKATIYA MEDICAL COLLEGE,Warangal`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/212_c.jpg `,
    logo_img: `/img/212.jpg`,
    cl_name: `SVIMS-SRI PADMAVATHI MEDICAL COLLEGE FOR WOMEN,Tirupati`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/213_c.jpg `,
    logo_img: `/img/213.jpg`,
    cl_name: `RANGARAYA MEDICAL COLLEGE,Kakinada`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/214_c.jpg `,
    logo_img: `/img/214.jpg`,
    cl_name: `ACST GOVT MEDICAL COLLLEGE,Nellore`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/215_c.jpg `,
    logo_img: `/img/215.jpg`,
    cl_name: `RAJIV GANDHI INSTITUTE OF MEDICA SCIENCES,KADAPA`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/216_c.jpg `,
    logo_img: `/img/216.jpg`,
    cl_name: `RIMS SRIKAKULAM`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/217_c.jpg `,
    logo_img: `/img/217.jpg`,
    cl_name: `RIMS Ongole`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/218_c.jpg `,
    logo_img: `/img/218.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Ananthapuram`,
    state_name: `Andra pradesh`,
  },
  {
    main_img: `/img/219_c.jpg `,
    logo_img: `/img/219.jpg`,
    cl_name: `OSMANIA MEDICAL COLLEGE KOTI`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/220_c.jpg `,
    logo_img: `/img/220.jpg`,
    cl_name: `RAJIV GANDHI INSTITUTE OF ADILABAD`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/221_c.jpg`,
    logo_img: `/img/221.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Mahabubangar`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/222_c.jpg`,
    logo_img: `/img/222.png`,
    cl_name: `GOVT MEDICAL COLLEGE Nizamabad Khaleelwadi`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/223_c.jpg `,
    logo_img: `/img/223.png`,
    cl_name: `GOVT MEDICAL COLLEGE Siddipt`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/224_c.jpg `,
    logo_img: `/img/224.png`,
    cl_name: `GOVT MEDICAL COLLEGE Suryapet`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/225_c.jpg `,
    logo_img: `/img/225.png`,
    cl_name: `GOVT MEDICAL COLLEGE Nalgonda`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/226_c.jpg `,
    logo_img: `/img/226.png`,
    cl_name: `GOVT MEDICAL COLLEGE,Hyderabad`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/227_c.jpg `,
    logo_img: `/img/227.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Kozhikode`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/228_c.jpg `,
    logo_img: `/img/228.png`,
    cl_name: `GOVT MEDICAL COLLEGE,Thiruvananthapuram`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/229_c.jpg `,
    logo_img: `/img/229.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Kottayam`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/230_c.jpg `,
    logo_img: `/img/230.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Thrissur`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/231_c.jpg `,
    logo_img: `/img/231.jpg`,
    cl_name: `T.D MEDICAL COLLEGE,Allappuzha `,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/232_c.jpg `,
    logo_img: `/img/232.png`,
    cl_name: `GOVT MEDICAL COLLEGE,Ernakulam`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/233_c.jpg `,
    logo_img: `/img/233.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,Kannur`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/234_c.jpg `,
    logo_img: `/img/234.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE Manjeri`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/235_c.jpg `,
    logo_img: `/img/235.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,ESIC,Kollam`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/236_c.jpg `,
    logo_img: `/img/236.jpg`,
    cl_name: `GOVT MEDICAL COLLEGE,palakad`,
    state_name: `Kerala`,
  },
  {
    main_img: `/img/237_c.jpg`,
    logo_img: `/img/237.jpg`,
    cl_name: `MADRAS MEDICAL COLLEGE,Chennai`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/238_c.jpg `,
    logo_img: `/img/238.png`,
    cl_name: `STANLEY MEDICAL COLLEGE,Chennai`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/239_c.jpg `,
    logo_img: `/img/239.jpg`,
    cl_name: `GOVT. KILPAUK MEDICAL COLLEGE,Chennai`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/240_c.jpg `,
    logo_img: `/img/240.jpg`,
    cl_name: `MADURAI MEDICAL COLLEGE, Madurai`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/241_c.jpg`,
    logo_img: `/img/241.jpeg`,
    cl_name: `K.A.P. VISWANATHAM GOVT MEDICAL COLLEGE,Tiruchirapalli`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/242_c.jpg `,
    logo_img: `/img/242.jpg`,
    cl_name: `GOVT VELLORE MEDICAL COLLEGE,Vellore`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/243_c.jpg`,
    logo_img: `/img/243.jpg`,
    cl_name: `ESI-PGIMSR,Chennai `,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/244_c.jpg `,
    logo_img: `/img/244.png`,
    cl_name: `COIMBATORE MEDICAL COLLEGE,Coimbatore`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/245_c.jpg`,
    logo_img: `/img/245.jpg`,
    cl_name: `THIRUVANNAMALAI MEDICAL COLLEGE, Thiruvannamalai`,
    state_name: `Tamil Nadu`,
  },
  {
    main_img: `/img/3.jpg`,
    logo_img: `/img/3L.jpeg`,
    cl_name: `JIPMER Karaikal`,
    state_name: `Puducherry`,
  },
  {
    main_img: `/img/5.jpeg`,
    logo_img: `/img/5L.jpeg`,
    cl_name: `LADY HARDINGE MEDICAL COLLEGE,New Delhi`,
    state_name: `Delhi`,
  },
  {
    main_img: `/img/6.jpeg   `,
    logo_img: `/img/6L.jpeg`,
    cl_name: `UNIVERSITY COLLEGE OF MEDICAL SCIENCE,Delhi`,
    state_name: `Delhi`,
  },
  {
    main_img: `/img/7.jpeg   `,
    logo_img: `/img/7l.png`,
    cl_name: `VMMC AND SAFDARJUNG HOSPITAL, New dElhi`,
    state_name: `Delhi`,
  },
  {
    main_img: `/img/8.jpeg`,
    logo_img: `/img/8l.png`,
    cl_name: `INST.OF MED. SCIENCE BHU,Varanshi`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/9.jpeg   `,
    logo_img: `/img/9l.png`,
    cl_name: `GOVT MEDICAL COLLEGE AND HOSPITAL,Chandigarh`,
    state_name: `Chandigarh`,
  },
  {
    main_img: `/img/10.jpeg`,
    logo_img: `/img/10l.png`,
    cl_name: `AIIMS Bhopal`,
    state_name: `Madhya Pradesh`,
  },
  {
    main_img: `/img/11.jpeg`,
    logo_img: `/img/11l.png`,
    cl_name: `AIIMS Jodhpur`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/12.jpeg`,
    logo_img: `/img/12l.png`,
    cl_name: `AIIMS Bhubaneswer`,
    state_name: `Odisha`,
  },
  {
    main_img: `/img/13.jpeg`,
    logo_img: `/img/13l.png`,
    cl_name: `AIIMS Rishikesh`,
    state_name: `Uttarakhand`,
  },
  {
    main_img: `/img/14.jpeg`,
    logo_img: `/img/14l.png`,
    cl_name: `AIIMS Patna`,
    state_name: `Bihar`,
  },
  {
    main_img: `/img/15.jpeg`,
    logo_img: `/img/15l.png`,
    cl_name: `AIIMS Raipur`,
    state_name: `Chhattisgarh`,
  },
  {
    main_img: `/img/16.jpeg`,
    logo_img: `/img/16l.png`,
    cl_name: `ATAL BIHARI VAJPAYEE INSTITUTE OF MEDICAL SCIENCE & D.R RML HOSPITAL`,
    state_name: `Delhi`,
  },
  {
    main_img: `/img/17.jpeg`,
    logo_img: `/img/17l.jpeg`,
    cl_name: `NDMC MEDICAL COLLEGE`,
    state_name: `Delhi`,
  },
  {
    main_img: `/img/18.jpeg`,
    logo_img: `/img/18l.jpeg`,
    cl_name: `DR B.S.A MEDICAL COLLEGE`,
    state_name: `Delhi`,
  },
  {
    main_img: `/img/19.jpeg`,
    logo_img: `/img/19l.jpeg`,
    cl_name: `S.M.S MEDICAL COLLEGE Jaipur`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/20.jpeg`,
    logo_img: `/img/20l.png`,
    cl_name: `RUHS COLLEGE OF MEDICAL SCIENCE`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/21.jpeg`,
    logo_img: `/img/21l.jpeg`,
    cl_name: `SARDAR PATEL MEDICAL COLLEGE Bikaner`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/22.jpeg`,
    logo_img: `/img/22l.png`,
    cl_name: `DR S.N MEDICAL COLLEGE`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/23.jpeg`,
    logo_img: `/img/23l.jpeg`,
    cl_name: `JAWAHAR LAL NEHRU MEDICAL COLLEGE Ajmer`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/24.jpeg`,
    logo_img: `/img/24l.jpeg`,
    cl_name: `R.N.T MEDICAL COLLEGE Udaipur`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/25.jpeg`,
    logo_img: `/img/25l.jpeg`,
    cl_name: `JHALAWAR MEDICAL COLLEGE,Jhalawar`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/26.jpg`,
    logo_img: `/img/26l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Kota`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/27.jpeg`,
    logo_img: `/img/27l.png`,
    cl_name: `AIIMS, Nagpur`,
    state_name: `Maharastra`,
  },
  {
    main_img: `/img/28.jpeg`,
    logo_img: `/img/28l.png`,
    cl_name: `AIIMS Bathinda`,
    state_name: `Punjab`,
  },
  {
    main_img: `/img/29.jpeg`,
    logo_img: `/img/29l.png`,
    cl_name: `AIIMS Gorakhpur`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/30.jpeg`,
    logo_img: `/img/30l.png`,
    cl_name: `AIIMS RAI Bareli`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/31.jpeg`,
    logo_img: `/img/31l.png`,
    cl_name: `AIIMS KALYANI`,
    state_name: `West Bengal`,
  },
  {
    main_img: `/img/32.jpeg`,
    logo_img: `/img/32l.jpeg`,
    cl_name: `B.J MEDICAL COLLEGE`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/33.jpeg`,
    logo_img: `/img/33l.png`,
    cl_name: `GOVERMENT MEDICAL COLLEGE,Surat`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/34.jpeg`,
    logo_img: `/img/34l.jpeg`,
    cl_name: `MEDICAL COLLEGE Baroda`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/35.jpeg`,
    logo_img: `/img/35l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE Amritsar `,
    state_name: `Punjab`,
  },

  {
    main_img: `/img/71-college.jpg `,
    logo_img: `/img/71 logo.png`,
    cl_name: `GANDHI MEDICAL COLLEGE,Secunderabad`,
    state_name: `Telangana`,
  },
  {
    main_img: `/img/73 campus.jpg`,
    logo_img: `/img/73.jpg`,
    cl_name: `AIIMS,Deogarh`,
    state_name: `Jharkhand`,
  },
  {
    main_img: `/img/74c.jpg `,
    logo_img: `/img/74 l.png`,
    cl_name: `AIIMS Mangalagiri`,
    state_name: `Andra Pradesh`,
  },
  {
    main_img: `/img/75 c.jpg `,
    logo_img: `/img/75l.png`,
    cl_name: `AIIMS Telangana Bibi Nagar`,
    state_name: `Telengana`,
  },
  {
    main_img: `/img/76 c.jpg `,
    logo_img: `/img/76 l.png`,
    cl_name: `AIIMS Bilaspur`,
    state_name: `Himamchal Pradesh`,
  },
  {
    main_img: `/img/77c.png `,
    logo_img: `/img/77l.png`,
    cl_name: `AIIMS Rajkot`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/78c.jpg `,
    logo_img: `/img/78l.png`,
    cl_name: `AIIMS Guahawati`,
    state_name: `Assam`,
  },
  {
    main_img: `/img/79c.jpg `,
    logo_img: `/img/79l.png`,
    cl_name: `AIIMS Jummu & Kashmir`,
    state_name: `Jammu`,
  },
  {
    main_img: `/img/80c.jpg `,
    logo_img: `/img/80.png`,
    cl_name: `SHRI KALYAN GOVT MEDICAL COLLEGE Sikar`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/82c.jpg`,
    logo_img: `/img/82l.png`,
    cl_name: `GOVERMENT MEDICAL COLLEGE,Baratpur `,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/83c.jpg `,
    logo_img: `/img/83l.jpg`,
    cl_name: `GOVERMENT MEDICAL COLLEGE,Bhilwara`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/86c.jpg `,
    logo_img: `/img/86l.png`,
    cl_name: `GOVERMENT MEDICAL COLLEGE,Dungapur`,
    state_name: `Rajasthan`,
  },
  {
    main_img: `/img/87c.jpg `,
    logo_img: `/img/87l.jpg`,
    cl_name: `MEDICAL COLLEGE,Bhavnagar`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/88c.jpg`,
    logo_img: `/img/88.jpg`,
    cl_name: `PT D.D.U MEDICAL COLLEGE,Rajkot`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/89.jpeg `,
    logo_img: `/img/89l.jpeg`,
    cl_name: `M.P SHAH MEDICAL COLLEGE,Jamnager`,
    state_name: `Gujrat`,
  },
  {
    main_img: `/img/90.jpeg `,
    logo_img: `/img/90l.png`,
    cl_name: `L.I.R.M MEDICAL COLLEGE,MEERUT`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/91.jpeg `,
    logo_img: `/img/91l.jpeg`,
    cl_name: `MAHARANI LAXMI MEDICAL COLLEGE,JANSHI`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/92.jpeg `,
    logo_img: `/img/92l.jpeg`,
    cl_name: `B.R.D MEDICAL COLLEGE,Gorakhpur`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/93.jpeg `,
    logo_img: `/img/93 L.png`,
    cl_name: `UTTAR PRADESH UNIVERSITY OF MEDICAL SCIENCES SALFAL`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/94 .jpeg `,
    logo_img: `/img/94l.png`,
    cl_name: `MRA MEDICAL COLLEGE, Ambedkar Nagar`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/95 .jpeg `,
    logo_img: `/img/95l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Kannauj`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/96 l.jpeg `,
    logo_img: `/img/96.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,AZAMGARH`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/97.jpeg `,
    logo_img: `/img/97l.png`,
    cl_name: `SUH MAULANA MAHMOOD HASAN MEDICAL COLLEGE,Saharanpur`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/98.jpeg `,
    logo_img: `/img/98l.jpeg`,
    cl_name: `RAJKIYA MEDICAL COLLEGE,JALAUN`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/99.jpeg `,
    logo_img: `/img/99l.png`,
    cl_name: `GOVT MEDICAL COLLEGE,Firozabad`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/100.jpeg `,
    logo_img: `/img/100l.jpeg`,
    cl_name: `GOVT INSTITUTE OF MEDICAL SCIENCE,Kasna, `,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/101.jpeg `,
    logo_img: `/img/101l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Faizabad`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/102.jpeg `,
    logo_img: `/img/102l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Basti`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/103.jpeg`,
    logo_img: `/img/103l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Shahjhanpur`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/104.jpeg`,
    logo_img: `/img/104l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Bharaich`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/105.jpeg`,
    logo_img: `/img/105l.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Badaun`,
    state_name: `Uttar Pradesh`,
  },
  {
    main_img: `/img/aimsdelhi.jpeg`,
    logo_img: `/img/aiims-delhi-logo.jpeg`,
    cl_name: "AIIMS-Delhi",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/aiims-bhopal.jpeg`,
    logo_img: `/img/aiims-bhopal-logo.jpeg`,
    cl_name: "AIIMS-Bhopal",
    state_name: "Madhya-pradesh",
  },
  {
    main_img: `/img/aimms-bhubneswaer.jpeg`,
    logo_img: `/img/aiims-bhubn-logo.png`,
    cl_name: "AIMMS-Bhubneswar",
    state_name: "Orissa",
  },
  {
    main_img: `/img/aiims-jodhpur.jpeg`,
    logo_img: "/img/aiims-jodhpur-logo.jpeg",
    cl_name: "AIIMS-Jodpur",
    state_name: "Rajasthan",
  },
  {
    main_img: `/img/aiims-risikiesh.jpeg`,
    logo_img: `/img/aiims-risikesh-logo.jpeg`,
    cl_name: "AIIMS-Rishikesh",
    state_name: "Utrrakhand",
  },
  {
    main_img: `/img/aiims-mangalagiri.jpeg`,
    logo_img: `/img/aiims-mangalagiri-logo.jpeg`,
    cl_name: "AIIMS-Mangalagiri",
    state_name: "Andra-pradesh",
  },
  {
    main_img: `/img/b-m-c.jpeg`,
    logo_img: `/img/b-m-c-logo.jpeg`,
    cl_name: "BANGALORE MEDICAL COLLEGE ",
    state_name: "KARNATAKA",
  },

  {
    main_img: `/img/maluna-azad.jpeg`,
    logo_img: `/img/maluna-azad-logo.jpeg`,
    cl_name: "MALUNA AZAD MEDICAL COLLEGE",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/madras-medical-college-chennai.jpeg`,
    logo_img: `/img/m-m-c-c-logo.jpeg`,
    cl_name: "MADARAS MADECAL COLLEGE",
    state_name: "Tamilnadu",
  },
  {
    main_img: `/img/jipmer.jpeg`,
    logo_img: `/img/jipmer-logo.jpeg`,
    cl_name: "JIPMER",
    state_name: "Poducherry",
  },
  {
    main_img: `/img/bjmc-pune.jpeg`,
    logo_img: `/img/bjms-logo.jpeg`,
    cl_name: "BAHIRAMJEE JIJIBHAI MEDICAL COLLEGE",
    state_name: "MAHARASTRA",
  },
  {
    main_img: `/img/rml-newdelhi.jpeg`,
    logo_img: `/img/rml-logo.jpeg`,
    cl_name: "DR RML HOSPITAL ",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/sms-jaipur.jpeg`,
    logo_img: `/img/sms-logo.png`,
    cl_name: "S.M.S. MEDICAL COLLEGE",
    state_name: "RAJASTHAN",
  },
  {
    main_img: `/img/seth-gs.jpeg`,
    logo_img: `/img/seth-gs-logo.jpeg`,
    cl_name: "SETH G.S. MEDICAL COLLEGE",
    state_name: "MAHARASTRA",
  },
  {
    main_img: `/img/ucoms.jpeg`,
    logo_img: `/img/ucoms-logo.jpg`,
    cl_name: "UNIVERSITY COLLEGE OF MEDICAL SCIENCES",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/vmmc.jpeg`,
    logo_img: `/img/vmmc-logo.png`,
    cl_name: "VMMC AND SAFDARJUNG HOSPITAL",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/lady-h-m-newdelhi.jpeg`,
    logo_img: `/img/lady-h-m-newdelhi-logo.jpeg`,
    cl_name: "LADY HARDINGE MEDICAL COLLEGE",
    state_name: "New Delhi",
  },
  {
    main_img: `/img/36_c.jpg`,
    logo_img: `/img/36_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE PATIALA",
    state_name: "Punjab",
  },
  {
    main_img: `/img/37_c.jpg`,
    logo_img: `/img/37_l.jpg`,
    cl_name: "GURU GOVIND SINGH MEDICAL COLLEGEG, FARIDKOT,PUNJAB",
    state_name: "Punjab",
  },

  {
    main_img: `/img/39_c.jpg`,
    logo_img: `/img/39_l.jpg`,
    cl_name: "LOHIA INSTITUTE OF MEDICAL SCIENCE,LUCKNOW",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `/img/40_c.jpg`,
    logo_img: `/img/40_l.jpg`,
    cl_name: "SM MEDICAL COLLEGE ,AGRA",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `/img/41_c.jpg`,
    logo_img: `/img/41_l.jpg`,
    cl_name: "GSVM ,MEDICAL COLLEGE, KANPUR",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `/img/42_c.jpg`,
    logo_img: `/img/42_l.jpg`,
    cl_name: "MOTILAL NEHRU COLLEGE,ALLAHBAD",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `/img/43_c.jpg`,
    logo_img: `/img/43_l.jpg`,
    cl_name: "INDRA GANDHI MEDICAL COLLEGE , SHIMLA",
    state_name: "Himachal Pradesh",
  },
  {
    main_img: `/img/44_c.jpg`,
    logo_img: `/img/44_l.jpg`,
    cl_name: "GANDHI MEDICAL COLLEGE, BHOPAL",
    state_name: "Madhya Pradesh",
  },
  {
    main_img: `/img/45_c.jpg`,
    logo_img: `/img/45_l.jpg`,
    cl_name: "MGM ,MEDICAL COLLEGE,INDORE",
    state_name: "Madhya Pradesh",
  },
  {
    main_img: `/img/46_c.jpg`,
    logo_img: `/img/46_l.jpg`,
    cl_name: "SETH GS MEDICAL COLLEGE,MUMBAI",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/47_c.jpg`,
    logo_img: `/img/47_l.jpg`,
    cl_name: "GRAND MEDICAL COLLEGE ,MUMBAI",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/48_c.jpg`,
    logo_img: `/img/48_l.jpg`,
    cl_name: "TOPIWALA NATIONAL MEDICAL COLLEGE,MUMBAI",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/49_c.jpg`,
    logo_img: `/img/49_l.jpg`,
    cl_name: "LOK MANYA TILAK MUNICIPAL MEDICAL COLLEGE MUMBAI",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/50_c.jpg`,
    logo_img: `/img/50_l.jpg`,
    cl_name: "DR. RN COOPER GENERAL HOSPITAL MUMBAI",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/51_c.jpg`,
    logo_img: `/img/51_l.jpg`,
    cl_name: "BHAI RAM JI JI MEDICAL COLLEGE ,PUNE",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/52_c.jpg`,
    logo_img: `/img/52_l.jpg`,
    cl_name: "RAJIV GANDHI MEDICAL COLLEGE,THANE",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/53_c.jpg`,
    logo_img: `/img/53_l.jpg`,
    cl_name: "GOVT. MEDICAL COLLEGE ,NAGPUR ",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/54_c.jpg`,
    logo_img: `/img/54_l.jpg`,
    cl_name: "INDRA GANDHI MEDICAL COLLEGE ,NAGPUR",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/82_c.jpg`,
    logo_img: `/img/82_l.jpg`,
    cl_name: "NELGRIHMS ,SHILLONG",
    state_name: "Meghalaya",
  },
  {
    main_img: `/img/83_c.jpg`,
    logo_img: `/img/83_l.jpg`,
    cl_name: "ZORAM MEDICAL COLLEGE,FALKAWN",
    state_name: "Mizoram",
  },
  {
    main_img: `/img/84_c.jpg`,
    logo_img: `/img/84_l.jpg`,
    cl_name: "AGARTALA GOVT COLLEGE,AGARTALA",
    state_name: "Tripura",
  },
  {
    main_img: `/img/85_c.jpg`,
    logo_img: `/img/85_l.jpg`,
    cl_name:
      "ANDMAN AND NICOBAR ISLANDS INSTITUTE OF MEDICAL COLLEGE, PORTBLAIR",
    state_name: "Andaman and Nicobar",
  },
  {
    main_img: `/img/86_c.jpg`,
    logo_img: `/img/86_l.jpg`,
    cl_name: "INDIRA GANDHI MEDICAL COLLEGE, PUDUCHERRY",
    state_name: "Puducherry",
  },
  {
    main_img: `/img/87_c.jpg`,
    logo_img: `/img/87_l.jpg`,
    cl_name: "GHARWALE GOVT MEDICAL COLLEGE AND SCIENCE.SRINAGAR",
    state_name: "Uttrakhand",
  },
  {
    main_img: `/img/88_c.jpg`,
    logo_img: `/img/88_l.jpg`,
    cl_name: "UTTRANCHAL F HOSPITAL TRUST MC, HALDWANI",
    state_name: "Uttrakhand",
  },
  {
    main_img: `/img/89_c.jpg`,
    logo_img: `/img/89_l.png`,
    cl_name: "GOVT DOON MEDICAL COLLEGE, DEHRADUN",
    state_name: "Uttrakhand",
  },
  {
    main_img: `/img/90_c.jpg`,
    logo_img: `/img/90_l.jpg`,
    cl_name: "IRT PENUBURAL MEDICAL COLLEGE, PENUBURAL",
    state_name: "Tamil Nadu",
  },
  {
    main_img: `/img/91_c.jpg`,
    logo_img: `/img/91_l.jpg`,
    cl_name: "RAJAH MUPHIAH MEDICAL COLLEGE,ANMANALAL",
    state_name: "Tamil Nadu",
  },
  {
    main_img: `/img/120_c.jpg`,
    logo_img: `/img/120_l.jpg`,
    cl_name: "CHHINDWARA INSTITUTE OF MEDICAL SCIENCE, MADHYA PRADESH",
    state_name: "Madhya Pradesh",
  },
  {
    main_img: `/img/121_c.jpg`,
    logo_img: `/img/121_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE, DATIA",
    state_name: "Madhya Pradesh",
  },
  {
    main_img: `/img/122_c.jpg`,
    logo_img: `/img/122_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE, SHAHBOL",
    state_name: "Madhya Pradesh",
  },
  {
    main_img: `/img/123_c.jpg`,
    logo_img: `/img/123_l.jpg`,
    cl_name: "MG INSTITUTE OF MEDICAL SCIENCE, SEVAGRAM WARDHA",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/124_c.jpg`,
    logo_img: `/img/124_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE, AURANGABAD",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/125_c.jpg`,
    logo_img: `/img/125_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE, MIRAJ",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/126_c.jpg`,
    logo_img: `/img/126_l.jpg`,
    cl_name: "DR VAISHAMPAYAM MEMORIAL MEDICAL COLLEGE, SHOLAPUR",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/127_c.jpg`,
    logo_img: `/img/127_l.jpg`,
    cl_name: "DR SG MEDICAL COLLEGE, NANDED",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/128_c.jpg`,
    logo_img: `/img/128_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE, AKOLA",
    state_name: "Maharashtra",
  },

  {
    main_img: `/img/129_c.jpg`,
    logo_img: `/img/129_l.jpg`,
    cl_name: "SHRI BHAUSAHIB HIGHER GOVT MEDICAL COLLEGE, DHULE",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/130_c.jpg`,
    logo_img: `/img/130_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE, LATUR",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/131_c.jpg`,
    logo_img: `/img/131_l.jpg`,
    cl_name: "SHRI VASANT RAO NAIK GOVT MEDICAL COLLEGE,VATMAL",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/132_c.jpg`,
    logo_img: `/img/132_l.jpg`,
    cl_name: "SWAMI RAM ANAND TIRTH RURAL MEDICAL COLLEGE,AMBAJOGAL",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/133_c.jpg`,
    logo_img: `/img/133_l.jpg`,
    cl_name:
      "RAJSHREE CHHATRAPATI SHAHU MAHARAJ GOVT MEDICAL COLLEGE, KOHLAPUR",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/134_c.jpg`,
    logo_img: `/img/134_l.jpg`,
    cl_name: "GOVT MEDICAL COLLEGE AND HOSPITAL, JALGAON",
    state_name: "Maharashtra",
  },
  {
    main_img: `/img/141.jpeg`,
    logo_img: `/img/141l.jpeg`,
    cl_name: "DARBANGA MEDICAL COLLEGE,LAHERIASARAL",
    state_name: "Bihar",
  },
  {
    main_img: `/img/142_c.jpg`,
    logo_img: `/img/142.png`,
    cl_name: "SHRI KRISHNA MEDICAL COLLEGE, MUZAFARPUR",
    state_name: "Bihar",
  },
  {
    main_img: `/img/145l.png`,
    logo_img: `/img/145.png`,
    cl_name: "MURSIDABAD MEDICAL COLLEGE AND HOSPITAL MURSIDABAD",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/146.jpeg`,
    logo_img: `/img/146.png`,
    cl_name: "BURDWAN MEDICAL COLLEGE BURDWAN",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/147.png`,
    logo_img: `/img/147l.jpeg`,
    cl_name: "BANKURA SAMMILANI MEDIACAL COLLEGE BANKURA",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/148.jpeg`,
    logo_img: `/img/148l.png`,
    cl_name: "MALDA MIDICAL COLLEGE , MALDA",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/149.jpeg`,
    logo_img: `/img/149l.png`,
    cl_name: "NORTH BENGAL MEDICAL COLLEGE, DARJEELING",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/151.png`,
    logo_img: `/img/151l.jpeg`,
    cl_name: "MADINAPORE MEDICAL COLLEGE, MADINAPORE",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/152.jpeg`,
    logo_img: `/img/152l.png`,
    cl_name: "DIAMOND HARBOUR GOVT MEDICAL COLLEGE",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/153.jpeg`,
    logo_img: `/img/153l.png`,
    cl_name:
      "MAHARAJA JITENDRA NARAYAN MEDICAL COLLEGE AND HOSPITAL, COOCHBEHAR",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/155.png`,
    logo_img: `/img/155l.png`,
    cl_name: "RAMPURHAT GOVT MEDICAL COLLEGE, RAMPURHAT",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/156 pic.jpg`,
    logo_img: `/img/156 logo.png`,
    cl_name: "DEBEN MAHATA GOVT. MEDICAL COLLEGE AND HOSPITAL,PURUDIA",
    state_name: "West Bengal",
  },
  {
    main_img: `/img/157 pic.jpg`,
    logo_img: `/img/157 logo.png`,
    cl_name: "LT. B R K GOVT. MEDICAL COLLEGE JAGDALPUR",
    state_name: "Chhatisgarh",
  },
  {
    main_img: `/img/158 pic.jpg`,
    logo_img: `/img/158 logo.png`,
    cl_name: "LT. LAM GOVT. MEDICAL COLLEGE ,RAIGARH",
    state_name: "Chhatisgarh",
  },
  {
    main_img: `/img/159 pic.png`,
    logo_img: `/img/159 logo.png`,
    cl_name: "GOVT. MEDIAL COLLEGE, RAJNANDGAON",
    state_name: "Chhatisgarh",
  },
  {
    main_img: `/img/160 pic.jpg`,
    logo_img: `/img/160 logo.jpg`,
    cl_name: "EMPLOYEES STATE INSURANCE CORPORATION MEDICAL COLLEGE ,ALWAR",
    state_name: "Rajasthan",
  },
  {
    main_img: `/img/161 pic.jpg`,
    logo_img: `/img/161 logo.png`,
    cl_name: "EMPLOYEES STATE INSURANCE MEDICAL COLLEGE , FRIDABAD",
    state_name: "Haryana",
  },
  {
    main_img: `/img/162 pic.jpg`,
    logo_img: `/img/162 logo.png`,
    cl_name: "ESIC MEDICAL COLLEGE AND HOSPITAL ,BIHTA",
    state_name: "Bihar",
  },
  {
    main_img: `/img/163 pic.png`,
    logo_img: `/img/163 logo.jpg`,
    cl_name: "PT. BD SHARMA PGIMS ,ROHTAK ",
    state_name: "Haryana",
  },
  {
    main_img: `/img/164 pic.jpg`,
    logo_img: `/img/164 logo.png`,

    cl_name: "BPS GOVT. MEDICAL COLEGE, SONEPAT",
    state_name: "Haryana",
  },
  {
    main_img: `/img/165 pic.jpg`,
    logo_img: `/img/165 logo.png`,
    cl_name: "KALPANA CHAWLA GOVT MEDICAL COLLEGE, KARNAL",
    state_name: "Haryana",
  },
  {
    main_img: `/img/166 pic.jpg`,
    logo_img: `/img/166 logo.png`,
    cl_name: "GOA MEDICAL COLLEGE, PANAGI",
    state_name: "Goa",
  },
  {
    main_img: `/img/167 pic.jpg`,
    logo_img: `/img/167 logo.png`,
    cl_name: "GUWAHATI MEDICAL COLLEGE, GUWHATI",
    state_name: "Assam",
  },
  {
    main_img: `/img/168 pic.jpg`,
    logo_img: `/img/168 logo.png`,
    cl_name: "SILCHAR MEDICAL COLLEGE,SILCHAR",
    state_name: "Assam",
  },
  {
    main_img: `/img/169 pic.jpg`,
    logo_img: `/img/169 logo.png`,
    cl_name: "ASSAM MEDICAL COLLEGE, DILDRUGARH",
    state_name: "Assam",
  },
  {
    main_img: `/img/170 pic.jpg`,
    logo_img: `/img/170 logo.png`,
    cl_name: "JOHRAT MEDICAL COLLEGE AND HOSPITAL",
    state_name: "Assam",
  },
  {
    main_img: `/img/171_pic.jpg`,
    logo_img: `/img/171 logo.png`,
    cl_name: "TEZPUR MEDICAL COLLEGE, TEZPUR",
    state_name: "Assam",
  },
  {
    main_img: `/img/172 pic.jpg`,
    logo_img: `/img/172 logo.png`,
    cl_name: "FAKHRUDDIN ALI AHMED MEDICAL COLLEGE, BARPETA",
    state_name: "Assam",
  },
  {
    main_img: `/img/173 pic.jpeg`,
    logo_img: `/img/173 logo.jpg`,
    cl_name: "DIPHU MEDICAL COLLEGE AND HOSPITAL, ASSAM",
    state_name: "Assam",
  },
  {
    main_img: `/img/174 pic.jpg`,
    logo_img: `/img/174 logo.png`,
    cl_name:
      "SHRI ATAL BIHARI VAJPAYEE MEDICAL COLLEGE AND RESEARCH INTITUTE, BENGALURU",
    state_name: "Karnataka",
  },
  {
    main_img: `/img/175 pic.jpg`,
    logo_img: `/img/175 logo.png`,
    cl_name: "ESI-MEDICAL COLLEGE AND PGRIMS AND RESEARCH,BANGLORE",
    state_name: "Karnataka",
  },
  {
    main_img: "/img/176.jpeg",
    logo_img: `/img/176 logo.jpeg`,
    cl_name: "ESIC MEDICAL COLLEGE, GULBARGA",
    state_name: "Karnataka",
  },
  {
    main_img: `/img/177.jpeg`,
    logo_img: `img/177 logo.png`,
    cl_name: "KARNATAK INSTITUTE OF MEDICAL SCIENCE,HUBLI",
    state_name: "Karnataka",
  },
  {
    main_img: `img/178.jpeg`,
    logo_img: `img/178 logo.jpeg`,
    cl_name: "MANDYA INSTITUTE PF MEDICAL SCIENCE,MANDYA",
    state_name: "Karnataka",
  },

  {
    main_img: `img/179 .jpeg`,
    logo_img: `/img/179 l.jpeg`,
    cl_name: "BALGAUM INSITUTE OF MEDICAL SCIENCE, BALGAUM",
    state_name: "Karnataka",
  },
  {
    main_img: `img/180.jpeg`,
    logo_img: `img/180 l.jpeg`,
    cl_name: "HASSAN INSTITUTE OF MEDICAL SCIENCES ,HASSAN",
    state_name: "Karnataka",
  },
  {
    main_img: `img/181.jpeg`,
    logo_img: `img/181 l.png`,
    cl_name: "GULBARGA INSTITUTE OF MEDICAL SCIENCES , GULBARGA ",
    state_name: "Karnataka",
  },
  {
    main_img: `img/182.jpeg`,
    logo_img: `img/182 l.jpeg`,
    cl_name: "VIJAY NAGAR INSTITUTE OF MEDICAL SCIENCE, BELLARI",
    state_name: "Karnataka",
  },
  {
    main_img: `img/183.jpeg`,
    logo_img: `img/183 l.jpeg`,
    cl_name: "BIDAR INSTITUTE OF MEDICAL SCIENCE, BIDAR",
    state_name: "Karnataka",
  },
  {
    main_img: `img/184.jpeg`,
    logo_img: `img/184 l.jpeg`,
    cl_name: "SHIMOGA INSTITUTE OF MEDICAL SCIENCE, SHIMOGA",
    state_name: "Karnataka",
  },
  {
    main_img: `img/185.jpeg`,
    logo_img: `img/185 l.jpeg`,
    cl_name: "RAICHUR INSTITUTE OF MEDICAL SCIENCE, RAICHUR",
    state_name: "Karnataka",
  },
  {
    main_img: `img/186 .jpeg`,
    logo_img: `img/186 l.jpeg`,
    cl_name: "C INSTITUTE OF MEDICAL SCIENCE, CHAMARAJANAGAR",
    state_name: "Karnataka",
  },
  {
    main_img: `img/187.jpeg`,
    logo_img: `img/187 l.jpeg`,
    cl_name: "KEDAGU INSTITUTE OF MEDICAL SCIENCE, KEDAGU",
    state_name: "Karnataka",
  },
  {
    main_img: `img/188.jpeg`,
    logo_img: `img/188 l.jpeg`,
    cl_name: "GADAG INSTITUTE OF MEDICAL SCIENCE",
    state_name: "Karnataka",
  },
  {
    main_img: `img/189.jpeg`,
    logo_img: `img/189 l.jpeg`,
    cl_name: "KARWAR INSTITUTE OF MEDICAL SCIENCES, KARWAR",
    state_name: "Karnataka",
  },
  {
    main_img: `img/190.jpeg`,
    logo_img: `img/190 l.jpeg`,
    cl_name: "KEPPAL INSTITUTE OF MEDICAL SCIENCE",
    state_name: "Karnataka",
  },
  {
    main_img: `img/191 .jpeg`,
    logo_img: `img/191 l.jpeg`,
    cl_name: "SHRI VINOVHA INSTITUTE OF MEDICAL SCIENCE,SILVASSA",
    state_name: "Dadra and Nagar",
  },

  {
    main_img: `img/192.jpeg`,
    logo_img: `img/192 l.jpeg`,
    cl_name: "BR. BHIM RAO AMBEDKAR INSTITUTE OF MEDICAL SCIENCE ,MOHALI",
    state_name: "Punjab",
  },
  {
    main_img: `img/195 College-Hardoi.jpg`,
    logo_img: `img/195.png`,
    cl_name: "AUTONOMOUS STATE MEDICAL COLLEGE SOCIETY, HARDOL",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `img/196College-Mirzapur.jpg`,
    logo_img: `img/196.png`,
    cl_name: "AUTONOMOUS STATE MEDICAL COLLEGE SOCIETY, MIRZAPUR",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `img/201College-Jaunpur.jpg`,
    logo_img: `img/201 logo.jpeg`,
    cl_name: "UNS AUTONOMOUS STATE MEDICAL COLLEGE ,JAUNPUR",
    state_name: "Uttar Pradesh",
  },
  {
    main_img: `img/202 campus.png`,
    logo_img: `img/202.png`,
    cl_name: "GOVT. MEDICAL COLLEGE,MANDURBAR",
    state_name: "Maharashtra",
  },
  {
    main_img: `img/204.webp`,
    logo_img: `img/204 logo.png`,
    cl_name: "GOVT. MEDICAL COLLEGE AND GENERAL HOSPITAL ,SATARA",
    state_name: "Maharashtra",
  },
  {
    main_img: `img/205 campus.jpeg`,
    logo_img: `img/205.png`,
    cl_name: "SHKAM GMC NALHAR, MEWAT",
    state_name: "Haryana",
  },
  {
    main_img: `img/206_Campus-v.jpg`,
    logo_img: `img/206.jpeg`,
    cl_name: "ANDHRA MEDICAL COLLEGE,VISHAKAHPATNAM",
    state_name: "Andhra Pradesh",
  },
  {
    main_img: `img/207 Campus-View.jpg`,
    logo_img: `img/207 logo.jpg`,
    cl_name: "GUNTUR MEDICAL COLLEGE, GUNTUR",
    state_name: "Andhra Pradesh",
  },
  {
    main_img: `img/208 campus.jpg`,
    logo_img: `img/208.jpg`,
    cl_name: "SIDDARTHA MEDICAL COLLEGE ,VIJAYWADA",
    state_name: "Andhra Pradesh",
  },
  {
    main_img: `img/209 campus.jpg`,
    logo_img: `img/209.png`,
    cl_name: "KURNOOL MEDICAL COLLEG, KURNUL",
    state_name: "Andhra Pradesh",
  },
  {
    main_img: `img/210 college.jpg`,
    logo_img: `img/210.jpeg`,
    cl_name: "SHRI VANKETESHWARA MEDICAL COLLEGE,TIRUPATI",
    state_name: "Andhra Pradesh",
  },
  {
    main_img: `/img/135_college.jpeg `,
    logo_img: `/img/135_l0go.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Gonda`,
    state_name: `Maharastra`,
  },
  {
    main_img: `/img/136_college.jpeg `,
    logo_img: `/img/136_l0g0.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Chandrapur`,
    state_name: `Maharastra`,
  },
  {
    main_img: `/img/137_college.jpeg `,
    logo_img: `/img/137_logo.jpeg`,
    cl_name: `GOVT MEDICAL COLLEGE,Baramati`,
    state_name: `Maharastra`,
  },
  {
    main_img: `/img/138_college.jpeg `,
    logo_img: `/img/138_logo.jpeg`,
    cl_name: `VARADHAMAN INSTITUTE OD MEDICAL SCIENCE,Nalanda`,
    state_name: `Bihar`,
  },
  {
    main_img: `/img/139_college.jpeg `,
    logo_img: `/img/139_logo.jpeg`,
    cl_name: `JAWAHARLAL NEHRU MEDICAL COLLEGE,Bhagalpur`,
    state_name: `Bihar`,
  },

  {
    main_img: `/img/140_college.jpeg `,
    logo_img: `/img/140_logo.jpeg`,
    cl_name: `ANUGRAM NARAYAN MAGADH MEDICAL COLLEGE,Gaya`,
    state_name: `Bihar`,
  },
];
let flag = 1;
let frontHtml;
let sumHtml = "";
a.forEach(function (as) {
  frontHtml = `
    <div class = "block_2">
        <div class="block_2a">
            <div class="main_img_block"><img class = "main_img"src="${as.main_img}"></div>
            <div class="logo_img_block"><img  class="logo_img"src="${as.logo_img}"></div>
        </div>
        <div> <h3 class = "clg_nme">${as.cl_name}</h3>
            <h4 class = "state">${as.state_name}</h4>
        </div></div>
    `;

  sumHtml = sumHtml + frontHtml;
});

block.innerHTML = sumHtml;

// Adding search filter

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector(".search-input");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const state = document.querySelectorAll(".chkbox-input");

//adding filter
var states;

// state.forEach(function(eve){
//   eve.addEventListener('click',function(){
//     block.innerHTML = "";
//   }, {once:true} )
// })

// state.forEach(function (solo) {
//   solo.forEach()

//   console.log( solo.checked);
// });

// console.log(state);
// state.forEach(function(solo){
//   console.log(solo.checked);
// })

let bang = [];
state.forEach(function (eve) {
  // console.log(eve.checked);

  eve.addEventListener("click", function (end) {
    //filtered array

    if (eve.checked) {
      bang.push(eve);
    }

    bang.forEach(function (e) {
      console.log(e.value);
    });

    const newList = a.filter(function (e) {
      return e.state_name == end.originalTarget.value;
    });

    if (flag == 1) {
      block.innerHTML = "";
    }
    ++flag;

    newList.forEach(function (as) {
      let html = `<div class = "block_2">
          <div class="block_2a">
              <div class="main_img_block"><img class = "main_img"src="${as.main_img}"></div>
              <div class="logo_img_block"><img  class="logo_img"src="${as.logo_img}"></div>
          </div>
          <div> <h3 class = "clg_nme">${as.cl_name}</h3>
              <h4 class = "state">${as.state_name}</h4>
          </div>
      </div>
      `;
      block.insertAdjacentHTML("beforeend", html);
    });
  });
});

var input, filter, txtValue;
input = document.querySelector(".search-input");
input.addEventListener("keydown", function (e) {
  const value = input.value;
});

//filter button
// let flag=0;
// const btn_hidden=document.querySelector('.col-md-3')
// filter_btn.addEventListener('click',function(e){
//   btn_hidden.style.display="block";
//   flag=1;
// })
