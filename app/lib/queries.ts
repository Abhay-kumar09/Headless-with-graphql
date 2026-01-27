import { gql, GraphQLClient } from 'graphql-request';
import { Category } from './types';

const baseUrl = process.env.WORDPRESS_URL;

if (!baseUrl) {
    throw new Error("WORDPRESS_URL is not defined in environment variables");
}

const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getCategories(): Promise<Category[]> {
    const query = gql`
        query GetCategories {
            categories(first: 100) {
               nodes{
                   id
                   name
                   slug
               }
            }
        }
    `

    const data = await client.request<{ categories: { nodes: Category[] } }>(query);
    return data.categories.nodes;
}