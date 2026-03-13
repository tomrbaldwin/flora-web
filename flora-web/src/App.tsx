import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import layoutStyles from "./styles/_layout.module.scss";
import MainView from "./components/Mainview/MainView";
import { usePlants } from "./hooks/usePlants";

function App() {
  // --- Service Worker Registration for PWA ---
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope,
            );
          })
          .catch((error) => {
            console.log("ServiceWorker registration failed: ", error);
          });
      });
    }
  }, []);

  const { plants, loading, error } = usePlants();

  // In a real app, you'd render a proper loading spinner or error message
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={layoutStyles.appContainer}>
      <Sidebar />
      <Header />
      <MainView plants={plants} />
    </div>
  );
}

export default App;
