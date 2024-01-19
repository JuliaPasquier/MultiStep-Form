import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormStateContext } from './Form';

const Reviews = ({ onNext, onPrev }) => {
 const { register, handleSubmit } = useForm();
 const { form, setForm } = useContext(FormStateContext);

 const onSubmit = (data) => {
  setForm((formState) => ({
    ...formState,
    data: { ...formState.data, ...data },
    steps: {
      ...formState.steps,
      preferences: { value: data, valid: true, dirty: false },
    },
  }));
  onNext();
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('rating')} type="radio" id="unhappy" value="😞" />
    <label htmlFor="unhappy"><span className="emoji">😞</span></label><br />
    <input {...register('rating')} type="radio" id="meh" value="😕" />
    <label htmlFor="meh"><span className="emoji">😕</span></label><br />
    <input {...register('rating')} type="radio" id="happy" value="😊" />
    <label htmlFor="happy"><span className="emoji">😊</span></label><br />
    <input {...register('rating')} type="radio" id="veryhappy" value="😄" />
    <label htmlFor="veryhappy"><span className="emoji">😄</span></label><br />
    <div className="comments"><textarea {...register('comment')} placeholder="Comment" rows="4" cols="50"/></div>
    <button type="submit">Next</button>
    <button type="button" onClick={onPrev}>Back</button>
  </form>
 );
};

export default Reviews;


/*function Reviews() {
    return (

        <div className="reviews-container">
            <input type="radio" id="unhappy" name="mood" value="unhappy" />
            <label for="unhappy"><span class="emoji">😞</span></label><br />
            <input type="radio" id="meh" name="mood" value="meh" />
            <label for="meh"><span class="emoji">😕</span></label><br />
            <input type="radio" id="happy" name="mood" value="happy" />
            <label for="happy"><span class="emoji">😊</span></label><br />
            <input type="radio" id="veryhappy" name="mood" value="veryhappy" />
            <label for="veryhappy"><span class="emoji">😄</span></label><br></br>
<div className="comments">
            <textarea name="comments" rows="4" cols="50">
                Votre commentaire ici...
            </textarea>
</div>
        </div>

    )
}*/
