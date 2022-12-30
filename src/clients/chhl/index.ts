import parse, { HTMLElement } from 'node-html-parser';
import { capitalize, coerceDate, coerceJerseyNumber, coercePoints, coercePosition, coerceScore } from '../../helpers';
import { AmateurHockeyBotMatchListResponse, AmateurHockeyBotMatchPlayer, AmateurHockeyBotMatchPlayerPosition, AmateurHockeyBotMatchResponse } from '../../types';
import { AmateurHockeyBotClient } from '../shared';

const BASE_URL = 'http://www.chhl.cz';

export class AmateurHockeyBotCHHLClient extends AmateurHockeyBotClient {
  public matchListUrl(id: string): string {
    return id ? `${BASE_URL}/zapasy.php?sezona=${id}` : undefined;
  }

  public matchUrl(id: string): string {
    return id ? `${BASE_URL}/zapasy.php?report=${id}` : undefined;
  }

  public async matchList(
    id: string
  ): Promise<AmateurHockeyBotMatchListResponse> {
    try {
      const html = parse(await this.fetchPage(this.matchListUrl(id)));

      // const items = html.querySelectorAll('#content > table > tbody > tr:not(:first-child)');
      const items = html.querySelectorAll('#content > table tr:not(:first-child)');
      const list: any[] = [];

      for (const item of items) {
        const date = item.querySelector('td:nth-child(2)')?.text?.trim();

        if (date) {
          const time = item.querySelector('td:nth-child(3)')?.text?.trim();
          const teamHome = item.querySelector('td:nth-child(4)')?.text?.trim();
          const teamAway = item.querySelector('td:nth-child(5)')?.text?.trim();
          const link = item.querySelector('td:nth-child(6) > a');
          const id = link.getAttribute('href').trim().replace(
            /^\?report=/,
            ''
          );;

          list.push({
            id,
            teamHome,
            teamAway,
            datetime: coerceDate(`${date} ${time}`, 'chhl-matchlist')
          });
        }
      }
      return {
        ok: true,
        data: list,
      };
    } catch (error) {
      return {
        ok: false,
        errors: error,
      };
    }
  }

  public async match(
    id: string
  ): Promise<AmateurHockeyBotMatchResponse> {
    try {
      const html = parse(await this.fetchPage(this.matchUrl(id)));

      // const headTable = '#content > table:nth-child(2) > tbody > tr';
      const headTable = '#content > table:nth-child(2) tr';

      const teamHome = html.querySelector(
        `${headTable} > td:nth-child(1)`
      )?.text?.trim();

      const teamAway = html.querySelector(
        `${headTable} > td:nth-child(3)`
      )?.text?.trim();

      const score = html.querySelector(
        `${headTable} > td:nth-child(2)`
      )?.text?.trim();

      const results = this.parseScore(score);

      const dateTimeHeader = html.querySelector(
        // '#content > table:nth-child(4) > tbody > tr:nth-child(1) > th'
        '#content > table:nth-child(4) tr:nth-child(1) > th'
      )?.text?.trim();

      const datetime = this.parseDatetimeHeader(dateTimeHeader);

      /*
      const homePlayers = this.parsePlayers(html.querySelectorAll('#content > div:nth-child(5) > table:nth-child(1) > tbody > tr'));
      const awayPlayers = this.parsePlayers(html.querySelectorAll('#content > div:nth-child(5) > table:nth-child(2) > tbody > tr'));
      */

      const homePlayers = this.parsePlayers(html.querySelectorAll('#content > div:nth-child(5) > table:nth-child(1) tr'));
      const awayPlayers = this.parsePlayers(html.querySelectorAll('#content > div:nth-child(5) > table:nth-child(2) tr'));

      return {
        ok: true,
        data: {
          info: {
            teamHome,
            teamAway,
            datetime
          },
          results,
          homePlayers,
          awayPlayers
        }
      }
    } catch (error) {
      return {
        ok: false,
        errors: error,
      };
    }
  }

  private parseScore(score: string): {
    scoreTotalHome: number,
    scoreTotalAway: number,
    scoreResultHome: string,
    scoreResultAway: string
  } {
    const regExp = /(?<scoreTotalHome>\d+):(?<scoreTotalAway>\d+)/;
    const m = score?.match(regExp)?.groups;

    const scoreTotalHome = coerceScore(m?.scoreTotalHome);
    const scoreTotalAway = coerceScore(m?.scoreTotalAway);
    const isValid = typeof scoreTotalHome === 'number' && typeof scoreTotalAway === 'number';

    if (isValid) {
      let scoreResultHome, scoreResultAway;

      if (scoreTotalHome === scoreTotalAway) {
        scoreResultHome = 'D';
        scoreResultAway = 'D';
      } else {
        if (scoreTotalHome > scoreTotalAway) {
          scoreResultHome = 'W';
          scoreResultAway = 'L';
        } else {
          scoreResultHome = 'L';
          scoreResultAway = 'W';
        }
      }

      return {
        scoreTotalHome,
        scoreTotalAway,
        scoreResultHome,
        scoreResultAway
      }
    }
    return undefined;
  }

  private parseDatetimeHeader(dateTimeHeader: string): string {
    const arr = dateTimeHeader?.split('|')?.map((item) => item?.trim());
    if (arr?.length === 3) {
      return coerceDate(`${arr[1]} ${arr[2]}`, 'chhl-match');
    }
    return undefined;
  }

  private parsePlayers(
    playersItems: HTMLElement[]
  ): AmateurHockeyBotMatchPlayer[] {
    const players = [];
    for (const item of playersItems) {
      const jerseyNumber = coerceJerseyNumber(item.querySelector('td:nth-child(1)')?.text?.trim());

      if (jerseyNumber) {

        const position = coercePosition(item.querySelector('td:nth-child(2)')?.text?.trim());
        const name = capitalize(item.querySelector('td:nth-child(3)')?.text?.trim());

        let goals = 0;
        let assists = 0;

        if (position === AmateurHockeyBotMatchPlayerPosition.ATTACKER || position === AmateurHockeyBotMatchPlayerPosition.DEFENDER) {
          goals = coercePoints(item.querySelector('td:nth-child(4)')?.text?.trim());
          assists = coercePoints(item.querySelector('td:nth-child(5)')?.text?.trim());
        }

        players.push({
          jerseyNumber,
          name,
          position,
          goals,
          assists
        })
      }
    }
    return players;
  }
}
