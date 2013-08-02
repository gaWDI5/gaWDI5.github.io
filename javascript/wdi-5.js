


function focus_on_member(mem_inx){
        
    current_member = team_data[mem_inx]
    if (current_member){
        $('#focus-team-member').empty()
        member_node = $('<div data-id= ' + mem_inx + ' id="' + current_member.lastname + '" class="focus-member sixteen columns" ></div>')
        member_node.append($('<div>').html('<h2 class="five columns">'+current_member.name+'<h2>'))
        member_node.append($('<div class="row"></div>'))
        member_node.append($('<img width="100%" class="four columns"></img>').attr('src', current_member.image))
        
        info_contact_section = $('<section class="shadowable four columns"></section>')
        info_contact_section.html(current_member.bio + '<br>')
        info_contact_section.html(info_contact_section.html() + current_member.email)
        member_node.append(info_contact_section)

        url_section = $('<section class="shadowable four columns"></section>')
        url_section.text(current_member.urls.personal_url)
        member_node.append(url_section)

        $('#focus-team-member').append(member_node)
        $('#focus-team-member').css('opacity', '1')
    }
}

function hover_focus_on_member(e){
    var mem_inx = $("#"+ e.target.parentElement.id).data()['id']
    focus_on_member(mem_inx)
}


// Document Ready Yo!
$(function(){


    $('#group-photo').hide()
    $('#group-photo').fadeIn(125)

    for(var mem=0; mem < team_data.length; mem++) {
        // Collect Member
        current_member = team_data[mem]
        // Create Div
        member_div = $('<div data-id= ' + mem + ' id="' + current_member.lastname + '" class="team-member three columns" ></div>')
        // Add Name
        member_div.append($('<div>').text(current_member.name))
        // Add Image
        member_div.append($('<img width="30%"></img>').attr('src', current_member.image))
        // Append to DOM
        $('#team-members-bin').append(member_div)
    }   

    $('#team-members-bin').on('click', '.team-member', hover_focus_on_member)

    focus_on_member(Math.floor(Math.random()*team_data.length))


    $('#focus-team-member').css('opacity', '0.5')




    $('#image-box').on('mouseenter', function(){
        $('#group-photo').attr('src', './pageContent/images/Group2.jpg')
    })
    $('#image-box').on('mouseleave', function(){
        $('#group-photo').attr('src', './pageContent/images/Group1.jpg')
    })

    // setTimeout(function(){
    //     node = $('<img class = "group-photo-hidden" id="group-photo-2" src="./pageContent/images/Group2.png" />')
    //     node.hide()
    //     $('#image').append(node)
    // }, 1000)

})