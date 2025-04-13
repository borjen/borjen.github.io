document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");
  let isEnglish = true;

  // 區塊內容
  const introText = document.getElementById("intro");
  const edu = document.getElementById("edu-content");
  const exp = document.getElementById("exp-content");
  const cert = document.getElementById("cert-content");
  const port = document.getElementById("portfolio-content");
  const act = document.getElementById("act-content");

  // 區塊標題 h2
  const eduTitle = document.getElementById("edu-title");
  const expTitle = document.getElementById("exp-title");
  const certTitle = document.getElementById("cert-title");
  const portTitle = document.getElementById("portfolio-title");
  const actTitle = document.getElementById("act-title");

  // 導覽列項目（需要在 HTML 中加上對應 id）
  const navEdu = document.getElementById("nav-edu");
  const navExp = document.getElementById("nav-exp");
  const navCert = document.getElementById("nav-cert");
  const navPort = document.getElementById("nav-port");
  const navAct = document.getElementById("nav-act");
    
  
  const zh = {
    intro: "國立臺北大學｜資訊管理研究所",
    titles: {
      edu: "學歷",
      exp: "經歷",
      cert: "證照",
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
        <h5><span class="text-muted">2024.08 - 現在</span>&nbsp;臺北大學智慧金融創新科技實驗室 <a href="https://www.aifitesg.org/" target="_blank" style="color: inherit; text-decoration: underline;">(IFIT Lab)<a> 研究員</h5>
        <ul>
          <li>創新智慧代理 AI 技術於自主永續報告生成 (工研院)</li>
          <li>數位支持、溝通無礙：AI科技協助語言障礙者溝通輔具之研發、支持與推廣<br>子計畫三：包容溝通支持多模態跨語言任務導向對話系統 (國科會)</li>
          <li>智慧城市大型語言模型代理人系統 (資策會)</li>
        </ul>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2024.08 - 現在</span>&nbsp;臺北大學商學院 EMI教學助理</h5>
        <ul>
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

  port: `
  <div class="portfolio-cards">
    <div class="portfolio-item">
      <a href="https://youtu.be/CgjfBryTFVQ" target="_blank" class="portfolio-card card-ai-awards"></a>
      <div class="portfolio-caption">2025 經濟部智慧創新大賞<br><strong>美國關稅大師</strong></div>
    </div>
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
      <div class="portfolio-caption">2024 NTPU USR x 生成式AI行銷競賽<br><strong>三峽湧翠，茶樹傳香；永續低碳的自然之選</strong></div>
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
          <li>Innovative Agentic AI Technology for Autonomous ESG Report Generation (ITRI)</li>
          <li>Inclusive AI Dialogue Assistive Device Project, sub-project 3:<br>Multimodal Cross-lingual Task-Oriented Dialogue System for Inclusive Communication Support (NSTC)</li>
          <li>Large Language Model Agent System for Smart City (III)</li>
        </ul>
      </div>
      <div class="timeline-item">
        <h5><span class="text-muted">2024.08 - Now</span>&nbsp;EMI Teaching Assistent, College Of Business, NTPU</h5>
        <ul>
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

  port: `
    <div class="portfolio-cards">
      <div class="portfolio-item">
        <a href="https://youtu.be/CgjfBryTFVQ" target="_blank" class="portfolio-card card-ai-awards"></a>
        <div class="portfolio-caption">2025 Best AI Awards<br><strong>Master of American Tariffs</strong></div>
      </div>
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
        <div class="portfolio-caption">2022 FinTech Competition<br><strong>N.FeaT Freelance Creator Streaming Platform</strong></div>
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
    port.innerHTML = lang.port;
    act.innerHTML = lang.act;

    eduTitle.textContent = lang.titles.edu;
    expTitle.textContent = lang.titles.exp;
    certTitle.textContent = lang.titles.cert;
    portTitle.textContent = lang.titles.port;
    actTitle.textContent = lang.titles.act;

    // 導覽列文字切換
    navEdu.textContent = lang.titles.edu;
    navExp.textContent = lang.titles.exp;
    navCert.textContent = lang.titles.cert;
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