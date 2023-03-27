import React, { useState } from "react";
import "./Formulario.css";

const initialForms = {
  description: "",
  dateFrom: "",
  dateTo: "",
 
};




const Formulario = ({ handleSearch }) => {
  const [Form, setForm] = useState(initialForms);

  const handleChange = (e) => {

       setForm({
        ...Form,
        [e.target.name]:e.target.value,

       });

  };

  

  const handleSubmit = (e)=>{
        e.preventDefault();
    if(!Form.description ||!Form.dateFrom || !Form.dateTo ){
        alert("Datos Incompletos");
        return;
    }
    handleSearch(Form);

    setForm(initialForms);
  }
    
  return (
    <div className="d-flex justify-content-end">
        <form onSubmit={handleSubmit}  >
          <div className="d-flex align-items-center">
      <label className="mx-2 " htmlFor="description">Busqueda:</label>
      <input 
        className="mx-2"
        type={"text"}
        placeholder="Description"
        name="description"
        id="description"
        onChange={handleChange}
        value={Form.description}
      ></input>
      <label className="mx-2" htmlFor="dateFrom">From:</label>
      
      <input className="mx-2" type={"date"} id="dateFrom"  dateformat="DD/MM/YYYY" name="dateFrom" onChange={handleChange}
        value={Form.dateFrom}></input>
      <label  className="mx-2" htmlFor="dateTo">To:</label>
      <input className="mx-2" type={"date"} id="dateTo"  dateformat="DD/MM/YYYY" name="dateTo" onChange={handleChange}
        value={Form.dateTo}></input>
      <input   type={"submit"} value="Buscar"  className="btn btn-primary btn-hover"></input>
      </div>
      </form>
    </div>
  );
};

export default Formulario;
