type Point = {
    x: number;
    y: number;
};

type SetPoint = (x: number, y: number) => void;

type Name = string;

type PartialPointX = { x: number };
type PartialPointY = { y: number };

type PartialPoint = PartialPointX | PartialPointY;

type Data = [number, string, boolean];

type num = {
    num: number;
};

interface IStrNum extends num {
    str: string;
}

type IsEqualType<A, B> = A extends B
? B extends A
    ? true
    : false
: false;

type NumberEqualsToString = IsEqualType<number, string>; // false
type NumberEqualsToNumber = IsEqualType<number, number>; // true

//类型别名
type Props = PartialPoint