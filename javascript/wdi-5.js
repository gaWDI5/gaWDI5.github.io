





// Document Ready Yo!
$(function(){


    for(var member in team_data) {
        // Collect Member
        current_member = team_data[member]
        // Create Div
        member_div = $('<div class="team-member three columns" ></span>')
        // Add Name
        member_div.append($('<div>').text(current_member.name))
        // Add Image
        member_div.append($('<img width="25%"></img>').attr('src', current_member.image))
        // Append to DOM
        $('#team-members-bin').append(member_div)
    }   

})