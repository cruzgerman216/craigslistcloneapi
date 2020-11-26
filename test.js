let card = {
    name: "john"
}
function print(){
    console.log("parent function", this.name);
    let test2 = function(){"anonymous function", console.log(this.name)};
    test2();
    console.log("anonymous function with call method",(function(){return this.name}).call(this))
    let test = () => console.log("arrow function", this.name);
    test();


}

print.call(card);

class Friend{
    constructor(name){
        this._name = name
    }

    get tname(){
        return this._name
    }
    set tname(cheese){
        this._name = cheese
    }
    test2(){
        return this._name;
    }
    static test(){
        console.log("test");
    }
}

let friend = new Friend("john");
console.log(friend._name);
friend.tname = "test"
console.log(friend.tname);
console.log(friend._name);
console.log(friend.test2())


class Square {
    constructor(sideLength) {
      this._sideLength = sideLength;
    }
   
    get sideLength() {
      this._sideLength;
    }
   
    set sideLength(sideLength) {
      this._sideLength = sideLength;
    }
  }
  
  let square = new Square(43);

  console.log(square._sideLength);