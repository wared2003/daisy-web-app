import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Item } from "../models/item.model";
import { environment } from "../../../dev.environment";

/**
 * @author Edouard Nicolas
 */
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) {}

 /**
   * We're using the http.post method to send a POST request to the /items endpoint of our API. The request body is the
   * item object that we're passing in as an argument
  /**
   * This function takes an item as an argument, and then returns the result of an HTTP PATCH request to the API, passing
   * the item as the body of the request
   * @param {Item} item - Item - this is the item that we want to update.
   * @returns The updated item.
   */
   public createItem(item: Item){
    return this.http.post(`${environment.apiBaseUrl}/items`, item);
  }

  /* This function takes an item as an argument, and then returns the result of an HTTP PATCH request to the API, passing
     * the item as the body of the request */
  public updateItem(item: Item){
    return this.http.patch(`${environment.apiBaseUrl}/items/${item.ref}`, item);
  }

  public deleteItem(itemRef: number){
    this.http.delete(`${environment.apiBaseUrl}/items/${itemRef}`)
  }

}
