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
                            <div className="col-sm-6 zoom frame" >
                                <a href="https://github.com/jjayjack/FoodiesUnite" target="_blank" rel="noreferrer nofollow" >
                                    <img src={eats} alt="" className="workImage" />
                                    <p className="imageText">A webapp made by myself and a team of 4 others. We created it as a way to search the city you live in to find any restaurants based on any search inquiry. Currently it's only for Chicago, but in the long term, we would want to add the ability to search any city. Complete with the ability to sign up for your own account, as well as log in and out. We used React, Javascript, CSS, Foursquare, Bootstrap, Mongoose, Express, Axios, and more.</p>
                                </a>
                            </div>
                            <div className="col-sm-6 zoom frame">
                                <a href="https://github.com/melanieuhrich/Rate-My-Workplace" target="_blank" rel="noreferrer nofollow">
                                    <img src={rank} alt="" className="workImage" />
                                    <p className="imageText">This webapp was made by myself and a team of 4 others. A user can create an account in order to find a company and read reviews on workplace safety as well as leave their own review in order to keep workplaces accountable. This project has lots of room for growth in the future. We used React, Javascript, Css, Handlebars, Express, Sequelize, bcrypt, mySql, and more.</p>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 zoom frame">
                                <a href="https://levickane.github.io/expensetracker/" target="_blank" rel="noreferrer nofollow">
                                    <img src={expense} alt="" className="workImage" />
                                    <p className="imageText">A webapp made by myself and 2 others. By adding expenditures and profits, a user can keep track of their money and understand how it's being used in order to save as much as possible. We used Javascript, CSS, HTML, JQuery, Materialize, and more.</p>
                                </a>
                            </div>
                            <div className="col-sm-6 zoom frame">
                                <a href="https://github.com/JusticeGTR/RandomPasswordGenerator" target="_blank" rel="noreferrer nofollow">
                                    <img src={random} alt="" className="workImage" />
                                    <p className="imageText">This webapp is a simple and clean generator for passwords. Choose the parameters with the pop up prompts and it will generate a password for you based on the specific options it is given. Made with Javascript, CSS and HTML.</p>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 zoom frame">
                                <a href="https://github.com/JusticeGTR/EmployeeDirectory" target="_blank" rel="noreferrer nofollow">
                                    <img src={employee} alt="" className="workImage" />
                                    <p className="imageText">This webapp is a great way to search through a large list of people/items easily and quickly. Search results update with any character typed in the search bar. Made with Javascript, React, Bootstrap, moment, and more.</p>
                                </a>
                            </div>
                            <div className="col-sm-6 zoom frame">
                                <a href="https://github.com/JusticeGTR/FitnessTracker" target="_blank" rel="noreferrer nofollow">
                                    <img src={fitness} alt="" className="workImage" />
                                    <p className="imageText">This particular webapp is used to keep track of your fitness routines. Create a workout and input everything about your session. It will then sum up all the information of each specific exercise to show you how much you've done as well as give you the last weeks worth of workouts on a graph. Made with Javascript, Express, Mongoose, CSS, and more.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;