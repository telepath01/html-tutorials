'use strict';
const Formatter = (function () {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log('Making Uppercase');
    return text.toUpperCase();
  };
  return { makeUppercase };
})();
