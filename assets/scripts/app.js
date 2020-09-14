const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  }
  else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Well done, Padawan! 👍🏾 You have defeated the dark side.🤩😁");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert(
      "Oh good one. You have lost the battle today. 😓😢 Chin up! There is war to be won tomorrow. 👌🏾💪🏾"
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("No winner today. We shall meet again.");
  }
}

function attackHandler() {
  attackMonster('ATTACK')
}

function strongAttackHandler () {
  attackMonster('STRONG_ATTACK')
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler)
