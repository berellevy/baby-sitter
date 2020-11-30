import "./App.css";
import { useGoogleAuth } from "./auth/useGoogleLogin";
import UnauthorizedApp from "./Pages/UnauthorizedApp";
import AuthorizedApp from "./Pages/AuthorizedApp";

function App() {
  const { isSignedIn, isInitialized } = useGoogleAuth();
  return (
    <div className="App">
      {isInitialized && (
        <>{isSignedIn ? <AuthorizedApp /> : <UnauthorizedApp />}</>
      )}
    </div>
  );
}

export default App;
