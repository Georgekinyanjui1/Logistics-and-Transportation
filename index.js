const myName = document.getElementById("name");
const contact = document.getElementById("number");
const email = document.getElementById("email");
const place = document.getElementById("place");
const button = document.getElementById("button");
const form = document.getElementById("form")
const error = document.getElementById("error");
form.addEventListener("submit", (e) => {

    if (myName.value === '' || myName.value == null) {
        alert("Name is required")
    } else {
        if (contact.value.length === 10) {
            alert("please confirm your number")
        } else {
            if (email.value === "" || email.value == null) {
                alert("check your email to confirm")
            } else {
                if (place.value === "" || place.value == null) {
                    alert("invalid")
                }
            }

        }


    }
})