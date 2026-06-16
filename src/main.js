(function () {
  "use strict";

  function init() {
    const app = window.StartupValley;
    const gameState = app.state.gameState;
    const world = document.querySelector("#game-world");

    function renderWorld() {
      app.world.renderWorld(world, gameState, handleWorldObject);
    }

    function handleWorldObject(object) {
      app.state.selectObject(gameState, object.id);
      let actionResult = null;

      if (object.type === "resource_node") {
        actionResult = app.resources.collectResourceNode(gameState, object);
        app.ui.renderHud(gameState);
        renderWorld();

        if (actionResult.success) {
          app.ui.showFloatingText(world, object, actionResult.gainText);
        }
      } else {
        gameState.message = object.description;
      }

      console.log(`Startup Valley Objekt gewählt: ${object.name} (${object.id})`);
      app.ui.renderObjectMessage(object, actionResult);
    }

    app.ui.renderHud(gameState);
    app.ui.renderStatus(gameState.message);
    renderWorld();
  }

  window.addEventListener("DOMContentLoaded", init);
})();
