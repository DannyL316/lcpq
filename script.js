// Champion List (all 39 mid laners)
const midChampions = [
    'Ahri', 'Akali', 'Akshan', 'Anivia', 'Annie',
    'Aurelion Sol', 'Aurora', 'Azir', 'Cassiopeia', 'Diana',
    'Ekko', 'Fizz', 'Galio', 'Hwei', 'Irelia',
    'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lux',
    'Malzahar', 'Mel', 'Morgana', 'Orianna', 'Qiyana',
    'Ryze', 'Sylas', 'Syndra', 'Taliyah', 'Twisted Fate',
    'Veigar', 'Vex', 'Viktor', 'Vladimir', 'Xerath',
    'Yasuo', 'Yone', 'Zed', 'Zoe'
];

// All Top lane champions
const topChampions = [
    'Aatrox', 'Akali', 'Ambessa', 'Camille', 'Cho\'Gath',
    'Darius', 'Dr. Mundo', 'Fiora', 'Gangplank', 'Garen',
    'Gnar', 'Gragas', 'Gwen', 'Illaoi', 'Irelia',
    'Jax', 'Jayce', 'K\'Sante', 'Kayle', 'Kennen',
    'Kled', 'Malphite', 'Mordekaiser', 'Nasus', 'Olaf',
    'Ornn', 'Pantheon', 'Poppy', 'Renekton', 'Riven',
    'Rumble', 'Sett', 'Shen', 'Sion', 'Tahm Kench',
    'Teemo', 'Trundle', 'Tryndamere', 'Urgot', 'Vayne',
    'Volibear', 'Warwick', 'Wukong', 'Yasuo', 'Yone',
    'Yorick'
];

// All ADC champions (full roster for user to choose from)
const adcChampions = [
    'Aphelios', 'Ashe', 'Caitlyn', 'Corki', 'Draven',
    'Ezreal', 'Jhin', 'Jinx', 'Kai\'Sa', 'Kalista',
    'Kog\'Maw', 'Lucian', 'Miss Fortune', 'Nilah', 'Samira',
    'Senna', 'Sivir', 'Smolder', 'Tristana', 'Twitch',
    'Varus', 'Vayne', 'Xayah', 'Yunara', 'Zeri',
    'Ziggs'
];

// Top 20 most picked mid champions (for enemy selection)
const top20MidChampions = [
    'Yasuo', 'Katarina', 'Veigar', 'Malzahar', 'Akali',
    'Mel', 'Yone', 'Ahri', 'Fizz', 'Diana',
    'Sylas', 'Lux', 'Syndra', 'Vladimir', 'LeBlanc',
    'Vex', 'Ekko', 'Xerath', 'Zoe', 'Galio'
];

// Top 20 most picked Top champions (for enemy selection)
const top20TopChampions = [
    'Sett', 'Mordekaiser', 'Darius', 'Garen', 'Malphite',
    'Teemo', 'Dr. Mundo', 'Jax', 'Kayle', 'Yorick',
    'Nasus', 'Cho\'Gath', 'Sion', 'Aatrox', 'Renekton',
    'Urgot', 'Illaoi', 'Shen', 'Riven', 'Warwick'
];

// Top 20 most picked ADC champions (for enemy selection)
const top20AdcChampions = [
    'Caitlyn', 'Miss Fortune', 'Jinx', 'Jhin', 'Kai\'Sa',
    'Ashe', 'Tristana', 'Ezreal', 'Smolder', 'Samira',
    'Lucian', 'Draven', 'Xayah', 'Varus', 'Sivir',
    'Ziggs', 'Vayne', 'Kog\'Maw', 'Twitch', 'Yunara'
];

// Current role being played
let currentRole = 'mid';

// Dynamic champion list based on role
let champions = midChampions;
let top20Champions = top20MidChampions;

// Counter Data - Mid Lane
const midCounterData = {
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

// ADC Counter Data
const adcCounterData = {
  "Caitlyn": [
    {"champion": "Jhin", "reason": "Outranges her with 4th shot, can match her poke and siege"},
    {"champion": "Sivir", "reason": "Spell shield blocks traps and Q, wave clear matches Caitlyn's push"}
  ],
  "Miss Fortune": [
    {"champion": "Sivir", "reason": "Spell shield blocks her ultimate, can shove waves and nullify her poke"},
    {"champion": "Ezreal", "reason": "High mobility with E dodges her abilities and ultimate"}
  ],
  "Jinx": [
    {"champion": "Ashe", "reason": "Outranges her in lane, slows prevent Jinx from kiting, arrow catches her out"},
    {"champion": "Vayne", "reason": "Can all-in her weak early game, true damage cuts through her"}
  ],
  "Jhin": [
    {"champion": "Vayne", "reason": "Can tumble his W root, outscales him, all-in punishes reload windows"},
    {"champion": "Jinx", "reason": "Outscales him, rockets outrange during reload, better teamfight"}
  ],
  "Kai'Sa": [
    {"champion": "Caitlyn", "reason": "Outranges her significantly, traps zone her from diving"},
    {"champion": "Ashe", "reason": "Slows deny Kai'Sa's mobility, arrow locks her down"}
  ],
  "Ashe": [
    {"champion": "Sivir", "reason": "Spell shield blocks arrow, wave clear prevents Ashe from freezing"},
    {"champion": "Ezreal", "reason": "Mobility dodges arrow and poke, safe farming denies Ashe's engage"}
  ],
  "Tristana": [
    {"champion": "Ashe", "reason": "Outranges Tristana early, slows prevent jump escapes, kites her well"},
    {"champion": "Jinx", "reason": "Rockets match Tristana's range, better scaling, chompers stop jumps"}
  ],
  "Ezreal": [
    {"champion": "Sivir", "reason": "Spell shield blocks his poke, wave clear forces him to overextend"},
    {"champion": "Smolder", "reason": "Outscales him, can match his poke and stack safely"}
  ],
  "Smolder": [
    {"champion": "Ashe", "reason": "Long range poke prevents stacking, slows punish positioning"},
    {"champion": "Draven", "reason": "Early aggression denies stacks, dominates lane before Smolder scales"}
  ],
  "Samira": [
    {"champion": "Xayah", "reason": "Featherstorm dodges Samira's ultimate, feathers punish her aggression"},
    {"champion": "Sivir", "reason": "Spell shield blocks her abilities, can kite away from melee range"}
  ],
  "Lucian": [
    {"champion": "Caitlyn", "reason": "Outranges his short range, traps punish his dashes"},
    {"champion": "Kai'Sa", "reason": "Can match his burst, evolved abilities outrange him, better scaling"}
  ],
  "Draven": [
    {"champion": "Jhin", "reason": "Can match his early damage, traps and range punish aggression"},
    {"champion": "Caitlyn", "reason": "Outranges him safely, traps zone him, doesn't have to trade"}
  ],
  "Xayah": [
    {"champion": "Caitlyn", "reason": "Outranges her, traps punish positioning, safe poke"},
    {"champion": "Ashe", "reason": "Long range poke, slows prevent feather setups, arrow catches her"}
  ],
  "Varus": [
    {"champion": "Jinx", "reason": "Rockets outrange him, chompers stop his engage, better scaling"},
    {"champion": "Lucian", "reason": "High mobility dodges skill shots, can all-in immobile Varus"}
  ],
  "Sivir": [
    {"champion": "Tristana", "reason": "All-in with jump beats Sivir's wave clear, bomb burst damage"},
    {"champion": "Smolder", "reason": "Outscales her utility, can stack safely, better late game"}
  ],
  "Ziggs": [
    {"champion": "Caitlyn", "reason": "Outranges him, traps punish his positioning, safer siege"},
    {"champion": "Draven", "reason": "High damage forces Ziggs off wave, can all-in him"}
  ],
  "Vayne": [
    {"champion": "Ashe", "reason": "Slows prevent Vayne from kiting, arrow catches her, abuses weak early"},
    {"champion": "Tristana", "reason": "Jump range closes Vayne's kiting space, bomb burst, range advantage early"}
  ],
  "Kog'Maw": [
    {"champion": "Twitch", "reason": "Matches his late game, stealth allows flanks on immobile Kog"},
    {"champion": "Smolder", "reason": "Better scaling pattern, more mobility, outranges late game"}
  ],
  "Twitch": [
    {"champion": "Kai'Sa", "reason": "Can match his stealth with evolved abilities, burst beats his DPS"},
    {"champion": "Caitlyn", "reason": "Traps reveal stealth, long range poke, safer positioning"}
  ],
  "Yunara": [
    {"champion": "Caitlyn", "reason": "Long range and traps control positioning, safe poke from distance"},
    {"champion": "Vayne", "reason": "True damage cuts through, can duel effectively, mobility advantage"}
  ]
};

// Top Lane Counter Data
const topCounterData = {
  "Sett": [
    {"champion": "Malphite", "reason": "Armor scaling and Q poke punish Sett, can absorb his damage with W passive"},
    {"champion": "Gragas", "reason": "High sustain, E dodges Sett's abilities, can disengage easily with barrel"}
  ],
  "Mordekaiser": [
    {"champion": "Fiora", "reason": "Riposte blocks his ultimate, true damage shreds through his armor, mobility beats his slow kit"},
    {"champion": "Jax", "reason": "Counter Strike dodges his Q and autos, can match his split push, outscales"}
  ],
  "Darius": [
    {"champion": "Teemo", "reason": "Range advantage, blind stops his autos and bleed stacks, kites him easily"},
    {"champion": "Vayne", "reason": "True damage ignores his armor, tumble dodges Q, condemn stops his engage"}
  ],
  "Garen": [
    {"champion": "Teemo", "reason": "Range advantage prevents his passive, blind stops his E spin, mushrooms zone him"},
    {"champion": "Darius", "reason": "Stronger all-in potential, bleed stacks punish trades, pulls him back"}
  ],
  "Malphite": [
    {"champion": "Mordekaiser", "reason": "AP damage bypasses armor stacking, ultimate isolates and kills Malphite"},
    {"champion": "Cho'Gath", "reason": "True damage ultimate, sustain matches Malphite's tankiness, outscales"}
  ],
  "Teemo": [
    {"champion": "Malphite", "reason": "Can tank through blind and poke, all-in with ultimate kills Teemo"},
    {"champion": "Irelia", "reason": "Dashes close gap quickly, sustained damage beats Teemo, heals through poke"}
  ],
  "Dr. Mundo": [
    {"champion": "Vayne", "reason": "True damage shreds through his health stacking, %HP damage counters tanks"},
    {"champion": "Fiora", "reason": "True damage from vitals, can match his sustain, outduels him"}
  ],
  "Jax": [
    {"champion": "Malphite", "reason": "Attack speed slow counters Jax's passive, armor negates his damage"},
    {"champion": "Teemo", "reason": "Blind negates Counter Strike and autos, range prevents Jax from trading"}
  ],
  "Kayle": [
    {"champion": "Pantheon", "reason": "Strong early pressure denies her scaling, dive potential, point-click stun"},
    {"champion": "Irelia", "reason": "High early damage, mobility to chase, can snowball before Kayle scales"}
  ],
  "Yorick": [
    {"champion": "Irelia", "reason": "Dashes through ghouls, heals from minions, can fight inside Maiden"},
    {"champion": "Tryndamere", "reason": "Can clear ghouls, split push pressure, undying rage beats Yorick cage"}
  ],
  "Nasus": [
    {"champion": "Darius", "reason": "Stronger early, can zone Nasus from stacks, bleed damage punishes"},
    {"champion": "Teemo", "reason": "Denies stacks with poke and zone control, blind stops Q stacks"}
  ],
  "Cho'Gath": [
    {"champion": "Fiora", "reason": "True damage shreds health stacking, mobile to dodge Q and W"},
    {"champion": "Darius", "reason": "Strong trading, bleed stacks, can match sustain and tankiness"}
  ],
  "Sion": [
    {"champion": "Fiora", "reason": "True damage through tankiness, can riposte his abilities, mobile to dodge"},
    {"champion": "Mordekaiser", "reason": "Isolates with ultimate, AP damage ignores armor, matches tankiness"}
  ],
  "Aatrox": [
    {"champion": "Fiora", "reason": "Riposte blocks his Q knockup, true damage beats sustain, mobility dodges sweetspots"},
    {"champion": "Irelia", "reason": "Sustained damage, mobility dodges Q, can all-in when he's vulnerable"}
  ],
  "Renekton": [
    {"champion": "Malphite", "reason": "Armor stacking negates damage, comet poke, outscales in teamfights"},
    {"champion": "Garen", "reason": "Can match his trades, sustain through his damage, executes with ultimate"}
  ],
  "Urgot": [
    {"champion": "Darius", "reason": "Stronger all-in, can match his tankiness, hooks for picks"},
    {"champion": "Fiora", "reason": "True damage, riposte blocks ultimate execute, mobility advantage"}
  ],
  "Illaoi": [
    {"champion": "Mordekaiser", "reason": "Ultimate isolates and removes tentacles, AP damage ignores armor"},
    {"champion": "Gangplank", "reason": "Can cleanse E slow, poke from range, barrels zone tentacles"}
  ],
  "Shen": [
    {"champion": "Mordekaiser", "reason": "Ultimate prevents Shen's teleports, can isolate and kill him"},
    {"champion": "Darius", "reason": "Stronger trading, bleed damage, can match his tankiness"}
  ],
  "Riven": [
    {"champion": "Malphite", "reason": "Armor and attack speed slow counter her combo, comet poke"},
    {"champion": "Renekton", "reason": "Can match her mobility, stronger early trades, stun breaks shield"}
  ],
  "Warwick": [
    {"champion": "Fiora", "reason": "Riposte blocks ultimate, true damage ignores healing, outduels him"},
    {"champion": "Jax", "reason": "Counter Strike dodges autos, can match sustain, outscales"}
  ]
};

// Current counter data based on role
let counterData = midCounterData;

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
    // Get role from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    currentRole = urlParams.get('role') || 'mid';
    
    // Set champion lists based on role
    if (currentRole === 'adc') {
        champions = adcChampions;
        top20Champions = top20AdcChampions;
        counterData = adcCounterData;
    } else if (currentRole === 'top') {
        champions = topChampions;
        top20Champions = top20TopChampions;
        counterData = topCounterData;
    } else {
        champions = midChampions;
        top20Champions = top20MidChampions;
        counterData = midCounterData;
    }
    
    // Update the pick slots to show correct role BEFORE selecting enemy and populating grid
    updateRoleDisplay();
    
    // Now select enemy and populate - the enemyMidPick element is ready
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
        'Aurora': 'Aurora',
        'Kai\'Sa': 'Kaisa',
        'Kog\'Maw': 'KogMaw',
        'Cho\'Gath': 'Chogath',
        'K\'Sante': 'KSante',
        'Dr. Mundo': 'DrMundo',
        'Tahm Kench': 'TahmKench',
        'Wukong': 'MonkeyKing'
    };
    
    if (specialCases[championName]) {
        formattedName = specialCases[championName];
    }
    
    // Using Riot's Data Dragon CDN (latest version - 15.21.1)
    return `https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${formattedName}.png`;
}

// Update the role display on pick slots
function updateRoleDisplay() {
    // Update your team's picking slot
    const yourTeamSlots = document.querySelectorAll('.your-team .pick-slot');
    const enemyTeamSlots = document.querySelectorAll('.enemy-team .pick-slot');
    
    if (currentRole === 'adc') {
        // Move picking indicator to ADC slot (index 3)
        yourTeamSlots[2].classList.remove('picking');
        yourTeamSlots[2].innerHTML = '<div class="role-label">MID</div>';
        yourTeamSlots[2].classList.add('empty');
        
        yourTeamSlots[3].classList.remove('empty');
        yourTeamSlots[3].classList.add('picking');
        yourTeamSlots[3].innerHTML = '<div class="role-label">ADC</div><div class="picking-indicator">Picking...</div>';
        
        // Move enemy pick to ADC slot (index 3)
        enemyTeamSlots[2].classList.remove('picked');
        enemyTeamSlots[2].innerHTML = '<div class="role-label">MID</div>';
        enemyTeamSlots[2].classList.add('empty');
        enemyTeamSlots[2].removeAttribute('id');
        
        enemyTeamSlots[3].classList.remove('empty');
        enemyTeamSlots[3].classList.add('picked');
        enemyTeamSlots[3].id = 'enemyMidPick';
        enemyTeamSlots[3].innerHTML = '<div class="role-label">ADC</div><img src="" alt="" class="picked-champion"><div class="champion-name"></div>';
    } else if (currentRole === 'top') {
        // Move picking indicator to TOP slot (index 0)
        yourTeamSlots[2].classList.remove('picking');
        yourTeamSlots[2].innerHTML = '<div class="role-label">MID</div>';
        yourTeamSlots[2].classList.add('empty');
        
        yourTeamSlots[0].classList.remove('empty');
        yourTeamSlots[0].classList.add('picking');
        yourTeamSlots[0].innerHTML = '<div class="role-label">TOP</div><div class="picking-indicator">Picking...</div>';
        
        // Move enemy pick to TOP slot (index 0)
        enemyTeamSlots[2].classList.remove('picked');
        enemyTeamSlots[2].innerHTML = '<div class="role-label">MID</div>';
        enemyTeamSlots[2].classList.add('empty');
        enemyTeamSlots[2].removeAttribute('id');
        
        enemyTeamSlots[0].classList.remove('empty');
        enemyTeamSlots[0].classList.add('picked');
        enemyTeamSlots[0].id = 'enemyMidPick';
        enemyTeamSlots[0].innerHTML = '<div class="role-label">TOP</div><img src="" alt="" class="picked-champion"><div class="champion-name"></div>';
    }
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
        img.onerror = function() {
            this.style.display = 'none';
            card.querySelector('span').style.fontSize = '1rem';
        };
        
        const name = document.createElement('span');
        name.textContent = champion;
        
        card.appendChild(img);
        card.appendChild(name);
        
        card.addEventListener('click', () => {
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
    const previousSelected = document.querySelector('.champion-card.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    card.classList.add('selected');
    selectedChampion = champion;
    
    const pickingSlot = document.querySelector('.pick-slot.picking');
    let pickingImg = pickingSlot.querySelector('.picked-champion');
    
    if (!pickingImg) {
        pickingImg = document.createElement('img');
        pickingImg.className = 'picked-champion';
        pickingSlot.appendChild(pickingImg);
    }
    
    pickingImg.src = getChampionImageUrl(champion);
    pickingImg.alt = champion;
    pickingImg.style.display = 'block';
    
    lockInBtn.disabled = false;
}

// Lock in selection
function lockIn() {
    if (!selectedChampion) return;
    
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
    selectedChampion = '';
    lockInBtn.disabled = true;
    
    const previousSelected = document.querySelector('.champion-card.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    const pickingSlot = document.querySelector('.pick-slot.picking');
    const pickingImg = pickingSlot.querySelector('.picked-champion');
    if (pickingImg) {
        pickingImg.style.display = 'none';
    }
    
    selectRandomEnemy();
    populateChampionGrid();
    
    feedbackScreen.classList.remove('active');
    championSelectScreen.classList.add('active');
}

// Main menu
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
