var point = 0;
var debounce = false;
var upg1=false;
var upg2=false;
var upg3=false;

function Update()
{
    document.getElementById("scoreLabel").textContent = "Clicks: "+ point.toString();
}
function teste()
{
    var cd = 1000;
    if (debounce == false)
    {
    debounce = true;
    if (upg1 == true)
    {
        point++;
    }
    if (upg2 == true)
    {
        cd = cd - 500;
    }
    if (upg3 == true)
    {
        point = point + 2;
        cd = cd + 1500;
    }
    point++;
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
    document.getElementById("btn").textContent = "Manual";
    }, cd)
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
}