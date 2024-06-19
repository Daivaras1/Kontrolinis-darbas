import { useEffect, useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

function MainPage() {
    const [user, setUser] = useState('');

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        setUser(user);
    }, []);

    return (
        <div>
            <Header />
            <div>
                {!user ? "" : <p>Hello, {user}</p>}
                <h1>Main Page</h1>
            </div>
        </div>
    );
}

export default MainPage;
