import { Routes, Route } from 'react-router-dom';
import { RiddleScreen1 } from '../components/riddles/RiddleScreen1';

import { Navbar } from '../components/ui/Navbar';




export const DashboardRoutes = () => {
    return (
        <>



            <Navbar />
            <Routes>
                <Route path="/" element={<RiddleScreen1 />} />

            </Routes>

        </>
    )
}