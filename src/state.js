(function () {
  "use strict";

  const resourceOrder = ["money", "wood", "stone", "metal"];

  const resourceMeta = {
    money: {
      label: "Geld",
      shortLabel: "Kapital",
      icon: "assets/ui/icons/money.png",
      unit: "EUR",
      description: "Startkapital und Markterlöse. Wird später für Käufe, Ausbau und Arbeiter gebraucht."
    },
    wood: {
      label: "Holz",
      shortLabel: "Baustoff",
      icon: "assets/ui/icons/wood.png",
      unit: "",
      description: "Grundmaterial für frühe Bauphasen und einfache Konstruktionen."
    },
    stone: {
      label: "Stein",
      shortLabel: "Fundament",
      icon: "assets/ui/icons/stone.png",
      unit: "",
      description: "Robustes Material für Fundament und Ausbau des Firmengebäudes."
    },
    metal: {
      label: "Metall",
      shortLabel: "Technik",
      icon: "assets/ui/icons/metal.png",
      unit: "",
      description: "Knappere Ressource für spätere Gebäudestufen, Maschinen und Technik."
    }
  };

  const buildingMeta = {
    mainHouse: {
      label: "Hausstufe",
      shortLabel: "Baufortschritt",
      icon: "assets/buildings/house_00_plot.png",
      description: "Aktueller Ausbaufortschritt des ersten Firmengebäudes."
    }
  };

  const initialState = {
    version: "0.0.6",
    money: 0,
    resources: {
      wood: 0,
      stone: 0,
      metal: 0
    },
    buildings: {
      mainHouse: {
        level: 0
      }
    },
    resourceNodes: {},
    selectedObjectId: null,
    message: "Wähle ein Objekt im Startgebiet aus."
  };

  function cloneState(value) {
    if (typeof structuredClone === "function") {
      return structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
  }

  function getResourceAmount(gameState, resourceId) {
    if (resourceId === "money") {
      return gameState.money;
    }

    return gameState.resources[resourceId] ?? 0;
  }

  function getHouseLevel(gameState) {
    return gameState.buildings.mainHouse.level;
  }

  function addResource(gameState, resourceId, amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      return 0;
    }

    if (resourceId === "money") {
      gameState.money += amount;
      return gameState.money;
    }

    if (!Object.prototype.hasOwnProperty.call(gameState.resources, resourceId)) {
      return 0;
    }

    gameState.resources[resourceId] = Math.max(0, gameState.resources[resourceId] + amount);
    return gameState.resources[resourceId];
  }

  function ensureResourceNode(gameState, objectId, maxUses) {
    if (!gameState.resourceNodes[objectId]) {
      gameState.resourceNodes[objectId] = {
        maxUses,
        remainingUses: maxUses
      };
    }

    return gameState.resourceNodes[objectId];
  }

  function consumeResourceNode(gameState, objectId, maxUses) {
    const nodeState = ensureResourceNode(gameState, objectId, maxUses);

    if (nodeState.remainingUses <= 0) {
      return {
        success: false,
        nodeState
      };
    }

    nodeState.remainingUses = Math.max(0, nodeState.remainingUses - 1);

    return {
      success: true,
      nodeState
    };
  }

  function getResourceNodeState(gameState, objectId, maxUses) {
    return ensureResourceNode(gameState, objectId, maxUses);
  }

  function selectObject(gameState, objectId) {
    gameState.selectedObjectId = objectId;
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.state = {
    gameState: cloneState(initialState),
    initialState,
    resourceOrder,
    resourceMeta,
    buildingMeta,
    getResourceAmount,
    getHouseLevel,
    addResource,
    ensureResourceNode,
    consumeResourceNode,
    getResourceNodeState,
    selectObject
  };
})();
