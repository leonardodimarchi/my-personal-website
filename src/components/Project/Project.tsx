import React from "react";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Node } from "@/types";

import { Author } from "./Author";
import { Content } from "./Content";
import { Meta } from "./Meta";
import { Tags } from "./Tags";

import * as styles from "./Project.module.scss";

interface Props {
  project: Node;
}

const Project: React.FC<Props> = ({ project }: Props) => {
  const { html } = project;
  const { tagSlugs } = project.fields;
  const { tags, title, date } = project.frontmatter;

  return (
    <div className={styles.project}>
      <div className={styles.buttons}>
        <Button className={styles.buttonArticles} title="All projects" to="/projects" />
        <ThemeSwitcher />
      </div>

      <div className={styles.content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.footer}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>
    </div>
  );
};

export default Project;
