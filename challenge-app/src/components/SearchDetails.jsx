import React, { useState } from 'react';
import Message from "./Message";
import Description from "./Description";
import Pag from "./Pagination";




const SearchDetails = ({ search, description, imagen }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  

  const endPage = currentPage * resultsPerPage;
  const startPage = endPage-resultsPerPage;
 
  const filteredResults = description.filter((el) => {
    const bikeDate = new Date(el.fecharobo).getTime();
    const dateFrom = new Date(search.dateFrom).getTime();
    const dateTo = new Date(search.dateTo).getTime();
    
    // return bikeDate >= dateFrom && bikeDate <= dateTo;
    return (
      bikeDate >= new Date(dateFrom).getTime() &&
      bikeDate <= new Date(dateTo).getTime()
       &&
      el.title.toLowerCase().includes(search.description.toLowerCase())
    );
  });
 const totalResults=filteredResults;
  
  // const filteredBikes = description.filter((b) => {
  //   const bikeDate = new Date(b.fecharobo).getTime();
  //   console.log(bikeDate);
  //   return (
  //     bikeDate >= new Date(dateFrom).getTime() &&
  //     bikeDate <= new Date(dateTo).getTime() &&
  //     b.title.toLowerCase().includes(search.description.toLowerCase())
  //   );
  // });

  return (
    <>
      
      <h2>Resultados para: {search.description}</h2>
      
      <span className='d-flex justify-content-end m-3' >Total: {filteredResults.length}</span>
      
      { filteredResults.length === 0  ? (
        <Message msg={"No Results"} bgColor="#dc3545" />
      ) : (
        
        filteredResults.map((el) => (
          
          <Description key={el.id} title={el.title} description={el.description} location={el.location}
          dateoftheft={el.dateoftheft} imagen={el.imagen}
          ></Description>
            

        )).slice(startPage,endPage)
          
      )}
     
        <Pag 
            resultsPerPage={resultsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalResults={totalResults}
        ></Pag>
         
    </>
  );
};
export default SearchDetails;
