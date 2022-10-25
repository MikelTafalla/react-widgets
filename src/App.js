import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    return (
        <div>
            <Translate />
        </div>
    );
};

export default App;