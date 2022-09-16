import {GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';


import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => 'world',
            },
        },
    }),
    subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
        postCreated: {
            type: GraphQLString,
            subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
        },
    }})
});


setInterval(() => {
    pubsub.publish('POST_CREATED', { postCreated: JSON.stringify({ "author": "test"}) });
}, 5000)
