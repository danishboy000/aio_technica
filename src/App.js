import React from 'react';
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Services from './components/Services'
import ExcessUsage from './components/ExcessUsage'
import Solutions from './components/Solutions'
import Counter from './components/Counter'
import Partners from './components/Partner'
import Work from './components/Work'
import Like from './components/Like'
import PreLoader from './components/PreLoader'

function App() {

  return (
    <div className="App">

      <PreLoader />
      <TopBar />
      <Navbar />       
      <Slider />
      <Services />
      <ExcessUsage />
      <Solutions />
      <Counter />
      <Work />
      <Partners />
      <Like />
      <Footer />

    </div>
  );
}

export default App;
