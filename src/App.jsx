import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="text-white font-[Poppins] bg-black md:px-10 lg:px-16 w-full">
      <Navbar />
      <main className="pt-20 md:pt-32 sm:px-6 md:px-10 lg:px-16">
        <Header />
        {/* <About /> */}
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
