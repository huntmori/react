import { useState, Fragment } from 'react';

import reactImage from './assets/react-core-concepts.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import CoreConcept2 from './components/CoreConcept/CoreConcept2.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('');

  let handleSelect = function(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  console.log('APP COMPONENT EXECUTING');

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
    <>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
                return <CoreConcept
                  key={conceptItem.title}
                  title={conceptItem.title}
                  description={conceptItem.description}
                  image={conceptItem.image}
                />
              })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components' }
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx' }
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'} 
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state' }
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
          { /*
            !selectedTopic ? (
              <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">            
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )*/ }
          {/* !selectedTopic && <p>Please select a topic</p> */}
          {/* selectedTopic && (
            <div id="tab-content">            
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )*/}
          
        </section>
      </main>
    </>
  );
}

export default App;
