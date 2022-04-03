
import Swal from 'sweetalert2'
export const checkWord = (word, options ) => {

    
const {correctWord, route, navigate,  urlImage} = options;

    if (word === correctWord) {

        Swal.fire({
            title: 'Perfecto!',
            text: 'Tienes que ir a este lugar',
            imageUrl: urlImage,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        navigate(route, { replace: true });
    }
    else {
        Swal.fire('No imbecil', 'Esta mal.', 'error')
    }
    
}
