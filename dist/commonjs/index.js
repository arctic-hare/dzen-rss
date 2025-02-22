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
const createRssFeed_js_1 = __importDefault(require("./createRssFeed.js"));
const validator_js_1 = require("./utils/validator.js");
const rssOptions = {
    title: 'My Blog',
    link: 'https://example.com',
    language: 'ru',
};
const dataArticles = [
    {
        title: 'Article 1',
        link: 'https://example.com/link',
        pdalink: 'https://example.com/pdalink',
        guid: '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12',
        pubDate: '12-12-2022',
        enclosure: [{
                url: 'http://example.com/2023/07/04/big_pic1.jpg',
                type: 'image/jpeg'
            },
            {
                url: 'http://example.com/2023/07/04/big_pic2.jpg',
                type: 'image/jpeg'
            }],
        description: 'text description',
        category: ['native-draft', 'format-article', 'index', 'comment-all'],
        content_encoded: 'start <b>example content</b> end',
    }
];
const isValidXmlOptions = (0, validator_js_1.checkXmlOptions)(rssOptions);
const isValidItemParameters = (0, validator_js_1.checkItemParameters)(dataArticles);
if (isValidXmlOptions || isValidItemParameters) {
    (0, createRssFeed_js_1.default)(rssOptions, dataArticles);
}
//# sourceMappingURL=index.js.map