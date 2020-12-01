import React from 'react';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import DataProvider from "../components/DataProvider"
import { weekdays } from '../utils/DateTime';
import LiUnderline from '../components/LiUnderline';

const SitterAvailabilitiesWeeklyPage = () => {
  return (
    <>
      <Header />
      <BackButton />
      <h1>My Schedule</h1>

      <DataProvider 
        data={weekdays()}
        render={(day) => {
          return (
            <LiUnderline url={`/my-schedule/${day}`}>
              <p>
                {day}
              </p>
            </LiUnderline>
          )
        }}
      />
    </>
  );
}

export default SitterAvailabilitiesWeeklyPage;
