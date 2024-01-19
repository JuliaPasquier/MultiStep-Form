import React, { useContext } from 'react';
import emailjs from 'emailjs-com';
import { FormStateContext } from './Form';

const Resume = ({ onNext, onPrev }) => {
 const { form } = useContext(FormStateContext);

 const sendEmail = (e) => {
    e.preventDefault();
    const templateParameters = {
        username: form.data.username,
        email: form.data.email,
        rating: form.data.rating,
        comment: form.data.comment,
       };
    emailjs.sendForm('service_3i5tpq4', 'template_j6dyo5q', templateParameters, 'x2X20KnxphvXJfZEj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };

 return (
  <div>

    <h2>Summary</h2>
    <p>Username: {form.data.username}</p>
    <p>Email: {form.data.email}</p>
    <p>Rating: {form.data.rating}</p>
    <p>Comment: {form.data.comment}</p>
    
    <button type="button" onClick={onPrev}>Back</button>
    <button type="submit" onClick={sendEmail}>Send Email</button>
  </div>
 );
};

export default Resume;
