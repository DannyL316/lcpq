// Champion List (all 39 mid laners)
const champions = [
    'Ahri', 'Akali', 'Akshan', 'Anivia', 'Annie',
    'Aurelion Sol', 'Aurora', 'Azir', 'Cassiopeia', 'Diana',
    'Ekko', 'Fizz', 'Galio', 'Hwei', 'Irelia',
    'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lux',
    'Malzahar', 'Mel', 'Morgana', 'Orianna', 'Qiyana',
    'Ryze', 'Sylas', 'Syndra', 'Taliyah', 'Twisted Fate',
    'Veigar', 'Vex', 'Viktor', 'Vladimir', 'Xerath',
    'Yasuo', 'Yone', 'Zed', 'Zoe'
];

// Top 20 most picked champions (for enemy selection)
const top20Champions = [
    'Yasuo', 'Katarina', 'Veigar', 'Malzahar', 'Akali',
    'Mel', 'Yone', 'Ahri', 'Fizz', 'Diana',
    'Sylas', 'Lux', 'Syndra', 'Vladimir', 'LeBlanc',
    'Vex', 'Ekko', 'Xerath', 'Zoe', 'Galio'
];

// Counter Data (embedded directly to avoid CORS issues)
const counterData = {
  "Yasuo": [
    {"champion": "Malzahar", "reason": "Point-and-click suppress goes through wind wall, passive shield blocks his poke, can shove him in easily"},
    {"champion": "Annie", "reason": "Instant targeted stun, he can't wind wall it, burst combo deletes him"}
  ],
  "Katarina": [
    {"champion": "Galio", "reason": "Taunt stops her ultimate, magic shield negates her burst, can match roams"},
    {"champion": "Malzahar", "reason": "Suppress cancels her ultimate instantly, space AIDS (E) pressures her in lane"}
  ],
  "Veigar": [
    {"champion": "Xerath", "reason": "Massively outranges him, pokes him down before he can ever get in range"},
    {"champion": "Syndra", "reason": "Long range, can shove and roam, strong all-in before he scales"}
  ],
  "Malzahar": [
    {"champion": "Syndra", "reason": "Can shove just as hard, outranges him, QSS tax isn't as punishing for her"},
    {"champion": "Xerath", "reason": "Outranges his abilities, pokes him down, forces him to use mana to waveclear"}
  ],
  "Akali": [
    {"champion": "Galio", "reason": "Magic shield negates her burst, point-and-click taunt goes through shroud, matches roams"},
    {"champion": "Kassadin", "reason": "Passive + Q shield reduces magic damage, outscales hard, can blink out of shroud with R"}
  ],
  "Mel": [
    {"champion": "Yasuo", "reason": "Wind wall blocks her E (key CC) and Q projectiles, high mobility makes him hard to pin down, can all-in easily"},
    {"champion": "Syndra", "reason": "Outranges her, can shove and pressure before Mel gets combo setup, long-range stun disrupts her"}
  ],
  "Yone": [
    {"champion": "Vex", "reason": "Fear stops his engage, ranged poke punishes him, denies his mobility"},
    {"champion": "Malzahar", "reason": "Suppress cancels his E snapback, space AIDS pressures him, passive shield blocks poke"}
  ],
  "Ahri": [
    {"champion": "Veigar", "reason": "Cage denies her mobility, if she dashes in she's trapped and dies"},
    {"champion": "Malzahar", "reason": "Suppress locks her down, shoves her in, negates her pick potential"}
  ],
  "Fizz": [
    {"champion": "Vladimir", "reason": "Pool dodges his ultimate, sustains through lane, outscales him"},
    {"champion": "Galio", "reason": "Magic shield negates burst, can survive his all-ins, roam matching"}
  ],
  "Diana": [
    {"champion": "Lissandra", "reason": "Self-ult counters her dive, CC locks her down, Zhonya's timing negates her burst"},
    {"champion": "Galio", "reason": "Aftershock/magic shield survives her burst, taunt stops her combo"}
  ],
  "Sylas": [
    {"champion": "Malzahar", "reason": "Terrible ultimate to steal, suppress locks him down, shoves him in"},
    {"champion": "Veigar", "reason": "Cage denies his mobility, stealing Veigar ult isn't impactful, gets outscaled"}
  ],
  "Lux": [
    {"champion": "Fizz", "reason": "Can dodge everything with E, all-ins her easily post-6"},
    {"champion": "Yasuo", "reason": "Wind wall blocks Q/E/R, can dash through minions to close gap"}
  ],
  "Syndra": [
    {"champion": "Fizz", "reason": "Dodges her stun and ult with E, all-ins her easily"},
    {"champion": "Zed", "reason": "Can dodge her stun with W or ult, high kill pressure post-6"}
  ],
  "Vladimir": [
    {"champion": "Malzahar", "reason": "Suppress can't be pooled if timed right, constant DPS pressures him"},
    {"champion": "Anivia", "reason": "Outranges him, wall disrupts his positioning, sustained damage burns through sustain"}
  ],
  "LeBlanc": [
    {"champion": "Malzahar", "reason": "Suppress locks her down through distortion, shoves her in"},
    {"champion": "Galio", "reason": "Magic shield + aftershock, can survive her burst and taunt her"}
  ],
  "Vex": [
    {"champion": "Xerath", "reason": "Outranges her completely, pokes her down from safety"},
    {"champion": "Vel'Koz", "reason": "Similar to Xerath, range advantage negates her fear threat"}
  ],
  "Ekko": [
    {"champion": "Veigar", "reason": "Cage traps him even after ult, burst kills him through Zhonya timing"},
    {"champion": "Malzahar", "reason": "Suppress locks him down, can't escape with ult during suppress"}
  ],
  "Xerath": [
    {"champion": "Fizz", "reason": "Can dodge everything, massive gap close, all-in threat"},
    {"champion": "Zed", "reason": "High mobility, can dodge skillshots, forces Zhonya's then ults again"}
  ],
  "Zoe": [
    {"champion": "Fizz", "reason": "Dodges her E and Q with his E, all-ins her easily"},
    {"champion": "Yasuo", "reason": "Wind wall blocks her entire kit (E, Q, R)"}
  ],
  "Galio": [
    {"champion": "Sylas", "reason": "Steals his ultimate which is devastating, sustain outsustains Galio's poke"},
    {"champion": "Vladimir", "reason": "Sustains through his damage, outscales him hard"}
  ]
};

let enemyChampion = '';
let selectedChampion = '';

// DOM Elements
const championGrid = document.getElementById('championGrid');
const lockInBtn = document.getElementById('lockInBtn');
const championSelectScreen = document.getElementById('championSelect');
const feedbackScreen = document.getElementById('feedbackScreen');
const explanationModal = document.getElementById('explanationModal');

// Initialize the game
function init() {
    selectRandomEnemy();
    populateChampionGrid();
    setupEventListeners();
}

// Function to get champion image URL
function getChampionImageUrl(championName) {
    // Format champion name for Data Dragon (remove spaces and apostrophes)
    let formattedName = championName.replace(/\s+/g, '').replace(/'/g, '');
    
    // Special cases for champion names
    const specialCases = {
        'LeBlanc': 'Leblanc',
        'Aurelion Sol': 'AurelionSol',
        'Twisted Fate': 'TwistedFate',
        'Mel': 'Mel',
        'Aurora': 'Aurora'
    };
    
    if (specialCases[championName]) {
        formattedName = specialCases[championName];
    }
    
    // Using Riot's Data Dragon CDN (latest version - 15.21.1)
    return `https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${formattedName}.png`;
}

// Populate champion grid
function populateChampionGrid() {
    championGrid.innerHTML = '';
    
    champions.forEach(champion => {
        const card = document.createElement('div');
        card.className = 'champion-card';
        card.dataset.champion = champion;
        
        // Disable if enemy picked this champion
        if (champion === enemyChampion) {
            card.classList.add('disabled');
        }
        
        const img = document.createElement('img');
        img.src = getChampionImageUrl(champion);
        img.alt = champion;
        // Fallback: just hide the image and show champion name larger
        img.onerror = function() {
            this.style.display = 'none';
            card.querySelector('span').style.fontSize = '1rem';
        };
        
        const name = document.createElement('span');
        name.textContent = champion;
        
        card.appendChild(img);
        card.appendChild(name);
        
        card.addEventListener('click', () => {
            // Don't allow selecting disabled champions
            if (!card.classList.contains('disabled')) {
                selectChampion(champion, card);
            }
        });
        
        championGrid.appendChild(card);
    });
}

// Select random enemy champion
function selectRandomEnemy() {
    const randomIndex = Math.floor(Math.random() * top20Champions.length);
    enemyChampion = top20Champions[randomIndex];
    
    const enemyPickSlot = document.getElementById('enemyMidPick');
    const enemyImg = enemyPickSlot.querySelector('.picked-champion');
    const enemyName = enemyPickSlot.querySelector('.champion-name');
    
    enemyImg.src = getChampionImageUrl(enemyChampion);
    enemyImg.alt = enemyChampion;
    enemyImg.onerror = function() {
        this.style.display = 'none';
    };
    enemyName.textContent = enemyChampion;
}

// Select champion
function selectChampion(champion, card) {
    // Remove previous selection
    const previousSelected = document.querySelector('.champion-card.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    // Add selection to new card
    card.classList.add('selected');
    selectedChampion = champion;
    
    // Update the picking slot with champion image
    const pickingSlot = document.querySelector('.pick-slot.picking');
    let pickingImg = pickingSlot.querySelector('.picked-champion');
    
    // If image doesn't exist, create it
    if (!pickingImg) {
        pickingImg = document.createElement('img');
        pickingImg.className = 'picked-champion';
        pickingSlot.appendChild(pickingImg);
    }
    
    pickingImg.src = getChampionImageUrl(champion);
    pickingImg.alt = champion;
    pickingImg.style.display = 'block';
    
    // Enable lock in button
    lockInBtn.disabled = false;
}

// Lock in selection
function lockIn() {
    if (!selectedChampion) return;
    
    // Check if the pick is correct
    const correctCounters = counterData[enemyChampion] || [];
    const isCorrect = correctCounters.some(counter => counter.champion === selectedChampion);
    
    showFeedback(isCorrect, correctCounters);
}

// Show feedback screen
function showFeedback(isCorrect, correctCounters) {
    championSelectScreen.classList.remove('active');
    feedbackScreen.classList.add('active');
    
    const feedbackTitle = document.getElementById('feedbackTitle');
    feedbackTitle.textContent = isCorrect ? 'CORRECT!' : 'INCORRECT';
    feedbackTitle.className = isCorrect ? 'correct' : 'incorrect';
    
    // Display picks with images
    const yourPickDisplay = document.getElementById('yourPickDisplay');
    yourPickDisplay.innerHTML = '';
    const yourImg = document.createElement('img');
    yourImg.src = getChampionImageUrl(selectedChampion);
    yourImg.alt = selectedChampion;
    yourImg.style.width = '100%';
    yourImg.style.height = '100%';
    yourImg.style.objectFit = 'cover';
    yourPickDisplay.appendChild(yourImg);
    
    const enemyPickDisplay = document.getElementById('enemyPickDisplay');
    enemyPickDisplay.innerHTML = '';
    const enemyImg = document.createElement('img');
    enemyImg.src = getChampionImageUrl(enemyChampion);
    enemyImg.alt = enemyChampion;
    enemyImg.style.width = '100%';
    enemyImg.style.height = '100%';
    enemyImg.style.objectFit = 'cover';
    enemyPickDisplay.appendChild(enemyImg);
    
    // Display correct answers
    const counterList = document.getElementById('counterList');
    counterList.innerHTML = '';
    
    correctCounters.forEach(counter => {
        const counterItem = document.createElement('div');
        counterItem.className = 'counter-item';
        if (counter.champion === selectedChampion) {
            counterItem.classList.add('your-pick');
        }
        counterItem.textContent = counter.champion;
        counterList.appendChild(counterItem);
    });
}

// Show explanation modal
function showExplanation() {
    const correctCounters = counterData[enemyChampion] || [];
    const explanationText = document.getElementById('explanationText');
    
    let explanation = `<strong>${enemyChampion}</strong> is countered by:<br><br>`;
    
    correctCounters.forEach(counter => {
        explanation += `<strong>${counter.champion}:</strong> ${counter.reason}<br><br>`;
    });
    
    explanationText.innerHTML = explanation;
    explanationModal.classList.add('active');
}

// Close explanation modal
function closeModal() {
    explanationModal.classList.remove('active');
}

// Next question
function nextQuestion() {
    // Reset state
    selectedChampion = '';
    lockInBtn.disabled = true;
    
    // Remove selection
    const previousSelected = document.querySelector('.champion-card.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    // Remove image from picking slot
    const pickingSlot = document.querySelector('.pick-slot.picking');
    const pickingImg = pickingSlot.querySelector('.picked-champion');
    if (pickingImg) {
        pickingImg.style.display = 'none';
    }
    
    // Select new enemy
    selectRandomEnemy();
    
    // Repopulate grid with new disabled state
    populateChampionGrid();
    
    // Switch back to champion select
    feedbackScreen.classList.remove('active');
    championSelectScreen.classList.add('active');
}

// Main menu - redirect to index
function mainMenu() {
    window.location.href = 'index.html';
}

// Setup event listeners
function setupEventListeners() {
    lockInBtn.addEventListener('click', lockIn);
    document.getElementById('whyBtn').addEventListener('click', showExplanation);
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('mainMenuBtn').addEventListener('click', mainMenu);
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', handleSearch);
}

// Handle search input
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const championCards = document.querySelectorAll('.champion-card');
    
    championCards.forEach(card => {
        const championName = card.dataset.champion.toLowerCase();
        
        if (championName.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', init);