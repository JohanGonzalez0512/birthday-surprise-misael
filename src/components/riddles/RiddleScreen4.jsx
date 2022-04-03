import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { checkWord } from '../../helpers/checkword';


export const RiddleScreen4 = () => {
  let navigate = useNavigate();

 

const options =  {
  correctWord:'mondavarious',
  route:'/pista-5',
  urlImage:'/img/4.jpeg',
  navigate
}


  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
    initialValues: {
        word: '',
       
    },
    onSubmit: (values) => {
        checkWord(values.word.toLowerCase(), options);       
        resetForm()
    },
    validationSchema: Yup.object({

      word: Yup.string()
            .required('Requerido'),
      
    })
});




  return (
    <div className='container'>
      <div className="container__card">
        <h2 className='container__card__title'>
          ¿Cual es el nombre de este personaje de scooby doo?
        </h2>
        <img src='/img/4.4.jpg' alt='pista' className='container__card__image'/>
      </div>
        <form onSubmit={handleSubmit}>
          <div className='container__input'>
            <input
              type='text'
              placeholder='Ingresa una palabra'
              {...getFieldProps('word')}
            />
            </div>
            {errors.word && touched.word && (
              <div className='error'>{errors.word}</div>
            )}
            <div className='container__button'>
            <button type='submit'>Enviar</button>

            </div>
          </form>
    </div>
  )
}
