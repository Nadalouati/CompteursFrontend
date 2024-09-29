import'../../../Styles/Admin/AdminSidebar.css';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/reclamation" activeClassName="active">
            Reclamation
          </NavLink>
        </li>
        {/* Add more links here */}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
