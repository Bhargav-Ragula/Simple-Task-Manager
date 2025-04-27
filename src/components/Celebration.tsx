
import React from 'react';
import { Award, Gift, PartyPopper, Sparkles, Star, Trophy } from 'lucide-react';

const celebrations = [
  {
    icon: PartyPopper,
    text: "Great job!",
    className: "text-purple-500 animate-bounce"
  },
  {
    icon: Sparkles,
    text: "Amazing work!",
    className: "text-yellow-500 animate-spin"
  },
  {
    icon: Trophy,
    text: "Task complete!",
    className: "text-green-500 animate-pulse"
  },
  {
    icon: Star,
    text: "Well done!",
    className: "text-blue-500 animate-ping"
  },
  {
    icon: Award,
    text: "Excellent!",
    className: "text-pink-500 animate-bounce"
  },
  {
    icon: Gift,
    text: "You did it!",
    className: "text-indigo-500 animate-spin"
  }
];

export const Celebration = ({ onComplete }: { onComplete: () => void }) => {
  const randomCelebration = React.useMemo(() => 
    celebrations[Math.floor(Math.random() * celebrations.length)],
    []
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-8 text-center space-y-4 animate-scale-in">
        <randomCelebration.icon className={`w-16 h-16 mx-auto ${randomCelebration.className}`} />
        <p className="text-2xl font-bold text-gray-800 animate-fade-in">
          {randomCelebration.text}
        </p>
      </div>
    </div>
  );
};
