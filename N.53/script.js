let storage = localStorage;

class HashStorageClass {
    
    constructor(key_st) {
      this.storage = JSON.parse(localStorage.getItem(key_st))|| new Object()
      this.name = key_st
    }
  
    addValue(key, value) {
      this.storage[key] = value;
      storage.setItem(this.name,  JSON.stringify(this))
      return this.storage[key]

    }
    getValue(key) {
      return this.storage[key];
  
    };
  
    deleteValue(key) {
      console.log(this.storage);
      console.log(this.storage+key);
      if (key in this.storage) {
        delete this.storage[key];
        storage.setItem(this.name,  JSON.stringify(this))
        return true;
      }
      return false;
  
    }
    getKeys() {
      return Object.keys(this.storage)
    }
  }


  const drinks = new HashStorageClass("drinks")
  const food = new HashStorageClass("food")
 

  console.log(drinks.storage)
  console.log(food.storage)


  function VVOD() {
    console.log("test")
    let nameI = prompt("Введите имя")
    let col = confirm("Нажмите ОК, если напиток алкогольный")
    let rec = prompt("Напишите рецепт приготовления")
    console.log(drinks.addValue(nameI, { col, rec }))

     
  }
  
  function GET() {
    let nameV = prompt("Введите имя")
    let valuee = drinks.getValue(nameV)
    if (valuee == undefined) {
      console.log("item not be found")
      return 0;
    }
    let valuee_alco = valuee.col
    let valuee_res = valuee.rec
    console.warn("Name -  " + nameV + "\n Alco -  " + valuee_alco + "\n Recepie - " + valuee_res)
  
  
  }
  function DELETE() {
    let nameV = prompt("Введите имя")
    // drinks.deleteValue(nameV)
    if (drinks.deleteValue(nameV)) {
      console.log("item was deleted")
    }
    else {
      console.log("item not be found")
    }


  }
  function LIST() {
    console.warn("List of drinks")
    console.log(drinks.getKeys())
  }
  


// foods    
  function VVOD_food() {
    let nameI = prompt("Введите имя")
    let col = confirm("Нажмите ОК, если напиток вегетеріанский")
    let rec = prompt("Напишите рецепт приготовления")
    console.log(food.addValue(nameI, { col, rec }))
  }
  
  function GET_food() {
    let nameV = prompt("Введите имя")
    let valuee = food.getValue(nameV)
    if (valuee == undefined) {
      console.log("item not be found")
      return 0;
    }
    let valuee_alco = valuee.col
    let valuee_res = valuee.rec
    console.warn("Name -  " + nameV + "\n Veget -  " + valuee_alco + "\n Recepie - " + valuee_res)
  
  
  }
  function DELETE_food() {
    let nameV = prompt("Введите имя")
    if (food.deleteValue(nameV)) {
      console.log("item was deleted")
      //  storage.removeItem("food")
    }
    else {
      console.log("item not be found")
    }
  }
  function LIST_food() {
    console.warn("List of foods")
    console.log(food.getKeys())
  }
  