export default {
  name: 'news',
  title: 'Corporate News Stream',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Disclosure Category',
      type: 'string',
      options: {
        list: [
          {title: 'Corporate Update', value: 'Corporate Update'},
          {title: 'Sustainability & ESG', value: 'Sustainability'},
          {title: 'Financials', value: 'Financials'},
          {title: 'Management', value: 'Management'},
          {title: 'Streaming Agreements', value: 'Streaming Agreements'},
        ],
      },
    },
    {
      name: 'featured',
      title: 'Mark as Featured Anchor Element',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'featuredImage',
      title: 'Featured Graphical Asset',
      type: 'image',
      options: {hotspot: true},
      hidden: ({document}) => !document?.featured,
    },
    {
      name: 'excerpt',
      title: 'Brief Summary Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
  ],
}
