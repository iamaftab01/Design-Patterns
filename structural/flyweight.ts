/*

The Flyweight Design Pattern is a structural pattern used to minimize memory usage by sharing common
state between many objects instead of duplicating it.

Purpose:
  To support large numbers of fine-grained objects efficiently by separating:
    Intrinsic state:
      Shared, stored in the Flyweight.
    Extrinsic state:
      Unique to each object, passed by the client at runtime.

Example: 
  You're building a backend for an online map application (like Uber or a delivery tracker). Thousands of vehicles are displayed on the map.
  Many vehicles share the same type (e.g., truck, bike, car). Instead of storing full vehicle data in every object,
  use the Flyweight pattern to share common vehicle type data.

*/

export {}

class VehicleType {
  constructor(
    private name: string,
    private icon: string,
    private color: string,
  ) {}

  render(x: number, y: number): void {
    console.log(`Rendering ${this.name} at (${x}, ${y}) with icon ${this.icon} and color ${this.color}`);
  }
}

class VehicleTypeFactory {
  private types: Map<string, VehicleType> = new Map();

  getVehicleType(name: string, icon: string, color: string): VehicleType {
    const key = `${name}_${icon}_${color}`;
    if (!this.types.has(key)) {
      console.log(`Creating a new VehicleType: ${key}`);
      this.types.set(key, new VehicleType(name, icon, color));
    }
    return this.types.get(key)!;
  }
}

class Vehicle {
  constructor(
    private x: number,
    private y: number,
    private type: VehicleType,
  ) {}

  render(): void {
    this.type.render(this.x, this.y);
  }
}

const factory = new VehicleTypeFactory();

const vehicles: Vehicle[] = [];
vehicles.push(new Vehicle(10, 20, factory.getVehicleType('Car', '🚗', 'blue')));
vehicles.push(new Vehicle(15, 25, factory.getVehicleType('Car', '🚗', 'blue')));
vehicles.push(new Vehicle(20, 30, factory.getVehicleType('Bike', '🏍️', 'black')));
vehicles.push(new Vehicle(50, 60, factory.getVehicleType('Truck', '🚚', 'red')));

// Render all vehicles
vehicles.forEach(vehicle => vehicle.render());
