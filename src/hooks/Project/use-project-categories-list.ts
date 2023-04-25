import { graphql, useStaticQuery } from "gatsby";

interface ProjectCategoriesQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const useProjectCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery<ProjectCategoriesQueryResult>(
    graphql`
      query ProjectCategoriesListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { template: { eq: "project" }, draft: { ne: true } }
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

export default useProjectCategoriesList;
