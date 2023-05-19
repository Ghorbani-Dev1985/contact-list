import { Link } from "react-router-dom";

const navItems = [
    {name: "مطلب اول" , to: "/blogs/1"},
    {name: "مطلب دوم" , to: "/blogs/2"},
    {name: "مطلب سوم" , to: "/blogs/3"},
    {name: "مطالب چهارم" , to: "/blogs/4"},
  ]

const BlogPage = () => {
    return ( 
        <div>
            <h2>صفحه مطالب خواندنی</h2>
            {navItems.map((navItem) => {
              return (
            <li className='p-2' key={navItem.to}>
              <Link to={{pathname:navItem.to, search: "sort = name"}}>
               {navItem.name}
              </Link>
            </li>
              );
            })}
        </div>
     );
}
 
export default BlogPage;