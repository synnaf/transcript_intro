//syftet är att hämta data från vårt OMDB API 
// http://www.omdbapi.com/?apikey=65873bd2 + paramterar 
//http://www.omdbapi.com/?apikey=65873bd2&s="Harry+Potter"  
//Våra tjänster skall bara ha en sak att göra. 
//Vår main skall agera som klister genom att använda tjänsten,
// och sedan skapa det som behövs för att applikationen skall bli användbar. 


import { Movie } from "./Movie"; 
import { IService } from "./IService";

export class Service implements IService {

    //här inne utvecklar vi funktionen och det som ska hända
    async getData(): Promise<Movie[]> {
        console.log("hej jag hämtar data!"); 

        //vår fetch sparas i en variabel
        let moviefetch = await fetch("http://www.omdbapi.com/?apikey=65873bd2&s=Harry+Potter"); 
        //vi sparar det hämtade resultatet i datatypen any i en variabel moviedata
        let moviedata: any = await moviefetch.json(); 

        //vi använder map-loopen för vår dataarray,
        let movies: Movie[] = moviedata.Search.map( (m: any)=> {

            //för varje objekt m, skapa ett nytt objekt enligt movie-klassen: 
            let newMovie: Movie = new Movie(); 
            newMovie.id = m.imdbID; 
            newMovie.title = m.Title;
            newMovie.releaseYear = m.Year; 
            newMovie.poster = m.Poster;  

            //vi skickar tillbaka objektet i slutet av loopen
            return newMovie; 
        }); 

        //vi skickar tillbaka hela movies-objektet 
        return movies; 
    }
}