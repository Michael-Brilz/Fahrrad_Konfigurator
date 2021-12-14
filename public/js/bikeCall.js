import  {bikeArray}  from './mock.js';


  window.onload = function () {
    var typSel = document.getElementById("typSel"),
      modelSel = document.getElementById("modelSel"),
      sizeSel = document.getElementById("sizeSel"),
      colorSel = document.getElementById("colorSel"),
      brakeSel = document.getElementById("brakeSel"),
      tireSel = document.getElementById("tireSel"),
      shiftSel = document.getElementById("shiftSel"),
      mudSel = document.getElementById("mudSel"),
      lockSel = document.getElementById("lockSel"),
      lightSel = document.getElementById("lightSel");
  
    for (var typ in bikeArray) {
      typSel.options[typSel.options.length] = new Option(typ, typ);
      
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
      getPrice(typSel);
    };
  
    typSel.onchange();
  
    //Give Size
    modelSel.onchange = function () {
      sizeSel.length = 1;
      colorSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var size = bikeArray[typSel.value][this.value];
      for (var sizeVar = 0; sizeVar < size.Größe.length; sizeVar++) {
        sizeSel.options[sizeSel.options.length] = new Option(
          size.Größe[sizeVar],
          size.Größe[sizeVar]
        );
      }
      getPrice(modelSel);
    };
    //Give Color
    sizeSel.onchange = function () {
      colorSel.length = 1;
      brakeSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; 
      var color = bikeArray[typSel.value][modelSel.value];
      for (var colorVar = 0; colorVar < color.Farbe.length; colorVar++) {
        colorSel.options[colorSel.options.length] = new Option(
          color.Farbe[colorVar],
          color.Farbe[colorVar]
        );
      }
      getPrice(sizeSel);
    };
    //Give Brakes
    colorSel.onchange = function () {
      brakeSel.length = 1;
      tireSel.length = 1;
      //display correct values
      if (this.selectedIndex < 1) return; //done
      var brakes = bikeArray[typSel.value][modelSel.value];
      for (var brakeVar = 0; brakeVar < brakes.Bremsen.length; brakeVar++) {
        brakeSel.options[brakeSel.options.length] = new Option(
          brakes.Bremsen[brakeVar],
          brakes.Bremsen[brakeVar],
        );
      }
      getPrice(colorSel);
    };
  
    //Give Tires
    brakeSel.onchange = function () {
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
      getPrice(brakeSel);
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
      getPrice(tireSel);
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
      getPrice(shiftSel);
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
      getPrice(mudSel);
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
      getPrice(lockSel);
    };

    lightSel.onchange = function () {
      getPrice(lightSel);
    };

    //Get Price 
    function getPrice(selTyp){
        var text = selTyp.options[selTyp.selectedIndex].text;
        console.log(text);
    }
  };

 