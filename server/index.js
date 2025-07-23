require('dotenv').config();
const fastify = require('fastify')({logger : true});


const start = async () => {
    try {
        await fastify.listen({port : process.env.PORT})
    } catch (err) {
        console.log(`the error is ${err}`)
    }
}