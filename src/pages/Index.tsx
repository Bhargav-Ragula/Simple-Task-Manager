
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@/types/task';
import { AddTaskDialog } from '@/components/AddTaskDialog';
import { TaskCard } from '@/components/TaskCard';
import { useToast } from '@/components/ui/use-toast';

export default function Index() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const { toast } = useToast();

  const handleAddTask = (taskData: Omit<Task, 'id' | 'status' | 'createdAt'>) => {
    const newTask: Task = {
      id: uuidv4(),
      ...taskData,
      status: 'todo',
      createdAt: new Date(),
    };

    setTasks((prev) => [...prev, newTask]);
    toast({
      title: "Task created",
      description: "Your new task has been added successfully.",
    });
  };

  const handleCompleteTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, status: 'completed' }
          : task
      )
    );
    toast({
      title: "Task completed",
      description: "Great job! The task has been marked as complete.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-custom-text">Task Manager</h1>
          <AddTaskDialog onAddTask={handleAddTask} />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={handleCompleteTask}
            />
          ))}
          {tasks.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">No tasks yet. Click "Add New Task" to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
