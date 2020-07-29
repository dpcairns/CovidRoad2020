//EXPORT FUNCTIONS
import { findById } from './utils.js';
import occupations from './data/occupations.js';
import levels from './data/levels.js';
// PAGE RENDERING FUNCTIONS WILL GO HERE:

// RENDER HEADER
// RENDER LEVEL - Part 1
// RENDER LEVEL RESULTS- Part 2
// RENDER FINAL RESULTS - Part 1 - WINNER
// RENDER FINAL RESULTS - Part 2 - LOSER

export function renderStartPage(occupationList) {
    const mainSectionEl = document.createElement('section');
    mainSectionEl.classList.add('main-section');
    //TODO select random image
    const startImgEl = document.createElement('img');
    startImgEl.src = 'https://covid-19archive.org/files/large/e265d1d5cdc41f348959af6faf7d92492d278190.jpg';
    startImgEl.classList.add('start-image');

    const formEl = document.createElement('form');

    const nameLabelEl = document.createElement('label');
    nameLabelEl.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameLabelEl.append(nameInput);

    const ageLabelEl = document.createElement('label');
    ageLabelEl.textContent = 'Age:';
    const ageInput = document.createElement('input');
    ageInput.name = 'age';
    ageInput.type = 'number';
    ageLabelEl.append(ageInput);

    const emailLabelEl = document.createElement('label');
    emailLabelEl.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.type = 'email';
    emailLabelEl.append(emailInput);
    formEl.append(nameLabelEl, ageLabelEl, emailLabelEl);
    occupationList.forEach(occupation => {

        const labelEl = document.createElement('label');
        labelEl.textContent = occupation.title;
        labelEl.classList.add('glow');

        const imgEl = document.createElement('img');
        imgEl.src = `../assets/${occupation.avatar}`;
        imgEl.classList.add('start-avatar');

        const radioButtonEl = document.createElement('input');
        radioButtonEl.type = 'radio';
        radioButtonEl.name = 'occupation';
        radioButtonEl.value = occupation.id;
        radioButtonEl.classList.add('hidden');
        labelEl.append(radioButtonEl, imgEl);
        formEl.append(labelEl);
    });

    const submitButtonEl = document.createElement('button');
    submitButtonEl.classList.add('glow');
    submitButtonEl.textContent = 'Start:';
    submitButtonEl.type = 'submit';

    formEl.append(submitButtonEl);
    mainSectionEl.append(startImgEl, formEl);
    return mainSectionEl;
}


export function renderHeader(user) {
    const ulLeftEl = document.createElement('ul');
    ulLeftEl.classList.add('avatar');
    const avatarImage = findById(user.occupation, occupations).avatar;

    const liImgEl = document.createElement('li');
    const liImg = document.createElement('img');
    liImg.src = `../assets/${avatarImage}`;
    liImg.classList.add('avatar-image');
    liImgEl.append(liImg);

    const liNameEl = document.createElement('li');
    liNameEl.textContent = `Name : ${user.name}`;

    ulLeftEl.append(liImgEl, liNameEl);

    const ulCenterEl = document.createElement('ul');
    const liProgress = document.createElement('li');
    const numberCompleted = Object.keys(user.completed).length;
    liProgress.textContent = `Levels: ${numberCompleted} of ${levels.length} completed`;
    ulCenterEl.append(liProgress);

    const ulRightEl = document.createElement('ul');
    const liMoneyEl = document.createElement('li');
    const liHealthEl = document.createElement('li');
    liMoneyEl.textContent = `Money: ${user.wealth}`;
    liHealthEl.textContent = `Health: ${user.health}`;
    ulRightEl.append(liMoneyEl, liHealthEl);
    return { ulLeftEl, ulCenterEl, ulRightEl };
}

