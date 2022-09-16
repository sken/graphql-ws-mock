import WebSocket from 'ws'
import {createClient} from 'graphql-ws';

const client = createClient({
    url: 'ws://localhost:4000/graphql',
    webSocketImpl: WebSocket
});


client.subscribe(
    {
        query: '{ hello }',
    },
    {
        next: (data) => {
            console.log(data)
        },
        error: () => {
        },
        complete: () => {

        },
    },
);


client.subscribe(
    {
        query: 'subscription { postCreated }',
    },
    {
        next: (data) => {
            console.log(data)
        },
        error: () => {
        },
        complete: () => {

        },
    });


