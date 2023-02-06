import { CreatePagesArgs } from "gatsby";

interface ProjectCategoriesQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const projectCategoriesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<ProjectCategoriesQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "project" }, draft: { ne: true } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark?.group ?? [];
};

export default projectCategoriesQuery;
