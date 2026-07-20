// Home Calculator Multi-Step Script
let calcUserData = {};

function goToStep2(event) {
  event.preventDefault();

  // Store Step 1 Data
  calcUserData.pincode = document.getElementById('calc-pincode').value;
  calcUserData.name = document.getElementById('calc-name').value;
  calcUserData.email = document.getElementById('calc-email').value;
  calcUserData.phone = document.getElementById('calc-phone').value;

  // Swap Steps
  document.getElementById('calc-step-1').classList.add('hidden');
  document.getElementById('calc-step-2').classList.remove('hidden');
}

function backToStep1() {
  document.getElementById('calc-step-2').classList.add('hidden');
  document.getElementById('calc-step-1').classList.remove('hidden');
}

function calculateMacrosFinal(event) {
  event.preventDefault();

  const goal = document.querySelector('input[name="goal"]:checked').value;

  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let planName = "";
  let goalBadge = "";

  // Portion targets based on standard human metrics (simulated target for weight 70kg-80kg)
  if (goal === "weight-loss") {
    calories = 1450;
    protein = 120;
    carbs = 130;
    planName = "Lean Panther Fat Loss (Avg. 450 kcal / meal)";
    goalBadge = "Weight Loss";
  } else if (goal === "muscle-gain") {
    calories = 2400;
    protein = 165;
    carbs = 230;
    planName = "Champion Panther Muscle Gain (Avg. 800 kcal / meal)";
    goalBadge = "Muscle Gain";
  } else { // maintenance
    calories = 1850;
    protein = 140;
    carbs = 180;
    planName = "Active Panther Balanced (Avg. 600 kcal / meal)";
    goalBadge = "Maintenance";
  }

  // Populate results
  document.getElementById('res-user-name').textContent = calcUserData.name;
  document.getElementById('res-calories').textContent = calories + " kcal";
  document.getElementById('res-protein').textContent = protein + "g";
  document.getElementById('res-carbs').textContent = carbs + "g / Lipids";
  document.getElementById('res-plan-name').textContent = planName;
  document.getElementById('res-badge').textContent = goalBadge;

  // Swap views
  document.getElementById('calc-step-2').classList.add('hidden');
  document.getElementById('calc-step-results').classList.remove('hidden');
}

function resetCalculator() {
  document.getElementById('home-calc-form-1').reset();
  document.getElementById('home-calc-form-2').reset();
  calcUserData = {};

  document.getElementById('calc-step-results').classList.add('hidden');
  document.getElementById('calc-step-2').classList.add('hidden');
  document.getElementById('calc-step-1').classList.remove('hidden');
}

// Select goal and scroll helper to guide user from cards to form
function selectGoalAndScroll(goalId) {
  const radio = document.querySelector('input[name="goal"][value="' + goalId + '"]');
  if (radio) {
    radio.checked = true;
  }
  const form = document.getElementById('home-calc-form-1');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const firstInput = document.getElementById('calc-pincode');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 800);
    }
  }
}

