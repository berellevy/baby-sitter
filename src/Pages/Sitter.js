import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import References from "../components/References";
import SitterAppointments from "../components/SitterAppointments";
import SitterAvailabilities from "../components/SitterAvailabilities";
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
  }, [id]);

  if (sitter) {
    const {
      bio,
      age,
      contact_name,
      contact_phone,
      contact_relation,
      first_name,
      last_name,
      years_of_experience,
      price,
      references,
      availabilities,
      appointments,
    } = sitter;
    return (
      <div className="container">
        <Header />
        <BackButton history={history} />
        <h1>
          {first_name} {last_name}
        </h1>
        {/* sitter contact name and relation */}
        <div className="find-sitter-menu background-blur">
          <div className="find-sitter-menu-section">
            <label className="find-sitter-menu-label">
              {contact_name} ({first_name}'s {contact_relation})
            </label>
            {/* call button */}
            <a href={`tel:${contact_phone}`} className="find-sitter-button">
              <span>Call</span> <span> {contact_phone}</span>
            </a>
          </div>
        </div>

        <div>
          {" "}
          {/* flex wrap */}
          <div>${price}</div>
          <div>Age: {age}</div>
          <div>Babysitting: {years_of_experience}</div>
        </div>

        <div>
          Bio
          <p>{bio}</p>
        </div>
        <div>
          References
          <References references={references} />
        </div>
        <div>
          Availabilities
          <ul>
            <SitterAvailabilities availabilities={availabilities} />
          </ul>
        </div>
        <div>
          Appointments
          <ul>
            <SitterAppointments appointments={appointments} />
          </ul>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Sitter;
