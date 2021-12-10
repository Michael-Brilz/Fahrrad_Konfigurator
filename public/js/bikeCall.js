import  {bikeArray}  from './mock.js';


  window.onload = function () {
    var typSel = document.getElementById("typSel"),
      modelSel = document.getElementById("modelSel"),
      sizeSel = document.getElementById("sizeSel"),
      colorSel = document.getElementById("colorSel"),
      breakSel = document.getElementById("breakSel"),
      tireSel = document.getElementById("tireSel"),
      shiftSel = document.getElementById("shiftSel"),
      mudSel = document.getElementById("mudSel"),
      lockSel = document.getElementById("lockSel"),
      lightSel = document.getElementById("lightSel");
  
    for (var typ in bikeArray) {
      typSel.options[typSel.options.length] = new Option(typ, typ);
      console.log(bikeArray);
    }
  
    //Give Model
    typSel.onchange = function () {
      modelSel.length = 1; //remove all options first
      sizeSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      for (var model in bikeArray[this.value]) {
        modelSel.options[modelSel.options.length] = new Option(model, model);
      }
    };
  
    typSel.onchange();
  
    //Give Size
    modelSel.onchange = function () {
      sizeSel.length = 1;
      colorSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var size = bikeArray[typSel.value][this.value];
      console.log(size);
      for (var sizeVar = 0; sizeVar < size.Größe.length; sizeVar++) {
        sizeSel.options[sizeSel.options.length] = new Option(
          size.Größe[sizeVar],
          size.Größe[sizeVar]
        );
      }
    };
    //Give Color
    sizeSel.onchange = function () {
      colorSel.length = 1;
      breakSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var color = bikeArray[typSel.value][modelSel.value];
      console.log(color);
      for (var colorVar = 0; colorVar < color.Farbe.length; colorVar++) {
        colorSel.options[colorSel.options.length] = new Option(
          color.Farbe[colorVar],
          color.Farbe[colorVar]
        );
      }
    };
    //Give Breaks
    colorSel.onchange = function () {
      breakSel.length = 1;
      tireSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; //done
      var breaks = bikeArray[typSel.value][modelSel.value];
      console.log(breaks);
      for (var breakVar = 0; breakVar < breaks.Bremsen.length; breakVar++) {
        breakSel.options[breakSel.options.length] = new Option(
          breaks.Bremsen[breakVar],
          breaks.Bremsen[breakVar]
        );
      }
    };
  
    //Give Tires
    breakSel.onchange = function () {
      tireSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var tires = bikeArray[typSel.value][modelSel.value];
      for (var tireVar = 0; tireVar < tires.Reifen.length; tireVar++) {
        tireSel.options[tireSel.options.length] = new Option(
          tires.Reifen[tireVar],
          tires.Reifen[tireVar]
        );
      }
    };
    //Give Shift
    tireSel.onchange = function () {
      shiftSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var shift = bikeArray[typSel.value][modelSel.value];
      for (var siftVar = 0; siftVar < shift.Schaltung.length; siftVar++) {
        shiftSel.options[shiftSel.options.length] = new Option(
          shift.Schaltung[siftVar],
          shift.Schaltung[siftVar]
        );
      }
    };
    //Give Mudguard
    shiftSel.onchange = function () {
      mudSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var mud = bikeArray[typSel.value][modelSel.value];
      for (var mudVar = 0; mudVar < mud.Schutzblech.length; mudVar++) {
        mudSel.options[mudSel.options.length] = new Option(
          mud.Schutzblech[mudVar],
          mud.Schutzblech[mudVar]
        );
      }
    };
    //Give Lock
    mudSel.onchange = function () {
      lockSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var lock = bikeArray[typSel.value][modelSel.value];
      for (var lockVar = 0; lockVar < lock.Schloss.length; lockVar++) {
        lockSel.options[lockSel.options.length] = new Option(
          lock.Schloss[lockVar],
          lock.Schloss[lockVar]
        );
      }
    };
    //Give Light
    lockSel.onchange = function () {
      lightSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var light = bikeArray[typSel.value][modelSel.value];
      for (var lightVar = 0; lightVar < light.Licht.length; lightVar++) {
        lightSel.options[lightSel.options.length] = new Option(
          light.Licht[lightVar],
          light.Licht[lightVar]
        );
      }
    };
  };
