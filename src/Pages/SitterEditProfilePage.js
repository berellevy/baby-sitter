import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton'
import { useFetch } from '../hooks/useFetch';
import { BackendDomain } from '../utils/urls';
import PageDataProvider from './PageDataProvider';
import ApprovalNotice from '../components/ApprovalNotice';

const SitterEditProfilePage = () => {

  const [sitter, loading, error, setSitter] = useFetch({ url: BackendDomain("/sitter") });
  return (
    <>
      <Header />
      <PageDataProvider data={sitter} render={data => {
        return (
          <>
            <ApprovalNotice approved={data.approved} />
            <h1 className="border-box">
              {data.first_name} {data.last_name}

            </h1>
          </>
        )
      }}
      />
      <BackButton />
      Sitter edit profile page
    </>
  );
}

export default SitterEditProfilePage;
