export interface User {
    id: number;
    name: string;
    role: 'Admin' | 'Financier' | 'Broker';
    email: string;
    phone: string;
}