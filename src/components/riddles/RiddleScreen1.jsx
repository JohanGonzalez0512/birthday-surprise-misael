import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { checkWord } from '../../helpers/checkword';


export const RiddleScreen1 = () => {
  let navigate = useNavigate();

 

const options =  {
  correctWord:'yui',
  route:'/pista-2',
  urlImage:'/img/1.jpeg',
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
      <div className="container__card scroll">
        <h2 className='container__card__title'>
          ¿Cual fue el spoiler que Priscila te dijo por el cual le dejaste de hablar?
        </h2>
        <img src='/img/1.1.jpeg' alt='pista' className='container__card__image'/>
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
