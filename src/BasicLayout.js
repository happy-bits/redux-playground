import { NavLink, Outlet } from "react-router-dom";

export function BasicLayout() {


    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page01">Page 01</NavLink>
                <NavLink to="/page02">Page 02</NavLink>
                <NavLink to="/page03">Page 03</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}