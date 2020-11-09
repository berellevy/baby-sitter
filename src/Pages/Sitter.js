import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import References from "../components/References";
import { BackendDomain } from "../utils/urls";

const Sitter = ({ match, history }) => {
  const { id } = match.params;
  const [sitter, setSitter] = useState(null);

  useEffect(() => {
    const fetchSitters = async () => {
      const results = await fetch(BackendDomain(`sitters/${id}`));
      const data = await results.json();
      setSitter(data);
    };
    fetchSitters();
  }, []);

  if (sitter) {
    const {
      bio,
      age,
      contact_name,
      contact_phone,
      contact_relation,
      name,
      years_of_experience,
      price,
      references
    } = sitter
    console.log(references);

    return (
      <div className="container">
        <Header />
        <BackButton history={history} />
        <h1>{name}</h1>
        {/* sitter contact name and relation */}
        <div className="find-sitter-menu background-blur">
          <div className="find-sitter-menu-section">
            <label className="find-sitter-menu-label">
              {contact_name} ({name}'s {contact_relation})
            </label>
            {/* call button */}
            <Link href={`tel:${contact_phone}`} className="find-sitter-button">
              Call {contact_phone}
            </Link>
          </div>
        </div>
        
        <div> {/* flex wrap */} 
          <div>${price}</div>
          <div>Age: {age}</div>
          <div>Babysitting: {years_of_experience}</div>
        </div>

        <div>
          Bio
          <p>{bio}</p>
        </div>
        {/* references:
          name, number
        */}
        <div>
          References
          <References references={references}/>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Sitter;
