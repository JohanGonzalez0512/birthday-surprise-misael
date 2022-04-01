
import Swal from 'sweetalert2'
export const checkWord = (word, options ) => {

    
const {correctWord, route, navigate, location} = options;

    if (word === correctWord) {

        Swal.fire('Bien', location, 'success')
        navigate(route, { replace: true });
    }
    else {
        Swal.fire('Nel', 'esta mal la palabra chuy', 'error')
    }
    
}
