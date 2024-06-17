let searchBtn = document.getElementById("search-btn");

let searchForm = document.getElementById("search-form");

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "block";

    } else {
        searchForm.style.display = "none";
    }

});



// Register-----//

function saveData() {
    let name, email, password;
    name = document.getElementById("register-name").value;
    email = document.getElementById("register-username").value;
    password = document.getElementById("register-password").value;



    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (user_records.some((v) => {
        return v.email == email
    })) {
        alert("Duplicate Data")
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Register Succcessfully");
        window.location.href = "login.html";
    }

}

/* 
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
}); */