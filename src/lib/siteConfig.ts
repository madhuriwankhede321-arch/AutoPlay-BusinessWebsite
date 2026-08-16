/**
 * Central Configuration for Madhuri Wankhede's Coaching Business
 * 
 * Edit this file to easily update personal details, links, offerings,
 * FAQs, and integration endpoints.
 */

export interface CoachingService {
  id: string;
  title: string;
  badge: string;
  description: string;
  topics: string[];
  toolsHighlight?: string;
  ctaText: string;
  ctaActionId?: string;
  iconName: string;
}

export interface ProgramWeek {
  week: number;
  phase: string;
  title: string;
  description: string;
  keyOutcomes: string[];
}

export interface InteractiveWorkflowNode {
  id: string;
  label: string;
  category: 'input' | 'ai' | 'automation' | 'output';
  description: string;
  detail: string;
  toolHint: string;
}

export interface WorkflowPreset {
  id: string;
  name: string;
  description: string;
  nodes: InteractiveWorkflowNode[];
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  badge: string;
  tools: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tag: string;
  status: 'Coming Soon' | 'Available';
  link?: string;
}

export const siteConfig = {
  // Brand
  brandName: 'AutoPlay',

  // Personal Brand & Contact
  coach: {
    name: 'Madhuri Wankhede',
    role: 'AI & Automation Coach',
    shortRole: 'Software Test Engineer & Automation Coach',
    email: 'madhuriwankhede321@gmail.com',
    location: 'Pune, India',
    // Replace with your real Calendly or booking URL (e.g., 'https://calendly.com/your-name/30min')
    bookingUrl: 'YOUR_BOOKING_LINK',
    // Set to your actual LinkedIn URL (e.g. 'https://linkedin.com/in/madhuri-wankhede')
    linkedInUrl: 'YOUR_LINKEDIN_URL',
    // Set to your actual Twitter/X or Instagram URL if desired
    instagramUrl: 'YOUR_INSTAGRAM_URL',
    githubUrl: 'YOUR_GITHUB_URL',
  },

  // Positioning & Messaging
  positioning: {
    eyebrow: 'AI × AUTOMATION × PRACTICAL COACHING',
    headline: 'Turn Repetitive Work Into Automated Workflows.',
    supporting:
      'I help professionals and organizations use AI and automation to save time, simplify repetitive work, and become more productive — through practical, hands-on coaching.',
    credibilityBadge: 'Practical. Hands-on. Built around your real work.',
    corePhilosophyQuote: "Don't learn AI just for the sake of learning AI. Learn it to solve real problems.",
    fiveSecondPitch: 'Find repetitive work. Automate it. Get your time back.',
  },

  // Form & Newsletter Configuration
  integrations: {
    // Optional Web3Forms / Formspree access key or leave empty to use instant mailto fallback
    formspreeEndpoint: '', // e.g., 'https://formspree.io/f/xxxxxx'
    web3formsKey: '', // e.g., 'your-web3forms-access-key'
    newsletterEndpoint: '', // e.g., 'https://your-newsletter.com/api/subscribe'
  },

  // Navigation Links
  navLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Demo', href: '#demo' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ],

  // Problem Section
  problems: [
    {
      id: 'manual-work',
      title: 'Too Much Manual Work',
      description: 'Repeating the same tasks every day consumes valuable time and energy.',
      icon: 'ClockAlert',
    },
    {
      id: 'ai-overwhelming',
      title: 'AI Feels Overwhelming',
      description: 'There are hundreds of AI tools, but knowing which ones actually help is difficult.',
      icon: 'Layers',
    },
    {
      id: 'tools-without-strategy',
      title: 'Tools Without Strategy',
      description: "Using AI tools randomly doesn't necessarily create meaningful productivity gains.",
      icon: 'Compass',
    },
    {
      id: 'no-time-to-learn',
      title: "You Don't Have Time to Learn Everything",
      description: 'You need practical solutions that work with your existing workflow.',
      icon: 'ZapOff',
    },
  ],

  problemTransition:
    "You don't need to become an AI expert overnight. You need to know what to automate and how to implement it.",

  // 3-Step Solution
  solutionSteps: [
    {
      step: '01',
      title: 'Identify',
      subtitle: 'Find the Friction',
      description: 'Find repetitive tasks and bottlenecks in your current daily or team workflow.',
      icon: 'Search',
    },
    {
      step: '02',
      title: 'Automate',
      subtitle: 'Pick the Right Tool',
      description: 'Choose the right AI, automation, or no-code tools tailored specifically for the task.',
      icon: 'Cpu',
    },
    {
      step: '03',
      title: 'Implement',
      subtitle: 'Build & Deploy',
      description: 'Build and test a practical, reliable workflow that you can actually use every day.',
      icon: 'Workflow',
    },
  ],

  // Coaching Services (4 main services)
  services: [
    {
      id: 'ai-productivity',
      title: 'AI Productivity Coaching',
      badge: 'Individual Professionals',
      description: 'Learn how to use AI tools to improve everyday professional tasks and reclaim focused hours.',
      topics: [
        'Structured Research & Synthesis',
        'Content & Communication Drafting',
        'Documentation & SOP Creation',
        'Data Extraction & Processing',
        'Personal Knowledge Systems',
      ],
      ctaText: 'Learn More',
      iconName: 'Sparkles',
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation Coaching',
      badge: 'End-to-End Systems',
      description: 'Identify repetitive manual work and turn it into reliable, hands-off automated workflows.',
      topics: [
        'Automated Data Movement & Sync',
        'Instant Team & Client Notifications',
        'Automated Summary & Report Prep',
        'Email & Lead Workflow Routing',
        'Multi-app Information Processing',
      ],
      toolsHighlight: 'n8n + AI + No-Code',
      ctaText: 'Explore Automation',
      iconName: 'GitMerge',
    },
    {
      id: 'qa-testing',
      title: 'AI-Powered Testing Coaching',
      badge: 'For Software Testers & QA',
      description: 'Help software testers and QA professionals become 10x more effective with AI and test automation.',
      topics: [
        'AI-Assisted Test Case Generation',
        'Automated Test Data Generation',
        'API Testing & Validation Workflows',
        'Bug Report & Log Summarization',
        'Test Automation Productivity Tools',
      ],
      ctaText: 'For QA Professionals',
      iconName: 'ShieldCheck',
    },
    {
      id: 'team-workshops',
      title: 'Team AI Workshops',
      badge: 'Teams & Organizations',
      description: 'Hands-on AI and automation workshops tailored for teams ready to eliminate operational drag.',
      topics: [
        'AI Fundamentals for Teams',
        'Workflow Automation with n8n',
        'No-Code Team Automation',
        'AI for QA & Engineering Teams',
        'Safe & Practical AI Adoption Frameworks',
      ],
      ctaText: 'For Organizations',
      iconName: 'Users',
    },
  ] as CoachingService[],

  // Example Coaching Framework (4-week signature blueprint)
  programFramework: {
    badge: 'Example Coaching Framework',
    title: 'Practical AI Automation Coaching',
    subheading: 'Learn. Build. Automate.',
    weeks: [
      {
        week: 1,
        phase: 'Week 1',
        title: 'Discover',
        description: 'Map your existing daily workflows, audit time leaks, and isolate high-ROI automation targets.',
        keyOutcomes: ['Workflow audit', 'Time-drain mapping', 'Target selection'],
      },
      {
        week: 2,
        phase: 'Week 2',
        title: 'AI Foundations',
        description: 'Master practical AI tools, structured prompting, and contextual output formatting for real work.',
        keyOutcomes: ['Effective prompting', 'Data formatting', 'Model selection'],
      },
      {
        week: 3,
        phase: 'Week 3',
        title: 'Build',
        description: 'Design and build your first hands-on AI-powered workflow with step-by-step guidance.',
        keyOutcomes: ['Live workflow construction', 'Tool setup (n8n/AI)', 'Output testing'],
      },
      {
        week: 4,
        phase: 'Week 4',
        title: 'Automate',
        description: 'Connect tools, set up error handling, and turn the workflow into a repeatable, automated system.',
        keyOutcomes: ['System integration', 'Fail-safe checks', 'Final deployment'],
      },
    ] as ProgramWeek[],
  },

  // Audience
  audiences: [
    {
      id: 'professionals',
      title: 'Working Professionals',
      description: 'For professionals who want to save time, eliminate tedious repetitive tasks, and work smarter with AI.',
      icon: 'Briefcase',
    },
    {
      id: 'qa-testers',
      title: 'Software Testers & QA',
      description: 'For QA engineers who want to accelerate test design, bug triage, and become AI-empowered quality leaders.',
      icon: 'CheckCircle2',
    },
    {
      id: 'it-teams',
      title: 'IT & Tech Teams',
      description: 'For tech teams looking to introduce practical AI and automation into everyday sprint and support routines.',
      icon: 'Terminal',
    },
    {
      id: 'small-business',
      title: 'Small Business Owners',
      description: 'For founders and operators who want to automate customer routing, reporting, and repetitive admin work.',
      icon: 'Building2',
    },
    {
      id: 'organizations',
      title: 'Organizations & Leaders',
      description: 'For organizations seeking hands-on, practical AI adoption workshops that yield real operational savings.',
      icon: 'Network',
    },
  ],

  // Who this is NOT for
  notFor: [
    "You're looking for theoretical AI lectures only without building.",
    "You don't want to experiment with hands-on tools.",
    "You're expecting automation without understanding your current workflow.",
    "You're looking for an overnight magic transformation.",
  ],
  notForPromise: 'My approach is practical: learn → build → test → improve.',

  // About Credentials
  about: {
    intro:
      "I'm Madhuri Wankhede, a Software Test Engineer and AI & Automation enthusiast focused on helping professionals use technology more practically.",
    secondary:
      'I combine my experience in software testing, automation and AI tools to help people understand how technology can reduce repetitive work and improve productivity.',
    quote: "Don't learn AI just for the sake of learning AI. Learn it to solve real problems.",
    cards: [
      {
        title: 'Software Testing',
        desc: 'Experience in manual testing, automation, API testing and quality assurance methodologies.',
        icon: 'CheckSquare',
      },
      {
        title: 'AI & Automation',
        desc: 'Hands-on exploration and practical implementation of AI models, n8n, and no-code automation.',
        icon: 'Bot',
      },
      {
        title: 'Practical Teaching',
        desc: 'Focused on explaining concepts clearly and turning them into actionable, repeatable workflows.',
        icon: 'GraduationCap',
      },
    ],
  },

  // Coaching Philosophy
  philosophy: [
    {
      title: 'Practical Over Theoretical',
      desc: 'Skip endless lectures. We learn by solving real, tangible problems that you face in your workday.',
      icon: 'Target',
    },
    {
      title: 'Build While Learning',
      desc: 'Every coaching session moves directly toward building a functioning, usable workflow you keep.',
      icon: 'Hammer',
    },
    {
      title: 'Simple Before Complex',
      desc: 'Start with the simplest useful solution before adding complex multi-step orchestration.',
      icon: 'Feather',
    },
    {
      title: 'AI With Human Judgment',
      desc: 'AI is a powerful amplifier for your expertise, designed to assist decisions, not replace your critical thinking.',
      icon: 'BrainCircuit',
    },
  ],

  // Interactive Automation Workflow Simulator Presets
  workflowPresets: [
    {
      id: 'email-triage',
      name: 'Email to Action Workflow',
      description: 'Incoming support or client inquiries are categorized, summarized, and turned into prioritized tasks.',
      nodes: [
        {
          id: 'node-1',
          label: 'New Email Received',
          category: 'input',
          description: 'Client inquiry lands in inbox',
          detail: 'Webhook triggers automatically upon receiving incoming email with subject and body payload.',
          toolHint: 'Gmail / Outlook Webhook',
        },
        {
          id: 'node-2',
          label: 'AI Intent & Data Extraction',
          category: 'ai',
          description: 'Extract urgency, category & action items',
          detail: 'AI model evaluates text, extracts customer intent, tags urgency level (P1-P3), and formats structured JSON.',
          toolHint: 'Gemini / OpenAI API',
        },
        {
          id: 'node-3',
          label: 'Automated Routing Engine',
          category: 'automation',
          description: 'Create task & assign owner in project tracker',
          detail: 'Automation platform creates ticket in Linear/Jira/Notion and attaches extracted context.',
          toolHint: 'n8n Workflow Node',
        },
        {
          id: 'node-4',
          label: 'Team Notification & Reply',
          category: 'output',
          description: 'Alert Slack channel & draft canned response',
          detail: 'Sends rich message to Slack with 1-click approve button and pre-drafts acknowledgment email.',
          toolHint: 'Slack + Email Output',
        },
      ],
    },
    {
      id: 'qa-triage',
      name: 'AI-Assisted QA Bug & Test Workflow',
      description: 'Raw bug reports are converted into structured reproduction steps, edge cases, and automated test stubs.',
      nodes: [
        {
          id: 'node-1',
          label: 'Raw Issue / User Log',
          category: 'input',
          description: 'Messy user bug description or crash log',
          detail: 'Input can be error logs, Jira tickets, or user support reports.',
          toolHint: 'Jira / GitHub Issues',
        },
        {
          id: 'node-2',
          label: 'AI Test & Bug Analyzer',
          category: 'ai',
          description: 'Parse stack traces & generate repro steps',
          detail: 'AI pinpoints probable root cause, formats standard Expected vs. Actual behavior, and suggests test coverage.',
          toolHint: 'AI QA Reasoning Prompt',
        },
        {
          id: 'node-3',
          label: 'Test Case Generator',
          category: 'automation',
          description: 'Generate structured test cases & API payload',
          detail: 'Generates standardized Gherkin (Given/When/Then) syntax and Postman/REST test assertion templates.',
          toolHint: 'n8n Transformation',
        },
        {
          id: 'node-4',
          label: 'QA Dashboard & Test Suite',
          category: 'output',
          description: 'Test repository updated automatically',
          detail: 'New test cases are committed to test repository and team QA lead is pinged with review diff.',
          toolHint: 'TestRail / Git / Slack',
        },
      ],
    },
    {
      id: 'reporting',
      name: 'Daily Operations & Report Digest',
      description: 'Scattered daily metrics from multiple tools are consolidated into a clean, automated executive brief.',
      nodes: [
        {
          id: 'node-1',
          label: 'Daily Schedule Trigger',
          category: 'input',
          description: 'Fires every weekday at 8:00 AM',
          detail: 'Time-based cron trigger initiates the data aggregation across multiple disconnected services.',
          toolHint: 'Cron / Schedule Node',
        },
        {
          id: 'node-2',
          label: 'AI Synthesis & Anomaly Check',
          category: 'ai',
          description: 'Highlight key trends, blockers, and wins',
          detail: 'AI scans 24h metric diffs, detects anomalies, and drafts a concise 3-bullet summary with action items.',
          toolHint: 'AI Summary Engine',
        },
        {
          id: 'node-3',
          label: 'Sheet & Doc Formatter',
          category: 'automation',
          description: 'Assemble formatted visual table',
          detail: 'Compiles clean markdown tables and charts directly into shared Notion workspace and team docs.',
          toolHint: 'n8n Formatter',
        },
        {
          id: 'node-4',
          label: 'Standup Channel Broadcast',
          category: 'output',
          description: 'Delivered to team Slack/Teams before standup',
          detail: 'Whole team has shared visibility in 1 minute instead of 45 minutes of manual morning compiling.',
          toolHint: 'Slack / Teams Digest',
        },
      ],
    },
  ] as WorkflowPreset[],

  // Before / After Comparison
  beforeAfter: {
    beforeItems: [
      { title: 'Copy data manually', desc: 'Jumping between 4 open browser tabs to copy paste spreadsheet cells.' },
      { title: 'Repeat the same task', desc: 'Spending 90 minutes every morning formatting repetitive status updates.' },
      { title: 'Search information manually', desc: 'Digging through old Slack threads and messy documentation.' },
      { title: 'Prepare repetitive reports', desc: 'Manually crunching exports into presentation slides.' },
      { title: 'Send repetitive updates', desc: 'Typing out the exact same confirmation messages repeatedly.' },
    ],
    afterItems: [
      { title: 'Automated data flow', desc: 'Data moves automatically between tools via reliable n8n webhooks.' },
      { title: 'AI-assisted processing', desc: 'AI summarizes, categorizes, and structures messy text instantly.' },
      { title: 'Connected workflows', desc: 'Seamless pipelines running continuously in the background.' },
      { title: 'Faster reporting', desc: 'Accurate digests generated in seconds, ready for instant review.' },
      { title: 'Automated notifications', desc: 'Stakeholders receive contextual alerts with zero manual overhead.' },
    ],
  },

  // Case Studies (Clearly labeled Illustrative Workflows)
  caseStudies: [
    {
      id: 'dashboard-workflow',
      title: 'Automating a Professional Dashboard Workflow',
      problem: 'Repeated manual collection, cleaning, and organization of weekly information across spreadsheets.',
      solution: 'AI data extraction + n8n automated workflow connecting Google Sheets and Notion.',
      benefit: 'Eliminates 3+ hours of repetitive manual data crunching every single week.',
      badge: 'Illustrative Workflow',
      tools: ['n8n', 'Gemini AI', 'Google Sheets', 'Notion'],
    },
    {
      id: 'qa-workflow',
      title: 'AI-Assisted QA & Test Case Workflow',
      problem: 'Writing repetitive test cases, parsing messy crash logs, and formatting bug tickets manually.',
      solution: 'AI prompt chaining that parses bug logs and formats standardized Gherkin test scenarios with API payloads.',
      benefit: 'Cuts test documentation time by over 50% while improving edge-case coverage.',
      badge: 'Illustrative Workflow',
      tools: ['AI Models', 'n8n', 'Jira API', 'Postman'],
    },
    {
      id: 'info-processing',
      title: 'Automated Information Processing & Routing',
      problem: 'Manually processing incoming customer queries, categorizing requests, and routing them to teammates.',
      solution: 'AI classification model integrated with webhook routing to create tagged tasks automatically.',
      benefit: 'Reduces response lag from hours to seconds and prevents dropped tasks.',
      badge: 'Illustrative Workflow',
      tools: ['AI Classification', 'n8n', 'Slack', 'Email'],
    },
  ] as CaseStudy[],

  // Testimonials Section Settings
  testimonialsConfig: {
    showPlaceholder: true,
    placeholderHeading: 'What clients will say here',
    placeholderSubtext:
      'Client testimonials and success stories will be published here as upcoming coaching cohorts conclude. We believe in 100% transparency — no fabricated reviews.',
    // Real testimonials can be placed here in the future
    items: [] as Array<{ name: string; role: string; quote: string; company?: string }>,
  },

  // FAQ
  faqs: [
    {
      question: 'Do I need technical knowledge?',
      answer:
        'Not necessarily. Coaching is fully customized to your current comfort level and goals. We work with both non-technical professionals looking for simple AI productivity gains and technical engineers exploring advanced no-code tools like n8n and API integrations.',
    },
    {
      question: 'Is this only for software testers?',
      answer:
        'No. While I bring specialized domain expertise for QA engineers and testers, the coaching is designed for all working professionals, IT teams, and business operators who want to eliminate repetitive tasks.',
    },
    {
      question: 'Do you teach AI tools?',
      answer:
        'Yes, but the focus is always on using AI tools to solve practical, real-world problems rather than learning tools in isolation. You will learn how to prompt, format outputs, and integrate AI directly into your day-to-day workflow.',
    },
    {
      question: 'Do you teach n8n?',
      answer:
        'n8n can be included when workflow automation is relevant to the problem being solved. It is one of the most powerful, open, and flexible tools for connecting apps and AI logic together without complex coding.',
    },
    {
      question: 'Is coaching one-to-one or for teams?',
      answer:
        'I offer both 1-on-1 private coaching for individuals looking to level up their personal productivity, as well as hands-on interactive workshops for teams and organizations.',
    },
    {
      question: 'Do you build the automation for me?',
      answer:
        'The primary focus is hands-on coaching and practical implementation where we build workflows together so you understand and own them. If you need bespoke end-to-end consulting or implementation builds, we can discuss custom project engagements separately.',
    },
  ],

  // Resources
  resources: [
    {
      id: 'res-1',
      title: 'Top 5 Repetitive Workflows to Automate First',
      category: 'Automation Ideas',
      description: 'A practical framework to audit your workday and identify high-leverage automation targets.',
      tag: 'Automation Guide',
      status: 'Coming Soon',
    },
    {
      id: 'res-2',
      title: 'Prompting for Structured Data & JSON',
      category: 'AI Tips',
      description: 'How to reliably prompt AI models so outputs plug directly into spreadsheets and automation tools.',
      tag: 'Prompt Engineering',
      status: 'Coming Soon',
    },
    {
      id: 'res-3',
      title: 'AI Workflows for Software Quality Assurance',
      category: 'QA + AI',
      description: 'Practical guide to augmenting test case generation, boundary tests, and log analysis with AI.',
      tag: 'QA Playbook',
      status: 'Coming Soon',
    },
    {
      id: 'res-4',
      title: 'Getting Started with n8n & AI Nodes',
      category: 'n8n Workflows',
      description: 'A beginner-friendly walkthrough of setting up your first self-hosted or cloud n8n automation.',
      tag: 'Tutorial',
      status: 'Coming Soon',
    },
    {
      id: 'res-5',
      title: 'Practical AI Tool Evaluation Checklist',
      category: 'Practical Tutorials',
      description: 'Cut through marketing noise and evaluate which AI productivity tools actually deliver ROI.',
      tag: 'Checklist',
      status: 'Coming Soon',
    },
  ] as ResourceItem[],
};
