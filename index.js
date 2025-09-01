// first we will use for loop beacause we want to add event listner to each buton, so we loop through
// each button click, which is inbuilt event type in js


// var numberofdrums = document.querySelectorAll('.drum').length;
// for (let i = 0; i < numberofdrums; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//         var buttonn = this.innerHTML;
//         makeSound(buttonn);
//         createAnimation(buttonn);
//     })
// }



// document.addEventListener('keypress', function (event) {
//     makeSound(event.key);
//     createAnimation(event.key);
// })

// function makeSound(key) {
//     switch (key) {
//         case 'w':
//             var tom1 = new Audio('Sounds/tom-1.mp3')
//             tom1.play();
//             break;
//         case 'a':
//             var tom2 = new Audio('Sounds/tom-2.mp3')
//             tom2.play();
//             break;
//         case 'd':
//             var tom3 = new Audio('Sounds/tom-3.mp3')
//             tom3.play();
//             break;
//         case 's':
//             var tom4 = new Audio('Sounds/tom-4.mp3')
//             tom4.play();
//             break;
//         case 'j':
//             var snare = new Audio('Sounds/snare.mp3')
//             snare.play();
//             break;
//         case 'k':
//             var crack = new Audio('Sounds/crash.mp3')
//             crack.play();
//             break;
//         case 'l':
//             var kick = new Audio('Sounds/kick-bass.mp3')
//             kick.play();
//             break;
//     }


// }


// function createAnimation(currentKey) {
//     var activeButton = document.querySelector('.' + currentKey);
//     activeButton.classList.add('pressed');

//     setTimeout(function () {
//         activeButton.classList.remove('pressed');
//     }, 200);
// }



// Loop through all drum buttons and add click event listeners
var numberOfDrums = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHTML);
        createAnimation(buttonInnerHTML);
        triggerDanceMove(buttonInnerHTML);
    });
}

// Add keypress event listener
document.addEventListener('keypress', function (event) {
    var pressedKey = event.key.toLowerCase();
    makeSound(pressedKey);
    createAnimation(pressedKey);
    triggerDanceMove(buttonInnerHTML);
});

// Function to play sounds based on key
function makeSound(key) {
    switch (key) {
        case 'w':
            new Audio('Sounds/tom-1.mp3').play();
            break;
        case 'a':
            new Audio('Sounds/tom-2.mp3').play();
            break;
        case 's':
            new Audio('Sounds/tom-3.mp3').play();
            break;
        case 'd':
            new Audio('Sounds/tom-4.mp3').play();
            break;
        case 'j':
            new Audio('Sounds/snare.mp3').play();
            break;
        case 'k':
            new Audio('Sounds/crash.mp3').play();
            break;
        case 'l':
            new Audio('Sounds/kick-bass.mp3').play();
            break;
        default:
            console.log('Unsupported key:', key);
    }
}

// Function to animate button press
function createAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    if (activeButton) {
        activeButton.classList.add('pressed');
        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 200);
    }
}

// Dancing character movement
function triggerDanceMove(key) {
    const dancer = document.getElementById('dancer');

    switch (key) {
        case 'w':
            dancer.src = 'Images/move1.webp';
            break;
        case 'a':
            dancer.src = 'Images/move2.webp';
            break;
        case 's':
            dancer.src = 'Images/move3.webp';
            break;
        case 'd':
            dancer.src = 'Images/move4.webp';
            break;
        case 'j':
            dancer.src = 'Images/move5.webp';
            break;
        case 'k':
            dancer.src = 'Images/giphy.gif';
            break;
        case 'l':
            dancer.src = 'Images/move6.webp';
            break;
        default:
            dancer.src = 'Images/giphy.gif';
    }

    // Reset to idle pose after 1 second
    //     setTimeout(() => {
    //         dancer.src = 'Images/move3.webp';
    //     }, 6000);
    // }
}