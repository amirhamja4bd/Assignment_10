import Swal from 'sweetalert2'
import store from '../../redux/store/store' 
import {editTodo} from '../../redux/state/todo/todoSlice'



export function todoEditAlert(i, item){
    
    Swal.fire({
        title: 'Update Task',
        input: 'text',
        inputValue: item,
        inputValidator: (value)=>{
            if (value) {
                store.dispatch(editTodo( {index:i, task:value}))
            }
        }
      })

}