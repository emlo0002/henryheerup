document.addEventListener("DOMContentLoaded", function () {
  runProgram();
});

async function runProgram() {
  // 1. Load svg map
  // json data fetch
  //let jsondata = await fetch("tid.json");
  // objekter = await jsondata.json();

  // 1. Load svg map
  let mySvg = await fetch("tid.svg");
  let svg = await mySvg.text();

  document.querySelector("#tid").innerHTML = svg;
  //------------------------------------------------------------------------------------
  // 2. find infobokse og skjul dem
  //------------------------------------------------------------------------------
  // 3. Skift farve ved klik, og vis tekst
  //-----------------------------------------------------------------------
  //function clicked
  //--------------------------------------------------------------------
  // a. find det klikkede element
  //----------------------------------------------
  // b. find det klikkede elementets ID
  //---------------------------------------------
  // c. find  det klikkede elements fillfarve
  //---------------------------------------------
  // d. vis infobokse
  //--------------------------------------------
  // 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
  //------------------------------------------------------------------------------------
  //gør det klikkede til det aktive
  //-------------------------------------------------------------------------
  //skift farve på det valgte
  //-------------------------------------------------------------------------
  //reset farve og skjul tekst hvis valgt elementet allerede er aktivt
  //--------------------------------------------------------------------------
}
