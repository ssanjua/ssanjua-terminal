import React, { useEffect } from 'react';

const Linkedin: React.FC = () => {
  useEffect(() => {
    window.open("https://www.linkedin.com/in/paupallares/", "_blank");
  }, []);

  return <div className='wrapper'>say hi!</div>;
};

export default Linkedin