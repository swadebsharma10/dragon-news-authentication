import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <section className="p-4">
            <div>
            <h3 className="text-xl mb-8 font-bold">All Categories</h3>
           <div className="space-y-8">
           {
            categories.map(category => <p 
                className="ml-8 text-lg font-semibold"
                key={category.id}>
                
                <NavLink
  to={`/category/${category.id}`}
  className={({ isActive}) =>
      isActive ? "text-orange-600 underline" : ""
  }
>
  {category.name}
</NavLink>
                </p> ) 
        }
           </div>
            </div>
        </section>
    );
};

export default LeftSideNav;