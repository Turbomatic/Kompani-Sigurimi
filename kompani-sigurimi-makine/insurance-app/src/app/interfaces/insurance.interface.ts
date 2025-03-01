export interface Insurance {
    id: number;
    type: 'kasko' | 'full kasko' | 'kartoni jeshil';
    vehicleYear: number;
    enginePower: number;
    premiumAmount: number;
    insuredValue: number;
    policyStartDate: Date;
    policyEndDate: Date;
}