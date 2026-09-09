 const aboutPage = document.querySelector(".about-page");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutPage.classList.add("visible");
            }
        });
    });

    observer.observe(aboutPage);