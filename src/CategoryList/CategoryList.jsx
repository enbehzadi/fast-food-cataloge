import { useEffect } from "react";
import axios from "../axios";
import { useState } from "react";
import Loading  from "../Loading/Loading";

const CategoryList=()=>{
    const [loading,setLoading]=useState(true);
    const [categories,setCategories]=useState([]);
  useEffect(()=>{
        const fetchCategories=async()=>{
            const responce=await axios.get('/FoodCategory/categories');

            setCategories(responce.data);
            setLoading(false);
        }
        fetchCategories();
  },[] 
  );
  const renderContent=()=>{
    if(loading){
        return <loading/>
    }
    return(
        <ul className="nav">
        <li className="nav-item" >
            <a className="nav-link" href="#">
                همه فست فود ها
            </a>
        </li>{
                categories.map((category)=>(
                <li className="nav-item" key={category.id}>
                <a className="nav-link" href="#">
                        {category.name}
                    </a>
                </li>)
                )
        }
    </ul>
    )
  }
  return(
    <nav className="container mt-n5">
            <div className="bg-white rounded-3 shadow-lg py-4" style={{heigh:'80px'}}>
              

            </div>
            {
                renderContent()
            }
    </nav>
);
}
export default CategoryList;