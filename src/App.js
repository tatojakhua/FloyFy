import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import SideBar from "./components/SideBar/SideBar";
import TopPlay from "./components/TopPlay/TopPlay";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicPlayer from "./components/MusicPlayer/index";
import { useGlobalContext } from "./context/auth/AuthContextProvider";
import Header from "./components/LandingUI/Header";

function App() {
  const { state } = useGlobalContext();
  return (
    <div className="relative flex">
      {state.isAuthenticated && <SideBar />}

      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        {state.isAuthenticated && <SearchBar />}
        <div
          className={`px-6 overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse ${
            state.isAuthenticated && " h-[calc(100vh-72px)]"
          }`}
        >
          <div className="flex-1 h-fit pb-40">
            {!state.isAuthenticated && <Header />}
            <AppRoutes />
          </div>
          {state?.favoriteMusics?.length > 0 && (
            <div className="xl:sticky xl:overflow-auto scrollbar-none xl:h-auto relative top-0 h-fit">
              <TopPlay />
            </div>
          )}
        </div>
      </div>

      {(state.activeSong?.heading?.title || state.activeSong?.title) && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
