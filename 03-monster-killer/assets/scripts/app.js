// Mayus as a convention: global const
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt('Max life for you and the monster','100');
let chosenMaxLife = parseInt(enteredValue);
if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let battleLog = [];

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, fmh, fph) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: fmh,
        finalPlayerHealth: fph
    };

    if(ev === LOG_EVENT_PLAYER_ATTACK) { 
        logEntry.target = 'MONSTER';
    } else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK) { 
        logEntry.target = 'MONSTER';
    } else if(ev === LOG_EVENT_MONSTER_ATTACK) { 
        logEntry.target = 'PLAYER';
    } else if(ev === LOG_EVENT_PLAYER_HEAL) { 
        logEntry.target = 'PLAYER';
    } else if(ev === LOG_EVENT_GAME_OVER) { 
        
    }

    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if(mode == MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if ( mode === MODE_STRONG_ATTACK){
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    writeToLog(
        logEvent,
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
}

function endRound() {
    const initialPlayerLife = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if(currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerLife;
        alert("You'd be dead but the bonus life save your ass");
        setPlayerHealth();
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        alert("You won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'MONSTER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        alert("You lose ):");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <=0) {
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'A DRAW :(:', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        alert("A draw :):");
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
    endRound();
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
    endRound();
}

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("you can't heal more than the maximun");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;

    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();
}

function printLogHandler() {
    console.log(battleLog);
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler)