/**
 * This will result in a constant that can provide enum-like behaviour, yet still works with primitive types
 *
 * example definition:
 *
 * const STYLE: EnumType<StyleType> = {
 *   Success: 'success',
 *   Error: 'error'
 * } as const;
 *
 *
 * Which will allow for STYLE.Success to be autocompleted and easily accessible (like an enum)
 * and allows for flexible types so it doesn't complain like it does with enum:
 *
 * example usage:
 *
 * const test: StyleType = STYLE.Error;
 */
export type EnumType<Type> = {
  [Property in Extract<Type, string> as Capitalize<Property>]: Property;
};
