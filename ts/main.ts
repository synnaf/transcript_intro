import {Movie} from "../models/Movie";
import {IService} from "../models/IService";
import {Service} from "../models/Service";
import {Search} from "../models/Search";
// import {MockService} from "../models/MockService"; 


//för att köra igång applikationen 
window.onload = function() {

    //vi skapar upp en instans av Service, servide är det som implementerar interafcet 
    //instansen blir av typen IDataService 
    let service: IService = new Service(); 
    let main: Main = new Main(); 
    //här kör vi funktionen i main-klassen!
    main.start(service); 


    //lyssna efter sökning, om sökning görs: 
    document.getElementById("searchButton").addEventListener("click", ()=> {

        console.log(" you are searching...")

        let service: IService = new Search(); 
        let searchFor: Search = new SearchC(); 
        searchFor.search(service); 

    })

}


//vi definierar klassen main
//här inne kör vi funktionen getData(), som hämtar data från APIt. Här behöver vi plocka upp datan! 
class Main {

    async start(service: IService) {
        console.log("Starting operation"); 

        let movieList: Movie[] = await service.getData(); 
        console.log(movieList); 

        //för varje objekt i listan vill vi skapa upp en ny div 
        movieList.forEach(mObject => {

            let container = document.getElementById("movie-container");
            let newText = document.createElement("div");
            newText.setAttribute("class", "movielist"); 
            container.appendChild(newText);
         
            let movietitle = document.createElement("h2"); 
            movietitle.innerHTML = mObject.title; 
            newText.appendChild(movietitle); 


            let movieYear = document.createElement("p"); 
            movieYear.innerHTML = "It was released: " + mObject.releaseYear; 
            newText.appendChild(movieYear); 

            let poster = document.createElement("img"); 
            poster.src = mObject.poster; 
            newText.appendChild(poster); 
         
        });

    }

}

class SearchC {

    //sökfunktionen? 
    async search(service: IService) {

        let movieList: Movie[] = await service.getData(); 
        console.log(movieList); 
        //hit funkar det! 
        //problemet nu är att den 

        //för varje objekt i listan vill vi skapa upp en ny div 
        movieList.forEach(mObject => {

            let container = document.getElementById("movie-container");
            let newText = document.createElement("div");
            newText.setAttribute("class", "movielist"); 
            container.appendChild(newText);
         
            let movietitle = document.createElement("h2"); 
            movietitle.innerHTML = mObject.title; 
            newText.appendChild(movietitle); 


            let movieYear = document.createElement("p"); 
            movieYear.innerHTML = "It was released: " + mObject.releaseYear; 
            newText.appendChild(movieYear); 

            let poster = document.createElement("img"); 
            poster.src = mObject.poster; 
            newText.appendChild(poster); 
         
        });


    }

}

