import { Controller, Body, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Post()
    createMessage(@Body() createContactDto: CreateContactDto) {
        return this.contactService.createMessage(createContactDto);
    }
}
