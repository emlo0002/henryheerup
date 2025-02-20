document.addEventListener("DOMContentLoaded", function () {
  runProgram();
});
let selected;
let selectedID;
let color;
let active;
let infoboks;
let objekter;

async function runProgram() {
  // json data fetch
  let jsondata = await fetch("tid.json");
  objekter = await jsondata.json();
  console.log(objekter);
  // 1. Load svg map
  let mySvg = await fetch("tid.svg");
  let svg = await mySvg.text();

  document.querySelector("#tid").innerHTML = svg;
  //------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------
  // 3. Skift farve ved klik, og vis tekst
  document.querySelector("#tid").addEventListener("click", function (evt) {
    clicked(evt);
  });
}
//-----------------------------------------------------------------------
//function clicked
function clicked(obj) {
  console.log(obj.target.parentElement);
  objekter.forEach((objekt) => {
    //--------------------------------------------------------------------
    // a. find det klikkede element
    selected = obj.target.parentElement;
    //----------------------------------------------
    // b. find det klikkede elementets ID
    selectedID = selected.getAttribute("id");
    //---------------------------------------------
    // c. find  det klikkede elements fillfarve

    objekter.forEach((objekt) => {
      //  if (infoboks != undefined)
      console.log(selectedID);
      if (selectedID == objekt.aar) {
        //---------------------------------------------
        // d. vis infobokse
        document.querySelector("#info p").textContent = objekt.tekst;
        document.querySelector("#info").addEventListener("click", function () {
          document.querySelector("#info").style.visibility = "hidden";
        });
      }
    });
    //console.log(objekt.tekst);
    //--------------------------------------------
    // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
    //------------------------------------------------------------------------------------
    //gør det klikkede til det aktive
    //active = selected;
    // console.log(selected);
    //-------------------------------------------------------------------------
    //skift farve på det valgte
    //-------------------------------------------------------------------------
    //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
    //--------------------------------------------------------------------------
  });
}
