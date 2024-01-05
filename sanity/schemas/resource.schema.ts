
const schema = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: ( Rule: any ) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: ( Rule: any ) => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
      validation: ( Rule: any ) => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'string',
      validation: ( Rule: any ) => Rule.required(),
      options: {
        list : ['Front-End', 'Back-End','NextJS', 'Full-Stack','other','TypeScript','JavaScript']
      },
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    }
  ]
}

export default schema;
