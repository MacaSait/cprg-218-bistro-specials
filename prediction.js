shake.addEventListener("click",function(){
    console.log ("shake it off");

    let response = Math.random ();
    console.log(response);
    response = Math.floor (Math.random()) * 11; //0-20

    //response= Math.Floor(math.random() * 9) + 1;
    console.log (response);

    
    if (response==0){
        output.innerHTML = "Yes indeed";
    }
       
    if (response==1){
        output.innerHTML = "ask again later";
    }

    if (response==2){
        output.innerHTML = "very doubtful";
    }

    if (response==3){
        output.innerHTML = "meh";
    }

    if (response==4){
        output.innerHTML = "yessss";
    }

        
})