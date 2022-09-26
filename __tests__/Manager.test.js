const Manager = require ("../lib/Manager")
test ("get the Manager office number",()=>{
    const officeNumber = "1111"
    const newManager = new Manager ("Bub", "04", "bub@place.com", "1111")
    expect (newManager.officeNumber).toBe(officeNumber)
})
test ("test getRole function",()=>{
    
    const newRole = new Manager ("Bub", "04","bub@place.com", "1111")
    expect (newRole.getRole()).toBe("Manager")
})