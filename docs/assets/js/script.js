function openTab(e, tabName) {
    let i, classes, tabLinks;

    classes = document.getElementsByClassName("tabs");
    tabLinks = document.getElementsByClassName("tablink");

    for (i = 0; i < classes.length; i++) {
        classes[i].style.display = "none";
        tabLinks[i].className = tabLinks[i].className.replace(" btn-success", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " btn-success";
}

function generate ()
{
    console.log("Generated");
}

function getRangeValue (val, id) {
    document.getElementById(id).innerHTML = val;
}

function getCheckboxValue (val, id) {

}