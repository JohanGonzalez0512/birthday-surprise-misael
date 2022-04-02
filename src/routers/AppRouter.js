import { Routes, Route, HashRouter } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
   
   
    return (


        <HashRouter>
            <Routes>

                <Route path="/*" element={
                        <DashboardRoutes />
                }
                />

            </Routes>
        </HashRouter>

    );
}
