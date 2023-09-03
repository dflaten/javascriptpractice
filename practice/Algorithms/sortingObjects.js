
let employees = [
    {name: "John Doe",
     job: "Assistant",
     salary: 40000
    }, 
    {name: "Jane Smith",
     job: "Warehouse Worker",
     salary: 30000
    }, 
    {name: "Selvester Brewster",
     job: "Warehouse Worker",
     salary: 30000
    }, 
    {name: "Da Boss",
     job: "Warehouse Manager",
     salary: 90000
    }, 
    {name: "Arty Cube",
     job: "Sales",
     salary: 34000
    } 
];

function compareEmployees(a,b) {
    if (a.salary < b.salary) { 
        return -1;
    }
    if (a.salary > b.salary) {
        return 1;
    }
    return 0;
}

console.log("Employees before sorting"); 
console.log(employees);
console.log("Employees after sorting. Original Array not impacted.:"); 
console.log([...employees].sort(compareEmployees));
console.log("Original List"); 
console.log(employees);
console.log("Employees after sorting"); 
console.log(employees.sort(compareEmployees));