import React from "react";
import headerPic from "./20200602_213040.jpg";

export function Header() {
    return (
        <div>
    <header className="row">
        <img src= {headerPic}
            alt="Hazy sunset over glass-like ocean" id="headerPic" />
    </header>
    <p class="scroll-text">&#8595; scroll &#8595;</p>
    <div class="body-bg"></div>
    </div>
    )
}

export default Header;