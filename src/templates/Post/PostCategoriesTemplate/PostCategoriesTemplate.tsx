import React from "react";

import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { usePostCategoriesList, useSiteMetadata } from "@/hooks";
import { toKebabCase } from "@/utils";

const PostCategoriesTemplate: React.FC = () => {
  const categories = usePostCategoriesList();

  return (
    <Layout>
      <Sidebar />
      <Page title="Post Categories">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/post-category/${toKebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
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
  const pageTitle = `Categories - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default PostCategoriesTemplate;
