import { CreatePagesArgs } from "gatsby";

interface ProjectTagsQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const projectTagsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<ProjectTagsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "project" }, draft: { ne: true } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark?.group || [];
};

export default projectTagsQuery;
