document.addEventListener("DOMContentLoaded", () => {

    const exploreBtn = document.getElementById("heroExploreBtn");
    const enrollBtn = document.getElementById("heroEnrollBtn");

    if(exploreBtn){
        exploreBtn.addEventListener("click", () => {
            alert("🎮 Loading missions...");
        });
    }

    if(enrollBtn){
        enrollBtn.addEventListener("click", () => {
            window.location.href = "../form/form.html";
        });
    }

});