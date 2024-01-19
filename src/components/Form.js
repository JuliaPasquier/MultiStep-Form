import React, { useState, useContext } from 'react';
import SignUpInfo from "./SignUpInfo";
import Reviews from "./Reviews";
import Resume from "./Resume";
import emailjs from 'emailjs-com';

const FormStateContext = React.createContext();
function Form() {
    emailjs.init('x2X20KnxphvXJfZEj');

    const [form, setForm] = useState({
     steps: {
       details: { value: {}, valid: false, dirty: false },
       preferences: { value: {}, valid: false, dirty: false },
     },
     data: {},
     selectedIndex: 0,
    });
   
    const next = () => {
     setForm((formState) => ({ ...formState, selectedIndex: formState.selectedIndex + 1 }));
    };
   
    const prev = () => {
     setForm((formState) => ({ ...formState, selectedIndex: formState.selectedIndex - 1 }));
    };
   
    return (
     <FormStateContext.Provider value={{ form, setForm }}>
       <div>
         {form.selectedIndex === 0 && <SignUpInfo onPrev={prev} onNext={next} />}
         {form.selectedIndex === 1 && <Reviews onPrev={prev} onNext={next} />}
         {form.selectedIndex === 2 && <Resume onPrev={prev} onNext={next} />}
       </div>
     </FormStateContext.Provider>
    );
   }
   
   export default Form;
   export { FormStateContext };