import React, { useState } from "react";
import ReactModal from "react-modal";

const AddReferenceModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const newSitter = () => ({
    name,
    phone
  })

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // can do stuff here
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // post new data
    console.log(newSitter());
    // wait for success or failure
    // show succes
    // add to references in parent
    // clear fields
    closeModal()
  };
  return (
    <>
      <button onClick={openModal}>Add a new reference</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabe="content label"
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          
          <input
            type="text"
            name="name"
            value={name}
            onChange={({target}) => setName(target.value)}
          />
          <br/>

          <label htmlFor="phone">phone</label>
          <input 
            type="text"
            name="phone"
            value={phone}
            onChange={({target}) => setPhone(target.value)}
          />
          <br/>

          <input type="submit" value="add"/>
        </form>
        {/* <button onClick={closeModal}>close</button> */}
      </ReactModal>
    </>
  );
};

export default AddReferenceModal;
