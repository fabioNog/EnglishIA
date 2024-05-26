import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatGptModule } from './chatgpt/chatgpt.module'; // Certifique-se de usar a capitalização correta

@Module({
  imports: [ConfigModule.forRoot(), ChatGptModule],
})
export class AppModule {}
