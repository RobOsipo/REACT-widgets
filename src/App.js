import React from 'react';
import Accordion from './components/Accordion.js'
import Search from './components/Search.js'
import Dropdown from './components/Dropdown.js'
import Translate from './components/Translate.js'
import Route from './components/Route.js'



// ! accordion //
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

// ! dropdown color picker
const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color purple',
        value: 'purple'
    },
    {
        label: 'The color yellow',
        value: 'yellow'
    }
]


// const showAccordion = () => {
//     if (window.location.pathname === '/accordion') {
//         return <Accordion items={items}/>
//     }
// }

// const showDropdown = () => {
//     if (window.location.pathname === '/color') {
//         return <Dropdown />
//     }
// }

const App = () => {

    const [selected, setSelected] = React.useState('')
   
     return (

        <div>
           <Route path='/'>
                <Translate />
           </Route>
           <Route path='/searchwiki'>
                <Search />
           </Route>
           <Route path='/accordion'>
                <Accordion items={items} />
           </Route>
           <Route path='/color'>
                <Dropdown label='Select a Color' options={options} selected={selected} onSelectedChange={setSelected}/>
           </Route>
         
        </div>
        
    )
}


export default App;
