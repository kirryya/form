import React from 'react';
import './App.css';
import {Contact} from "./components/Contact";

function App() {
    return (
        <div>
            <Contact/>
        </div>
    );
}

// function App() {
//
//     const [value, setValue] = useState<string>('')
//
//     const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//
//         const pos = e.currentTarget.selectionStart;
//
//         let val = parseFloat(e.currentTarget.value);
//
//         if( isNaN(val)) val = 0;
//
//         if (e.currentTarget.value.indexOf(".") != '-1') {
//             e.currentTarget.value = e.currentTarget.value.substring(0, e.currentTarget.value.indexOf(".") + 3);
//         } else {
//             e.currentTarget.value = val.toFixed(2)
//         }
//
//         e.currentTarget.selectionStart = e.currentTarget.selectionEnd = pos
//
//         setValue(e.currentTarget.value)
//     }
//
//     return (
//         <div>
//             <div>Value: {value}</div>
//             <input value={value} onChange={onInputChangeHandler}/>
//         </div>
//     );
// }

export default App;
