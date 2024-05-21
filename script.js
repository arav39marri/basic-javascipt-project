document.getElementById('but').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('in1').value);
    var b = parseFloat(document.getElementById('in2').value);
    var c = parseFloat(document.getElementById('out').value);

    console.log(a);
    console.log(b);
    console.log(c);

    var v=document.querySelector('.resulta');
    var res=(a+b)==c?"correct":"incorrect, correct answer is :"+(a+b);
    v.textContent=res;
   
});
document.getElementById('startbutton').addEventListener('click',function(){
    var a=(Math.floor(Math.random()*10)+1);
    var b=(Math.floor(Math.random()*10)+1);
    console.log(a,b);
    document.getElementById('in1').value=a;
    document.getElementById('in2').value=b;
    var as=(Math.floor(Math.random()*10)+1);
    var bs=(Math.floor(Math.random()*10)+1);
    console.log(as,bs);
    document.getElementById('in1s').value=as;
    document.getElementById('in2s').value=bs;
    var am=(Math.floor(Math.random()*10)+1);
    var bm=(Math.floor(Math.random()*10)+1);
    console.log(am,bm);
    document.getElementById('in1m').value=am;
    document.getElementById('in2m').value=bm;
    var ad=(Math.floor(Math.random()*10)+1);
    var bd=(Math.floor(Math.random()*10)+1);
    console.log(ad,bd);
    document.getElementById('in1d').value=ad;
    document.getElementById('in2d').value=bd;
});
document.getElementById('but_mul').addEventListener('click', function() {
    var an = parseFloat(document.getElementById('in1m').value);
    var bn = parseFloat(document.getElementById('in2m').value);
    var cn = parseFloat(document.getElementById('outm').value);

    console.log(an);
    console.log(bn);
    console.log(cn);
     
    var v=document.querySelector('.resultm');
    var res=(an*bn)==cn?"correct":"incorrect, correct answer is :"+(an*bn);
    v.textContent=res;
});
document.getElementById('but_sub').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('in1s').value);
    var b = parseFloat(document.getElementById('in2s').value);
    var c = parseFloat(document.getElementById('outs').value);

    console.log(a);
    console.log(b);
    console.log(c);

    var v=document.querySelector('.results');
    var res=(a-b)==c?"correct":"incorrect, correct answer is :"+(a-b);
    v.textContent=res;
});
document.getElementById('but_div').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('in1d').value);
    var b = parseFloat(document.getElementById('in2d').value);
    var c = parseFloat(document.getElementById('outd').value);
   
    console.log(a);
    console.log(b);
    console.log(c);

    var v=document.querySelector('.resultd');
    if(b==0)
        v.textContent="division is not possible , b is equal to zero";
    else{
    var res=(a/b)==c?"correct":"incorrect, correct answer is :"+(a/b);
    v.textContent=res;
    }
});