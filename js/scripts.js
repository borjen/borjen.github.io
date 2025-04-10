/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

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
  
    const zh = {
      intro: "國立臺北大學｜資訊管理研究所",
      edu: `學歷：<br>國立臺北大學 資訊管理研究所 碩士<br>國立臺北大學 金融與合作經營學系 學士`,
      exp: `經歷：<br>KPMG管理顧問 數位創新服務團隊 實習生 2024.3-2024.7<br>臺北大學通識教育中心 專任行政助理 2023.07-2023.12`,
      proj: `創新智慧代理 AI 技術於自主永續報告生成<br>數位支持、溝通無礙：AI科技協助語言障礙者溝通輔具之研發、支持與推廣 - 子計畫三<br>智慧城市大型語言模型代理人系統`,
      course: `人工智慧<br>軟體工程`,
      comp: `2025 Best AI Awards 智慧創新大賞<br>2025 臺北大學AI智慧應用創新競賽<br>2025 第十屆TSC崇越行銷大賞<br>2024 NTPU USR x 生成式AI 永續共創行銷企劃競賽<br>2022 金融科技應用專題競賽`,
      act: `國立臺北大學管樂團 - 學生指揮<br>金融財政聯隊系女排 - 隊長<br>金融與合作經營學系學會 - 美宣長<br>第13屆金融研習營 - 政務次長`,
      cert: `Google Analytics 個人認證<br>AWS Certified Cloud Practitioner<br>Building RAG Agents with LLMs`
    };
  
    const en = {
      intro: "Graduate Institute of Information Management, National Taipei University",
      edu: `Education:<br>MS, Graduate Institute of Information Management, National Taipei University<br>BS, Department of Finance and Cooperative Management, National Taipei University`,
      exp: `Work Experience:<br>Intern, Digital Innovation Team, KPMG Consulting (2024.3-2024.7)<br>Admin Assistant, Center of General Education , NTPU (2023.07-2023.12)`,
      proj: `Innovative Agentic AI Technology for Autonomous ESG Report Generation, Industrial Technology Research Institute (ITRI), Fintech and Green Finance Center (FGFC, NTPU)<br>The Development, Support and Promotion of AI-assisted Communication Assistive Devices for Speech Impairment (2/3), Sub-project 3: Multimodal Cross-lingual Task-Oriented Dialogue System for Inclusive Communication Support, NSTC, NTPU<br>Large Language Model Agent System for Smart City, Institute for Information Industry (III), NTPU`,
      course: `Artificial Intelligence<br>Software Engineering`,
      comp: `2025 Best AI Awards<br>2025 NTPU AI Innovation Competition<br>2025 TSC Marketing Award<br>2024 NTPU USR x Generative AI Marketing Competition<br>2022 FinTech Project Contest`,
      act: `NTPU Wind Band - Student Conductor<br>NTPU FCM × PF Volleyball Captain<br>NTPU Finance Student Association - Design Lead<br>13th Finance Camp - Deputy Director`,
      cert: `Google Analytics Certification<br>AWS Certified Cloud Practitioner<br>Building RAG Agents with LLMs`
    };
  
    langBtn.addEventListener("click", () => {
      isEnglish = !isEnglish;
      langBtn.textContent = isEnglish ? "中文" : "EN";
  
      const content = isEnglish ? en : zh;
      introText.textContent = content.intro;
      edu.innerHTML = content.edu;
      exp.innerHTML = content.exp;
      proj.innerHTML = content.proj;
      course.innerHTML = content.course;
      comp.innerHTML = content.comp;
      act.innerHTML = content.act;
      cert.innerHTML = content.cert;
    });
  });
  