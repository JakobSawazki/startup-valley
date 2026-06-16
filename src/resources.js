(function () {
  "use strict";

  function collectResourceNode(gameState, object) {
    const appState = window.StartupValley.state;

    if (object.type !== "resource_node" || !object.resource || !object.amount) {
      return {
        success: false,
        message: "Dieses Objekt kann noch nicht gesammelt werden."
      };
    }

    const newAmount = appState.addResource(gameState, object.resource, object.amount);
    const meta = appState.resourceMeta[object.resource];
    const label = meta ? meta.label : object.resource;
    const gainText = `+${object.amount} ${label}`;

    gameState.message = `${gainText} gesammelt. Bestand: ${newAmount}`;

    return {
      success: true,
      resourceId: object.resource,
      amount: object.amount,
      gainText,
      message: gameState.message,
      newAmount
    };
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.resources = {
    collectResourceNode
  };
})();
