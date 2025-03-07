import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '5uch98fv', // Replace with your project ID
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-03-08', // Use the latest API version
});

export default client;
