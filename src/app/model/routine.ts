import { Habit } from "./habit";

export class Routine {
    id: number;
    name: string;
    description: string;
    isPublish: number;
    listaHabitos: Habit[];
  }
  