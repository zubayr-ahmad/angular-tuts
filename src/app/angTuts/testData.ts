import { InMemoryDbService } from "angular-in-memory-web-api";

export class TestData implements InMemoryDbService{
  createDb(){
    let bookDetails=[
      {id:1000,name:'YesOne',catagory:'A'},
      {id:1001,name:'YesOne1',catagory:'A1'},
      {id:1002,name:'YesOne2',catagory:'A2'},
      {id:1003,name:'YesOne3',catagory:'A3'},
      {id:1004,name:'YesOne4',catagory:'A4'},
      {id:1005,name:'YesOne5',catagory:'A5'},
      {id:1006,name:'YesOne6',catagory:'A6'}

    ]
    
    return {books:bookDetails}

  }
}
