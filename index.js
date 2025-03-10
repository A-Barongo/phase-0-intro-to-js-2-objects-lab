let employee={}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let updateEmployee={...employee}
    updateEmployee[key]=value
    return updateEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]=value
    return obj
}
function deleteFromEmployeeByKey(employee,key){
    let newEmployee={...employee} 
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee
}