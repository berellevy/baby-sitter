import { useFetch } from "../hooks/useFetch";
import { BackendDomain, fetcher } from "../utils/urls";
import { arrayDelete, arrayReplace } from "../utils/array";
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
  const [referenceToEdit, setReferenceToEdit] = useState({});
  // open modal and populate data
  const openEditReference = async (reference) => {
    setReferenceToEdit(reference);
    setIsOpen(true);
  };

  // modal open and close
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  // update reference
  const updateReference = (reference) => {
    const updatedReferences = arrayReplace(references, reference);
    setReferences(updatedReferences);
  };

  // ADD REFERENCE STUFF
  const addReference = (reference) => {
    setReferences([...references, reference]);
  };

  const deleteReference = async (id) => {
    // TODO: make a nice alert box
    const alertMessage = "you sure? she might be offended!";
    const userConfirmation = window.confirm(alertMessage);
    if (userConfirmation) {
      // delete on the backend
      const url = BackendDomain("references");
      const response = await fetcher({ url, m: "DELETE", b: { id } });
      if (response.ok) {
        // update the frontend
        const updatedReferences = arrayDelete(references, id);
        setReferences(updatedReferences);
      }
    }
  };

  return (
    <>
      <AddReferenceModal addReference={addReference} />

      <DataProvider
        data={references}
        render={(reference) => {
          return (
            <li key={reference.id}>
              <div onClick={() => openEditReference(reference)}>
                <p>{reference.name}</p>
                <p>{reference.phone}</p>
              </div>
              <button onClick={() => deleteReference(reference.id)}>
                delete
              </button>
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
