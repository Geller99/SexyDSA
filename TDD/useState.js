// interface UseStateProps {
//     input: <T extends any>
// }
 
const useState = (input ) => {
    
    let _value = input;
    // We create a local variable value = input 
    const state = () => {
      // We create a function "state" which returns the value that holds the input
      return _value;
    }

    const setState = (newValue) => {
      // setState updates the value returned from state with newValue
      _value = newValue; 

    }

    return [state, setState];
    // return an array with the variable and its setter method.
  }

  const [time, setTime] = useState('');

  setTime('30');
  setTime('50');

  console.log(time())

  