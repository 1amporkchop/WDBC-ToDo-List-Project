let input = prompt("What would you like to do?")
const todos = ["Default Item 1", "Default Item 2"];


while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("****************")
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("****************")
    }else if (input === "new"){
        const newTodo = prompt("What is your new To Do?");
        todos.push(newTodo);
        console.log(`"${newTodo}" added to the list!`);
    }else if (input === "delete"){
        const index = parseInt(prompt("Please enter an index to delete:"))
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
        } else{
            console.log("Unkown Index");
        }
    }
    input = prompt("What would you like to do?")
}
console.log("Okay, Goodbye.")