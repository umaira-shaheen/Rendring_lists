
import './App.css';
import { getImageUrl } from './Components/utlis';
import { people } from './Components/data';
function App() {
  // const chemist=people.filter(person=>person.profession==='chemist');
  const listitems=people.map(person=>
    
    <li key={person.id}>
       <img
        src={getImageUrl(person)}
        alt={person.name}
      />
     <p>
    
     <b>{person.name}:</b>
     {' ' + person.profession + ' '}
     known for {person.accomplishment}
   </p>
   </li>
   
    );
    return <ul>{listitems}</ul>;
 
}

export default App;
