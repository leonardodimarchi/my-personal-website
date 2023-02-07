import React from "react";

import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata, usePostTagsList } from "@/hooks";
import { toKebabCase } from "@/utils";

const PostTagsTemplate: React.FC = () => {
  const tags = usePostTagsList();

  return (
    <Layout>
      <Sidebar />
      <Page title="Post Tags">
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/post-tag/${toKebabCase(tag.fieldValue)}/`}>
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
  const pageTitle = `Post Tags - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default PostTagsTemplate;
