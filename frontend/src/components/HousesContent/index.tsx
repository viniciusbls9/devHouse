import React from 'react';

// import { Container } from './styles';

const HousesContent: React.FC = ({ children }) => {
  return (
      <div className="houses-content">
          {children}
      </div>
  );
}

export default HousesContent;