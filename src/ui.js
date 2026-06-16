(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatValue(value, unit) {
    return unit ? `${value} ${unit}` : String(value);
  }

  function renderHud(gameState) {
    const resourceGrid = document.querySelector("#resource-grid");
    const appState = window.StartupValley.state;

    if (!resourceGrid) {
      return;
    }

    const resourceItems = appState.resourceOrder.map((id) => {
      const meta = appState.resourceMeta[id];
      const value = appState.getResourceAmount(gameState, id);

      return {
        id,
        label: meta.label,
        shortLabel: meta.shortLabel,
        icon: meta.icon,
        description: meta.description,
        value: formatValue(value, meta.unit)
      };
    });

    const houseMeta = appState.buildingMeta.mainHouse;
    const hudItems = [
      ...resourceItems,
      {
        id: "mainHouse",
        label: houseMeta.label,
        shortLabel: houseMeta.shortLabel,
        icon: houseMeta.icon,
        description: houseMeta.description,
        value: appState.getHouseLevel(gameState)
      }
    ];

    resourceGrid.innerHTML = hudItems
      .map((item) => `
        <div class="resource-card resource-card-${escapeHtml(item.id)}"
          role="listitem"
          tabindex="0"
          data-tooltip="${escapeHtml(item.description)}"
          aria-label="${escapeHtml(`${item.label}: ${item.value}. ${item.description}`)}">
          <span class="resource-icon-frame">
            <img src="${escapeHtml(item.icon)}" alt="" aria-hidden="true">
          </span>
          <span class="resource-copy">
            <strong>${escapeHtml(item.label)}</strong>
            <b>${escapeHtml(item.value)}</b>
            <small>${escapeHtml(item.shortLabel)}</small>
          </span>
        </div>
      `)
      .join("");
  }

  function renderStatus(message) {
    const status = document.querySelector("#app-status");
    const messageLine = document.querySelector("#message-line");

    if (status) {
      status.textContent = "Bereit";
    }

    if (messageLine) {
      messageLine.textContent = message;
    }
  }

  function getObjectKicker(object) {
    if (object.type === "resource_node") {
      return "Ressourcenquelle";
    }

    if (object.type === "building") {
      return "Bauprojekt";
    }

    if (object.type === "market") {
      return "Handel";
    }

    return "Objekt";
  }

  function getObjectActionText(object) {
    if (object.type === "resource_node") {
      return `Geplante Aktion: ${object.actionLabel} (${object.rewardLabel}).`;
    }

    if (object.type === "building") {
      return "Geplante Aktion: Bauplatz öffnen und Ausbaustufe prüfen.";
    }

    if (object.type === "market") {
      return "Geplante Aktion: Markt öffnen und Ressourcen verkaufen.";
    }

    return "Geplante Aktion: Objekt auswählen.";
  }

  function renderObjectMessage(object, actionResult) {
    const title = document.querySelector("#context-title");
    const messageLine = document.querySelector("#message-line");

    if (!title || !messageLine) {
      return;
    }

    title.textContent = object.name;

    if (actionResult && actionResult.success) {
      messageLine.innerHTML = `
        <span class="context-kicker context-kicker-success">Aktion ausgeführt</span>
        <span class="context-description">${escapeHtml(object.description)}</span>
        <span class="context-action">${escapeHtml(actionResult.message)}</span>
      `;
      return;
    }

    if (actionResult && actionResult.depleted) {
      messageLine.innerHTML = `
        <span class="context-kicker context-kicker-depleted">Erschöpft</span>
        <span class="context-description">${escapeHtml(object.description)}</span>
        <span class="context-action">${escapeHtml(actionResult.message)}</span>
      `;
      return;
    }

    messageLine.innerHTML = `
      <span class="context-kicker">${escapeHtml(getObjectKicker(object))}</span>
      <span class="context-description">${escapeHtml(object.description)}</span>
      <span class="context-action">${escapeHtml(getObjectActionText(object))}</span>
    `;
  }

  function showFloatingText(container, object, text) {
    if (!container) {
      return;
    }

    const floatingText = document.createElement("span");
    floatingText.className = "floating-gain";
    floatingText.textContent = text;
    floatingText.style.left = `${object.x + object.width / 2}%`;
    floatingText.style.top = `${Math.max(4, object.y - 3)}%`;

    container.append(floatingText);

    window.setTimeout(() => {
      floatingText.remove();
    }, 900);
  }

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.ui = {
    renderHud,
    renderStatus,
    renderObjectMessage,
    showFloatingText
  };
})();
