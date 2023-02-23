import { transpileModule } from "typescript";

const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

const f: true = true;

const arr: string[] = ["123", "456", "789"];
const arr2: number[] = [123, 456, 789];
const arr3: [number, number, string] = [3, 2, "hello"];

const obj: { let: number; lon: number } = { let: 37, lon: 127 };
