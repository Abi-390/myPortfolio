// Projects data - easily maintainable and scalable
export const projectsData = [
  {
    id: 1,
    title: 'Clubsphere',
    description: 'A production-ready MERN stack community platform with role-based access, events, and threaded discussions.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Abi-390/ClubSphere',
    live: 'https://clubsphere-tau.vercel.app',
    year: '2026'
  },
  {
    id: 2,
    title: 'Laughable AI',
    description: 'A full-stack AI chat application built with Retrieval-Augmented Generation (RAG), Vector DB, Socket.IO, & MERN stack.',
    image: 'https://images.unsplash.com/photo-1515536765-9b2a70c4b333?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['MERN', 'Pinecone', 'Socket.Io', 'GEMINI API'],
    github: 'https://github.com/Abi-390/chatgpt',
    live: 'https://laughableai.vercel.app',
    year: '2026'
  },
  {
    id: 3,
    title: 'Otaku Street Wear',
    description: 'A React e-commerce project built with Redux Toolkit, JSON Server backend deployed on Render, and Fake Store API.',
    image: 'https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React.js', 'Redux','Fakestore API','JSON-server'],
    github: 'https://github.com/Abi-390/ReduxProject',
    live: 'https://otakustreetwear.vercel.app',
    year: '2025'
  }
]

export const techStackData = {
  frontend: [
    { name: 'React & Next.js', icon: 'SiReact' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    { name: 'Framer Motion', icon: 'SiFramer' },
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs' },
    { name : 'Express.js', icon: 'SiExpress'},
    //{ name: 'Python / FastApi', icon: 'SiPython' },
    //{ name: 'Go (Golang)', icon: 'SiGo' },
    { name: 'REST API', icon: 'SiGraphql' },
  ],
  database: [
   // { name: 'PostgreSQL', icon: 'SiPostgresql' },
    { name: 'MongoDB', icon: 'SiMongodb' },
    { name: 'Redis (Caching)', icon: 'SiRedis' },
   // { name: 'Prisma ORM', icon: 'SiPrisma' },
  ],
  devops: [
   // { name: 'Docker', icon: 'SiDocker' },
    { name: 'AWS Services', icon: 'SiAmazonaws' },
    { name: 'Github Actions', icon: 'SiGithubactions' },
    { name: 'Figma', icon: 'SiFigma' },
  ]
}

export const certificationsData = [
  {
    id: 1,
    title: 'Zephyr winter internship 2025',
    issuer: 'Zephyr Solutions',
    date: 'Jan - May 2025',
    status: 'Active',
    link: '#'
  },
  {
    id: 2,
    title: 'MERN Stack along with CI/CD cohort completion certificate',
    issuer: 'Sheryians Coding School',
    date: 'Jan 2026',
    status: 'Active',
    link: '#'
  }
]

export const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications',
    institution: 'Dibrugarh University',
    year: '2022 - 2025',
    gpa: '8.66/10',
    position: 'top'
  },
  {
    id: 2,
    degree: '12th',
    institution: 'Zenith Academy',
    year:'2020',
    stream: 'Science',
    percentage: '72%',
    position: 'middle'
  },
  {
    id: 3,
    degree: '10th Boards',
    institution: 'Agdala Chariali High School',
    year:'2018',
    gpa: '94.83%',
    position: 'bottom'
  }
]