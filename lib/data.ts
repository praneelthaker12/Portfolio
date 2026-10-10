import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'Praneelmthaker@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Praneel, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Praneelmthaker' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/praneelmthaker' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Redux Toolkit', icon: '/logo/redux.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Secure Multi-Store E-Commerce Platform',
        slug: 'multi-store-ecommerce',
        year: 2024,
        description: `
      A full-featured multi-store e-commerce application with GSAP animated UIs, mega menus, dynamic carousels, and global Redux Toolkit cart persistence across 500+ product SKUs.<br/><br/>
      Key Features:<br/>
      <ul>
        <li>JWT + Bcrypt authentication with Role-Based Access Control (RBAC)</li>
        <li>Protected routes and Firebase storage integration</li>
        <li>Indexed MongoDB search queries with catalog filtering under 150ms</li>
        <li>GSAP and Framer Motion powered interactive UI components</li>
      </ul>
      `,
        role: `
      Full-Stack Developer<br/>
      <ul>
        <li>Architected the multi-store application with Redux Toolkit state management</li>
        <li>Implemented JWT authentication, RBAC, and protected routing</li>
        <li>Built indexed MongoDB queries for fast product search and filtering</li>
        <li>Integrated Firebase storage for media assets</li>
      </ul>
      `,
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Redux Toolkit',
            'Firebase',
            'JWT',
            'GSAP',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
    },
    {
        title: 'Architecture Showcase Platform',
        slug: 'architecture-showcase',
        year: 2024,
        description: `
      A full-stack portfolio platform for an architecture firm featuring lazy-loaded image galleries and a JWT-secured admin panel with automated NodeMailer routing.<br/><br/>
      Reduced image load overhead by 40% through optimized lazy-loading strategies and performance-focused asset delivery.
      `,
        role: `
      Freelance Full-Stack Developer<br/>
      <ul>
        <li>Engineered lazy-loaded image galleries for high-performance media delivery</li>
        <li>Built a JWT-secured admin panel for content management</li>
        <li>Integrated NodeMailer for automated inquiry routing</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT',
            'NodeMailer',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Hospitality Resort Booking System',
        slug: 'resort-booking-system',
        year: 2024,
        description: `
      A MERN platform for a hospitality resort featuring date-based inquiry forms, Firebase storage, and a custom admin dashboard.<br/><br/>
      Boosted mobile Core Web Vitals scores by 35% through performance optimization and responsive, mobile-first design.
      `,
        role: `
      Freelance Full-Stack Developer<br/>
      <ul>
        <li>Developed date-based booking inquiry forms with server-side validation</li>
        <li>Integrated Firebase storage for resort media assets</li>
        <li>Built a custom dashboard for booking management</li>
        <li>Optimized Core Web Vitals for mobile performance</li>
      </ul>
      `,
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Firebase',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
    },
    {
        title: 'Face Recognition Attendance System',
        slug: 'face-recognition-attendance',
        year: 2024,
        description: `
      An automated classroom attendance system using facial recognition with OpenCV and custom machine learning models trained on a 1,000+ image dataset.<br/><br/>
      Achieved 96% recognition accuracy with real-time Firebase cloud sync for attendance records.
      `,
        role: `
      Developer<br/>
      <ul>
        <li>Trained custom ML models on a 1,000+ image dataset using OpenCV</li>
        <li>Built real-time facial recognition pipeline with 96% accuracy</li>
        <li>Integrated Firebase for cloud-synced attendance logging</li>
      </ul>
      `,
        techStack: ['Python', 'OpenCV', 'Machine Learning', 'Firebase'],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
    },
    {
        title: 'Sentiment Analysis Engine',
        slug: 'sentiment-analysis-engine',
        year: 2024,
        description: `
      A Python-based NLP engine that classifies 5,000+ customer reviews into positive, neutral, and negative sentiments using supervised Scikit-Learn ML and lexicon NLP models.<br/><br/>
      Delivered automated analytics with 92% classification accuracy.
      `,
        role: `
      Developer<br/>
      <ul>
        <li>Built supervised ML models with Scikit-Learn for sentiment classification</li>
        <li>Applied lexicon-based NLP models for enhanced text analysis</li>
        <li>Processed and classified 5,000+ customer reviews with 92% accuracy</li>
      </ul>
      `,
        techStack: ['Python', 'Scikit-Learn', 'NLP', 'Machine Learning'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
    },
    {
        title: 'Interactive Personal Portfolio',
        slug: 'interactive-portfolio',
        year: 2025,
        description: `
      An interactive personal portfolio built with Next.js App Router featuring SSR, GSAP scroll-driven animations, and secure Express.js REST API endpoints.<br/><br/>
      Achieved sub-1.2 second initial page loads and 60 FPS scroll animations, elevating user engagement duration by 30%.
      `,
        role: `
      Full-Stack Developer<br/>
      <ul>
        <li>Architected SSR with Next.js App Router for SEO and performance</li>
        <li>Engineered 60 FPS scroll animations with GSAP ScrollTrigger and Framer Motion</li>
        <li>Integrated Express.js REST API with MongoDB for contact form logging</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React',
            'GSAP',
            'Framer Motion',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Freelance Full-Stack Web Developer',
        company: 'Self-Employed',
        duration: 'Jun 2024 - Present',
    },
    {
        title: 'Frontend Developer Intern',
        company: 'ignAite LLC - USA (Remote)',
        duration: 'Jan 2024 - May 2024',
    },
];
