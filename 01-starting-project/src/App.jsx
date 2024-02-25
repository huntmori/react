import { useState } from 'react';

import reactImage from './assets/react-core-concepts.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import CoreConcept2 from './components/CoreConcept/CoreConcept2.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('components');

  let handleSelect = function(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept2
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('state')}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
            {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
