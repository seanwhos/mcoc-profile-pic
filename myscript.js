const nameButton = document.getElementById('name');
const powerButton = document.getElementById('power');
const imageButton = document.getElementById('imageurl');

const avatarName = document.getElementById('champname');
const avatarPower = document.getElementById('champpi');
const avatarImage = document.getElementById('user-picture');

nameButton.addEventListener('click', function() {
    avatarName.innerHTML = prompt('Enter character name:', `Can't currently handle names longer than the length of image`);
});

powerButton.addEventListener('click', function() {
    avatarPower.innerHTML = prompt('Enter power index:', `Include own commas e.g. "1,000,000"`);
});

imageButton.addEventListener('click', function() {
     let userUrl = prompt('Enter valid image URL:', `Needs to be transparent background with similar headshot shape`); 

    avatarImage.innerHTML = `<img src = "${userUrl}"></img>`
});
