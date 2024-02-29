
import { useState, Fragment } from 'react';

import TabButton from '../TabButton/TabButton.jsx';
import Section from '../Section/Section.jsx';
import Tabs from '../TabButton/Tabs.jsx';

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
          <Tabs buttons={
            <>
              {[ 
                { value:'components', label:'Components'}, 
                { value:'jsx', label: 'JSX'},
                { value: 'props', label: 'Props'},
                { value:'state', label: 'State'} 
              ].map(
                (item) => {
                  return <>
                    <TabButton 
                      isSelected={selectedTopic === item.value }
                      onClick={() => handleSelect(item.value)}
                    >
                      {item.label}
                    </TabButton>
                  </>
                }
              )}
            </>
          }>
            {tabContent}
          </Tabs>
        </Section>
    );
}