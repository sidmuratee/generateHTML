const Engineer = require ("../lib/Engineer")
test ("get the Engineer github",()=>{
    const github = "bengithub"
    const newEngineer = new Engineer ("Ben", "02", "ben@place.com", "bengithub")
    expect (newEngineer.github).toBe(github)
})
test ("test getGitHub function",()=>{
    
    const newEngineer = new Engineer ("Ben", "02", "ben@place.com", "bengithub")
    expect (newEngineer.getGitHub()).toBe("bengithub")
})
test ("test getRole function",()=>{
    
    const newRole = new Engineer ("Ben", "02","ben@place.com", "bengithub")
    expect (newRole.getRole()).toBe("Engineer")
    // console.log(getRole())
})
