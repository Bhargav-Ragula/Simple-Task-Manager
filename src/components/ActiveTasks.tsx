
import React from 'react';
import { Task } from '@/types/task';
import { TaskCard } from '@/components/TaskCard';
import { AddTaskDialog } from '@/components/AddTaskDialog';

interface ActiveTasksProps {
  tasks: Task[];
  onAddTask: (task: Omit<Task, 'id' | 'status' | 'createdAt'>) => void;
  onComplete: (taskId: string) => void;
}

export const ActiveTasks: React.FC<ActiveTasksProps> = ({ tasks, onAddTask, onComplete }) => {
  const activeTasks = tasks.filter(task => task.status !== 'completed');

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">My Tasks</h2>
        <AddTaskDialog onAddTask={onAddTask} />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activeTasks.length > 0 ? (
          activeTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onComplete}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No active tasks. Click "Add New Task" to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};
