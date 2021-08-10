import React from "react";
import eats from "./images/EatsAroundMe.png"
import rank from "./images/RankMyWorkplace.png"
import expense from "./images/expenseTrackerLarge.png"
import fitness from "./images/FitnessTracker.png"
import random from "./images/RandomPassGen.png"
import employee from "./images/EmployeeDirectory.png"


export function Work() {
    return (
        <section className="" id="work photos">
                                {/* <a href="https://github.com/jjayjack/FoodiesUnite"><img src={eats} alt="" className="" /></a>
                                <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src={rank} alt="" className="" /></a>
                                <a href="https://levickane.github.io/expensetracker/"><img src={expense} alt="" className="" /></a>
                                <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src={random} alt="" className="" /></a>
                                <a href="https://github.com/JusticeGTR/EmployeeDirectory"><img src={employee} alt="" className="" /></a>
                                <a href="https://github.com/JusticeGTR/FitnessTracker"><img src={fitness} alt="" className="" /></a> */}

            <div class="row no-gutters">
                <div class="col-sm-3">
                    <p class="sectionTitle">Work</p>
                </div>
                <div class="col-sm-9">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <a href="https://github.com/jjayjack/FoodiesUnite"><img src={eats} alt="" className="" /></a>
                            </div>
                            <div class="col-sm-6">
                                <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src={rank} alt="" className="" /></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <a href="https://levickane.github.io/expensetracker/"><img src={expense} alt="" className="" /></a>
                            </div>
                            <div class="col-sm-6">
                                <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src={random} alt="" className="secondWork" /></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <a href="https://github.com/JusticeGTR/EmployeeDirectory"><img src={employee} alt="" className="secondWork" /></a>
                            </div>
                            <div class="col-sm-6">
                                <a href="https://github.com/JusticeGTR/FitnessTracker"><img src={fitness} alt="" className="secondWork" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;