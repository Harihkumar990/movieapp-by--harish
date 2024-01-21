let moviecontent = [
    {
        name:"Maboroshi",
        link:"https://pikahd.com/maboroshi-movie/",
        image:"./content/maboroshi.jpg",
        description:"Maboroshi (Movie) English Dubbed (ORG) [Dual Audio] WEB-DL 1080p 720p 480p HD [2023 Anime Movie]",
        Genres: "Animation,Drama,Fantasy"
    },
    {
        name:"Dead Mount Death Play",
        link:"https://pikahd.com/dead-mount-death-play-part-2/",
        image:"./content/dead mount death play.jpg",
        description:"Dead Mount Death Play (PART 2) Japanese (ORG) & English Dub [Dual Audio] WEB-DL 1080p 720p 480p HD [2023– Anime Series] [Episode 10 Added !]",
        Genres:"Animation,Action,Fantasy"
    },
    {
        name:"Delicious In Dungeon",
        link:"https://pikahd.com/delicious-in-dungeon-s1/",
        image:"./content/dungeon.jpg",
        description:"Delicious in Dungeon (Season 1) Hindi Dubbed (ORG 5.1) [Multi Audio] WEB-DL 1080p 720p 480p HD [2024– Anime Series] [Episode 02 Added !]",
        Genres:"Animation,Comedy,Drama"     
    },
    {
        name:"I Shall Survive Using Postions",
        link:"https://pikahd.com/i-shall-survive-using-potions-s01-hindi/",
        image:"./content/i shall survive.jpg",
        description:"I Shall Survive Using Potions! (Season 1) Hindi Dubbed (ORG) & English + Japanese [Triple Audio] WEB-DL 1080p 720p 480p HD [2023 Anime Series] [All Episode – zip Added !]",
        Genres: "Animation,Adventure,Action"
    },
    {
        name:"Shangri La Frontier",
        link:"https://pikahd.com/shangri-la-frontier-s1/",
        image:"./content/Shangri-La-Frontier.jpg",
        description:"Shangri-La Frontier (Season 1) Hindi Dubbed (ORG) & Japanese [Dual Audio] WEB-DL 1080p 720p 480p HD [2023 Anime Series] – S01 Episode 12 Added !",
        Genres: "Anime,Action,Adventure,Fantasy"
    },
    {
        name: "Solo Leveling",
        link:"https://pikahd.com/solo-leveling-season-1-hindi-dub/",
        image:"./content/solo levelling.jpg",
        description:"Solo Leveling (Season 1) Hindi Dubbed (ORG) English + Japanese [Triple Audio] WEB-DL 1080p 720p 480p HD [2024– Anime Series] [Episode 01 – 02 Added !]",
        Genres:"Animation,Action,Adventure"
    },
    {
        name :"Spy X Family",
        link:"https://pikahd.com/spy-x-family-season-2-hindi-dubbed/",
        image:"./content/Spy-X-Family.jpg",
        description:"Spy x Family (Season 2) Hindi Dubbed (ORG) [Triple Audio] WEB-DL 1080p 720p 480p HD [2023– Anime Series] [Episode 02 Added !]",
        Genres:"Animation,Action,Comedy"
    },
    {
        name:"The 100 Girlfriends Who Really Love you",
        link:"https://pikahd.com/the-100-girlfriends-who-really-really-really-really-really-love-you-season-1-english-dubbed/",
        image:"./content/the 100 girlfreing who really love you.jpg",
        description:"The 100 Girlfriends Who Really, Really, Really, Really, REALLY Love You (Season 1) English Dubbed (ORG) [Dual Audio] WEB-DL 1080p 720p 480p HD [2023– Anime Series] [Episode 11 Added !]",
        Genres:"Animation,Comedy,Romance"
    },
    {
        name:"The Kingdom of ruin",
        link:"https://pikahd.com/the-kingdoms-of-ruin-season-1-english-dubbed/",
        image:"./content/the kingdom of ruin.jpg",
        description:"The Kingdoms of Ruin (Season 1) English Dubbed (ORG) [Dual Audio] WEB-DL 1080p 720p 480p HD [2023– Anime Series] [Episode 11 Added !]",
        Genres:"Animation,Action,Drama"
    },
    {
        name:"The Apothecary Diaries",
        link:"https://pikahd.com/the-apothecary-diaries-season-1-hindi-dubbed/",
        image:"./content/The-Apothecary-Diaries.jpg",
        description:"The Apothecary Diaries (Season 1) Hindi Dubbed (ORG) & English + Japanese [Triple Audio] WEB-DL 1080p 720p 480p HD [2023 Anime Series] [Episode 01 – 11 Added !]",
        Genres:"Animation,Drama,History"
    },
    {
        name:"Indead Unluck",
        link:"https://pikahd.com/undead-unluck-season-1-english-dubbed/",
        image:"./content/Undead-Unluck.jpg",
        description:"Undead Unluck (Season 1) English Dubbed (ORG) [Dual Audio] WEB-DL 1080p 720p 480p HD [2023– Anime Series] [Episode 05 Added !]",
        Genres:"Animation,Action,Adventure"
    }
]
let filtergenrearr =[];
let searchvalue ="";
let Genre="";
let selectoption = document.querySelector(".select-genre");
let gener = "";
let header = document.querySelector(".header");
let maincontainer = document.querySelector(".main");
let inputcontainer = document.querySelector(".inputcontainer");
const crtelem = (elem) => document.createElement(elem);
const func = (movies)=>{
    for(let movie of movies){
        let link = crtelem("a");
        link.setAttribute("href",movie.link);


        let imgcontainer = crtelem("div");
        imgcontainer.classList.add("imagecontainer");
        let image = crtelem("img");
        image.setAttribute("src",movie.image,);
        image.classList.add("image")

        let descriptioncont = crtelem("div");
        descriptioncont.classList.add("descriptioncontainer");

        let spantag  = crtelem("span");
        spantag.innerText = movie.description;

        descriptioncont.appendChild(spantag)
        link.appendChild(image);
        imgcontainer.appendChild(link);
        imgcontainer.appendChild(descriptioncont);
        maincontainer.appendChild(imgcontainer);
        
        
    }

}


gener = moviecontent.reduce((acc,cur)=>{
    let genrearr =[];    
    let temparr = cur.Genres.split(",");
    acc = [...acc,...temparr];
    for(let genre of acc){
        if(!genrearr.includes(genre)){
            genrearr = [...genrearr,genre]
        }
    }
    return genrearr
},[])

for(let str of gener){
    let option = crtelem("option");
    option.setAttribute("value",str);
    option.innerText = str;
    option.classList.add("option")
    selectoption.appendChild(option);
    header.appendChild(selectoption)
}

func(moviecontent)

function filter(){
    if(searchvalue?.length>0){
    
        filtergenrearr=[];
        
        for(let cur of moviecontent){
            let names = cur.name.toLowerCase();
            
            if(searchvalue === names){
                
                filtergenrearr = [...filtergenrearr,cur];
                console.log(filtergenrearr)
            }
        }
    }
    
        
    
    
    
     
    return filtergenrearr;
}

function handlesearch(e){
    searchvalue = e.target.value.toLowerCase();
    let filterarr = filter();
    maincontainer.innerHTML ="";
    func(filterarr);
}
function debounce(callback,delay){
    let timerId;
    return (...args)=>{
        clearTimeout(timerId);
        timerId = setTimeout(() =>{
            callback(...args)
        },delay)
    };
}
let debounceInput = debounce(handlesearch,500);

inputcontainer.addEventListener("change",debounceInput)

selectoption.addEventListener("change",(e)=>{
    Genre = e.target.value;
    filtergenrearr=[]
    for(let cur of moviecontent){
        if(cur.Genres.includes(Genre)){
            filtergenrearr = [...filtergenrearr,cur]
        }
    }
    maincontainer.innerHTML = "";
    func(filtergenrearr);
})
