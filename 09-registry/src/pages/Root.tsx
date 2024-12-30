import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Outlet />
    </div>
  );
}
