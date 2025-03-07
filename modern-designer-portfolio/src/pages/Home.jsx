import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Process from '../components/Process';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <section id="home" className="pt-16">
        <Hero />
      </section>

      <section id="about" className="py-20 md:py-32">
        <About />
      </section>

      <section id="work" className="py-20 md:py-32 bg-white">
        <Work />
      </section>

      <section id="process" className="py-20 md:py-32">
        <Process />
      </section>

      <section id="contact" className="py-20 md:py-32 bg-white">
        <Contact />
      </section>
    </main>
  );
};

export default Home;