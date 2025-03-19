import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '5uch98fv', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-03-10', 
});

export default client;
