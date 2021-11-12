function shapes(evt, shapeType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(shapeType).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// calculation part
//moraba
function morabaMohit(){
    var tol_zel=Number(document.getElementById('morabaa1').value);
    document.getElementById('usr_utpt_morabaa1').innerHTML=tol_zel*4;
}
function morabaMasahat(){
  var tol_zel=Number(document.getElementById('morabaa2').value);
  document.getElementById('usr_utpt_morabaa11').innerHTML=tol_zel*tol_zel;
}
//mostatil
function mostatilMohit(){
  var tol=Number(document.getElementById('tol1').value);
  var arz=Number(document.getElementById('arz1').value);
  document.getElementById('usr_utpt_mostatil').innerHTML=2*(tol+arz);
}
function mostatilMasahat(){
  var tol=Number(document.getElementById('tol2').value);
  var arz=Number(document.getElementById('arz2').value);
  document.getElementById('usr_utpt_mostatil2').innerHTML=tol*arz;
}

//mosalas
function mosalasMohit(){
  var a=Number(document.getElementById('mos_a1').value);
  var b=Number(document.getElementById('mos_b1').value);
  var c=Number(document.getElementById('mos_c1').value);
  document.getElementById('usr_utpt_mosalas').innerHTML=a+b+c;
}
function mosalasMasahat(){
  var ertefa=Number(document.getElementById('mos_ertefa2').value);
  var ghaedeh=Number(document.getElementById('mos_ghaedeh2').value);
  document.getElementById('usr_utpt_mosalas2').innerHTML=(ertefa+ghaedeh)/2;
}

//dayere
function dayereMohit(){
  var shoaa=Number(document.getElementById('shoaa1').value);
  document.getElementById('usr_utpt_dayere').innerHTML=2*3.14*shoaa;
}
function dayereMasahat(){
  var shoaa=Number(document.getElementById('shoaa2').value);
  document.getElementById('usr_utpt_dayere2').innerHTML=3.14*shoaa*shoaa;
}
/******hajm*******/
function mokab_morabaaaHajm(){
  var a=Number(document.getElementById('mokab-morabaaa').value);
  document.getElementById('hajm_usr_otpt_mokab_morabaaa').innerHTML=a*a*a;
}
function koreHajm(){
  var r=Number(document.getElementById('shoa_kore').value);
  document.getElementById('hajm_usr_otpt_shoa_kore').innerHTML=(4/3)*(3.14)*(r*r*r);
}
function m_mHajm(){
  var tol=Number(document.getElementById('m_m_tol').value);
  var arz=Number(document.getElementById('m_m_arz').value);
  var ertefa=Number(document.getElementById('m_m_ertefa').value);
  document.getElementById('hajm_usr_otpt_m_m').innerHTML=tol*arz*ertefa;
}
function MakhrotHajm(){
  var r=Number(document.getElementById('shoa_makhrot').value);
  var h=Number(document.getElementById('ertefa_makhrot').value);
  document.getElementById('hajm_usr_otpt_makhroot').innerHTML=(1/3)*(3.14*r*r*h);
}