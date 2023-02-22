import React, { useEffect, useState } from 'react'
import {AiOutlineSearch}from 'react-icons/ai'
import {FaMicrophone}from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {key,cx}from '../Api'
import ShowResult from './ShowResult'
import img2 from'../img/googlesmall.png'
import axios from 'axios'
const Search = () => {
  const [search, setState] = useState();
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");

const searchGoogle=async(e)=>{
  e.preventDefault()
  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${search}`
    );
    if (response) {
      setResults(response.data.items);
      setInfo(response.data.searchInformation);
    }
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  async function getPosts() {
    if (search) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${search}`
        );
        if (response) {
          setResults(response.data.items);
          setInfo(response.data.searchInformation);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }   
  getPosts();
}, []);
  return (
    <div className='search'>
<div className='search-form'>
  <div className="search-logo">
    <Link to={'/google'} className='nav-link'>
     <img src={img2} alt='logo'/>
    </Link>
   
  </div>
  <div className="form-input form">
  <form className='home-form 'onSubmit={searchGoogle} >
<input type="search" className='input-search' value={search} onChange={(e)=>setState(e.target.value)}/>
<AiOutlineSearch className='searchlogo'/>
<FaMicrophone className='micro'/>
            </form>
  </div>
</div>
<ShowResult results={results} info={info} />
    </div>
  )
}

export default Search