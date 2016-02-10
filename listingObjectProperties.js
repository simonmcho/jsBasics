var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUp(firstName, prop){
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName){
      if (contacts[i][prop]){
        alert (contacts[i][prop]);
      } else {
        alert ("No such property");
      }
    }
  }
  alert("No such contact"); //when loop ends it means firstName not found
}
var first = prompt("What is the contact's first name?");
var property = prompt("What property are you looking for?");

lookUp(first, property);

