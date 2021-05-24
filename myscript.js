function myfun()
{
    var bar=document.getElementById("bar");
    var a=document.getElementById("ham");
    var btn=document.getElementById("cross");
    var showHide=document.getElementById("show");

    if(bar.style.display!=="block"){
        $('#bar').addClass('animated backIn');
        bar.style.display="block";
        $('#cross').addClass('animated bounceInDown');
        btn.style.display="block";
        $('#show').addClass('animated backInRight');
        showHide.style.display="block";
        a.style.display="none";

    }
}

function myfun2()
{
    var bar=document.getElementById("bar");
    var a=document.getElementById("ham");
    var btn=document.getElementById("cross");
    var showHide=document.getElementById("show");
    bar.style.display="none";
    a.style.display="block";
    btn.style.display="none";
    showHide.style.display="none";

}
