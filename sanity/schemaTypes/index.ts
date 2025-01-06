import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { startup } from "./startup";

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  // types: [blockContentType, categoryType, postType, authorType],
  types: [author, startup],
};
