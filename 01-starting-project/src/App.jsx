import reactImage from './assets/react-core-concepts.png';
import componentsImage from './assets/components.png';
const reactDescriptions = [ 'Fundamental', 'Crucial', 'Core' ];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

function CoreConecept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConecept 
              title="Components" 
              description="The core UI building block."
              image={componentsImage}
              />
            <CoreConecept
              title="Props"
            />
            <CoreConecept/>
            <CoreConecept/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
