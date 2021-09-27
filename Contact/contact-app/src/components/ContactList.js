import React,{useRef} from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  
  const inputEl = useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const getSearchTerm =()=>{
    props.searchKeyword(inputEl.current.value);

  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
 
    <div className='main' style={{marginTop:"50px"}}>
        <h2>Contact list
           <Link to="/add"> <button className="ui button blue right" style={{marginLeft:"70%"}}>Add Contact</button>
           </Link>
        </h2>
        <div className="ui search"  >
          <div className="ui icon input">

            <input 
            ref={inputEl}
            type="text" 
            placeholder="Search Contacts" 
            className="propmt"
            value={props.term}
            onChange={getSearchTerm}
            />
          <i className="search icon"></i>
          </div>
        </div>
  <div className="ui celled list">
    {renderContactList.length > 0 
    ? renderContactList 
    : "No Contacts Available"}
    </div>
  </div>
  );
};

export default ContactList;