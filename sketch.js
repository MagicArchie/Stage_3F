let backgroundImage;
let frame;
let title;
let descriptionButton;
let nightModeButton;
let zoomButton;
let unzoomButton;
let returnToFirstButton;
let goToLastButton;
let homeButton;
let Audio_Button;
let arrowLeft;
let arrowRight;
let keyButton;
let keyimg;

let margin = 80;

let descriptionRect;

let descriptionButtonSize = 80;
let descriptionFontSize = 20; 

let nightMode = false;
let score = 0;
let isAudioPlaying = false;
let lastClickTime = 0;
const doubleClickDelay = 250; // milliseconds
let staf = true;

const canvasWidth = 1400;
const canvasHeight = 800;

const nightModeButtonSize = 80;
const buttonSize = 80;
const homeButtonSize = 65;
const arrowButtonSize = 80;
const artistButtonSize = 40;

let nightModeButtonX,
  nightModeButtonY,
  zoomButtonX,
  zoomButtonY,
  unzoomButtonX,
  unzoomButtonY,
  returnToFirstButtonX,
  returnToFirstButtonY,
  goToLastButtonX,
  goToLastButtonY,
  homeButtonX,
  homeButtonY,
  Audio_ButtonX,
  Audio_ButtonY,
  descriptionButtonX,
  descriptionButtonY,
  arrowRightX,
  arrowRightY,
  arrowLeftX,
  arrowLeftY,
  keyButtonX,
  keyButtonY,
  artistBt;

let keySound;
let pageFlip;
let bigPageFlip;
let textAppear;
let infoBleep;
let zoom;
let light;
let backToHome;
let comingSoon;
let backgroundSound;
let clickG; 
let choice;
let transition;

let images = [];
let locked = [];
let visibility = [];

let imgDescriptions = [
  "Λάδι σε μουσαμά, 59 x 115 εκ. <br> Συλλογή Ιδρύματος Ε. Κουτλίδη <br><br> Αρ. Έργου: Κ.213", 
  "Λάδι σε μουσαμά, 38 x 65 εκ. <br> Συλλογή Ιδρύματος Ε. Κουτλίδη <br><br> Αρ. Έργου: Κ.135", 
  "Υδατογραφία σε χαρτόνι, 17 x 29 εκ. <br> Κληροδότημα Νικολάου Διαμαντοπούλου <br><br> Αρ. Έργου: Π.692", 
  "Λάδι σε χαρτί, 15 x 22 εκ. <br> Κληροδότημα Νικολάου Διαμαντοπούλου <br><br> Αρ. Έργου: Π.683", 
  "Λάδι σε μουσαμά, 28,5 x 40 εκ. <br> Το λιμάνι του Helsingor, 1874 <br><br> Αρ. Έργου: Π.2168", 
  "Λάδι σε μουσαμά, 29 x 39 εκ. <br> Δωρεά Αργύρη Χατζηαργύρη <br><br> Αρ. Έργου: Π.1818", 
  "Υδατογραφία σε χαρτί, 31 x 40 εκ. <br> Κληροδότημα Γεωργίου Τραπάντζαλη <br><br> Αρ. Έργου: Π.719", 
  "Λάδι σε μουσαμά, 46 x 55 εκ. <br> Καράβι στην ακρογιαλιά, 1874 <br><br> Αρ. Έργου: Π.3312", 
  "Λάδι σε μουσαμά, 39 x 65 εκ. <br> Συλλογή Ιδρύματος Ε. Κουτλίδη <br><br> Αρ. Έργου: Κ.165", 
  "Λάδι σε μουσαμά, 30 x 43 εκ. <br> Κληροδότημα Αντωνίου Μπενάκη <br><br> Αρ. Έργου: Π.2087", 
  "Λάδι σε μουσαμά, 52 x 71 εκ. <br> Συλλογή Ιδρύματος Ε. Κουτλίδη <br><br> Αρ. Έργου: Κ.168"
                    ];

let titles = ["Η Ναυμαχία Ρίου-Αντιρρίου",
              "Θαλασσογραφία από τις δανικές ακτές Λάδι σε μουσαμά",
              "Θαλασσογραφία 1",
              "Θαλασσογραφία 2",
              "Το λιμάνι του Helsingor",
              "Καΐκι στις Σπέτσες",
              "Θαλασσογραφία 3",
              "Καράβι στην ακρογιαλιά",
              "Το λιμάνι της Κοπεγχάγης 1",
              "Το λιμάνι της Κοπεγχάγης 2",
              "Ναυμαχία Ναυπάκτου"
             ];

let descriptionSpans = [];
let counter = 0;
let level;

let keyButtonImages = [];
let currentKeyButtonIndex = 0; // Index to keep track of the current key button image

let scrollSpeed = 0.1;
let descriptionTextY; 
let targetDescriptionTextY = 480;

let keyButtonPressedFlags = Array(imgDescriptions.length).fill(false);

let titleWidth;
let oneUse = false;
let oneUse2 = false;
let oneUse3 = false;
let oneUse4 = false;
let showMessage = false;

let StageSend = 33;
localStorage.setItem('Stage', StageSend);
let Unlock = parseInt(localStorage.getItem('Complete3'), 10);
let LocationS = parseInt(localStorage.getItem('PageL'), 10);

//new
let randomImageTimer = 210000; // Initial timer duration in milliseconds 
let showRandomImage = false;
let lastTime; // Variable to store the previous time

function preload() {
  backgroundImage = loadImage("materials/images/Background11.jpg");
  backgroundImage2 = loadImage("materials/notifications/Background22.jpg");
  frame = loadImage("materials/images/frame (2).png");
  //loadFont("Granesta.otf");

  for (let i = 1; i <= 11; i++) {
    images.push(loadImage("materials/levels/Lvl_B" + i + ".3.jpg"));
    imgDescriptions.push("Description " + i);
    
    locked.push(loadImage("materials/lstages/Stg_Lkd_" + i + ".jpg"));
    visibility.push(true);
    
    loadImage('materials/keys/Key_D' + i + '.3.png');
    loadImage('materials/keys/Key_G' + i + '.png');
  }
    
    loadImage("materials/buttons/Day_Mode.png");
    loadImage("materials/buttons/Night_Mode.png");
    
    keySound = loadSound("materials/sounds/achive-sound.mp3");
    pageFlip = loadSound("materials/sounds/pageturn.mp3");
    bigPageFlip = loadSound("materials/sounds/BpageFlip.mp3");
    textAppear = loadSound("materials/sounds/appear-1.mp3");
    infoBleep = loadSound("materials/sounds/infobleep.mp3");
    zoom = loadSound("materials/sounds/zoom.mp3");
    light = loadSound("materials/sounds/light-switch-81967.mp3");
    backToHome = loadSound("materials/sounds/interface.mp3");
    comingSoon = loadSound("materials/sounds/comingSoon.mp3");
    backgroundSound = loadSound("materials/sounds/Main-Page.mp3");
    lvlUp = loadSound("materials/sounds/level-passed.mp3");
    clickG = loadSound("materials/sounds/mouse-click.mp3");
    choice = loadSound("materials/sounds/tap-notification.mp3");
    transition = loadSound("materials/sounds/transition.wav");
  
    randomImage = loadImage("materials/images/codeM3.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  
  lastTime = millis(); // Initialize lastTime

  nightModeButtonX = canvasWidth - nightModeButtonSize - 53;
  nightModeButtonY = 15;
  zoomButtonX = nightModeButtonX + 10;
  zoomButtonY = nightModeButtonY + nightModeButtonSize + 30;
  unzoomButtonX = zoomButtonX;
  unzoomButtonY = zoomButtonY + buttonSize;

  Audio_ButtonX = 85;
  Audio_ButtonY = canvasHeight - 62;
  homeButtonX = 12;
  homeButtonY = canvasHeight - 75;
  descriptionButtonX = (canvasWidth - descriptionButtonSize) / 2;
  descriptionButtonY = 700;

  arrowRightX = descriptionButtonX + descriptionButtonSize + 10;
  arrowRightY = descriptionButtonY + descriptionButtonSize / 2 - arrowButtonSize / 2;
  arrowLeftX = descriptionButtonX - arrowButtonSize - 10;
  arrowLeftY = descriptionButtonY + descriptionButtonSize / 2 - arrowButtonSize / 2;

  returnToFirstButtonX = arrowLeftX - margin;
  returnToFirstButtonY = descriptionButtonY + descriptionButtonSize / 2 - arrowButtonSize / 2;
  goToLastButtonX = arrowRightX + margin;
  goToLastButtonY = descriptionButtonY + descriptionButtonSize / 2 - arrowButtonSize / 2;

  keyButtonX = 15;
  keyButtonY = 180;

  //textFont("Granesta", 100);
  title = createSpan("");
  title.position((canvasWidth - titleWidth) / 2, 20);
  title.style("font-size", "32px");
  title.style("color", "#FFFFFF");
  
  level = createSpan("");
  level.position(30, 20);
  level.style("font-size", "32px");
  level.style("color", "#D1D1D1");

  Audio_Button = createImg("materials/buttons/Audio_Button.png", "Audio_Button");
  Audio_Button.size(50, 50);
  Audio_Button.position(Audio_ButtonX, Audio_ButtonY);
  Audio_Button.mousePressed(Audio_ButtonPressed);

  nightModeButton = createImg("materials/buttons/Night_Mode.png", "night-mode-button");
  nightModeButton.size(85, 85);
  nightModeButton.position(nightModeButtonX, nightModeButtonY);
  nightModeButton.mousePressed(toggleNightMode);

  zoomButton = createImg("materials/buttons/zoom_Button1.png", "zoom-button");
  zoomButton.size(buttonSize - 15, buttonSize - 15);
  zoomButton.position(zoomButtonX, zoomButtonY);
  zoomButton.mousePressed(zoomButtonPressed);

  unzoomButton = createImg("materials/buttons/Zoom_Button2.png", "unzoom-button");
  unzoomButton.size(buttonSize - 15, buttonSize - 15);
  unzoomButton.position(unzoomButtonX, unzoomButtonY);
  unzoomButton.mousePressed(unzoomButtonPressed);

  returnToFirstButton = createImg("materials/buttons/Arrow_4.png", "return-to-first");
  returnToFirstButton.size(buttonSize + 0, buttonSize + 0);
  returnToFirstButton.position(returnToFirstButtonX, returnToFirstButtonY);
  returnToFirstButton.mousePressed(returnToFirstButtonPressed);

  goToLastButton = createImg("materials/buttons/Arrow_3.png", "go-to-last");
  goToLastButton.size(buttonSize + 0, buttonSize + 0);
  goToLastButton.position(goToLastButtonX, goToLastButtonY);
  goToLastButton.mousePressed(goToLastButtonPressed);

  homeButton = createImg("materials/buttons/Home_Button.png", "home-button");
  homeButton.size(homeButtonSize, homeButtonSize);
  homeButton.position(homeButtonX, homeButtonY);
  homeButton.mousePressed(goToHomePage);

  descriptionButton = createImg("materials/buttons/DS_Button.png", "description-button");
  descriptionButton.size(descriptionButtonSize, descriptionButtonSize);
  descriptionButton.position(descriptionButtonX, descriptionButtonY);
  descriptionButton.mousePressed(descriptionButtonPressed);

  arrowRight = createImg("materials/buttons/Arrow_1.png", "arrow-right");
  arrowRight.size(arrowButtonSize, arrowButtonSize);
  arrowRight.position(arrowRightX, arrowRightY);
  arrowRight.mousePressed(pressedRight);

  arrowLeft = createImg("materials/buttons/Arrow_2.png", "arrow-left");
  arrowLeft.size(arrowButtonSize, arrowButtonSize);
  arrowLeft.position(arrowLeftX, arrowLeftY);
  arrowLeft.mousePressed(pressedLeft);
  
  artistBt = createImg("materials/buttons/information.png", "artistInfo");
  artistBt.size(artistButtonSize, artistButtonSize);
  artistBt.position((canvasWidth - artistButtonSize) / 2 + 470, 610);
  artistBt.mousePressed(artistInfo);
  
  keyimg = createImg("materials/keys/Key_D1.2.png", "key-img");
  keyimg.size(120, 250); // Set the size as needed
  keyimg.position(keyButtonX, keyButtonY);
  keyimg.mousePressed(keyButtonPressed);
  keyimg.style('pointer-events', 'none');
  
  notification = createImg("materials/notifications/KeysClaimed.png", "note");
  notification.size(300, 100);
  notification.position(1090, 690);
  
  Complete = createImg("materials/notifications/Completion3.png", "completeImg");
  Complete.size(450, 680);
  Complete.position(475, 60);
  Complete.mousePressed(hideComplition);
  Complete.hide();
  
  descriptionTextY = 480

  for (let i = 0; i < images.length; i++) {
    let span = createSpan("");
    span.position((canvasWidth - 1000) / 2 + 10, 480); // Adjust the position as needed
    span.style("font-size", descriptionFontSize + "px");
    span.style("color", "black"); // Set the text color to black
    span.style("display", i === counter ? "block" : "none"); // Set the display property
    span.style("width", 990 + "px" );
    descriptionSpans.push(span);
  }

  updateImageAndDescription();
  updateTitle();
  
  backgroundSound.loop();
}

function draw() {
  image(backgroundImage, 0, 0, width, height);
  
  if (Unlock == 125) {
    if (oneUse4 == false) {
      keyimg.style('pointer-events', 'auto');
      notification.show();
      oneUse4 = true;
    }
    setTimeout(() => {
      notification.hide();
    }, 5000);
  } else {
    notification.hide();
  }

  stroke(0);
  strokeWeight(3);
  fill(200, 50);
  rect((canvasWidth - 600) / 2, 690, 600, 100, 300);

  fill(25);
  rect(250, 110, 900, 300);

  fill(200, 200);
  rect((canvasWidth - 1000) / 2, 470, 1000, 190, 20);

  fill(255, 120);
  rect(1260 + 10, -30, 80, 310, 30);

  fill(210);
  rect(1260, -30, 100, 140, 15);

  fill(235, 131, 52, 30);
  rect(0, 0, 150, 800);

  if (score === 55) {
    if (!oneUse2) {
      lvlUp.setVolume(0.1);
      lvlUp.play();
      oneUse2 = true;
    }
    fill(255, 130);
    rect(14, 730, 60, 60, 100);
    fill(255, 249, 74, 50);
  }else{
    fill(255, 50);
  }
  rect(25, 85, 100, 100, 30);

  // Check if the image is visible, then draw the appropriate image
 if (visibility[counter]) {
    image(locked[counter], (canvasWidth - 850) / 2 + 1, 110, 850, 300);
    keyimg.attribute('src', 'materials/keys/Key_D' + (counter + 1) + '.3.png'); // Update key image source dynamically
  } else {
    image(images[counter], (canvasWidth - 850) / 2 + 1, 110, 850, 300);
    keyimg.attribute('src', 'materials/keys/Key_G' + (counter + 1) + '.png'); // Update key image source dynamically
  }

  image(frame, 200, 60, 1000, 400);
  if (score === 55) {
    fill(250, 205, 2, 190); // Green with alpha
  }else{
    fill(0);
  }
  textSize(28);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  text("Points", 75, 115);

  textSize(36);
  text(score, 75, 155); 

  fill(255);

  title.html(titles[counter]);
  if (oneUse == false){
    title.position(494, 20);
    oneUse = true;
  }
  level.html("Level " + (counter + 1));
  
  // Move the description text towards the target position
  descriptionTextY += (targetDescriptionTextY - descriptionTextY) * 0.1;

  // Draw the description text at the updated position
  for (let i = 0; i < descriptionSpans.length; i++) {
    descriptionSpans[i].position((canvasWidth - 1000) / 2 + 10, descriptionTextY);
  }
    setNextRandomImageTime();
  
  if (score == 55) {
    if (staf == true) {
      image(backgroundImage2, 0, 0, width, height);
      fill(0, 0, 0, 150);
      noStroke();
      rect(0, 0, canvasWidth, canvasHeight);
    }
    if (!oneUse3) {
        Completed();
      oneUse3 = true;
    }
  }
  
  if (showMessage) {
    displayMessageAndButtons();
  }
}

function updateImageAndDescription() {
  title.html(titles[counter]);

  // Clear the previous description span
  for (let i = 0; i < descriptionSpans.length; i++) {
    descriptionSpans[i].style("display", i === counter ? "block" : "none");
    descriptionSpans[i].html("");
  }

  descriptionSpans[counter].html(imgDescriptions[counter]); // Update the corresponding description span
}

function updateTitle() {
  title.html(titles[counter]);
  titleWidth = textWidth(titles[counter]);

  title.position((canvasWidth - titleWidth) / 2, 20);
}

function updateImageAndDescription() {
  title.html(titles[counter]);

  // Clear the previous description span
  for (let i = 0; i < descriptionSpans.length; i++) {
    descriptionSpans[i].style("display", i === counter ? "block" : "none");
    descriptionSpans[i].html("");
  }

  descriptionSpans[counter].html(imgDescriptions[counter]); // Update the corresponding description span
   updateTitle();
}

function descriptionButtonPressed() {
  // Toggle visibility of the description span
  textAppear.setVolume(0.1);
  textAppear.play();
  let currentDescriptionSpan = descriptionSpans[counter];
  currentDescriptionSpan.style(
    "display",
    currentDescriptionSpan.style("display") === "none" ? "block" : "none"
  );
  
  console.log("Description button pressed!");
}

function Audio_ButtonPressed() {
  const currentTime = millis();

  // Check if it's a double click
  if (currentTime - lastClickTime < doubleClickDelay) {
    // If double-clicked, restart the audio
    comingSoon.setVolume(0.4);
    comingSoon.stop();
    comingSoon.play();

    // Set the audio state to playing
    isAudioPlaying = true;

    console.log("Audio button double-clicked!");
  } else {
    // If not a double-click, toggle play/pause
    if (isAudioPlaying) {
      // If audio is playing, pause it
      comingSoon.pause();
    } else {
      // If not playing, play the audio
      comingSoon.setVolume(0.4);
      comingSoon.play();
    }

    // Toggle the audio state
    isAudioPlaying = !isAudioPlaying;

    console.log("Audio button pressed!");
  }

  // Update the last click time
  lastClickTime = currentTime;
}

function zoomButtonPressed() {
  // Implement this function if needed
  zoom.setVolume(0.3);
  zoom.play();
  console.log("Zoom button pressed!");

  // Increase the font size of the description span
  if (descriptionFontSize < 25) {
    descriptionFontSize += 5;
  }

  // Update the font size of all description spans
  for (let i = 0; i < descriptionSpans.length; i++) {
    descriptionSpans[i].style("font-size", descriptionFontSize + "px");
  }
}

function unzoomButtonPressed() {
  // Implement this function if needed
  zoom.setVolume(0.3);
  zoom.play();
  console.log("Unzoom button pressed!");

  // Decrease the font size of the description span
  if (descriptionFontSize > 15) {
    descriptionFontSize -= 5;
  }

  // Update the font size of all description spans
  for (let i = 0; i < descriptionSpans.length; i++) {
    descriptionSpans[i].style("font-size", descriptionFontSize + "px");
  }
}

function returnToFirstButtonPressed() {
  bigPageFlip.setVolume(0.2);
  bigPageFlip.play();
  counter = 0;
  updateImageAndDescription();
  console.log("Return to first button pressed!");
}

function goToLastButtonPressed() {
  bigPageFlip.setVolume(0.2);
  bigPageFlip.play();
  counter = images.length - 1;
  updateImageAndDescription();
  console.log("Go to last button pressed!");
}

function goToHomePage() {
  backToHome.play();
  setTimeout(function () {
    if (score == 55){
      console.log("Go to home page (Complete)!");  
      window.location.href = "https://magicarchie.github.io/Stage_Selection_4/";
    }else{
      console.log("Go to home page (Not Complete)!");
      if (LocationS == 111) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_1/";
      } else if (LocationS == 222) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_2/";       
      } else if (LocationS == 333) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_3/";       
      } else if (LocationS == 444) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_4/";      
      } else if (LocationS == 555) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_5/";    
      } else if (LocationS == 666) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_6/";       
      } else if (LocationS == 777) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_7/";      
      } else if (LocationS == 888) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_Secret/";   
      } else if (LocationS == 999) {
        window.location.href = "https://magicarchie.github.io/Stage_Selection_Finale/"; 
      }
    }
  }, 100);
}

function pressedRight() {
  pageFlip.play();
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  
  updateImageAndDescription();
}

function pressedLeft() {
  pageFlip.play();
  counter--;
  if (counter < 0) {
    counter = images.length - 1; 
  }

  keyButtonPressedFlag = false;

  updateImageAndDescription();
}

function toggleNightMode() {
  nightMode = !nightMode;
  light.play();

  if (nightMode) {
    for (let i = 0; i < descriptionSpans.length; i++) {
      descriptionSpans[i].style("color", "#FFFFFF"); // Set text color to white
    }

    nightModeButton.attribute("src", "Day_Mode.png");
  } else {
    for (let i = 0; i < descriptionSpans.length; i++) {
      descriptionSpans[i].style("color", "black"); // Set text color to black
    }
    nightModeButton.attribute("src", "Night_Mode.png");
  }
}

function keyButtonPressed() {
  // Check if the key button is not pressed to avoid repeated changes
  if (!keyButtonPressedFlags[counter]) {
    // Check if the counter is within valid bounds
    if (counter >= 0 && counter < visibility.length) {
      // Toggle the visibility of the current image
      visibility[counter] = !visibility[counter];

      // Update the display based on the visibility status
      if (visibility[counter]) {
        // Display the unlocked image
        image(images[counter], (canvasWidth - 850) / 2 + 1, 110, 850, 300);
      } else {
        // Display the locked image
        keySound.setVolume(0.3);
        keySound.play();
        image(locked[counter], (canvasWidth - 850) / 2 + 1, 110, 850, 300);
        score += 5; // Update the score
      }

    } else {
      console.log("Invalid image index");
    }

    // Set the keyButtonPressedFlag to true to prevent repeated changes
    keyButtonPressedFlags[counter] = true;
  }
}

function mouseWheel(event) {
  // Update the target vertical position based on the mouse wheel delta
  targetDescriptionTextY += event.delta * scrollSpeed;
  
  // Constrain the target position to keep it within bounds
  targetDescriptionTextY = constrain(targetDescriptionTextY, 480, 560);

  // Move the description text towards the target position
  descriptionTextY += (targetDescriptionTextY - descriptionTextY) * 0.1;

  // Draw the description text at the updated position
  for (let i = 0; i < descriptionSpans.length; i++) {
    descriptionSpans[i].position((canvasWidth - 1000) / 2 + 10, descriptionTextY);
  }
}

function artistInfo() {
  infoBleep.play();
  console.log("Getting artist information...");

  window.open("https://www.nationalgallery.gr/artist/altamouras-ioannis/", "_blank");
}

function setNextRandomImageTime() {
  if (lastTime >= randomImageTimer) {
    //if (showRandomImage == false) {
      showRandomImage = true;
      displayRandomImage();
    //}
  }
  else
  {
    showRandomImage = false;
  }
  lastTime = millis();
}

function displayRandomImage() {
  
  if(showRandomImage == true) {
    //light.play();
    image(randomImage, 1100, 660, 300, 200);
    setTimeout(function() {
      randomImageTimer = lastTime + 120000;
    }, 10000);
  }
}

function Completed() {
  keyimg.hide();
  arrowRight.hide();
  arrowLeft.hide();
  returnToFirstButton.hide();
  goToLastButton.hide();
  artistBt.hide();
  title.hide();
  level.hide();
  Complete.show();
}

function hideComplition() {
  Complete.hide();
  keyimg.show();
  arrowRight.show();
  arrowLeft.show();
  returnToFirstButton.show();
  goToLastButton.show();
  artistBt.show();
  title.show();
  level.show();
  staf = false;
}

function keyPressed() {
  // Check for the "`" key
  if (key === '`') {
    console.log("Backtick key pressed!");

    // Ask the user for a code
    const userCode = prompt("Enter a code:");

    // Check the entered code and redirect the user
    if (userCode === "KeyU") {
      Unlock = 125;
    } else if (userCode === "KeyL") {
      Unlock = 521;
    } 
  }
}

function mousePressed() {
  if (showMessage) {
    // Check if the mouse is over the "Yes" button
    if (
      mouseX >= width / 2 - 80 &&
      mouseX <= width / 2 - 80 + 60 &&
      mouseY >= height / 2 - 130 &&
      mouseY <= height / 2 - 100
    ) {
      // Redirect to a new URL when "Yes" is clicked
      clickG.setVolume(0.1);
      clickG.play();
      setTimeout(function () {
        transition.setVolume(0.5);
        transition.play();
      }, 600);
      showMessage = false;
      setTimeout(function () {
        window.location.href = "https://magicarchie.github.io/GuitarHero/";
      }, 2400);
    }

    // Check if the mouse is over the "No" button
    else if (
      mouseX >= width / 2 + 20 &&
      mouseX <= width / 2 + 20 + 60 &&
      mouseY >= height / 2 - 130 &&
      mouseY <= height / 2 - 100
    ) {
      // Reset showMessage to false if "No" is clicked
      clickG.setVolume(0.1);
      clickG.play();
      showMessage = false;
    }
  } else {
    if (
      mouseX >= 276 &&
      mouseX <= 1126 &&
      mouseY >= 110 &&
      mouseY <= 410 &&
      Unlock != 125
    ) {
       choice.setVolume(0.1);
       choice.play();
       showMessage = true; 
    }
  }
}

function displayMessageAndButtons() {
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Do you want to play a game?", width / 2, height / 2 - 160);

  // "Yes" button
  fill(0, 255, 0, 150);
  rect(width / 2 - 80, height / 2 - 130, 60, 30, 9);
  fill(0);
  text("Yes", width / 2 - 50, height / 2 - 112);

  // "No" button
  fill(255, 0, 0, 150);
  rect(width / 2 + 20, height / 2 -130, 60, 30, 9);
  fill(0);
  text("No", width / 2 + 50, height / 2 - 112);
}
