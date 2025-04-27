
import React from 'react';
import { format } from 'date-fns';
import { Task } from '@/types/task';
import { Calendar, Check } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
  onComplete: (taskId: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onComplete }) => {
  const priorityColors = {
    low: 'bg-custom-green',
    medium: 'bg-custom-yellow',
    high: 'bg-red-100',
  };

  return (
    <Card className={cn(
      'transition-all duration-300 hover:shadow-lg',
      task.status === 'completed' && 'opacity-60'
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className={cn(
          "font-semibold",
          task.status === 'completed' && 'line-through'
        )}>
          {task.title}
        </h3>
        <div className={cn(
          "px-2 py-1 rounded-full text-xs",
          priorityColors[task.priority]
        )}>
          {task.priority}
        </div>
      </CardHeader>
      <CardContent>
        {task.description && (
          <p className="text-sm text-gray-500 mb-2">{task.description}</p>
        )}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {format(task.dueDate, 'MMM dd, yyyy')}
          </div>
          {task.status !== 'completed' && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onComplete(task.id)}
              className="hover:bg-custom-green"
            >
              <Check className="w-4 h-4 mr-1" />
              Complete
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
