/* Coding challenge 1 */
 
// const BMI = (mass,height) =>{
//     return mass / height ** 2;
// }

/*test data 1 */
// const BMI_Mark = BMI(78,1.69);
// const BMI_John = BMI(92,1.95);


/*test data 2 */
// const BMI_Mark = BMI(95,1.88);
// const BMI_John = BMI(85,1.76);

// console.log(`Chỉ số BMI của Mark: ${BMI_Mark}`);
// console.log(`Chỉ số BMI của John: ${BMI_John}`);
// const markHigherBMI = BMI_Mark > BMI_John ;
// console.log(markHigherBMI);



/* Coding challenge 2 */

// const BMI = (mass,height) =>{
//     return mass / height ** 2;
// }

/*test data 1 */
// const BMI_Mark = BMI(78,1.69);
// const BMI_John = BMI(92,1.95);


/*test data 2 */
// const BMI_Mark = BMI(95,1.88);
// const BMI_John = BMI(85,1.76);

// console.log(`Chỉ số BMI của Mark: ${BMI_Mark}`);
// console.log(`Chỉ số BMI của John: ${BMI_John}`);

// if(BMI_Mark > BMI_John){
//     console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})`)
// }
// else{
//     console.log(`John's BMI (${BMI_John}) is higher than Mark's (${BMI_Mark})`)

// }


/* Coding challenge 3 */

const avgPoint = (nbOne,nbTue,nbThree) =>{
    const result = (nbOne + nbTue + nbThree)/3;
    return result;
}

// const scoreDolphins = avgPoint(96,108 ,89);
// const scoreKoalas = avgPoint(88,91,110);

// console.log(`Dolphins score is ${scoreDolphins}`);
// console.log(`Koalas score is ${scoreKoalas}`);

/*Check what is the winning team */
// if(scoreDolphins > scoreKoalas){
//     console.log('Dolphins won');
// }
// else if(scoreDolphins < scoreKoalas){
//     console.log('Koalas won');
// }
// else{
//     console.log('2 team draw');
// }

/*Bonus 1 && 2 */

/* test data bonus 1 */
// const scoreDolphins = avgPoint(97,112 ,101);
// const scoreKoalas = avgPoint(109,95,123);

/* test data bonus 2 */
const scoreDolphins = avgPoint(97,112 ,101);
const scoreKoalas = avgPoint(109,95,106);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log(`Dolphins won`);
}
else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log(`Koalas won`);
}
else if(scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100){
    console.log(`2 team draw`);
}
else{
    console.log(`no team wins`);
}


/* coding challenge 4 */

//const bill = 40; //tip: 8 , total: 48
// const bill = 275; // tip: 41.25 , total: 316.25
const bill = 430; // tip: 86 , total: 516
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/*SECTION 3:  */

/* Coding challenge 1 */

