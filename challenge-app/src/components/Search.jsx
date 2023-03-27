import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Formulario from "./Formulario";
import Loader from "./loader";
import SearchDetails from "./SearchDetails";


export default function Search() {
  const [search, setSearch] = useState(null);
  const [description, setDescription] = useState([]);
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);

  const handleSearch = (data) => {
    setSearch(data);
  };

  


  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { description } = search;

      const API_URL= `https://bikeindex.org:443/api/v3/search?query=${description}&location=Berlin&distance=30&stolenness=stolen`;
      
      setLoading(true);
      const [bike] = await Promise.all([helpHttp().get(API_URL)])

        bike.bikes.forEach((el) => {
              let bikee={
                id: el.id,
                description:el.description,
                title:el.title,
                dateoftheft:new Date(el.date_stolen * 1000).toLocaleDateString(),
                fecharobo:new Date(el.date_stolen * 1000).getTime(),
                location:el.stolen_location,
                imagen:el.large_img,
                
              }

           setDescription((description)=>[...description,bikee]);
           
         
        })
        setLoading(false);
    };
 
    fetchData();
  }, [search]);

  
  return (
    <div>
      <Formulario handleSearch={handleSearch}></Formulario>
      {loading && <Loader></Loader>}
      {search &&
        !loading &&
            (          
          <SearchDetails 
             
            search={search}
            description={description}
            imagen={imagen}
          ></SearchDetails>
        )}
  

    </div>
  );
}
