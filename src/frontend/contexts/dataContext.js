import { createContext, useEffect,useState } from "react";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const [allProducts,setAllProducts]=useState([]);
    const [categories,setCategories]=useState([]);

    const cakes= allProducts.filter(({category})=>category==="Cake");
    const flowers= allProducts.filter(({category})=>category==="Flower");
    const plants= allProducts.filter(({category})=>category==="Plant")

    const getData=async()=>{
        const response= await fetch("/api/products");
        const products= await response.json()
        setAllProducts(products?.products);
    }
    const getCategories=async()=>{
        const response= await fetch("/api/categories");
        const categories= await response.json()
        setCategories(categories?.categories);
    }
    useEffect(()=>{
        getData();
        getCategories();
    },[])
    return <DataContext.Provider value={{allProducts,setAllProducts,cakes,plants,flowers,categories}}>
        {children}
    </DataContext.Provider>
}