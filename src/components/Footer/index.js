import React from "react";

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

export function Footer() {
    return (
        <footer className="row offScroll showOnScroll">
                <p className="footer">Coded with ❤️️ by Justin Lindsey 2021</p>
        </footer>
    )
}

export default Footer;