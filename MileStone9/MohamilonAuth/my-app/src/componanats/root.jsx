
import { Outlet } from 'react-router-dom';
import Naveber from './navber';

const Root = () => {
    return (
        <div>
            <Naveber></Naveber>
            <Outlet />
        </div>
    );
};

export default Root;
