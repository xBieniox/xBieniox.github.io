






var numerek = Math.floor(Math.random()*5);

var numerek2 = Math.floor(Math.random()*5)+1;



var kategorie = new Array(5);


kategorie[0] = [];
kategorie[1] = [];
kategorie[2] = [];
kategorie[3] = [];
kategorie[4] = [];

kategorie[0][0]="Przysłowia"; kategorie[0][1]="Każda krowa swoje cielę liże"; kategorie[0][2]="Im dąb starszy tym korzeń twardszy"; kategorie[0][3]="Kuj żelazo póki gorące"; kategorie[0][4]="Lepiej nosić niż prosić"; kategorie[0][5]="Wódka i dupka zrobią z chłopa trupka";
kategorie[1][0]="Nazwy geograficzne"; kategorie[1][1]="kraina lodu"; kategorie[1][2]="pustynia błędowska"; kategorie[1][3]="wąwóz królowej jadwigi"; kategorie[1][4]="półwysep iberyjski"; kategorie[1][5]="jezioro czorsztyńskie"; 
kategorie[2][0]="Tytuły filmowe"; kategorie[2][1]="przemineło z wiatrem"; kategorie[2][2]="Piraci z Karaibów Skrzynia umarlaka"; kategorie[2][3]="Władca Pierścieni Powrót Króla"; kategorie[2][4]="Chłopiec w pasiastej piżamie"; kategorie[2][5]="Lot nad kukułczym gniazdem";
kategorie[3][0]="Znane postacie"; kategorie[3][1]="Bartosz Głowacki"; kategorie[3][2]="Leonardo DiCaprio"; kategorie[3][3]="ragnar lothbrok"; kategorie[3][4]="Juliusz Cezar"; kategorie[3][5]="freddie mercury";
kategorie[4][0] ="Cytaty"; kategorie[4][1] ="Człowiek jest tyle wart ile warte są sprawy którymi się zajmuje"; kategorie[4][2] ="Odwaga to strach przetrzymany o jedną chwilę dłużej"; kategorie[4][3] ="Puste naczynia robią najwięcej hałasu"; kategorie[4][4] ="Nic nie kwitnie wiecznie"; kategorie[4][5] ="Zdradę kocham zdrajców nienawidzę";



var haslo = kategorie[numerek][numerek2];
haslo = haslo.toUpperCase();

var haslo1 = "";

var dlugosc = haslo.length;

for(i=0; i<dlugosc;i++)
{
if(haslo.charAt(i)==" ") haslo1=haslo1 + " ";
else haslo1= haslo1+ "-";

}

function rel()
{
location.reload();

}

var ob = 0;
if(time<28)
{


var time = dlugosc * 3;
}
else var time = (dlugosc * 3) - 20;
function stoper()
{
    time--;

    document.getElementById("czas").innerHTML = time+"s";


    if(haslo1==haslo)
    {
        document.getElementById("wskazowka").style.color = "grey";  
        document.getElementById("wskazowka").style.cursor = "default";  
        document.getElementById("wskazowka").setAttribute("onclick",";");

        document.getElementById("czas").style.color = "grey";  
        document.getElementById("czas").style.cursor = "default";  
        
    }
 else if(time ==0) 
{
    var koniec = true;

    haslo1=haslo;
    wypisz_haslo();
    document.getElementById("czas").innerHTML= "0s";
    for(i=0;i<35;i++)
{
    var elemen = "lit"+i;
    document.getElementById(elemen).style.border="3px solid grey"; 
    document.getElementById(elemen).style.color = "grey";  
    document.getElementById(elemen).style.cursor = "default";  
    document.getElementById(elemen).setAttribute("onclick",";");
   
}
    document.getElementById("wynik").innerHTML="PRZEGRANA :(";
        document.getElementById("wynik").style.color="red";




}
else
{
    setTimeout("stoper()",1000);
}


}


function wypisz_haslo()
{
document.getElementById("plansza").innerHTML = haslo1;
if (punkty<10)
{
    document.getElementById("wskazowka").style.color = "grey";  
    document.getElementById("wskazowka").style.cursor = "default";  

}
}

window.onload = start;



var litery = new Array(35);

litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ź";
litery[34]="Ż";

function start()
{
    var tresc_diva ="";

    for(i=0;i<35;i++)
    {
        var element = "lit"+i;
tresc_diva = tresc_diva + '<div class="litera" id="'+element+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>'
if((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
    }


document.getElementById("alfabet").innerHTML = tresc_diva;

stoper();
wypisz_haslo();
}


String.prototype.ustawZnak = function(miejsce, znak)
{
if(miejsce > this.length-1) return this.toString();
else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);


}





var punkty = 0;

var kupi = false;

function sprawdz(nr)
{
    var trafiona = false;
var element = "lit"+nr;
var koniec = false;
document.getElementById(element).style.border="3px solid grey"; 
document.getElementById(element).style.color = "grey";  
document.getElementById(element).style.cursor = "default";  
document.getElementById(element).setAttribute("onclick",";");

for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==litery[nr])
    {
        haslo1 = haslo1.ustawZnak(i,litery[nr]);
        trafiona=true;
        punkty=punkty+1;
    }
}

if( trafiona==true)
{
wypisz_haslo();
punkty=punkty+3;
document.getElementById("pkt").innerHTML = "PKT:"+punkty;

if (punkty>=10 && kupi == false)
{
    document.getElementById("wskazowka").style.color = "white";
    document.getElementById("wskazowka").style.cursor = "pointer";

}



if(haslo1==haslo)
{
    document.getElementById("wynik").innerHTML="GRATULACJE WYGRANA!";
    document.getElementById("wynik").style.color="green";
    document.getElementById("szubienica").innerHTML= '<img src="wis/p18.png">';
    var koniec = true;

punkty=punkty+ (time*0.2);
document.getElementById("pkt").innerHTML = "PKT:"+punkty;
}
}
else{
ob++;
punkty=punkty- 1*(ob); document.getElementById("pkt").innerHTML = "PKT:"+punkty;
document.getElementById("szubienica").innerHTML= '<img src="wis/p'+ob+'.png">';
if(ob==9)
{
var koniec = true;

haslo1=haslo;
wypisz_haslo();

document.getElementById("wynik").innerHTML="PRZEGRANA :(";
    document.getElementById("wynik").style.color="red";

}
}
if(koniec==true)
{
    for(i=0;i<35;i++)
{
    var elemen = "lit"+i;
    document.getElementById(elemen).style.border="3px solid grey"; 
    document.getElementById(elemen).style.color = "grey";  
    document.getElementById(elemen).style.cursor = "default";  
    document.getElementById(elemen).setAttribute("onclick",";");
   
}
}

}





function kupno()
{
    
if(punkty>=10 && kupi == false)
{
    kupi = true;
punkty = punkty-10;
document.getElementById("pkt").innerHTML = "PKT:"+punkty;
document.getElementById("wynik").innerHTML = "Kategoria: " + kategorie[numerek][0];
document.getElementById("wskazowka").style.color = "grey";  
    document.getElementById("wskazowka").style.cursor = "default";  
    document.getElementById("wskazowka").setAttribute("onclick",";");


}



}
