import React, { useCallback, useState } from 'react';
import { Checkbox, Input, Button, Typography } from 'antd';
import './TodoList.scss';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodoStatus,
} from '../../store/slice';

function TodoList(): JSX.Element {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState<string>('');

  const tasks = useAppSelector((state) => state.todoReducer.todos);
  const [newTask, setNewTask] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleNewTaskChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTask(event.target.value);
    },
    []
  );

  const handleAddTask = useCallback(() => {
    if (newTask) {
      dispatch(
        addTodo({ id: Date.now(), title: newTask.trim(), isCompleted: false })
      );
      setNewTask('');
    }
  }, [dispatch, newTask]);

  const handleDeleteTask = useCallback(
    (taskId: number) => {
      dispatch(removeTodo(taskId));
    },
    [dispatch]
  );

  const handleToggleTaskDone = useCallback(
    (taskId: number) => {
      dispatch(toggleTodoStatus(taskId));
    },
    [dispatch]
  );

  const handleEditTask = useCallback(
    (taskId: number) => {
      const taskToEdit = tasks.find((task) => task.id === taskId);
      if (taskToEdit) {
        setEditingTaskId(taskId);
        setEditingTaskTitle(taskToEdit.title);
      }
    },
    [tasks]
  );

  const handleCancelEdit = useCallback(() => {
    setEditingTaskId(null);
    setEditingTaskTitle('');
  }, []);

  const handleUpdateTask = useCallback(() => {
    const updatedTask = tasks.find((task) => task.id === editingTaskId);

    if (updatedTask) {
      dispatch(editTodo({ ...updatedTask, title: editingTaskTitle }));
    }

    setEditingTaskId(null);
    setEditingTaskTitle('');
  }, [editingTaskTitle, tasks, editingTaskId, dispatch]);

  return (
    <div className="TodoList">
      <Typography.Title level={1}>Todo List</Typography.Title>
      <div className="TodoList__add-task">
        <Input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Add a new task"
        />
        <Button onClick={handleAddTask}>Add</Button>
      </div>
      <ul className="TodoList__task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <Input
                  type="text"
                  value={editingTaskTitle}
                  onChange={(e) => setEditingTaskTitle(e.target.value)}
                />
                <Button onClick={handleUpdateTask}>Update</Button>
                <Button onClick={handleCancelEdit}>Cancel</Button>
              </>
            ) : (
              <>
                <Checkbox
                  checked={task.isCompleted}
                  onChange={() => handleToggleTaskDone(task.id)}
                >
                  {task.title}
                </Checkbox>
                <Button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </Button>
                <Button onClick={() => handleEditTask(task.id)}>Edit</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
