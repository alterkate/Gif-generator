import React from 'react';

export default function Input(props) {

  const {value, setValue, getSomeGiphs} = props;
  
  return (
  <div className="text-field">
    <div className="text-field__group">
      <input className="text-field__input" type="search" id="search" name="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button className="text-field__btn" type="button" onClick={()=>getSomeGiphs(value)}>Найти</button>
    </div>
  </div>
  ) 
}
