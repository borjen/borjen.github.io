document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("langBtn");
    let isEnglish = true;
  
    const introText = document.getElementById("intro");
    const edu = document.getElementById("edu-content");
    const exp = document.getElementById("exp-content");
    const proj = document.getElementById("proj-content");
    const course = document.getElementById("course-content");
    const comp = document.getElementById("comp-content");
    const act = document.getElementById("act-content");
    const cert = document.getElementById("cert-content");
  
    const eduTitle = document.getElementById("edu-title");
    const expTitle = document.getElementById("exp-title");
    const projTitle = document.getElementById("proj-title");
    const courseTitle = document.getElementById("course-title");
    const compTitle = document.getElementById("comp-title");
    const actTitle = document.getElementById("act-title");
    const certTitle = document.getElementById("cert-title");
  
    const zh = {
      intro: "國立臺北大學｜資訊管理研究所",
      titles: {
        edu: "學歷",
        exp: "經歷",
        proj: "研究計畫",
        course: "修習課程",
        comp: "競賽",
        act: "社團活動",
        cert: "證照"
      },
      edu: `國立臺北大學 資訊管理研究所 碩士<br>國立臺北大學 金融與合作經營學系 學士`,
      exp: `臺北大學智慧金融創新科技實驗室 2024.08-現在<br>KPMG管理顧問 數位創新服務團隊 實習生 2024.3-2024.7<br>臺北大學通識教育中心 專任行政助理 2023.07-2023.12`,
      proj: `創新智慧代理 AI 技術於自主永續報告生成<br>數位支持、溝通無礙：AI科技協助語言障礙者溝通輔具之研發、支持與推廣 - 子計畫三<br>智慧城市大型語言模型代理人系統`,
      course: `人工智慧<br>軟體工程`,
      comp: `2025 Best AI Awards 智慧創新大賞<br>2025 臺北大學AI智慧應用創新競賽<br>2025 第十屆TSC崇越行銷大賞<br>2024 NTPU USR x 生成式AI 永續共創行銷企劃競賽<br>2022 金融科技應用專題競賽`,
      act: `國立臺北大學管樂團 - 學生指揮<br>金融財政聯隊系女排 - 隊長<br>金融與合作經營學系學會 - 美宣長<br>第13屆金融研習營 - 政務次長`,
      cert: `Google Analytics 個人認證<br>AWS Certified Cloud Practitioner<br>Building RAG Agents with LLMs`
    };
  
    const en = {
      intro: "Graduate Institute of Information Management, National Taipei University",
      titles: {
        edu: "Education",
        exp: "Work Experience",
        proj: "Research Projects",
        course: "Courses",
        comp: "Competitions",
        act: "Club",
        cert: "Certifications"
      },
      edu: `<br>MS, Graduate Institute of Information Management, National Taipei University<br>BS, Department of Finance and Cooperative Management, National Taipei University`,
      exp: `Intelligent Financial Innovation Technology Lab (IFIT Lab), NTPU 2024.08-Now<br>Intern, Digital Innovation Team, KPMG Consulting (2024.3-2024.7)<br>Admin Assistant, Center of General Education, NTPU (2023.07-2023.12)`,
      proj: `Innovative Agentic AI Technology for Autonomous ESG Report Generation<br>Inclusive AI Dialogue Assistive Device Project - Subproject 3<br>LLM Agent System for Smart City`,
      course: `Artificial Intelligence<br>Software Engineering`,
      comp: `2025 Best AI Awards<br>2025 NTPU AI Innovation Competition<br>2025 TSC Marketing Award<br>2024 NTPU USR x Generative AI Marketing Competition<br>2022 FinTech Project Contest`,
      act: `NTPU Wind Band - Student Conductor<br>NTPU FCM × PF Volleyball Captain<br>NTPU Finance Student Association - Design Lead<br>13th Finance Camp - Deputy Director`,
      cert: `Google Analytics Certification<br>AWS Certified Cloud Practitioner<br>Building RAG Agents with LLMs`
    };
  
    const loadContent = (lang) => {
      introText.textContent = lang.intro;
      edu.innerHTML = lang.edu;
      exp.innerHTML = lang.exp;
      proj.innerHTML = lang.proj;
      course.innerHTML = lang.course;
      comp.innerHTML = lang.comp;
      act.innerHTML = lang.act;
      cert.innerHTML = lang.cert;
  
      eduTitle.textContent = lang.titles.edu;
      expTitle.textContent = lang.titles.exp;
      projTitle.textContent = lang.titles.proj;
      courseTitle.textContent = lang.titles.course;
      compTitle.textContent = lang.titles.comp;
      actTitle.textContent = lang.titles.act;
      certTitle.textContent = lang.titles.cert;
    };
  
    // 預設載入英文
    loadContent(en);
  
    langBtn.addEventListener("click", () => {
      isEnglish = !isEnglish;
      langBtn.textContent = isEnglish ? "中文" : "EN";
      loadContent(isEnglish ? en : zh);
    });
  });
  