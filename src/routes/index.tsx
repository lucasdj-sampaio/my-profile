import { DeveloperPage } from 'pages/main';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DeveloperPage />}></Route>
    </Routes>
  );
};

export default CustomRoutes;
