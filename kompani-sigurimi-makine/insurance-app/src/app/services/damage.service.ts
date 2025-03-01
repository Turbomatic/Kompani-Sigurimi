export class DamageService {
    private damages: any[] = [];

    constructor() {
        // Initial mock data for damages
        this.damages = [
            { type: 'total repair', count: 15, value: 5000 },
            { type: 'scratch', count: 10, value: 1000 }
        ];
    }

    // Method to calculate total damage value
    calculateTotalDamage(): number {
        return this.damages.reduce((total, damage) => {
            return total + (damage.count * damage.value);
        }, 0);
    }

    // Method to get all damages
    getDamages(): any[] {
        return this.damages;
    }

    // Method to add a new damage report
    addDamage(damage: any): void {
        this.damages.push(damage);
    }
}