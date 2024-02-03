import {Home} from "./pages/home/Home";
import {Login} from './pages/login/Login.tsx';
import {Profile} from './pages/profile/Profile';
import {Users} from './pages/users/Users';
import {Products} from './pages/products/Products.tsx';

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: true  },
     { path:     "/profile",    name: "Profile",       element: <Profile />,      isMenu: true,     isPrivate: true  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/users",  name: "Users",     element: <Users />,    isMenu: true,     isPrivate: true  },
     { path:     "/products",  name: "Products",     element: <Products />,    isMenu: true,     isPrivate: true  },
]