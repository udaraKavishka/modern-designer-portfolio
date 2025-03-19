export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Project ID',
            description: 'A unique identifier for the project.',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The title of the project.',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'A brief description of the project.',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Project Image',
            description: 'An image representing the project.',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            description: 'The category of the project (e.g., UI/UX Design, Web Design).',
        },
    ],
};
