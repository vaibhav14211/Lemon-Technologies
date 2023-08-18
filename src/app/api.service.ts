import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  getMenuData() {
    return this.httpClient.get("http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173");
  }

}
