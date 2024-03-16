    
// switch for light vs dark mode
function toggleTheme() {
    const themeStyle = $('#themeStyle');
    const iconSwitch = $('#switchIcon');
    if (themeStyle.attr('href') === '/CSS/light-mode.css') {
        themeStyle.attr('href', '/CSS/dark-mode.css');
        iconSwitch.attr('class', 'fa-solid fa-sun fa-lg');
    } else {
        themeStyle.attr('href', '/CSS/light-mode.css');    
        iconSwitch.attr('class', 'fa-solid fa-moon fa-lg');    
    }                
};    


//add list in home.ejs
$(document).ready(function() {
    $('#addListBtn').click(function() {
        var listName = prompt('Enter list name:');
        var coverPhoto = prompt('Enter URL for cover photo (optional):');

        if (listName) {
            var listItem = $('<li>').attr('id', 'listOne');
            if (coverPhoto) {
                var img = $('<img>').attr('src', coverPhoto).attr('id', 'listImg');
                listItem.append(img);
            }
            listItem.append(`<h2 id="listTitle">${listName}</h2>`)
            $('#listContainer ul').append(listItem);
        }
    });
});
