type Placement = 'native-draft';
type PublicationType = 'format-article' | 'format-post';
type Indexing = 'index' | 'noindex';
type CommentingMethod = 'comment-all' | 'comment-subscribers' | 'comment-none';
export type Category = | [Placement]
  | [Placement, PublicationType]
  | [Placement, PublicationType, Indexing]
  | [Placement, PublicationType, Indexing, CommentingMethod];

export interface Enclosure {
  url: string;
  type: string;
}
export interface Article {
  title: string; // Заголовок статьи
  category: Category; // Настройки публикации
  guid: number | string; // Id
  pubDate: string; // Дата публикации
  enclosure?: Enclosure[]; // Ссылка на картинку
  content_encoded: string; // Контент статьи в html
  link: string; // Ссылка на статью
  pdalink?: string; // Ссылка на мобильную версию статьи
  description?: string; // Описание в ленте
  [key: string]: string | number | boolean | object | null | Array<unknown>;
}

export interface RssOptions {
  title: string;
  link: string;
  language: string;
  [key: string]: string | number | boolean | object | null | Array<unknown>;
}
