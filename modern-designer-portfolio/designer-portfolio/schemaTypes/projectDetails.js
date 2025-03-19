export default {
    name: 'projectDetails',
    title: 'Project Details',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'category', title: 'Category', type: 'string' },
        { name: 'client', title: 'Client', type: 'string' },
        { name: 'duration', title: 'Duration', type: 'string' },
        { name: 'year', title: 'Year', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'challenge', title: 'Challenge', type: 'text' },
        { name: 'solution', title: 'Solution', type: 'text' },
        {
            name: 'images',
            title: 'Project Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
            name: 'tools',
            title: 'Tools Used',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'deliverables',
            title: 'Deliverables',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};
