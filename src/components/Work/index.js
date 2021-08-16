import React from "react";
import eats from "./images/EatsAroundMe.png"
import rank from "./images/RankMyWorkplace.png"
import expense from "./images/expenseTrackerLarge.png"
import fitness from "./images/FitnessTracker.png"
import random from "./images/RandomPassGen.png"
import employee from "./images/EmployeeDirectory.png"

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

export function Work() {
    return (
        <section className="bodySpace offScroll showOnScroll" id="work">
                                {/* <a href="https://github.com/jjayjack/FoodiesUnite"><img src={eats} alt="" className="" /></a>
                                <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src={rank} alt="" className="" /></a>
                                <a href="https://levickane.github.io/expensetracker/"><img src={expense} alt="" className="" /></a>
                                <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src={random} alt="" className="" /></a>
                                <a href="https://github.com/JusticeGTR/EmployeeDirectory"><img src={employee} alt="" className="" /></a>
                                <a href="https://github.com/JusticeGTR/FitnessTracker"><img src={fitness} alt="" className="" /></a> */}

            <div className="row no-gutters">
                <div className="col-sm-3">
                    <p className="sectionTitle">Work</p>
                </div>
                <div className="col-sm-9">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://github.com/jjayjack/FoodiesUnite" target="_blank" rel="noreferrer nofollow"><img src={eats} alt="" className="workImage zoom" /></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://github.com/melanieuhrich/Rate-My-Workplace" target="_blank" rel="noreferrer nofollow"><img src={rank} alt="" className="workImage zoom" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://levickane.github.io/expensetracker/" target="_blank" rel="noreferrer nofollow"><img src={expense} alt="" className="workImage zoom" /></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://github.com/JusticeGTR/RandomPasswordGenerator" target="_blank" rel="noreferrer nofollow"><img src={random} alt="" className="workImage zoom" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://github.com/JusticeGTR/EmployeeDirectory" target="_blank" rel="noreferrer nofollow"><img src={employee} alt="" className="workImage zoom" /></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://github.com/JusticeGTR/FitnessTracker" target="_blank" rel="noreferrer nofollow"><img src={fitness} alt="" className="workImage zoom" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;