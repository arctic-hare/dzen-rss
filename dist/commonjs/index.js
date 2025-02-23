"use strict";
/*
 * Dzen-rss by Stepanov Ivan 2025
 * Distributed under the terms of MIT License
 * https://github.com/arctic-hare
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRssFeed = void 0;
const createRssFeed_js_1 = __importDefault(require("./createRssFeed.js"));
const validator_js_1 = require("./utils/validator.js");
const generateRssFeed = (rssOptions, dataArticles) => {
    const isValidXmlOptions = (0, validator_js_1.checkXmlOptions)(rssOptions);
    const isValidItemParameters = (0, validator_js_1.checkItemParameters)(dataArticles);
    if (isValidXmlOptions && isValidItemParameters) {
        return (0, createRssFeed_js_1.default)(rssOptions, dataArticles);
    }
    throw new Error('Invalid RSS options or article data.');
};
exports.generateRssFeed = generateRssFeed;
//# sourceMappingURL=index.js.map