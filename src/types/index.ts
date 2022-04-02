export interface AmateurHockeyBotResponse<T> {
  ok: boolean;
  data?: T;
  errors?: any;
}

export interface AmateurHockeyBotMatchList {
  id: string;
  teamHome: string;
  teamAway: string;
  datetime: string;
}

export type AmateurHockeyBotMatchListResponse = AmateurHockeyBotResponse<AmateurHockeyBotMatchList[]>

export interface AmateurHockeyBotMatchInfo {
  teamHome: string;
  teamAway: string;
  datetime: string;
  competition?: string;
  season?: string;
}

export interface AmateurHockeyBotMatchResults {
  scoreTotalHome: number;
  scoreTotalAway: number;
  scorePeriodFirstAway?: number;
  scorePeriodFirstHome?: number;
  scorePeriodSecondAway?: number;
  scorePeriodSecondHome?: number;
  scorePeriodThirdHome?: number;
  scorePeriodThirdAway?: number;
  scoreOvertimeHome?: number;
  scoreOvertimeAway?: number;
  scoreResultHome: string;
  scoreResultAway: string;
}

export enum AmateurHockeyBotMatchPlayerPosition {
  GOALKEEPER = 'GOALKEEPER',
  DEFENDER = 'DEFENDER',
  ATTACKER = 'ATTACKER',
}

export interface AmateurHockeyBotMatchPlayer {
  name: string;
  jerseyNumber?: number;
  position?: AmateurHockeyBotMatchPlayerPosition;
  goals?: number;
  assists?: number;
  penalty2?: number;
  penalty4?: number;
  penalty5ok?: number;
  penalty10?: number;
  penaltyok?: number;
}
export interface AmateurHockeyBotMatch {
  info: AmateurHockeyBotMatchInfo;
  results?: AmateurHockeyBotMatchResults;
  homePlayers: AmateurHockeyBotMatchPlayer[];
  awayPlayers: AmateurHockeyBotMatchPlayer[];
}

export type AmateurHockeyBotMatchResponse = AmateurHockeyBotResponse<AmateurHockeyBotMatch>;
