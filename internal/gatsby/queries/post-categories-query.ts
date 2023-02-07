import { CreatePagesArgs } from "gatsby";

interface PostCategoriesQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const postCategoriesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PostCategoriesQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
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

export default postCategoriesQuery;
