import { describe, it, expect } from 'vitest';
import { getConfigData, getListData } from './mocks/getListData';
import createRssFeed from '../src/createRssFeed.ts';

function countPTags(html) {
  const regex = /<p[^>]*>/g;
  const matches = html.match(regex);
  return matches ? matches.length : 0;
}

describe('RSS Generator', () => {
  const rss = createRssFeed(getConfigData(), getListData());
  it('check valid rss options', () => {
    expect(rss).toContain('<rss version="2.0"');

  });
  it('check valid xml options', () => {
    expect(rss).toContain('<title>My Blog</title>');
    expect(rss).toContain('<link>https://example.com</link>');
    expect(rss).toContain('<language>ru</language>');
  });
  it('check valid items options', () => {
    expect(rss).toContain('<![CDATA[');
    expect(rss).toContain('<pubDate>Sun, 11 Dec 2022 21:00:00 GMT</pubDate>');
    expect(rss).toContain('<enclosure url="http://example.com/2023/07/04/big_pic1.jpg" type="image/jpeg"/>');
    expect(rss).toContain('<link>http://example.com/2023/07/04/android-happy-farmer</link>');
    expect(rss).toContain('<pdalink>http://m.example.com/2023/07/04/android-happy-farmer</pdalink>');

  });
  it('check valid content_encoded', () => {
    expect(countPTags(rss)).toBe(4);
  });
});
