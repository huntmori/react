
import { useState, Fragment } from 'react';

import TabButton from '../TabButton/TabButton.jsx';
import Section from '../Section/Section.jsx';

import { EXAMPLES } from '../../data.js';

export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState('');

    let handleSelect = function(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    };

    
    let tabContent = <p>Please select a tpic.</p>

    if (selectedTopic) {
        tabContent = (
        <div id ="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
        );
    }

    return (
        <Section id="examples" title="Examples" className="">
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components' }
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx' }
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'} 
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state' }
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </Section>
    );
}