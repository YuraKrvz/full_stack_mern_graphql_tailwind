 const express = require('express');
 const colors = require('colors');
 const cors = require('cors');
 require('dotenv').config()

 const {graphqlHTTP } = require('express-graphql');
 const schema = require('./schema/schema');
 const connectDB = require('./config/db.js')
 const port = process.env.PORT || 5000;

 const app = express();

 //Connect to database
 connectDB();

 app.use(cors())

 app.use('/graphql', graphqlHTTP({schema: schema, graphiql: process.env.NODE_ENV === 'development'}))

 app.listen(port, console.log(`server running on port ${port}`))

// const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
// // const { buildSchema } = require('graphql');
//
// //
// // const schema = buildSchema(`
// //   type Query {
// //     hello: String
// //   }
// // `);
//
// //
// const root = {
//     hello: () => {
//         return 'Hello world!';
//     },
// };
//
// const app = express();
// // app.use('/graphql', graphqlHTTP({schema: schema, graphiql: true})) //process.env.NODE_ENV === 'development'
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
// }));
//
// app.listen(4000, console.log(`server running on port 4000`))