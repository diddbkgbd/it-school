class HashStorageClass {

    constructor() {
      this.storage = new Object();
  
    }
  
    addValue(key, value) {
      this.storage[key] = value;
      return this.storage[key]
    }
    getValue(key) {
      return this.storage[key];
  
    };
  
    deleteValue(key) {
      if (key in this.storage) {
        delete this.storage[key];
        return true;
      }
      return false;
  
    }
    getKeys() {
      return Object.keys(this.storage)
    }
  }



  const drinks = new HashStorageClass()
  const food = new HashStorageClass()

  let storage = localStorage;


  storage.setItem(drinks,drinks)
  storage.setItem(food,food)

  
  function VVOD() {
    console.log("test")
    let nameI = prompt("Введите имя")
    let col = confirm("Нажмите ОК, если напиток алкогольный")
    let rec = prompt("Напишите рецепт приготовления")
    console.log(drinks.addValue(nameI, { col, rec }))
    storage.removeItem(drinks)
    storage.setItem(drinks, drinks)
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
      storage.removeItem(drinks)
      storage.setItem(drinks, drinks)
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
    console.log("test")
    let nameI = prompt("Введите имя")
    let col = confirm("Нажмите ОК, если напиток алкогольный")
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
    console.warn("Name -  " + nameV + "\n Alco -  " + valuee_alco + "\n Recepie - " + valuee_res)
  
  
  }
  function DELETE_food() {
    let nameV = prompt("Введите имя")
    // drinks.deleteValue(nameV)
    if (food.deleteValue(nameV)) {
      console.log("item was deleted")
    }
    else {
      console.log("item not be found")
    }
  }
  function LIST_food() {
    console.warn("List of drinks")
    console.log(food.getKeys())
  }
  