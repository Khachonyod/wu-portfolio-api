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
            name: 'John Doe',
            title: 'Full-Stack Developer & Software Engineer',
            bio: 'หลงใหลในการสร้างสรรค์ Modern Web Applications ด้วย Next.js, NestJS และ Cloud Technologies ชอบการเขียนโค้ดที่สะอาดและมีประสิทธิภาพ',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
            resumeUrl: 'https://example.com/resume.pdf',
            email: 'john.dev@example.com',
            githubUrl: 'https://github.com',
            linkedinUrl: 'https://linkedin.com',
        },
    });

    // 3. ข้อมูล Skills
    const skills = [
        { name: 'TypeScript', category: 'Languages', order: 1 },
        { name: 'React / Next.js', category: 'Frontend', order: 2 },
        { name: 'Tailwind CSS', category: 'Frontend', order: 3 },
        { name: 'Node.js / NestJS', category: 'Backend', order: 4 },
        { name: 'PostgreSQL', category: 'Database', order: 5 },
        { name: 'Prisma ORM', category: 'Database', order: 6 },
        { name: 'Docker', category: 'DevOps', order: 7 },
        { name: 'Git & GitHub', category: 'Tools', order: 8 },
    ];

    for (const skill of skills) {
        await prisma.skill.create({ data: skill });
    }

    // 4. ข้อมูล Projects
    await prisma.project.create({
        data: {
            title: 'E-Commerce Platform',
            slug: 'e-commerce-platform',
            description: 'ระบบร้านค้าออนไลน์แบบ Full-Stack รองรับการสั่งซื้อ ชำระเงิน และระบบจัดการสต็อกสินค้า',
            coverImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
            tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe'],
            repoUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            featured: true,
            order: 1,
        },
    });

    await prisma.project.create({
        data: {
            title: 'Task Management App',
            slug: 'task-management-app',
            description: 'แอปจัดการงานและโปรเจกต์สไตล์ Kanban Board รองรับการทำงานร่วมกันแบบ Real-time',
            coverImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
            tags: ['React', 'TypeScript', 'Tailwind', 'Docker'],
            repoUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            featured: true,
            order: 2,
        },
    });

    // 5. ข้อมูล Experience
    await prisma.experience.create({
        data: {
            company: 'Tech Innovators Co.',
            position: 'Junior Full-Stack Developer',
            startDate: new Date('2023-01-01'),
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
