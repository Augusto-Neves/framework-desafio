import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Páginas
import Home from './pages/Home/';
import Posts from './pages/Postagens/';
import Albums from './pages/Albuns';
import ToDo from './pages/Todos'


export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/posts' component={Posts} />
            <Route path='/albums' component={Albums} />
            <Route path='/to-do' component={ToDo} />
        </Switch>
    );
}