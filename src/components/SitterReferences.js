import { useFetch } from "../hooks/useFetch";
import { BackendDomain } from "../utils/urls";
import DataProvider from "./DataProvider";
import AddReferenceModal from "./AddReferenceModal";

const SitterReferences = () => {
  const [references, loading, error, setReferences] = useFetch({
    url: BackendDomain("references"),
  });

  return (
    <>
      <AddReferenceModal />
      <DataProvider
        data={references}
        render={(reference) => {
          return (
            <li key={reference.id}>
              <p>{reference.name}</p>
              <p>{reference.phone}</p>
              <button>delete</button>
            </li>
          );
        }}
      />
    </>
  );
};

export default SitterReferences;
