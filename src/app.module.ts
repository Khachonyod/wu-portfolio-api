import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [PrismaModule, ProfileModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
