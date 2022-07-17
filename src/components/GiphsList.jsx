import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input';

export default function GiphsList() {
  const [gifs, setGifs] = useState([]);
  const [value, setValue] = useState('');

  function getSomeGiphs(value) {
    const options = {
      method: 'GET',
      url: 'https://giphy.p.rapidapi.com/v1/gifs/search',
      params: {api_key: 'oohM3byjV7DzjH9rJosCLBIWZj1wewOH', q: value, limit: '29'},
      headers: {
        'X-RapidAPI-Key': 'd8fd385eb6mshd5b8e8941a2bc20p19705ejsnea229c5650e7',
        'X-RapidAPI-Host': 'giphy.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setGifs(response.data.data)
      return response.data

    }).catch(function (error) {
      console.error(error);
    });
  }


  return (
      <>
      <h1 className='header'>GIF GENERATOR</h1>
      <br></br>
      <Input value={value} setValue={setValue} getSomeGiphs={getSomeGiphs}/>  
      <br></br>
      <div className='flexets'>
        {gifs.map((el) => (
         <img src={el.images.fixed_height.url}></img>
        ))}
      </div>
      </>
    );

}
