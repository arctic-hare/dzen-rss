# Dzen RSS

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)

A [Node.js](https://nodejs.org/) library for creating, configuring, and managing an RSS feed for [Dzen](https://dzen.ru/).

## Features

- Generate RSS feeds in XML format.
- Support for custom RSS feed configurations.
- Easy integration with Node.js projects.
- Written in TypeScript for better type safety and developer experience.

An XML builder for [node.js](https://nodejs.org/).

## Installation

To install the library, use npm or yarn:

```bash
npm install dzen-rss
```
or
```
yarn add dzen-rss
```

## Usage
Here's a basic example of how to use the library to create an RSS feed:

```typescript
import createRssFeed from 'dzen-rss';

const options = {
  title: 'My RSS Feed',
  link: 'https://example.com',
  language: 'en',
};

const articles = [
  {
    title: 'Article 1',
    link: 'https://example.com/article1',
    guid: '12345',
    pubDate: '2023-10-01',
    category: ['news', 'tech'],
    content_encoded: 'This is the content of article 1.',
  },
];

const rssFeed = createRssFeed(options, articles);
console.log(rssFeed);
```
### Output

```xml
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:georss="http://www.georss.org/georss">
  <channel>
    <title>My RSS Feed</title>
    <link>https://example.com</link>
    <language>en</language>
    <item>
      <title>Article 1</title>
      <link>https://example.com/article1</link>
      <guid>12345</guid>
      <pubDate>2023-10-01</pubDate>
      <category>news</category>
      <category>tech</category>
      <content:encoded>This is the content of article 1.</content:encoded>
    </item>
  </channel>
</rss>
```

## Development
### Prerequisites
- Node.js (version 16.0.0 or higher)
- npm or yarn
- TypeScript (version 5.6.3 or higher)
- tshy (https://github.com/evanw/tshy)

## Scripts

- npm run dev: Run the development server.
- npm run build: Build the project.
- npm run lint:ts: Check TypeScript types.
- npm run eslint: Run ESLint for code quality checks.
- npm run eslint-fix: Fix ESLint issues automatically.
- npm run test: Run tests and linting.
- npm run test:vi: Run tests using Vitest.

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](https://github.com/arctic-hare/dzen-rss/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).


