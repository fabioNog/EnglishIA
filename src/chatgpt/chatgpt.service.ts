import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

// No OAuth2 support for Gemini currently
// Implement OAuth2 for other services if needed

@Injectable()
export class ChatGptService {
  private readonly apiKey: string;
  private readonly apiUrl: string = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('GEMINI_API_KEY'); // Replace with actual environment variable name
  }

  async generateResponse(userMessage: string): Promise<any> {
    try {
      const body = {
        contents: [
          {
            parts: [
              {
                text: userMessage,
              }
            ]
          }
        ]
      };


      const response = await axios.post(
        this.apiUrl + '?key=' + this.apiKey,
        body,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data from Gemini Pro: ${error.message}`);
    }
  }
}
