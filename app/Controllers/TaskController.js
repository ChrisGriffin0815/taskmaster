import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js";
import { listService } from "../Services/ListService.js"

//TODO Don't forget to render to the screen after every data change.


//Public
export default class TaskController {

  create(event, listId) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      title: form.taskName.value,
      listId: listId
    }

    taskService.create(rawTask)
    form.reset()
  }

  delete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        taskService.delete(id)
      }
    })
  }





}


  //TODO: Your app will need the ability to create, and delete tasks