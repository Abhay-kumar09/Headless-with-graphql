const baseUrl = process.env.WORDPRESS_URL;
import { gql, GraphQLClient } from 'graphql-request';
import { Category } from './types';

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