document.getElementById("calculate").addEventListener("click", function() {
    // Beolvassuk a felhasználó által megadott értékeket
    let entryPrice = parseFloat(document.getElementById("entryPrice").value);
    let targetPrice = parseFloat(document.getElementById("targetPrice").value);
    let stopLossPrice = parseFloat(document.getElementById("stopLossPrice").value);
    let positionType = document.getElementById("positionType").value;

    // Ellenőrizzük, hogy mindhárom érték be van-e töltve
    if (isNaN(entryPrice) || isNaN(targetPrice) || isNaN(stopLossPrice)) {
        alert("Kérlek, töltsd ki az összes mezőt!");
        return;
    }

    let risk, reward, riskReward;

    if (positionType === "long") {
        // Long pozíció
        risk = entryPrice - stopLossPrice;
        reward = targetPrice - entryPrice;
    } else if (positionType === "short") {
        // Short pozíció
        risk = stopLossPrice - entryPrice;
        reward = entryPrice - targetPrice;
    }

    // Kiszámítjuk a Risk/Reward arányt
    riskReward = reward / risk;

    // Megjelenítjük az eredményeket
    document.getElementById("risk").textContent = risk.toFixed(2);
    document.getElementById("reward").textContent = reward.toFixed(2);
    document.getElementById("riskReward").textContent = riskReward.toFixed(2);

    // Eredmények megjelenítése
    document.getElementById("result").classList.remove("hidden");
});
