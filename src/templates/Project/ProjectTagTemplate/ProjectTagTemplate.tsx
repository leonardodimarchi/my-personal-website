import React from "react";

import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { AllMarkdownRemark, PageContext } from "@/types";
import { ProjectFeed } from "@/components/ProjectFeed";

interface Props {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
  pageContext: PageContext;
}

const ProjectTagTemplate: React.FC<Props> = ({ data, pageContext }: Props) => {
  const { group, pagination } = pageContext;
  const { prevPagePath, nextPagePath, hasPrevPage, hasNextPage } = pagination;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Sidebar />
      <Page title={group}>
        <ProjectFeed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagTemplate($group: String, $limit: Int!, $offset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      filter: {
        frontmatter: {
          tags: { in: [$group] }
          template: { eq: "project" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            date
            description
            tags
            title
            slug
            category
            socialImage {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export const Head: React.FC<Props> = ({ pageContext }) => {
  const { title, subtitle } = useSiteMetadata();

  const {
    group,
    pagination: { currentPage: page },
  } = pageContext;

  const pageTitle =
    page > 0 ? `${group} - Page ${page} - ${title}` : `${group} - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default ProjectTagTemplate;
