import '../styles/global.css';
import '../styles/tailwind.css';
import {AppProps} from 'next/app';
import ScrollObserver from 'utils/scroll-observer';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}
