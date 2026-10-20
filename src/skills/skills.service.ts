import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SkillsService {
    constructor(private prisma: PrismaService) { }

    async getSkills() {
        return this.prisma.skill.findMany({
            orderBy: { order: 'asc' },
        });
    }
}
