import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importe o ConfigModule
import { ChatGptController } from './chatgpt.controller';
import { ChatGptService } from './chatgpt.service';

@Module({
  imports: [ConfigModule.forRoot()], // Adicione o ConfigModule aqui
  controllers: [ChatGptController],
  providers: [ChatGptService],
})
export class ChatGptModule {}
