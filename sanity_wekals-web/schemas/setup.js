export default {
    name: 'setup',
    title: 'Setup',
    type: 'document',
    fields: [
      { 
        name: 'custom_section_1',
        title: 'Ubah Judul Section Di Page HOME',
        type: 'string',
      },
      { 
        name: 'custom_section_2',
        title: 'Ubah Sub-Judul Section Di Page HOME',
        type: 'string',
      },
      {
        name: 'custom_section_type',
        title : 'Ubah tipe Section Di Page Home [1 : Akan Datang, 2 : Best Seller]',
        type : 'number',
        validation : Rule => Rule.min(1).max(2).integer()
      }
    ]
  }