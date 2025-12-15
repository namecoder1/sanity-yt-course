import { defineType, defineField } from "sanity";
import {DocumentTextIcon} from '@sanity/icons'


export const post = defineType({
	name: 'post',
	icon: DocumentTextIcon,
	type: 'document',
	title: 'Blog Post',
	fields: [
		defineField({
			name: 'title',
			title: 'Titolo',
			type: 'string'
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		}),
		defineField({
			name: 'excerpt',
			title: 'Descrizione',
			type: 'text',
			rows: '4'
		}),
		defineField({
			name: 'image',
			title: 'Immagine',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				defineField({
					name: 'altText',
					title: 'Testo Alternativo',
					type: 'string'
				})
			]
		}),
		defineField({
			name: 'publishedAt',
			title: 'Pubblicato il',
			type: 'datetime'
		}),
		defineField({
			name: 'category',
			title: 'Categoria',
			type: 'reference',
			to: { type: 'postCategory'}
		}),
		defineField({
			name: 'text',
			title: 'Testo',
			type: 'blockContent'
		}),
		defineField({
			name: 'featured',
			title: 'In Evidenza',
			type: 'boolean'
		}),
		defineField({
			name: 'views',
			title: 'Visualizzazioni',
			type: 'number'
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags'
			}
		}),
		defineField({
			name: 'author',
			title: 'Autore',
			type: 'reference',
			to: { type: 'author' }
		})
	]
})