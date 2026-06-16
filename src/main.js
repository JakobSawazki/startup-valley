(function () {
  "use strict";

  function init() {
    const app = window.StartupValley;
    const gameState = app.state.gameState;

    app.ui.renderHud(gameState);
    app.ui.renderStatus(gameState.message);
  }

  window.addEventListener("DOMContentLoaded", init);
})();
