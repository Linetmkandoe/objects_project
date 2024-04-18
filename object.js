 const People ={
     name:'Alice',age:17,
     name:'Eunice',age:22,
     name:'Charlie',age:14,
        name:'Max',age:19
 };

 function adultNames(people) {
    let getNames = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age >= 18) {
          getNames.push(people[i].name);
        }
     }
     return getNames;
    }
    
    
   
   const getNames = adultNames(People);
   console.log(getNames); 

 function StudentScores(student) {
    const highScore = [];
    student.forEach(students => {
      const averageScore = highScoreStudents.scores.reduce((sum, score) => sum + score, 0) / students.scores.length;
      if (averageScore >= 85) {
        highScoreStudents.push(student.name);
      }
    });
    return highScore;
  }
  const student = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ]
    
  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
   ];
   
   function groupByCategory(products) {
    return products.reduce((acc, product) => {
       const { category } = product;
       if (!acc[category]) {
         acc[category] = [];
       }
       acc[category].push(product);
       return acc;
    }, {});
   }
   
   const groupedProducts = groupByCategory(products);
   console.log(groupedProducts);
   
   const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
   };
   
   
   car.age = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
   };
   
   
   console.log(car.age());
   