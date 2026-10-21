import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) { }

    async createMessage(dto: CreateContactDto) {
        const message = await this.prisma.contactMessage.create({
            data: dto,
        });

        return {
            success: true,
            message: 'Message sent successfully. I will get back to you as soon as possible.',
            data: message,
        };
    }
}
