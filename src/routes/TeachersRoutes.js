import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';

const Teachers = Loadable(lazy(() => import('pages/teachers')));
const Create = Loadable(lazy(() => import('pages/teachers/create')));
const Edit = Loadable(lazy(() => import('pages/teachers/edit')));

// ===================================|| MAIN ROUTING || ===================================== //

const TeachersRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'teachers', // ruta asignada en menu-items
      element: <Teachers /> // la vista de estudiantes
    },
    {
      path: 'teachers/create',
      element: <Create />
    },
    {
      path: 'teachers/edit/:teacherId',
      element: <Edit />
    }
  ]
};

export default TeachersRoutes;
