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
      description: "Aktueller Ausbaufortschritt des ersten Firmengebäudes.",
      levels: [
        {
          level: 0,
          name: "Bauplatz",
          status: "Freies Grundstück",
          image: "assets/buildings/house_00_plot.png",
          description: "Der Standort ist vorbereitet, aber noch nicht bebaut."
        },
        {
          level: 1,
          name: "Fundament",
          status: "Erste Baustufe",
          image: "assets/buildings/house_01_foundation.png",
          description: "Ein stabiles Fundament für das künftige Firmengebäude.",
          cost: {
            wood: 10,
            stone: 20
          }
        },
        {
          level: 2,
          name: "Rohbau",
          status: "Zweite Baustufe",
          image: "assets/buildings/house_02_frame.png",
          description: "Der sichtbare Rohbau mit tragender Struktur.",
          cost: {
            wood: 30,
            stone: 40,
            metal: 5
          }
        },
        {
          level: 3,
          name: "Einfaches Firmengebäude",
          status: "Dritte Baustufe",
          image: "assets/buildings/house_03_finished.png",
          description: "Ein kleines nutzbares Firmengebäude für Startup Valley.",
          cost: {
            money: 100,
            wood: 50,
            stone: 30,
            metal: 10
          }
        }
      ]
    }
  };

  const initialState = {
    version: "0.0.7",
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

  function getBuildingLevel(gameState, buildingId) {
    return gameState.buildings[buildingId]?.level ?? 0;
  }

  function getHouseLevel(gameState) {
    return getBuildingLevel(gameState, "mainHouse");
  }

  function getBuildingLevelDefinition(buildingId, level) {
    const levels = buildingMeta[buildingId]?.levels || [];
    return levels.find((definition) => definition.level === level) || levels[0] || null;
  }

  function getCurrentBuildingLevel(gameState, buildingId) {
    return getBuildingLevelDefinition(buildingId, getBuildingLevel(gameState, buildingId));
  }

  function getNextBuildingLevel(gameState, buildingId) {
    return getBuildingLevelDefinition(buildingId, getBuildingLevel(gameState, buildingId) + 1);
  }

  function getCostEntries(cost) {
    if (!cost) {
      return [];
    }

    return resourceOrder
      .filter((resourceId) => Number.isFinite(cost[resourceId]) && cost[resourceId] > 0)
      .map((resourceId) => ({
        resourceId,
        amount: cost[resourceId]
      }));
  }

  function getMissingCost(gameState, cost) {
    return getCostEntries(cost)
      .map((entry) => {
        const available = getResourceAmount(gameState, entry.resourceId);
        const missing = Math.max(0, entry.amount - available);

        return {
          ...entry,
          available,
          missing
        };
      })
      .filter((entry) => entry.missing > 0);
  }

  function canAffordCost(gameState, cost) {
    return getMissingCost(gameState, cost).length === 0;
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
    getBuildingLevel,
    getHouseLevel,
    getBuildingLevelDefinition,
    getCurrentBuildingLevel,
    getNextBuildingLevel,
    getCostEntries,
    getMissingCost,
    canAffordCost,
    addResource,
    ensureResourceNode,
    consumeResourceNode,
    getResourceNodeState,
    selectObject
  };
})();
