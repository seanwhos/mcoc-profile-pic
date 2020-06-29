const nameButton = document.getElementById('name');
const powerButton = document.getElementById('power');
const imageButton = document.getElementById('imageurl');

const avatarName = document.getElementsByClassName('champname');
const avatarPower = document.getElementsByClassName('champpi');
const avatarImage = document.getElementsByClassName('user-picture');

console.log(avatarName[0])

nameButton.addEventListener('click', function() {
    let userInput = prompt('Enter character name:', `Can't currently handle names longer than the length of image`);
    avatarName[0].innerHTML = userInput;
    avatarName[1].innerHTML = userInput;
});

powerButton.addEventListener('click', function() {
    let userInput = prompt('Enter power index:', `Include own commas e.g. "1,000,000"`);
    avatarPower[0].innerHTML = userInput;
    avatarPower[1].innerHTML = userInput;
});

imageButton.addEventListener('click', function() {
     let userUrl = prompt('Enter valid image URL:', `Needs to be transparent background with similar headshot shape`); 

    avatarImage[0].innerHTML = `<img src = "${userUrl}"></img>`
    avatarImage[1].innerHTML = `<img src = "${userUrl}"></img>`
});
