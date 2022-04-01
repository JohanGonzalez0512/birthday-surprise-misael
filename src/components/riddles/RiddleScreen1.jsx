import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { checkWord } from '../../helpers/checkword';


export const RiddleScreen1 = () => {
  let navigate = useNavigate();

 

const options =  {
  correctWord:'respuesta',
  route:'/pista-2',
  location:'donde esta eso gg',
  navigate
}


  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
    initialValues: {
        word: '',
       
    },
    onSubmit: (values) => {
        checkWord(values.word, options);       
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
          ¿Qué es una variable?
        </h2>
        <p className='container__card__text'>
          Una variable es un espacio en memoria que almacena un valor.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ipsum nobis iste cumque, id officiis ipsa nihil sapiente ex soluta delectus non assumenda inventore, veritatis perferendis facilis modi deleniti amet!
          lorem: ipsum dolor sit amet, consectetur adipisicing elit. Sequi ipsum nobis iste cumque, id officiis ipsa nihil sapiente ex soluta delectus non assumenda inventore, veritatis perferendis facilis modi deleniti amet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi asperiores magnam rerum voluptates mollitia, tempore vel tempora ex vitae doloremque earum itaque illum nostrum laboriosam, aspernatur officiis repellat laudantium.
        </p>
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
