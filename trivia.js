const cafeDatabase = {
    "souffle": ["Fuglen", "Komeda's Coffee", "A Happy Pancake", "Ivorish", "Cafe Gram"],
    "fluffy": ["A Happy Pancake", "Cafe Gram", "Komeda's Coffee"],
    "espresso": ["Fuglen", "Starbucks Reserve Roastery Tokyo", "Glitch Coffee", "Streamer Coffee Company"],
    "latte": ["Doutor", "Starbucks", "Blue Bottle Coffee", "Lattest", "Onibus Coffee"],
    "black": ["No Coffee No Workee", "Bear Pond Espresso", "Cafe de l'Ambre", "Sarutahiko Coffee"],
    "drip": ["No Coffee No Workee", "Switch Coffee", "Verve Coffee", "Café Kitsuné"],
    "matcha": ["Nana's Green Tea", "Suzukien", "Tsujiri", "Itohkyuemon"],
    "cold brew": ["Blue Bottle Coffee", "Onibus Coffee", "Fuglen"],
    "mocha": ["Doutor", "Tully's Coffee", "Ueshima Coffee House"],
    "pour over": ["Glitch Coffee", "Verve Coffee", "Onibus Coffee"]
  };

  function findCafe() {
    const input = document.getElementById("item").value.toLowerCase();
    let found = false;
    let result = "";

    for (let keyword in cafeDatabase) {
      if (input.includes(keyword)) {
        const cafes = cafeDatabase[keyword];
        const randomCafe = cafes[Math.floor(Math.random() * cafes.length)];
        result = `You should try: <b>${randomCafe}</b> for your "${keyword}" craving!`;
        found = true;
        break;
      }
    }

    if (!found) {
      result = "No matching cafe found. Try a different item like 'souffle', 'latte', or 'espresso'.";
    }

    document.getElementById("cafeResult").innerHTML = result;
  }

  function clearCafe() {
    document.getElementById("item").value = "";
    document.getElementById("cafeResult").innerHTML = "";
  }
