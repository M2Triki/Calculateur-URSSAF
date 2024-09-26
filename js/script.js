document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    let purchasePrice =
      parseFloat(document.getElementById("purchasePrice").value) || 0;
    let sellingPrice =
      parseFloat(document.getElementById("sellingPrice").value) || 0;
    let deliveryCollected =
      parseFloat(document.getElementById("deliveryCollected").value) || 0;
    let deliveryPaid =
      parseFloat(document.getElementById("deliveryPaid").value) || 0;
    let urssafRate = 13.4 / 100;

    // Calcul du bénéfice brut
    let grossProfit =
      sellingPrice - purchasePrice + (deliveryCollected - deliveryPaid);

    // Montant URSSAF
    let urssafAmount = grossProfit * urssafRate;

    // Bénéfice net
    let netProfit = grossProfit - urssafAmount;

    // Affichage des résultats
    document.getElementById("result").innerHTML = `
        <p>Bénéfice net final: <strong>${netProfit.toFixed(2)} €</strong></p>
        <p>Montant URSSAF (13.40%): <strong>${urssafAmount.toFixed(
          2
        )} €</strong></p>
    `;
  });
