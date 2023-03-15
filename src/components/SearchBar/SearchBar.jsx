import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   console.log(props);
   return (
      <div className={styles.searchContainer}>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
