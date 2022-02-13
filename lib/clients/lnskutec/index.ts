import {
  coerceDate,
  coerceJerseyNumber,
  coerceMinutes,
  coercePoints,
  coerceScore
} from '../../helpers';
import { AmateurHockeyBotResponse } from '../../shared';
import { AmateurHockeyBotClient } from '../shared';

const BASE_URL = 'http://www.lnskutec.cz';

export interface LNSkutecPlayer {
  name: string;
  jerseyNumber?: number;
  goals: number;
  assists: number;
  penalty2: number;
  penalty4: number;
  penalty5ok: number;
  penalty10: number;
  penaltyok: number;
}

export interface LNSkutecInfo {
  teamHome: string;
  teamAway: string;
  datetime: string;
  competition: string;
  season: string;
}

export interface LNSkutecResults {
  scoreTotalHome: number;
  scoreTotalAway: number;
  scorePeriodFirstAway: number;
  scorePeriodFirstHome: number;
  scorePeriodSecondAway: number;
  scorePeriodSecondHome: number;
  scorePeriodThirdHome: number;
  scorePeriodThirdAway: number;
  scoreOvertimeHome?: number;
  scoreOvertimeAway?: number;
  scoreResultHome: string;
  scoreResultAway: string;
}

export interface LNSkutecMatch {
  info: LNSkutecInfo;
  results?: LNSkutecResults;
  homePlayers: LNSkutecPlayer[];
  awayPlayers: LNSkutecPlayer[];
}

export interface LNSkutecMatchList {
  id: string;
  teamHome: string;
  teamAway: string;
  datetime: string;
}

export class AmateurHockeyBotLNSkutecClient extends AmateurHockeyBotClient {
  public matchListUrl(pageId: string): string {
    return pageId ? `${BASE_URL}/?page_id=${pageId}` : undefined;
  }

  public matchUrl(spEvent: string): string {
    return spEvent ? `${BASE_URL}/?sp_event=${spEvent}` : undefined;
  }

  public async matchList(
    pageId: string
  ): Promise<AmateurHockeyBotResponse<LNSkutecMatchList[]>> {
    try {
      const html = await this.fetchPage(this.matchListUrl(pageId));
      const virtualNode = this.nodeDOM(html);
      const items = this.selectArray(virtualNode, 'main table > tbody > tr');
      const list: any[] = [];
      for (const item of items) {
        const link = item.querySelector('td.data-time > a');
        const id = this.getAttributeAndTrim(link, 'href').replace(
          /^\?sp_event=/,
          ''
        );
        const teamHome = this.getTextAndTrim(
          item.querySelector('td.data-home')
        );
        const teamAway = this.getTextAndTrim(
          item.querySelector('td.data-away')
        );
        const datetime = coerceDate(this.getTextAndTrim(
          item.querySelector('td.data-date date')
        ), 'matchlist');

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
    spEvent: string
  ): Promise<AmateurHockeyBotResponse<LNSkutecMatch>> {
    try {
      const html = await this.fetchPage(this.matchListUrl(spEvent));
      const virtualNode = this.nodeDOM(html);

      const details = 'main .sp-template.sp-template-event-details';
      const date = this.getTextAndTrim(
        virtualNode.querySelector(
          `${details} table > tbody > tr > td:nth-child(1)`
        )
      );
      const time = this.getTextAndTrim(
        virtualNode.querySelector(
          `${details} table > tbody > tr > td:nth-child(2)`
        )
      );

      const datetime = coerceDate(`${date} ${time}`, 'match');

      const competition = this.getTextAndTrim(
        virtualNode.querySelector(
          `${details} table > tbody > tr > td:nth-child(3)`
        )
      );
      const season = this.getTextAndTrim(
        virtualNode.querySelector(
          `${details} table > tbody > tr > td:nth-child(4)`
        )
      );

      const teamHome = this.getTextAndTrim(
        virtualNode.querySelector(
          `main .sp-template.sp-template-event-performance:nth-child(1) .sp-table-caption`
        )
      );
      const teamAway = this.getTextAndTrim(
        virtualNode.querySelector(
          `main .sp-template.sp-template-event-performance:nth-child(2) .sp-table-caption`
        )
      );

      const results = 'main .sp-template.sp-template-event-results';
      const scoreTotalHome = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(1) > td.data-goals`
          )
        )
      );
      const scoreTotalAway = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-goals`
          )
        )
      );

      const scorePeriodFirstHome = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-first`
          )
        )
      );
      const scorePeriodFirstAway = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-first`
          )
        )
      );

      const scorePeriodSecondHome = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-second`
          )
        )
      );
      const scorePeriodSecondAway = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-second`
          )
        )
      );

      const scorePeriodThirdHome = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-third`
          )
        )
      );
      const scorePeriodThirdAway = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-third`
          )
        )
      );

      const scoreOvertimeHome = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(1) > td.data-overtime`
          )
        )
      );

      const scoreOvertimeAway = coerceScore(
        this.getTextAndTrim(
          virtualNode.querySelector(
            `${results} table > tbody > tr:nth-child(2) > td.data-overtime`
          )
        )
      );

      const scoreResultHome = this.getTextAndTrim(
        virtualNode.querySelector(
          `${results} table > tbody > tr:nth-child(1) > td.data-outcome`
        )
      );

      const scoreResultAway = this.getTextAndTrim(
        virtualNode.querySelector(
          `${results} table > tbody > tr:nth-child(2) > td.data-outcome`
        )
      );

      const homePlayers = this.parsePlayers(
        virtualNode,
        'main .sp-template.sp-template-event-performance:nth-child(1) table tbody tr'
      );
      const awayPlayers = this.parsePlayers(
        virtualNode,
        'main .sp-template.sp-template-event-performance:nth-child(2) table tbody tr'
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
    virtualNode: Document,
    selector: string
  ): LNSkutecPlayer[] {
    const playersItems = this.selectArray(virtualNode, selector);
    const players = [];
    for (const item of playersItems) {
      const jerseyNumber = coerceJerseyNumber(
        this.getTextAndTrim(item.querySelector('td.data-number'))
      );
      const name = this.getTextAndTrim(item.querySelector('td.data-name'));
      const goals = coercePoints(
        this.getTextAndTrim(item.querySelector('td.data-g'))
      );
      const assists = coercePoints(
        this.getTextAndTrim(item.querySelector('td.data-a'))
      );
      const penalty2 = coerceMinutes(
        this.getTextAndTrim(item.querySelector('td.data-tm'))
      );
      const penalty4 = coerceMinutes(
        this.getTextAndTrim(item.querySelector('td.data-dm'))
      );
      const penalty5ok = coerceMinutes(
        this.getTextAndTrim(item.querySelector('td.data-fiveok'))
      );
      const penalty10 = coerceMinutes(
        this.getTextAndTrim(item.querySelector('td.data-osobnitrest'))
      );
      const penaltyok = coerceMinutes(
        this.getTextAndTrim(item.querySelector('td.data-ok'))
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
