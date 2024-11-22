import LearningTopics from '../components/LearningTopics';
import LanguageLessons from '../components/LanguageLessons';
import InteractiveExercises from '../components/InteractiveExercises';
import DailyProgress from '../components/DailyProgress';

export default function LearnPage() {
  return (
    <div className="p-4 pb-20">
      <DailyProgress />
      <div className="mb-8">
        <LearningTopics />
      </div>
      <LanguageLessons />
      <InteractiveExercises />
    </div>
  );
}