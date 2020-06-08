(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/report.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/date.ts":
/*!************************!*\
  !*** ./common/date.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/date */ \"./model/date.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    generateDatePath: (granularity, date = new Date()) => {\n        let path = `${date.getUTCFullYear()}/`;\n        if (granularity > _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Yearly)\n            path += `${date.getUTCMonth()}/`;\n        if (granularity > _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Monthly)\n            path += `${date.getUTCDate()}/`;\n        if (granularity > _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Daily)\n            path += `${date.getUTCHours()}/`;\n        return path;\n    },\n    identifyGranularity(fromDate, toDate) {\n        const fromDateCharArray = [...fromDate];\n        const toDateCharArray = [...toDate];\n        const longerDateString = Math.max(fromDateCharArray.length, toDateCharArray.length);\n        return longerDateString <= 4\n            ? _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Yearly\n            : longerDateString <= 6\n                ? _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Monthly\n                : longerDateString <= 8\n                    ? _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Daily\n                    : _model_date__WEBPACK_IMPORTED_MODULE_1__[\"Granularity\"].Hourly;\n    },\n    parseDateString(dateString) {\n        if (dateString.length > 6) {\n            return new Date(Number.parseInt(dateString.substring(0, 4)), Number.parseInt(dateString.substring(5, 8)), Number.parseInt(dateString.substring(8, 11)));\n        }\n    },\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vZGF0ZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbW1vbi9kYXRlLnRzPzRhMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XG5pbXBvcnQgeyBHcmFudWxhcml0eSB9IGZyb20gXCIuLi9tb2RlbC9kYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2VuZXJhdGVEYXRlUGF0aDogKGdyYW51bGFyaXR5OiBHcmFudWxhcml0eSwgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCkpID0+IHtcbiAgICBsZXQgcGF0aCA9IGAke2RhdGUuZ2V0VVRDRnVsbFllYXIoKX0vYDtcblxuICAgIGlmIChncmFudWxhcml0eSA+IEdyYW51bGFyaXR5LlllYXJseSkgcGF0aCArPSBgJHtkYXRlLmdldFVUQ01vbnRoKCl9L2A7XG4gICAgaWYgKGdyYW51bGFyaXR5ID4gR3JhbnVsYXJpdHkuTW9udGhseSkgcGF0aCArPSBgJHtkYXRlLmdldFVUQ0RhdGUoKX0vYDtcbiAgICBpZiAoZ3JhbnVsYXJpdHkgPiBHcmFudWxhcml0eS5EYWlseSkgcGF0aCArPSBgJHtkYXRlLmdldFVUQ0hvdXJzKCl9L2A7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfSxcblxuICBpZGVudGlmeUdyYW51bGFyaXR5KGZyb21EYXRlOiBzdHJpbmcsIHRvRGF0ZTogc3RyaW5nKTogR3JhbnVsYXJpdHkge1xuICAgIGNvbnN0IGZyb21EYXRlQ2hhckFycmF5ID0gWy4uLmZyb21EYXRlXTtcbiAgICBjb25zdCB0b0RhdGVDaGFyQXJyYXkgPSBbLi4udG9EYXRlXTtcbiAgICBjb25zdCBsb25nZXJEYXRlU3RyaW5nID0gTWF0aC5tYXgoXG4gICAgICBmcm9tRGF0ZUNoYXJBcnJheS5sZW5ndGgsXG4gICAgICB0b0RhdGVDaGFyQXJyYXkubGVuZ3RoXG4gICAgKTtcblxuICAgIHJldHVybiBsb25nZXJEYXRlU3RyaW5nIDw9IDRcbiAgICAgID8gR3JhbnVsYXJpdHkuWWVhcmx5XG4gICAgICA6IGxvbmdlckRhdGVTdHJpbmcgPD0gNlxuICAgICAgPyBHcmFudWxhcml0eS5Nb250aGx5XG4gICAgICA6IGxvbmdlckRhdGVTdHJpbmcgPD0gOFxuICAgICAgPyBHcmFudWxhcml0eS5EYWlseVxuICAgICAgOiBHcmFudWxhcml0eS5Ib3VybHk7XG5cbiAgICAvLyBsZXQgZmlyc3REaWZmSW5kZXg6IG51bWJlcjtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VyRGF0ZVN0cmluZzsgaSsrKSB7XG4gICAgLy8gICBpZiAoZnJvbURhdGVDaGFyQXJyYXlbaV0gIT09IHRvRGF0ZUNoYXJBcnJheVtpXSkge1xuICAgIC8vICAgICBmaXJzdERpZmZJbmRleCA9IGk7XG4gICAgLy8gICAgIGJyZWFrO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGlmICghZmlyc3REaWZmSW5kZXgpIHtcbiAgICAvLyAgIHJldHVybiBsb25nZXJEYXRlU3RyaW5nIDw9IDRcbiAgICAvLyAgICAgPyBHcmFudWxhcml0eS5ZZWFybHlcbiAgICAvLyAgICAgOiBsb25nZXJEYXRlU3RyaW5nIDw9IDZcbiAgICAvLyAgICAgPyBHcmFudWxhcml0eS5Nb250aGx5XG4gICAgLy8gICAgIDogbG9uZ2VyRGF0ZVN0cmluZyA8PSA4XG4gICAgLy8gICAgID8gR3JhbnVsYXJpdHkuRGFpbHlcbiAgICAvLyAgICAgOiBHcmFudWxhcml0eS5Ib3VybHk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIGZpcnN0RGlmZkluZGV4IDwgNFxuICAgIC8vICAgPyBHcmFudWxhcml0eS5ZZWFybHlcbiAgICAvLyAgIDogZmlyc3REaWZmSW5kZXggPCA2XG4gICAgLy8gICA/IEdyYW51bGFyaXR5Lk1vbnRobHlcbiAgICAvLyAgIDogZmlyc3REaWZmSW5kZXggPCA4XG4gICAgLy8gICA/IEdyYW51bGFyaXR5LkRhaWx5XG4gICAgLy8gICA6IEdyYW51bGFyaXR5LkhvdXJseTtcbiAgfSxcblxuICBwYXJzZURhdGVTdHJpbmcoZGF0ZVN0cmluZzogc3RyaW5nKTogRGF0ZSB7XG4gICAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID4gNikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBOdW1iZXIucGFyc2VJbnQoZGF0ZVN0cmluZy5zdWJzdHJpbmcoMCwgNCkpLFxuICAgICAgICBOdW1iZXIucGFyc2VJbnQoZGF0ZVN0cmluZy5zdWJzdHJpbmcoNSwgOCkpLFxuICAgICAgICBOdW1iZXIucGFyc2VJbnQoZGF0ZVN0cmluZy5zdWJzdHJpbmcoOCwgMTEpKVxuICAgICAgKTtcbiAgICB9XG4gIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/date.ts\n");

/***/ }),

/***/ "./common/number.ts":
/*!**************************!*\
  !*** ./common/number.ts ***!
  \**************************/
/*! exports provided: isBetweenDateStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBetweenDateStrings\", function() { return isBetweenDateStrings; });\nconst isBetweenDateStrings = (lowNumber, highNumber, value) => {\n    const numberValue = Number.parseInt(value);\n    return (numberValue >= Number.parseInt(lowNumber) &&\n        numberValue <= Number.parseInt(highNumber));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vbnVtYmVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tbW9uL251bWJlci50cz9kOTRkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0JldHdlZW5EYXRlU3RyaW5ncyA9IChcbiAgbG93TnVtYmVyOiBzdHJpbmcsXG4gIGhpZ2hOdW1iZXI6IHN0cmluZyxcbiAgdmFsdWU6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IG51bWJlclZhbHVlID0gTnVtYmVyLnBhcnNlSW50KHZhbHVlKTtcbiAgcmV0dXJuIChcbiAgICBudW1iZXJWYWx1ZSA+PSBOdW1iZXIucGFyc2VJbnQobG93TnVtYmVyKSAmJlxuICAgIG51bWJlclZhbHVlIDw9IE51bWJlci5wYXJzZUludChoaWdoTnVtYmVyKVxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/number.ts\n");

/***/ }),

/***/ "./io/response.ts":
/*!************************!*\
  !*** ./io/response.ts ***!
  \************************/
/*! exports provided: _response, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_response\", function() { return _response; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n\nconst _response = (statusCode, body) => {\n    return {\n        statusCode: statusCode || 502,\n        body: JSON.stringify(body),\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Allow-Credentials\": true,\n        },\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    _200(body) {\n        return _response(200, body);\n    },\n    _401() {\n        return _response(401, {\n            message: \"Unauthorized\",\n        });\n    },\n    _404() {\n        return _response(404);\n    },\n    _500(body) {\n        return _response(500, body);\n    },\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pby9yZXNwb25zZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2lvL3Jlc3BvbnNlLnRzPzA3YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XG5pbXBvcnQgeyBBUElHYXRld2F5UHJveHlSZXN1bHQgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuXG5leHBvcnQgY29uc3QgX3Jlc3BvbnNlID0gKHN0YXR1c0NvZGU/OiBudW1iZXIsIGJvZHk/OiBPYmplY3QpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIHx8IDUwMixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiOiB0cnVlLFxuICAgIH0sXG4gIH0gYXMgQVBJR2F0ZXdheVByb3h5UmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBfMjAwKGJvZHk/OiBPYmplY3QpOiBBUElHYXRld2F5UHJveHlSZXN1bHQge1xuICAgIHJldHVybiBfcmVzcG9uc2UoMjAwLCBib2R5KTtcbiAgfSxcblxuICBfNDAxKCk6IEFQSUdhdGV3YXlQcm94eVJlc3VsdCB7XG4gICAgcmV0dXJuIF9yZXNwb25zZSg0MDEsIHtcbiAgICAgIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIsXG4gICAgfSk7XG4gIH0sXG5cbiAgXzQwNCgpOiBBUElHYXRld2F5UHJveHlSZXN1bHQge1xuICAgIHJldHVybiBfcmVzcG9uc2UoNDA0KTtcbiAgfSxcblxuICBfNTAwKGJvZHk/OiBPYmplY3QpOiBBUElHYXRld2F5UHJveHlSZXN1bHQge1xuICAgIHJldHVybiBfcmVzcG9uc2UoNTAwLCBib2R5KTtcbiAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./io/response.ts\n");

/***/ }),

/***/ "./io/s3.ts":
/*!******************!*\
  !*** ./io/s3.ts ***!
  \******************/
/*! exports provided: config, _s3Client, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_s3Client\", function() { return _s3Client; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _model_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/date */ \"./model/date.ts\");\n/* harmony import */ var _common_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/number */ \"./common/number.ts\");\n\n\n\n\nconst config = process.env.IS_OFFLINE\n    ? {\n        s3ForcePathStyle: true,\n        accessKeyId: \"S3RVER\",\n        secretAccessKey: \"S3RVER\",\n        endpoint: \"http://localhost:8000\",\n    }\n    : undefined;\nconst _s3Client = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__[\"S3\"](config);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    async get(fileName, bucket) {\n        const params = {\n            Bucket: bucket,\n            Key: fileName,\n        };\n        let data = await _s3Client.getObject(params).promise();\n        if (!data) {\n            throw Error(`Failed to get file ${fileName}, from ${bucket}`);\n        }\n        if (/\\.json$/.test(fileName)) {\n            data = JSON.parse(data.Body.toString());\n        }\n        return data;\n    },\n    async getList(keys, bucket) {\n        if (!keys.length) {\n            return [];\n        }\n        return Promise.all(keys.map((key) => {\n            return this.get(key, bucket);\n        }));\n    },\n    async listFiles(path, bucket) {\n        const params = {\n            Bucket: bucket,\n            Prefix: path,\n        };\n        let data = await _s3Client.listObjectsV2(params).promise();\n        if (!data)\n            throw Error(\"there was an error listing the files\");\n        return data;\n    },\n    async write(data, fileName, bucket) {\n        const params = {\n            Bucket: bucket,\n            Body: JSON.stringify(data),\n            Key: fileName,\n        };\n        const newData = await _s3Client.putObject(params).promise();\n        if (!newData) {\n            throw Error(\"there was an error writing the file\");\n        }\n        return newData;\n    },\n    getKeysFromList(list) {\n        return list.Contents.map((object) => object.Key);\n    },\n    getKeysFromListForGranularity(list, granularity) {\n        const keys = [];\n        list.Contents.forEach((object) => {\n            const directoryArray = object.Key.split(\"/\");\n            switch (granularity) {\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Yearly:\n                    if (directoryArray.length === 3)\n                        keys.push(object.Key);\n                    break;\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Monthly:\n                    if (directoryArray.length === 4)\n                        keys.push(object.Key);\n                    break;\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Daily:\n                    if (directoryArray.length === 5)\n                        keys.push(object.Key);\n                    break;\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Hourly:\n                    if (directoryArray.length === 6)\n                        keys.push(object.Key);\n                    break;\n                default:\n                    throw Error(\"Could not find granularity.\");\n            }\n        });\n        return keys;\n    },\n    getKeysWithinDatesForGranularity(list, fromDate, toDate, granularity) {\n        const keys = [];\n        list.Contents.forEach((object) => {\n            const directoryArray = object.Key.split(\"/\");\n            switch (granularity) {\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Yearly:\n                    if (Object(_common_number__WEBPACK_IMPORTED_MODULE_3__[\"isBetweenDateStrings\"])(fromDate.substring(0, 4), toDate.substring(0, 4), directoryArray[0]) &&\n                        directoryArray.length === 2) {\n                        keys.push(object.Key);\n                    }\n                    break;\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Monthly:\n                    if (Object(_common_number__WEBPACK_IMPORTED_MODULE_3__[\"isBetweenDateStrings\"])(fromDate.substring(4, 6), toDate.substring(4, 6), directoryArray[1]) &&\n                        directoryArray.length === 3) {\n                        keys.push(object.Key);\n                    }\n                    break;\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Daily:\n                    if (Object(_common_number__WEBPACK_IMPORTED_MODULE_3__[\"isBetweenDateStrings\"])(fromDate.substring(6, 8), toDate.substring(6, 8), directoryArray[2]) &&\n                        directoryArray.length === 4) {\n                        keys.push(object.Key);\n                    }\n                    break;\n                case _model_date__WEBPACK_IMPORTED_MODULE_2__[\"Granularity\"].Hourly:\n                    if (Object(_common_number__WEBPACK_IMPORTED_MODULE_3__[\"isBetweenDateStrings\"])(fromDate.substring(8, 10), toDate.substring(8, 10), directoryArray[3]) &&\n                        directoryArray.length === 5) {\n                        keys.push(object.Key);\n                    }\n                    break;\n                default:\n                    throw Error(\"Could not find Granularity\");\n            }\n        });\n        return keys;\n    },\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pby9zMy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2lvL3MzLnRzP2I1MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XG5pbXBvcnQgeyBTMyB9IGZyb20gXCJhd3Mtc2RrXCI7XG5pbXBvcnQgeyBMaXN0T2JqZWN0c1YyT3V0cHV0IH0gZnJvbSBcImF3cy1zZGsvY2xpZW50cy9zM1wiO1xuaW1wb3J0IHsgR3JhbnVsYXJpdHkgfSBmcm9tIFwiLi4vbW9kZWwvZGF0ZVwiO1xuaW1wb3J0IHsgaXNCZXR3ZWVuRGF0ZVN0cmluZ3MgfSBmcm9tIFwiLi4vY29tbW9uL251bWJlclwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBTMy5DbGllbnRDb25maWd1cmF0aW9uID0gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORVxuICA/IHtcbiAgICAgIHMzRm9yY2VQYXRoU3R5bGU6IHRydWUsXG4gICAgICBhY2Nlc3NLZXlJZDogXCJTM1JWRVJcIixcbiAgICAgIHNlY3JldEFjY2Vzc0tleTogXCJTM1JWRVJcIixcbiAgICAgIGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxuICAgIH1cbiAgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBfczNDbGllbnQgPSBuZXcgUzMoY29uZmlnKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3luYyBnZXQoZmlsZU5hbWU6IHN0cmluZywgYnVja2V0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBCdWNrZXQ6IGJ1Y2tldCxcbiAgICAgIEtleTogZmlsZU5hbWUsXG4gICAgfTtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgX3MzQ2xpZW50LmdldE9iamVjdChwYXJhbXMpLnByb21pc2UoKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEZhaWxlZCB0byBnZXQgZmlsZSAke2ZpbGVOYW1lfSwgZnJvbSAke2J1Y2tldH1gKTtcbiAgICB9XG5cbiAgICBpZiAoL1xcLmpzb24kLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YS5Cb2R5LnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIGFzeW5jIGdldExpc3Qoa2V5czogc3RyaW5nW10sIGJ1Y2tldDogc3RyaW5nKSB7XG4gICAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIGtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSwgYnVja2V0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICAvLyBUT0RPOiAgSW5jbHVkZSBwYWdpbmF0aW9uIGZvciBzdXBwb3J0aW5nIGRpcmVjdG9yaWVzIHdpdGggPjEwMDAgaXRlbXMuXG4gIGFzeW5jIGxpc3RGaWxlcyhwYXRoOiBzdHJpbmcsIGJ1Y2tldDogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgQnVja2V0OiBidWNrZXQsXG4gICAgICBQcmVmaXg6IHBhdGgsXG4gICAgfSBhcyBTMy5MaXN0T2JqZWN0c1YyUmVxdWVzdDtcblxuICAgIGxldCBkYXRhID0gYXdhaXQgX3MzQ2xpZW50Lmxpc3RPYmplY3RzVjIocGFyYW1zKS5wcm9taXNlKCk7XG5cbiAgICBpZiAoIWRhdGEpIHRocm93IEVycm9yKFwidGhlcmUgd2FzIGFuIGVycm9yIGxpc3RpbmcgdGhlIGZpbGVzXCIpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0sXG5cbiAgYXN5bmMgd3JpdGUoZGF0YTogYW55LCBmaWxlTmFtZTogc3RyaW5nLCBidWNrZXQ6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIEJ1Y2tldDogYnVja2V0LFxuICAgICAgQm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBLZXk6IGZpbGVOYW1lLFxuICAgIH07XG5cbiAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgX3MzQ2xpZW50LnB1dE9iamVjdChwYXJhbXMpLnByb21pc2UoKTtcblxuICAgIGlmICghbmV3RGF0YSkge1xuICAgICAgdGhyb3cgRXJyb3IoXCJ0aGVyZSB3YXMgYW4gZXJyb3Igd3JpdGluZyB0aGUgZmlsZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfSxcblxuICBnZXRLZXlzRnJvbUxpc3QobGlzdDogTGlzdE9iamVjdHNWMk91dHB1dCkge1xuICAgIHJldHVybiBsaXN0LkNvbnRlbnRzLm1hcCgob2JqZWN0KSA9PiBvYmplY3QuS2V5KTtcbiAgfSxcblxuICBnZXRLZXlzRnJvbUxpc3RGb3JHcmFudWxhcml0eShcbiAgICBsaXN0OiBMaXN0T2JqZWN0c1YyT3V0cHV0LFxuICAgIGdyYW51bGFyaXR5OiBHcmFudWxhcml0eVxuICApIHtcbiAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgbGlzdC5Db250ZW50cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIGNvbnN0IGRpcmVjdG9yeUFycmF5ID0gb2JqZWN0LktleS5zcGxpdChcIi9cIik7XG5cbiAgICAgIHN3aXRjaCAoZ3JhbnVsYXJpdHkpIHtcbiAgICAgICAgY2FzZSBHcmFudWxhcml0eS5ZZWFybHk6XG4gICAgICAgICAgaWYgKGRpcmVjdG9yeUFycmF5Lmxlbmd0aCA9PT0gMykga2V5cy5wdXNoKG9iamVjdC5LZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdyYW51bGFyaXR5Lk1vbnRobHk6XG4gICAgICAgICAgaWYgKGRpcmVjdG9yeUFycmF5Lmxlbmd0aCA9PT0gNCkga2V5cy5wdXNoKG9iamVjdC5LZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdyYW51bGFyaXR5LkRhaWx5OlxuICAgICAgICAgIGlmIChkaXJlY3RvcnlBcnJheS5sZW5ndGggPT09IDUpIGtleXMucHVzaChvYmplY3QuS2V5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHcmFudWxhcml0eS5Ib3VybHk6XG4gICAgICAgICAgaWYgKGRpcmVjdG9yeUFycmF5Lmxlbmd0aCA9PT0gNikga2V5cy5wdXNoKG9iamVjdC5LZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IEVycm9yKFwiQ291bGQgbm90IGZpbmQgZ3JhbnVsYXJpdHkuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGtleXM7XG4gIH0sXG5cbiAgZ2V0S2V5c1dpdGhpbkRhdGVzRm9yR3JhbnVsYXJpdHkoXG4gICAgbGlzdDogTGlzdE9iamVjdHNWMk91dHB1dCxcbiAgICBmcm9tRGF0ZTogc3RyaW5nLFxuICAgIHRvRGF0ZTogc3RyaW5nLFxuICAgIGdyYW51bGFyaXR5OiBHcmFudWxhcml0eVxuICApIHtcbiAgICBjb25zdCBrZXlzID0gW107XG5cbiAgICBsaXN0LkNvbnRlbnRzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0b3J5QXJyYXkgPSBvYmplY3QuS2V5LnNwbGl0KFwiL1wiKTtcblxuICAgICAgc3dpdGNoIChncmFudWxhcml0eSkge1xuICAgICAgICBjYXNlIEdyYW51bGFyaXR5LlllYXJseTpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0JldHdlZW5EYXRlU3RyaW5ncyhcbiAgICAgICAgICAgICAgZnJvbURhdGUuc3Vic3RyaW5nKDAsIDQpLFxuICAgICAgICAgICAgICB0b0RhdGUuc3Vic3RyaW5nKDAsIDQpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlBcnJheVswXVxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgZGlyZWN0b3J5QXJyYXkubGVuZ3RoID09PSAyXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2gob2JqZWN0LktleSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdyYW51bGFyaXR5Lk1vbnRobHk6XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNCZXR3ZWVuRGF0ZVN0cmluZ3MoXG4gICAgICAgICAgICAgIGZyb21EYXRlLnN1YnN0cmluZyg0LCA2KSxcbiAgICAgICAgICAgICAgdG9EYXRlLnN1YnN0cmluZyg0LCA2KSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5QXJyYXlbMV1cbiAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgIGRpcmVjdG9yeUFycmF5Lmxlbmd0aCA9PT0gM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAga2V5cy5wdXNoKG9iamVjdC5LZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBHcmFudWxhcml0eS5EYWlseTpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0JldHdlZW5EYXRlU3RyaW5ncyhcbiAgICAgICAgICAgICAgZnJvbURhdGUuc3Vic3RyaW5nKDYsIDgpLFxuICAgICAgICAgICAgICB0b0RhdGUuc3Vic3RyaW5nKDYsIDgpLFxuICAgICAgICAgICAgICBkaXJlY3RvcnlBcnJheVsyXVxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgZGlyZWN0b3J5QXJyYXkubGVuZ3RoID09PSA0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2gob2JqZWN0LktleSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEdyYW51bGFyaXR5LkhvdXJseTpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc0JldHdlZW5EYXRlU3RyaW5ncyhcbiAgICAgICAgICAgICAgZnJvbURhdGUuc3Vic3RyaW5nKDgsIDEwKSxcbiAgICAgICAgICAgICAgdG9EYXRlLnN1YnN0cmluZyg4LCAxMCksXG4gICAgICAgICAgICAgIGRpcmVjdG9yeUFycmF5WzNdXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICBkaXJlY3RvcnlBcnJheS5sZW5ndGggPT09IDVcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGtleXMucHVzaChvYmplY3QuS2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBHcmFudWxhcml0eVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBrZXlzO1xuICB9LFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./io/s3.ts\n");

/***/ }),

/***/ "./model/date.ts":
/*!***********************!*\
  !*** ./model/date.ts ***!
  \***********************/
/*! exports provided: Granularity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Granularity\", function() { return Granularity; });\nvar Granularity;\n(function (Granularity) {\n    Granularity[Granularity[\"Yearly\"] = 0] = \"Yearly\";\n    Granularity[Granularity[\"Monthly\"] = 1] = \"Monthly\";\n    Granularity[Granularity[\"Daily\"] = 2] = \"Daily\";\n    Granularity[Granularity[\"Hourly\"] = 3] = \"Hourly\";\n})(Granularity || (Granularity = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC9kYXRlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWwvZGF0ZS50cz8wMzY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEdyYW51bGFyaXR5IHtcbiAgWWVhcmx5LFxuICBNb250aGx5LFxuICBEYWlseSxcbiAgSG91cmx5LFxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./model/date.ts\n");

/***/ }),

/***/ "./src/report.ts":
/*!***********************!*\
  !*** ./src/report.ts ***!
  \***********************/
/*! exports provided: getReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getReport\", function() { return getReport; });\n/* harmony import */ var _common_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/date */ \"./common/date.ts\");\n/* harmony import */ var _io_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io/s3 */ \"./io/s3.ts\");\n/* harmony import */ var _io_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../io/response */ \"./io/response.ts\");\n\n\n\nconst getReport = async (event, _context) => {\n    const fromDate = event.queryStringParameters[\"fromDate\"];\n    const toDate = event.queryStringParameters[\"toDate\"];\n    const granularity = _common_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"].identifyGranularity(fromDate, toDate);\n    const path = _common_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generateDatePath(Math.max(0, granularity - 1));\n    const filesInDirectory = await _io_s3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listFiles(path, process.env.REPORT_READ_BUCKET);\n    const filesWithinDates = _io_s3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getKeysWithinDatesForGranularity(filesInDirectory, fromDate, toDate, granularity);\n    try {\n        const items = await _io_s3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getList(filesWithinDates, process.env.REPORT_READ_BUCKET);\n        return _io_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._200(items);\n    }\n    catch (error) {\n        return _io_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"]._500(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3J0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JlcG9ydC50cz8wNGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IGRhdGUgZnJvbSBcIi4uL2NvbW1vbi9kYXRlXCI7XG5pbXBvcnQgczMgZnJvbSBcIi4uL2lvL3MzXCI7XG5pbXBvcnQgcmVzcG9uc2UgZnJvbSBcIi4uL2lvL3Jlc3BvbnNlXCI7XG5cbi8vIDEuIHZhbGlkYXRlIGV2ZW50IGNvbnRleHQgLSBUT0RPXG4vLyAyLiByZXR1cm4gYWdncmVnYXRlZCByZXBvcnQgZnJvbSBSRUFEIGJ1Y2tldCAtIFRPRE9cbmV4cG9ydCBjb25zdCBnZXRSZXBvcnQ6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XG4gIGNvbnN0IGZyb21EYXRlID0gZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzW1wiZnJvbURhdGVcIl07XG4gIGNvbnN0IHRvRGF0ZSA9IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVyc1tcInRvRGF0ZVwiXTtcblxuICBjb25zdCBncmFudWxhcml0eSA9IGRhdGUuaWRlbnRpZnlHcmFudWxhcml0eShmcm9tRGF0ZSwgdG9EYXRlKTtcbiAgY29uc3QgcGF0aCA9IGRhdGUuZ2VuZXJhdGVEYXRlUGF0aChNYXRoLm1heCgwLCBncmFudWxhcml0eSAtIDEpKTtcbiAgY29uc3QgZmlsZXNJbkRpcmVjdG9yeSA9IGF3YWl0IHMzLmxpc3RGaWxlcyhcbiAgICBwYXRoLFxuICAgIHByb2Nlc3MuZW52LlJFUE9SVF9SRUFEX0JVQ0tFVFxuICApO1xuICBjb25zdCBmaWxlc1dpdGhpbkRhdGVzID0gczMuZ2V0S2V5c1dpdGhpbkRhdGVzRm9yR3JhbnVsYXJpdHkoXG4gICAgZmlsZXNJbkRpcmVjdG9yeSxcbiAgICBmcm9tRGF0ZSxcbiAgICB0b0RhdGUsXG4gICAgZ3JhbnVsYXJpdHlcbiAgKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgczMuZ2V0TGlzdChcbiAgICAgIGZpbGVzV2l0aGluRGF0ZXMsXG4gICAgICBwcm9jZXNzLmVudi5SRVBPUlRfUkVBRF9CVUNLRVRcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLl8yMDAoaXRlbXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5fNTAwKGVycm9yKTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/report.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNkay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIj81MTQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n");

/***/ })

/******/ })));