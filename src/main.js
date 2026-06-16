(function () {
  "use strict";

  function init() {
    const app = window.StartupValley;
    const gameState = app.state.gameState;
    const world = document.querySelector("#game-world");

    function renderWorld() {
      app.world.renderWorld(world, gameState, handleWorldObject);
    }

    function getWorldObjectById(objectId) {
      return app.world.worldObjects.find((worldObject) => worldObject.id === objectId) || null;
    }

    function getBuildingObject(buildingId) {
      return app.world.worldObjects.find((worldObject) => {
        return worldObject.type === "building" && (worldObject.buildingId || "mainHouse") === buildingId;
      }) || null;
    }

    function renderObjectPanel(object, actionResult) {
      app.ui.renderObjectMessage(object, actionResult, gameState, {
        onUpgradeBuilding: handleUpgradeBuilding
      });
    }

    function handleUpgradeBuilding(buildingId) {
      const upgradeResult = app.state.upgradeBuilding(gameState, buildingId);
      const buildingObject = getBuildingObject(buildingId);

      app.ui.renderHud(gameState);
      renderWorld();

      if (buildingObject) {
        renderObjectPanel(buildingObject, upgradeResult);
      }

      return upgradeResult;
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
      renderObjectPanel(getWorldObjectById(object.id) || object, actionResult);
    }

    app.ui.renderHud(gameState);
    app.ui.renderStatus(gameState.message);
    renderWorld();
  }

  window.addEventListener("DOMContentLoaded", init);
})();
