<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/calculator.css">
  <link rel="stylesheet" href="styles/style.css">
  <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
  <title>Kalkulaator</title>

</head>
<?php
require ("header.php");
?>

<body>
  <div class="layout">
    <div class="layout-primary">
      <div class="content">
        <p class="calculator-title"><strong>KALKULAATOR</strong></p>
        <p style="font-size: 14px;"><strong>NB!</strong> Kalkulaator on ainult informatiivsel eesmärgil ja manustamisannused tuleb alati eraldi välja arvutada ja kvalifitseeritud personali poolt üle kontrollida.</p>
        <div class="calculator-border">
          <div class="calc-text-background">
            <div class="calc-column">

              <div class="select-menu">
                <div class="select-btn">
                  <span class="btn-text">Vali toode</span>
                  <i class="bx bx-chevron-down"></i>
                </div>

                <ul class="options">
                  <li class="option">
                    <img src="product-img/efferalgan.jpg">
                    <span class="leaflet" data-value="efferalgan">Efferalgan, 30 mg/ml suukaudne lahus</span>
                  </li>

                  <li class="option">
                    <img src="product-img/ibustar.jpg">
                    <span class="leaflet" data-value="ibustar">Ibustar, 20mg/ml suukaudne suspensioon</span>
                  </li>
                  <li class="option">
                    <img src="product-img/ibustar-forte.jpg">
                    <span class="leaflet" data-value="ibustar-forte">Ibustar forte, 40 mg/ml suukaudne suspensioon</span>
                  </li>

                  <li class="option">
                    <img src="product-img/nurofen-orange.jpg">
                    <span class="leaflet" data-value="nurofen-orange">Nurofen Forte Orange, 40 mg/ml, suukaudne suspensioon</span>
                  </li>

                  <li class="option">
                    <img src="product-img/nurofen-strawberry.jpg">
                    <span class="leaflet" data-value="nurofen-strawberry">Nurofen Forte Strawberry, 40mg/ml, suukaudne suspensioon</span>
                  </li>

                  <li class="option">
                    <img src="product-img/panadol.jpg">
                    <span class="leaflet" data-value="panadol">Panadol, 24mg/ml suukaudne suspensioon</span>
                  </li>

                </ul>
              </div>
            </div>
            <div class="calc-column">
              <input type="number" name="weight" id="weight" class="input-row" min="5" placeholder="Lapse kaal(kg)" required >
            </div>
            <button onclick="calculateDosage()">ARVUTA</button>
            <div class="calc-column">
              <p id="result"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="js/select-menu.js" defer></script>
  <script src="js/calculator.js" defer></script>
</body>
</html>