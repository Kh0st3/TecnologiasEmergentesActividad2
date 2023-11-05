// assets

import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==================================== || MENU ITEMS - UTILITIES || ==================================== //

const teachers = {
  id: 'teachers',
  title: 'Teachers', // titulo como se vera en el menu
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers', // hacia donde se dirige el menu
      icons: icons.TeamOutlined, // icono
      breadcrumbs: false
    }
  ]
};

export default teachers;
