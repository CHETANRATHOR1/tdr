import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Auth {
    @Column()
    @PrimaryColumn()
    id:string

    @Column()
    name:string
}
