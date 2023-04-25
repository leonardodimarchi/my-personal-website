import path from "path";

const templates = Object.freeze({
  posts: {
    postsTemplate: path.resolve(
      "./src/templates/Post/PostsTemplate/PostsTemplate.tsx",
    ),
    postCategoryTemplate: path.resolve(
      "./src/templates/Post/PostCategoryTemplate/PostCategoryTemplate.tsx",
    ),
    postCategoriesTemplate: path.resolve(
      "./src/templates/Post/PostCategoriesTemplate/PostCategoriesTemplate.tsx",
    ),
    postTagTemplate: path.resolve("./src/templates/Post/PostTagTemplate/PostTagTemplate.tsx"),
    postTagsTemplate: path.resolve("./src/templates/Post/PostTagsTemplate/PostTagsTemplate.tsx"),
    postTemplate: path.resolve("./src/templates/Post/PostTemplate/PostTemplate.tsx"),
  },
  projects: {
    projectsTemplate: path.resolve(
      "./src/templates/Project/ProjectsTemplate/ProjectsTemplate.tsx",
    ),
    projectCategoryTemplate: path.resolve(
      "./src/templates/Project/ProjectCategoryTemplate/ProjectCategoryTemplate.tsx",
    ),
    projectCategoriesTemplate: path.resolve(
      "./src/templates/Project/ProjectCategoriesTemplate/ProjectCategoriesTemplate.tsx",
    ),
    projectTagTemplate: path.resolve("./src/templates/Project/ProjectTagTemplate/ProjectTagTemplate.tsx"),
    projectTagsTemplate: path.resolve("./src/templates/Project/ProjectTagsTemplate/ProjectTagsTemplate.tsx"),
    projectTemplate: path.resolve("./src/templates/Project/ProjectTemplate/ProjectTemplate.tsx"),
  },
  notFoundTemplate: path.resolve(
    "./src/templates/NotFoundTemplate/NotFoundTemplate.tsx",
  ),
  pageTemplate: path.resolve("./src/templates/PageTemplate/PageTemplate.tsx"),
});

export default templates;
