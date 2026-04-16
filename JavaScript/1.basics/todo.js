let temp = [];

let choice = prompt("Please select a menu option : ");

while(true){
    if(choice == "quit"){
        console.log("Exiting the system...");
        break;
    }
    else if(choice == "add"){
        let task = prompt("Please enter the task, you want to add: ");
        temp.push(task);
        console.log("Task added.");
    }
   
    else if(choice == "list"){
        console.log("---------------");
        for(let i=0; i<temp.length; i++){
            console.log(i, temp[i]);
        }
        console.log("---------------");
    }

    else if(choice == "delete"){
        let ind = prompt("Enter the task number: ");
        temp.splice(ind, 1);
    }

    choice = prompt("Please select a menu option: ");
}