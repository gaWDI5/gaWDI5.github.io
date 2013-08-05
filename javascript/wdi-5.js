


function focus_on_member(mem_inx){
        
    current_member = team_data[mem_inx]
    if (current_member){
        $('#focus-team-member').empty()

        var member_node = $('<div data-id= ' + mem_inx + ' id="' + current_member.lastname + '" class="focus-member sixteen columns" ></div>')
        member_node.append($('<div>').html('<h2>'+current_member.name+'<h2>'))
        member_node.append($('<div class="row"></div>'))
        var member_node_left = $('<div id="focus-member-left" class="seven columns"></div>')
        member_node_left.append($('<img id="focus-member-image" class="seven columns" width="100%""></img>').attr('src', current_member.images.big_image))
        
        var member_node_right = $('<div id="focus-member-right" class="five columns"></div>')
        var info_contact_section = $('<section class="shadowable"></section>')
        info_contact_section.html(current_member.bio + '<br>')
        info_contact_section.html(info_contact_section.html() + current_member.email)
        member_node_right.append(info_contact_section)

        member_node_right.append($('<div class="row"></div>'))
        var url_section = $('<section class="shadowable four columns"></section>')
        url_section.text(current_member.urls.personal_url)
        member_node_right.append(url_section)

        member_node.append(member_node_left)
        member_node.append(member_node_right)

        $('#focus-team-member').append(member_node)
        $('#focus-team-member').css('opacity', '1')
    }
}

function toggle_focus_image_size(){
    var focus_image = $("#focus-member-image")
    var toggle_size = "95%"

    focus_image.animate({
        width: toggle_size,
    }, 1500 );
}



function click_focus_on_member(e){
    var mem_inx = $("#"+ e.target.parentElement.id).data()['id']
    focus_on_member(mem_inx)
}


function load_focus_on_member_pictures(){

    $('#focus-team-member').unbind('mouseenter', load_focus_on_member_pictures)
    $('#team-members-bin').unbind('mouseenter', load_focus_on_member_pictures)

    for(var mem=0; mem < team_data.length; mem++) {
        $('#hiden-focus-team-member').empty()
        var current_member_prep = team_data[mem]
        $('#hiden-focus-team-member').append($('<img width="0px" height="0px"></img>').attr('src', current_member_prep.images.big_image))
    }

}


// Document Ready Yo!
$(function(){

    for(var mem=0; mem < team_data.length; mem++) {
        // Collect Member
        current_member = team_data[mem]
        // Create Div
        member_div = $('<div data-id= ' + mem + ' id="' + current_member.lastname + '" class="team-member three columns" ></div>')
        // Add Image
        member_div.append($('<img class="team-member-image-small" ></img>').attr('src', current_member.images.small_image))
        // Add Name
        member_div.append($('<div>').text(current_member.name))
        // Append to DOM
        $('#team-members-bin').append(member_div)
    }   

    $('#team-members-bin').on('click', '.team-member', click_focus_on_member)

    focus_on_member(Math.floor(Math.random()*team_data.length))
    // $('#focus-team-member').css('opacity', '0.5')

    $('#focus-team-member').on('mouseenter', load_focus_on_member_pictures)
    $('#team-members-bin').on('mouseenter', load_focus_on_member_pictures)

    $('#focus-team-member').on('click', toggle_focus_image_size)

    $('#image-box').on('mouseenter', function(){
        $('#group-photo').attr('src', './pageContent/images/Group2.jpg')
    })
    $('#image-box').on('mouseleave', function(){
        $('#group-photo').attr('src', './pageContent/images/Group1.jpg')
    })


})