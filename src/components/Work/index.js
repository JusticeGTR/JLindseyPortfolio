import React from "react";
import eats from "./images/EatsAroundMe.png"
import rank from "./images/RankMyWorkplace.png"
import expense from "./images/expenseTrackerLarge.png"
import fitness from "./images/FitnessTracker.png"
import random from "./images/RandomPassGen.png"
import employee from "./images/EmployeeDirectory.png"


export function Work() {
    return (
        <section className="bodySpace" id="work">
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
                                <a href="https://github.com/jjayjack/FoodiesUnite"><img src={eats} alt="" className="workImage" /></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src={rank} alt="" className="workImage" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://levickane.github.io/expensetracker/"><img src={expense} alt="" className="workImage" /></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src={random} alt="" className="workImage" /></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://github.com/JusticeGTR/EmployeeDirectory"><img src={employee} alt="" className="workImage" /></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://github.com/JusticeGTR/FitnessTracker"><img src={fitness} alt="" className="workImage" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;