import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

private isLoggedIn:Boolean = false;

  constructor() { }

  public isAuth(){
    return this.isLoggedIn;
  }

  public auth(v){
    this.isLoggedIn = v;
  }

write(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    read<T>(key: string): T {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }
}
