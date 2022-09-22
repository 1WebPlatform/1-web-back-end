 import {InjectClient} from "nest-postgres";
import {Client} from "pg";
import {RightService} from "../right/RightService";
 import {Injectable} from "@nestjs/common";


@Injectable()
export class ScreenService {
    constructor(
        @InjectClient() private readonly pg: Client,
        private readonly rightService: RightService
    ) {}
    public async screen(id: number, authorization:string){
        const right = await this.rightService.getRightUser(authorization);
        console.log(right);
        const result = await this.pg.query(`select * from config.screen_get_id_component(${id})`);
        return result.rows[0].screen;
    }
}