import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
@Injectable()
export class DataService {
  url = "https://api.flickr.com/services/rest/";

  constructor(private http:Http){}

  getList(data: any, numPage: number) {
    const params = {
      method: "flickr.photos.search",
      api_key: "7fc0d6111f95eabf19ac726a9bccb93b",
      format: "json",
      nojsoncallback: 1,
      page: numPage,
      per_page: 60,
      ...data //ES6 trick :)
    };

    let requestOptions = new RequestOptions({params: params});
    return this.http.get(this.url, requestOptions);
  }

  getPhoto(id: number) {
    const paramsPhoto = {
      method: "flickr.photos.getInfo",
      api_key: "7fc0d6111f95eabf19ac726a9bccb93b",
      photo_id: id,
      nojsoncallback: 1,
      format: "json"
    };

    let requestOptions = new RequestOptions({params: paramsPhoto});
    return this.http.get(this.url, requestOptions);
  }
}
