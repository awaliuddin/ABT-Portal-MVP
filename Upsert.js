/* Upsert: Then write vectors into a namespace in your index. You use namespaces to help speed up queries and comply with multi-tenancy requirements. */

await index.namespace('ns1').upsert([
  {
     id: 'vec1', 
     values: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
     metadata: { genre: 'drama' }
  },
  {
     id: 'vec2', 
     values: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
     metadata: { genre: 'action' }
  },
  {
     id: 'vec3', 
     values: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
     metadata: { genre: 'drama' }
  },
  {
     id: 'vec4', 
     values: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
     metadata: { genre: 'action' }
  }
]);