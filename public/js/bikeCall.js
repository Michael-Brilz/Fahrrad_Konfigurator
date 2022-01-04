import { bikeArray } from "./mock.js";
//Array for shopping cart items
var shoppingCArray = [];
//Array for prices
var pricesBike = [];

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
    //Function to delete the content by index
    deleteArray(0);
    //Function to push the content of the option into the array
    getItem(typSel);
    getImg(typSel);
  };



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
    //Function to delete the content by index
    deleteArray(1);
    //Function to push the content of the option into the array
    getItem(modelSel);
    //
    getDes();
  
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
    //Function to delete the content by index
    deleteArray(2);
    //Function to push the content of the option into the array
    getItem(sizeSel);
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
        brakes.Bremsen[brakeVar]
      );
    }
    //Function to delete the content by index
    deleteArray(3);
    //Function to push the content of the option into the array
    getItem(colorSel);
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
    //Function to delete the content by index
    deleteArray(4);
    //Function to push the content of the option into the array
    getItem(brakeSel, 4);
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
    //Function to delete the content by index
    deleteArray(5);
    //Function to push the content of the option into the array
    getItem(tireSel, 5);
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
    //Function to delete the content by index
    deleteArray(6);
    //Function to push the content of the option into the array
    getItem(shiftSel, 6);
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
    //Function to delete the content by index
    deleteArray(7);
    //Function to push the content of the option into the array
    getItem(mudSel, 7);
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
    //Function to delete the content by index
    deleteArray(8);
    //Function to push the content of the option into the array
    getItem(lockSel, 8);
  };

  lightSel.onchange = function () {
    //Function to delete the content by index
    deleteArray(9);
    //Function to push the content of the option into the array
    getItem(lightSel, 9);
  };

  //Delete items in shopping cart by Index
  function deleteArray(i) {
    shoppingCArray.splice(i);
    pricesBike.splice(i);

  }
  //Get items for shopping cart
  function getItem(selTyp) {
    var text = selTyp.options[selTyp.selectedIndex].text;
    test(text);
    createListItem();
    createListPrice();
  }
  //Get the Price from String
  function test(text) {
    var price = text.trim().split(" ");
    var newPrice = price[price.length - 2]
    //Remove the last 2 words
    var sRegExInput = new RegExp(newPrice, "g");    
    var ret = text.replace('+','').replace(sRegExInput, '').replace('Euro', '');
    shoppingCArray.push(ret);
    pricesBike.push(newPrice);
    
    return newPrice;
  }


  //Create image in card (index.ejs)
  function getImg(value) {
  //Read the text from the option
    var img = value.options[value.selectedIndex].text;
    switch (img){
      case 'Mountainbike':
        var image = `<img src="./image/Mountainbike.png" class="card-img-top" alt="Mountainbike">`;
        document.getElementById("img-class").innerHTML = image;
        break;
        case 'Ebike':
          var image = `<img src="./image/E-Bike.png" class="card-img-top" alt="E-Bike">`;
          document.getElementById("img-class").innerHTML = image;
        break;
        case 'Trekking':
          var image = `<img src="./image/Trekking.png" class="card-img-top" alt="Trekkingbike">`;
          document.getElementById("img-class").innerHTML = image;
        break;
        case 'Rennrad':
          var image = `<img src="./image/Rennrad.png" class="card-img-top" alt="Rennrad">`;
          document.getElementById("img-class").innerHTML = image;
        break;
    }
    
  }
   //Create description in card (index.ejs)
   function getDes() {
    var des = bikeArray[typSel.value][modelSel.value];
    for (var desVar = 0; desVar < des.description.length; desVar++) {
      var modelDescription = des.description[desVar];
      document.getElementById("cardText").innerHTML = modelDescription;
    }
   
  }
  //Create Ul and li in index.ejs with items
  function createListItem() { 
    var str = '<ul class="list-group list-group-flush">';
    shoppingCArray.forEach(function (items) {
      str +=
        '<li class="list-group-item" style="height: 55px;">' + items +  "</li>";
    });
    str += "</ul>";
    document.getElementById("listContainerItem").innerHTML = str;
  }
  //Create list with price
   function createListPrice() { 
    var ulList = '<ul class="list-group list-group-flush">';
    pricesBike.forEach((items) => {
      if(items === undefined){
        ulList +=
        '<li class="list-group-item" style="height: 55px;">' + "0.00 " + "Euro" + "</li>";

      }else{
        ulList +=
        '<li class="list-group-item" style="height: 55px;">' + items + " Euro" + "</li>";
      }
      
    });
    ulList += "</ul>";
    document.getElementById("listContainerPrice").innerHTML = ulList;
  }

};



