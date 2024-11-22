import ContinueListening from '../components/ContinueListening';
import DailyStory from '../components/DailyStory';
import LearningSongs from '../components/LearningSongs';

export default function HomePage() {
  return (
    <div className="pb-16 px-4">
      <ContinueListening />
      <DailyStory />
      <LearningSongs />
    </div>
  );
}