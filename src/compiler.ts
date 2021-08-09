/**
 * @desc 构造一个将字符串转大写的类型
 * @example
 * type Eg1 = 'ABCD';
 */
type Eg1 = Uppercase<'abcd'>;

/**
 * @desc 构造一个将字符串转小大写的类型
 * @example
 * type Eg2 = 'abcd';
 */
type Eg2 = Lowercase<'ABCD'>;

/**
 * @desc 构造一个将字符串首字符转大写的类型
 * @example
 * type Eg3 = 'abcd';
 */
type Eg3 = Capitalize<'Abcd'>;

/**
 * @desc 构造一个将字符串首字符转小写的类型
 * @example
 * type Eg4 = 'ABCD';
 */
type Eg4 = Uncapitalize<'aBCD'>;