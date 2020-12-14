import { Link } from "react-router-dom";
import AddBookingForm from "../components/AddBookingForm";
import Header from "../components/Header";
import { BackendDomain } from "../utils/urls";
import DataProvider from "../components/DataProvider";
import LiUnderline from "../components/LiUnderline";
import ApprovalNotice from "../components/ApprovalNotice"
import { durationToEndTime, formatDate, formatHM } from "../utils/DateTime";
import PageDataProvider from "./PageDataProvider";
import { useFetch } from "../hooks/useFetch";

const SitterHomePage = () => {
  const [sitter, loading, error] = useFetch({ url: BackendDomain("/sitter") });

  const [appointments, _, __, setAppointments] = useFetch({
    url: BackendDomain("appointments"),
  });
  const addAppointment = (appt) => setAppointments([...appointments, appt]);

  const sortAppointments = () => {
    return (
      appointments &&
      appointments.sort((a, b) => {
        return a.start_time < b.start_time
          ? -1
          : a.start_time > b.start_time
          ? 1
          : 0;
      })
    );
  };
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
              <ApprovalNotice approved={data.approved} />
              <Link to="/edit-profile" className="border-box">
                edit profile
              </Link>
              <Link to="/my-schedule" className="border-box">
                My schedule
              </Link>

              <AddBookingForm addAppointment={addAppointment} />

              <p>Current Bookings</p>
              <DataProvider
                data={sortAppointments()}
                render={(appt) => {
                  return (
                    <LiUnderline key={appt.id} url={`/bookings/${appt.id}`}>
                      <p>
                        {formatDate(appt.start_time, "dddd, MMMM D")}
                        <br />
                        {formatHM(appt.start_time)} -{" "}
                        {durationToEndTime(
                          appt.start_time,
                          appt.duration_minutes
                        )}
                        <br />
                        <span style={{ marginRight: "1em" }}>
                          {appt.contact_name}
                        </span>
                        <span>{appt.contact_phone}</span>
                      </p>
                    </LiUnderline>
                  );
                }}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default SitterHomePage;
