import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import styles from "./App.module.css"


function App() {
   return (
      <div className={styles.App}>
         <div className={styles.center}>
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')} />
         </div>

         <span className={styles.line}></span>

         <div className={styles.center}>
            <Cards characters={characters} />
         </div>

         <span className={styles.line}></span>

         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
   );
}

export default App;
