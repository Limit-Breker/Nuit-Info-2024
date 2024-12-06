// Sélectionner les éléments HTML
const elements = {
    donut: document.getElementById('donut'),
    imgContainer: document.querySelector('.imgContainer'),
    clicksText: document.querySelector('#clicks span'),
    cpsText: document.getElementById('cps'),
    multiplierText: document.getElementById('multiplier'),
    autoClickerInfoText: document.getElementById('autoclickerInfo'),
    buyX2Button: document.getElementById('buyX2'),
    buyX3Button: document.getElementById('buyX3'),
    buyX4Button: document.getElementById('buyX4'),
    pX2: document.querySelector('.pX2'),
    pX3: document.querySelector('.pX3'),
    pX4: document.querySelector('.pX4'),
    newGameButton: document.getElementById('newGameButton'),
    buyAutoClickerButton: document.getElementById('buyAutoClicker'),
    autoClickerButtonText: document.querySelector('.autoclickerText'),
    multiplierInfo: document.getElementById('multiplierInfo'),
    farmInfo: document.getElementById('farmInfo'),
    buyFarmButton: document.getElementById('buyFarm')
};

// Constantes et initialisation
const maxCps = 10;
const donutImages = [
    `${process.env.PUBLIC_URL}/images/cookie/donut1.png`,
    `${process.env.PUBLIC_URL}/images/cookie/donut2.png`,
    `${process.env.PUBLIC_URL}/images/cookie/donut3.png`,
    `${process.env.PUBLIC_URL}/images/cookie/donut4.png`
];
let clickCounter = parseInt(localStorage.getItem('clickCounter') || 0);
let clickCounterThisSecond = 0;
let cps = parseInt(localStorage.getItem('cps') || 0);
let multiplier = parseInt(localStorage.getItem('multiplier') || 1);
let multiplierFactorX2 = parseInt(localStorage.getItem('multiplierFactorX2') || 1);
let multiplierFactorX3 = parseInt(localStorage.getItem('multiplierFactorX3') || 1);
let multiplierFactorX4 = parseInt(localStorage.getItem('multiplierFactorX4') || 1);
let autoClickerCount = parseInt(localStorage.getItem('autoClickerCount') || 0);
let currentImage = localStorage.getItem('currentImage') || donutImages[0];
let autoClickerCost = parseInt(localStorage.getItem('autoClickerCost') || 10000);
let autoClickerInterval = null;
let farmCount = parseInt(localStorage.getItem('farmCount') || 0);
let farmCps = 2;
let farmCost = 5000;

let multiplierCost = {
    2: 100 * multiplierFactorX2, // Coût du multiplicateur x2
    3: 200 * multiplierFactorX3, // Coût du multiplicateur x3
    4: 300 * multiplierFactorX4  // Coût du multiplicateur x4
};

// Mises à jour des textes initiaux
elements.clicksText.textContent = clickCounter.toLocaleString('fr-FR');
elements.cpsText.textContent = `CPS : ${cps}`;
elements.multiplierText.textContent = `Multiplier : x${multiplier}`;
elements.autoClickerInfoText.textContent = `Auto-clicker : ${autoClickerCount}`;
elements.donut.src = currentImage;
elements.autoClickerButtonText.textContent = autoClickerCost.toLocaleString('fr-FR');
elements.farmInfo.textContent = `Fermes : ${farmCount}`;
elements.pX2.textContent = `${(multiplierCost[2]).toLocaleString('fr-FR')}`;
elements.pX3.textContent = `${(multiplierCost[3]).toLocaleString('fr-FR')}`;
elements.pX4.textContent = `${(multiplierCost[4]).toLocaleString('fr-FR')}`;

// Fonctions utilitaires
const applyCpsLimit = () => {
    if (clickCounterThisSecond > maxCps) clickCounterThisSecond = maxCps;
    elements.cpsText.textContent = `CPS : ${clickCounterThisSecond}`;
};

const getRandomClickTarget = () => Math.floor(Math.random() * 41) + 10; // Entre 10 et 50

let randomClickTarget = getRandomClickTarget();

const changeDonutImage = () => {
    let newImage;
    do {
        newImage = donutImages[Math.floor(Math.random() * donutImages.length)];
    } while (newImage === currentImage);
    elements.donut.src = newImage;
    localStorage.setItem('currentImage', newImage);
    currentImage = newImage;
};

const updateAvailableMultiplierButtons = () => {
    [2, 3, 4].forEach(value => {
        const button = elements[`buyX${value}Button`];
        button.classList.toggle('available', clickCounter >= multiplierCost[value]);
    });
    elements.buyAutoClickerButton.classList.toggle('available', clickCounter >= autoClickerCost);
};

// Gestion du clic sur le donut
elements.donut.addEventListener('click', () => {
    elements.imgContainer.classList.remove('animationCLick');

    clickCounter += multiplier;
    clickCounterThisSecond++;
    elements.clicksText.textContent = clickCounter.toLocaleString('fr-FR');
    localStorage.setItem('clickCounter', clickCounter);

    setTimeout(() => elements.imgContainer.classList.add('animationCLick'), 100);
    setTimeout(() => elements.imgContainer.classList.remove('animationCLick'), 400);

    updateAvailableMultiplierButtons();

    if (--randomClickTarget <= 0) {
        changeDonutImage();
        randomClickTarget = getRandomClickTarget();
    }
});

// Acheter un multiplicateur
const buyMultiplier = (value) => {
    const cost = multiplierCost[value];
    if (clickCounter >= cost) {
        clickCounter -= cost;
        multiplier *= value;
        elements.clicksText.textContent = clickCounter.toLocaleString('fr-FR');
        elements.multiplierText.textContent = `Multiplier : x${multiplier}`;
        elements.multiplierInfo.textContent = `+ x${value}`;
        localStorage.setItem('clickCounter', clickCounter);
        localStorage.setItem('multiplier', multiplier);

        multiplierFactorX2 = value === 2 ? multiplierFactorX2 + 1 : multiplierFactorX2;
        multiplierFactorX3 = value === 3 ? multiplierFactorX3 + 1 : multiplierFactorX3;
        multiplierFactorX4 = value === 4 ? multiplierFactorX4 + 1 : multiplierFactorX4;

        multiplierCost = {
            2: value === 2 ? multiplierCost[2] + 100 * multiplierFactorX2 : multiplierCost[2],
            3: value === 3 ? multiplierCost[3] + 200 * multiplierFactorX3 : multiplierCost[3],
            4: value === 4 ? multiplierCost[4] + 300 * multiplierFactorX4 : multiplierCost[4]
        };

        elements.pX2.textContent = `${multiplierCost[2].toLocaleString('fr-FR')}`;
        elements.pX3.textContent = `${multiplierCost[3].toLocaleString('fr-FR')}`;
        elements.pX4.textContent = `${multiplierCost[4].toLocaleString('fr-FR')}`;

        localStorage.setItem('multiplierFactorX2', multiplierFactorX2);
        localStorage.setItem('multiplierFactorX3', multiplierFactorX3);
        localStorage.setItem('multiplierFactorX4', multiplierFactorX4);

        updateAvailableMultiplierButtons();
    }
};

elements.buyX2Button.addEventListener('click', () => buyMultiplier(2));
elements.buyX3Button.addEventListener('click', () => buyMultiplier(3));
elements.buyX4Button.addEventListener('click', () => buyMultiplier(4));

// Acheter un auto-clicker
const buyAutoClicker = () => {
    if (clickCounter >= autoClickerCost) {
        clickCounter -= autoClickerCost;
        autoClickerCount++;
        cps += multiplier;
        autoClickerCost = Math.round(autoClickerCost * 1.5);

        elements.clicksText.textContent = clickCounter.toLocaleString('fr-FR');
        elements.autoClickerInfoText.textContent = `Auto-clicker : ${autoClickerCount}`;
        elements.cpsText.textContent = `CPS : ${cps}`;
        elements.autoClickerButtonText.textContent = autoClickerCost.toLocaleString('fr-FR');

        localStorage.setItem('clickCounter', clickCounter);
        localStorage.setItem('autoClickerCount', autoClickerCount);
        localStorage.setItem('cps', cps);
        localStorage.setItem('autoClickerCost', autoClickerCost);

        if (!autoClickerInterval) {
            autoClickerInterval = setInterval(() => {
                clickCounter += cps;
                elements.clicksText.textContent = clickCounter.toLocaleString('fr-FR');
                updateAvailableMultiplierButtons();
                localStorage.setItem('clickCounter', clickCounter);
            }, 1000);
        }
    }
};

elements.buyAutoClickerButton.addEventListener('click', buyAutoClicker);

// Acheter une ferme
const buyFarm = () => {
    if (clickCounter >= farmCost) {
        clickCounter -= farmCost;
        farmCount++;
        cps += farmCps;
        farmCost = Math.round(farmCost * 1.5);

        elements.clicksText.textContent = clickCounter.toLocaleString('fr-FR');
        elements.farmInfo.textContent = `Fermes : ${farmCount}`;
        elements.cpsText.textContent = `CPS : ${cps}`;
        elements.buyFarmButton.textContent = `Acheter une ferme (${farmCost.toLocaleString('fr-FR')} clics)`;

        localStorage.setItem('clickCounter', clickCounter);
        localStorage.setItem('farmCount', farmCount);
        localStorage.setItem('cps', cps);
        localStorage.setItem('farmCost', farmCost);
    }
};

elements.buyFarmButton.addEventListener('click', buyFarm);

// Nouvelle partie
const startNewGame = () => {
    localStorage.clear();
    clickCounter = 0;
    clickCounterThisSecond = 0;
    cps = 0;
    multiplier = 1;
    autoClickerCount = 0;
    autoClickerCost = 10000;
    currentImage = donutImages[0];
    randomClickTarget = getRandomClickTarget();
    elements.imgContainer.classList.remove('animationCLick');
    multiplierFactorX2 = 1;
    multiplierFactorX3 = 1;
    multiplierFactorX4 = 1;
    multiplierCost = {
        2: 100 * multiplierFactorX2,
        3: 200 * multiplierFactorX3,
        4: 300 * multiplierFactorX4
    };
    farmCount = 0;
    farmCost = 5000;
    elements.farmInfo.textContent = 'Fermes : 0';
    elements.buyFarmButton.textContent = `Acheter une ferme (${farmCost.toLocaleString('fr-FR')} clics)`;
    elements.pX2.textContent = `${multiplierCost[2].toLocaleString('fr-FR')}`;
    elements.pX3.textContent = `${multiplierCost[3].toLocaleString('fr-FR')}`;
    elements.pX4.textContent = `${multiplierCost[4].toLocaleString('fr-FR')}`;

    localStorage.setItem('farmCount', farmCount);
    localStorage.setItem('farmCost', farmCost);
    localStorage.setItem('clickCounter', clickCounter);
    localStorage.setItem('cps', cps);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('autoClickerCount', autoClickerCount);
    localStorage.setItem('autoClickerCost', autoClickerCost);
    localStorage.setItem('currentImage', currentImage);
    localStorage.setItem('multiplierFactorX2', multiplierFactorX2);
    localStorage.setItem('multiplierFactorX3', multiplierFactorX3);
    localStorage.setItem('multiplierFactorX4', multiplierFactorX4);

    elements.donut.src = currentImage;
    elements.clicksText.textContent = '0';
    elements.cpsText.textContent = 'CPS : 0';
    elements.multiplierText.textContent = 'Multiplier : x1';
    elements.multiplierInfo.textContent = '';
    elements.autoClickerInfoText.textContent = 'Auto-clicker : 0';
    elements.autoClickerButtonText.textContent = autoClickerCost.toLocaleString('fr-FR');
    clearInterval(autoClickerInterval);
    autoClickerInterval = null;
    updateAvailableMultiplierButtons();
};

elements.newGameButton.addEventListener('click', startNewGame);

// Intervalle pour limiter les CPS
setInterval(() => {
    applyCpsLimit();
    clickCounterThisSecond = 0;
}, 1000);