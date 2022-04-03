import { Routes, Route } from 'react-router-dom';
import { MainScreen } from '../components/MainScreen';
import { RiddleScreen1 } from '../components/riddles/RiddleScreen1';
import { RiddleScreen2 } from '../components/riddles/RiddleScreen2';
import { RiddleScreen3 } from '../components/riddles/RiddleScreen3';
import { RiddleScreen4 } from '../components/riddles/RiddleScreen4';
import { RiddleScreen5 } from '../components/riddles/RiddleScreen5';
import { Navbar } from '../components/ui/Navbar';




export const DashboardRoutes = () => {
    return (
        <>



         
            <Routes>
                <Route path="/" element={<RiddleScreen1 />} />
                <Route path="/pista-2" element={<RiddleScreen2/>} />
                <Route path="/pista-3" element={<RiddleScreen3/>} />
                <Route path="/pista-4" element={<RiddleScreen4/>} />
                <Route path="/pista-5" element={<RiddleScreen5/>} />
                <Route path="/main" element={<MainScreen/>} />
              

            </Routes>

        </>
    )
}