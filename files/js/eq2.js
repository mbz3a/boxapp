function eq2Computing(){
    var a=Number(document.getElementById('f_a').value);
    var b=Number(document.getElementById('s_b').value);
    var c=Number(document.getElementById('t_c').value);
    
    if(a==0&&b==0){
        document.getElementById('an_x1').innerHTML="خطا";
        document.getElementById('an_x2').innerHTML="خطا";
    }
    else if(a==0){
        document.getElementById('an_x1').innerHTML=(-c)/b;
    }
    else if (a!=0 && b!=0){
        
        var delta=(Math.pow(b,2))-(4*a*c);

        if ( delta==0 ) {
            document.getElementById('an_x1').innerHTML=(-b)/(2*a);
            document.getElementById('an_x2').innerHTML='Delta = '+delta;
        }
        else if ( delta<0 ){
            document.getElementById('an_x1').innerHTML="خطا";
            document.getElementById('an_x2').innerHTML='Delta = '+delta;
        }
        else{
            var d1=Math.sqrt(delta);

            var x1=((-b)+(d1))/(2*a);
            var x2=((-b)-(d1))/(2*a);
            document.getElementById('an_x1').innerHTML='X1  : '+x1;
            document.getElementById('an_x2').innerHTML='X2  : '+x2;
            document.getElementById('an_delta').innerHTML='Delta : '+delta;
        }

    }
}
