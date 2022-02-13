
export interface AmateurHockeyBotResponse<T> {
  ok: boolean;
  data?: T;
  errors?: any;
}

export interface AmateurHockeyBotTeam {
  id: string;
  name: string;
}

export interface AmateurHockeyBotPlayer {
  id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  jerseyNumber?: number;
  birthdate?: string;
  height?: number;
  weight?: number;
  joined?: string;
  contractExpires?: string;
  marketValue?: number;
  minutesPlayed?: number;
}
