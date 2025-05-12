import "./App.css";
import Header from "./components/layout/Header";

function App() {
    return (
        <>
            <Header />
            <h1 className='text-5xl font-bold hover:underline hover:text-blue-400 transition-colors'>
                Home page
            </h1>
        </>
    );
}

export default App;
