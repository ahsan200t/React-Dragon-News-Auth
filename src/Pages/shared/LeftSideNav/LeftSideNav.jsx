import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-12">All Category</h1>
            {
                categories.map(category=> <Link to={`/category/${category.id}`} className="block mb-8 px-5 text-xl font-medium font-poppins text-[#9F9F9F]" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;