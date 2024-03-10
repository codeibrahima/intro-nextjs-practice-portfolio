import {Roboto, Lora} from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  preload: false,
});

const lora = Lora({
  preload: false,
});

export {roboto, lora};
