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

  function formatResourceAmount(resourceId, value) {
    const meta = window.StartupValley.state.resourceMeta[resourceId];
    return formatValue(value, meta?.unit || "");
  }

  function renderCostRows(gameState, cost) {
    const appState = window.StartupValley.state;
    const entries = appState.getCostEntries(cost);

    if (entries.length === 0) {
      return `<li class="cost-row is-ready">Keine weiteren Kosten</li>`;
    }

    return entries
      .map((entry) => {
        const meta = appState.resourceMeta[entry.resourceId];
        const available = appState.getResourceAmount(gameState, entry.resourceId);
        const hasEnough = available >= entry.amount;
        const amountText = `${formatResourceAmount(entry.resourceId, available)} / ${formatResourceAmount(entry.resourceId, entry.amount)}`;

        return `
          <li class="cost-row ${hasEnough ? "is-ready" : "is-missing"}">
            <span class="cost-label">${escapeHtml(meta.label)}</span>
            <span class="cost-value">${escapeHtml(amountText)}</span>
          </li>
        `;
      })
      .join("");
  }

  function getAmountLabel(amount) {
    return amount === "all" ? "Alles" : String(amount);
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
    const houseLevel = appState.getCurrentBuildingLevel(gameState, "mainHouse");
    const hudItems = [
      ...resourceItems,
      {
        id: "mainHouse",
        label: houseMeta.label,
        shortLabel: houseLevel ? houseLevel.name : houseMeta.shortLabel,
        icon: houseLevel?.image || houseMeta.icon,
        description: houseLevel ? `${houseMeta.description} Aktuell: ${houseLevel.name}.` : houseMeta.description,
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

  function renderBuildingPanel(object, gameState, actionResult, handlers) {
    const title = document.querySelector("#context-title");
    const messageLine = document.querySelector("#message-line");
    const appState = window.StartupValley.state;

    if (!title || !messageLine) {
      return;
    }

    const buildingId = object.buildingId || "mainHouse";
    const currentLevel = appState.getCurrentBuildingLevel(gameState, buildingId);
    const nextLevel = appState.getNextBuildingLevel(gameState, buildingId);
    const feedbackClass = actionResult?.success ? "context-kicker-success" : "context-kicker-depleted";
    const feedback = actionResult?.message
      ? `<span class="building-feedback ${feedbackClass}">${escapeHtml(actionResult.message)}</span>`
      : "";

    title.textContent = object.name;

    if (!nextLevel) {
      messageLine.innerHTML = `
        <section class="building-panel" aria-label="Bauplatzstatus">
          <span class="context-kicker context-kicker-success">Voll ausgebaut</span>
          ${feedback}
          <div class="building-summary">
            <strong>${escapeHtml(currentLevel.name)}</strong>
            <span>${escapeHtml(currentLevel.description)}</span>
          </div>
        </section>
      `;
      return;
    }

    const canUpgrade = appState.canAffordCost(gameState, nextLevel.cost);
    const missingCost = appState.getMissingCost(gameState, nextLevel.cost);
    const missingText = missingCost.length
      ? `Fehlt: ${missingCost
        .map((entry) => `${formatResourceAmount(entry.resourceId, entry.missing)} ${appState.resourceMeta[entry.resourceId].label}`)
        .join(", ")}`
      : "Material bereit.";

    messageLine.innerHTML = `
      <section class="building-panel" aria-label="Bauplatzstatus">
        <span class="context-kicker">Bauprojekt</span>
        ${feedback}
        <div class="building-summary">
          <strong>${escapeHtml(currentLevel.name)} · Stufe ${currentLevel.level}</strong>
          <span>${escapeHtml(currentLevel.description)}</span>
        </div>
        <div class="building-stage-grid">
          <div class="building-stage">
            <span>Aktuell</span>
            <strong>${escapeHtml(currentLevel.status)}</strong>
          </div>
          <div class="building-stage building-stage-next">
            <span>Nächste Stufe</span>
            <strong>${escapeHtml(nextLevel.name)}</strong>
          </div>
        </div>
        <div class="building-costs">
          <strong>Anforderungen</strong>
          <ul class="cost-list">
            ${renderCostRows(gameState, nextLevel.cost)}
          </ul>
        </div>
        <div class="building-actions">
          <button class="primary-action" id="build-upgrade-button" type="button" data-building-id="${escapeHtml(buildingId)}" ${canUpgrade ? "" : "disabled"}>${escapeHtml(nextLevel.name)} bauen</button>
          <span class="building-notice ${canUpgrade ? "is-ready" : "is-missing"}">${escapeHtml(missingText)}</span>
        </div>
      </section>
    `;

    const upgradeButton = messageLine.querySelector("#build-upgrade-button");
    const notice = messageLine.querySelector(".building-notice");

    if (upgradeButton && notice && canUpgrade) {
      upgradeButton.addEventListener("click", () => {
        if (handlers?.onUpgradeBuilding) {
          handlers.onUpgradeBuilding(buildingId);
          return;
        }

        notice.textContent = "Ausbau bereit.";
      });
    }
  }

  function renderMarketPanel(object, actionResult, gameState, handlers) {
    const title = document.querySelector("#context-title");
    const messageLine = document.querySelector("#message-line");
    const appState = window.StartupValley.state;
    const market = appState.marketMeta.mainMarket;

    if (!title || !messageLine) {
      return;
    }

    const feedbackClass = actionResult?.success ? "context-kicker-success" : "context-kicker-depleted";
    const feedback = actionResult?.message
      ? `<span class="market-feedback ${feedbackClass}">${escapeHtml(actionResult.message)}</span>`
      : "";

    title.textContent = object.name;
    messageLine.innerHTML = `
      <section class="market-panel" aria-label="Markt">
        <span class="context-kicker">Handel</span>
        ${feedback}
        <div class="market-summary">
          <strong>${escapeHtml(market.label)}</strong>
          <span>${escapeHtml(market.description)}</span>
        </div>
        <div class="market-list">
          ${market.sellableResources.map((resourceId) => {
            const meta = appState.resourceMeta[resourceId];
            const available = appState.getResourceAmount(gameState, resourceId);
            const price = appState.getMarketSellPrice(resourceId);

            return `
              <div class="market-row">
                <span class="market-icon-frame">
                  <img src="${escapeHtml(meta.icon)}" alt="" aria-hidden="true">
                </span>
                <span class="market-copy">
                  <strong>${escapeHtml(meta.label)}</strong>
                  <small>Bestand: ${escapeHtml(available)} · Preis: ${escapeHtml(price)} EUR</small>
                </span>
                <span class="market-actions" aria-label="${escapeHtml(`${meta.label} verkaufen`)}">
                  ${market.sellAmounts.map((amount) => {
                    const canSell = appState.canSellResource(gameState, resourceId, amount);
                    return `<button class="market-sell-button" type="button" data-resource-id="${escapeHtml(resourceId)}" data-sell-amount="${escapeHtml(amount)}" ${canSell ? "" : "disabled"}>${escapeHtml(getAmountLabel(amount))}</button>`;
                  }).join("")}
                </span>
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;

    messageLine.querySelectorAll(".market-sell-button").forEach((button) => {
      if (button.disabled) {
        return;
      }

      button.addEventListener("click", () => {
        if (!handlers?.onSellResource) {
          return;
        }

        const amount = button.dataset.sellAmount === "all" ? "all" : Number(button.dataset.sellAmount);
        handlers.onSellResource(button.dataset.resourceId, amount);
      });
    });
  }

  function renderObjectMessage(object, actionResult, gameState, handlers) {
    const title = document.querySelector("#context-title");
    const messageLine = document.querySelector("#message-line");

    if (!title || !messageLine) {
      return;
    }

    title.textContent = object.name;

    if (object.type === "building" && gameState) {
      renderBuildingPanel(object, gameState, actionResult, handlers);
      return;
    }

    if (object.type === "market" && gameState) {
      renderMarketPanel(object, actionResult, gameState, handlers);
      return;
    }

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
