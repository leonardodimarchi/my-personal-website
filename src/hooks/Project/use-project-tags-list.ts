import { graphql, useStaticQuery } from "gatsby";

interface ProjectTagsQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const useProjectTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery<ProjectTagsQueryResult>(
    graphql`
      query ProjectTagsListQuery {
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
    `,
  );

  return allMarkdownRemark.group || [];
};

export default useProjectTagsList;
