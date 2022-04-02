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
      const html = await this.fetchPage(this.matchListUrl(id));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, '#content > table > tbody > tr:not(:first-child)');
      const list: any[] = [];

      for (const item of items) {
        const date = this.getTextAndTrim(
          item.querySelector('td:nth-child(2)')
        );

        if (date) {
          const time = this.getTextAndTrim(
            item.querySelector('td:nth-child(3)')
          );
          const teamHome = this.getTextAndTrim(
            item.querySelector('td:nth-child(4)')
          );
          const teamAway = this.getTextAndTrim(
            item.querySelector('td:nth-child(5)')
          );

          const link = item.querySelector('td:nth-child(6) > a');
          const id = this.getAttributeAndTrim(link, 'href').replace(
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
      const html = await this.fetchPage(this.matchUrl(id));
      const virtualNode = this.nodeDOM(html);

      const headTable = '#content > table:nth-child(2) > tbody > tr';

      const teamHome = this.getTextAndTrim(
        virtualNode.querySelector(
          `${headTable} > td:nth-child(1)`
        )
      );

      const teamAway = this.getTextAndTrim(
        virtualNode.querySelector(
          `${headTable} > td:nth-child(3)`
        )
      );

      const score = this.getTextAndTrim(
        virtualNode.querySelector(
          `${headTable} > td:nth-child(2)`
        )
      );

      const results = this.parseScore(score);

      const dateTimeHeader = this.getTextAndTrim(
        virtualNode.querySelector(
          '#content > table:nth-child(4) > tbody > tr:nth-child(1) > th'
        )
      );

      const datetime = this.parseDatetimeHeader(dateTimeHeader);

      const homePlayers = this.parsePlayers(virtualNode, '#content > div:nth-child(5) > table:nth-child(1) > tbody > tr');
      const awayPlayers = this.parsePlayers(virtualNode, '#content > div:nth-child(5) > table:nth-child(2) > tbody > tr');

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
    virtualNode: Document,
    selector: string
  ): AmateurHockeyBotMatchPlayer[] {
    const playersItems = this.selectArray(virtualNode, selector);
    const players = [];
    for (const item of playersItems) {
      const jerseyNumber = coerceJerseyNumber(this.getTextAndTrim(item.querySelector('td:nth-child(1)')));

      if (jerseyNumber) {

        const position = coercePosition(this.getTextAndTrim(item.querySelector('td:nth-child(2)')));
        const name = capitalize(this.getTextAndTrim(item.querySelector('td:nth-child(3)')));

        let goals = 0;
        let assists = 0;

        if (position === AmateurHockeyBotMatchPlayerPosition.ATTACKER || position === AmateurHockeyBotMatchPlayerPosition.DEFENDER) {
          goals = coercePoints(this.getTextAndTrim(item.querySelector('td:nth-child(4)')));
          assists = coercePoints(this.getTextAndTrim(item.querySelector('td:nth-child(5)')));
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
