import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {

    return /* html */`
    <div class="col-4  card pt-1">
        <div class="row justify-content-center">
          <h4>${this.title}
            <button onclick="app.listController.delete('${this.id}')"
              class="btn btn-sm btn-link inline text-danger">
              <i class="fa fa-trash"aria-hidden="true"></i>
            </button>
        </div>
        <div class="row justify-content-center">
          </h4>
          <form onsubmit="app.taskController.create(event, '${this.id}')">
            <div class="row pr-2">                        
              <div class="col-8">
                <input name="taskName" type="text" class="ml-2 rounded" placeholder="Task name">
              </div>
              <div class="col-1">
                <button type="submit" class="btn btn-sm btn-success">
                 <i class="fa fa-check-circle" aria-hidden="true"></i>
                 </button>
              </div>                          
           </div>                    
         </form>
        </div>
        <div class="row mt-1 pl-1">
          <h5>Tasks:</h5>
        </div>
        <div class="row pl-3">
          <div class="col-12" id="taskList"></div>
            ${this.Tasks}
          </div>                        
        </div>
    </div>
  `
  }

  get Tasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
  }
}
