import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
@Injectable()
export class DataService {
  url = "https://api.flickr.com/services/rest/";

  constructor(private http:Http){}

  getList() {
    const params = {
      method: "flickr.photos.search",
      api_key: "7fc0d6111f95eabf19ac726a9bccb93b",
      format: "json",
      text: "test"
    };

    let requesrOptions = new RequestOptions({params: params});
    return this.http.get(this.url, requesrOptions);
  }
}
