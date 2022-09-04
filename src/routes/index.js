import { Route, Routes } from 'react-router-dom';
import List from '../pages/warehouse/list';
import Detail from '../pages/warehouse/detail';
import HomeIndex from '../pages/home';

export default function RoutesApps() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndex />} exact />
      <Route path="/warehouse" element={<List />} exact />
      <Route path="/warehouse/:id" element={<Detail />} exact />
    </Routes>
  );
}
