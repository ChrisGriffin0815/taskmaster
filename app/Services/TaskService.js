import { ProxyState } from "../AppState.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import Task from "../Models/Task.js"
//Public
class TaskService {

  constructor() {
    ProxyState.on("tasks", saveState)
  }
  create(rawTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTask))
    ProxyState.tasks = tasks
    console.log(tasks)
  }

  delete(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    console.log(ProxyState.tasks)
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const taskService = new TaskService();