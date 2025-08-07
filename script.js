
function sendphrase(){
    if(document.getElementById("phrasebox").value === ""){
        fixedbox4content.style.display = "none";
        fixedbox6content.style.display = "flex";
    }

    else{
            let parms = {
        message: document.getElementById("phrasebox").value
    }
        emailjs.send("service_sj62tx3", "template_uy539z8", parms).then(
        fixedbox4content.style.display = "none"
    ).then(
        fixedbox2content.style.display = "flex"
    ).then(
        setTimeout(() => {
            fixedbox2content.style.display = "none";
            
            fixedbox6content.style.display = "flex";
        }, 8000)
    )
    }
    
    
};