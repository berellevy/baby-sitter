import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal'
import { BackendDomain, fetcher } from '../utils/urls';

const EditReferenceModal = ({modalIsOpen, closeModal, data, updateReference}) => {
  const {id} = data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const updatedReference = () => ({
    id,
    name,
    phone,
  })

  useEffect(() => {
    setName(data.name)
    setPhone(data.phone)
  },[modalIsOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // patch new data
    const url = BackendDomain("references");
    const response = await fetcher({url, m: "PATCH", b: updatedReference()})
    const reference = await response.json()
    // on response success
    updateReference(reference)
    // show succes
    // update parent
    closeModal();
    // clear fields

    // on response failure
    // show error message

  }
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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

          <input type="submit" value="update" />
        </form>

      </ReactModal>
      
      
    </>
  );
}

export default EditReferenceModal;
