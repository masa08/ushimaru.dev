import { atom } from 'recoil'
import { Blog } from '../types/blog'

export const blogListState = atom<Blog[]>({
  key: 'blogListState',
  default: [],
})
