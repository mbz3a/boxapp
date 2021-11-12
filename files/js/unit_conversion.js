/* general units section mass and temperature */

function openUnit(evt, unitName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(unitName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

        /* Computing part */
        // Tempeture

        // farnhaitTo

function farnhaitTo(){
  var far=Number(document.getElementById('farenhait').value);
  var far2=Number(document.getElementById('farenhait').value);
  document.getElementById('celsius').innerHTML=(far-32)/1.8;
  document.getElementById('kelvin').innerHTML=((far2-32)/1.8)+273.15;
}
        // kelvinTo

function kelvinTo(){
  var kel=Number(document.getElementById('kelvin1').value);
  var kel2=Number(document.getElementById('kelvin1').value);
  document.getElementById('celsius1').innerHTML=kel2-273.15;
  document.getElementById('farenhait1').innerHTML=((kel-273.15)*1.8)+32;
}

        // celsiusTo
function celsiusTo(){
  var cel=Number(document.getElementById('celsius2').value);
  var cel2=Number(document.getElementById('celsius2').value);
  document.getElementById('farenhait2').innerHTML=(cel*1.8)+32;
  document.getElementById('kelvin2').innerHTML=(cel2+273.15);
}

    // weigth
    // poundTo

function poundTo(){
  var pnd=Number(document.getElementById('pound').value);
  var pnd2=Number(document.getElementById('pound').value);
  document.getElementById('kilograms').innerHTML=pnd/2.2046;
  document.getElementById('ounces').innerHTML=pnd2*16;
}

    // ouncesTo

function ouncesTo(){
  var oun=Number(document.getElementById('ounces1').value);
  var oun2=Number(document.getElementById('ounces1').value);
  document.getElementById('kilograms1').innerHTML=oun/35.274;
  document.getElementById('pound1').innerHTML=oun2*0.0625;
}

        // kilogramsTo

function kilogramsTo(){
  var kilo=Number(document.getElementById('kilograms2').value);
  var kilo2=Number(document.getElementById('kilograms2').value);
  document.getElementById('ounces2').innerHTML=kilo*35.274;
  document.getElementById('pound2').innerHTML=kilo2*2.2046;
}