import { Payload } from './Payload';

export class Astronaut implements Payload {
    massKg: number;
    material: string;
    name: string;
    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name; 
    }
}

