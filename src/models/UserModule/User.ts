import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserRegist & Document;

@Schema()
export class UserRegist{
    @Prop({type: String})
    firstname
   
    @Prop({type: String})
    lastname

    @Prop({type: String, unique: true})
    email
    
    @Prop({type: String})
    password

    @Prop({type: Date})
    created
   
  
    @Prop({type: String,
      enum: ["admin", "partner", "basic"],
      default: "basic"})
    role

    
    }

export const UserSchema = SchemaFactory.createForClass(UserRegist);