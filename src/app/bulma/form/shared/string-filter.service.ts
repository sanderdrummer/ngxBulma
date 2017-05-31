import {Injectable} from '@angular/core';
@Injectable()
export class StringFilterService {


  filter(list: any[], key: string, query: string): any[] {

    if (!query) {
      return list;
    }

    return list.filter(item => {
      return item[key] && item[key].indexOf(query) > -1;
    });
  }

  filterCaseInsensitive(list: any[], key: string, query: string): any[] {
    if (!query) {
      return list;
    }

    const lowerCaseQuery = query.toLocaleLowerCase();

    return list.filter(item => {
      return item[key] && item[key].toLocaleLowerCase().indexOf(lowerCaseQuery) > -1;
    });
  }

}
