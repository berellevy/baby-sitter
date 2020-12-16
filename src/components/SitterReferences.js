import { useFetch } from "../hooks/useFetch";
import { BackendDomain } from "../utils/urls";
import DataProvider from "./DataProvider";
import AddReferenceModal from "./AddReferenceModal";
import { useState } from "react";
import EditReferenceModal from "./EditReferenceModal";

const SitterReferences = () => {
  const [references, loading, error, setReferences] = useFetch({
    url: BackendDomain("references"),
  });
  
  // EDIT REFERENCE MODAL STUFF
  // the reference to edit
  const [referenceToEdit, setReferenceToEdit] = useState({})
  // open modal and populate data
  const openEditReference = async (reference) => {
    setReferenceToEdit(reference)
    setIsOpen(true)
  }
  
  // modal open and close
  const [modalIsOpen, setIsOpen] = useState(false)

  function closeModal () {
    setIsOpen(false)
  }

  // update reference
  const updateReference = (reference) => {
    const updatedReferences = references.map((r) => r.id === reference.id ? reference : r)
    setReferences(updatedReferences)
  }
  

  // ADD REFERENCE STUFF
  const addReference = (reference) => {
    setReferences([...references, reference])
  }

  return (
    <>
      <AddReferenceModal addReference={addReference}/>

      <DataProvider
        data={references}
        render={(reference) => {
          return (
            <li
              key={reference.id}
              onClick={() => openEditReference(reference)}
            >
              <p>{reference.name}</p>
              <p>{reference.phone}</p>
              <button>delete</button>
            </li>
          );
        }}
      />
      <EditReferenceModal 
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={referenceToEdit}
        updateReference={updateReference}
      />
    </>
  );
};

export default SitterReferences;
