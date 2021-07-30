import React from "react";
// import headerPic from "./20200602_213040.jpg";

window.addEventListener("load", () => {

  const bodyBg = document.querySelector('.bodyBg');
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

  observer.observe(document.querySelector('.bodyBg'));
});

export function Header() {
  return (
    <section>
      {/* <header className="row">
        <img src={headerPic}
          alt="Hazy sunset over glass-like ocean" id="headerPic" />
      </header> */}
      <p className="scroll-text showOnScroll">&#8595; scroll &#8595;</p>
      <div className="bodyBg showOnScroll"></div>
    </section>
  )
}

export default Header;