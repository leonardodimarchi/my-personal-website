import React from "react";

import { graphql } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { useSiteMetadata } from "@/hooks";
import { Node } from "@/types";
import Project from "@/components/Project/Project";

interface Props {
  data: {
    markdownRemark: Node;
  };
}

const ProjectTemplate: React.FC<Props> = ({ data: { markdownRemark } }: Props) => (
  <Layout>
    <Project project={markdownRemark} />
  </Layout>
);

export const query = graphql`
  query ProjectTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export const Head: React.FC<Props> = ({ data }) => {
  const { title, subtitle, url } = useSiteMetadata();

  const {
    frontmatter: {
      title: projectTitle,
      description: projectDescription = "",
      socialImage,
    },
  } = data.markdownRemark;

  const description = projectDescription || subtitle;
  const image = socialImage?.publicURL && url.concat(socialImage?.publicURL);

  return (
    <Meta
      title={`${projectTitle} - ${title}`}
      description={description}
      image={image}
    />
  );
};

export default ProjectTemplate;
