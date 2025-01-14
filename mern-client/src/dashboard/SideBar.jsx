
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/banner-books/profile.jpg"
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';

//  export const SideBar = () => {
//   const {usesr} = useContext(AuthContext);
//   console.log(usesr)
export const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
      {/* <Sidebar.Logo href="#" img={usesr?.photoURL} imgAlt="Flowbite logo">
       <p>
        {
          usesr?.displayName || "Demo"
        }
       </p>
      </Sidebar.Logo> */}
        <Sidebar.Logo href="/" img={user?.photoURL } imgAlt="" >
          <p>{user?.displayName || "Demo"}</p>
        </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard"  icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
           href="/admin/dashboard/upload" 
           icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item 
          href ="/admin/dashboard/manage" 
          icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item 
          href="/logout" 
          icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}
export default SideBar