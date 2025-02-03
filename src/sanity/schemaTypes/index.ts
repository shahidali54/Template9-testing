import { type SchemaTypeDefinition } from 'sanity'
import chef from './chefs';
import food from './foods';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef],
};