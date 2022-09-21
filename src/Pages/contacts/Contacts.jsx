import {Link} from "react-router-dom"
import './contacts.css';
import data from './ContactsData.json'
import { useEffect } from "react";
import { useLocation } from "react-router";
import React, {useState} from "react";
import Fotter from "../../components/fotter";


const Contacts = () => {
  
        const [searchTerm, setSearchTerm] = useState("");

        return (
          <>
         
          <h1 className="Archive-title" dir="rtl">אנשי קשר בעירייה</h1>
          <h2 className="Archive-title2" dir="rtl">מחפש מישהו מהעירייה?</h2>
            <div className="template-container">
              <div className="search-input_Container">
      
                <input id="search-input" dir="rtl" type="text" placeholder="חפש מישהו..." onChange={(event) => {
                  setSearchTerm(event.target.value);
      
                }} />
              </div>
              <div className="template_Container">
                {
                  data.filter((val) => {
                      if(searchTerm == ""){
                        return val;
                      }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                      }
                    })
                    .map((val) => {
                      return(
                        <div className="cards-div">
                        <div className="template" key={val.id}>
                          <div className="img-div">
                            <img className="image" src={val.image} alt="" />
                          </div>
                             <h3>{val.name}</h3>
                             <p className="desctiption">{val.description}</p>
                             <p className="phone">{val.phone}</p>
                             <p className="email">{val.email}</p>
                      
                        </div> 
                        </div>
                      )
                    })
                }
            </div>
            </div>
          <Fotter/>
            
          </>
    )
}
export default Contacts