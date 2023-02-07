import { CreatePagesArgs } from "gatsby";

interface PostTagsQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const postTagsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<PostTagsQueryResult>(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
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

export default postTagsQuery;
