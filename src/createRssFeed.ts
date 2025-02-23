import { create } from 'xmlbuilder2';
import { type Article, type RssOptions } from './types/index.js';

export default function createRssFeed(options: RssOptions, listArticles: Article[]): string {
  const rssDocument = create({ encoding: 'utf8' }).ele('rss', {
    version: '2.0',
  });

  rssDocument.att('xmlns:content', 'http://purl.org/rss/1.0/modules/content/');
  rssDocument.att('xmlns:dc', 'http://purl.org/dc/elements/1.1/');
  rssDocument.att('xmlns:media', 'http://search.yahoo.com/mrss/');
  rssDocument.att('xmlns:atom', 'http://www.w3.org/2005/Atom');
  rssDocument.att('xmlns:georss', 'http://www.georss.org/georss');

  const channel = rssDocument.ele('channel');
  channel.ele('title').txt(options.title).up();
  channel.ele('link').txt(options.link).up();
  if (options.language) {
    channel.ele('language').txt(options.language).up();
  }

  for (const article of listArticles) {
    const item = channel.ele('item');
    item.ele('title').txt(article.title).up();
    item.ele('link').txt(article.link).up();
    if (article.pdalink) {
      item.ele('pdalink').txt(article.pdalink).up();
    }
    item.ele('guid').txt(String(article.guid)).up();
    item.ele('pubDate').txt(article.pubDate).up();

    if (article.enclosure) {
      for (const enclosure of article.enclosure) {
        item
          .ele('enclosure')
          .att('url', enclosure.url)
          .att('type', enclosure.type || 'image/jpeg')
          .up();
      }
    }

    if (article.description) {
      item.ele('description').dat(article.description).up();
    }

    for (const category of article.category) {
      item.ele('category').txt(category).up();
    }

    if (article.content_encoded) {
      item.ele('content:encoded').dat(article.content_encoded).up();
    }
  }

  const xml = rssDocument.end({ prettyPrint: true });
  // console.log('Generated XML:', xml);
  return xml;
}
