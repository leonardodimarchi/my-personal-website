import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              bio
              name
              photo
              contacts {
                email
                github
                linkedin
              }
            }
            menu {
              path
              label
            }
            url
            title
            subtitle
            copyright
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
