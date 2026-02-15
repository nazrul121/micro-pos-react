import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Micro POS`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useTitle;