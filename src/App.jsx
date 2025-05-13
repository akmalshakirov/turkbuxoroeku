import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/about/about";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Services from "./pages/Services/Services";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
