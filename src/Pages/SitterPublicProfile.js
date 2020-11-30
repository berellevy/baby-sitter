import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import BorderBox from "../components/BorderBox";
import DataProvider from "../components/DataProvider";
import Header from "../components/Header";
import Phone from "../components/Phone";
import SitterAppointments from "../components/SitterAppointments";
import SitterAvailabilities from "../components/SitterAvailabilities";
import SplitColumn from "../components/SplitColumn";
import TwoColContainer from "../components/TwoColContainer";
import { BackendDomain } from "../utils/urls";

const SitterPublicProfile = ({ match, history }) => {
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

        <TwoColContainer>
          {/* flex wrap */}

          <BorderBox>${price}</BorderBox>
          <BorderBox>Age: {age}</BorderBox>
          <BorderBox>Babysitting: {years_of_experience}</BorderBox>
        </TwoColContainer>
        <BorderBox>{bio}</BorderBox>

        <BorderBox>
          <DataProvider
            data={references}
            render={(data) => {
              return (
                <li key={data.id}>
                  <SplitColumn
                    left={<span>{data.name}</span>}
                    right={<Phone num={data.phone} />}
                  />
                </li>
              );
            }}
          />
        </BorderBox>

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

export default SitterPublicProfile;
