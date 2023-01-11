import React, { useContext } from "react";
import { LIST_FINISHED, LIST_BACKLOG } from "../../pages/TaskListContext/listTypes";
import { TaskListContext } from "../../pages/TaskListContext/TaskListContext";
import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export const Footer = (props) => {
  const { taskList } = useContext(TaskListContext);

  const taskListBacklog = taskList.filter(
    (item) => item.listType === LIST_BACKLOG
  );

  const taskListFinished = taskList.filter(
    (item) => item.listType === LIST_FINISHED
  );
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_info}>
          <div className={styles.footer_content}>
            <div className={styles.footer_activ}>
              Active tasks: {taskListBacklog.length}
            </div>
            <div className={styles.footer_finish}>
              Finished task: {taskListFinished.length}
            </div>
          </div>
          <div className={styles.footer_name_year}>
            Kanban board by Alexander, 2023
          </div>
        </div>
      </Container>
    </footer>
  );
};