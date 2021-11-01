let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
var homes = document.getElementById("darkhome");
var cautions = document.getElementById("darkcaution");
var muscles = document.getElementById("darkmuscles");
var runs = document.getElementById("darkruns");
var mails = document.getElementById("darkmails");
var section1 = document.getElementById("muscle");
var section2 = document.getElementById("contact");
var section02 = document.getElementById("safety");
var section01 = document.getElementById("cardio");

const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("I give you dark")
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
    console.log("I give you light")
}

if(theme === 'dark'){
    changeThemeToDark()
    document.getElementById("darkhome").src = "images/whitehome.png";
    document.getElementById("darkcaution").src = "images/whitecaution.png";
    document.getElementById("darkmuscles").src = "images/whitemuscles.png";
    document.getElementById("darkruns").src = "images/whiterunning.png";
    document.getElementById("darkmails").src = "images/whitemail.png";
    document.getElementById("muscle").style.backgroundColor = "#5a4e4eb0";
    document.getElementById("muscle").style.color = "white";
    document.getElementById("contact").style.backgroundColor = "#5a4e4eb0";
    document.getElementById("contact").style.color = "white";
    document.getElementById("cardio").style.backgroundColor = "#171717";
    document.getElementById("cardio").style.color = "white";
    document.getElementById("safety").style.backgroundColor = "#171717";
    document.getElementById("safety").style.color = "white";

}

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
        document.getElementById("darkhome").src = "images/homes.png";
        document.getElementById("darkcaution").src = "images/caution-sign.png";
        document.getElementById("darkmuscles").src = "images/muscles.png";
        document.getElementById("darkruns").src = "images/running.png";
        document.getElementById("darkmails").src = "images/mails.png";
        document.getElementById("muscle").style.backgroundColor = "#a19f9a";
        document.getElementById("muscle").style.color = "black";
        document.getElementById("contact").style.backgroundColor = "white";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cardio").style.backgroundColor = "#a19f9a";
    document.getElementById("cardio").style.color = "black";
    document.getElementById("safety").style.backgroundColor = "white";
    document.getElementById("safety").style.color = "black";

    }else{
        changeThemeToDark()
        document.getElementById("darkhome").src = "images/whitehome.png";
        document.getElementById("darkcaution").src = "images/whitecaution.png";
        document.getElementById("darkmuscles").src = "images/whitemuscles.png";
        document.getElementById("darkruns").src = "images/whiterunning.png";
        document.getElementById("darkmails").src = "images/whitemail.png";
        document.getElementById("muscle").style.backgroundColor = "#5a4e4eb0";
        document.getElementById("muscle").style.color = "white";
        document.getElementById("contact").style.backgroundColor = "#5a4e4eb0";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cardio").style.backgroundColor = "#171717";
        document.getElementById("cardio").style.color = "white";
        document.getElementById("safety").style.backgroundColor = "#171717";
        document.getElementById("safety").style.color = "white";
    }
   
});
