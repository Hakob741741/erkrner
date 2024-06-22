    function start(){
with (document){
    let a1 =  String ( getElementById('left_1').value);
    let a2 =  String ( getElementById('left_2').value);
    let a3 =  String ( getElementById('left_3').value);
    let a4 =  String ( getElementById('left_4').value);
    let a5 =  String ( getElementById('left_5').value);
    let a6 =  String ( getElementById('left_6').value);
    let a7 =  String ( getElementById('left_7').value);



let result=0
let quality


if (a1=='Abu Dabi'){
    result+7;
    getElementById('left_1').style.backgroundColor = 'green'
}else{
    getElementById('left_1').stylebackgroundColor = 'red'
}



if (a2=='erusalem'){
    result+7;
    getElementById('left_2').style.backgroundColor = 'green'
}else{
    getElementById('left_2').style.backgroundColor = 'red'
}


if (a3=='Ankara'){
    result+7;
    getElementById('left_3').style.backgroundColor = 'green'
}else{
    getElementById('left_3').style.backgroundColor= 'red'
}


if (a4=='Warshaw'){
    result+7;
    getElementById('left_4').style.backgroundColor = 'green'
}else{
    getElementById('left_4').style.backgroundColor = 'red'
}


if (a5=='Moscow'){
    result+7;
    getElementById('left_5').style.backgroundColor = 'green'
}else{
    getElementById('left_5').style.backgroundColor= 'red'
}


if (a6=='Yerevan'){
    result+7;
    getElementById('left_6').style.backgroundColor= 'green'
}else{
    getElementById('left_6').style.bbackgroundColor = 'red'
}


if (a7=='Conpeghagen'){
    result+7;
    getElementById('left_7').style.backgroundColor = 'green'
}else{
    getElementById('left_7').style.backgroundColor = 'red'
}


}
}



if(result <=7){
    quality = 'anbavarar'
    getElementById('hashiv').style.color = 'red'
        getElementById('ardyunq').style.color = 'red'
}




if(result >7  && result<=14){
    quality = 'bavarar'
    getElementById('hashiv').style.color = 'pink'
        getElementById('ardyunq').style.color = 'pink'
}


if(result >14  && result<=21){
    quality = 'gohacucich'
    getElementById('hashiv').style.color = 'gold'
        getElementById('ardyunq').style.color = 'gold'
}


if(result <=28){
    quality = 'lav'
    getElementById('hashiv').style.color = 'aquamarine'
        getElementById('ardyunq').style.color = 'aquamarine'
}


if(result <=35){
    quality = 'shat lav'
    getElementById('hashiv').style.color = 'blue'
        getElementById('ardyunq').style.color = 'blue'
}




if(result <=42){
    quality = 'gerazanc'
    getElementById('hashiv').style.color = 'green'
        getElementById('ardyunq').style.color = 'green'
}


if(result <=49){
    quality = 'bacarik/paylun'
    getElementById('hashiv').style.color = 'purple'
        getElementById('ardyunq').style.color = 'purple'
}

getElementById('hashiv').innerHTML = 'result'
        getElementById('ardyunq').innerHTML = 'quality'