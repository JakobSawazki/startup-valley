(function () {
  "use strict";

  const worldObjects = [
    {
      id: "tree_01",
      type: "resource_node",
      name: "Baum",
      description: "Ein hoher Baum am Rand des Startgebiets.",
      resource: "wood",
      amount: 2,
      maxUses: 6,
      actionLabel: "Holz sammeln",
      rewardLabel: "+2 Holz",
      x: 9,
      y: 21,
      width: 11,
      image: "assets/resources/tree_01.png"
    },
    {
      id: "tree_02",
      type: "resource_node",
      name: "Baum",
      description: "Kräftiges Holz für die ersten Bauphasen.",
      resource: "wood",
      amount: 2,
      maxUses: 6,
      actionLabel: "Holz sammeln",
      rewardLabel: "+2 Holz",
      x: 20,
      y: 35,
      width: 10,
      image: "assets/resources/tree_02.png"
    },
    {
      id: "tree_03",
      type: "resource_node",
      name: "Baum",
      description: "Ein weiterer Rohstoffpunkt für Holz.",
      resource: "wood",
      amount: 2,
      maxUses: 6,
      actionLabel: "Holz sammeln",
      rewardLabel: "+2 Holz",
      x: 31,
      y: 19,
      width: 10,
      image: "assets/resources/tree_03.png"
    },
    {
      id: "stone_01",
      type: "resource_node",
      name: "Steinhaufen",
      description: "Steine für Fundament und frühe Ausbauten.",
      resource: "stone",
      amount: 2,
      maxUses: 5,
      actionLabel: "Stein sammeln",
      rewardLabel: "+2 Stein",
      x: 18,
      y: 68,
      width: 12,
      image: "assets/resources/stone_01.png"
    },
    {
      id: "stone_02",
      type: "resource_node",
      name: "Steinhaufen",
      description: "Ein zweiter Steinvorrat nahe dem Weg.",
      resource: "stone",
      amount: 2,
      maxUses: 5,
      actionLabel: "Stein sammeln",
      rewardLabel: "+2 Stein",
      x: 38,
      y: 66,
      width: 12,
      image: "assets/resources/stone_02.png"
    },
    {
      id: "scrap_01",
      type: "resource_node",
      name: "Schrott",
      description: "Ein kleiner Metallfund für spätere Bauphasen.",
      resource: "metal",
      amount: 1,
      maxUses: 4,
      actionLabel: "Metall bergen",
      rewardLabel: "+1 Metall",
      x: 51,
      y: 31,
      width: 11,
      image: "assets/resources/scrap_01.png"
    },
    {
      id: "main_house",
      type: "building",
      name: "Bauplatz",
      buildingId: "mainHouse",
      description: "Hier entsteht später das erste Firmengebäude.",
      x: 61,
      y: 53,
      width: 22,
      image: "assets/buildings/house_00_plot.png"
    },
    {
      id: "market_01",
      type: "market",
      name: "Markt",
      description: "Ein kleiner Marktstand für den kommenden Handel.",
      x: 78,
      y: 24,
      width: 15,
      image: "assets/buildings/market_01.png"
    }
  ];

  function getResourceVisualState(gameState, object) {
    if (object.type !== "resource_node") {
      return null;
    }

    const nodeState = window.StartupValley.state.getResourceNodeState(gameState, object.id, object.maxUses);
    const ratio = nodeState.remainingUses / nodeState.maxUses;
    const scale = nodeState.remainingUses > 0 ? 0.55 + ratio * 0.45 : 0.12;

    return {
      nodeState,
      ratio,
      scale,
      depleted: nodeState.remainingUses <= 0
    };
  }

  function renderWorld(container, gameState, onSelectObject) {
    if (!container) {
      return;
    }

    container.querySelectorAll(".world-object").forEach((node) => node.remove());

    worldObjects.forEach((object) => {
      const button = document.createElement("button");
      button.className = `world-object world-object-${object.type}`;
      button.type = "button";
      button.dataset.objectId = object.id;
      button.style.left = `${object.x}%`;
      button.style.top = `${object.y}%`;
      button.style.width = `${object.width}%`;
      button.style.setProperty("--resource-scale", "1");
      button.setAttribute("aria-label", object.name);
      button.title = object.name;
      button.dataset.tooltip = object.description;

      const resourceVisualState = getResourceVisualState(gameState, object);

      if (resourceVisualState) {
        const { nodeState, scale, depleted } = resourceVisualState;

        button.style.setProperty("--resource-scale", scale.toFixed(3));
        button.dataset.remainingUses = String(nodeState.remainingUses);
        button.dataset.maxUses = String(nodeState.maxUses);
        button.setAttribute("aria-label", `${object.name}, ${nodeState.remainingUses} von ${nodeState.maxUses} Abbaupunkten übrig`);
        button.title = depleted ? `${object.name} ist erschöpft` : `${object.name}: ${nodeState.remainingUses}/${nodeState.maxUses} übrig`;

        if (depleted) {
          button.classList.add("is-depleted");
          button.disabled = true;
          button.tabIndex = -1;
          button.setAttribute("aria-hidden", "true");
        }
      }

      const image = document.createElement("img");
      image.src = object.image;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");

      const label = document.createElement("span");
      label.textContent = object.name;

      button.append(image, label);
      button.addEventListener("click", () => onSelectObject(object));
      container.append(button);
    });
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.world = {
    renderWorld,
    worldObjects
  };
})();
