export function changePage(pageName){
    $("#bread-crumb").html(``);
    if(pageName == ""){
      $.get(`pages/home.html`, (data) =>{
        $("#app").html(data);
      }).fail(() =>{
        console.log("fail")
      });
    }else{
      $("#bread-crumb").html(`<a href="#${pageName}">${pageName}</a> /`);
        
      $.get(`pages/${pageName}.html`, (data) =>{
        if(data){
            $("#app").html(data);
        }else{
            alert("404")
        }
    }).fail(() =>{
        console.log("Page not Found")
      });
    }
}

