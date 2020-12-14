import React, { useState } from "react";

const EditSitterForm = ({ data, updateSitter }) => {

  const [first_name, set_first_name] = useState(data.first_name);

  const [last_name, set_last_name] = useState(data.last_name);

  const [contact_name, set_contact_name] = useState(data.contact_name);

  const [contact_phone, set_contact_phone] = useState(data.contact_phone);

  const [birthday, set_birthday] = useState(data.birthday);

  const [years_of_experience, set_years_of_experience] = useState(data.years_of_experience);

  const [price, set_price] = useState(data.price);

  

  const sitter = () => ({
    first_name,
    last_name,
    contact_name,
    contact_phone,
    birthday,
    years_of_experience,
    price
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSitter(sitter());
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">First name</label>
      <input
        name="first_name"
        type="text"
        value={first_name}
        onChange={({ target }) => set_first_name(target.value)}
      />
      <br />

      <label htmlFor="last_name">last name</label>
      <input
        name="last_name"
        type="text"
        value={last_name}
        onChange={({ target }) => set_last_name(target.value)}
      />
      <br />


      <h5>Legal Gurdian's Contact Info</h5>

      {/* name */}
      <label htmlFor="contact_name">contact name</label>
      <input
        name="contact_name"
        type="text"
        value={contact_name}
        onChange={({ target }) => set_contact_name(target.value)}
      />
      <br />
      
      {/* phone */}
      <label htmlFor="contact_phone">contact phone</label>
      <input
        name="contact_phone"
        type="text"
        value={contact_phone}
        onChange={({ target }) => set_contact_phone(target.value)}
      />
      <br />

      {/* zip code */}




      {/* birthday */}
      <label htmlFor="birthday">birthday</label>
      <input
        name="birthday"
        type="text"
        value={birthday}
        onChange={({ target }) => set_birthday(target.value)}
      />
      <br />

      {/* babysitting experience */}
      <label htmlFor="years_of_experience">years_of_experience</label>
      <input
        name="years_of_experience"
        type="number"
        value={years_of_experience}
        onChange={({ target }) => set_years_of_experience(target.value)}
      /> 
      <span>years</span>
      <br />

      {/* charge per hour */}
      <label htmlFor="price">price</label>
      <input
        name="price"
        type="number"
        value={price}
        onChange={({ target }) => set_price(target.value)}
      />
      <span>per hour</span>
      <br />



      <input type="submit" value="update" />
    </form>
  );
};

export default EditSitterForm;
