import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExperiencesService {
    constructor(private prisma: PrismaService) { }

    async getExperiences() {
        return this.prisma.experience.findMany({
            orderBy: { order: 'asc' },
        });
    }
}
