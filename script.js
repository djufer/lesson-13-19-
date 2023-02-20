let getS = (sel) => document.querySelector(sel);
let nameRegxp = /^\w{2,20}$/;

getS(".first-name_input").addEventListener("focus", () => {
    window.addEventListener("keyup", () => {
        getS(".fName").classList.add("placeholder_small");
        if (nameRegxp.test(getS(".first-name_input").value)) {
            getS(".first-name").classList.add("checked");
            getS(".first-name").classList.remove("unchecked");
        } else {
            getS(".first-name").classList.add("unchecked");
            getS(".first-name").classList.remove("checked");
        }
    });
});
getS(".last-name_input").addEventListener("focus", () => {
    window.addEventListener("keyup", (e) => {
        getS(".LName").classList.add("placeholder_small");
        if (nameRegxp.test(getS(".last-name_input").value)) {
            getS(".last-name").classList.add("checked");
            getS(".last-name").classList.remove("unchecked");
        } else {
            getS(".last-name").classList.add("unchecked");
            getS(".last-name").classList.remove("checked");
        }
    });
});
let emailRegxp = /^\S+@\S+$/;
getS(".email_input").addEventListener("focus", () => {
    window.addEventListener("keyup", (e) => {
        getS(".em-l").classList.add("placeholder_small");
        if (emailRegxp.test(getS(".email_input").value)) {
            getS(".email").classList.add("checked");
            getS(".email").classList.remove("unchecked");
        } else {
            getS(".email").classList.add("unchecked");
            getS(".email").classList.remove("checked");
        }
    });
});

let passwRegxp = /^\w{8,15}$/;
getS(".password_input").addEventListener("focus", () => {
    window.addEventListener("keyup", (e) => {
        getS(".ps-d").classList.add("placeholder_small");
        if (passwRegxp.test(getS(".password_input").value)) {
            getS(".password").classList.add("checked");
            getS(".password").classList.remove("unchecked");
        } else {
            getS(".password").classList.add("unchecked");
            getS(".password").classList.remove("checked");
        }
    });
});

getS("#agree").addEventListener("change", () => {
    if (
        getS("#agree").checked &&
        nameRegxp.test(getS(".first-name_input").value) &&
        nameRegxp.test(getS(".last-name_input").value) &&
        emailRegxp.test(getS(".email_input").value) &&
        passwRegxp.test(getS(".password_input").value)
    ) {
        getS(".sign-up").disabled = false;
        getS(".sign-up").classList.add("enabled-button");

        getS(".first-name_input").disabled = true;
        getS(".last-name_input").disabled = true;
        getS(".email_input").disabled = true;
        getS(".password_input").disabled = true;

    } else {
        getS(".sign-up").disabled = true;
        getS(".sign-up").classList.remove("enabled-button");

        getS(".first-name_input").disabled = false;
        getS(".last-name_input").disabled = false;
        getS(".email_input").disabled = false;
        getS(".password_input").disabled = false;
    }
});


getS(".sign-up").addEventListener('click', () => {
    getS(".modal-congrat").style.opacity = 100;
    getS(".modal-congrat").style.zIndex = 5;
    getS(".blur").style.zIndex = 4;
    getS('.blur').style.opacity = '50%';
})

getS(".explore-button").addEventListener('click', () => {
    getS(".modal-congrat").style.opacity = 0;
    getS(".modal-congrat").style.zIndex = -1;
    getS(".blur").style.zIndex = -1;
    getS(".blur").style.opacity = "0";

    getS(".first-name_input").value = '';
    getS(".last-name_input").value = "";
    getS(".email_input").value = "";
    getS(".password_input").value = "";
    getS('#agree').checked = false;

});






