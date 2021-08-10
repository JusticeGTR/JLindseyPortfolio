import React from "react";
import profile from "./79226454.jpg"

export function About() {
    return (
        <section id="about">
                <div className="row">
                    <div className="col">
                        <p className="sectionTitle">About</p>
                    </div>
                    <div className="col">
                        <img src={profile} alt="Justin with his dog, Charlotte, resting her head on his shoulder" />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <p className="card-text">I am an artist turned web developer. After studying graphic design in college and dabbling in most other mediums, I decided to try something new. A friend suggested to try out coding, and I fell into the deep end immediately. I want to build things to help others and make them smile, and in at least that small way, help develop our society into something we can all be proud of.
                I love traveling, reading, creating and a wide variety of other things.</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default About;