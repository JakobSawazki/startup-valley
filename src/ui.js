(function () {
  "use strict";

  function renderHud(gameState) {
    const resourceGrid = document.querySelector("#resource-grid");

    if (!resourceGrid) {
      return;
    }

    const hudItems = [
      ["Geld", `${gameState.money} EUR`, "assets/ui/icons/money.png"],
      ["Holz", gameState.resources.wood, "assets/ui/icons/wood.png"],
      ["Stein", gameState.resources.stone, "assets/ui/icons/stone.png"],
      ["Metall", gameState.resources.metal, "assets/ui/icons/metal.png"],
      ["Hausstufe", gameState.buildings.mainHouse.level, "assets/buildings/house_00_plot.png"]
    ];

    resourceGrid.innerHTML = hudItems
      .map(([label, value, icon]) => `
        <div class="resource-card">
          <img src="${icon}" alt="" aria-hidden="true">
          <span><strong>${label}</strong><b>${value}</b></span>
        </div>
      `)
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

  function renderObjectMessage(object) {
    const title = document.querySelector("#context-title");
    const messageLine = document.querySelector("#message-line");

    if (!title || !messageLine) {
      return;
    }

    title.textContent = object.name;
    messageLine.textContent = object.description;
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.ui = {
    renderHud,
    renderStatus,
    renderObjectMessage
  };
})();
