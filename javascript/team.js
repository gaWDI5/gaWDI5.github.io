

function URLS(personal_url, github_url, twitter_url){
    var urls_literal = {
        personal_url:personal_url || "http://WDI5.com",
        github_url:github_url || "https://github.com/gaWDI5",
        twitter_url:twitter_url || "https://twitter.com/WDI_5"
    }
    return urls_literal
}

function Images(big_image, small_image, profile_image){
    var urls_literal = {
        big_image:big_image || "./pageContent/images/wdi5_shadow.png",
        small_image:small_image || "./pageContent/images/wdi5_shadow.png",
        profile_image:profile_image || "./pageContent/images/wdi5_shadow.png"
    }
    return urls_literal
}


function Team_Member(name, email, bio, member_images, member_urls){
    var base_URLS = new URLS();
    var base_images =new Images();
    member_urls = member_urls || base_URLS; 
    member_images = member_images || base_images; 

    var team_member_literal =  {
            name:name || "Firstname Lastname",
            firstname: name.split(" ")[0],
            lastname: name.split(" ")[1],
            email:email || "wdi5ga2013@gmail.com",
            bio:bio || "A WDI5 Member",
            images:member_images,
            urls:member_urls
        }

    return team_member_literal
}


var team_data = [

    new Team_Member(
        "Alex Davidow",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/AlexDavidow_big.png"),
        new URLS()        
        ),

    new Team_Member(
        "David Aaron",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/DavidAaron_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Lee Hampton",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/LeeHampton_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Michael Frohberg",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/MichaelFrohberg_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Jamie Yu-Ramos",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images(),
        new URLS()
        ),

    new Team_Member(
        "Mike Reinhart",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/MichaelReinhart_big.png"),
        new URLS()
        ),

    new Team_Member(
        "George Rodriguez",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images(),
        new URLS()
        ),

    new Team_Member(
        "Tanay Jalan",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/TannayJalan_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Chris Eichler",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/ChrisEichler_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Isabel Cortes",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/BelCortes_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Andrew Madden",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/AndrewMadden_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Remy Bartolotta",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/RemyBartolotta_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Mike Schechter",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/MichaelSchechter_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Bernard Doherty",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/BernardDoherty_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Ryan Kuhel",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images(),
        new URLS()
        ),

    new Team_Member(
        "Frank Mendez",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/FrankMendez_big.png"),
        new URLS()
        )
];   


