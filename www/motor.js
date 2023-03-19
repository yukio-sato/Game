function teste()
{
    document.getElementById("tecla").textContent =  document.getElementById("input").value+" Pressionado";
    var tecla = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (tecla == "w")
    {
        document.getElementById("comando").textContent =  "ˆ";
        document.getElementById("block").style.left = document.getElementById("block").style.left.valueOf.toString()+"10vw";
    }
        if (tecla == "d")
    {
        document.getElementById("comando").textContent =  ">";
    }
        if (tecla == "s")
    {
        document.getElementById("comando").textContent =  "V";
    }
        if (tecla == "a")
    {
        document.getElementById("comando").textContent =  "<";
    }
}
