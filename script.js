document.write("■■■問１■■■");
document.write("<br>");

for(var a=1; a<=5; a++){
    document.write("★");
}



document.write("<br>");
document.write("<br>");

document.write("■■■問２■■■");
document.write("<br>");

for(var b=1; b<=2; b++){
    for(var c=1; c<=3; c++){
        document.write("★");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("<br>");

document.write("■■■問３■■■");
document.write("<br>");

for(var d =1; d<=2; d++){
    for(var e=1; e<=5; e++){
        document.write("☆");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("<br>");


document.write("■■■問４■■■");
document.write("<br>");

for(var f =1; f<=4; f++){
    for(var g=1; g<=5; g++){
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br>");
document.write("<br>");

document.write("■■■問５■■■");
document.write("<br>");

for(var h=1; h<=4; h++){
    for(var i=1; i<=3; i++){
        document.write("★");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("<br>");

document.write("■■■問６■■■");
document.write("<br>");

for(var j=1; j<=3; j++){
    for(var k=1; k<=3; k++){
        if(k%2==0){
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}



document.write("<br>");
document.write("<br>");

document.write("■■■問７■■■");
document.write("<br>");
for(var l=1; l<=4; l++){
    for(var m=1; m<=5; m++){
        if(m%2==0){
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}



document.write("<br>");
document.write("<br>");

document.write("■■■問８■■■");
document.write("<br>");

for(var n=1; n<=5; n++){
    
    for(var o=1; o<=n; o++){
        document.write("★")
    }
        
    
    document.write("<br>");
}


document.write("<br>");
document.write("<br>");



document.write("===============関数課題===============")
document.write("<br>");
document.write("■■■問１■■■");
document.write("<br>");

function menseki (radius){
    return radius * radius * 3.14;
}

document.write(menseki(5));
document.write("<br>");
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));


document.write("<br>");
document.write("<br>");
document.write("■■■問２■■■");
document.write("<br>");

function ryoukin (adult,child) {
    var adultPrice = 500;
    var childPrice = 200;
    return adult * adultPrice + child * childPrice ;
}

document.write("Aグループの合計金額は" +ryoukin(2,4)+ "円です。")
document.write("<br>");
document.write("Bグループの合計金額は" +ryoukin(1,5)+ "円です。")
document.write("<br>");
document.write("Cグループの合計金額は" +ryoukin(3,7)+ "円です。")
document.write("<br>");
document.write("<br>");
document.write("<br>");





