document.getElementById("discover").addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "./blogs.html"
})


document.getElementById("complete-btn").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated Successfully");
    const assignedNum = getInnerTextById('assigned-num');
    const minus = assignedNum - 1;
    console.log(minus);
})