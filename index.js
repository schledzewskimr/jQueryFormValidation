// Make sure the function loaded after the DOM
$(function() {  //newskool
// Create a function that will fire when the submit <button> is clicked    
    $("#submit").on("click",function(e){
// create variables for each of the form inputs        
        let name = $("#name");
        let email = $("#email");
        let phone = $("#phone");
// create an array named required
        let required = new Array(name,email,phone);
// Utilize a for loop to iterate of the entire required array
        for(i=0;i<required.length;i++){
// use an if statement to check the value of each array item
            if(required[i].val()==""){
// populate the message <p> with the following text:
// "Please Fill Out Required Fields"
// add the warning class to this message
                message = $("#message").html("Please Fill Out Required Fields").addClass("warning");
// Attach the warning class to the array item's <label>
                required[i].prev().addClass("warning");
            }
// once the field has something other than a blank string. make sure the warning class is removed
            else{
                required[i].prev().removeClass();
                $("#message").removeClass();
            }
        }
// verify that no <label>'s have the warning class
        if($(".warning").length==0){
// remove the form from the DOM
            $("#form").remove();
// manipulate the <h2> to say: "Thanks for your feedback!"
            $("#pre-form").html("Thanks for your feedback!");
        }
    })
})