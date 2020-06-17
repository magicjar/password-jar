"use-strict";

var activeTabsID, classes, tabLinks;

document.body.onload = function () {
    classes = document.getElementsByClassName("tabs");
    tabLinks = document.getElementsByClassName("tablink");

    document.getElementsByClassName("tablink")[0].click();
}

function openTab(e, tabName) {
    if (activeTabsID == tabName) return;

    for (var i = 0; i < classes.length; i++) {
        classes[i].style.display = "none";
        tabLinks[i].className = tabLinks[i].className.replace(" btn-success", "");
    }

    activeTabsID = tabName;
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " btn-success";
    generatePassword();
}

function setRangeValue(val, id) {
    document.getElementById(id).textContent = val;

    generatePassword();
}

function generatePassword ()
{
    var result, element, length, lowercase, uppercase, numbers, symbols, digitLength, letterFirst;

    element = document.getElementById(activeTabsID);

    if (activeTabsID == "strongsave")
    {
        length = element.querySelector("#length").value;
        lowercase = element.querySelector("#lowercase").checked;
        uppercase = element.querySelector("#uppercase").checked;
        numbers = element.querySelector("#numbers").checked;
        symbols = element.querySelector("#symbols").checked;
        result = PasswordJar.StrongSavePassword(length, lowercase, uppercase, numbers, symbols);
    }
    if (activeTabsID == "easytoremember")
    {
        letterFirst = element.querySelector("#letterFirst").checked;
        length = element.querySelector("#letterLength").value;
        digitLength = element.querySelector("#digitLength").value;
        result = PasswordJar.EasyToRememberPassword(letterFirst, length, digitLength);
    }
    if (activeTabsID == "pin")
    {
        length = element.querySelector("#pinLength").value;
        result = PasswordJar.PINPassword(length);
    }

    element.querySelector(".mj-result").textContent = result;

    console.log("Generated " + result);
}

function copyPassword ()
{
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

function fade (el)
{
    el.className += " fadeInOut";
    setTimeout(function () {
        el.className = "mj-result-copied";
    }, 2000);
}