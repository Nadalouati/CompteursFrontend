import '../../../Styles/Admin/AdminSidebar.css';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ul>
        <li>
          <NavLink to="/admin/acc" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reclamation" activeClassName="active">
            Reclamation
          </NavLink>
        </li>
        
      </ul>
    </aside>
  );
};

export default AdminSidebar;
