
import { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './CategoryList/CategoryList';
import Header from './Header/header';
import axios from './axios';
import Loading from './Loading/loading';

import FastFoodList from './FastFoodList/fastFoodLIst';
function App() {
  const [loading,setLoading]=useState(false);
 
  const [fastFoodItems,setFastFoods]=useState([]);
  const fetchData = async(categoryId=null) => {
    setLoading(true);
    const responce=await axios.get(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
    console.log(responce.data);
    setFastFoods(responce.data);

  };
  useEffect(()=>{
    fetchData();
  },[])

  const renderContent=()=>{
    // if(Loading){
    //   return  <loading theme="dark"/>
    // }
    return <FastFoodList fastFoodItems={fastFoodItems}/>
  }
  return (
      <div className='wrapper bg-faded-dark'>
      <Header>
      </Header>
      <CategoryList></CategoryList>
      
      <div className='container mt-4'>
      {
        renderContent()
      }
      </div>
      </div>
  );
}

export default App;
