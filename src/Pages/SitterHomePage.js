import { useState } from "react";
import { Link } from "react-router-dom";
import AddBookingForm from "../components/AddBookingForm";
import Header from "../components/Header";
import { BackendDomain } from "../utils/urls";
import PageProvider from "./PageProvider";
import DataProvider from "../components/DataProvider";
import LiUnderline from "../components/LiUnderline";
import { durationToEndTime, formatDate, formatHM } from "../utils/DateTime";
import PageDataProvider from "./PageDataProvider";
import { useFetch } from "../hooks/useFetch";

const SitterHomePage = () => {
  const [appointments, setAppointments] = useState([]);

  const [sitter, loading, error, setData] = useFetch({
    url: BackendDomain("/sitter"),
  })

  return (
    <>
      <Header />
      <PageDataProvider
        data={sitter}
        render={(data) => {
          return (
            <>
              <h2>
                {data.first_name} {data.last_name}
              </h2>
              <Link to="/edit-profile" className="border-box">
                edit profile
              </Link>
              <Link to="/my-schedule" className="border-box">
                My schedule
              </Link>
            </>
          );
        }}
      />
    </>
  );

  // return (
  //   <PageProvider
  //     url={BackendDomain("/sitter")}
  //     render={(data) => {
  //       const [appointments, setAppointments] = useState([])
  //       setAppointments(data.appointments)
  //       return (
  //         <>
  //           <Header />
  //           <h2>{data.first_name} {data.last_name}</h2>
  //           <Link to="/edit-profile" className="border-box">
  //             edit profile
  //           </Link>
  //           <Link to="/my-schedule" className="border-box">
  //             My schedule
  //           </Link>
  //           <AddBookingForm addAppointment={addAppointment}/>

  //           <p>Current Bookings</p>
  //           <DataProvider
  //             data={appointments}
  //             render={(appt) => {
  //               return (
  //               <LiUnderline
  //                 key={appt.id}
  //                 url={`/bookings/${appt.id}`}
  //               >
  //                 <p>{formatDate(appt.start_time, "dddd, MMMM D")}</p>
  //               <p>{formatHM(appt.start_time)} - {durationToEndTime(appt.start_time, appt.duration_minutes)}</p>

  //               </LiUnderline>
  //               )
  //             }}
  //           />
  //         </>
  //       );
  //     }}
  //   />
  // );
};

export default SitterHomePage;
