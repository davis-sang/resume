document.addEventListener("DOMContentLoaded", function(){
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount === null){
        visitCount = 1;

    }else {
        visitCount = parseInt(visitCount)+1;
    }
    localStorage.setItem('visitCount', visitCount);

    document.getElementById('visit-count').textContent = visitCount;
})
