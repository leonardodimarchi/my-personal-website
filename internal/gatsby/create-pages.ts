import { GatsbyNode } from "gatsby";

import * as constants from "./constants";
import * as queries from "./queries";
import * as utils from "./utils";

type CreateWithPagination = (parameters: {
  limit: number;
  group?: string;
  template: string;
  total: number;
  page: number;
  path: string;
}) => void;

const getPaginationPath = (basePath: string, page: number): string =>
  [basePath === "/" ? "" : basePath, "page", page].join("/");

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: constants.routes.notFoundRoute,
    component: constants.templates.notFoundTemplate,
    context: {},
  });

  createPage({
    path: constants.routes.postTagsListRoute,
    component: constants.templates.posts.postTagsTemplate,
    context: {},
  });

  createPage({
    path: constants.routes.postCategoriesListRoute,
    component: constants.templates.posts.postCategoriesTemplate,
    context: {},
  });

  createPage({
    path: constants.routes.projectTagsListRoute,
    component: constants.templates.posts.postTagsTemplate,
    context: {},
  });

  createPage({
    path: constants.routes.projectCategoriesListRoute,
    component: constants.templates.posts.postCategoriesTemplate,
    context: {},
  });

  const pages = await queries.pagesQuery(graphql);

  pages.forEach((edge) => {
    const { node } = edge;

    if (node?.frontmatter?.template === "page" && node?.fields?.slug) {
      createPage({
        path: node?.frontmatter?.slug || node.fields.slug,
        component: constants.templates.pageTemplate,
        context: { slug: node.fields.slug },
      });
    } else if (node?.frontmatter?.template === "post" && node?.fields?.slug) {
      createPage({
        path: node?.frontmatter?.slug || node.fields.slug,
        component: constants.templates.posts.postTemplate,
        context: { slug: node.fields.slug },
      });
    } else if (node?.frontmatter?.template === "project" && node?.fields?.slug) {
      createPage({
        path: node?.frontmatter?.slug || node.fields.slug,
        component: constants.templates.projectTemplate,
        context: { slug: node.fields.slug },
      });
    }
  });

  const createWithPagination: CreateWithPagination = ({
    group,
    template,
    page,
    path,
    total,
    limit,
  }) => {
    createPage({
      component: template,
      path: page === 0 ? path : getPaginationPath(path, page),
      context: {
        group,
        limit,
        offset: page * limit,
        pagination: {
          currentPage: page,
          prevPagePath:
            page <= 1 ? path : getPaginationPath(path, utils.decrement(page)),
          nextPagePath: getPaginationPath(path, utils.increment(page)),
          hasNextPage: page !== utils.decrement(total),
          hasPrevPage: page !== 0,
        },
      },
    });
  };

  const postCategories = await queries.postCategoriesQuery(graphql);
  const metadata = await queries.metadataQuery(graphql);
  const postsLimit = metadata?.postsLimit ?? 1;

  postCategories.forEach((category) => {
    const total = Math.ceil(category.totalCount / postsLimit);
    const path = utils.concat(
      constants.routes.postCategoryRoute,
      "/",
      utils.toKebabCase(category.fieldValue),
    );

    for (let page = 0; page < total; page += 1) {
      createWithPagination({
        limit: postsLimit,
        group: category.fieldValue,
        template: constants.templates.posts.postCategoryTemplate,
        total,
        page,
        path,
      });
    }
  });

  const postTags = await queries.postTagsQuery(graphql);

  postTags.forEach((tag) => {
    const path = utils.concat(
      constants.routes.postTagRoute,
      "/",
      utils.toKebabCase(tag.fieldValue),
    );

    const total = Math.ceil(tag.totalCount / postsLimit);

    for (let page = 0; page < total; page += 1) {
      createWithPagination({
        limit: postsLimit,
        group: tag.fieldValue,
        template: constants.templates.posts.postTagTemplate,
        total,
        page,
        path,
      });
    }
  });

  const path = constants.routes.indexRoute;
  const template = constants.templates.posts.postsTemplate;
  const posts = await queries.postsQuery(graphql);
  const total = Math.ceil((posts?.edges?.length ?? 0) / postsLimit);

  for (let page = 0; page < total; page += 1) {
    createWithPagination({
      limit: postsLimit,
      template,
      total,
      page,
      path,
    });
  }

  const projectCategories = await queries.projectCategoriesQuery(graphql);
  const projectsLimit = metadata?.projectsLimit ?? 1;

  projectCategories.forEach((category) => {
    const total = Math.ceil(category.totalCount / projectsLimit);
    const path = utils.concat(
      constants.routes.projectCategoryRoute,
      "/",
      utils.toKebabCase(category.fieldValue),
    );

    for (let page = 0; page < total; page += 1) {
      createWithPagination({
        limit: projectsLimit,
        group: category.fieldValue,
        template: constants.templates.posts.postCategoryTemplate,
        total,
        page,
        path,
      });
    }
  });

  const projectTags = await queries.projectTagsQuery(graphql);

  projectTags.forEach((tag) => {
    const path = utils.concat(
      constants.routes.projectTagRoute,
      "/",
      utils.toKebabCase(tag.fieldValue),
    );

    const total = Math.ceil(tag.totalCount / projectsLimit);

    for (let page = 0; page < total; page += 1) {
      createWithPagination({
        limit: projectsLimit,
        group: tag.fieldValue,
        template: constants.templates.posts.postTagTemplate,
        total,
        page,
        path,
      });
    }
  });

  
  const projectsPath = constants.routes.projectsRoute;
  const projectsTemplate = constants.templates.projectsTemplate;
  const projects = await queries.projectsQuery(graphql);
  const totalProjects = Math.ceil((projects?.edges?.length ?? 0) / projectsLimit);

  for (let page = 0; page < totalProjects; page += 1) {
    createWithPagination({
      limit: projectsLimit,
      template: projectsTemplate,
      total: totalProjects,
      page,
      path: projectsPath,
    });
  }
};

export { createPages };
