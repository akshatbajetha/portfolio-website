import { useEffect, useState } from "react";
import { Header } from "./components";
import { Outlet, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflowY = "hidden";
    } else if (location.pathname === "/about" && window.innerWidth > 850) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [location]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center loader bg-background">
          <HashLoader
            size={50}
            color="#FFFFFF"
            loading={loading}
            
          />
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}

export default App;
