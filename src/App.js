import './App.css';
import Backtotop from './component/Common/Backtotop';
import Preloader from './component/Common/Preloader';
import Get_upload from './component/Get_upload';
import Grow from './component/Grow';
import Hero_section from './component/Hero_section';
import Last_section from './component/Last_section';
import Take_view from './component/Take_view';
import Work_skills from './component/Work_skills';
import {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import Frequently from './component/Ferquently';

function App() {
    useEffect(() => {
      Aos.init({
        duration: 1500,
      });
    }, [])
  return ( <div className = ' overflow-hidden' >
    <Hero_section />
    <Work_skills />
    < Grow />
    <Take_view />
    <Get_upload />
      < Frequently />
    < Last_section />
    < Backtotop />
    <Preloader/>
  
    </div>
  );
}

export default App;