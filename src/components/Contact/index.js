import React from "react";

export function Contact() {
    return (
        <section className="bodySpace" id="contact">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="sectionTitle" id="smallTitle">Contact</p>
                    </div>
                    <div className="col-sm-9">
                        <div className="card-body">
                            <div className="card-text">
                                <ul className="col contactList">
                                    {/* <!-- email --> */}
                                    <li><a href="mailto:justinlindseylhr@gmail.com"
                                        target="_blank" rel="noreferrer nofollow">Email</a></li>
                                    {/* <!-- linkedin --> */}
                                    <li><a href="https://www.linkedin.com/in/justin-lindsey-7b308622/" target="_blank" rel="noreferrer nofollow">LinkedIn</a>
                                    </li>
                                    {/* <!-- other site links? --> */}
                                    <li><a href="https://github.com/JusticeGTR" target="_blank" rel="noreferrer nofollow">Github</a></li>
                                    <li><a href="https://drive.google.com/file/d/1ktzxH3xQFzvqk4yHeVecQFua58xsjycJ/view?usp=sharing" target="_blank" rel="noreferrer nofollow">Resume</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Contact;