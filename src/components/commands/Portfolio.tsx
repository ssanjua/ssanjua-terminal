import React, { useEffect } from 'react';

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.open("https://ssanjua.vercel.app", "_blank");
  }, []);

  return <div className='wrapper'>opening portfolio...</div>;
};

export default Portfolio