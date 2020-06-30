const nameButton = document.getElementById('name');
const powerButton = document.getElementById('power');
const imageButton = document.getElementById('imageurl');

const avatarName = document.getElementsByClassName('champname');
const avatarPower = document.getElementsByClassName('champpi');
const avatarImage = document.getElementsByClassName('user-picture');

nameButton.addEventListener('click', function() {
    let userInput = prompt('Enter character name:', `Max length about 16 characters`);
        
        if (userInput.length > 11) {
            avatarName[0].style.fontSize = "17pt";
            avatarName[0].style.padding = "4px 0 7px 0";
            avatarName[1].style.fontSize = "17pt";
            avatarName[1].style.padding = "4px 0 7px 0";
        } else {
            avatarName[0].style.fontSize = "";
            avatarName[0].style.padding = "";
            avatarName[1].style.fontSize = "";
            avatarName[1].style.padding = "";
        };

    avatarName[0].innerHTML = userInput;
    avatarName[1].innerHTML = userInput;
});

powerButton.addEventListener('click', function() {
    let userInput = prompt('Enter power index:', `Include commas; 999,999,999 max`);

    if ((userInput.length > 7) && (userInput.length < 10)) {
        avatarPower[0].style.fontSize = "28pt";
        avatarPower[0].style.padding = "3px 0 0 0";
        avatarPower[1].style.fontSize = "28pt";
        avatarPower[1].style.padding = "3px 0 0 0";
    } else if (userInput.length > 9) {
        avatarPower[0].style.fontSize = "22pt";
        avatarPower[0].style.padding = "6px 0 0 0";
        avatarPower[1].style.fontSize = "22pt";
        avatarPower[1].style.padding = "6px 0 0 0";
    } else {
        avatarPower[0].style.fontSize = "";
        avatarPower[0].style.padding = "";
        avatarPower[1].style.fontSize = "";
        avatarPower[1].style.padding = "";
    };

    avatarPower[0].innerHTML = userInput;
    avatarPower[1].innerHTML = userInput;
});

imageButton.addEventListener('click', function() {
     let userUrl = prompt('Enter valid image URL:', `Needs to be transparent background with similar headshot shape`); 

    avatarImage[0].innerHTML = `<img src = "${userUrl}"></img>`
    avatarImage[1].innerHTML = `<img src = "${userUrl}"></img>`
});



function previewFile() {
 let preview = document.getElementsByClassName('usrpic')
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview[0].src = reader.result;
    preview[1].src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}


const dupeAvatar = document.getElementById('duped');
const downloadDupe = document.getElementById('dupe');
const undupeAvatar = document.getElementById('unduped');
const downloadUndupe = document.getElementById('undupe');


downloadDupe.onclick = function() {
  domtoimage.toBlob(dupeAvatar)
    .then(function(blob) {
      window.saveAs(blob, 'champion-dupes.png');
    });
}


downloadUndupe.onclick = function() {
  domtoimage.toBlob(undupeAvatar)
    .then(function(blob) {
      window.saveAs(blob, 'champion-unduped.png');
    });
}


const skill = document.getElementById('skill');
const mutant = document.getElementById('mutant');
const tech = document.getElementById('tech');
const cosmic = document.getElementById('cosmic');
const mystic = document.getElementById('mystic');
const science = document.getElementById('science');
const combined = document.getElementById('combined');
const none = document.getElementById('none');
const powerClass = document.getElementsByClassName('powerclass');

skill.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/skill.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/skill.png"></img>';
});

mutant.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/mutant.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/mutant.png"></img>';
});

tech.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/tech.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/tech.png"></img>';
});

cosmic.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/cosmic.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/cosmic.png"></img>';
});

mystic.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/mystic.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/mystic.png"></img>';
});

science.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/science.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/science.png"></img>';
});

combined.addEventListener('click', function(){
    powerClass[0].innerHTML = '<img class="skillicon" src = "assets/skills/combined.png"></img>';
    powerClass[1].innerHTML = '<img class="skillicon" src = "assets/skills/combined.png"></img>';
});

none.addEventListener('click', function(){
    powerClass[0].innerHTML = '';
    powerClass[1].innerHTML = '';
});



