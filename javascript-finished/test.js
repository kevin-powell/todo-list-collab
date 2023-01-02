
// . ->  ./ => current director
// []/Users/garygaspar/Documents/web-projects/todo-list-collab/javascript-finished/

// .. -> /foo/bar -> '../' -> /
// /
// require('trello') -> npm install trello?


const res = require('./fake.json');


// let r = []
// for(let foo of res.foo) {
//    function(foo);
// }


function loop(i) {
    if (i > 10)
    loop(i+1);
    console.log(i);
}


console.log(loop(0));



res.foo = [1,2,3,5]

let resultat_intermediaire = res.foo.map(function (user) {
    if(shouldContact(user.networth)) {
        return user.name;
    } else {
        return null;
    }
});

// console.log(
    
//         resultat_intermediaire

// );


// if (networth == 'billion' && typeof networth === 'string') {

// }



function shouldContact(networth) {
    return networth === 'billions'; // return true or false
}




// console.log(res.foo.filter((u) => u.plan === 'entreprise'))



// create a function qui prend un paremetre temps ['beau', 'mauvais'] et retourne si il fait mauvais 'prend ton paraplui', 



function umbrellaNeeded (temps) { 
    let tempsLowerCase = temps.toLowerCase();
    if (tempsLowerCase === 'mauvais') {
        return 'Prends ton parapliue'
    }
}






/*
 [X,X,X,X,X,X,X,X]
 [X,R,X,X,X,X,X,X]



*/


// [1,2,3]
// [[2,3,4], [2,3,4], [5,6,7]] <--- 
/* [
    [2,3,4]
    [2,3,4]
    [5,6,7]
]
*/
// [{name: alex}, {name: gary}]


// Boucle 
// https://learnxinyminutes.com/docs/javascript/
function toLowerCase(str) {

    let res = '';
    // for (var ; condition; ton incrementation) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (isMaj(char) === true) { 
            res = res + lowerCaseChar(char) // 'a' + 'b' => 'ab'
            // res += lowerCaseChar(char)
        } else {
            res += char
        }

    }
    
 
    return res;
}

// console.log(toLowerCase('Alex'));


// Alex -> alex;

// toLowerCase <- 


function isMaj(char) {
    return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
}

function lowerCaseChar(char) {
    return char.toLowerCase();
}


