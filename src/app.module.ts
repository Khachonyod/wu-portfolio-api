import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [PrismaModule, ProfileModule, SkillsModule, ProjectsModule, ExperiencesModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
