import React from "react";
import TypeWriter from "react-typewriter";

function Banner() {
  return (
    <div className='flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0'>
      <TypeWriter typing={1.5} fixed={true}>
        <div className='space-y-5 px-10'>
          <h1 className='max-w-xl font-serif text-6xl'>
            Hi I'm{" "}
            <span className='underline decoration-black decoration-4 italic'>
              Peter
            </span>
            {", "}developer, designer & bitcoiner
          </h1>

          <h2>An architect turned web developer...</h2>
        </div>
      </TypeWriter>
      <div>
        <img
          className='hidden h-32 md:inline-flex lg:h-full'
          src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
          alt=''
        />
      </div>
    </div>
  );
}

export default Banner;
