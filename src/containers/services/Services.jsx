import React from 'react';
import { useState } from "react";

/*  */

const Services = () => {
  function Service(title, text) {
    const [hidden, setHidden] = useState(true);
    return (
      <div className={"w-3/12 mt-[5rem] h-fit relative inline-block bg-radial-gradient " + (hidden ? "shadow-pop-tr-reverse" : "shadow-pop-tr")}
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
    <div className="flex flex-col h-[35rem] pt-[5rem] bg-white">
      <div className="h1 text-color-3">
        <h1>{"What We Do"}</h1>
      </div>
      <div className="flex justify-evenly">
        {Service("Performances", "Kids for Kindness hosts routine performances at public venues across the Bay Area, like nursing homes and hospitals.")}
        {Service("Concerts", "Kids for Kindness hosts large community fundraising concerts, in addition to routine performances. These event are formal, and provide students opportunities to perform, collaborate, lead, in addition to volunteering.")}
        {Service("Other", "Aside from routine performances and formal concerts, Kids for Kindness occasionally hosts special events, such as public outdoor performances, tutoring, masterclasses, and even talent shows.")}
      </div>
    </div>
    // <div ref={ref} className="kfk__services">
    //   <div class="show-on-scroll" className={"kfk__services-container " + (inView ? "shadow-pop-tr" : "shadow-pop-tr-reverse")} >
    //     <div className="kfk__services-title">
    //       <Service title="Our Work"/>
    //     </div>
    //     <div className="kfk__services-list">
    //       <Service />
    //       <Service />
    //       <Service />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Services
