var current_member_on_focus=0;


function focus_on_member(mem_inx){
        
    current_member = team_data[mem_inx];
    if (current_member){
        $('#focus-team-member').empty();

        var member_node = $('<div data-id= ' + mem_inx + ' id="' + current_member.lastname + '" class="focus-member sixteen columns" ></div>');
        member_node.append($('<div>').html('<h2>'+current_member.name+'<h2>'));
        member_node.append($('<div class="row"></div>'));
        var member_node_left = $('<div id="focus-member-left" class="six columns"></div>');
        
        var contact_section = $('<section class="shadowable four columns"></section>');
        contact_section.append($("<a target='blank' href='mailto:" + current_member.email+ "'>" + current_member.email+ "</a></br>"));
        contact_section.append($('<a href='+current_member.urls.personal_url+'>'+current_member.urls.personal_url+'</a>'));
        member_node_left.append(contact_section);
        member_node_left.append($('<div class="row"></div>'));

        member_node_left.append($('<img id="focus-member-image" class="seven columns"></img>').attr('src', current_member.images.image));
        
        
        var member_node_right = $('<div id="focus-member-right" class="seven columns offset-by-two"></div>');
        
        var tagline_section = $('<section class="shadowable"></section>');
        tagline_section.html('"'+current_member.tagline + '"' + '<br>');
        member_node_right.append(tagline_section);
        member_node_right.append($('<div class="row"></div>'));

        var work_title_section = $('<section id="work-example-title" class="shadowable"></section>');
        work_title_section.html('Work Examples:<br>');
        member_node_right.append(work_title_section);
        member_node_right.append($('<div class="row"></div>'));

        var work_section = $('<section class="shadowable"></section>');
        $.each(current_member.work, function(index, work_item){
            var work_item_link = $('<a target="_blank" class="shadowable"></a>');
            work_item_link.attr('href', work_item.url);
            var work_image = ($('<img class="small-work-image three columns" />').attr('src', work_item.screenshot));
            work_image.data('title', work_item.title);
            work_item_link.append(work_image);
            work_section.append(work_item_link);
        });

        member_node_right.append(work_section);
        member_node_right.append($('<div class="row"></div>'));
        
        member_node.append(member_node_left);
        member_node.append(member_node_right);

        focus_image = $('#focus-member-image');
        $('#focus-member-image').data('data-size-tog', false);

        $('#focus-team-member').append(member_node);
        $('#focus-team-member').css('opacity', '1');
    }

    $('#hiden-focus-team-member').append($('<img width="0px" height="0px"></img>').attr('src', current_member.images.big_image));
}

function toggle_focus_image_size(){
    var focus_image = $("#focus-member-image");
    current_member = team_data[current_member_on_focus];
    focus_image.attr('src', current_member.images.big_image);

    if (focus_image.data('data-size-tog')){
        focus_image.data('data-size-tog', false);
        focus_image.animate({
            width: focus_image.data('saved-size')
        }, 1500);
    }
    else{
        focus_image.data('data-size-tog', true);
        focus_image.data('saved-size', focus_image.css('width'));
        focus_image.animate({
            width: '95%'
        }, 1500 );
    }

}


function click_focus_on_member(e){
    var mem_inx = $("#"+ e.target.parentElement.id).data()['id'];
    current_member_on_focus = mem_inx;
    focus_on_member(current_member_on_focus);
}


function load_focus_on_member_pictures(){

    $('#focus-team-member').unbind('mouseenter', load_focus_on_member_pictures);
    $('#team-members-bin').unbind('mouseenter', load_focus_on_member_pictures);

    for(var mem=0; mem < team_data.length; mem++) {
        // $('#hiden-focus-team-member').empty();
        var current_member_prep = team_data[mem];
        $('#hiden-focus-team-member').append($('<img width="0px" height="0px"></img>').attr('src', current_member_prep.images.image));
    }

}


function update_work_example_title(e){
    $('#work-example-title').text("Work Examples:  \""+$(e.target).data('title')+"\"");
}
function clear_work_example_title(e){
    $('#work-example-title').text("Work Examples:");
}


// Document's Ready Yo!
$(function(){

    for(var mem=0; mem < team_data.length; mem++) {
        // Collect Member
        current_member = team_data[mem];
        // Create Div
        member_div = $('<div data-id= ' + mem + ' id="' + current_member.lastname + '" class="team-member three columns" ></div>');
        // Add Image
        member_div.append($('<img class="team-member-image-small" ></img>').attr('src', current_member.images.small_image));
        // Add Name
        member_div.append($('<div>').text(current_member.name));
        // Append to DOM
        $('#team-members-bin').append(member_div);
    }

    $('#team-members-bin').on('click', '.team-member', click_focus_on_member);

    current_member_on_focus = Math.floor(Math.random()*team_data.length);
    focus_on_member(current_member_on_focus);
    // $('#focus-team-member').css('opacity', '0.5')

    $('#focus-team-member').on('click', '#focus-member-image', toggle_focus_image_size);
    $('#focus-team-member').on('mouseenter', '.small-work-image', update_work_example_title);
    $('#focus-team-member').on('mouseleave', '.small-work-image', clear_work_example_title);

    $('#image-box').on('mouseenter', function(){
        $('#group-photo').attr('src', './pageContent/images/Group2.jpg');
    });
    $('#image-box').on('mouseleave', function(){
        $('#group-photo').attr('src', './pageContent/images/Group1.jpg');
    });

    $('#focus-team-member').on('mouseenter', load_focus_on_member_pictures);
    $('#team-members-bin').on('mouseenter', load_focus_on_member_pictures);
    setTimeout(load_focus_on_member_pictures, 1000);


    

});