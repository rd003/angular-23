import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from './models/user';

export class MockData implements InMemoryDbService{
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
        const users:User[] = [
            {id:1,name:'john',email:'john@gmail.com'},
            {id:2,name:'jane',email:'jane@yahoo.com'},
            {id:3,name:'kane',email:'Kane@rediff.com'}
        ];
        return {users};
    }

}
