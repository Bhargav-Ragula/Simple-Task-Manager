
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@/types/task';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActiveTasks } from '@/components/ActiveTasks';
import { TaskHistory } from '@/components/TaskHistory';
import { UserProfile } from '@/components/UserProfile';

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
        <h1 className="text-3xl font-bold text-custom-text mb-8">Task Manager</h1>
        <Tabs defaultValue="tasks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <ActiveTasks 
              tasks={tasks}
              onAddTask={handleAddTask}
              onComplete={handleCompleteTask}
            />
          </TabsContent>
          <TabsContent value="history">
            <TaskHistory tasks={tasks} />
          </TabsContent>
          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
