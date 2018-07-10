var table_data = [{
    first_name: 'Rose',
    last_name: 'Tyler',
    home: 'Earth'
},
{
    first_name: 'Zoe',
    last_name: 'Heriot',
    home: 'Space Station W3'
},
{
    first_name: 'Jo',
    last_name: 'Grant',
    home: 'Earth'
},
{
    first_name: 'Leela',
    last_name: null,
    home: 'Unspecified'
},
{
    first_name: 'Romana',
    last_name: null,
    home: 'Gallifrey'
},
{
    first_name: 'Clara',
    last_name: 'Oswald',
    home: 'Earth'
},
{
    first_name: 'Adric',
    last_name: null,
    home: 'Alzarius'
},
{
    first_name: 'Susan',
    last_name: 'Foreman',
    home: 'Gallifrey'
}];

// Generate dynamic tables from data structure using jquery.
function gentable(table_data){
    let table = $('<table></table>').addClass('table table-bordered').attr('id', 'newtable');
    $('<tr><th>First Name</th><th>Last Name</th><th>Home</th></tr>').appendTo(table);
    for (i = 0; i < table_data.length; i++){
        let person = table_data[i];
        if (person.last_name === null){
            person.last_name = "None";
        }
        let row = $('<tr></tr>').appendTo(table);
        $("<td>" + person.first_name + "</td>").appendTo(row);
        $("<td>" + person.last_name + "</td>").appendTo(row);
        $("<td>" + person.home + "</td>").appendTo(row);
    }
    return table;
}

// Click to insert. Using document on function to avoid manual binding.
$(document).on('click', '.insert_on_click', function () {
    var parent = $(this).parent();
    var table = gentable(table_data);
    parent.prepend(table);
    $(this).text("Close Table").toggleClass("insert_on_click close_on_click");
})

$(document).on('click', '.close_on_click', function () {
    var parent = $(this).parent();
    var table = parent.find("#newtable");
    table.remove();
    $(this).text("Insert Table").toggleClass("insert_on_click close_on_click");
})