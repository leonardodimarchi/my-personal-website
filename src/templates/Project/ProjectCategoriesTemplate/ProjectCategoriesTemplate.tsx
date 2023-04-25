import React from "react";

import { Link } from "gatsby";

import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useProjectCategoriesList, useSiteMetadata } from "@/hooks";
import { toKebabCase } from "@/utils";

const ProjectCategoriesTemplate: React.FC = () => {
  const categories = useProjectCategoriesList();

  return (
    <Layout>
      <Sidebar />
      <Page title="Project Categories">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/project-category/${toKebabCase(category.fieldValue)}/`}>
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
  const pageTitle = `Project Categories - ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default ProjectCategoriesTemplate;
