import { defineType, defineField } from "sanity";
import {DocumentTextIcon} from '@sanity/icons'


export const author = defineType({
  name: 'author',
  icon: DocumentTextIcon,
  type: 'document',
  title: 'Autore',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string'
    }),
    defineField({
      name: 'role',
      title: 'Ruolo',
      type: 'string'
    })
  ]
})