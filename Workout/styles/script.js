let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
var homes = document.getElementById("darkhome");
var cautions = document.getElementById("darkcaution");
var muscles = document.getElementById("darkmuscles");
var runs = document.getElementById("darkruns");
var mails = document.getElementById("darkmails");


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


    }else{
        changeThemeToDark()
        document.getElementById("darkhome").src = "images/whitehome.png";
        document.getElementById("darkcaution").src = "images/whitecaution.png";
        document.getElementById("darkmuscles").src = "images/whitemuscles.png";
        document.getElementById("darkruns").src = "images/whiterunning.png";
        document.getElementById("darkmails").src = "images/whitemail.png";


    }
   
});
