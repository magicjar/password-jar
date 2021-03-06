"use-strict";

var activeTabsID, tabContents, tabLinks;

document.body.onload = function () {
    tabContents = document.getElementsByClassName("tabs-content");
    tabLinks = document.getElementsByClassName("tablink");

    document.getElementsByClassName("tablink")[0].click();
}

function openTab(e, tabName) {
    if (activeTabsID == tabName) return;

    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabLinks[i].className = tabLinks[i].className.replace(" btn-success", "");
    }

    activeTabsID = tabName;
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " btn-success";
    generatePassword();
}

function modRangeValue(modValue, id) {
    var range = document.querySelector(id);
    range.value = parseInt(range.value) + parseInt(modValue);

    setRangeValue(range.value, id);
}

function setRangeValue(val, id) {
    document.querySelector('label[for="' + id + '"]').textContent = val;
    
    generatePassword();
}

function generatePassword () {
    var result, element, length, lowercase, uppercase, numbers, symbols, digitLength, letterFirst;

    element = document.getElementById(activeTabsID);

    switch (activeTabsID) {
        case "strongsave":
            length = element.querySelector("#length").value;
            lowercase = element.querySelector("#lowercase").checked;
            uppercase = element.querySelector("#uppercase").checked;
            numbers = element.querySelector("#numbers").checked;
            symbols = element.querySelector("#symbols").checked;
            result = PasswordJar.StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
            break;

        case "easytoremember":
            letterFirst = element.querySelector("#letterFirst").checked;
            length = element.querySelector("#letterLength").value;
            digitLength = element.querySelector("#digitLength").value;
            result = PasswordJar.EasyToRememberPassword(letterFirst, length, digitLength);
            break;

        case "pin":
            length = element.querySelector("#pinLength").value;
            result = PasswordJar.PINPassword(length);
            break;
    
        default:
            result = '';
            break;
    }

    if (!result) result = 'Error generating password.'

    element.querySelector(".mj-result").textContent = result;

    console.log("Generated " + result);
}

function copyPassword () {
    var elem = document.getElementById(activeTabsID);
    var text = elem.querySelector(".mj-result").textContent;
    var dummyText = document.createElement("textarea");
    document.body.appendChild(dummyText);
    dummyText.value = text;
    dummyText.select();
    document.execCommand('copy');
    document.body.removeChild(dummyText);
    fade(elem.querySelector(".mj-result-copied"));
}

function fade (el) {
    el.className += " fadeInOut";
    setTimeout(function () {
        el.className = "mj-result-copied";
    }, 2000);
}