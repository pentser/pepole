class Pepole {

    constructor(_parent, _name, _location, _img, _age, _phone, _cell, _email) {

        this.parent = _parent;
        this.name = _name;
        this.location = _location;
        this.img = _img;
        this.age = _age;
        this.phone = _phone;
        this.cell = _cell;
        this.email = _email;


    }

    renderToHtml() {

        let mainDiv = document.createElement("div");
        mainDiv.className = "card col-md-4 p-0 bg-warning text-white";
        this.parent.appendChild(mainDiv);

        let newImg = document.createElement("img");
        newImg.className = "img-fluid rounded-circle mx-auto d-block ";
        newImg.src = this.img;
        newImg.style.width = "128px";
        mainDiv.appendChild(newImg);


        let bodyDiv = document.createElement("div");
        bodyDiv.className = "card-body";
        mainDiv.appendChild(bodyDiv);



        let fullname = this.name.title + " " + this.name.first + " " + this.name.last;

        let contactBy = `Phone: ${this.phone}<br>
                     Cell: ${this.cell}<br>
                     email: ${this.email}<br>`;

        let myAddress = `${this.location.city}, ${this.location.state},${this.location.country}`;


        bodyDiv.innerHTML += `<h4>${fullname} </h4>
                                <p class="card-text">
                                Hello, i am ${this.age} years old, <br>
                                I live in ${myAddress}.<br> you
                                can contact me 24/7 at:<br>${contactBy}</p>`
        // <button class="btn btn-outline-dark">map location</button>`;


        let googleMapButton = document.createElement("button")
        googleMapButton.className = "btn btn-outline-dark";
        googleMapButton.innerHTML = "map location";
        bodyDiv.appendChild(googleMapButton);

        googleMapButton.addEventListener("click", () => {

            let str1 = this.location.city;
            let str2 = this.location.state;
            let str3 = this.location.country;
            let adress = str1.replace(/ /g, "+") + "," + str2.replace(/ /g, "+") + "," + str3.replace(/ /g, "+");
            let fullName = this.name.title + " " + this.name.first + " " + this.name.last;



            document.querySelector("#id_dark").className = "dark container-fluid center";

            document.querySelector("#id_dark img").src = `https://maps.googleapis.com/maps/api/staticmap?center=${adress}&zoom=13&scale=1&size=600x300&maptype=roadmap&key=AIzaSyCH_HPSit8tnBajPgwI8svh7_ZBxVldKAE&format=png&visual_refresh=true`;

            document.querySelector("#id_dark h2").innerHTML = fullName;
            document.querySelector("#id_dark p").innerHTML = `<img src=${this.img} width="128px">`;


        })

    }

}