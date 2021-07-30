import React from "react";

export function Work() {
    return (
        <section>
            <div class="card mb-3" style={{maxWidth: "540px"}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <p class="sectionTitle">Work</p>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                    <a href="https://github.com/jjayjack/FoodiesUnite"><img src="/images/EatsAroundMe.png" alt="" className="" /></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <a href="https://github.com/melanieuhrich/Rate-My-Workplace"><img src="/images/RankMyWorkplace.png" alt="" className="" /></a>
                                    </div>
                                    <div class="col-md-6">
                                        <a href="https://levickane.github.io/expensetracker/"><img src="/images/expenseTrackerLarge.png" alt="" className="" /></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <a href="https://github.com/JusticeGTR/RandomPasswordGenerator"><img src="/images/RandomPassGen.png" alt="" className="secondWork" /></a>
                                    </div>
                                    <div class="col-md-4">
                                    <a href="https://github.com/JusticeGTR/EmployeeDirectory"><img src="/images/EmployeeDirectory.png" alt="" className="secondWork" /></a>
                                    </div>
                                    <div class="col-md-4">
                                    <a href="https://github.com/JusticeGTR/FitnessTracker"><img src="/images/FitnessTracker.png" alt="" className="secondWork" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;