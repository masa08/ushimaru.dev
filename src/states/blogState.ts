import { atom } from 'recoil'
import { Blog } from '../types/blog'

const dummyBlog = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  body: '',
}

export const blogState = atom<Blog>({
  key: 'blogState',
  default: dummyBlog,
})
