// assets

import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==================================== || MENU ITEMS - UTILITIES || ==================================== //

const students = {
  id: 'students',
  title: 'Students', // titulo como se vera en el menu
  type: 'group',
  children: [
    {
      id: 'students',
      title: 'Students',
      type: 'item',
      url: '/students', // hacia donde se dirige el menu
      icons: icons.TeamOutlined, // icono
      breadcrumbs: false
    }
  ]
};

export default students;
