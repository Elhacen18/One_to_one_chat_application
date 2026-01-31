export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
    isOnline: boolean;
    lastActive: Date;
    aboutMe?: string;

}
