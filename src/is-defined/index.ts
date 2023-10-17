/**
 * Method to check if value is defined
 * @param value - string, number, array, object, undefined or null
 * @example isDefined("Frank") = true
 * @example isDefined(0) = true
 * @example isDefined([]) = true
 * @example isDefined(null) = false
 * @example isDefined(undefined) = false
 * @returns true if value is defined
 */
export const isDefined = <T>(value: T): value is NonNullable<T> =>
  value !== undefined && value !== null;
