export interface Damage {
    id: number;
    vehicleId: number;
    damageType: 'total' | 'scratch';
    description: string;
    estimatedCost: number;
    dateReported: Date;
}