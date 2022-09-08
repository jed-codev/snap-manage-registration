import { makeExecutableSchema } from "graphql-tools";
import { graphql } from "graphql";
import { resolvers } from "../../resolvers";
import { loadTypeDefs } from "../../utils/helpers";

describe("Post Test Cases", () => {
  let schema;

  it("should load schema", async () => {
    const typeDefs = await loadTypeDefs();
    schema = makeExecutableSchema({ typeDefs, resolvers });
  });

  it("should run this test", async () => {
    const payload = { subject: "test", content: "post test content" };
    const query = `
      mutation {
        postCreate(data: {
          subject: "${payload.subject}",
          content:"${payload.content}"
        }) {
          id
          subject
          content
        }
      }
    `;
    const result = await graphql(schema, query);
    const data = result.data?.postCreate;
    expect(result).toBeTruthy();
    expect(result.errors).toBeFalsy();
    expect(typeof data.subject).toBe("string");
    expect(typeof data.content).toBe("string");
    expect(data.subject).toEqual(payload.subject);
    expect(data.content).toEqual(payload.content);
  });
});
