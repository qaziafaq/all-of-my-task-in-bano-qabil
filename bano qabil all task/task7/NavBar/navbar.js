document.addEventListener("click", function() {
    const enrollBtn = document.getElementById("NavbarEnrollBtn");

    enrollBtn.addEventListener("click", function(){
        window.location.href = "../Form/Enroll.html";
    });
});
