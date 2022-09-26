const Intern = require ("../lib/Intern")
test ("get Intern school",()=>{
    const school = "University"
    const newIntern = new Intern ("Bill", "03", "bill@place.com", school)
    expect (newIntern.school).toBe(school)
})
test ("test getSchool function",()=>{
    
    const newIntern = new Intern ("Bill", "03", "bill@place.com", "University")
    expect (newIntern.getSchool()).toBe("University")
})
test ("test getRole function",()=>{
    
    const newRole = new Intern ("Bill", "03", "bill@place.com", "University")
    expect (newRole.getRole()).toBe("Intern")
})