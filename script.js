// 커서 블러 효과
let cursorBlur = null;

function initCursorBlur() {
    // 커서 블러 요소 생성
    cursorBlur = document.createElement('div');
    cursorBlur.className = 'cursor-blur';
    document.body.appendChild(cursorBlur);

    // 마우스 이동 이벤트
    document.addEventListener('mousemove', (e) => {
        if (cursorBlur) {
            cursorBlur.style.left = e.clientX + 'px';
            cursorBlur.style.top = e.clientY + 'px';
            cursorBlur.classList.add('active');
        }
    });

    // 마우스가 화면을 벗어날 때 블러 제거
    document.addEventListener('mouseleave', () => {
        if (cursorBlur) {
            cursorBlur.classList.remove('active');
        }
    });

    // 클릭 가능한 요소에서 블러 크기 조정
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .tab-button, .contact-button, .cta-button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursorBlur) {
                cursorBlur.style.width = '1200px';
                cursorBlur.style.height = '1200px';
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursorBlur) {
                cursorBlur.style.width = '800px';
                cursorBlur.style.height = '800px';
            }
        });
    });
}

// Intersection Observer for Section Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize sections with fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    // Language initialization
    const savedLang = localStorage.getItem('preferred-language') || 'ko';
    switchLanguage(savedLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // 커서 블러 효과 초기화
    initCursorBlur();
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionsMap = {
        'about': '#about',
        'career': '#career',
        'skills': '#skills',
        'research': '#research',
        'lectures': '#lectures',
        'contact': '#contact'
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Scroll to section
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    const offset = 100; // Account for sidebar
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active nav link on scroll
    const updateActiveNav = () => {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check

    // Hero section fade in
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Research items stagger animation
    const researchItems = document.querySelectorAll('.research-item');
    researchItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300);
    });

    // Skill category animation
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        setTimeout(() => {
            category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 500);
    });

    // Job description list animation
    const jobDescriptions = document.querySelectorAll('.job-description li');
    jobDescriptions.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        setTimeout(() => {
            item.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200);
    });

    // Contact button hover effect
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        contactButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // CTA button hover effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Logo hover animation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    }

    // Smooth scroll for CTA button
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#contact');
            if (target) {
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add scroll reveal animation for elements
const revealElements = document.querySelectorAll('.job, .lecture-item');
revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    revealObserver.observe(el);
});

// Language Translation Data
const translations = {
    ko: {
        'hero-description': 'Ph.D. in Supply Chain Logistics Management를 보유한 전문가로서, 현재는 WES(Warehouse Execution System)를 통한 자동화 창고 최적화에 주력하고 있습니다. 대규모 IT 프로젝트 리드부터 학술 연구까지, 실무와 이론을 연결하여 물류 산업의 디지털 전환과 효율성 향상을 추구합니다.',
        'cta-button': '연락하기',
        'about-title': 'About Me',
        'about-p1': '공급망 관리 및 물류 분야에서 28년 이상의 경험을 쌓아온 전문가로서, 학술 연구와 산업 현장의 경계를 넘나드는 통합적 접근을 추구합니다.',
        'about-p2': 'LG CNS에서 20년간 IT 프로젝트 PM, PL, 분석·설계를 담당하며 물류 시스템 구축의 실무 경험을 쌓았습니다. 우정사업본부 RFID 구축, 우편물류통합정보시스템, LG전자 TMS 구축, 미국 Wal*Mart/Best Buy 대응 RFID 구축 등 다양한 대규모 프로젝트를 성공적으로 리드했습니다.',
        'about-p3': '현재는 LX 판토스 팀장으로서 로봇/설비제어 WES, WCS, ECS 관련 시스템 구축에 주력하고 있습니다. 상위시스템(WMS)과 자동화설비 시스템(ECS) 간 실시간 작업계획 최적화를 위한 WES 개발을 통해 스마트 물류 시스템을 구축하고 있습니다. 이전에는 SAP eWM, TM 모듈 기반 물류정보시스템 구축을 담당하며 조직의 전략적 혁신을 이끌어왔습니다. 동시에 학회 활동과 강의를 통해 지식을 공유하고, DEA-SBM 모형, 산업연관분석 등 정량적 방법론을 활용한 연구를 지속적으로 수행하고 있습니다.',
        'about-interests': '주요 관심 분야:',
        'experience-title': '경력',
        'research-title': '연구',
        'lectures-title': '강의',
        'tab-current': '현재',
        'tab-past': '과거',
        'contact-title': '연락하기',
        'contact-description': '새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든지 연락 주세요.',
        'contact-button': 'Say Hello',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-location': 'Location',
        'location-value': '경기도 용인시 기흥구',
        'present': '현재',
        'job-lx-title': '팀장',
        'company-lx': 'LX 판토스',
        'job-lx-1': '로봇/설비제어 WES(Warehouse Execution System), WCS(Warehouse Control System), ECS(Equipment Control System) 관련 시스템 구축',
        'job-lx-1-1': '상위시스템(WMS)과 자동화설비 시스템(ECS) 간 실시간 작업계획 최적화를 위한 WES 개발 및 운영',
        'job-lx-1-2': 'WES는 WCS, Optimizer, ECS를 포괄하는 통합 자동화 제어 시스템 구축',
        'job-lx-2': 'SAP eWM(Extended Warehouse Management), TM(Transportation Management) 모듈 기반 물류정보시스템 구축 및 운영',
        'job-lx-3': '신사업발굴 및 해외영업 전략 수립',
        'job-lx-4': '경영혁신부문을 이끌며 조직의 전략적 혁신과 프로세스 개선을 주도',
        'job-lx-5': '물류 운영 효율성 향상을 위한 데이터 기반 의사결정 시스템 구축',
        'job-lx-6': '내부 컨설팅 및 교육 프로그램 기획 및 실행',
        'job-iitp-title': '산업계 전문위원',
        'company-iitp': '정보통신기획평가원(IITP)',
        'job-iitp-1': '디지털트윈 기술분야 공급망 트윈 신규사업 기획위원회 산업 전문가 위원 활동 (2026.01)',
        'job-iitp-2': '온디바이스 AI 분야 신규사업 기획위원회 산업 전문가 위원 활동 (2025.04)',
        'job-iitp-3': '정보통신 분야 프로젝트 평가 및 기술 검토',
        'job-iitp-4': '산업계 관점에서의 정책 자문 제공',
        'job-lifetime-title': '종신회원',
        'company-logistics': '한국물류과학기술학회',
        'job-lifetime-1': '학회 정책 및 연구 방향 논의에 참여',
        'job-lifetime-2': '후학 양성 및 학문 발전에 기여',
        'job-lg-title': 'PM, PL, 분석·설계 담당',
        'job-lg-period': '(19년 5개월)',
        'job-lg-1': '우정사업본부 RFID 구축, 우편집중국 통합서버 구축, LG전자 TMS 구축 등 대규모 프로젝트 리드',
        'job-lg-2': '미국 Wal*Mart, Best Buy 대응 RFID 구축, LG전자 창고최적화 시스템 구축, LG필립스LCD RFID 구축',
        'job-lg-3': '우정사업본부 우편물류통합정보시스템 1, 2단계 구축 (PL, 업무분석/설계)',
        'job-lg-4': 'LG전자 국내영업 마스터플랜 수립 (컨설팅)',
        'job-lg-5': '솔루션 비즈니스 체계화(SBF) 방법론 개발 및 적용',
        'job-lg-6': 'LG실트론 공정자동화 시스템 개발',
        'job-lg-7': 'IT 프로젝트 전반의 기획, 관리 및 일정 관리',
        'job-lg-8': '비즈니스 요구사항 분석 및 시스템 설계',
        'job-lg-9': '다수의 해외법인 대상 프로젝트 수행 (영어 프리젠테이션 및 회의 진행)',
        'skill-scm': 'SCM/물류 컨설팅',
        'skill-input-output': '산업연관분석',
        'cert-logistics': '물류관리사',
        'cert-info': '정보처리기사',
        'cert-safety': '산업안전기사',
        'research-1-title': '학회발표: 화학산업과 AI, Digital Twin 물류',
        'research-1-venue': '한국공업화학회 (학회발표)',
        'research-1-desc': '화학산업에서의 AI와 Digital Twin 기술을 활용한 물류 혁신 방안에 대해 발표했습니다.',
        'research-2-title': '산업연관분석을 활용한 교통부문 사회간접자본의 경제적 파급효과 변화 분석',
        'research-2-venue': '대한교통학회 (학술지등록)',
        'research-2-desc': '산업연관분석 기법을 활용하여 교통 인프라 투자가 경제에 미치는 파급효과를 정량적으로 분석한 연구입니다.',
        'research-3-title': '물류기업의 효율성 변화 비교 연구: DEA-SBM과 Meta-Frontier SBM을 활용하여',
        'research-3-venue': '한국로지스틱스학회 (학회발표)',
        'research-3-desc': 'DEA-SBM과 Meta-Frontier SBM 모형을 활용하여 물류기업의 효율성 변화를 비교 분석한 연구입니다.',
        'research-4-title': 'DEA-SBM 모형을 활용한 국내외 물류기업의 재무 효율성 분석',
        'research-4-venue': '한국로지스틱스학회 (학술지등록)',
        'research-4-desc': 'DEA-SBM 모형을 통해 물류기업의 재무 효율성을 측정하고 국내외 기업 간 비교분석을 수행했습니다.',
        'research-5-title': '코로나19 전후 국내외 물류기업의 재무 효율성 변화 비교 분석',
        'research-5-venue': '한국SCM학회 (학회발표)',
        'research-5-desc': '코로나19 팬데믹 전후 물류기업의 재무 효율성 변화를 비교 분석하여 시사점을 도출한 연구입니다.',
        'research-6-title': '논문 데이터 분석을 통한 물류분야 수요예측 연구 동향 분석',
        'research-6-venue': '한국물류과학기술학회',
        'research-6-desc': '물류 분야 수요예측 연구의 동향을 문헌 데이터 분석을 통해 체계적으로 정리하고 향후 연구 방향을 제시했습니다.',
        'research-7-title': 'DEA-SBM 모형을 활용한 국내외 물류기업의 재무 효율성 비교 분석',
        'research-7-venue': '인하대학교 물류전문대학원',
        'research-7-desc': '박사 학위 논문으로, 물류기업의 효율성을 정량적으로 평가하는 방법론을 제시하고 실증 분석을 수행했습니다.',
        'research-8-title': '솔루션 비즈니스 체계화 방법론을 활용한 SI 솔루션 품질 향상',
        'research-8-venue': '한국경영과학회',
        'research-8-desc': '시스템 통합 솔루션의 품질 향상을 위한 체계적인 방법론을 제시하고 적용 사례를 분석했습니다.',
        'lecture-uni': '인하대학교, 건국대학교',
        'lecture-uni-desc': 'IT기본, SCM/물류, DT/AX 포럼 및 강의',
        'lecture-corp': 'LG CNS, LX 판토스',
        'lecture-corp-desc': 'SCM/물류 기초·심화과정, 신입사원 비즈니스 매너, 컨설팅 스킬 등 사내 교육'
    },
    en: {
        'hero-description': 'As a professional with a Ph.D. in Supply Chain Logistics Management, I currently focus on automated warehouse optimization through WES (Warehouse Execution System). From leading large-scale IT projects to academic research, I connect practice and theory to pursue digital transformation and efficiency improvement in the logistics industry.',
        'cta-button': 'Get In Touch',
        'about-title': 'About Me',
        'about-p1': 'As an expert with over 28 years of experience in supply chain management and logistics, I pursue an integrated approach that transcends the boundaries between academic research and industry practice.',
        'about-p2': 'I gained practical experience in logistics system construction by serving as PM, PL, and analysis/design for IT projects at LG CNS for 20 years. I successfully led various large-scale projects including Korea Post RFID construction, integrated postal logistics information system, LG Electronics TMS construction, and RFID construction for US Wal*Mart/Best Buy.',
        'about-p3': 'Currently, as a team leader at LX Pantos, I focus on building robot/equipment control WES, WCS, and ECS-related systems. I am building smart logistics systems through WES development for real-time work plan optimization between upper systems (WMS) and automated equipment systems (ECS). Previously, I led strategic innovation in organizations by building logistics information systems based on SAP eWM and TM modules. At the same time, I share knowledge through academic activities and lectures, and continuously conduct research using quantitative methodologies such as DEA-SBM models and input-output analysis.',
        'about-interests': 'Key Areas of Interest:',
        'experience-title': 'Where I\'ve Worked',
        'research-title': 'Featured Research',
        'lectures-title': 'Teaching & Lectures',
        'tab-current': 'Current',
        'tab-past': 'Past',
        'contact-title': 'Get In Touch',
        'contact-description': 'Feel free to reach out if you\'d like to discuss new projects or collaboration opportunities.',
        'contact-button': 'Say Hello',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-location': 'Location',
        'location-value': 'Gyeonggi-do, Yongin-si, Giheung-gu',
        'present': 'Present',
        'job-lx-title': 'Team Leader',
        'company-lx': 'LX Pantos',
        'job-lx-1': 'Building robot/equipment control WES (Warehouse Execution System), WCS (Warehouse Control System), ECS (Equipment Control System) related systems',
        'job-lx-1-1': 'Development and operation of WES for real-time work plan optimization between upper systems (WMS) and automated equipment systems (ECS)',
        'job-lx-1-2': 'Building an integrated automation control system that encompasses WCS, Optimizer, and ECS',
        'job-lx-2': 'Building and operating logistics information systems based on SAP eWM (Extended Warehouse Management) and TM (Transportation Management) modules',
        'job-lx-3': 'New business discovery and overseas sales strategy establishment',
        'job-lx-4': 'Leading the management innovation division, driving strategic innovation and process improvement within the organization',
        'job-lx-5': 'Building data-driven decision-making systems to improve logistics operational efficiency',
        'job-lx-6': 'Planning and executing internal consulting and training programs',
        'job-iitp-title': 'Industry Expert Committee Member',
        'company-iitp': 'Institute of Information & Communications Technology Planning & Evaluation (IITP)',
        'job-iitp-1': 'Industry expert committee member for Digital Twin Technology Field Supply Chain Twin New Business Planning Committee (2026.01)',
        'job-iitp-2': 'Industry expert committee member for On-Device AI Field New Business Planning Committee (2025.04)',
        'job-iitp-3': 'Project evaluation and technical review in information and communications field',
        'job-iitp-4': 'Providing policy advisory from industry perspective',
        'job-lifetime-title': 'Lifetime Member',
        'company-logistics': 'Korean Society of Logistics Science and Technology',
        'job-lifetime-1': 'Participating in academic society policy and research direction discussions',
        'job-lifetime-2': 'Contributing to nurturing future scholars and academic development',
        'job-lg-title': 'PM, PL, Analysis & Design',
        'job-lg-period': '(19 years 5 months)',
        'job-lg-1': 'Led large-scale projects including Korea Post RFID construction, integrated server for postal sorting centers, LG Electronics TMS construction',
        'job-lg-2': 'RFID construction for US Wal*Mart and Best Buy, LG Electronics warehouse optimization system construction, LG Philips LCD RFID construction',
        'job-lg-3': 'Korea Post integrated postal logistics information system Phase 1 & 2 construction (PL, business analysis/design)',
        'job-lg-4': 'LG Electronics domestic sales master plan establishment (consulting)',
        'job-lg-5': 'Solution Business Framework (SBF) methodology development and application',
        'job-lg-6': 'LG Siltron process automation system development',
        'job-lg-7': 'Planning, management, and schedule management for IT projects',
        'job-lg-8': 'Business requirements analysis and system design',
        'job-lg-9': 'Executed multiple projects for overseas subsidiaries (English presentations and meetings)',
        'skill-scm': 'SCM/Logistics Consulting',
        'skill-input-output': 'Input-Output Analysis',
        'cert-logistics': 'Logistics Manager',
        'cert-info': 'Information Processing Engineer',
        'cert-safety': 'Industrial Safety Engineer',
        'research-1-title': 'Conference Presentation: Chemical Industry and AI, Digital Twin Logistics',
        'research-1-venue': 'Korean Institute of Chemical Engineers (Conference Presentation)',
        'research-1-desc': 'Presented on logistics innovation strategies using AI and Digital Twin technology in the chemical industry.',
        'research-2-title': 'Analysis of Economic Ripple Effects and Changes in Social Overhead Capital in the Transportation Sector Using Input-Output Analysis',
        'research-2-venue': 'Korean Society of Transportation (Journal Registration)',
        'research-2-desc': 'A study that quantitatively analyzed the economic ripple effects of transportation infrastructure investment using input-output analysis techniques.',
        'research-3-title': 'Comparative Study on Efficiency Changes of Logistics Companies: Using DEA-SBM and Meta-Frontier SBM',
        'research-3-venue': 'Korea Logistics Society (Conference Presentation)',
        'research-3-desc': 'A study that compared and analyzed efficiency changes of logistics companies using DEA-SBM and Meta-Frontier SBM models.',
        'research-4-title': 'Financial Efficiency Analysis of Domestic and International Logistics Companies Using DEA-SBM Model',
        'research-4-venue': 'Korea Logistics Society (Journal Registration)',
        'research-4-desc': 'Measured the financial efficiency of logistics companies using DEA-SBM model and performed comparative analysis between domestic and international companies.',
        'research-5-title': 'Comparative Analysis of Financial Efficiency Changes of Domestic and International Logistics Companies Before and After COVID-19',
        'research-5-venue': 'Korea SCM Society (Conference Presentation)',
        'research-5-desc': 'A study that compared and analyzed financial efficiency changes of logistics companies before and after the COVID-19 pandemic to derive implications.',
        'research-6-title': 'Analysis of Research Trends in Demand Forecasting in the Logistics Field Through Paper Data Analysis',
        'research-6-venue': 'Korean Society of Logistics Science and Technology',
        'research-6-desc': 'Systematically organized research trends in demand forecasting in the logistics field through literature data analysis and presented future research directions.',
        'research-7-title': 'Comparative Analysis of Financial Efficiency of Domestic and International Logistics Companies Using DEA-SBM Model',
        'research-7-venue': 'Inha University Graduate School of Logistics',
        'research-7-desc': 'Ph.D. dissertation that presented a methodology for quantitatively evaluating the efficiency of logistics companies and performed empirical analysis.',
        'research-8-title': 'Improving SI Solution Quality Using Solution Business Systematization Methodology',
        'research-8-venue': 'Korean Institute of Industrial Engineers',
        'research-8-desc': 'Presented a systematic methodology for improving the quality of system integration solutions and analyzed application cases.',
        'lecture-uni': 'Inha University, Konkuk University',
        'lecture-uni-desc': 'IT Basics, SCM/Logistics, DT/AX Forum and Lectures',
        'lecture-corp': 'LG CNS, LX Pantos',
        'lecture-corp-desc': 'In-house training including SCM/Logistics basic and advanced courses, new employee business manners, consulting skills, etc.'
    }
};

// Language Switcher Functionality
let currentLang = 'ko';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}
