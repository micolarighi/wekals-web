export default {
    name: 'product',
    title: 'Produk',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Foto Barang',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Nama Barang',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug (Tekan Generate)',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Harga',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Detail Barang',
        type: 'string',
      }
    ]
  }