/* Query: Search the "ns1" namespace in your index for the 2 vectors that are most similar to an example vector, filtering for results that match a specific metadata value: */

await index.namespace('ns1').query({
  topK: 2,
  vector: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
  includeValues: true,
  includeMetadata: true,
  filter: { genre: { '$eq': 'action' }}
});