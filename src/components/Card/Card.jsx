import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.card}>
         <div className={styles.card2}>

            <div className={styles.closeContainer}>
               <button onClick={props.onClose}>X</button>
            </div>

            <div className={styles.imgContainer}>
               <h3>{props.name}</h3>
               <img src={props.image} alt='' />
            </div>

            <div className={styles.rowContainer}>
               <h3>{props.species}</h3>
               <h3>{props.gender}</h3>
            </div>

         </div>
      </div>
   );
}
