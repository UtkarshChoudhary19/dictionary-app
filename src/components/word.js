import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Word = () => {
  const { word } = useParams();
  const [data, setdata] = useState([]);


  const history = useSelector((state) => state.history);

  const selectedHistoryItem = history.find((item) => item.word === word);

  useEffect(() => {
    async function fetchWordDefinition() {
      try {

        if (selectedHistoryItem) {
        
          const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedHistoryItem.word}`
          );
          const responseData = response.data;
          if (responseData) {
            setdata(responseData);
          } else {
            console.log("No data found for the word.");
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchWordDefinition();
  }, [word, selectedHistoryItem]);

  return (
    <div className="section">
      {
         data.map((element, index) => (
            <div key={index}>

                <div>{element.word}</div>

                {
                    element.phonetics.map( (ad, index3) => (
                        <audio key={index3} src={ad.audio} controls></audio>
                    ))
                }

                <div>{element.phonetic}</div>
                <p>noun</p>
                {
                    
                    element.meanings[0] && element.meanings[0].definitions.map((e, index2) => (
                        <div key={index2}>{e.definition}</div>
                    ))
                    
                }
                <p>verb</p>
                {
                    
                    element.meanings[1] && element.meanings[1].definitions.map((e, index4) => (
                        <div key={index4}>{e.definition}</div>
                    ))
                }
               
              
            </div>
            
        ))
      }
      
    </div>
  );
};

export default Word;
