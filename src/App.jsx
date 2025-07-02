import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" text-white font-[Poppins] min-h-screen px-28">
      <Navbar />
      <main className="pt-32 px-6 sm:px-10 lg:px-20">
        <Header />
        {/* <About /> */}
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
      </main>
    </div>
  );
}

export default App;