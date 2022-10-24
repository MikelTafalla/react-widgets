import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'Dawn orange',
        value: 'orange'
    },
    {
        label: 'Forest green',
        value: 'green'
    },
    {
        label: 'Shade blue',
        value: 'blu'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {showDropdown ? 
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                /> : null
            }
        </div>
    );
};

export default App;