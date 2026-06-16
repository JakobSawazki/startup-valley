(function () {
  "use strict";

  const initialState = {
    version: "0.0.1",
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
    message: "Startup Valley ist bereit fuer die ersten Spielsysteme."
  };

  window.StartupValley = window.StartupValley || {};
  window.StartupValley.state = {
    gameState: structuredClone(initialState),
    initialState
  };
})();
