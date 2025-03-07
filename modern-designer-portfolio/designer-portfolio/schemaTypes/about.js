export default {
    name: 'about',
    title: 'About Me',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Short Description',
            type: 'text',
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'degree', title: 'Degree', type: 'string' },
                        { name: 'school', title: 'School', type: 'string' },
                        { name: 'year', title: 'Year', type: 'string' },
                    ],
                },
            ],
        },
        {
            name: 'experience',
            title: 'Experience',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'role', title: 'Role', type: 'string' },
                        { name: 'company', title: 'Company', type: 'string' },
                        { name: 'period', title: 'Period', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                    ],
                },
            ],
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'category', title: 'Category', type: 'string' },
                        {
                            name: 'items',
                            title: 'Items',
                            type: 'array',
                            of: [{ type: 'string' }],
                        },
                    ],
                },
            ],
        },
    ],
};
