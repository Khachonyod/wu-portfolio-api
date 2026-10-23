import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Start seeding...');

    // 1. ล้างข้อมูลเก่าก่อน (ถ้ามี)
    await prisma.contactMessage.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.profile.deleteMany();

    // 2. ข้อมูล Profile
    const profile = await prisma.profile.create({
        data: {
            name: 'Khachonyod Komin',
            title: 'Full-Stack Developer',
            bio: 'Hi, I\'m Khachonyod Komin. I am a fourth-year Computer Engineering and Artificial Intelligence student at the University of the Thai Chamber of Commerce. With graduation approaching, I am eager to apply my academic background in software development, data analytics, and AI modeling to build innovative, real-world solutions. I am deeply passionate about leveraging intelligent technologies to solve complex problems and optimize workflows. Explore my portfolio to see my latest projects, and feel free to reach out if you would like to connect or collaborate!',
            avatarUrl: 'https://6ad82a8ad9feb8b36628ecea.imgix.net/scooter.jpg?auto=format&fit=fill&w=384',
            resumeUrl: 'https://example.com/resume.pdf',
            email: 'khachonyodwu@gmail.com',
            githubUrl: 'https://github.com/Khachonyod',
            linkedinUrl: 'https://www.linkedin.com/in/khachonyod-k-4b0a40381',
        },
    });

    // 3. ข้อมูล Skills
    const skills = [
        { name: 'Python', category: 'Languages', order: 1 },
        { name: 'TypeScript', category: 'Languages', order: 2 },
        { name: 'C/C++', category: 'Languages', order: 3 },
        { name: 'React / Next.js', category: 'Frontend', order: 4 },
        { name: 'Tailwind CSS', category: 'Frontend', order: 5 },
        { name: 'Node.js / NestJS', category: 'Backend', order: 6 },
        { name: 'PostgreSQL', category: 'Database', order: 7 },
        { name: 'Prisma ORM', category: 'Database', order: 8 },
        { name: 'Docker', category: 'DevOps', order: 9 },
        { name: 'Git & GitHub', category: 'Tools', order: 10 },
    ];

    for (const skill of skills) {
        await prisma.skill.create({ data: skill });
    }

    // 4. ข้อมูล Projects
    await prisma.project.create({
        data: {
            title: 'RAG Local Chatbot',
            slug: 'rag-local-chatbot',
            description: 'แชทบอทที่ทำงานแบบ Local Host โดยใช้ Ollama และ Llama 3.2 เพื่อให้ได้คำตอบที่แม่นยำและรวดเร็ว',
            coverImage: 'https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt5bac038e1ec70425/69bde68199b210b63c7dabc9/illustration-context-rag-app-database.webp',
            tags: ['Langchain', 'Flask', 'Ollama', 'Llama 3.2', 'ChromaDB'],
            repoUrl: 'https://github.com/Khachonyod/RAG-Local-ChatBot',
            liveUrl: 'https://example.com',
            featured: true,
            order: 1,
        },
    });

    await prisma.project.create({
        data: {
            title: 'Thai License-plate Recognition',
            slug: 'thai-license-plate-recognition',
            description: 'แอปพลิเคชันจดจำป้ายทะเบียนรถยนต์ของไทย โดยใช้โมเดล AI ในการจดจำป้ายทะเบียนรถยนต์',
            coverImage: 'https://cdn.ai-forall.com/ifa_dev_media/How_AI_and_ML_are_Revolutionizing_License_Plate_Recognition_3afbc47dee.jpg',
            tags: ['FastAPI', 'YOLO', 'OpenCV', 'LPR'],
            repoUrl: 'https://github.com/Khachonyod/Thai-license-plate-Recognition',
            liveUrl: 'https://example.com',
            featured: true,
            order: 2,
        },
    });

    // 5. ข้อมูล Experience
    await prisma.experience.create({
        data: {
            company: 'POWMOTECH CO., LTD.',
            position: 'Full-Stack Developer (Intern)',
            startDate: new Date('2026-08-10'),
            isCurrent: true,
            description: 'พัฒนาและดูแล Web Application ด้วย React และ NestJS, ออกแบบ Database ด้วย PostgreSQL',
            order: 1,
        },
    });

    console.log('✅ Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
