import Card from '../Card/Card';
import data from "../../data"
import styles from "./Cards.module.css"

export default function Cards(props) {
   const cards = data
   return (
   <div className={styles.cardsContainer}>
      {cards?.map(c =>{
         return <Card   key={c.id}
                        name={c.name}
                        status={c.status}
                        species={c.species}
                        gender={c.gender}
                        origin={c.origin}
                        image={c.image}
                        onClose={() => window.alert('Emulamos que se cierra la card')} />
      })}
   </div>
   );
}
