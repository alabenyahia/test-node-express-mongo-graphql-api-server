const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const graphqlSchema = require('./graphql/schema')
const cors = require('cors')

require('./database/connection')

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema:graphqlSchema,
    graphiql: true
}))

app.listen(5000, () => console.log("Server started at port 5000"))