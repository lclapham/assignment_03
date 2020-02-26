let partnersName;
let jobTitle;
let jobLocation;
let numChildern;

// Set up handers to make interaction with page
var handlers = {
    tellFortune: function () {
        launchGame();
        display.displayFortue();

    }
}

// Setup how to display it
var display = {
    displayFortue: function () {
        let fortunePara = document.querySelector('p');
        fortunePara.innerHTML = fortuneResults;
    }
};

// This is the game launcher.  Might be better to put in click handler
function launchGame() {
    let numOfTimes = 3;
    for (i = 0; i < 3; i++) {
        nameGenerator();
        jobGenerator();
        locationGenerator();
        childGenerator();
        tellFortune(partnersName, jobTitle, jobLocation, numChildern);
    }

}

// This fucntion compiles the results of the fortune
function tellFortune(partnersName, jobTitle, jobLocation, numChildern) {
    return fortuneResults = "You will be a " + jobTitle + " in " + jobLocation + ", and married to " + partnersName + " with " + numChildern + " kids." + "<br>";
}

function nameGenerator() {
    // word lists
    let firstName = ["Tim", "Rebecca", "Nicole", "Donald", "Ronald", "Nancy", "Anthony", "Allison"];
    let lastName = ["Smith", "Clinton", "Wienstein", "Shumer", "Shiff", "Pelosi", "Cortez", "Munson"];
    // generate name
    partnersName = firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];
    return partnersName;
}

function jobGenerator() {
    // word lists
    let jobs = ["street Sweeper", "CEO", "web developer", "maid", "bartender", "Stripper", "Uber driver", "Astronaut", "Disk Jockey"];
    // generate name
    jobTitle = jobs[Math.floor(Math.random() * jobs.length)];
    return jobTitle;
}

function locationGenerator() {
    // word lists
    let location = ["USA", "Canada", "India", "Thailand", "Australia", "Phillipines", "Russia", "China"];
    // generate name
    jobLocation = location[Math.floor(Math.random() * location.length)];
    return jobLocation;
}

function childGenerator() {
    numChildern = (Math.floor(Math.random() * 10))
    if (numChildern === 0) {
        numChildern = "no"  // future update would be to dynamically change kids to kid when no or 1 kids is picked.
    } else {
        return numChildern;
    }

}