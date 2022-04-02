import { argv } from 'process';
import { chhl, lnskutec } from './src';

const selector = argv[2];

const lnskutecDemo = async (): Promise<void> => {
  console.log('🏒🏒🏒 LN Skuteč demo 🏒🏒🏒');

  console.log(lnskutec.matchListUrl('2925'));
  console.log(await lnskutec.matchList('2925'));

  console.log(lnskutec.matchUrl('3246'));
  console.log(await lnskutec.match('3246'));
};

const chhlDemo = async (): Promise<void> => {
  console.log('🏒🏒🏒 CHHL demo 🏒🏒🏒');

  console.log(chhl.matchListUrl('1'));
  console.log(await chhl.matchList('1'));

  console.log(chhl.matchUrl('1'));
  console.log(await chhl.match('1'));
}

// tslint:disable-next-line: no-shadowed-variable
const main = async (selector: string): Promise<void> => {
  switch (selector) {
    case 'lnskutec':
      await lnskutecDemo();
      break;
    case 'chhl':
      await chhlDemo();
      break;
    default:
      await lnskutecDemo();
      await chhlDemo();
      break;
  }
};

// tslint:disable-next-line: no-floating-promises
main(selector);
