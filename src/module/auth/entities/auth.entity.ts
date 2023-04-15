import { AbstarctEntity } from "src/module/shared/entities/abstractentity.entity";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Auth extends AbstarctEntity {
   

    @Column()
    name:string
}
