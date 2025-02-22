import { describe, it, expect } from 'vitest';

import { checkXmlOptions, checkItemParameters } from '../src/utils/validator.ts';


describe('checkData function', () => {
  const validOptons = {
    title: 'My Blog',
    link: 'https://example.com',
    language: 'ru',
  };
  it('should validate correct data', () => {
    expect(() => checkXmlOptions(validOptons)).not.toThrow();
  });
});
describe('checkData function', () => {
  it('should validate correct data', () => {
    const validItem = {
      title: 'Test Title',
      category: ['format-article', 'index'],
      guid: '12345',
      pubDate: '2023-10-01',
      content_encoded: 'Test content',
      link: 'https://example.com',
      enclosure: [
        {
          url: 'http://example.com/2023/07/04/big_pic1.jpg',
          type: 'image/jpeg'
        },
        {
          url: 'http://example.com/2023/07/04/big_pic2.jpg',
          type: 'image/jpeg'
        }
      ],
    };

    expect(() => checkItemParameters([validItem])).not.toThrow();
  });

  it('should throw an error if "title" is missing', () => {
    const invalidItem = {
      category: ['format-article', 'index'],
      guid: '12345',
      pubDate: '2023-10-01',
      content_encoded: 'Test content',
      link: 'https://example.com',
    };

    expect(() => checkItemParameters([invalidItem])).toThrow('title is required.');
  });

  it('should throw an error if "category" contains invalid values', () => {
    const invalidItem = {
      title: 'Test Title',
      category: ['invalid-category'],
      guid: '12345',
      pubDate: '2023-10-01',
      content_encoded: 'Test content',
      link: 'https://example.com',
    };

    expect(() => checkItemParameters([invalidItem])).toThrow(
      '"category" must contain only valid values: native-draft, format-article, format-post, index, noindex, comment-all, comment-subscribers, comment-none.'
    );
  });

  it('should throw an error if "guid" is not a string or number', () => {
    const invalidItem = {
      title: 'Test Title',
      category: ['format-article', 'index'],
      guid: null, // Некорректное значение
      pubDate: '2023-10-01',
      content_encoded: 'Test content',
      link: 'https://example.com',
    };

    expect(() => checkItemParameters([invalidItem])).toThrow('"guid" must be a number or a string');
  });

  it('should throw an error if "enclosure" contains invalid objects', () => {
    const invalidItem = {
      title: 'Test Title',
      category: ['format-article', 'index'],
      guid: '12345',
      pubDate: '2023-10-01',
      content_encoded: 'Test content',
      link: 'https://example.com',
      enclosure: [
        {
          type: 'image/jpeg' // Отсутствует url
        }
      ],
    };

    expect(() => checkItemParameters([invalidItem])).toThrow(
      '"enclosure" must contain only valid values - objects with the url parameter'
    );
  });

  it('should not throw an error if "enclosure" is optional and missing', () => {
    const validItem = {
      title: 'Test Title',
      category: ['format-article', 'index'],
      guid: '12345',
      pubDate: '2023-10-01',
      content_encoded: 'Test content',
      link: 'https://example.com',
    };

    expect(() => checkItemParameters([validItem])).not.toThrow();
  });
});
