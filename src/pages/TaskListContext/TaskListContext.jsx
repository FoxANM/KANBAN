import React, { useState, useEffect } from "react";
import { LIST_BACKLOG } from "./listTypes";
import { dataMock } from "./dataMock";

const TASK_LIST_KEY = "TASK_LIST_KEY";

const generateNewId = (taskList) => {
  const biggestId = taskList.reduce((acc, item) => {
    return item.id > acc ? item.id : acc;
  }, 0);
  return biggestId + 1;
};

export const TaskListContext = React.createContext(null);

export const TaskListContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [isTaskListLoaded, setTaskListLoaded] = useState(false);

  const updateTask = (id, taskData) => {
    const task = taskList.find((item) => id === item.id);
    const updatedTask = {
      ...task,
      ...taskData,
      id,
    };

    const filteredTaskList = taskList.filter((item) => id !== item.id);

    const updatedTaskList = [...filteredTaskList, updatedTask];

    setTaskList(updatedTaskList);
  };

  const setTaskListType = (id, listType) => {
    updateTask(id, { listType });
  };
  const setTaskDescription = (id, description) => {
    updateTask(id, { description });
  };
  const addNewTask = (taskName) => {
    const id = generateNewId(taskList);
    const newTask = {
      id: id,
      name: taskName,
      description: " ",
      listType: LIST_BACKLOG,
    };

    setTaskList([...taskList, newTask]);
  };

  useEffect(() => {
    const storedTaskList = localStorage.getItem(TASK_LIST_KEY);

    if (storedTaskList == null) {
      setTaskList(dataMock);
    } else {
      try {
        const parsedTaskList = JSON.parse(storedTaskList);
        setTaskList(parsedTaskList);
      } catch (error) {
        console.error("localstorage parsing error", error);
      }
    }

    setTaskListLoaded(true);
  }, []);

  useEffect(() => {
    if (!isTaskListLoaded) {
      return;
    }
    const stringifiedTaskList = JSON.stringify(taskList);
    localStorage.setItem(TASK_LIST_KEY, stringifiedTaskList);
  });

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        addNewTask,
        setTaskListType,
        setTaskDescription,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};