//Conditional statement: (condicional)?verdadero:false;
let edad = 18;

let isMayor = (edad>=18)? true: false;

console.log(isMayor);

//Switch statement: Evalua multiples condiciones
//Cuando se usa un return no es necesario indicar break;
function getRatingDescription(rating) {
    switch (rating) {
       case 1:
          return 'Very bad';
       case 2:
          return 'Bad';
       case 3:
          return 'Average';
       case 4:
          return 'Good';
       case 5:
          return 'Excellent';
       default :
          return 'Es de otro planeta'
    }
 }
 
 var rating = 6;
 console.log(getRatingDescription(rating));




