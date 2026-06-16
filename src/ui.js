(function () {
  "use strict";

  function renderHud(gameState) {
    const resourceGrid = document.querySelector("#resource-grid");

    if (!resourceGrid) {
      return;
    }

    const hudItems = [
      ["Geld", `${gameState.money} EUR`],
      ["Holz", gameState.resources.wood],
      ["Stein", gameState.resources.stone],
      ["Metall", gameState.resources.metal],
      ["Hausstufe", gameState.buildings.mainHouse.level]
    ];

    resourceGrid.innerHTML = hudItems
      .map(([label, value]) => `<div class="resource-card"><strong>${label}:</strong> ${value}</div>`)
      .join("");
  }

  function renderStatus(message) {
    const status = document.querySelector("#app-status");
    const messageLine = document.querySelector("#message-line");

    if (status) {
      status.textContent = "Bereit";
    }

    if (messageLine) {
      messageLine.textContent = message;
    }
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.ui = {
    renderHud,
    renderStatus
  };
})();
