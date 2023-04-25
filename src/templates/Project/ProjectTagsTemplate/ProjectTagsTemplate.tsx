import React from "react";

import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useProjectTagsList, useSiteMetadata } from "@/hooks";
import { toKebabCase } from "@/utils";

const PostTagsTemplate: React.FC = () => {
  const tags = useProjectTagsList();

  return (
    <Layout>
      <Sidebar />
      <Page title="Project Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/project-tag/${toKebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const Head: React.FC = () => {
  const { title, subtitle } = useSiteMetadata();
  const pageTitle = `Project Tags - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default PostTagsTemplate;
