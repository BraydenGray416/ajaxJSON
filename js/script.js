$(document).ready(function(){

  const btn = $("#getPeople");
  btn.click(function(){
    // console.log("button click");
    $.ajax({
      type: "GET",
      url: "people.json",
      dataType: "json",
      success: function(data){
        console.log(data);
        console.log("success");
      },
      error: function(error){
        console.log(error);
        console.log("error");
      }
    })




  });




});
