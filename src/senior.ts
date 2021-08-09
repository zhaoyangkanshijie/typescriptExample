/**
 * SetDifference的实现和Exclude一样
 */
type SymmetricDifference<T, U> = Exclude<T | U, T & U>;

/**
 * @example
 * type Eg = '1' | '4';
 */
type Eg11 = SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>

/**
 * @desc NonUndefined判断T是否为undefined
 */
type NonUndefined<T> = T extends undefined ? never : T;

/**
 * @desc 核心实现
 */
type FunctionKeys<T extends object> = {
  [K in keyof T]: NonUndefined<T[K]> extends Function ? K : never;
}[keyof T];

/**
 * @example
 * type Eg = 'key2' | 'key3';
 */
type AType = {
    key1: string,
    key2: () => void,
    key3: Function,
};
type Eg12 = FunctionKeys<AType>;

type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

/**
 * @desc 用于创建获取指定类型工具的类型工厂
 * @param T 待提取的类型
 * @param P 要创建的类型
 * @param IsCheckNon 是否要进行null和undefined检查
 */
type KeysFactory<T, P extends Primitive | Function | object, IsCheckNon extends boolean> = {
  [K in keyof T]: IsCheckNon extends true
    ? (NonUndefined<T[K]> extends P ? K : never)
    : (T[K] extends P ? K : never);
}[keyof T];

/**
 * @example
 * 例如上述KeysFactory就可以通过工厂类型进行创建了
 */
type FunctionKeys2<T> = KeysFactory<T, Function, true>;
type StringKeys<T> = KeysFactory<T, string, true>;
type NumberKeys<T> = KeysFactory<T, string, true>;

/**
 * 核心实现
 */
type MutableKeys<T extends object> = {
    [P in keyof T]-?: IfEquals<
      { [Q in P]: T[P] },
      { -readonly [Q in P]: T[P] },
      P
    >;
  }[keyof T];
  
  /**
   * @desc 一个辅助类型，判断X和Y是否类型相同，
   * @returns 是则返回A，否则返回B
   */
  type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
    ? A
    : B;

type OptionalKeys<T> = {
    [P in keyof T]: {} extends Pick<T, P> ? P : never
    }[keyof T];
    
    type Eg13 = OptionalKeys<{key1?: string, key2: number}>
    // Eg2 = false
    type Eg14 = {} extends {key1: string} ? true : false;
    // Eg3 = true
    type Eg15 = {} extends {key1?: string} ? true : false;

// 辅助函数，用于获取T中类型不能never的key组成的联合类型
type TypeKeys<T> = T[keyof T];

/**
 * 核心实现
 */
type PickByValue<T, V> = Pick<T,
  TypeKeys<{[P in keyof T]: T[P] extends V ? P : never}>
>;

/**
 * @example
 *  type Eg = {
 *    key1: number;
 *    key3: number;
 *  }
 */
type Eg16 = PickByValue<{key1: number, key2: string, key3: number}, number>;

/**
 * 核心实现
 */
type PickByValueExact<T, V> = Pick<T,
  TypeKeys<{[P in keyof T]: [T[P]] extends [V]
    ? ([V] extends [T[P]] ? P : never)
    : never;
  }>
>

// type Eg1 = { b: number };
type Eg17 = PickByValueExact<{a: string, b: number}, number>
// type Eg2 = { b: number; c: number | undefined }
type Eg18 = PickByValueExact<{a: string, b: number, c: number | undefined}, number>

/**
 * 核心思路利用Pick提取指定的key组成的类型
 */
type Intersection<T extends object, U extends object> = Pick<T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

type Eg19 = Intersection<{key1: string}, {key1:string, key2: number}>

type Diff<T extends object, U extends object> = Pick<
  T,
  Exclude<keyof T, keyof U>
>;

/**
 * Overwrite实现
 * 获取前者独有的key和类型，再取两者共有的key和该key在后者中的类型，最后合并。
 */
type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;

/**
 * @example
 * type Eg1 = { key1: number; }
 */
type Eg20 = Overwrite<{key1: string}, {key1: number, other: boolean}>

// 实现
type Assign<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T> & Diff<U, T>
> = Pick<I, keyof I>;

/**
 * @example
 * type Eg = {
 *   name: string;
 *   age: string;
 *   other: string;
 * }
 */
type Eg21 = Assign<
  { name: string; age: number; },
  { age: string; other: string; }
>;

/**
 * DeepRequired实现
 */
type DeepRequired<T> = T extends (...args: any[]) => any
  ? T
  : T extends Array<any>
    ? _DeepRequiredArray<T[number]>
    : T extends object
      ? _DeepRequiredObject<T>
      : T;

// 辅助工具，递归遍历数组将每一项转换成必选
interface _DeepRequiredArray<T> extends Array<DeepRequired<NonUndefined<T>>> {}

// 辅助工具，递归遍历对象将每一项转换成必选
type _DeepRequiredObject<T extends object> = {
  [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>
}

/**
 * DeepReadonly实现
 */
type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends _DeepReadonlyArray<infer U>
  ? _DeepReadonlyArray<U>
  : T extends _DeepReadonlyObject<infer V>
  ? _DeepReadonlyObject<V>
  : T;

/**
 * 工具类型，构造一个只读数组
 */
interface _DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

/**
 * 工具类型，构造一个只读对象
 */
type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type UnionToIntersection<T> = (T extends any
    ? (arg: T) => void
    : never
  ) extends (arg: infer U) => void ? U : never
  type Eg = UnionToIntersection<{ key1: string } | { key2: number }>