/*
 * Dzen-rss by Stepanov Ivan 2025
 * Distributed under the terms of MIT License
 * https://github.com/arctic-hare
 */
import createRssFeed from './createRssFeed.js';
import { checkXmlOptions, checkItemParameters } from './utils/validator.js';
export const generateRssFeed = (rssOptions, dataArticles) => {
    const isValidXmlOptions = checkXmlOptions(rssOptions);
    const isValidItemParameters = checkItemParameters(dataArticles);
    if (isValidXmlOptions && isValidItemParameters) {
        return createRssFeed(rssOptions, dataArticles);
    }
    throw new Error('Invalid RSS options or article data.');
};
//# sourceMappingURL=index.js.map