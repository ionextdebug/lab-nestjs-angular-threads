import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class User {

    @Prop()
    name: string;

}

export const UserSchema = SchemaFactory.createForClass(User);