export default {
    name: 'moment',
    title: 'Moment',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Foto Moment',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'judul',
        title: 'Judul',
        type: 'string',
      },
      { 
        name: 'desc',
        title: 'Deskripsi Singkat',
        type: 'string',
      },
    ]
  }