import { profileRiskType, status } from "src/module/shared/app_constant/appConstant";

export interface findOneUserBy {
    id?:string,
    mobileNumber?:string,
    fullName?:string,
    email?:string,
    hasMobileVerified?:boolean,
    hasEmailVerified?:boolean,
    profileRiskTyep?:profileRiskType,
    hasNotificationTurnedOn?:boolean,
    status?:status,
    authToken?:string,
    deviceToken?:string
    avatar?:string

    
}