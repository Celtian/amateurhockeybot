import { argv } from 'process';
import { lnskutec } from './lib';

const selector = argv[2];

const lnskutecDemo = async (): Promise<void> => {
  console.log('🏒🏒🏒 LN Skuteč demo 🏒🏒🏒');

  console.log(lnskutec.matchListUrl('2925'));
  console.log(await lnskutec.matchList('2925'));

  console.log(lnskutec.matchUrl('3246'));
  console.log(await lnskutec.match('3246'));
};


// tslint:disable-next-line: no-shadowed-variable
const main = async (selector: string): Promise<void> => {
  switch (selector) {
    case 'lnskutec':
      await lnskutecDemo();
      break;
    default:
      await lnskutecDemo();
      break;
  }
};

// tslint:disable-next-line: no-floating-promises
main(selector);
