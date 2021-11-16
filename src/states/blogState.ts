import { atom } from 'recoil';
import { Blog } from '../types/blog';

const dummyBlog = {
  id: 'hafm7imub5',
  createdAt: '2021-11-14T06:40:04.913Z',
  updatedAt: '2021-11-14T06:51:39.273Z',
  publishedAt: '2021-11-14T06:40:04.913Z',
  revisedAt: '2021-11-14T06:51:39.273Z',
  title: 'テスト投稿',
  body: '<p>テスト投稿テスト投稿テスト投稿<br></p>',
};

export const blogState = atom<Blog>({
  key: 'blogState',
  default: dummyBlog,
});
