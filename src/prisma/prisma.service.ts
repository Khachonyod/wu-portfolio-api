import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        // เมื่อ NestJS เริ่มทำงาน ให้เชื่อมต่อ Database ทันที
        await this.$connect();
    }

    async onModuleDestroy() {
        // เมื่อ NestJS ปิด ให้ตัดการเชื่อมต่อ Database อย่างปลอดภัย
        await this.$disconnect();
    }
}
