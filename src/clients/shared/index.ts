import fetch from 'cross-fetch';
import { AmateurHockeyBotMatchListResponse, AmateurHockeyBotMatchResponse } from '../../types';

const USER_AGENTS: string[] = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36'
];

export abstract class AmateurHockeyBotClient {

  public abstract matchListUrl(id: string): string;

  public abstract matchUrl(id: string): string;

  public abstract matchList(id: string): Promise<AmateurHockeyBotMatchListResponse>;

  public abstract match(id: string): Promise<AmateurHockeyBotMatchResponse>;

  protected async fetchPage(url: string): Promise<string> {
    try {
      const headers = {
        'User-Agent': USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
      };
      const response = await fetch(url, { headers });
      if (response.status >= 400 && response.status < 600) {
        throw new Error(`Bad response ${response.status} for url: ${url}`);
      }
      return await response.text();
    } catch (e) {
      console.error(e);
      return 'Error';
    }
  }
}
