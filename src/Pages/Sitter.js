import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
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
    } = sitter && sitter;

    return (
      <div className="container">
        <Header />
        <BackButton history={history} />
        <h1>{name}</h1>
        {/* sitter contact name and relation */}
        <form className="find-sitter-menu background-blur">
        <div className="find-sitter-menu-section">
          <label className="find-sitter-menu-label">
            {contact_name} ({name}'s {contact_relation})
          </label>
          {/* call button */}
          <Link to={`tel:${contact_phone}`} className="find-sitter-button">
            Call {contact_phone}
          </Link>
        </div>
        </form>
        {/* price - Age */}
        {/* experience */}
        {/* bio */}
        {/* references:
          name, number
        */}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Sitter;
