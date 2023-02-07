import { graphql, useStaticQuery } from "gatsby";

interface PostCategoriesQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const usePostCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery<PostCategoriesQueryResult>(
    graphql`
      query PostCategoriesListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { template: { eq: "post" }, draft: { ne: true } }
          }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMarkdownRemark.group ?? [];
};

export default usePostCategoriesList;
