import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) { }

    async getProjects(featured?: boolean) {
        return this.prisma.project.findMany({
            where: featured !== undefined ? { featured } : undefined,
            orderBy: { order: 'asc' },
        });
    }

    async getProjectBySlug(slug: string) {
        const project = await this.prisma.project.findUnique({
            where: { slug },
        });

        if (!project) {
            throw new NotFoundException(`Project with slug "${slug}" not found`);
        }

        return project;
    }
}
