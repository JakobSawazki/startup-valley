(function () {
  "use strict";

  function init() {
    const app = window.StartupValley;
    const gameState = app.state.gameState;
    const world = document.querySelector("#game-world");

    app.ui.renderHud(gameState);
    app.ui.renderStatus(gameState.message);
    app.world.renderWorld(world, (object) => {
      app.state.selectObject(gameState, object.id);
      gameState.message = object.description;

      console.log(`Startup Valley Objekt gewählt: ${object.name} (${object.id})`);
      app.ui.renderObjectMessage(object);
    });
  }

  window.addEventListener("DOMContentLoaded", init);
})();
