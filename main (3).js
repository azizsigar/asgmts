$.ajax({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/users',
    tyoeDate:'json'
}).done(function(data){
    console.log(data)
    $.map(data,function(user,i){
        $('#results').append(`
        <h4>${user.name}</h4>`)
    })
})
$.ajax({
    url:'https://jsonplaceholder.typicode.com/users',
    type: 'POST',
    contentType: 'application/json',
    
    success: function(response) {
        console.log('Data posted successfully!', response);
    }
});