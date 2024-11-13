function generoiTarina() {
    let adjektiivi1 = document.getElementById("adjektiivi1").value;
    let nimi = document.getElementById("nimi").value;
    let adjektiivi2 = document.getElementById("adjektiivi2").value;
    let kaupunki = document.getElementById("kaupunki").value;
    let sukulainen1 = document.getElementById("sukulainen1").value;
    let sukulainen2 = document.getElementById("sukulainen2").value;
    let adjektiivi4 = document.getElementById("adjektiivi4").value;
    let tilaisuus = document.getElementById("tilaisuus").value;
    let substantiivi = document.getElementById("substantiivi").value;
    let iskulause1 = document.getElementById("iskulause1").value;
    let tekeminen = document.getElementById("tekeminen").value;
    let adjektiivi3 = document.getElementById("adjektiivi3").value;
    let iskulause2 = document.getElementById("iskulause2").value;

    let tarina = "Olipa kerran " + adjektiivi1 + " lapsonen nimeltä "  +  nimi + ". Hän asui kaupungissa nimeltä " + kaupunki + ", joka oli hyvin " + adjektiivi2 + ", seuranaan " + sukulainen1 + " ja " + sukulainen2 + ". Eräänä " + adjektiivi4 + " iltana " + nimi + " meni " + tilaisuus + " seuranaan " + sukulainen1 + " ja " + sukulainen2 + ". Kotimatkalla heidän kimppuunsa hyökättiin. Hyökkääjällä oli aseenaan " + substantiivi + ". " + sukulainen1 + " ja " + sukulainen2 + " menehtyivät ja heidän viimeiset sanansa olivat " + iskulause1 + "! " + nimi + " selviytyi ja lupasi kunnioittaa sukulaistensa muistoa osallistumalla " + tekeminen + " turnaukseen joka vuosi. Hän loppuelmänsä oli " + adjektiivi3 + " ja pitkä. " + iskulause2 + "! Sen pituinen se. (Tämä oli Batmanin origin story).";

    document.getElementById("answer").innerHTML = tarina;
}


