import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton'
import { useFetch } from '../hooks/useFetch';
import { BackendDomain, fetcher } from '../utils/urls';
import PageDataProvider from './PageDataProvider';
import ApprovalNotice from '../components/ApprovalNotice';
import EditSitterForm from '../components/EditSitterForm';

const SitterEditProfilePage = () => {

  const [sitter, loading, error, setSitter] = useFetch({ url: BackendDomain("/sitter") });

  const updateSitter = async (data) => {
    const url = BackendDomain("update_sitter")
    // send data to backend
    const response = await fetcher({url, m: "PATCH", b: data})
    const newData = await response.json()
    // on success update frontend
    setSitter(newData)
    // on failure log 


  }
  return (
    <>
      <Header />
      <BackButton />
      <PageDataProvider data={sitter} render={data => {
        return (
          <>
            <ApprovalNotice approved={data.approved} />
            <EditSitterForm data={sitter} updateSitter={updateSitter} />


          </>
        )
      }}
      />
    </>
  );
}

export default SitterEditProfilePage;
