
import React from 'react';
import { Task } from '@/types/task';
import { TaskCard } from '@/components/TaskCard';

interface TaskHistoryProps {
  tasks: Task[];
}

export const TaskHistory: React.FC<TaskHistoryProps> = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {completedTasks.length > 0 ? (
        completedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={() => {}}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No completed tasks yet.</p>
        </div>
      )}
    </div>
  );
};
