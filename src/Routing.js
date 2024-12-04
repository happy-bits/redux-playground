import { Route, Routes } from "react-router-dom";

import { BasicLayout } from "./BasicLayout";

import StartPage from "./pages/StartPage";

import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";

export function Routing() {


    return (
        <>
            <Routes>
                <Route path="/" element={<BasicLayout />}>
                    <Route index element={<StartPage />} />
                    <Route path="/page01" element={<Page01 />} />
                    <Route path="/page02" element={<Page02 />} />
                    <Route path="/page03" element={<Page03 />} />
                </Route>
            </Routes>
        </>
    )
}