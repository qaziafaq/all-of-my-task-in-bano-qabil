const loadScriptOnce = (src) => {
    if (document.querySelector(`script[data-src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.src = src;
    document.body.appendChild(script);
};

fetch("../Navbar/navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("Navbar").innerHTML = data;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Navbar/navbar.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "../Navbar/navbar.js";
    document.body.appendChild(script);
});


fetch("../Hero/hero.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("hero").innerHTML = data;
         const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Hero/hero.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "../Hero/hero.js";
    document.body.appendChild(script);
});

fetch("../Footer/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../Footer/footer.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = "../Footer/footer.js";
        document.body.appendChild(script);
    });
