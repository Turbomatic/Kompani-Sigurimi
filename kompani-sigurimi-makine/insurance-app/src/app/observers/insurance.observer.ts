export class InsuranceObserver {
    private observers: Function[] = [];

    // Method to subscribe to changes
    public subscribe(observer: Function): void {
        this.observers.push(observer);
    }

    // Method to unsubscribe from changes
    public unsubscribe(observer: Function): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify all subscribed observers of changes
    public notify(data: any): void {
        this.observers.forEach(observer => observer(data));
    }
}