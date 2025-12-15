import { defineType, defineField } from "sanity";
import { TagIcon } from '@sanity/icons'

export const postCategory = defineType({
	name: 'postCategory',
	icon: TagIcon,
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
		})
	]
})