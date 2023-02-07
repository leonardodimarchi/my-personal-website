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
  notFoundTemplate: path.resolve(
    "./src/templates/NotFoundTemplate/NotFoundTemplate.tsx",
  ),
  pageTemplate: path.resolve("./src/templates/PageTemplate/PageTemplate.tsx"),
  projectTemplate: path.resolve("./src/templates/ProjectTemplate/ProjectTemplate.tsx"),
  projectsTemplate: path.resolve(
    "./src/templates/ProjectsTemplate/ProjectsTemplate.tsx",
  ),
});

export default templates;
