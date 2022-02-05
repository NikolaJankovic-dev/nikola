import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import style from "./App.module.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Pages/Projects";
import Aside from "./components/Aside/Aside";
import Layout from "./components/Layout/Layout";
import AboutMe from "./components/Pages/AboutMe";

function App() {
  const [phase, setPhase] = useState(1);
  const [page, setPage] = useState(false);
  const [fromPage, setFromPage] = useState(false);
  const params = window.location.pathname;

  const handleScroll = (e) => {
    if (phase === 1 && phase !== 2 && phase !== 3) {
      if (e.deltaY > 0) {
        setPhase(2);
        // setFromPage(false);

      }
    }
    if (phase === 2) {
      if (e.deltaY > 0) {
        setPhase(3);
        setFromPage(false);
      }
      if (e.deltaY < 0) {
        setPhase(1);
        setFromPage(false);
      }
    }
    if (phase === 3) {
      if (e.deltaY < 0) {
        setPhase(2);
        setFromPage(false);
      }
      if (e.deltaY > 0) {
        setPhase(4);
        setFromPage(false);
      }
    }
    if (phase === 4) {
      if (e.deltaY < 0) {
        setPhase(3);
        setFromPage(false);
      }
    }
  };
  const handlePop = () => {
    if (params === "/projects" || params === "/aboutme") {
      setPage(true);
    }
    if (params === "/") {
      setPage(false);
    }
  };
  const pageSettUp = useCallback(() => {
    handlePop();
  }, [params]);

  useEffect(() => {
    window.document.body.addEventListener("popstate", handlePop);
    return window.document.body.removeEventListener("popstate", handlePop);
  }, ["click"]);
  window.document.body.addEventListener("popstate", handlePop);

  useEffect((e) => {
    if (!page) {
      window.document.addEventListener("wheel", handleScroll);
    }

    return function () {
      window.document.removeEventListener("wheel", handleScroll);
    };
  });

  return (
    <div className={!page ? style.app : style.appPage}>
      <BrowserRouter>
        <Navbar page={page} setPhase={setPhase} setFromPage={setFromPage}/>
        <Aside page={page} phase={phase} setPhase={setPhase} setFromPage={setFromPage}/>
        <Layout page={page} phase={phase} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                phase={phase}
                setPhase={setPhase}
                setPage={setPage}
                page={page}
                fromPage={fromPage}
                setFromPage={setFromPage}
              />
            }
          />
          <Route
            path="/projects"
           
            element={
              <Projects
                phase={phase}
                setPhase={setPhase}
                page={page}
                setPage={setPage}
                fromPage={fromPage}
                setFromPage={setFromPage}
              />
            }
          />
          <Route
            path="/aboutme"
            
            element={
              <AboutMe
                phase={phase}
                setPhase={setPhase}
                page={page}
                setPage={setPage}
                fromPage={fromPage}
                setFromPage={setFromPage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
