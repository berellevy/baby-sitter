import React from 'react';
import { useParams } from 'react-router';
import BackButton from '../components/BackButton';
import Header from '../components/Header';

const EditBookingPage = () => {
    const {bookingId} = useParams()
  return (
    <>
      <Header />
      < BackButton />
      {bookingId}
    </>
  );
}

export default EditBookingPage;
