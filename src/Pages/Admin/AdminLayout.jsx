import { Outlet } from 'react-router-dom';
import AdminNavbar from './Components/AdminNavbar';
import AdminSidebar from './Components/AdminSidebar';


const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-main-content">
        <AdminSidebar />
        <div className="admin-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
