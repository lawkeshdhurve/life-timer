var isDOBOpen = false;
var dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
 const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobButtonEl = document.getElementById("dobButton");
const InputEl = document.getElementById("Input");

const YearEl = document.getElementById("Year");
const MonthEl = document.getElementById("Month");
const DayEl = document.getElementById("Day");
const HourEl = document.getElementById("Hour");
const MinuteEl = document.getElementById("Minute");
const SecondEl = document.getElementById("Second");

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
};

const toggleDateOfBirthSelector = () => {
    if(isDOBOpen) {
        settingContentEl.classList.add("hide");
        setDOBHandler();
    }
    else{
        settingContentEl.classList.remove("hide");
        setDOBHandler();
    }

    isDOBOpen = !isDOBOpen;
    console.log("Toggle",isDOBOpen);
};


const updateAge = () => {

    const currentDate = new Date();

    
    const dateDiff = currentDate - dateOfBirth;

   
    const Year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const Month = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const Day = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const Hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const Second = Math.floor((dateDiff % (1000 * 60)) / 1000);

    
    YearEl.innerHTML = makeTwoDigitNumber(Year);
    MonthEl.innerHTML = makeTwoDigitNumber(Month);
    DayEl.innerHTML = makeTwoDigitNumber(Day);
    HourEl.innerHTML = makeTwoDigitNumber(Hour);
    MinuteEl.innerHTML = makeTwoDigitNumber(Minute);
    SecondEl.innerHTML = makeTwoDigitNumber(Second);
};


const setDOBHandler = () => {
const dateString = InputEl.value;
dateOfBirth = dateString ? new Date(dateString) : null;

 

if(dateOfBirth){
   

    initialTextEl.classList.add("hide");
    afterDOBBtnTxtEl.classList.remove("hide");
   
    setInterval(() => updateAge(),1000);
}
else{
    afterDOBBtnTxtEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
   
}
};

setDOBHandler();






settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", toggleDateOfBirthSelector);






























