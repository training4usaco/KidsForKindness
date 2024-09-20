import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";
import './home.css';
import header_bg from '../assets/violin_bg.png';

const Home = () => {
    function Service(title, text) {
      const [hidden, setHidden] = useState(true);
      return (
        <div className={"w-3/12 mt-[5rem] h-fit relative inline-block bg-radial-gradient rounded-xl " + (hidden ? "shadow-pop-tr-reverse" : "shadow-pop-tr")}
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}>
          <div className="h2 text-color-4 pt-[2rem]">
            <h1>{title}</h1>
          </div>
          <div className={hidden ? "text-center text-[30px]" : "hidden"}>
            <p>{"ˇ"}</p>
          </div>
          <div className={hidden ? "hidden" : "body-1 text-color-4 px-[1rem] pb-[2rem]"}>
            <p>{text}</p>
          </div>
          <div className={hidden ? "hidden" : "text-center text-[30px]"}>
            <p>{"ˆ"}</p>
          </div>
        </div>  
      );
    }

    return (
        <div className="flex flex-col">
          <header className="flex-grow">
            <div className="kfk__header" id="home">
              <div className="kfk__header-content">
                <h1 className="gradient__text">Music should sing, for everyone.</h1>
                  <p>Fundraisers, concerts, social media coverage, we make music sing for all.</p>
                    <div className="kfk__header-volunteer">
                      <motion.button type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >Get Involved</motion.button>
                    </div>
              </div>
              <div className="kfk__header-bg">
                <img src={header_bg} alt="header_bg"/>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            <div className="kfk__wkfk">
              <div className="kfk__wkfk-content">
                <h1>Bringing joy to communities in the best way we as kids can.</h1>
                <p>Kids for Kindness is a 501(c)(3) nonprofit organization that is fully run by students. The nonprofit serves as a platform for kids to actively participate in positive change in communities and creates opportunities for kids to interact with the world around us.</p>
              </div>
              <div className="kfk__wkfk-bg"/>
            </div>
            <div className="kfk__skfk">
              <div className="kfk__skfk-content">
                <h1>Our Story</h1>
                <p>Our journey began many years ago with two brothers and an upright piano. Along the way was lots of practice, lessons, and more practice. Then came the recitals and piano competitions. We wanted to do more with our music -- we wanted to share it with others. Eventually we found ourselves playing in hospitals for patients and health care workers, and loved it. That led to routine performances in local nursing homes and then to Kids for Kindness!</p>
              </div>
              <div className="bg-cover overflow-hidden bg-[url('./assets/music_splash_bg.png')]">
                <div className="w-[60rem] h-[40rem]"/>
              </div>
            </div>
            <div className="kfk__services flex flex-col h-[35rem] pt-[5rem] bg-white">
              <div className="h1 text-color-3">
                <h1>{"What We Do"}</h1>
              </div>
              <div className="flex justify-evenly">
                {Service("Performances", "Kids for Kindness hosts routine performances at public venues across the Bay Area, like nursing homes and hospitals.")}
                {Service("Concerts", "Kids for Kindness hosts large community fundraising concerts, in addition to routine performances. These event are formal, and provide students opportunities to perform, collaborate, lead, in addition to volunteering.")}
                {Service("Other", "Aside from routine performances and formal concerts, Kids for Kindness occasionally hosts special events, such as public outdoor performances, tutoring, masterclasses, and even talent shows.")}
              </div>
            </div>
          </main>
        </div>
    );
}

export default Home
