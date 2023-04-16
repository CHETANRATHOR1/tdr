import { profileRiskType, status } from '../../shared/app_constant/appConstant';
import { AbstarctEntity } from '../../shared/entities/abstractentity.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UsersEntity extends AbstarctEntity {
  @Column({ type: 'varchar' ,nullable:false })
  mobile_number: string;

  @Column({ type: 'varchar',nullable:true  })
  fullName: string;

  @Column({ type: 'varchar',nullable:true  })
  email: string;

  @Column({ type: 'boolean',default:false})
  hasEmailVerified: boolean;

  @Column({ type: 'boolean',default:false  })
  hasMobileVerified: boolean;

  @Column({ type: 'enum',enum:profileRiskType,default:profileRiskType.LOW,nullable:false  })
  profileRiskType: string;  

  @Column({ type: 'enum',enum:status,default:status.ACTIVE,nullable:false  })
  status: string;  


  @Column({ type: 'varchar',nullable:true  })
  deviceToken: string;

  @Column({ type: 'varchar',nullable:true  })
  authToken: string;

  @Column({ type: 'varchar',nullable:true  })
  avatar: string;

  @Column({ type: 'boolean',default:false  })
  hasNotificationTurnedOn: boolean;
}
