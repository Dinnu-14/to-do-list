var taskName=document.querySelector('#taskName')
var btn=document.querySelector('#btn')
var tasklist=document.querySelector('#tasklist')
btn.addEventListener('click',()=>{
    let tmp=taskName.value
    if(tmp){
        let liEle=document.createElement('li')
        liEle.innerHTML=tmp
        liEle.addEventListener('click',()=>{
            liEle.classList.toggle('completed')
        })
        tasklist.appendChild(liEle)
        taskName.value=' '
    }
})
