import parse, { HTMLElement } from 'node-html-parser';
import {
  coerceDate,
  coerceJerseyNumber,
  coerceMinutes,
  coercePoints,
  coerceScore
} from '../../helpers';
import { AmateurHockeyBotMatchListResponse, AmateurHockeyBotMatchPlayer, AmateurHockeyBotMatchResponse } from '../../types';
import { AmateurHockeyBotClient } from '../shared';

const BASE_URL = 'http://www.lnskutec.cz';

export class AmateurHockeyBotLNSkutecClient extends AmateurHockeyBotClient {
  public matchListUrl(id: string): string {
    return id ? `${BASE_URL}/?page_id=${id}` : undefined;
  }

  public matchUrl(id: string): string {
    return id ? `${BASE_URL}/?sp_event=${id}` : undefined;
  }

  public async matchList(
    id: string
  ): Promise<AmateurHockeyBotMatchListResponse> {
    try {
      const html = parse(await this.fetchPage(this.matchListUrl(id)));
      const items = html.querySelectorAll('main table > tbody > tr');
      const list: any[] = [];
      for (const item of items) {
        const link = item.querySelector('td.data-time > a');
        const id = link.getAttribute('href').trim().replace(
          /^\?sp_event=/,
          ''
        );
        const teamHome = item.querySelector('td.data-home')?.text?.trim();
        const teamAway = item.querySelector('td.data-away')?.text?.trim();
        const datetime = coerceDate(
          item.querySelector('td.data-date date')?.text?.trim()
          , 'lnskutec-matchlist');

        list.push({
          id,
          teamHome,
          teamAway,
          datetime,
        });
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
      const html = parse(await this.fetchPage(this.matchListUrl(id)));

      const details = 'main .sp-template.sp-template-event-details';

      const date = html.querySelector(
        `${details} table > tbody > tr > td:nth-child(1)`
      )?.text?.trim();

      const time = html.querySelector(
        `${details} table > tbody > tr > td:nth-child(2)`
      )?.text?.trim();

      const datetime = coerceDate(`${date} ${time}`, 'lnskutec-match');

      const competition = html.querySelector(
        `${details} table > tbody > tr > td:nth-child(3)`
      )?.text?.trim();

      const season = html.querySelector(
        `${details} table > tbody > tr > td:nth-child(4)`
      )?.text?.trim();

      const teamHome = html.querySelector(
        `main .sp-template.sp-template-event-performance:nth-child(1) .sp-table-caption`
      )?.text?.trim();

      const teamAway = html.querySelector(
        `main .sp-template.sp-template-event-performance:nth-child(2) .sp-table-caption`
      )?.text?.trim();

      const results = 'main .sp-template.sp-template-event-results';

      const scoreTotalHome = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(1) > td.data-goals`
        )?.text?.trim()
      );

      const scoreTotalAway = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-goals`
        )?.text?.trim()
      );

      const scorePeriodFirstHome = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-first`
        )?.text?.trim()
      );

      const scorePeriodFirstAway = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-first`
        )?.text?.trim()
      );

      const scorePeriodSecondHome = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-second`
        )?.text?.trim()
      );

      const scorePeriodSecondAway = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-second`
        )?.text?.trim()
      );

      const scorePeriodThirdHome = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-third`
        )?.text?.trim()
      );

      const scorePeriodThirdAway = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-third`
        )?.text?.trim()
      );

      const scoreOvertimeHome = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(1) > td.data-overtime`
        )?.text?.trim()
      );

      const scoreOvertimeAway = coerceScore(
        html.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-overtime`
        )?.text?.trim()
      );

      const scoreResultHome = html.querySelector(
        `${results} table > tbody > tr:nth-child(1) > td.data-outcome`
      )?.text?.trim();

      const scoreResultAway = html.querySelector(
        `${results} table > tbody > tr:nth-child(2) > td.data-outcome`
      )?.text?.trim();

      const homePlayers = this.parsePlayers(
        html.querySelectorAll('main .sp-template.sp-template-event-performance:nth-child(1) table tbody tr')
      );
      const awayPlayers = this.parsePlayers(
        html.querySelectorAll('main .sp-template.sp-template-event-performance:nth-child(2) table tbody tr')
      );

      return {
        ok: true,
        data: {
          info: {
            teamHome,
            teamAway,
            datetime,
            competition,
            season,
          },
          results: {
            scoreTotalHome,
            scoreTotalAway,
            scorePeriodFirstAway,
            scorePeriodFirstHome,
            scorePeriodSecondAway,
            scorePeriodSecondHome,
            scorePeriodThirdHome,
            scorePeriodThirdAway,
            scoreOvertimeHome,
            scoreOvertimeAway,
            scoreResultHome,
            scoreResultAway
          },
          homePlayers,
          awayPlayers,
        },
      };
    } catch (error) {
      return {
        ok: false,
        errors: error,
      };
    }
  }

  private parsePlayers(
    playersItems: HTMLElement[]
  ): AmateurHockeyBotMatchPlayer[] {
    const players = [];
    for (const item of playersItems) {
      const jerseyNumber = coerceJerseyNumber(
        item.querySelector('td.data-number')?.text?.trim()
      );
      const name = item.querySelector('td.data-name')?.text?.trim();
      const goals = coercePoints(
        item.querySelector('td.data-g')?.text?.trim()
      );
      const assists = coercePoints(
        item.querySelector('td.data-a')?.text?.trim()
      );
      const penalty2 = coerceMinutes(
        item.querySelector('td.data-tm')?.text?.trim()
      );
      const penalty4 = coerceMinutes(
        item.querySelector('td.data-dm')?.text?.trim()
      );
      const penalty5ok = coerceMinutes(
        item.querySelector('td.data-fiveok')?.text?.trim()
      );
      const penalty10 = coerceMinutes(
        item.querySelector('td.data-osobnitrest')?.text?.trim()
      );
      const penaltyok = coerceMinutes(
        item.querySelector('td.data-ok')?.text?.trim()
      );
      players.push({
        name,
        jerseyNumber,
        goals,
        assists,
        penalty2,
        penalty4,
        penalty5ok,
        penalty10,
        penaltyok,
      });
    }
    return players;
  }
}
