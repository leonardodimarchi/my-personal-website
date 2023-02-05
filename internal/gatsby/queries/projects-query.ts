import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface ProjectsQueryResult {
  allMarkdownRemark: {
    edges?: Array<types.Edge>;
  };
}

const projectsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<ProjectsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true }, template: { eq: "project" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark;
};

export default projectsQuery;
