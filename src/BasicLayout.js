import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

export function BasicLayout() {

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/page01">Page 01</NavLink>
                <NavLink to="/page02">Page 02</NavLink>
                <NavLink to="/page03">Page 03</NavLink>
                <NavLink to="/page04">Page 04</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}