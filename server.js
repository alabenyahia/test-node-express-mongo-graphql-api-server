const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const graphqlSchema = require('./graphql/schema')
require('./database/connection')

app.use('/graphql', graphqlHTTP({
    schema:graphqlSchema,
    graphiql: true
}))

app.listen(5000, () => console.log("Server started at port 5000"))