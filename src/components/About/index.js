import React from "react";
import profile from "./79226454.jpg"

window.addEventListener("load", () => {

  const bodyBg = document.querySelector('.offScroll');
  bodyBg.classList.remove('showOnScroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bodyBg.classList.add('showOnScroll');
        return;
      }

      bodyBg.classList.remove('showOnScroll');
    });
  });

  observer.observe(document.querySelector('.offScroll'));
});

export function About() {
  return (
    <section className="bodySpace offScroll showOnScroll" id="about">
      <div className="row">
        <div className="col">
          <p className="sectionTitle">About</p>
        </div>
        <div className="col">
          <img src={profile} alt="Justin with his dog, Charlotte, resting her head on his shoulder" className="offScroll showOnScroll responsive" />
        </div>
        <div className="col">
          <div className="card-body">
            <p className="card-text aboutText">I am an artist turned web developer. I studied graphic design in college, and worked freelance afterward. Since then, I discovered the joy of coding and its
             ever evolving world. Now, I seek to bring all of my previous experience and an apetite to learn to my work. I draw, paint, write and read in my spare time, as well as enjoy stories of all 
             different mediums. Someday I would like to make my own animated film. I want to build things to help others and make them smile, and in at least that small way, help develop our society into 
             something we can all be proud of. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;