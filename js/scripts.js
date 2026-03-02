document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");
  let isEnglish = true;

  // 區塊內容
  const introText = document.getElementById("intro");
  const edu = document.getElementById("edu-content");
  const exp = document.getElementById("exp-content");
  const cert = document.getElementById("cert-content");
  const pub = document.getElementById("pub-content"); 
  const award = document.getElementById("award-content"); 
  const port = document.getElementById("portfolio-content");
  const act = document.getElementById("act-content");

  // 區塊標題 h2
  const eduTitle = document.getElementById("edu-title");
  const expTitle = document.getElementById("exp-title");
  const certTitle = document.getElementById("cert-title");
  const pubTitle = document.getElementById("pub-title");
  const awardTitle = document.getElementById("award-title");
  const portTitle = document.getElementById("portfolio-title");
  const actTitle = document.getElementById("act-title");

  // 導覽列項目（需要在 HTML 中加上對應 id）
  const navEdu = document.getElementById("nav-edu");
  const navExp = document.getElementById("nav-exp");
  const navCert = document.getElementById("nav-cert");
  const navPub = document.getElementById("nav-pub");       
  const navAward = document.getElementById("nav-award");  
  const navPort = document.getElementById("nav-port");
  const navAct = document.getElementById("nav-act");
    
  
  const zh = {
    intro: "國立臺北大學｜資訊管理研究所",
    titles: {
      edu: "學歷",
      exp: "經歷",
      cert: "證照",
      pub: "論文發表",
      award: "競賽得獎",
      port: "作品集",
      act: "社團活動",

    },
    edu: `
    <div class="edu-block">
      <div>國立臺北大學 資訊管理研究所 ｜ 碩士</div>
      <div>國立臺北大學 金融與合作經營學系 ｜ 學士</div>
    </div>
  `,    

    exp: `
    <div class="timeline">
      <div class="timeline-item">
        <h5><span class="text-muted">2024.08 - 現在</span>&nbsp;臺北大學智慧金融創新科技實驗室 <a href="https://www.aifitesg.org/" target="_blank" style="color: inherit; text-decoration: underline;">(IFIT Lab)<a> 研究助理</h5>
        <ul>
          <li>生成式AI多智慧代理系統結合大型語言模型檢索增強生成技術於ESG永續報告自動化 (國科會)</li>
          <li>前瞻AI技術人才培育-智慧代理與實體AI機器人課程推動計畫 (教育部)</li>
          <li>創新智慧代理 AI 技術於自主永續報告生成 (工研院)</li>
          <li>數位支持、溝通無礙：AI科技協助語言障礙者溝通輔具之研發、支持與推廣<br>子計畫三：包容溝通支持多模態跨語言任務導向對話系統 (國科會)</li>
          <li>智慧城市大型語言模型代理人系統 (資策會)</li>
        </ul>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2024.08 - 現在</span>&nbsp;臺北大學商學院 EMI教學助理</h5>
        <ul>
          <li>軟體工程</li>
          <li>Python會計應用</li>
          <li>智慧金融量化分析</li>
          <li>永續數據分析</li>
        </ul>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2024.03 - 2024.07</span>&nbsp;KPMG管理顧問 數位創新服務團隊 實習生</h5>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2023.07 - 2023.12</span>&nbsp;臺北大學通識教育中心 專任行政助理</h5>
      </div>
    </div>
  `,

  cert: `
  <div class="certificate-grid">
    <a href="https://www.credly.com/badges/c042b203-3d71-4608-abd5-d4f85d54db9f/public_url" target="_blank" class="certificate-item">
      <img src="AWS Certified Cloud Practitioner certificate.png" alt="AWS Certificate">
      <div>AWS Certified Cloud Practitioner</div>
    </a>
    <a href="https://learn.nvidia.com/certificates?id=3nHjlroXRO-1iYTXSraMoA#" target="_blank" class="certificate-item">
      <img src="Building RAG Agents with LLMs certificate.png" alt="RAG Certificate">
      <div>Building RAG Agents with LLMs</div>
    </a>
  </div>
`,

  pub: `
    <div class="activity-list">
      <li><b>Bor-Jen Chen</b>,Min-Yuh Day (2025), "AI-Assisted ESG Reporting: A RAG-Based Framework for Accurate and Stylistically Appropriate Text Generation", The 31st International Conference on IT Applications and Management (ITAM), Jinju, Korea, October 26-30, 2025.</li>
      <li><b>Bor-Jen Chen</b>, Wen-Hsin Hsiao, Hsin-Ting Lu, and Min-Yuh Day (2025), "Fine-Tuning and Prompt-Based Methods for Temporal Reasoning in Multilingual Financial Texts", The 16th International Workshop on Mining and Analyzing Social Networks for Decision Support (MSNDS 2025), in Proceedings of the 2025 International Conference on Advances in Social Networks Analysis and Mining (ASONAM 2025), Niagara Falls, Ontario, Canada, August 25-28, 2025.</li>
      <li>Cheng-Yun Wu, <b>Bor-Jen Chen</b>, Wen-Hsin Hsiao, Hsin-Ting Lu, Yue-Shan Chang, Chen-Yu Chiang, Chao-Yin Lin, Yu-An Lin and Min-Yuh Day (2025), Implementing an Inclusive Communication System with RAG-enhanced Multilingual and Multimodal Dialogue Capabilities, in Proceedings of the 2025 Taiwan Symposium On Cloud And Services Computing (TWSC2 2025), New Taipei City, Taiwan, July 3-4, 2025.</li>
      <li><b>Bor-Jen Chen</b>, Wen-Hsin Hsiao, Jun-Yu Wu, Cheng-Yun Wu and Min-Yuh Day (2025), IMNTPU at the NTCIR-18 FinArg-2: Fine-Tuning and Prompt-Based Learning for Temporal Argument Detection and Claim Validity Assessment, in Proceedings of the 18th NTCIR Conference on Evaluation of Information Access Technologies (NTCIR-18), Tokyo, Japan, June 10-13, 2025.</li>
      <li>Jun-Yu Wu, Cheng-Yun Wu, <b>Bor-Jen Chen</b>, Wen-Hsin Hsiao and Min-Yuh Day (2025), IMNTPU at NTCIR-18 MedNLP-CHAT Task: Evaluating Agentic AI for Multilingual Risk Assessment in Medical Chatbots, in Proceedings of the 18th NTCIR Conference on Evaluation of Information Access Technologies (NTCIR-18), Tokyo, Japan, June 10-13, 2025.</li>
      <li><b>Bor-Jen Chen</b> and Min-Yuh Day (2025), Generative AI in Enhancing ESG Reporting: ESG Data Consistency and Annotation, The 36th International Conference on Information Management (ICIM 2025), New Taipei City, Taiwan, May 16, 2025.</li>
      <li>Min-Yuh Day, Ting-Chi Wang, Yu-Chun Cheng, Jun-Yu Wu, <b>Bor-Jen Chen</b> (2025), "Developing Generative AI-driven ESG Report Generation System", The 30th International Conference on IT Applications and Management (ITAM), Kathmandu, Nepal, February 12-16, 2025.</li>
      <li>Min-Yuh Day, Hsin-Ting Lu, Xu-You Lan, and <b>Bor-Jen Chen</b>, "Large Language Model and AI Agent System for Smart City: A Systematic Literature Review", The 29th Workshop on Information Management & Practice (IMP 2024), Taipei, Taiwan, November 21, 2024.</li>
    </ul>
  `,
  award: `
   <ul class="activity-list">
      <li>2025 NTPU USR 永續科技提案競賽 — 第一名</li>
      <li><b>Best Paper Award</b>, Bor-Jen Chen and Min-Yuh Day (2025), AI-Assisted ESG Reporting: A RAG-Based Framework for Accurate and Stylistically Appropriate Text Generation", The 31st International Conference on IT Applications and Management (ITAM), Jinju, Korea, October 26-30, 2025.</li>
      <li>第一名，2025年日本 NTCIR-18 FinArg-2 財務金融論證的時間推理社群媒體聲明有效期間評估分項 (The first place in the evaluation of a Claim’s Validity Period on Social Media subtask of the NTCIR-18 FinArg-2 Task, 2025) [NTCIR-18 Online Proceedings]</li>
      <li>第一名, 2025年日本 NTCIR-18 MedNLP-CHAT：醫療自然語言處理對話系統評估-醫病對話中的醫療、倫理與法律風險判定法文與多語言語料法律風險分項 (The first place in the Legal Risk (LR) subtask using Franch and Multilingual datasets of the NTCIR-18 MedNLP-CHAT: Medical Natural Language Processing for AI Chat, 2025)</li>
      <li><b>NTCIR-18 最佳口頭報告獎</b>, 2025年日本 NTCIR-18 FinArg-2：財務金融論證的時間推理 (NTCIR-18 Best Poster Presentation Award, NTCIR-18 FinArg-2: Temporal Inference of Financial Arguments, 2025)</li>
      <li><b>NTCIR-18 最佳口頭報告獎</b>, 2025年日本 NTCIR-18 MedNLP-CHAT：醫療自然語言處理對話系統評估 (NTCIR-18 Best Oral Presentation Award, NTCIR-18 MedNLP-CHAT: Medical Natural Language Processing for AI Chat, 2025)</li>
      <li><b>NTCIR-18 NTCIR-18 最佳海報展示獎</b>, 2025年日本 NTCIR-18 FinArg-2：財務金融論證的時間推理 (NTCIR-18 Best Poster Presentation Award, NTCIR-18 FinArg-2: Temporal Inference of Financial Arguments, 2025)</li>
      <li><b>Outstanding International Paper Award</b>, Bor-Jen Chen and Min-Yuh Day (2025), Generative AI in Enhancing ESG Reporting: ESG Data Consistency and Annotation, The 36th International Conference on Information Management (ICIM 2025), New Taipei City, Taiwan, May 16, 2025.</li>
      <li>2025 臺北大學AI智慧應用創新競賽 — 優選獎</li>    
      <li>2025 TSC 第十屆崇越行銷大賞 AI 應用行銷競賽 — 佳作</li>
      <li>2025 經濟部智慧創新大賞 — 決賽入圍</li>
   </ul>
  `,

  port: `
  <div class="portfolio-cards">
<!--
    <div class="portfolio-item">
       <a href="https://youtu.be/CgjfBryTFVQ" target="_blank" class="portfolio-card card-ai-awards"></a>
       <div class="portfolio-caption">2025 經濟部智慧創新大賞<br><strong>美國關稅大師</strong></div>
     </div>
-->
    <div class="portfolio-item">
      <a href="https://drive.google.com/file/d/1d_qoaqCPd58EnJ_o_iHNcUHrAwfCT0pM/view?usp=drive_link" target="_blank" class="portfolio-card card-ai-final"></a>
      <div class="portfolio-caption">2024 人工智慧課程期末專題<br><strong>智慧城市交通查詢代理人系統</strong></div>
    </div>
    <div class="portfolio-item">
      <a href="https://drive.google.com/file/d/16LOFVDoAeji1fuwOChSzbHjFYc2b4Nnd/view?usp=drive_link" target="_blank" class="portfolio-card card-ai-case"></a>
      <div class="portfolio-caption">2024 人工智慧課程案例研究<br><strong>AI驅動之智慧交通：新加坡與臺灣</strong></div>
    </div>
    <div class="portfolio-item">
      <a href="https://drive.google.com/file/d/1xvM__BepmZvymIlAN7ENBCINGyo4b3TA/view?usp=drive_link" target="_blank" class="portfolio-card card-usr"></a>
      <div class="portfolio-caption">2024 NTPU USR x 生成式AI<br>永續共創行銷企劃競賽<br><strong>三峽湧翠，茶樹傳香：永續低碳的自然之選</strong></div>
    </div>
    <div class="portfolio-item">
      <a href="https://drive.google.com/file/d/1gHE3q-X5priZF2nI7GrUh7oN3z0Gz-lV/view?usp=drive_link" target="_blank" class="portfolio-card card-fintech"></a>
      <div class="portfolio-caption">2022 金融科技應用競賽<br><strong>N-FeaT. 自由創作者串流平台</strong></div>
    </div>
  </div>
  `,

  act: `
  <ul class="activity-list">
    <li>國立臺北大學管樂團 ｜ 學生指揮</li>
    <li>國立臺北大學金融財政聯隊系女排 ｜ 隊長</li>
    <li>國立臺北大學金融與合作經營學系學會 ｜ 美宣長</li>
    <li>國立臺北大學第13屆金融研習營 ｜ 政務次長</li>
  </ul>
`,
  };

  const en = {
    intro: "Graduate Institute of Information Management, National Taipei University",
    titles: {
      edu: "Education",
      exp: "Work Experience",
      cert: "Certifications",
      pub: "Publications",
      award: "Awards",
      port: "Portfolio",
      act: "Club Activities",
    },
    edu: `
    <div class="edu-block">
      <div>Master｜Graduate Institute of Information Management, National Taipei University</div>
      <div>Bachelor｜Department of Finance and Cooperative Management, National Taipei University</div>
    </div>
  `,

    exp: `
    <div class="timeline">
      <div class="timeline-item">
        <h5><span class="text-muted">2024.08 - Now</span>&nbsp;Researcher, Intelligent Financial Innovation Technology Lab <a href="https://www.aifitesg.org/" target="_blank" style="color: inherit; text-decoration: underline;">(IFIT Lab)<a>, NTPU</h5>
        <ul>
          <li>Generative AI Multi-Agent Systems with LLM-Based RAG for ESG Reporting Automation (NSTC)</li>
          <li>Physical AI and Physical AI Robotics Curriculum Development Project, Forward-Looking AI Talent Cultivation Program (MOE)</li>
          <li>Innovative Agentic AI Technology for Autonomous ESG Report Generation (ITRI)</li>
          <li>Inclusive AI Dialogue Assistive Device Project, sub-project 3:<br>Multimodal Cross-lingual Task-Oriented Dialogue System for Inclusive Communication Support (NSTC)</li>
          <li>Large Language Model Agent System for Smart City (III)</li>
        </ul>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2024.08 - Now</span>&nbsp;EMI Teaching Assistent, College Of Business, NTPU</h5>
        <ul>
          <li>Software Engineering</li>
          <li>Python for Accounting Applications</li>
          <li>Artificial Intelligence in Finance and Quantitative Analysis</li>
          <li>Sustainability and ESG Data Analytics</li>
        </ul>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2024.03 - 2024.07</span>&nbsp;Intern, Digital Innovation Team, KPMG Consulting</h5>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2023.07 - 2023.12</span>&nbsp;Admin Assistant, Center of General Education, NTPU</h5>
      </div>
    </div>
  `,
  
  cert: `
  <div class="certificate-grid">
    <a href="https://www.credly.com/badges/c042b203-3d71-4608-abd5-d4f85d54db9f/public_url" target="_blank" class="certificate-item">
      <img src="AWS Certified Cloud Practitioner certificate.png" alt="AWS Certificate">
      <div>AWS Certified Cloud Practitioner</div>
    </a>
    <a href="https://learn.nvidia.com/certificates?id=3nHjlroXRO-1iYTXSraMoA#" target="_blank" class="certificate-item">
      <img src="Building RAG Agents with LLMs certificate.png" alt="RAG Certificate">
      <div>Building RAG Agents with LLMs</div>
    </a>
  </div>
`,

  pub: `
    <div class="activity-list">
      <li><b>Bor-Jen Chen</b>,Min-Yuh Day (2025), "AI-Assisted ESG Reporting: A RAG-Based Framework for Accurate and Stylistically Appropriate Text Generation", The 31st International Conference on IT Applications and Management (ITAM), Jinju, Korea, October 26-30, 2025.</li>
      <li><b>Bor-Jen Chen</b>, Wen-Hsin Hsiao, Hsin-Ting Lu, and Min-Yuh Day (2025), "Fine-Tuning and Prompt-Based Methods for Temporal Reasoning in Multilingual Financial Texts", The 16th International Workshop on Mining and Analyzing Social Networks for Decision Support (MSNDS 2025), in Proceedings of the 2025 International Conference on Advances in Social Networks Analysis and Mining (ASONAM 2025), Niagara Falls, Ontario, Canada, August 25-28, 2025.</li>
      <li>Cheng-Yun Wu, <b>Bor-Jen Chen</b>, Wen-Hsin Hsiao, Hsin-Ting Lu, Yue-Shan Chang, Chen-Yu Chiang, Chao-Yin Lin, Yu-An Lin and Min-Yuh Day (2025), Implementing an Inclusive Communication System with RAG-enhanced Multilingual and Multimodal Dialogue Capabilities, in Proceedings of the 2025 Taiwan Symposium On Cloud And Services Computing (TWSC2 2025), New Taipei City, Taiwan, July 3-4, 2025.</li>
      <li><b>Bor-Jen Chen</b>, Wen-Hsin Hsiao, Jun-Yu Wu, Cheng-Yun Wu and Min-Yuh Day (2025), IMNTPU at the NTCIR-18 FinArg-2: Fine-Tuning and Prompt-Based Learning for Temporal Argument Detection and Claim Validity Assessment, in Proceedings of the 18th NTCIR Conference on Evaluation of Information Access Technologies (NTCIR-18), Tokyo, Japan, June 10-13, 2025.</li>
      <li>Jun-Yu Wu, Cheng-Yun Wu, <b>Bor-Jen Chen</b>, Wen-Hsin Hsiao and Min-Yuh Day (2025), IMNTPU at NTCIR-18 MedNLP-CHAT Task: Evaluating Agentic AI for Multilingual Risk Assessment in Medical Chatbots, in Proceedings of the 18th NTCIR Conference on Evaluation of Information Access Technologies (NTCIR-18), Tokyo, Japan, June 10-13, 2025.</li>
      <li><b>Bor-Jen Chen</b> and Min-Yuh Day (2025), Generative AI in Enhancing ESG Reporting: ESG Data Consistency and Annotation, The 36th International Conference on Information Management (ICIM 2025), New Taipei City, Taiwan, May 16, 2025.</li>
      <li>Min-Yuh Day, Ting-Chi Wang, Yu-Chun Cheng, Jun-Yu Wu, <b>Bor-Jen Chen</b> (2025), "Developing Generative AI-driven ESG Report Generation System", The 30th International Conference on IT Applications and Management (ITAM), Kathmandu, Nepal, February 12-16, 2025.</li>
      <li>Min-Yuh Day, Hsin-Ting Lu, Xu-You Lan, and <b>Bor-Jen Chen</b>, "Large Language Model and AI Agent System for Smart City: A Systematic Literature Review", The 29th Workshop on Information Management & Practice (IMP 2024), Taipei, Taiwan, November 21, 2024.</li>
    </ul>
  `,
  award: `
    <div class="activity-list">
      <li>2025 NTPU USR Sustainability × Technology Proposal Competition - 1st place</li>
      <li><b>Best Paper Award</b>, Bor-Jen Chen and Min-Yuh Day (2025), AI-Assisted ESG Reporting: A RAG-Based Framework for Accurate and Stylistically Appropriate Text Generation", The 31st International Conference on IT Applications and Management (ITAM), Jinju, Korea, October 26-30, 2025.</li>
      <li>The first place in the evaluation of a Claim’s Validity Period on Social Media subtask of the NTCIR-18 FinArg-2 Task, 2025</li>
      <li>The first place in the Legal Risk (LR) subtask using Franch and Multilingual datasets of the NTCIR-18 MedNLP-CHAT: Medical Natural Language Processing for AI Chat, 2025</li>
      <li><b>NTCIR-18 Best Oral Presentation Award</b>, NTCIR-18 FinArg-2: Temporal Inference of Financial Arguments, 2025</li>
      <li><b>NTCIR-18 Best Oral Presentation Award</b>, NTCIR-18 MedNLP-CHAT: Medical Natural Language Processing for AI Chat, 2025</li>
      <li><b>NTCIR-18 Best Poster Presentation Award</b>, NTCIR-18 FinArg-2: Temporal Inference of Financial Arguments, 2025</li>
      <li><b>Outstanding International Paper Award</b>, Bor-Jen Chen and Min-Yuh Day (2025), Generative AI in Enhancing ESG Reporting: ESG Data Consistency and Annotation, The 36th International Conference on Information Management (ICIM 2025), New Taipei City, Taiwan, May 16, 2025.</li>
      <li>2025 National Taipei University AI Smart Application Innovation Competition - Excellent Award</li>
      <li>2025 10th TSC Marketing Awards AI Application Marketing Competition - Honorable Mention</li>
      <li>Ministry of Economic Affairs Best AI Awards - Finalists</li>
    </ul>
  `,

  port: `
    <div class="portfolio-cards">
<!--
      <div class="portfolio-item">
        <a href="https://youtu.be/CgjfBryTFVQ" target="_blank" class="portfolio-card card-ai-awards"></a>
        <div class="portfolio-caption">2025 Best AI Awards<br><strong>Master of American Tariffs</strong></div>
      </div>
-->
      <div class="portfolio-item">
        <a href="https://drive.google.com/file/d/1d_qoaqCPd58EnJ_o_iHNcUHrAwfCT0pM/view?usp=drive_link" target="_blank" class="portfolio-card card-ai-final"></a>
        <div class="portfolio-caption">2024 AI Course Project<br><strong>LLM-Based Traffic Query Agent for Smart Cities</strong></div>
      </div>
      <div class="portfolio-item">
        <a href="https://drive.google.com/file/d/16LOFVDoAeji1fuwOChSzbHjFYc2b4Nnd/view?usp=drive_link" target="_blank" class="portfolio-card card-ai-case"></a>
        <div class="portfolio-caption">2024 AI Course Case Study<br><strong>Smart Transportation Insights from Singapore and Taiwan</strong></div>
      </div>
      <div class="portfolio-item">
        <a href="https://drive.google.com/file/d/1xvM__BepmZvymIlAN7ENBCINGyo4b3TA/view?usp=drive_link" target="_blank" class="portfolio-card card-usr"></a>
        <div class="portfolio-caption">2024 NTPU USR x Generative AI Marketing Competition<br><strong>Verdant Sanxia, Fragrant Tea Trees: A Sustainable, Low-Carbon Choice from Nature</strong></div>
      </div>
      <div class="portfolio-item">
        <a href="https://drive.google.com/file/d/1gHE3q-X5priZF2nI7GrUh7oN3z0Gz-lV/view?usp=drive_link" target="_blank" class="portfolio-card card-fintech"></a>
        <div class="portfolio-caption">2022 FinTech Competition<br><strong>N.FeaT. Freelance Creator Streaming Platform</strong></div>
      </div>
    </div>
  `,

  act: `
  <ul class="activity-list">
    <li>NTPU Wind Band ｜ Student Conductor</li>
    <li>NTPU FCM × PF ｜ Volleyball Captain</li>
    <li>NTPU Finance Student Association ｜ Design Lead</li>
    <li>NTPU 13th Finance Camp ｜ Political Deputy Minister</li>
  </ul>
`,

        };
  
  const loadContent = (lang) => {
    introText.textContent = lang.intro;
    edu.innerHTML = lang.edu;
    exp.innerHTML = lang.exp;
    cert.innerHTML = lang.cert;
    pub.innerHTML = lang.pub;
    award.innerHTML = lang.award;
    port.innerHTML = lang.port;
    act.innerHTML = lang.act;

    eduTitle.textContent = lang.titles.edu;
    expTitle.textContent = lang.titles.exp;
    certTitle.textContent = lang.titles.cert;
    pubTitle.textContent = lang.titles.pub;
    awardTitle.textContent = lang.titles.award;
    portTitle.textContent = lang.titles.port;
    actTitle.textContent = lang.titles.act;

    // 導覽列文字切換
    navEdu.textContent = lang.titles.edu;
    navExp.textContent = lang.titles.exp;
    navCert.textContent = lang.titles.cert;
    navPub.textContent = lang.titles.pub;
    navAward.textContent = lang.titles.award;
    navPort.textContent = lang.titles.port;
    navAct.textContent = lang.titles.act;
  };

  // 預設載入英文
  loadContent(en);

  langBtn.addEventListener("click", () => {
    isEnglish = !isEnglish;
    langBtn.textContent = isEnglish ? "中文" : "EN";
    loadContent(isEnglish ? en : zh);
  });
});
