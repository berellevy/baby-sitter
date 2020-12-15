import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton'
import { useFetch } from '../hooks/useFetch';
import { BackendDomain, fetcher } from '../utils/urls';
import PageDataProvider from './PageDataProvider';
import ApprovalNotice from '../components/ApprovalNotice';
import EditSitterForm from '../components/EditSitterForm';
import SitterReferences from '../components/SitterReferences';

const SitterEditProfilePage = () => {

  const [sitter, loading, error, setSitter] = useFetch({ url: BackendDomain("/sitter") });

  const updateSitter = async (data) => {
    const url = BackendDomain("update_sitter")
    const response = await fetcher({url, m: "PATCH", b: data})
    const newData = await response.json()
    setSitter(newData)
    // TODO: handle failure


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
            
            {/* reference container */}
            <SitterReferences />
            



          </>
        )
      }}
      />
    </>
  );
}

export default SitterEditProfilePage;
