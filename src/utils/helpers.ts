import { ObjectSchema } from "joi";
import { loadFiles } from "@graphql-tools/load-files";
import { DocumentNode } from "graphql";

export const validateArgs = (validationSchema: ObjectSchema, payload) => {
  const validationResult = validationSchema.validate(payload, {
    abortEarly: false,
  });
  if (validationResult.error) {
    throw new Error(validationResult.error.message);
  }
};

export const loadTypeDefs = async () =>
  (await loadFiles("src/schemata/*.schema.graphql")) as DocumentNode[];
