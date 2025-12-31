import {Hero, About, Skills, Experience, Projects, Contact,} from './components';

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="About">
        <About />
      </div>

      <Skills />

      <div id="Experience">
        <Experience />
      </div>

      <div id="Portfolio">
        <Projects />
      </div>

      <div id="Contact">
        <Contact />
      </div>

    </>
  );
}