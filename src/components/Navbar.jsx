import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';


const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  },
  //   add the other link as well
];
export const Navbar = () => {
  return <div>
    {links.map((e,index)=>{
      return <Link  style={{margin:"10px"}} key={index} to={e.link} >{e.title}</Link>
    })}
  </div>
};
