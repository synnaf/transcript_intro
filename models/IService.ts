//Interface för service 
import { Movie } from "./Movie"; 

export interface IService {

    //vi skapar funktionen som ska hämta datan, 
    //och vilken typ den ska returnera: 
    //vi vill att den returnerar ett promise-objekt!
    getData(): Promise<Movie[]>; 


}