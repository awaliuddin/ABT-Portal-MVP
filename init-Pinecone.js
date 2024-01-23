/* Initialize: the client and target the “abt-portal-mvp” index: */

import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: '48a2679b-d6c9-4086-8795-f3b018b5aee2'
});
const index = pc.index('abt-portal-mvp');