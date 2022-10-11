import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

const Main = () => {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;