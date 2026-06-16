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

  const marketMeta = {
    mainMarket: {
      label: "Markt",
      description: "Verkauft Rohstoffe gegen Startkapital.",
      sellableResources: ["wood", "stone"],
      sellPrices: {
        wood: 2,
        stone: 3
      },
      sellAmounts: [1, 5, 10, "all"]
    }
  };

  const initialState = {
    version: "0.0.9",
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
    return levels.find((definition) => definition.level === level) || null;
  }

  function getCurrentBuildingLevel(gameState, buildingId) {
    const levels = buildingMeta[buildingId]?.levels || [];
    return getBuildingLevelDefinition(buildingId, getBuildingLevel(gameState, buildingId)) || levels[0] || null;
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

  function subtractResource(gameState, resourceId, amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      return getResourceAmount(gameState, resourceId);
    }

    if (resourceId === "money") {
      gameState.money = Math.max(0, gameState.money - amount);
      return gameState.money;
    }

    if (!Object.prototype.hasOwnProperty.call(gameState.resources, resourceId)) {
      return 0;
    }

    gameState.resources[resourceId] = Math.max(0, gameState.resources[resourceId] - amount);
    return gameState.resources[resourceId];
  }

  function formatCostText(entries, amountKey) {
    return entries
      .map((entry) => {
        const meta = resourceMeta[entry.resourceId];
        const amount = entry[amountKey] ?? entry.amount;
        return `${amount}${meta.unit ? ` ${meta.unit}` : ""} ${meta.label}`;
      })
      .join(", ");
  }

  function spendCost(gameState, cost) {
    const missing = getMissingCost(gameState, cost);

    if (missing.length > 0) {
      return {
        success: false,
        missing
      };
    }

    const spent = getCostEntries(cost);
    spent.forEach((entry) => subtractResource(gameState, entry.resourceId, entry.amount));

    return {
      success: true,
      spent
    };
  }

  function upgradeBuilding(gameState, buildingId) {
    const currentLevel = getCurrentBuildingLevel(gameState, buildingId);
    const nextLevel = getNextBuildingLevel(gameState, buildingId);

    if (!nextLevel) {
      gameState.message = `${currentLevel.name} ist bereits voll ausgebaut.`;

      return {
        success: false,
        maxLevel: true,
        buildingId,
        currentLevel,
        message: gameState.message
      };
    }

    const payment = spendCost(gameState, nextLevel.cost);

    if (!payment.success) {
      gameState.message = `Ausbau nicht möglich. Fehlt: ${formatCostText(payment.missing, "missing")}.`;

      return {
        success: false,
        missing: payment.missing,
        buildingId,
        currentLevel,
        nextLevel,
        message: gameState.message
      };
    }

    if (!gameState.buildings[buildingId]) {
      gameState.buildings[buildingId] = {
        level: 0
      };
    }

    gameState.buildings[buildingId].level = nextLevel.level;
    gameState.message = `${nextLevel.name} gebaut. Verbrauch: ${formatCostText(payment.spent, "amount")}.`;

    return {
      success: true,
      buildingId,
      previousLevel: currentLevel,
      currentLevel: nextLevel,
      spent: payment.spent,
      message: gameState.message
    };
  }

  function getMarketSellPrice(resourceId) {
    return marketMeta.mainMarket.sellPrices[resourceId] ?? 0;
  }

  function getSellQuantity(gameState, resourceId, requestedAmount) {
    const available = getResourceAmount(gameState, resourceId);

    if (requestedAmount === "all") {
      return available;
    }

    return Number(requestedAmount);
  }

  function canSellResource(gameState, resourceId, requestedAmount) {
    const available = getResourceAmount(gameState, resourceId);
    const quantity = getSellQuantity(gameState, resourceId, requestedAmount);
    const price = getMarketSellPrice(resourceId);

    return price > 0 && Number.isFinite(quantity) && quantity > 0 && available >= quantity;
  }

  function sellResource(gameState, resourceId, requestedAmount) {
    const meta = resourceMeta[resourceId];
    const price = getMarketSellPrice(resourceId);
    const available = getResourceAmount(gameState, resourceId);
    const quantity = getSellQuantity(gameState, resourceId, requestedAmount);

    if (!meta || price <= 0) {
      gameState.message = "Diese Ressource kann hier nicht verkauft werden.";

      return {
        success: false,
        message: gameState.message
      };
    }

    if (!Number.isFinite(quantity) || quantity <= 0 || available <= 0) {
      gameState.message = `Kein ${meta.label} zum Verkaufen vorhanden.`;

      return {
        success: false,
        resourceId,
        message: gameState.message
      };
    }

    if (available < quantity) {
      gameState.message = `Nicht genug ${meta.label}. Verfügbar: ${available}, benötigt: ${quantity}.`;

      return {
        success: false,
        resourceId,
        requestedAmount,
        available,
        message: gameState.message
      };
    }

    const revenue = quantity * price;
    subtractResource(gameState, resourceId, quantity);
    addResource(gameState, "money", revenue);
    gameState.message = `${quantity} ${meta.label} verkauft. +${revenue} EUR.`;

    return {
      success: true,
      resourceId,
      quantity,
      price,
      revenue,
      message: gameState.message
    };
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
    marketMeta,
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
    subtractResource,
    spendCost,
    upgradeBuilding,
    getMarketSellPrice,
    getSellQuantity,
    canSellResource,
    sellResource,
    ensureResourceNode,
    consumeResourceNode,
    getResourceNodeState,
    selectObject
  };
})();
