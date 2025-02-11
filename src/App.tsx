import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { getRoutes } from './routes/routes';

const App = () => {
    const routes = getRoutes();


    return (
        <Router>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
