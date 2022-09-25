const Employee = require ("../lib/Employee")
test ("getting the Employee name",()=>{
    const name = "Bob"
    const newEmployee = new Employee ("Bob")
    expect (newEmployee.name).toBe(name)
})
test ("getting the Employee id",()=>{
    const id = "01"
    const newId = new Employee ("Bob", id)
    expect (newId.id).toBe(id)
})
test ("getting the Employee email",()=>{
    const email = "bob@place.com"
    const newEmail = new Employee ("Bob", "01", email)
    expect (newEmail.email).toBe(email)
})
test ("test getName function",()=>{
    
    const newName = new Employee ("Bob", "01","bob@place.com")
    expect (newName.getName()).toBe("Bob")
})
test ("test getId function",()=>{
    
    const newId = new Employee ("Bob", "01","bob@place.com")
    expect (newId.getId()).toBe("01")
})
test ("test getEmail function",()=>{
    
    const newEmail = new Employee ("Bob", "01","bob@place.com")
    expect (newEmail.getEmail()).toBe("bob@place.com")
})
test ("test getRole function",()=>{
    
    const newRole = new Employee ("Bob", "01","bob@place.com")
    expect (newRole.getRole()).toBe("Employee")
})

