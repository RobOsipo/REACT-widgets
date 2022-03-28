import React from 'react';
import Accordion from './components/Accordion.js'
import Search from './components/Search.js'

// ! Dummy Data //
const items = [
    {
        title: 'What is React?',
        content: 'A front-end JavaScript framework'
    },
    {
        title: 'How is the weather today',
        content: 'Dont ask, it sucks'
    },
    {
        title: 'Making Moscow Mules for assholes?',
        content: 'Welcome back to work'
    }
]

const App = () => {
    return (
        <div>
       
            <Search />
        </div>
        
    )
}


export default App;