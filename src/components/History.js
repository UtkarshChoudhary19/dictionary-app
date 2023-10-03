import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const History = () => {
  const {history} = useSelector((state) => state);
  


  return (
    <div className="history">
      <h1>Searched History</h1>
      <ul>
        {history.map((item, index) => (
          <li className='list' key={index}>
            <Link
              to={`/word/${item.word}`}
              
            >
              {item.word}
            </Link>
            
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default React.memo(History);
