import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) { }

    @Get()
    getProjects(@Query('featured') featured?: string) {
        const isFeatured = featured === 'true' ? true : featured === 'false' ? false : undefined;
        return this.projectService.getProjects(isFeatured);
    }

    @Get(':slug')
    getProjectBySlug(@Param('slug') slug: string) {
        return this.projectService.getProjectBySlug(slug);
    }
}
