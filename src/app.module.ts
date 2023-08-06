import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import applicationConfig from './config';

@Module({
  imports: [ConfigModule.forRoot(applicationConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
