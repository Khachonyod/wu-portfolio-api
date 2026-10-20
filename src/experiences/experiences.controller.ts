import { Controller, Get } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';

@Controller('experiences')
export class ExperiencesController {
    constructor(private readonly experiencesService: ExperiencesService) { }

    @Get()
    getExperiences() {
        return this.experiencesService.getExperiences();
    }
}
