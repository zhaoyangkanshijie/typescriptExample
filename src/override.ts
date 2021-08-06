declare function test(a: number): number;
declare function test(a: string): string;

const resS = test("Hello World"); // resS 被推断出类型为 string；
const resN = test(1234); // resN 被推断出类型为 number;