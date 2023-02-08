import React from "react";

import { Link, navigate } from "gatsby";

import { Edge } from "@/types";

import * as styles from "./ProjectFeed.module.scss";

type Props = {
  edges: Array<Edge>;
};


const ProjectFeed: React.FC<Props> = ({ edges }: Props) => {
  return (
    <>
      <p>This is the list of some of the projects that i worked on in these years.</p>

      <div className={styles.projectFeed}>
        {edges.map((edge) => {
          return (
            <div onClick={() => navigate(edge.node.frontmatter?.slug || edge.node.fields.slug)} className={styles.item} key={edge.node.fields.slug}>
              <div className={styles.meta}>
                <time
                  className={styles.time}
                  dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                >
                  {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </time>
                <span className={styles.divider} />
                <span className={styles.category}>
                  <Link to={edge.node.fields.categorySlug} className={styles.link}>
                    {edge.node.frontmatter.category}
                  </Link>
                </span>
              </div>
              <h2 className={styles.title}>
                <Link
                  className={styles.link}
                  to={edge.node.frontmatter?.slug || edge.node.fields.slug}
                >
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p className={styles.description}>
                {edge.node.frontmatter.description}
              </p>

              {edge.node.frontmatter.socialImage?.publicURL && <img src={edge.node.frontmatter.socialImage.publicURL} />}
            </div>
          );
        })}
      </div>
    </>
  )
};

export default ProjectFeed;
