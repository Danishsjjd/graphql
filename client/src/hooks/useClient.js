import { request, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const endpoint = "http://localhost:5000/graphql";
export default function useClient() {
  return useQuery(["posts"], async () => {
    return await request(
      endpoint,
      gql`
        query getClient($id: ID!) {
          client(id: $id) {
            name
            id
            phone
            email
          }
        }
      `,
      { id: "63639b60b75548d8184a03f4" }
    );
  });
}
