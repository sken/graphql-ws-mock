'use strict'

import Fastify from 'fastify';
import fastifyWebsocket from '@fastify/websocket';
import {makeHandler} from 'graphql-ws/lib/use/@fastify/websocket';
import {schema} from "./data/schema.js";


const fastify = Fastify();
fastify.register(fastifyWebsocket);

fastify.register(async (fastify) => {
    fastify.get('/graphql', {websocket: true}, makeHandler({schema}));
});

fastify.listen(4000, (err) => {
    if (err) {
        fastify.log.error(err);
        return process.exit(1);
    }
    console.log('Listening to port 4000');
});
