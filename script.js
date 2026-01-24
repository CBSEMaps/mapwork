const LOCATION_DATA = {
  "The place where a session of INC was held in September 1920": [560, 445],
  "The place where a session of INC was held in December 1920": [285,491],
  "The place where a session of INC was held in 1927": [331, 728],
  "A place where peasant struggled against the Indigo Plantation": [459, 331],
  "A place where peasant Satyagraha was organised": [144, 445],
  "A place where cotton mill Satyagraha was organised": [129, 435],
  "A place where Jallianwala Bagh massacre took place": [194, 165],
  "A place which marked the start of the Civil Disobedience Movement": [129, 482],
  "A place where the Salt March began": [129, 435],

  "A Hydroelectrical project on the Chenab River": [195, 111],
  "A massive multi-purpose project located on the Sutlej River Basin": [237, 178],
  "The highest dam in India, located on the Bhagirathi River": [284, 210],
  "A major dam constructed on the Chambal River": [204, 362],
  "A multi-purpose project on the Narmada River providing water to neighbouring states": [142, 470],
  "The longest dam in India, built across the Mahanadi River Basin": [436, 485],
  "A large masonry dam built across the Krishna River": [328, 611],
  "A multi-purpose project on the Tungabhadra River, a tributary of the Krishna River": [229, 670],

  "Mark the largest producer state of Sugarcane": [341, 311],
  "Mark the largest producer state of Tea": [680, 324],
  "Mark the largest producer state of Coffee": [211, 682],
  "Mark the largest producer state of Rubber": [227, 805],
  "Mark the largest producer state of Jute": [542, 429],
  "Mark the largest producer state of Cotton": [193, 539], // ✅ fixed
  "Mark the largest producer state of Wheat": [222, 227],
  "Mark the largest producer state of Rice": [542, 429],

  "Mark an iron ore mine which is a part of the Odisha-Jharkhand belt and contains high-grade hematite ore": [506, 473],
  "Mark an iron ore mine that resemble the \"hump of an ox\" and produce super high-grade hematite for export": [361, 563],
  "Mark an iron ore mine that belongs to the Durg-Bastar-Chandrapur belt, providing iron for the Bhilai Steel Plant": [369, 500],
  "Mark an iron ore mine which has large reserves and is part of the Bellary-Chitradurga-Chikkamagaluru-Tumakuru belt": [232, 674],
  "Mark an iron ore mine which resemble the face of a horse and located in the western ghats": [196, 721],
  "Mark a coal ore mine which is the oldest coalfield in India and is part of the Damodar Valley belt": [540, 404],
  "Mark a coal ore mine which is an important coalfield providing high-quality metallurgical coal for steel plants": [471, 401],
  "Mark a coal ore mine which is a major field used for thermal power production and the second-largest reserves in India": [470, 493],
  "mark a coal ore mine which is famous for Lignite (low-grade brown coal) used primarily for electricity generation": [305, 750],
  "Mark an oil field which is the oldest oil field in India where oil was first discovered": [736, 300],
  "Mark an oil field which is an important oil-producing area in the Brahmaputra valley": [709, 314],
  "Mark an oil field which is Offshore field in the Arabian Sea and is India's largest oil-producing field": [98, 571],
  "Mark an oil field Offshore field in the Arabian Sea; it holds massive reserves of natural gas": [91, 538],
  "Mark an oil field which is the most important on-shore oil field of the state(Gujarat)": [126, 484],
  "Mark an oil field which is another significant inland oil field in the western belt(Gujarat)": [139, 448],
  "Thermal power plant ~ Namrup": [733, 292],
  "Thermal power plant ~ Ramagundam": [312, 565],
  "Thermal power plant ~ Singrauli": [395, 395],
  "Nuclear power plant ~ Narora": [284, 284],
  "Nuclear power plant ~ Kakrapara": [129, 467],
  "Nuclear power plant ~ Tarapur": [132, 532],
  "Nuclear power plant ~ Kalpakkam": [324, 734],

  "Software technology park ~ Noida": [262, 270],
  "Software technology park ~ Gandhinagar": [119, 432],
  "Software technology park ~ Mumbai": [135, 548],
  "Software technology park ~ Pune": [148, 561],
  "Software technology park ~ Hyderabad": [274, 603],
  "Software technology park ~ Bengaluru": [252, 724],
  "Software technology park ~ Chennai": [333, 725],
  "Software technology park ~ Thiruvananthapuram": [242, 858],
  "Iron and Steel plant ~ Durgapur": [550, 423],
  "Iron and Steel plant ~ Bokaro": [494, 401],
  "Iron and Steel plant ~ Jamshedpur": [498, 441],
  "Iron and Steel plant ~ Bhilai": [363, 506],
  "Iron and Steel plant ~ Vijayanagar": [226, 648],
  "Iron and Steel plant ~ Salem": [274, 774],
  "Cotton Textile industry ~ Mumbai": [130, 547],
  "Cotton Textile industry ~ Indore": [195, 448],
  "Cotton Textile industry ~ Surat": [140, 486],
  "Cotton Textile industry ~ Kanpur": [327, 346],
  "Cotton Textile industry ~ Coimbatore": [245, 791],

  "Natural Seaport ~ Kandla": [48, 426],
  "Biggest Natural Seaport ~ Mumbai": [131, 545],
  "Natural Seaport ~ Marmagao": [158, 666],
  "Natural Seaport ~ Kochchi": [220, 807],
  "Artificial Seaport ~ Tuticorin": [271, 853],
  "Oldest Artificial Seaport ~ Chennai": [331, 730],
  "Landlocked Natural Seaport ~ Visakhapatnam": [398, 598],
  "Artificial Seaport ~ Paradwip": [513, 507],
  "Artificial Riverine Seaport ~ Haldia": [547, 446],

  "International Airport in Punjab (Raja Sansi-Sri Guru Ram Das Jee)": [186, 167],
  "International Airport in Delhi (Indira Gandhi)": [251, 263],
  "International Airport in Mumbai (Chhatrapati Shivaji Maharaj)": [129, 546],
  "International Airport in Chennai (Meenam Bakkam)": [331, 727],
  "International Airport in Kolkata (Netaji Subhash Chandra Bose)": [553, 445],
  "International Airport in Hyderabad (Rajiv Gandhi)": [291, 609]
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

  const ANSWER_SCREEN_TIME_MS = 2500;

  // ✅ lenient tolerance
  function getTolerancePx() {
    const w = img.clientWidth || 1;
    const base = w * 0.035;
    const minPx = 18;
    const maxPx = 40;
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

  // ✅ Fix "Mark Mark..."
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

  // ✅ Hover ring (SHIFT only)
  const hoverRing = document.createElement("div");
  hoverRing.className = "hoverRing";
  hoverRing.style.display = "none";
  container.appendChild(hoverRing);

  function showHoverRingAt(sx, sy) {
    const tolerance = getTolerancePx();
    hoverRing.style.width = tolerance * 2 + "px";
    hoverRing.style.height = tolerance * 2 + "px";
    hoverRing.style.left = img.offsetLeft + sx + "px";
    hoverRing.style.top = img.offsetTop + sy + "px";
    hoverRing.style.display = "block";
  }

  function hideHoverRing() {
    hoverRing.style.display = "none";
  }

  img.addEventListener("mousemove", function (e) {
    if (btn.innerHTML === "START" || btn.innerHTML === "RESTART") return;
    if (btn.disabled) return;

    // ✅ only show when SHIFT is held
    if (!e.shiftKey) {
      hideHoverRing();
      return;
    }

    const [sx, sy] = getClickScreenCoords(e);
    showHoverRingAt(sx, sy);
  });

  img.addEventListener("mouseleave", hideHoverRing);

  img.addEventListener("click", function (e) {
    if (btn.innerHTML === "START" || btn.disabled) return;

    const [x, y] = getClickScreenCoords(e);
    lastClick = [x, y];
    setUserDot(x, y);
  });

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

    // Always show correct answer dot (even if no click)
    const [correctX, correctY] = naturalToScreen(LOCATION_DATA[currentKey]);
    const ansDot = setAnswerDot(correctX, correctY);

    if (!lastClick) {
      scoreDisp.innerHTML = `❌ No answer! Score: ${score}/${nitemsDone}`;
    } else {
      const [ux, uy] = lastClick;
      const dist = Math.sqrt((ux - correctX) ** 2 + (uy - correctY) ** 2);
      const tolerance = getTolerancePx();

      if (dist <= tolerance) {
        score++;
        scoreDisp.innerHTML = `✅ Score: ${score}/${nitemsDone}`;
      } else {
        scoreDisp.innerHTML = `❌ Score: ${score}/${nitemsDone}`;
      }
    }

    btn.disabled = true;
    hideHoverRing();

    setTimeout(() => {
      btn.disabled = false;

      ansDot.remove();
      delete mapItems[currentKey];

      clearUserAnswer();
      finishOrNext();
    }, ANSWER_SCREEN_TIME_MS);
  });
});
