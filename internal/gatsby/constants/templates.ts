import path from "path";

const templates = Object.freeze({
  indexTemplate: path.resolve(
    "./src/templates/IndexTemplate/IndexTemplate.tsx",
  ),
  notFoundTemplate: path.resolve(
    "./src/templates/NotFoundTemplate/NotFoundTemplate.tsx",
  ),
  postCategoryTemplate: path.resolve(
    "./src/templates/PostCategoryTemplate/PostCategoryTemplate.tsx",
  ),
  postCategoriesTemplate: path.resolve(
    "./src/templates/PostCategoriesTemplate/PostCategoriesTemplate.tsx",
  ),
  projectsTemplate: path.resolve(
    "./src/templates/ProjectsTemplate/ProjectsTemplate.tsx",
  ),
  postTagTemplate: path.resolve("./src/templates/PostTagTemplate/PostTagTemplate.tsx"),
  postTagsTemplate: path.resolve("./src/templates/PostTagsTemplate/PostTagsTemplate.tsx"),
  pageTemplate: path.resolve("./src/templates/PageTemplate/PageTemplate.tsx"),
  postTemplate: path.resolve("./src/templates/PostTemplate/PostTemplate.tsx"),
  projectTemplate: path.resolve("./src/templates/ProjectTemplate/ProjectTemplate.tsx"),
});

export default templates;
