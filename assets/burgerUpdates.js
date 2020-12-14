function burgerUpdate(){
    $(document).ready(function(){
        $("#submit-button").on("click", () => {
            const burgerInfo = {
                burger_name: $("#new_burger").val().trim()
            }
            $.ajax("/burger/create", {
                type: "POST",
                Data: burgerInfo
            }).then(function (){
                location.reload();
            })
        })
     
    })
}