export default {
    name: 'galery',
    title: 'Galery',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Foto Galery',
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