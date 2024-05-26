import { Controller, Post, Body } from '@nestjs/common';
import { ChatGptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post('generate')
  async generate(@Body('prompt') userMessage: string): Promise<any> {
    return this.chatGptService.generateResponse(userMessage);
  }
}
