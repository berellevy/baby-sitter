import React, { useState } from "react";
import ReactModal from "react-modal";
import { BackendDomain, fetcher } from "../utils/urls";

const AddReferenceModal = ({addReference}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const newReference = () => ({
    name,
    phone,
  });

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
    const url = BackendDomain("references");
    const response = await fetcher({ url, m: "POST", b: newReference() });
    const reference = await response.json()
    // on response success
    // show succes
    addReference(reference)
    closeModal();
    // clear fields

    // on response failure
    // show error message

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
            onChange={({ target }) => setName(target.value)}
          />
          <br />

          <label htmlFor="phone">phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
          <br />

          <input type="submit" value="add" />
        </form>
        {/* <button onClick={closeModal}>close</button> */}
      </ReactModal>
    </>
  );
};

export default AddReferenceModal;
