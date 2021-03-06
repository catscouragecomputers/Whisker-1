import { AngularDelegate } from '@ionic/angular';

export interface User {
    valid?: boolean,
    id: String,
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    currentSessionId?: String,
    sessionId?: String,
    expDate?: Date,
    message?: String,
    admin?: boolean,
    providerId?: string,
    imageUrl?: any,
    favorites?: string[]
}