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
    version: "0.0.4",
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
    selectObject
  };
})();
