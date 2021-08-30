/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/idb.js":
/*!**************************!*\
  !*** ./public/js/idb.js ***!
  \**************************/
/***/ (() => {

eval("\nlet db;\n\nconst request = indexedDB.open('transaction', 1);\n\nrequest.onupgradeneeded = function (event) {\n  // save a reference to the database \n  const db = event.target.result;\n  // create an object store (table) called `new_pizza`, set it to have an auto incrementing primary key of sorts \n  db.createObjectStore('transactions', { autoIncrement: true });\n};\n\nrequest.onsuccess = function (event) {\n  // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable\n  db = event.target.result;\n\n  // check if app is online, if yes run uploadPizza() function to send all local db data to api\n  if (navigator.onLine) {\n    // we haven't created this yet, but we will soon, so let's comment it out for now\n    // uploadPizza();\n  }\n};\n\nrequest.onerror = function (event) {\n  // log error here\n  console.log(event.target.errorCode);\n};\n\n// This function will be executed if we attempt to submit a new pizza and there's no internet connection\nfunction saveRecord(record) {\n  // open a new transaction with the database with read and write permissions \n  const transaction = db.transaction(['transactions'], 'readwrite');\n\n  // access the object store for `new_pizza`\n  const transactionObjectStore = transaction.objectStore('transactions');\n\n  // add record to your store with add method\n  transactionObjectStore.add(record);\n}\n\n//# sourceURL=webpack://budget-app/./public/js/idb.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/idb.js"]();
/******/ 	
/******/ })()
;