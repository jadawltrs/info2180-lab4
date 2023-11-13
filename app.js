$(document).ready(function(){
    function searchButtonClick(){
        var searchbtn = $=("#searchButton")
        searchbtn.on("click",function(){
            $.ajax(superheroes.php),{
                method: "GET",
                dataType: "text",
            }.done(function(response){
                alert(response)
            })
        })

        fetch(superheroes.php)
    }
})