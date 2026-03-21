import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function About() {
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>Current count: {count}</p>;
    </div>
  );

}