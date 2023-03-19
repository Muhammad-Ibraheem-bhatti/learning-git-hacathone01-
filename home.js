// let newName = document.getElementById('nameInHome');
// newName.innerHTML = document.cookie;

document.getElementById('nameInHome').innerHTML = localStorage.getItem("userName");



let output = document.getElementById('result-box');
document.getElementById('clear-btn-2').onclick = function () {
    output.innerHTML = "";
}


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

var cities = ['Faisalabad ', 'Lahore ', 'Karachi ', 'Islamabad ', 'Burewala ', 'Sheikhupura ', 'Kashmir '];

document.getElementById('add-city').onclick = function () {
    // output.innerHTML = "";
    // var input = prompt("Enter your city");

    // if (input === "") {
    //     alert('Please add your city in input field');
    // }
    // else {
    //     cities.push(input);
    //     var msg = "aa";
    //     // var msg = '"' + input + '"' + " has been added in the list";
    //     toast(msg);
    // }

    do {
        var name = prompt("Enter your city name :");
        if (name !== null)
            name = name.trim();
    }
    while (name === null || name.length < 3) {
        cities.push(name);
        var msg = '"' + name + '" '+ 'has been added in the list';
        toast(msg);
    }



    // var newCity = prompt("Type your City name");
    // if (newCity === "") {
    //     var msg = 'Please add your city in input field';
    //     toast(msg);
    // }
    // else {
        
    //     cities.push(newCity);
    //     var msg = '"' + newCity + '"' + " has been added in the list";
    //     toast(msg);
    // }
}


document.getElementById('print-cities').onclick = function () {
    output.innerHTML = "";
    let serialNumber = 1;
    for (let i = 0; i < cities.length; i++) {
        output.innerHTML += serialNumber + ') ' + cities[i] + '<br>';
        serialNumber++;
    }
    console.log(cities);
}