import { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';

//una interfaz se utiliza para definir la estructura de un objeto o componente. 
//Proporciona una forma de describir los tipos de datos que se esperan en ciertos lugares de tu código.Al definir una interfaz,
//puedes especificar qué propiedades debe tener un objeto, así como los tipos de datos que se permiten para esas propiedades.
interface Sub {
  nick: string,
  avatar: string,
  subMonth: number,
  description?: string
}

//Interface de useState

interface stateApp {
  subs: Array<Sub> // tambien se puede colocar entre las <> => <Sub[]>
  subsNumber: number
}


const inicial_state = [{
  nick: 'luc',
  subMonth: 3,
  avatar: 'https://i.pravatar.cc/150?u=luc',
  description: 'luc es un gil',
},
{
  nick: 'sergio',
  subMonth: 5,
  avatar: 'https://i.pravatar.cc/150?u=sergio',
}]

function App() {

  /*   
    Esta es la manera natural de hacerlo en primera instancia
    const [subs, setSubs] = useState([
      {
        nick: 'luc',
        subMonth: 3,
        avatar: 'https://i.pravatar.cc/150?u=luc',
        descripcion: 'luc es un gil',
      },
      {
        nick: 'sergio',
        subMonth: 5,
        avatar: 'https://i.pravatar.cc/150?u=sergio',
      },
    ]); */
    // Aqui le decimos que el useState va a guardar ún Array de tipo Sub , que recibira un array de Subs
    const [subs,setSubs] = useState<stateApp["subs"]>([]) //Aqui ocupamos una interface de stados , pero se puede sin usar una iterface
    const [newSubsNumber, setNewSubsNumber] = useState<stateApp["subsNumber"]>(32)

  useEffect(() => {
    setSubs(inicial_state)
    setNewSubsNumber(49)
  }, [])
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Hola como estas?</h1>
      <List subs={subs}></List>
      <Form/>
      <p>{newSubsNumber}</p>
    </div>
  );
}

export default App;


