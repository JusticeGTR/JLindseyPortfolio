import React from "react";

export function Contact() {
    return (
        <section id="contact">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-med-3">
                        <p className="sectionTitle">Contact</p>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <p className="card-text">
                                <ul className="col contactList">
                                    {/* <!-- email --> */}
                                    <li><a href="mailto:justinlindseylhr@gmail.com"
                                        target="_blank" rel="noreferrer nofollow">justinlindseylhr@gmail.com</a></li>
                                    {/* <!-- linkedin --> */}
                                    <li><a href="https://www.linkedin.com/in/justin-lindsey-7b308622/" target="_blank" rel="noreferrer nofollow">LinkedIn</a>
                                    </li>
                                    {/* <!-- other site links? --> */}
                                    <li><a href="https://github.com/JusticeGTR" target="_blank" rel="noreferrer nofollow">Github</a></li>
                                    <li><a href="https://drive.google.com/file/d/1ktzxH3xQFzvqk4yHeVecQFua58xsjycJ/view?usp=sharing" target="_blank" rel="noreferrer nofollow">Resume</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;