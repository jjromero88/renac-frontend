import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  constructor() { }

  public generate(): string {
    return `app-${(Math.random()*0xFFFFFF<<0).toString(16)}`;
  }

}
