import "./App.css";
import UnauthorizedApp from "./Pages/UnauthorizedApp";
import AuthorizedApp from "./Pages/AuthorizedApp";
import LoadingPage from "./Pages/LoadingPage";
import { useBackendAuth } from "./auth/useBackendLogin";
import ReactModal from "react-modal"

function App() {
  ReactModal.setAppElement('#root');

  const { isLoggedIn, isInitialized } = useBackendAuth();
  
  return (
    <div className="App">
      {
        !isInitialized
          ? <LoadingPage />
          : isLoggedIn
            ? <AuthorizedApp />
            : <UnauthorizedApp />
      }
    </div>
  );
}

export default App;
