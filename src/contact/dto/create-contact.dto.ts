import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty({ message: 'Please enter your name' })
    name: string;

    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'Subject is required' })
    subject: string;

    @IsString()
    @IsNotEmpty({ message: 'Please enter a message' })
    @MinLength(10, { message: 'Message must be at least 10 characters' })
    message: string;
}