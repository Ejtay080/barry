var checker = false;
function refreshPage(){
    location.reload();
    checker = true;
    
}

function createAccount(){
    location.replace("login.html");
}
var formInfo = location.search;
function tellMeDaInfo(){
    if(checker = true){
    console.log(formInfo);
    }else{

    }
}
tellMeDaInfo();