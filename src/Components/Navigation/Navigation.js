import { NavLink, useParams } from "react-router-dom";

const navItems = [
  {name: "صفحه اصلی" , to: "/", exact: true},
  {name: "درباره ما" , to: "/aboutUs"},
  {name: "مطالب خواندنی" , to: "/blogs"},
  {name: "پست ها" , to: "/post"},
  {name: "حساب کاربری" , to: "/profile"},
]

const Navigation = ({text}) => {
  const params = useParams();
    return ( 
      <>
        <nav className="container flex flex-col items-center">
          {/* <ul className='flex justify-center items-center p-3'>
            {navItems.map((navItem) => {
              return (
            <li className='p-2' key={navItem.to}>
              <NavLink to={navItem.to}
              className={(navData) => (navData.isActive ? "text-orange-300 pb-2 border-b border-yellow-500" : "")}
              >
               {navItem.name}
              </NavLink>
            </li>
              );
            })}
          </ul> */}
          <h2>{text}</h2>
          </nav>
      </>
     );
}
 
export default Navigation;