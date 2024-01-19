import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormStateContext } from './Form';

const SignUpInfo = ({ onNext, onPrev }) => {
 const { register, handleSubmit } = useForm();
 const { form, setForm } = useContext(FormStateContext);

 const onSubmit = (data) => {
  setForm((formState) => ({
    ...formState,
    data: { ...formState.data, ...data },
    steps: {
      ...formState.steps,
      details: { value: data, valid: true, dirty: false },
    },
  }));
  onNext();
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('username')} placeholder="Username" />
    <input {...register('email')} placeholder="Email" />
    
    <button type="button" onClick={onPrev}>Back</button>
    <button type="submit">Next</button>
  </form>
 );
};

export default SignUpInfo;
