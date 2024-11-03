import React, { useEffect, useState } from "react";
import axios from "axios";
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    
    useEffect(() => {
        const getID = async () =>{
            try{
                const {data} = await  axios.get(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                setContact(data)
                console.log("Contact:", data)
            } catch (error) {
                console.error("somethings not working dafuq", error);
            }
        };
        if (selectedContactId) {
            getID()
        }
    }, [selectedContactId]);
    
    return (
        <div>
            {contact ? ( 
                <>
        <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <button type="button" className="btn btn-dark" onClick={() => setSelectedContactId(null)}>Back to List</button>
       
      </>
    ) : null} {/* */}
  </div>
);
}
