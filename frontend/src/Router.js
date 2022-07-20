// make basic routings using react-router-dom
import { Routes, Route } from 'react-router-dom';

import App from './App';

import Home from './views/home/Home';

const Router = () => {
    return (
        <App>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weekly" element={<p>weekly</p>} />
                <Route path="/daily" element={<p>daily</p>} />
                <Route path="/*" element={<p>OOOOPS this page dont exist</p>} />
            </Routes>
        </App>
    )
}

export default Router