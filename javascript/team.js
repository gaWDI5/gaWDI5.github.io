

function URLS(personal_url, github_url, twitter_url){
    var urls_literal = {
        personal_url:personal_url || "http://WDI5.com",
        github_url:github_url || "https://github.com/gaWDI5",
        twitter_url:twitter_url || "https://twitter.com/WDI_5"
    };
    return urls_literal;
}

function Work_Item(title, url, screenshot){
    var work_item_literal = {
        title:title|| "WDI5 Team",
        url:url || "http://WDI5.com",
        screenshot:screenshot || "./pageContent/images/wdi5_shadow.png"
    };
    return work_item_literal;
}

function Images(big_image, small_image, profile_image){
    var urls_literal = {
        big_image:big_image || "./pageContent/images/wdi5_shadow.png",
        small_image:small_image || "./pageContent/images/wdi5_shadow.png",
        profile_image:profile_image || "./pageContent/images/wdi5_shadow.png"
    };
    return urls_literal;
}


function Team_Member(name, email, tagline, member_images, member_urls, member_work){
    var base_URLS = new URLS();
    var base_images = new Images();
    var base_work = new Work_Item();

    member_urls = member_urls || base_URLS;
    member_images = member_images || base_images;
    member_work = member_work || [base_work];

    var team_member_literal =  {
            name:name || "Firstname Lastname",
            firstname: name.split(" ")[0],
            lastname: name.split(" ")[1],
            email:email || "wdi5ga2013@gmail.com",
            tagline:tagline || "A WDI5 Member",
            images:member_images,
            urls:member_urls,
            work:member_work
        };

    return team_member_literal;
}


var team_data = [

    new Team_Member(
        "Alex Davidow",
        "alex.davidow@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/AlexDavidow_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/alexshotime",
                 "http://twitter.com/alexshotime"
                 )     
        ),

    new Team_Member(
        "David Aaron",
        "davidmatthewaaron@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/DavidAaron_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/dmaaron",
                 "http://twitter.com/davidsonpoint" 
                 )     
        ),

    new Team_Member(
        "Jamie Yu-Ramos",
        "pccjamie@gmail.com",
        "A WDI_5 Student",
        new Images(),
        new URLS("http://wdi5.com",
                 "http://github.com/pccjamie",
                 "http://twitter.com/podandcob" 
                 )     
        ),

    new Team_Member(
        "Lee Hampton",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/LeeHampton_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/LeeHampton",
                 "http://twitter.com/leejhampton" 
                 )     
        ),

    new Team_Member(
        "Michael Frohberg",
        "michaelfrohberg@live.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/MichaelFrohberg_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/mixedmedia",
                 "http://twitter.com/MixMediaDev" 
                 )     
        ),


    new Team_Member(
        "Mike Reinhart",
        "mreinhart88@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/MichaelReinhart_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/mikereinhart",
                 "http://twitter.com/reinhartmike" 
                 )     
        ),

    new Team_Member(
        "George Rodriguez",
        "1@6e0r9e.com",
        "A WDI_5 Student",
        new Images(),
        new URLS("http://wdi5.com",
                 "http://github.com/6e0r9e",
                 "http://twitter.com/ale6e0r9exshotime" 
                 )     
        ),

    new Team_Member(
        "Tanay Jalan",
        "tanayjalan@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/TannayJalan_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/jalant",
                 "http://twitter.com/TanayJalan" 
                 )     
        ),

    new Team_Member(
        "Chris Eichler",
        "chriseichler@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/ChrisEichler_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/chriseichler",
                 "http://twitter.com/Chris_R_Eichler" 
                 )     
        ),

    new Team_Member(
        "Isabel Cortes",
        "belcortes@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/BelCortes_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/belcortes",
                 "http://twitter.com/bebelcortes" 
                 )     
        ),

    new Team_Member(
        "Andrew Madden",
        "amadden80@gmail.com",
        "My business card say I'm an Audio Research, Programmer and Nice Guy.  I need a new business card...",
        new Images("./pageContent/images/team/AndrewMadden/AndrewMadden_big.png"),
        new URLS("http://AndrewMadden.com",
                 "http://github.com/amadden80",
                 "http://twitter.com/ajm_dev"
                 ),
        [
            new Work_Item('Sonifzer API', "http://Sonifizer.com", "./pageContent/images/team/AndrewMadden/Sonifizer.jpg"),
            new Work_Item('WDI5.com', "http://WDI5.com", "./pageContent/images/team/AndrewMadden/WDI5.jpg"),
            new Work_Item('Blings', "http://Blings.herokuapp.com", "./pageContent/images/team/AndrewMadden/Blings.jpg")
        ] 
        ),

    new Team_Member(
        "Remy Bartolotta",
        "remy.bartolotta@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/RemyBartolotta_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/bartolotta",
                 "http://twitter.com/WhoIsRemy" 
                 )     
        ),

    new Team_Member(
        "Mike Schechter",
        "schechtermike@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/MichaelSchechter_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/schechter",
                 "http://twitter.com/mschechter77" 
                 )     
        ),

    new Team_Member(
        "Bernard Doherty",
        "bernard.doherty@icloud.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/BernardDoherty_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/BernardDoherty",
                 "http://twitter.com/thebern" 
                 )     
        ),

    new Team_Member(
        "Ryan Kuhel",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images(),
        new URLS("http://wdi5.com",
                 "http://github.com/rkuhel",
                 "http://twitter.com/RyanKuhel" 
                 )     
        ),

    new Team_Member(
        "Frank Mendez",
        "fmendez133@gmail.com",
        "Do I look like I have time for this?",
        new Images("./pageContent/images/team/FrankMendez_big.png"),
        new URLS("http://wdi5.com",
                 "http://github.com/FJMendez",
                 "http://twitter.com/Abrasive_Fellow" 
                 )     
        )
];   


