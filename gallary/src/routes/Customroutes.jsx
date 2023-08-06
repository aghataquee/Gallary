import {Routes,Route} from 'react-router-dom';
import Gallarylist from '../components/Gallarylist/Gallarylist.jsx';
import Gallary from '../components/Gallary/Gallary.jsx';
function Customroutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Gallarylist/>}></Route>
                <Route path="/photos/:id" element={<Gallary/>}></Route>
            </Routes>
        </div>
    )
}
export default Customroutes;