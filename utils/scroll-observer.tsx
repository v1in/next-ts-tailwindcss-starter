import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface IScroll {
  scrollY: number;
}

export const ScrollContext = createContext<IScroll>({
  scrollY: 0,
});

const ScrollObserver: FC<PropsWithChildren> = ({children}) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, {passive: true});
    return () => document.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{scrollY}}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
