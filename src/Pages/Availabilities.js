import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { BackendDomain } from "../utils/urls";
import TimeHeader from "../components/TimeHeader";
import UrlProvider from "../components/UrlProvider";
import LiUnderline from "../components/LiUnderline";
import SplitColumn from "../components/SplitColumn";

const Availabilities = ({ location: { search }, history }) => {
  return (
    <div className="container">
      <Header classes="background-light-gray" />
      <div className="container">
        <BackButton history={history} />
        <TimeHeader search={search} />
        <UrlProvider
          url={BackendDomain("sitters" + search)}
          render={(data) => {
            return (
              <LiUnderline key={data.id} url={`/sitters/${data.id}`}>
                <SplitColumn
                  left={
                    <p>
                      {data.first_name} {data.last_name},
                      <br />
                      Age: {data.age}
                    </p>
                  }
                  right={<p>Price: {data.price}</p>}
                />
              </LiUnderline>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Availabilities;
