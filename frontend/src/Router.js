// make basic routings using react-router-dom
import { Routes, Route } from 'react-router-dom';

import App from './App';

import Home from './views/home/Home';

const Router = () => {
    return (
        <App>
            <Routes>
                <Route path="/" component={<Home />} />
            </Routes>
        </App>
    )
}

export default Router