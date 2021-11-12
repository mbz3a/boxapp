function prime_test() {
    var input=Number(document.getElementById('numberInput').value);
    var i;
    var key=1;
            for (i=2; i*i <=input ; i++)
            {
                if( input%i==0 )
                {
                    key=0;
                    break;
                }
            }
            if (!key) {
                document.getElementById('output_pr').innerHTML=" عدد مورد نظر اول نمی باشد";
            }else{
                document.getElementById('output_pr').innerHTML="عدد مورد نظر اول است";
            }
}