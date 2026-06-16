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

    const depletion = appState.consumeResourceNode(gameState, object.id, object.maxUses);

    if (!depletion.success) {
      gameState.message = `${object.name} ist erschöpft.`;

      return {
        success: false,
        depleted: true,
        message: gameState.message,
        remainingUses: 0,
        maxUses: depletion.nodeState.maxUses
      };
    }

    const newAmount = appState.addResource(gameState, object.resource, object.amount);
    const meta = appState.resourceMeta[object.resource];
    const label = meta ? meta.label : object.resource;
    const gainText = `+${object.amount} ${label}`;
    const remainingText = depletion.nodeState.remainingUses > 0
      ? `${depletion.nodeState.remainingUses}/${depletion.nodeState.maxUses} Abbaupunkte übrig.`
      : "Quelle erschöpft.";

    gameState.message = `${gainText} gesammelt. Bestand: ${newAmount}. ${remainingText}`;

    return {
      success: true,
      resourceId: object.resource,
      amount: object.amount,
      gainText,
      message: gameState.message,
      newAmount,
      remainingUses: depletion.nodeState.remainingUses,
      maxUses: depletion.nodeState.maxUses,
      depleted: depletion.nodeState.remainingUses <= 0
    };
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.resources = {
    collectResourceNode
  };
})();
