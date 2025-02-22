import { faker } from '@faker-js/faker';

export const getConfigData = () => ({
  title: 'My Blog',
  link: 'https://example.com',
  language: 'ru',
});
export const getListData = () => {
  const categories = [
    ['native-draft'],
    ['native-draft', 'format-article'],
    ['native-draft', 'format-article', 'index'],
    ['native-draft', 'format-post', 'noindex', 'comment-subscribers'],
    ['native-draft', 'format-article', 'index', 'comment-all'],
    ['native-draft', 'format-post', 'noindex', 'comment-none'],
    ['native-draft', 'format-article', 'index', 'comment-subscribers'],
    ['native-draft', 'format-post', 'index'],
    ['native-draft', 'format-article', 'noindex', 'comment-none'],
    ['native-draft', 'format-article', 'index', 'comment-all'],
  ];

  return Array.from({ length: 1 }, (_, index) => {
    const category = categories[index % categories.length];

    return {
      title: 'Андроид восстановит ферму в Японии',
      category,
      guid: 1001,
      pubDate: new Date('12-12-2022').toUTCString(),
      enclosure: [{ url: 'http://example.com/2023/07/04/big_pic1.jpg', type: 'image/jpeg' }],
      content_encoded: `<p>${faker.lorem.paragraphs(3, '\n\n')}<p/>`,
      link: 'http://example.com/2023/07/04/android-happy-farmer',
      pdalink: 'http://m.example.com/2023/07/04/android-happy-farmer',
    };
  });
};
