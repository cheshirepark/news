// schemas/post.js
export default {
  name: 'post',
  title: 'Press & News Releases',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title / Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Classification',
      type: 'string',
      options: {
        list: [
          {title: 'Press Release', value: 'press-release'},
          {title: 'Community & Sustainability', value: 'sustainability'},
          {title: 'Corporate Update', value: 'corporate'},
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'excerpt',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      description: 'Appears on the main listing page card to provide a quick overview.',
    },
    {
      name: 'body',
      title: 'Content Body',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
    {
      name: 'attachedDocument',
      title: 'Official Document Download (PDF)',
      type: 'file',
      description: 'Upload official signed statements or reports here.',
    },
  ],
}
