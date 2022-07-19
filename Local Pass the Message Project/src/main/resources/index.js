let massage = document.getElementById("massage");

function send(){
    console.log(massage.value);

    if(massage.value === ""){
        console.log(undefined);
    }
    else{
        massage.value = "";
    }
}