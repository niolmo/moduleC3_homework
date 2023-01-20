// Номер 1


const person = { city:"Perm", position: "developer helper"};

const object = Object.create(person);

object.ownCity = "Pitersburg";
object.ownPosition = "developer"

function objProp(object) {
    for(let prop in object) {
        if(obj.hasOwnProperty(prop)) {
            console.log(prop, object[prop]);
        }
    }
}

console.log(object);


//Номер 2

function check (str, obj) {
    return (str in obj);
  }

  console.log(check('city', person));


  //Номер 3


function createObj() {
  return Object.create(null);
}

console.log(createObj());