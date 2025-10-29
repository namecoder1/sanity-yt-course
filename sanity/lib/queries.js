import { defineQuery } from "next-sanity";

export const getPosts = defineQuery(`
*[_type == 'post'] | order(_createdAt desc) {
  'id': _id,
  title,
  'slug': slug.current,
  excerpt,
  'image': image.asset->url,
  'imageAlt': image.altText,
  publishedAt,
  category -> {title, 'slug': slug.current}
}`)

export const getPost = defineQuery(`
*[_type == 'post' && slug.current == $slug][0] {
  'id': _id,
  title,
  'slug': slug.current,
  excerpt,
  'image': image.asset->url,
  'imageAlt': image.altText,
  publishedAt,
  category -> {title, 'slug': slug.current},
  text
}`)

export const getCategories = defineQuery(`
*[_type == 'postCategory'] | order(_createdAt desc) {
  'id': _id,
  title,
  'slug': slug.current,
}`)

export const getPostsByCategory = defineQuery(`
*[_type == 'post' && category->slug.current == $categorySlug] {
  'id': _id,
  title,
  'slug': slug.current,
  excerpt,
  'image': image.asset->url,
  'imageAlt': image.altText,
  publishedAt,
  category -> {title, 'slug': slug.current}
}`)