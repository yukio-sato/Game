var point = 0;
var debounce = false;
var repeatdebounce = false;
var upg1=false;
var upg2=false;
var upg3=false;
var upg4=false;
var upg5=false;
var gameplay = "Manual";
var cd = 1000;
function Update()
{
    document.getElementById("scoreLabel").textContent = "Clicks: "+ point.toString();
}
function UpgradeFunction(name,pointUp,cdUP)
{
    if (name == true)
    {
        point = point + pointUp;
        cd = cd + cdUP;
    }
}
function generate()
{
    cd = 1000;
    if (debounce == false)
    {
    debounce = true;
   UpgradeFunction(upg1,1,0);
   UpgradeFunction(upg2,0,-500); 
   UpgradeFunction(upg3,1,-250);
   UpgradeFunction(upg4,2,250);
   UpgradeFunction(upg5,-2,-500);
    point = point + 1;
    Update()
    var cooldownValue = 0;
    document.getElementById("btn").textContent = "Wait: "+(cd/1000)+" Sec";
    let timer = setInterval (() => {
    cooldownValue++;
    document.getElementById("btn").textContent = "Wait: "+((cd/1000)-cooldownValue)+" Sec";
    },1000)
    setTimeout (() => {
    clearInterval(timer)
    debounce = false;
    document.getElementById("btn").textContent = gameplay;
    }, cd)
    }
}
function generator()
{
    if (repeatdebounce == false)
    {
    repeatdebounce = true;
    let repeating = setInterval (() => {
        if (gameplay == "Manual" && gameplay != "Auto")
        {
            clearInterval(repeating);
            setTimeout (() => {
                repeatdebounce = false;
            },cd-100)
        }
        if (debounce == false)
        {        
            generate();
        }
    },cd)
    }
}

var msg = "Purchaded!";
function buy(x, cost)
{
    var total = point - cost
    if (x == 1 && upg1 == false)
    {
        if ((total) >= 0)
        {
        point = total;
        upg1 = true;
        document.getElementById(x).textContent = msg;
        Update()
        }
    }
    else if (x == 2 && upg2 == false)
    {
        if ((total) >= 0)
        {
        point = total;
        upg2 = true;
        document.getElementById(x).textContent = msg;
        Update()
        }
    }
    else if (x == 3 && upg3 == false)
    {
        if ((total) >= 0)
        {
        point = total;
        upg3 = true;
        document.getElementById(x).textContent = msg;
        Update()
        }
    }
    else if (x == 4 && upg4 == false)
    {
        if ((total) >= 0)
        {
        point = total;
        upg4 = true;
        document.getElementById(x).textContent = msg;
        Update()
        }
    }
    else if (x == 5 && upg5 == false)
    {
        if ((total) >= 0)
        {
        point = total;
        upg5 = true;
        document.getElementById(x).textContent = msg;
        Update()
        }
    }
}

function config()
{
    var enabled = document.getElementById("Shop").getAttribute("hidden")
    if (enabled)
    {
        document.getElementById("Shop").removeAttribute("hidden")
        document.getElementById("Configuration").setAttribute("hidden","hidden")
    }
    else
    {
        document.getElementById("Shop").setAttribute("hidden","hidden")
        document.getElementById("Configuration").removeAttribute("hidden")
    }
}

function languageChange(x)
{
        document.documentElement.setAttribute("lang",x)
        document.getElementById("selectedLang").textContent = "Language: "+ document.documentElement.lang
}
function modeChange(x)
{
    gameplay = x
    document.getElementById("selectedMode").textContent = "Gameplay: "+x
    if (debounce == false)
    {
    document.getElementById("btn").textContent = x;
    }
}