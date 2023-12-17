import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
 const [photoData,setPhotoData] =useState(null);
 const [loading,setLoading]=useState(false);
 const [inputNo,setInputNo]=useState('');
 const fetchData=async()=>{
    setLoading(true);
    try{
        const res=await fetch(`http://jsonplaceholder.typicode.com/photos/${inputNo}`);
        const json= await res.json();
        setPhotoData(json);
    }catch(error){
        console.error('errorfetching data',error);
    }finally{
        setLoading(false);
    }
 }
 useEffect(()=>{
    if(inputNo !==''){
        fetchData()
    }
 },[inputNo])

 return(
    <div>
        <input
        type='number'
        value={inputNo}
        onChange={(e)=>setInputNo(e.target.value)}/>
        {loading ?<Loader/>:null}
        {photoData && <PhotoFrame url={photoData.url} title={photoData.title}/>}
    </div>
 );
};


export default App;
