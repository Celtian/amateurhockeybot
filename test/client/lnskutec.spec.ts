import { AmateurHockeyBotLNSkutecClient } from '../../src/clients/lnskutec';
import { MATCH_DATA, MATCH_HTML } from '../mocks/lnskutec/match';
import { MATCH_LIST_DATA, MATCH_LIST_HTML } from '../mocks/lnskutec/match-list';

describe('AmateurHockeyBotLNSkutecClient', () => {
  let client: AmateurHockeyBotLNSkutecClient;

  beforeEach(() => {
    client = new AmateurHockeyBotLNSkutecClient();
  });

  describe('matchListUrl', () => {
    it('should return correct value', () => {
      expect(client.matchListUrl('2925')).toEqual('http://www.lnskutec.cz/?page_id=2925');
    });

    it('should return undefined', () => {
      expect(client.matchListUrl(undefined)).toEqual(undefined);
      expect(client.matchListUrl(null)).toEqual(undefined);
      expect(client.matchListUrl('')).toEqual(undefined);
    });
  });

  describe('matchUrl', () => {
    it('should return correct value', () => {
      expect(client.matchUrl('3246')).toEqual('http://www.lnskutec.cz/?sp_event=3246');
    });

    it('should return undefined', () => {
      expect(client.matchUrl(undefined)).toEqual(undefined);
      expect(client.matchUrl(null)).toEqual(undefined);
      expect(client.matchUrl('')).toEqual(undefined);
    });
  });

  describe('matchList', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(AmateurHockeyBotLNSkutecClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(MATCH_LIST_HTML);
        });
      });
    });

    it('should return matchList', async () => {
      expect(await client.matchList('TS1')).toEqual(MATCH_LIST_DATA);
    });
  });

  describe('match', () => {
    beforeEach(() => {
      const handleSpy = jest.spyOn(AmateurHockeyBotLNSkutecClient.prototype as any, 'fetchPage');
      handleSpy.mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(MATCH_HTML);
        });
      });
    });

    it('should return team', async () => {
      expect(await client.match('62')).toEqual(MATCH_DATA);
    });
  });
});
