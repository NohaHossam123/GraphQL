const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');
const cors = require('cors');
const PORT = 5000;

const app = express();
app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, (err)=>{
    if(!err) console.log(`started server on port ${PORT}`);
})
