import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import LiveChat from './components/livechat/LiveChat';
// import Chatbox from './components/ChatBox/chatbox';





const App = () => {
  return (
    <>
         <Header />
         <Nav  />
         <About />
         <Experience />
         <Services />
         <Portfolio />
         <Testimonials />
         <Contact />
         {/* <h1>Simple Chatbox</h1>
         <Chatbox /> */}
         {/* <h1>Live Chat Example</h1>
         <LiveChat /> */}
         <Footer />

         

    </>
  );
}

export default App;
