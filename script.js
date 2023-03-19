// Toast Function
function toast(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            // background: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function login(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || name.length < 3) {
        var msg = "Please enter your name";
        toast(msg);
        return;
    }

    if (email !== "admin@user.com") {
        var msg = "Please enter correct email";
        toast(msg);
        return;
    }

    if (password !== "123456") {
        var msg = "Please enter the correct password";
        toast(msg);
        return;
    }

    localStorage.setItem("userName", name);
    window.location.href = "home.html";
    return;
}
