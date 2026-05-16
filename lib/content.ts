export type Lang = 'en' | 'ko'

export const content = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      name: '[Name]',
      title: 'Strategic Finance Executive & Project Director',
      tagline: '17+ years in Global Beauty Industry · M&A · Global Expansion · P&L Leadership',
      cta: 'View Experience',
      available: '',
    },
    about: {
      heading: 'About Me',
      body: [
        'Strategic Finance Executive and Project Director with 17+ years of experience at a global beauty group. Proven track record of driving business strategy, optimizing profitability, and leading complex decision-making beyond traditional finance roles.',
        'Recently led a Post-Merger Integration (PMI) across 7 cross-functional departments and established critical market entry frameworks for the US and China. Adept at applying multinational financial expertise, M&A experience, and deep beauty industry insights to accelerate global business expansion.',
      ],
      highlights: [
        { value: '17+ yrs', label: 'Global Beauty Industry' },
        { value: '€500M+', label: 'Revenue Managed' },
        { value: '5', label: 'Countries Overseen' },
        { value: '7', label: 'Depts Led in PMI' },
      ],
    },
    experience: {
      heading: 'Work Experience',
      items: [
        {
          company: '[Global Beauty Group] — [Country A]',
          location: '[City A]',
          role: 'Project Management Officer, Post-Merger Integration',
          period: '[20XX] – [20XX]',
          note: '',
          responsibilities: [
            'Orchestrated the comprehensive Post-Merger Integration (PMI) of an acquired brand into the global group.',
            'Led a 7-department Core Integration Team (Finance, Legal, IT, R&I, Operations, HR, Corporate Communications), bridging leadership and aligning strategic goals across both entities.',
            'Conducted cross-functional gap analyses to identify operational gaps and build robust synergies.',
            'Formulated an international expansion strategy, aligning go-to-market schedules with each target country.',
          ],
          achievements: [
            'Developed and executed a multi-year integration roadmap targeting full operational integration, ensuring compliance with global standards.',
            'Redesigned the post-acquisition organizational framework targeting back-office synergies, with the harmonization of Compensation & Benefits (C&B) structures.',
            'Directed financial and tax feasibility studies for GTM strategies, successfully enabling a major e-commerce platform launch and supporting the brand\'s rollout in a new market.',
            'Ensured business continuity during the transition phase by mitigating supply chain risks and optimizing inventory levels with key retailers.',
          ],
        },
        {
          company: '[Global Beauty Group] — [Country B]',
          location: '[City B]',
          role: 'Zone Division Finance Director, Professional Products Division',
          period: '[20XX] – [20XX]',
          note: '',
          responsibilities: [
            'Managed financial results for a regional Professional Products Division, overseeing a €500M+ revenue portfolio across 5 countries and 2 global brands spanning salon, offline retail, and e-commerce channels.',
            'Synthesized complex market data into actionable business insights, fostering alignment between regional and central teams to accelerate executive decision-making.',
          ],
          achievements: [
            'Revamped the offline retail strategy by concentrating investments in top-tier cities and high-performing doors.',
            'Achieved gross margin improvements by applying Revenue Growth Management (RGM) methodologies to optimize e-commerce promotional spend during major retail festivals.',
            'Restructured the GTM strategy for a key market, orchestrating a pivot from offline to online channels and optimizing commercial margins to improve profitability.',
            'Enhanced regional productivity by strategically reallocating field resources to major urban centers.',
          ],
        },
        {
          company: '[Global Beauty Group] — [Country A]',
          location: '[City A]',
          role: 'Finance Controlling Manager & Controller (Multiple Divisions)',
          period: '[20XX] – [20XX]',
          note: '',
          subroles: [
            { title: 'Prestige Division Finance Controlling Manager', period: '[20XX – 20XX]', detail: '+₩400B portfolio · 9 brands · 7 direct reports' },
            { title: 'Consumer Products Division Finance Controlling Manager', period: '[20XX – 20XX]', detail: '+₩30B portfolio · 2 brands · 2 direct reports' },
            { title: 'Dermatological Beauty Division Finance Controlling Manager', period: '[20XX – 20XX]', detail: '+₩20B portfolio · 3 brands' },
            { title: 'Corporate Finance Controller', period: '[20XX – 20XX]', detail: '' },
          ],
          responsibilities: [
            'Led annual business planning and budgeting processes across all functions, collaborating with commercial and brand marketing teams to identify growth opportunities and manage business risks.',
            'Executed end-to-end P&L management across major divisions, delivering commercial analyses and ROI simulations to drive strategic investments.',
          ],
          achievements: [
            'Co-led an organizational redesign with HR to transition a prestige division into a category-led, digital-centric structure.',
            'Led the complex financial and operational closing of a brand exit, achieving financial targets while protecting brand image.',
            'Implemented an advanced business planning system, modernizing workflows for forecasting, inventory control, and expense management.',
            'Revamped working methodologies and internal control frameworks to safeguard business assets and ensure financial compliance.',
          ],
        },
      ],
    },
    education: {
      heading: 'Education',
      items: [
        {
          school: '[University]',
          location: '[Country]',
          degree: 'Bachelor of Arts in Economics · Double Major in Business Administration',
          period: '[20XX – 20XX]',
        },
      ],
    },
    skills: {
      heading: 'Skills & Certifications',
      categories: [
        {
          title: 'Certifications',
          items: ['U.S. CPA — All exams passed'],
        },
        {
          title: 'Languages',
          items: ['Korean — Native', 'English — Fluent'],
        },
        {
          title: 'Technical',
          items: ['SAP ERP (FI/CO, SD, MM)', 'Financial Modeling', 'P&L Management', 'M&A & PMI', 'Revenue Growth Management (RGM)', 'Business Planning & Budgeting'],
        },
        {
          title: 'Industry',
          items: ['Global Beauty Industry', 'Cross-border M&A', 'Market Entry Strategy', 'E-commerce', 'North Asia Markets'],
        },
      ],
    },
    contact: {
      heading: 'Get in Touch',
      subheading: 'Open to strategic finance and project leadership opportunities. Feel free to reach out.',
      email: '',
      linkedin: 'LinkedIn Profile',
    },
  },

  ko: {
    nav: {
      about: '소개',
      experience: '경력',
      education: '학력',
      skills: '역량',
      contact: '연락처',
    },
    hero: {
      name: '[이름]',
      title: '글로벌 재무 디렉터 & 프로젝트 총괄',
      tagline: '글로벌 뷰티 산업 17년+ · M&A · 글로벌 확장 · P&L 리더십',
      cta: '경력 보기',
      available: '',
    },
    about: {
      heading: '핵심 역량 요약',
      body: [
        '17년 이상의 글로벌 뷰티 산업 재무·전략 전문가로, 글로벌 그룹에서 재무 디렉터 및 PMO로 근무하며 전통적 재무 관리를 넘어 담당 비즈니스 유닛의 전략 수립 및 수익성 최적화를 주도했습니다.',
        '크로스보더 M&A 및 PMI 총괄, Zone Finance Director로서 핵심 의사결정 지원, 글로벌 확장 파트너로서의 역량을 보유하고 있습니다.',
      ],
      highlights: [
        { value: '17년+', label: '글로벌 뷰티 산업' },
        { value: '8,500억', label: '관리 매출 규모' },
        { value: '5개국', label: '북아시아 총괄' },
        { value: '7개 부서', label: 'PMI 리딩' },
      ],
    },
    experience: {
      heading: '경력사항',
      items: [
        {
          company: '[글로벌 뷰티 그룹] — [국가 A]',
          location: '[도시 A]',
          role: 'Project Management Officer, 인수 통합(PMI) 프로젝트 총괄',
          period: '[20XX.XX – 20XX.XX]',
          note: '',
          responsibilities: [
            '인수된 브랜드의 인수 후 통합(PMI) 프로젝트 기획 및 총괄',
            '7개 핵심 부서(재무, 법무, IT, R&I, 운영, HR, 기업 홍보)의 부서간 협업 주도, 양사 경영진 간의 전략적 방향성 조율',
            '양사 간 부서별 운영 프로세스 차이 분석 및 시너지 창출 전략 수립',
            '무형자산의 그룹 내 이관 및 국가별 시장 진출 일정에 맞춘 단계별 글로벌 확장 전략 수립',
          ],
          achievements: [
            '완전한 운영 통합을 위한 중장기 로드맵 수립 및 실행',
            '경영지원 부문 시너지 창출을 위한 조직 구조 재편 및 양사 간 보상/복리후생(C&B) 제도 통합',
            '주요 이커머스 플랫폼 런칭 및 신규 시장 진출을 위한 진입 전략의 재무·세무 타당성 검토',
            '공식 통합 전 주요 유통 채널 재고 최적화 및 공급망·벤더 리스크 관리를 통해 비즈니스 연속성 확보',
          ],
        },
        {
          company: '[글로벌 뷰티 그룹] — [국가 B]',
          location: '[도시 B]',
          role: 'Zone Division Finance Director, Professional Products Division',
          period: '[20XX.XX – 20XX.XX]',
          note: '',
          responsibilities: [
            '지역 헤어살롱 사업부(PPD) 재무 운영 총괄 — 5개국, 2개 글로벌 브랜드 대상 약 8,500억원(€500M) 규모의 매출 및 수익성 관리',
            '총괄 사업부장(GM) 및 영업/마케팅 리더와 협력하여 경영진의 신속한 의사결정 및 글로벌 본사-지사 간 전략적 합의 주도',
          ],
          achievements: [
            '주요 거점 도시 및 매출 상위 매장 중심으로 투자를 집중하고, 하위 매장 운영을 효율화하여 채널 전략 개편',
            '주요 쇼핑 페스티벌 기간에 RGM 기법을 도입해 프로모션 비용을 최적화하고 매출총이익률(Gross Margin) 개선',
            '특정 시장 GTM 전략 구조 조정 — 오프라인에서 온라인 채널로의 전환 주도, 중간업체 마진 구조 개선으로 수익성 향상',
            '외곽 지역 현장 인력을 주요 대도시 중심으로 재배치하여 조직 생산성 향상',
          ],
        },
        {
          company: '[글로벌 뷰티 그룹] — [국가 A]',
          location: '[도시 A]',
          role: 'Finance Controlling Manager & Controller (Multiple Divisions)',
          period: '[20XX.XX – 20XX.XX]',
          note: '',
          subroles: [
            { title: '프레스티지 사업부 Finance Controlling Manager', period: '[20XX.XX – 20XX.XX]', detail: '4,000억원 이상 규모 · 9개 브랜드 · 팀원 7명 직접 관리' },
            { title: '시판 사업부 Finance Controlling Manager', period: '[20XX.XX – 20XX.XX]', detail: '300억원 이상 규모 · 2개 브랜드 · 팀원 2명 직접 관리' },
            { title: '더마 사업부 Finance Controlling Manager', period: '[20XX.XX – 20XX.XX]', detail: '200억원 이상 규모 · 3개 브랜드' },
            { title: 'Corporate Finance Controller', period: '[20XX.XX – 20XX.XX]', detail: '' },
          ],
          responsibilities: [
            '유관 부서와의 긴밀한 협업을 통해 연간 비즈니스 계획 수립 및 예산 관리 프로세스 총괄',
            '3개 핵심 사업부 매출부터 최종 이익까지 전방위적 손익(P&L) 관리 총괄, ROI 시뮬레이션 도출',
          ],
          achievements: [
            '사업부 내 오프라인 중심의 개별 브랜드 조직을 카테고리별 통합 운영과 디지털 채널 위주로 개편',
            '브랜드 철수 시 재무·운영 청산 절차 총괄 — 목표 재무 지표 및 투자 회수 기간 달성',
            '체계화된 사업 계획 시스템 도입으로 수요 예측, 재고 및 영업 비용 관리 프로세스 개선',
            '업무 절차와 내부 통제 체계 개편을 통해 사업부 자산 보호 및 글로벌 재무 준수 강화',
          ],
        },
      ],
    },
    education: {
      heading: '학력사항',
      items: [
        {
          school: '[대학교]',
          location: '[국가]',
          degree: '경제학 학사 · 경영학 이중전공',
          period: '[20XX.XX – 20XX.XX]',
        },
      ],
    },
    skills: {
      heading: '자격 및 역량',
      categories: [
        {
          title: '자격증',
          items: ['미국 공인회계사 (U.S. CPA) — 전과목 합격'],
        },
        {
          title: '어학',
          items: ['한국어 — 모국어', '영어 — 유창함'],
        },
        {
          title: 'IT 역량',
          items: ['SAP ERP (FI/CO, SD, MM)', '재무 모델링', '손익(P&L) 관리', 'M&A 및 PMI', '수익성장관리(RGM)', '비즈니스 플래닝 및 예산관리'],
        },
        {
          title: '산업 전문성',
          items: ['글로벌 뷰티 산업', '크로스보더 M&A', '시장 진입 전략', 'E-커머스', '북아시아 시장'],
        },
      ],
    },
    contact: {
      heading: '연락처',
      subheading: '전략적 재무 및 프로젝트 리더십 기회를 모색 중입니다. 편하게 연락 주세요.',
      email: '',
      linkedin: 'LinkedIn 프로필',
    },
  },
}
