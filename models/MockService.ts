//en mock för testsyfte 
import {Movie} from "./Movie"; 
import {IService} from "../models/IService";  

export class MockService implements IService{
    private data: Movie[] = [
        { id: "17", title: "LOTR", releaseYear: 2002, poster: "Url to image" },
        { id: "4711", title: "Harry Potter", releaseYear: 2002, poster: "Another url to an image",},
      ];
      getData(): Promise<Movie[]> {
          console.log("data from mockservice"); 
          return new Promise<Movie[]>((resolve)=> { resolve(this.data); }); 
      }
}