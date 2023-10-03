import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToHistory } from "../redux/actions/WordAction";

const Search = () => {

    const [value, setValue] = useState("");
    const [data, setdata] = useState([]);
    const [history, setHistory] = useState([])

    console.log(history);
    const dispatch = useDispatch();
    const getvalue = ( (e) => {
        setValue(e.target.value);
    })

    const getinput = ( () => {
        console.log(value);
        apicall(value);


    })
    async function apicall(value) {
        try {
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
          const responseData = response.data; 
          if (responseData) {
            setdata(responseData);
            setHistory((prevHistory) => [...prevHistory, value]);
            dispatch(addToHistory({ word: value}));
          } else {
          
            console.log("No data found");
          }
        } catch (error) {
          alert(error);
        }
      }
  return (
    <div>
        <div className="searchbar">
            <input type="text" value={value} onChange={getvalue} placeholder='searchHere'/>
            <button onClick={getinput}>Search</button>
            <div className="section">
            {
                data.map((element, index) => (
                    <div className='list' key={index}>

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
                       
                       <hr />
                    </div>
                ))
            }
            
            </div>
           
        </div>
    </div>
  )
}

export default Search