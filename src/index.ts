/*
 * Dzen-rss by Stepanov Ivan 2025
 * Distributed under the terms of MIT License
 * https://github.com/arctic-hare
 */

import { type Article, type RssOptions } from './types/index.js';
import createRssFeed from './createRssFeed.js';
import { checkXmlOptions, checkItemParameters } from './utils/validator.js';

const rssOptions: RssOptions = {
  title: 'My Blog',
  link: 'https://example.com',
  language: 'ru',
};
const dataArticles: Article[] = [
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
    category:  ['native-draft', 'format-article', 'index', 'comment-all'],
    content_encoded: 'start <b>example content</b> end',
  }
];
const isValidXmlOptions = checkXmlOptions(rssOptions);
const isValidItemParameters = checkItemParameters(dataArticles);

if (isValidXmlOptions || isValidItemParameters) {
  createRssFeed(rssOptions, dataArticles);
}


