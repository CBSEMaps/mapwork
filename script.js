const LOCATION_DATA = {

	// History

  "The place where a session of INC was held in September 1920": { coords: [560, 445], name: "Calcutta" },
  "The place where a session of INC was held in December 1920": { coords: [285, 491], name: "Nagpur" },
  "The place where a session of INC was held in 1927": { coords: [331, 728], name: "Madras" },
  "A place where peasant struggled against the Indigo Plantation": { coords: [459, 331], name: "Champaran" },
  "A place where peasant Satyagraha was organised": { coords: [144, 445], name: "Kheda" },
  "A place where cotton mill Satyagraha was organised": { coords: [129, 435], name: "Ahmedabad" },
  "A place where Jallianwala Bagh massacre took place": { coords: [194, 165], name: "Amritsar" },
  "A place which marked the start of the Civil Disobedience Movement": { coords: [129, 482], name: "Dandi" },
  "A place where the Salt March began": { coords: [129, 435], name: "Sabarmati Ashram in Ahmedabad" },

	// Dams

  "A Hydroelectrical project on the Chenab River": { coords: [195, 111], name: "Salal" },
  "A massive multi-purpose project located on the Sutlej River Basin": { coords: [237, 178], name: "Bhakra Nangal" },
  "The highest dam in India, located on the Bhagirathi River": { coords: [284, 210], name: "Tehri" },
  "A major dam constructed on the Chambal River": { coords: [204, 362], name: "Rana Pratap Sagar" },
  "A multi-purpose project on the Narmada River providing water to neighbouring states": { coords: [142, 470], name: "Sardar Sarovar" },
  "The longest dam in India, built across the Mahanadi River Basin": { coords: [436, 485], name: "Hirakud" },
  "A large masonry dam built across the Krishna River": { coords: [328, 611], name: "Nagarjuna Sagar" },
  "A multi-purpose project on the Tungabhadra River, a tributary of the Krishna River": { coords: [229, 670], name: "Tungabhadra" },

	// Airports

  "International Airport in Punjab": { coords: [186, 167], name: "Sri Guru Ram Das Ji" },
  "International Airport in Delhi": { coords: [251, 263], name: "Indira Gandhi" },
  "International Airport in Mumbai": { coords: [129, 546], name: "Chhatrapati Shivaji Maharaj" },
  "International Airport in Chennai": { coords: [331, 727], name: "Meenam Bakkam" },
  "International Airport in Kolkata": { coords: [553, 445], name: "Netaji Subhash Chandra Bose" },
  "International Airport in Hyderabad": { coords: [291, 609], name: "Rajiv Gandhi" },

	// Iron Ore Mines

    "Iron Ore Mine ~ Mayurbhanj": [506, 473],
    "Iron Ore Mine ~ Bailadila": [361, 563],
    "Iron Ore Mine ~ Durg": [369, 500],
    "Iron Ore Mine ~ Bellary": [232, 674],
    "Iron Ore Mine ~ Kudremukh": [196, 721],

	// Coal Mines

    "Coal Mine ~ Raniganj": [540, 404],
    "Coal Mine ~ Bokaro": [471, 401],
    "Coal Mine ~ Talcher": [470, 493],
    "Coal Mine ~ Neyveli": [305, 750],

	// Oil Fields

    "Oil Field ~ Digboi": [736, 300],
    "Oil Field ~ Naharkatiya": [709, 314],
    "Oil Field ~ Mumbai High": [98, 571],
    "Oil Field ~ Bassien": [91, 538],
    "Oil Field ~ Ankaleshwar": [126, 484],
    "Oil Field ~ Kalol": [139, 448],
  
	// Power Plants

    "Thermal power plant ~ Namrup": [733, 292],
    "Thermal power plant ~ Ramagundam": [312, 565],
    "Thermal power plant ~ Singrauli": [395, 395],
    "Nuclear power plant ~ Narora": [284, 284],
    "Nuclear power plant ~ Kakrapara": [129, 467],
    "Nuclear power plant ~ Tarapur": [132, 532],
    "Nuclear power plant ~ Kalpakkam": [324, 734],

	// Software Technology Park
	
  "Software technology park ~ Noida": [262, 270],
  "Software technology park ~ Gandhinagar": [119, 432],
  "Software technology park ~ Mumbai": [135, 548],
  "Software technology park ~ Pune": [148, 561],
  "Software technology park ~ Hyderabad": [274, 603],
  "Software technology park ~ Bengaluru": [252, 724],
  "Software technology park ~ Chennai": [333, 725],
  "Software technology park ~ Thiruvananthapuram": [242, 858],

	// Iron and Steel Plants

  "Iron and Steel plant ~ Durgapur": [550, 423],
  "Iron and Steel plant ~ Bokaro": [494, 401],
  "Iron and Steel plant ~ Jamshedpur": [498, 441],
  "Iron and Steel plant ~ Bhilai": [363, 506],
  "Iron and Steel plant ~ Vijayanagar": [226, 648],
  "Iron and Steel plant ~ Salem": [274, 774],

	// Cotton Textile Industries

  "Cotton Textile industry ~ Mumbai": [130, 547],
  "Cotton Textile industry ~ Indore": [195, 448],
  "Cotton Textile industry ~ Surat": [140, 486],
  "Cotton Textile industry ~ Kanpur": [327, 346],
  "Cotton Textile industry ~ Coimbatore": [245, 791],

	// Seaports

  "Natural Seaport ~ Kandla": [48, 426],
  "Biggest Natural Seaport ~ Mumbai": [131, 545],
  "Natural Seaport ~ Marmagao": [158, 666],
  "Natural Seaport ~ Kochchi": [220, 807],
  "Artificial Seaport ~ Tuticorin": [271, 853],
  "Oldest Artificial Seaport ~ Chennai": [331, 730],
  "Landlocked Natural Seaport ~ Visakhapatnam": [398, 598],
  "Artificial Seaport ~ Paradwip": [513, 507],
  "Artificial Riverine Seaport ~ Haldia": [547, 446],

	// Agriculture Producers States

  "Mark the largest producer state of Sugarcane": [341, 311],
  "Mark the largest producer state of Tea": [680, 324],
  "Mark the largest producer state of Coffee": [211, 682],
  "Mark the largest producer state of Rubber": [227, 805],
  "Mark the largest producer state of Jute": [542, 429],
  "Mark the largest producer state of Cotton": [193, 539],
  "Mark the largest producer state of Wheat": [222, 227],
  "Mark the largest producer state of Rice": [542, 429],

};

document.addEventListener("DOMContentLoaded", function () {
  let mapItems = { ...LOCATION_DATA };
  let nitemsDone = 0;
  let score = 0;
  let currentKey = null;
  let lastClick = null;
  let userDot = null;

  const img = document.getElementById("imageMap");
  const container = document.getElementById("mapContainer");
  const btn = document.getElementById("submitBtn");
  const head = document.getElementById("markHeading");
  const scoreDisp = document.getElementById("scorePanel");

  const modal = document.getElementById("modalOverlay");
  const modalInput = document.getElementById("modalInput");
  const modalSubmit = document.getElementById("modalSubmitBtn");
  const modalFeedback = document.getElementById("modalFeedback");

  const ANSWER_SCREEN_TIME_MS = 2500;

  function getTolerancePx() {
    const w = img.clientWidth || 1;
    const base = w * 0.07; 
    const minPx = 36;
    const maxPx = 80;
    return Math.max(minPx, Math.min(maxPx, base));
  }

  function naturalToScreen([nx, ny]) {
    const scaleX = img.clientWidth / img.naturalWidth;
    const scaleY = img.clientHeight / img.naturalHeight;
    return [nx * scaleX, ny * scaleY];
  }

  function getClickScreenCoords(e) {
    const rect = img.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  function setUserDot(x, y) {
    if (userDot) userDot.remove();
    userDot = document.createElement("div");
    userDot.className = "dot";
    userDot.style.left = img.offsetLeft + x + "px";
    userDot.style.top = img.offsetTop + y + "px";
    container.appendChild(userDot);
  }

  function setAnswerDot(x, y) {
    const ansDot = document.createElement("div");
    ansDot.className = "ansDot";
    ansDot.style.left = img.offsetLeft + x + "px";
    ansDot.style.top = img.offsetTop + y + "px";
    container.appendChild(ansDot);
    return ansDot;
  }

  function setHeadingForKey(key) {
    const t = (key || "").trim();
    head.textContent = /^mark\b/i.test(t) ? t : "Mark " + t;
  }

  function pickNext() {
    const keys = Object.keys(mapItems);
    currentKey = keys[Math.floor(Math.random() * keys.length)];
    setHeadingForKey(currentKey);
  }

  function clearUserAnswer() {
    lastClick = null;
    if (userDot) userDot.remove();
    userDot = null;
  }

  function finishOrNext() {
    if (Object.keys(mapItems).length === 0) {
      btn.innerHTML = "RESTART";
      head.textContent = "Great job! You've finished all locations.";
      return;
    }
    pickNext();
  }

  function showNamingModal(correctName, ansDot) {
    btn.disabled = true;
    modal.classList.remove("hidden");
    modalInput.value = "";
    modalFeedback.textContent = "";
    modalInput.focus();

    modalSubmit.onclick = function() {
      const userGuess = modalInput.value.trim().toLowerCase();
      if (userGuess === correctName.toLowerCase()) {
        modalFeedback.style.color = "green";
        modalFeedback.textContent = "Correct Name!";
      } else {
        modalFeedback.style.color = "red";
        modalFeedback.textContent = `Incorrect! It was ${correctName}`;
      }
      setTimeout(() => {
        modal.classList.add("hidden");
        proceedToNext(ansDot);
      }, 1500);
    };
  }

  function proceedToNext(ansDot) {
    btn.disabled = true;
    setTimeout(() => {
      btn.disabled = false;
      ansDot.remove();
      if (userDot) userDot.remove();
      delete mapItems[currentKey];
      clearUserAnswer();
      finishOrNext();
    }, ANSWER_SCREEN_TIME_MS);
  }

  // --- Main Click Event ---
  btn.addEventListener("click", function () {
    if (btn.innerHTML === "RESTART") {
      location.reload();
      return;
    }

    if (btn.innerHTML === "START") {
      btn.innerHTML = "SUBMIT";
      pickNext();
      return;
    }

    nitemsDone++;
    const itemData = LOCATION_DATA[currentKey];
    const targetCoords = Array.isArray(itemData) ? itemData : itemData.coords;
    const [correctX, correctY] = naturalToScreen(targetCoords);
    const ansDot = setAnswerDot(correctX, correctY);

    let isCorrectLocation = false;
    if (lastClick) {
      const [ux, uy] = lastClick;
      const dist = Math.sqrt((ux - correctX) ** 2 + (uy - correctY) ** 2);
      if (dist <= getTolerancePx()) isCorrectLocation = true;
    }

    if (isCorrectLocation) {
      score++;
      scoreDisp.innerHTML = `✅ Score: ${score}/${nitemsDone}`;
      if (itemData.name) {
        showNamingModal(itemData.name, ansDot);
        return;
      }
    } else {
      scoreDisp.innerHTML = `❌ Score: ${score}/${nitemsDone}`;
    }

    proceedToNext(ansDot);
  });

  // --- Hover and Click Listeners ---
  const hoverRing = document.createElement("div");
  hoverRing.className = "hoverRing";
  hoverRing.style.display = "none";
  container.appendChild(hoverRing);

  img.addEventListener("mousemove", function (e) {
    if (btn.innerHTML === "START" || btn.innerHTML === "RESTART" || btn.disabled) return;
    if (!e.shiftKey) {
      hoverRing.style.display = "none";
      return;
    }
    const [sx, sy] = getClickScreenCoords(e);
    const tolerance = getTolerancePx();
    hoverRing.style.width = tolerance * 2 + "px";
    hoverRing.style.height = tolerance * 2 + "px";
    hoverRing.style.left = img.offsetLeft + sx + "px";
    hoverRing.style.top = img.offsetTop + sy + "px";
    hoverRing.style.display = "block";
  });

  img.addEventListener("mouseleave", () => hoverRing.style.display = "none");

  img.addEventListener("click", function (e) {
    if (btn.innerHTML === "START" || btn.disabled) return;
    const [x, y] = getClickScreenCoords(e);
    lastClick = [x, y];
    setUserDot(x, y);
  });
});
