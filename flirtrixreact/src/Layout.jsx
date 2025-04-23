import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextError } from './ContextError';

export default function Layout() {

    const { isErrorExist, setIsErrorExist, error, setError } = useContext(ContextError);

    let errorMessage = '';

    if (isErrorExist) {
        errorMessage = (
            <div>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            </div>
        );
    }

    return (
        <>
        <main>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="add-todo">Add New ToDo</NavLink>
            <NavLink to="edit-todo">Edit ToDo</NavLink> */}
            <Outlet />
            {errorMessage}
        </main>
        <footer>
            <p className="text-1">© Copyright 2025 Flirtrix by <strong>Aylin Akyol</strong></p>
        </footer>
        </>
    )
}