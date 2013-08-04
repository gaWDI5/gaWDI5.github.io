

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
        "Alex Davidow"        
        ),

    new Team_Member(
        "David Aaron"
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
        "David Aaron"
        ),

    new Team_Member(
        "Jamie Yu-Ramos"
        ),

    new Team_Member(
        "Lee Hampton"
        ),

    new Team_Member(
        "Michael Frohberg"
        ),

    new Team_Member(
        "Mike Reinhart"
        ),

    new Team_Member(
        "George Rodriguez"
        ),

    new Team_Member(
        "Tanay Jalan",
        "wdi5ga2013@gmail.com",
        "A WDI_5 Student",
        new Images("./pageContent/images/team/TannayJalan_big.png"),
        new URLS()
        ),

    new Team_Member(
        "Chris Eichler"
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
        "Mike Schechter"
        ),

    new Team_Member(
        "Bernard Doherty"
        ),

    new Team_Member(
        "Ryan Kuhel"
        ),

    new Team_Member(
        "Frank Mendez"
        )

]   




// var team_data = {
    
//     Davidow:{            
//             name:"Alex Davidow", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Aaron:{            
//             name:"David Aaron", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Yu_Ramos:{            
//             name:"Jamie Yu-Ramos", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Hampton:{            
//             name:"Lee Hampton", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Frohberg:{            
//             name:"Michael Frohberg", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Reinhart:{            
//             name:"Mike Reinhart", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Rodriguez:{            
//             name:"George Rodriguez", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Jalan:{            
//             name:"Tanay Jalan", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Eichler:{            
//             name:"Chris Eichler", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Cortes:{            
//             name:"Isabel Cortes", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Madden:{            
//             name:"Andrew Madden", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Bartolotta:{            
//             name:"Remy Bartolotta", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Schechter:{            
//             name:"Mike Schechter", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Doherty:{            
//             name:"Bernard Doherty", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Kuhel:{            
//             name:"Ryan Kuhel", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             },

//     Mendez:{            
//             name:"Frank Mendez", 
//             url: "http://wdi5.com", 
//             bio:"I went to WDI at GA.",
//             image:"http://placekitten.com/"+(Math.floor(Math.random()*200)+100)+"/"+(Math.floor(Math.random()*200)+100)
//             }

// }