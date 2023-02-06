import { graphql, useStaticQuery } from "gatsby";

interface PostTagsQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const usePostTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery<PostTagsQueryResult>(
    graphql`
      query PostTagsListQuery {
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
    `,
  );

  return allMarkdownRemark.group || [];
};

export default usePostTagsList;
