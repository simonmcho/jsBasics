var data = [
    {
        name: "Simon",
        age: 28 
    },
    {
        name: "Sandra",
        age: 21
    }
]

var user = {
    data: [
        {
            name: "Daniel",
            age: 16
        },
        {
            name: "Julia",
            age: 14
        }   
    ],
    showData: function(e) {
        console.log(this.data[0].name, this.data[0].age);
    }
}

// var tester = user.showData.bind(cars);
// tester();

var cars = {
    data: [
        {
            name: "Honda",
            age: 15
        },
        {
            name: "Toyota",
            age: 12
        }   
    ]
}

var tester = user.showData.bind(cars);
tester();
