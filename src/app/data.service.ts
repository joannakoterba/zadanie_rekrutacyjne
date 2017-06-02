import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
@Injectable()
export class DataService {
  url = "https://api.flickr.com/services/rest/";

  constructor(private http:Http){}

  getList(data) {
    const params = {
      method: "flickr.photos.search",
      api_key: "7fc0d6111f95eabf19ac726a9bccb93b",
      format: "json",
      nojsoncallback: 1,
      ...data //ES6 trick :)
    };

    let requesrOptions = new RequestOptions({params: params});
    return this.http.get(this.url, requesrOptions);
  }
}
