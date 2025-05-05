
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SecurityDetails
 * 
 */
export type SecurityDetails = $Result.DefaultSelection<Prisma.$SecurityDetailsPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model MovieSeries
 * 
 */
export type MovieSeries = $Result.DefaultSelection<Prisma.$MovieSeriesPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model MovieLike
 * 
 */
export type MovieLike = $Result.DefaultSelection<Prisma.$MovieLikePayload>
/**
 * Model ReviewLike
 * 
 */
export type ReviewLike = $Result.DefaultSelection<Prisma.$ReviewLikePayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model PurchaseRentHistory
 * 
 */
export type PurchaseRentHistory = $Result.DefaultSelection<Prisma.$PurchaseRentHistoryPayload>
/**
 * Model PaymentTransaction
 * 
 */
export type PaymentTransaction = $Result.DefaultSelection<Prisma.$PaymentTransactionPayload>
/**
 * Model AdminAnalytics
 * 
 */
export type AdminAnalytics = $Result.DefaultSelection<Prisma.$AdminAnalyticsPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  s_admin: 's_admin',
  admin: 'admin',
  user: 'user'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  deactive: 'deactive',
  active: 'active',
  blocked: 'blocked',
  suspended: 'suspended',
  deleted: 'deleted'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const DeviceType: {
  mobile: 'mobile',
  desktop: 'desktop',
  tablet: 'tablet',
  other: 'other'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Genre: {
  action: 'action',
  comedy: 'comedy',
  drama: 'drama',
  horror: 'horror',
  thriller: 'thriller',
  romance: 'romance',
  documentary: 'documentary',
  sci_fi: 'sci_fi',
  fantasy: 'fantasy',
  mystery: 'mystery'
};

export type Genre = (typeof Genre)[keyof typeof Genre]


export const StreamingPlatform: {
  netflix: 'netflix',
  disney_plus: 'disney_plus',
  amazon_prime: 'amazon_prime',
  hulu: 'hulu',
  youtube: 'youtube',
  self_hosted: 'self_hosted'
};

export type StreamingPlatform = (typeof StreamingPlatform)[keyof typeof StreamingPlatform]


export const PriceType: {
  buy: 'buy',
  rent: 'rent'
};

export type PriceType = (typeof PriceType)[keyof typeof PriceType]


export const DiscountType: {
  percentage: 'percentage',
  fixed: 'fixed'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]


export const ReviewStatus: {
  pending: 'pending',
  approved: 'approved',
  unpublished: 'unpublished'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const PaymentStatus: {
  pending: 'pending',
  successful: 'successful',
  failed: 'failed',
  refunded: 'refunded',
  cancelled: 'cancelled'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Genre = $Enums.Genre

export const Genre: typeof $Enums.Genre

export type StreamingPlatform = $Enums.StreamingPlatform

export const StreamingPlatform: typeof $Enums.StreamingPlatform

export type PriceType = $Enums.PriceType

export const PriceType: typeof $Enums.PriceType

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityDetails`: Exposes CRUD operations for the **SecurityDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityDetails
    * const securityDetails = await prisma.securityDetails.findMany()
    * ```
    */
  get securityDetails(): Prisma.SecurityDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieSeries`: Exposes CRUD operations for the **MovieSeries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieSeries
    * const movieSeries = await prisma.movieSeries.findMany()
    * ```
    */
  get movieSeries(): Prisma.MovieSeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieLike`: Exposes CRUD operations for the **MovieLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieLikes
    * const movieLikes = await prisma.movieLike.findMany()
    * ```
    */
  get movieLike(): Prisma.MovieLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewLike`: Exposes CRUD operations for the **ReviewLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewLikes
    * const reviewLikes = await prisma.reviewLike.findMany()
    * ```
    */
  get reviewLike(): Prisma.ReviewLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseRentHistory`: Exposes CRUD operations for the **PurchaseRentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseRentHistories
    * const purchaseRentHistories = await prisma.purchaseRentHistory.findMany()
    * ```
    */
  get purchaseRentHistory(): Prisma.PurchaseRentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentTransaction`: Exposes CRUD operations for the **PaymentTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTransactions
    * const paymentTransactions = await prisma.paymentTransaction.findMany()
    * ```
    */
  get paymentTransaction(): Prisma.PaymentTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminAnalytics`: Exposes CRUD operations for the **AdminAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAnalytics
    * const adminAnalytics = await prisma.adminAnalytics.findMany()
    * ```
    */
  get adminAnalytics(): Prisma.AdminAnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SecurityDetails: 'SecurityDetails',
    Device: 'Device',
    MovieSeries: 'MovieSeries',
    Review: 'Review',
    Comment: 'Comment',
    MovieLike: 'MovieLike',
    ReviewLike: 'ReviewLike',
    Watchlist: 'Watchlist',
    PurchaseRentHistory: 'PurchaseRentHistory',
    PaymentTransaction: 'PaymentTransaction',
    AdminAnalytics: 'AdminAnalytics',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "securityDetails" | "device" | "movieSeries" | "review" | "comment" | "movieLike" | "reviewLike" | "watchlist" | "purchaseRentHistory" | "paymentTransaction" | "adminAnalytics" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SecurityDetails: {
        payload: Prisma.$SecurityDetailsPayload<ExtArgs>
        fields: Prisma.SecurityDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>
          }
          findFirst: {
            args: Prisma.SecurityDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>
          }
          findMany: {
            args: Prisma.SecurityDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>[]
          }
          create: {
            args: Prisma.SecurityDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>
          }
          createMany: {
            args: Prisma.SecurityDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>[]
          }
          delete: {
            args: Prisma.SecurityDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>
          }
          update: {
            args: Prisma.SecurityDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>
          }
          deleteMany: {
            args: Prisma.SecurityDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>[]
          }
          upsert: {
            args: Prisma.SecurityDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityDetailsPayload>
          }
          aggregate: {
            args: Prisma.SecurityDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityDetails>
          }
          groupBy: {
            args: Prisma.SecurityDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityDetailsCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      MovieSeries: {
        payload: Prisma.$MovieSeriesPayload<ExtArgs>
        fields: Prisma.MovieSeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieSeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieSeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>
          }
          findFirst: {
            args: Prisma.MovieSeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieSeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>
          }
          findMany: {
            args: Prisma.MovieSeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>[]
          }
          create: {
            args: Prisma.MovieSeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>
          }
          createMany: {
            args: Prisma.MovieSeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieSeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>[]
          }
          delete: {
            args: Prisma.MovieSeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>
          }
          update: {
            args: Prisma.MovieSeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>
          }
          deleteMany: {
            args: Prisma.MovieSeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieSeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieSeriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>[]
          }
          upsert: {
            args: Prisma.MovieSeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieSeriesPayload>
          }
          aggregate: {
            args: Prisma.MovieSeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieSeries>
          }
          groupBy: {
            args: Prisma.MovieSeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieSeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieSeriesCountArgs<ExtArgs>
            result: $Utils.Optional<MovieSeriesCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      MovieLike: {
        payload: Prisma.$MovieLikePayload<ExtArgs>
        fields: Prisma.MovieLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>
          }
          findFirst: {
            args: Prisma.MovieLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>
          }
          findMany: {
            args: Prisma.MovieLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>[]
          }
          create: {
            args: Prisma.MovieLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>
          }
          createMany: {
            args: Prisma.MovieLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>[]
          }
          delete: {
            args: Prisma.MovieLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>
          }
          update: {
            args: Prisma.MovieLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>
          }
          deleteMany: {
            args: Prisma.MovieLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>[]
          }
          upsert: {
            args: Prisma.MovieLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieLikePayload>
          }
          aggregate: {
            args: Prisma.MovieLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieLike>
          }
          groupBy: {
            args: Prisma.MovieLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieLikeCountArgs<ExtArgs>
            result: $Utils.Optional<MovieLikeCountAggregateOutputType> | number
          }
        }
      }
      ReviewLike: {
        payload: Prisma.$ReviewLikePayload<ExtArgs>
        fields: Prisma.ReviewLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          findFirst: {
            args: Prisma.ReviewLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          findMany: {
            args: Prisma.ReviewLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>[]
          }
          create: {
            args: Prisma.ReviewLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          createMany: {
            args: Prisma.ReviewLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>[]
          }
          delete: {
            args: Prisma.ReviewLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          update: {
            args: Prisma.ReviewLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          deleteMany: {
            args: Prisma.ReviewLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>[]
          }
          upsert: {
            args: Prisma.ReviewLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          aggregate: {
            args: Prisma.ReviewLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewLike>
          }
          groupBy: {
            args: Prisma.ReviewLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewLikeCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      PurchaseRentHistory: {
        payload: Prisma.$PurchaseRentHistoryPayload<ExtArgs>
        fields: Prisma.PurchaseRentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseRentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseRentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PurchaseRentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseRentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>
          }
          findMany: {
            args: Prisma.PurchaseRentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>[]
          }
          create: {
            args: Prisma.PurchaseRentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>
          }
          createMany: {
            args: Prisma.PurchaseRentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseRentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>[]
          }
          delete: {
            args: Prisma.PurchaseRentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>
          }
          update: {
            args: Prisma.PurchaseRentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseRentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseRentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseRentHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseRentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PurchaseRentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseRentHistory>
          }
          groupBy: {
            args: Prisma.PurchaseRentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseRentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseRentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseRentHistoryCountAggregateOutputType> | number
          }
        }
      }
      PaymentTransaction: {
        payload: Prisma.$PaymentTransactionPayload<ExtArgs>
        fields: Prisma.PaymentTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findFirst: {
            args: Prisma.PaymentTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findMany: {
            args: Prisma.PaymentTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          create: {
            args: Prisma.PaymentTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          createMany: {
            args: Prisma.PaymentTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          delete: {
            args: Prisma.PaymentTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          update: {
            args: Prisma.PaymentTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          aggregate: {
            args: Prisma.PaymentTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTransaction>
          }
          groupBy: {
            args: Prisma.PaymentTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionCountAggregateOutputType> | number
          }
        }
      }
      AdminAnalytics: {
        payload: Prisma.$AdminAnalyticsPayload<ExtArgs>
        fields: Prisma.AdminAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AdminAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>
          }
          findMany: {
            args: Prisma.AdminAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>[]
          }
          create: {
            args: Prisma.AdminAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>
          }
          createMany: {
            args: Prisma.AdminAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AdminAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>
          }
          update: {
            args: Prisma.AdminAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AdminAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AdminAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AdminAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAnalytics>
          }
          groupBy: {
            args: Prisma.AdminAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAnalyticsCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    securityDetails?: SecurityDetailsOmit
    device?: DeviceOmit
    movieSeries?: MovieSeriesOmit
    review?: ReviewOmit
    comment?: CommentOmit
    movieLike?: MovieLikeOmit
    reviewLike?: ReviewLikeOmit
    watchlist?: WatchlistOmit
    purchaseRentHistory?: PurchaseRentHistoryOmit
    paymentTransaction?: PaymentTransactionOmit
    adminAnalytics?: AdminAnalyticsOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    review: number
    comment: number
    watchlist: number
    purchaseRentHistory: number
    paymentTransaction: number
    notification: number
    movieLike: number
    reviewLike: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | UserCountOutputTypeCountReviewArgs
    comment?: boolean | UserCountOutputTypeCountCommentArgs
    watchlist?: boolean | UserCountOutputTypeCountWatchlistArgs
    purchaseRentHistory?: boolean | UserCountOutputTypeCountPurchaseRentHistoryArgs
    paymentTransaction?: boolean | UserCountOutputTypeCountPaymentTransactionArgs
    notification?: boolean | UserCountOutputTypeCountNotificationArgs
    movieLike?: boolean | UserCountOutputTypeCountMovieLikeArgs
    reviewLike?: boolean | UserCountOutputTypeCountReviewLikeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseRentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseRentHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovieLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
  }


  /**
   * Count Type SecurityDetailsCountOutputType
   */

  export type SecurityDetailsCountOutputType = {
    device: number
  }

  export type SecurityDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | SecurityDetailsCountOutputTypeCountDeviceArgs
  }

  // Custom InputTypes
  /**
   * SecurityDetailsCountOutputType without action
   */
  export type SecurityDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetailsCountOutputType
     */
    select?: SecurityDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecurityDetailsCountOutputType without action
   */
  export type SecurityDetailsCountOutputTypeCountDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type MovieSeriesCountOutputType
   */

  export type MovieSeriesCountOutputType = {
    reviews: number
    watchlist: number
    purchaseRentHistory: number
    movieLike: number
  }

  export type MovieSeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MovieSeriesCountOutputTypeCountReviewsArgs
    watchlist?: boolean | MovieSeriesCountOutputTypeCountWatchlistArgs
    purchaseRentHistory?: boolean | MovieSeriesCountOutputTypeCountPurchaseRentHistoryArgs
    movieLike?: boolean | MovieSeriesCountOutputTypeCountMovieLikeArgs
  }

  // Custom InputTypes
  /**
   * MovieSeriesCountOutputType without action
   */
  export type MovieSeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeriesCountOutputType
     */
    select?: MovieSeriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieSeriesCountOutputType without action
   */
  export type MovieSeriesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * MovieSeriesCountOutputType without action
   */
  export type MovieSeriesCountOutputTypeCountWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }

  /**
   * MovieSeriesCountOutputType without action
   */
  export type MovieSeriesCountOutputTypeCountPurchaseRentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseRentHistoryWhereInput
  }

  /**
   * MovieSeriesCountOutputType without action
   */
  export type MovieSeriesCountOutputTypeCountMovieLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieLikeWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    comment: number
    reviewLike: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | ReviewCountOutputTypeCountCommentArgs
    reviewLike?: boolean | ReviewCountOutputTypeCountReviewLikeArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReviewLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    profilePhoto: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    profilePhoto: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    profilePhoto: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePhoto?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePhoto?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePhoto?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    profilePhoto: string | null
    password: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    securityDetails?: boolean | User$securityDetailsArgs<ExtArgs>
    review?: boolean | User$reviewArgs<ExtArgs>
    comment?: boolean | User$commentArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    purchaseRentHistory?: boolean | User$purchaseRentHistoryArgs<ExtArgs>
    paymentTransaction?: boolean | User$paymentTransactionArgs<ExtArgs>
    notification?: boolean | User$notificationArgs<ExtArgs>
    movieLike?: boolean | User$movieLikeArgs<ExtArgs>
    reviewLike?: boolean | User$reviewLikeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    profilePhoto?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "profilePhoto" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityDetails?: boolean | User$securityDetailsArgs<ExtArgs>
    review?: boolean | User$reviewArgs<ExtArgs>
    comment?: boolean | User$commentArgs<ExtArgs>
    watchlist?: boolean | User$watchlistArgs<ExtArgs>
    purchaseRentHistory?: boolean | User$purchaseRentHistoryArgs<ExtArgs>
    paymentTransaction?: boolean | User$paymentTransactionArgs<ExtArgs>
    notification?: boolean | User$notificationArgs<ExtArgs>
    movieLike?: boolean | User$movieLikeArgs<ExtArgs>
    reviewLike?: boolean | User$reviewLikeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      securityDetails: Prisma.$SecurityDetailsPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs>[]
      comment: Prisma.$CommentPayload<ExtArgs>[]
      watchlist: Prisma.$WatchlistPayload<ExtArgs>[]
      purchaseRentHistory: Prisma.$PurchaseRentHistoryPayload<ExtArgs>[]
      paymentTransaction: Prisma.$PaymentTransactionPayload<ExtArgs>[]
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      movieLike: Prisma.$MovieLikePayload<ExtArgs>[]
      reviewLike: Prisma.$ReviewLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      profilePhoto: string | null
      password: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    securityDetails<T extends User$securityDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$securityDetailsArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends User$reviewArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comment<T extends User$commentArgs<ExtArgs> = {}>(args?: Subset<T, User$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlist<T extends User$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseRentHistory<T extends User$purchaseRentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$purchaseRentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentTransaction<T extends User$paymentTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends User$notificationArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movieLike<T extends User$movieLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$movieLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewLike<T extends User$reviewLikeArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profilePhoto: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.securityDetails
   */
  export type User$securityDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    where?: SecurityDetailsWhereInput
  }

  /**
   * User.review
   */
  export type User$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.comment
   */
  export type User$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.watchlist
   */
  export type User$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User.purchaseRentHistory
   */
  export type User$purchaseRentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    where?: PurchaseRentHistoryWhereInput
    orderBy?: PurchaseRentHistoryOrderByWithRelationInput | PurchaseRentHistoryOrderByWithRelationInput[]
    cursor?: PurchaseRentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseRentHistoryScalarFieldEnum | PurchaseRentHistoryScalarFieldEnum[]
  }

  /**
   * User.paymentTransaction
   */
  export type User$paymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    cursor?: PaymentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * User.notification
   */
  export type User$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.movieLike
   */
  export type User$movieLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    where?: MovieLikeWhereInput
    orderBy?: MovieLikeOrderByWithRelationInput | MovieLikeOrderByWithRelationInput[]
    cursor?: MovieLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieLikeScalarFieldEnum | MovieLikeScalarFieldEnum[]
  }

  /**
   * User.reviewLike
   */
  export type User$reviewLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    cursor?: ReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SecurityDetails
   */

  export type AggregateSecurityDetails = {
    _count: SecurityDetailsCountAggregateOutputType | null
    _avg: SecurityDetailsAvgAggregateOutputType | null
    _sum: SecurityDetailsSumAggregateOutputType | null
    _min: SecurityDetailsMinAggregateOutputType | null
    _max: SecurityDetailsMaxAggregateOutputType | null
  }

  export type SecurityDetailsAvgAggregateOutputType = {
    emailVerifyAttemptNo: number | null
    failedResetPassAttemptNo: number | null
    failedOTPAttemptNo: number | null
    failedLoginAttemptNo: number | null
  }

  export type SecurityDetailsSumAggregateOutputType = {
    emailVerifyAttemptNo: number | null
    failedResetPassAttemptNo: number | null
    failedOTPAttemptNo: number | null
    failedLoginAttemptNo: number | null
  }

  export type SecurityDetailsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isEmailVerified: boolean | null
    otpToken: string | null
    emailVerifyAttemptNo: number | null
    failedResetPassAttemptNo: number | null
    failedOTPAttemptNo: number | null
    lastAttemptTime: Date | null
    failedLoginAttemptNo: number | null
    lastLoginTime: Date | null
    suspendUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecurityDetailsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isEmailVerified: boolean | null
    otpToken: string | null
    emailVerifyAttemptNo: number | null
    failedResetPassAttemptNo: number | null
    failedOTPAttemptNo: number | null
    lastAttemptTime: Date | null
    failedLoginAttemptNo: number | null
    lastLoginTime: Date | null
    suspendUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecurityDetailsCountAggregateOutputType = {
    id: number
    userId: number
    isEmailVerified: number
    otpToken: number
    emailVerifyAttemptNo: number
    failedResetPassAttemptNo: number
    failedOTPAttemptNo: number
    lastAttemptTime: number
    failedLoginAttemptNo: number
    lastLoginTime: number
    suspendUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SecurityDetailsAvgAggregateInputType = {
    emailVerifyAttemptNo?: true
    failedResetPassAttemptNo?: true
    failedOTPAttemptNo?: true
    failedLoginAttemptNo?: true
  }

  export type SecurityDetailsSumAggregateInputType = {
    emailVerifyAttemptNo?: true
    failedResetPassAttemptNo?: true
    failedOTPAttemptNo?: true
    failedLoginAttemptNo?: true
  }

  export type SecurityDetailsMinAggregateInputType = {
    id?: true
    userId?: true
    isEmailVerified?: true
    otpToken?: true
    emailVerifyAttemptNo?: true
    failedResetPassAttemptNo?: true
    failedOTPAttemptNo?: true
    lastAttemptTime?: true
    failedLoginAttemptNo?: true
    lastLoginTime?: true
    suspendUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecurityDetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    isEmailVerified?: true
    otpToken?: true
    emailVerifyAttemptNo?: true
    failedResetPassAttemptNo?: true
    failedOTPAttemptNo?: true
    lastAttemptTime?: true
    failedLoginAttemptNo?: true
    lastLoginTime?: true
    suspendUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecurityDetailsCountAggregateInputType = {
    id?: true
    userId?: true
    isEmailVerified?: true
    otpToken?: true
    emailVerifyAttemptNo?: true
    failedResetPassAttemptNo?: true
    failedOTPAttemptNo?: true
    lastAttemptTime?: true
    failedLoginAttemptNo?: true
    lastLoginTime?: true
    suspendUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SecurityDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityDetails to aggregate.
     */
    where?: SecurityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityDetails to fetch.
     */
    orderBy?: SecurityDetailsOrderByWithRelationInput | SecurityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityDetails
    **/
    _count?: true | SecurityDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityDetailsMaxAggregateInputType
  }

  export type GetSecurityDetailsAggregateType<T extends SecurityDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityDetails[P]>
      : GetScalarType<T[P], AggregateSecurityDetails[P]>
  }




  export type SecurityDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityDetailsWhereInput
    orderBy?: SecurityDetailsOrderByWithAggregationInput | SecurityDetailsOrderByWithAggregationInput[]
    by: SecurityDetailsScalarFieldEnum[] | SecurityDetailsScalarFieldEnum
    having?: SecurityDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityDetailsCountAggregateInputType | true
    _avg?: SecurityDetailsAvgAggregateInputType
    _sum?: SecurityDetailsSumAggregateInputType
    _min?: SecurityDetailsMinAggregateInputType
    _max?: SecurityDetailsMaxAggregateInputType
  }

  export type SecurityDetailsGroupByOutputType = {
    id: string
    userId: string
    isEmailVerified: boolean
    otpToken: string | null
    emailVerifyAttemptNo: number
    failedResetPassAttemptNo: number
    failedOTPAttemptNo: number
    lastAttemptTime: Date
    failedLoginAttemptNo: number
    lastLoginTime: Date
    suspendUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SecurityDetailsCountAggregateOutputType | null
    _avg: SecurityDetailsAvgAggregateOutputType | null
    _sum: SecurityDetailsSumAggregateOutputType | null
    _min: SecurityDetailsMinAggregateOutputType | null
    _max: SecurityDetailsMaxAggregateOutputType | null
  }

  type GetSecurityDetailsGroupByPayload<T extends SecurityDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityDetailsGroupByOutputType[P]>
        }
      >
    >


  export type SecurityDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isEmailVerified?: boolean
    otpToken?: boolean
    emailVerifyAttemptNo?: boolean
    failedResetPassAttemptNo?: boolean
    failedOTPAttemptNo?: boolean
    lastAttemptTime?: boolean
    failedLoginAttemptNo?: boolean
    lastLoginTime?: boolean
    suspendUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | SecurityDetails$deviceArgs<ExtArgs>
    _count?: boolean | SecurityDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityDetails"]>

  export type SecurityDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isEmailVerified?: boolean
    otpToken?: boolean
    emailVerifyAttemptNo?: boolean
    failedResetPassAttemptNo?: boolean
    failedOTPAttemptNo?: boolean
    lastAttemptTime?: boolean
    failedLoginAttemptNo?: boolean
    lastLoginTime?: boolean
    suspendUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityDetails"]>

  export type SecurityDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isEmailVerified?: boolean
    otpToken?: boolean
    emailVerifyAttemptNo?: boolean
    failedResetPassAttemptNo?: boolean
    failedOTPAttemptNo?: boolean
    lastAttemptTime?: boolean
    failedLoginAttemptNo?: boolean
    lastLoginTime?: boolean
    suspendUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityDetails"]>

  export type SecurityDetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    isEmailVerified?: boolean
    otpToken?: boolean
    emailVerifyAttemptNo?: boolean
    failedResetPassAttemptNo?: boolean
    failedOTPAttemptNo?: boolean
    lastAttemptTime?: boolean
    failedLoginAttemptNo?: boolean
    lastLoginTime?: boolean
    suspendUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SecurityDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isEmailVerified" | "otpToken" | "emailVerifyAttemptNo" | "failedResetPassAttemptNo" | "failedOTPAttemptNo" | "lastAttemptTime" | "failedLoginAttemptNo" | "lastLoginTime" | "suspendUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["securityDetails"]>
  export type SecurityDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | SecurityDetails$deviceArgs<ExtArgs>
    _count?: boolean | SecurityDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecurityDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SecurityDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SecurityDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isEmailVerified: boolean
      otpToken: string | null
      emailVerifyAttemptNo: number
      failedResetPassAttemptNo: number
      failedOTPAttemptNo: number
      lastAttemptTime: Date
      failedLoginAttemptNo: number
      lastLoginTime: Date
      suspendUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["securityDetails"]>
    composites: {}
  }

  type SecurityDetailsGetPayload<S extends boolean | null | undefined | SecurityDetailsDefaultArgs> = $Result.GetResult<Prisma.$SecurityDetailsPayload, S>

  type SecurityDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityDetailsCountAggregateInputType | true
    }

  export interface SecurityDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityDetails'], meta: { name: 'SecurityDetails' } }
    /**
     * Find zero or one SecurityDetails that matches the filter.
     * @param {SecurityDetailsFindUniqueArgs} args - Arguments to find a SecurityDetails
     * @example
     * // Get one SecurityDetails
     * const securityDetails = await prisma.securityDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityDetailsFindUniqueArgs>(args: SelectSubset<T, SecurityDetailsFindUniqueArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityDetailsFindUniqueOrThrowArgs} args - Arguments to find a SecurityDetails
     * @example
     * // Get one SecurityDetails
     * const securityDetails = await prisma.securityDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsFindFirstArgs} args - Arguments to find a SecurityDetails
     * @example
     * // Get one SecurityDetails
     * const securityDetails = await prisma.securityDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityDetailsFindFirstArgs>(args?: SelectSubset<T, SecurityDetailsFindFirstArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsFindFirstOrThrowArgs} args - Arguments to find a SecurityDetails
     * @example
     * // Get one SecurityDetails
     * const securityDetails = await prisma.securityDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityDetails
     * const securityDetails = await prisma.securityDetails.findMany()
     * 
     * // Get first 10 SecurityDetails
     * const securityDetails = await prisma.securityDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityDetailsWithIdOnly = await prisma.securityDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityDetailsFindManyArgs>(args?: SelectSubset<T, SecurityDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityDetails.
     * @param {SecurityDetailsCreateArgs} args - Arguments to create a SecurityDetails.
     * @example
     * // Create one SecurityDetails
     * const SecurityDetails = await prisma.securityDetails.create({
     *   data: {
     *     // ... data to create a SecurityDetails
     *   }
     * })
     * 
     */
    create<T extends SecurityDetailsCreateArgs>(args: SelectSubset<T, SecurityDetailsCreateArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityDetails.
     * @param {SecurityDetailsCreateManyArgs} args - Arguments to create many SecurityDetails.
     * @example
     * // Create many SecurityDetails
     * const securityDetails = await prisma.securityDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityDetailsCreateManyArgs>(args?: SelectSubset<T, SecurityDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityDetails and returns the data saved in the database.
     * @param {SecurityDetailsCreateManyAndReturnArgs} args - Arguments to create many SecurityDetails.
     * @example
     * // Create many SecurityDetails
     * const securityDetails = await prisma.securityDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityDetails and only return the `id`
     * const securityDetailsWithIdOnly = await prisma.securityDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityDetails.
     * @param {SecurityDetailsDeleteArgs} args - Arguments to delete one SecurityDetails.
     * @example
     * // Delete one SecurityDetails
     * const SecurityDetails = await prisma.securityDetails.delete({
     *   where: {
     *     // ... filter to delete one SecurityDetails
     *   }
     * })
     * 
     */
    delete<T extends SecurityDetailsDeleteArgs>(args: SelectSubset<T, SecurityDetailsDeleteArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityDetails.
     * @param {SecurityDetailsUpdateArgs} args - Arguments to update one SecurityDetails.
     * @example
     * // Update one SecurityDetails
     * const securityDetails = await prisma.securityDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityDetailsUpdateArgs>(args: SelectSubset<T, SecurityDetailsUpdateArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityDetails.
     * @param {SecurityDetailsDeleteManyArgs} args - Arguments to filter SecurityDetails to delete.
     * @example
     * // Delete a few SecurityDetails
     * const { count } = await prisma.securityDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityDetailsDeleteManyArgs>(args?: SelectSubset<T, SecurityDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityDetails
     * const securityDetails = await prisma.securityDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityDetailsUpdateManyArgs>(args: SelectSubset<T, SecurityDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityDetails and returns the data updated in the database.
     * @param {SecurityDetailsUpdateManyAndReturnArgs} args - Arguments to update many SecurityDetails.
     * @example
     * // Update many SecurityDetails
     * const securityDetails = await prisma.securityDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityDetails and only return the `id`
     * const securityDetailsWithIdOnly = await prisma.securityDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityDetails.
     * @param {SecurityDetailsUpsertArgs} args - Arguments to update or create a SecurityDetails.
     * @example
     * // Update or create a SecurityDetails
     * const securityDetails = await prisma.securityDetails.upsert({
     *   create: {
     *     // ... data to create a SecurityDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityDetails we want to update
     *   }
     * })
     */
    upsert<T extends SecurityDetailsUpsertArgs>(args: SelectSubset<T, SecurityDetailsUpsertArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsCountArgs} args - Arguments to filter SecurityDetails to count.
     * @example
     * // Count the number of SecurityDetails
     * const count = await prisma.securityDetails.count({
     *   where: {
     *     // ... the filter for the SecurityDetails we want to count
     *   }
     * })
    **/
    count<T extends SecurityDetailsCountArgs>(
      args?: Subset<T, SecurityDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityDetailsAggregateArgs>(args: Subset<T, SecurityDetailsAggregateArgs>): Prisma.PrismaPromise<GetSecurityDetailsAggregateType<T>>

    /**
     * Group by SecurityDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityDetailsGroupByArgs['orderBy'] }
        : { orderBy?: SecurityDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityDetails model
   */
  readonly fields: SecurityDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends SecurityDetails$deviceArgs<ExtArgs> = {}>(args?: Subset<T, SecurityDetails$deviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityDetails model
   */
  interface SecurityDetailsFieldRefs {
    readonly id: FieldRef<"SecurityDetails", 'String'>
    readonly userId: FieldRef<"SecurityDetails", 'String'>
    readonly isEmailVerified: FieldRef<"SecurityDetails", 'Boolean'>
    readonly otpToken: FieldRef<"SecurityDetails", 'String'>
    readonly emailVerifyAttemptNo: FieldRef<"SecurityDetails", 'Int'>
    readonly failedResetPassAttemptNo: FieldRef<"SecurityDetails", 'Int'>
    readonly failedOTPAttemptNo: FieldRef<"SecurityDetails", 'Int'>
    readonly lastAttemptTime: FieldRef<"SecurityDetails", 'DateTime'>
    readonly failedLoginAttemptNo: FieldRef<"SecurityDetails", 'Int'>
    readonly lastLoginTime: FieldRef<"SecurityDetails", 'DateTime'>
    readonly suspendUntil: FieldRef<"SecurityDetails", 'DateTime'>
    readonly createdAt: FieldRef<"SecurityDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"SecurityDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityDetails findUnique
   */
  export type SecurityDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SecurityDetails to fetch.
     */
    where: SecurityDetailsWhereUniqueInput
  }

  /**
   * SecurityDetails findUniqueOrThrow
   */
  export type SecurityDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SecurityDetails to fetch.
     */
    where: SecurityDetailsWhereUniqueInput
  }

  /**
   * SecurityDetails findFirst
   */
  export type SecurityDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SecurityDetails to fetch.
     */
    where?: SecurityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityDetails to fetch.
     */
    orderBy?: SecurityDetailsOrderByWithRelationInput | SecurityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityDetails.
     */
    cursor?: SecurityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityDetails.
     */
    distinct?: SecurityDetailsScalarFieldEnum | SecurityDetailsScalarFieldEnum[]
  }

  /**
   * SecurityDetails findFirstOrThrow
   */
  export type SecurityDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SecurityDetails to fetch.
     */
    where?: SecurityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityDetails to fetch.
     */
    orderBy?: SecurityDetailsOrderByWithRelationInput | SecurityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityDetails.
     */
    cursor?: SecurityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityDetails.
     */
    distinct?: SecurityDetailsScalarFieldEnum | SecurityDetailsScalarFieldEnum[]
  }

  /**
   * SecurityDetails findMany
   */
  export type SecurityDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SecurityDetails to fetch.
     */
    where?: SecurityDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityDetails to fetch.
     */
    orderBy?: SecurityDetailsOrderByWithRelationInput | SecurityDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityDetails.
     */
    cursor?: SecurityDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityDetails.
     */
    skip?: number
    distinct?: SecurityDetailsScalarFieldEnum | SecurityDetailsScalarFieldEnum[]
  }

  /**
   * SecurityDetails create
   */
  export type SecurityDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityDetails.
     */
    data: XOR<SecurityDetailsCreateInput, SecurityDetailsUncheckedCreateInput>
  }

  /**
   * SecurityDetails createMany
   */
  export type SecurityDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityDetails.
     */
    data: SecurityDetailsCreateManyInput | SecurityDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityDetails createManyAndReturn
   */
  export type SecurityDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityDetails.
     */
    data: SecurityDetailsCreateManyInput | SecurityDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityDetails update
   */
  export type SecurityDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityDetails.
     */
    data: XOR<SecurityDetailsUpdateInput, SecurityDetailsUncheckedUpdateInput>
    /**
     * Choose, which SecurityDetails to update.
     */
    where: SecurityDetailsWhereUniqueInput
  }

  /**
   * SecurityDetails updateMany
   */
  export type SecurityDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityDetails.
     */
    data: XOR<SecurityDetailsUpdateManyMutationInput, SecurityDetailsUncheckedUpdateManyInput>
    /**
     * Filter which SecurityDetails to update
     */
    where?: SecurityDetailsWhereInput
    /**
     * Limit how many SecurityDetails to update.
     */
    limit?: number
  }

  /**
   * SecurityDetails updateManyAndReturn
   */
  export type SecurityDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * The data used to update SecurityDetails.
     */
    data: XOR<SecurityDetailsUpdateManyMutationInput, SecurityDetailsUncheckedUpdateManyInput>
    /**
     * Filter which SecurityDetails to update
     */
    where?: SecurityDetailsWhereInput
    /**
     * Limit how many SecurityDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityDetails upsert
   */
  export type SecurityDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityDetails to update in case it exists.
     */
    where: SecurityDetailsWhereUniqueInput
    /**
     * In case the SecurityDetails found by the `where` argument doesn't exist, create a new SecurityDetails with this data.
     */
    create: XOR<SecurityDetailsCreateInput, SecurityDetailsUncheckedCreateInput>
    /**
     * In case the SecurityDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityDetailsUpdateInput, SecurityDetailsUncheckedUpdateInput>
  }

  /**
   * SecurityDetails delete
   */
  export type SecurityDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
    /**
     * Filter which SecurityDetails to delete.
     */
    where: SecurityDetailsWhereUniqueInput
  }

  /**
   * SecurityDetails deleteMany
   */
  export type SecurityDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityDetails to delete
     */
    where?: SecurityDetailsWhereInput
    /**
     * Limit how many SecurityDetails to delete.
     */
    limit?: number
  }

  /**
   * SecurityDetails.device
   */
  export type SecurityDetails$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * SecurityDetails without action
   */
  export type SecurityDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityDetails
     */
    select?: SecurityDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityDetails
     */
    omit?: SecurityDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    machineId: string | null
    securityDetailsId: string | null
    type: $Enums.DeviceType | null
    browser: string | null
    name: string | null
    os: string | null
    ip: string | null
    userAgent: string | null
    location: string | null
    isActive: boolean | null
    isPreferred: boolean | null
    isInfected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    machineId: string | null
    securityDetailsId: string | null
    type: $Enums.DeviceType | null
    browser: string | null
    name: string | null
    os: string | null
    ip: string | null
    userAgent: string | null
    location: string | null
    isActive: boolean | null
    isPreferred: boolean | null
    isInfected: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    machineId: number
    securityDetailsId: number
    type: number
    browser: number
    name: number
    os: number
    ip: number
    userAgent: number
    location: number
    isActive: number
    isPreferred: number
    isInfected: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    machineId?: true
    securityDetailsId?: true
    type?: true
    browser?: true
    name?: true
    os?: true
    ip?: true
    userAgent?: true
    location?: true
    isActive?: true
    isPreferred?: true
    isInfected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    machineId?: true
    securityDetailsId?: true
    type?: true
    browser?: true
    name?: true
    os?: true
    ip?: true
    userAgent?: true
    location?: true
    isActive?: true
    isPreferred?: true
    isInfected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    machineId?: true
    securityDetailsId?: true
    type?: true
    browser?: true
    name?: true
    os?: true
    ip?: true
    userAgent?: true
    location?: true
    isActive?: true
    isPreferred?: true
    isInfected?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    machineId: string
    securityDetailsId: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineId?: boolean
    securityDetailsId?: boolean
    type?: boolean
    browser?: boolean
    name?: boolean
    os?: boolean
    ip?: boolean
    userAgent?: boolean
    location?: boolean
    isActive?: boolean
    isPreferred?: boolean
    isInfected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    securityDetails?: boolean | SecurityDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineId?: boolean
    securityDetailsId?: boolean
    type?: boolean
    browser?: boolean
    name?: boolean
    os?: boolean
    ip?: boolean
    userAgent?: boolean
    location?: boolean
    isActive?: boolean
    isPreferred?: boolean
    isInfected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    securityDetails?: boolean | SecurityDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineId?: boolean
    securityDetailsId?: boolean
    type?: boolean
    browser?: boolean
    name?: boolean
    os?: boolean
    ip?: boolean
    userAgent?: boolean
    location?: boolean
    isActive?: boolean
    isPreferred?: boolean
    isInfected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    securityDetails?: boolean | SecurityDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    machineId?: boolean
    securityDetailsId?: boolean
    type?: boolean
    browser?: boolean
    name?: boolean
    os?: boolean
    ip?: boolean
    userAgent?: boolean
    location?: boolean
    isActive?: boolean
    isPreferred?: boolean
    isInfected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "machineId" | "securityDetailsId" | "type" | "browser" | "name" | "os" | "ip" | "userAgent" | "location" | "isActive" | "isPreferred" | "isInfected" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityDetails?: boolean | SecurityDetailsDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityDetails?: boolean | SecurityDetailsDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    securityDetails?: boolean | SecurityDetailsDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      securityDetails: Prisma.$SecurityDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      machineId: string
      securityDetailsId: string
      type: $Enums.DeviceType
      browser: string
      name: string
      os: string
      ip: string | null
      userAgent: string
      location: string
      isActive: boolean
      isPreferred: boolean
      isInfected: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    securityDetails<T extends SecurityDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecurityDetailsDefaultArgs<ExtArgs>>): Prisma__SecurityDetailsClient<$Result.GetResult<Prisma.$SecurityDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly machineId: FieldRef<"Device", 'String'>
    readonly securityDetailsId: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'DeviceType'>
    readonly browser: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly os: FieldRef<"Device", 'String'>
    readonly ip: FieldRef<"Device", 'String'>
    readonly userAgent: FieldRef<"Device", 'String'>
    readonly location: FieldRef<"Device", 'String'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly isPreferred: FieldRef<"Device", 'Boolean'>
    readonly isInfected: FieldRef<"Device", 'Boolean'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model MovieSeries
   */

  export type AggregateMovieSeries = {
    _count: MovieSeriesCountAggregateOutputType | null
    _avg: MovieSeriesAvgAggregateOutputType | null
    _sum: MovieSeriesSumAggregateOutputType | null
    _min: MovieSeriesMinAggregateOutputType | null
    _max: MovieSeriesMaxAggregateOutputType | null
  }

  export type MovieSeriesAvgAggregateOutputType = {
    releaseYear: number | null
    rating: number | null
    viewCount: number | null
    price: number | null
    discount: number | null
  }

  export type MovieSeriesSumAggregateOutputType = {
    releaseYear: number | null
    rating: number | null
    viewCount: number | null
    price: number | null
    discount: number | null
  }

  export type MovieSeriesMinAggregateOutputType = {
    id: string | null
    title: string | null
    posterUrl: string | null
    description: string | null
    releaseYear: number | null
    rating: number | null
    viewCount: number | null
    markByAdmin: boolean | null
    price: number | null
    priceType: $Enums.PriceType | null
    discount: number | null
    discountType: $Enums.DiscountType | null
    discountExpiry: Date | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieSeriesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    posterUrl: string | null
    description: string | null
    releaseYear: number | null
    rating: number | null
    viewCount: number | null
    markByAdmin: boolean | null
    price: number | null
    priceType: $Enums.PriceType | null
    discount: number | null
    discountType: $Enums.DiscountType | null
    discountExpiry: Date | null
    isActive: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieSeriesCountAggregateOutputType = {
    id: number
    title: number
    posterUrl: number
    description: number
    releaseYear: number
    genre: number
    director: number
    cast: number
    streamingPlatform: number
    accessLink: number
    rating: number
    viewCount: number
    markByAdmin: number
    price: number
    priceType: number
    discount: number
    discountType: number
    discountExpiry: number
    isActive: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieSeriesAvgAggregateInputType = {
    releaseYear?: true
    rating?: true
    viewCount?: true
    price?: true
    discount?: true
  }

  export type MovieSeriesSumAggregateInputType = {
    releaseYear?: true
    rating?: true
    viewCount?: true
    price?: true
    discount?: true
  }

  export type MovieSeriesMinAggregateInputType = {
    id?: true
    title?: true
    posterUrl?: true
    description?: true
    releaseYear?: true
    rating?: true
    viewCount?: true
    markByAdmin?: true
    price?: true
    priceType?: true
    discount?: true
    discountType?: true
    discountExpiry?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieSeriesMaxAggregateInputType = {
    id?: true
    title?: true
    posterUrl?: true
    description?: true
    releaseYear?: true
    rating?: true
    viewCount?: true
    markByAdmin?: true
    price?: true
    priceType?: true
    discount?: true
    discountType?: true
    discountExpiry?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieSeriesCountAggregateInputType = {
    id?: true
    title?: true
    posterUrl?: true
    description?: true
    releaseYear?: true
    genre?: true
    director?: true
    cast?: true
    streamingPlatform?: true
    accessLink?: true
    rating?: true
    viewCount?: true
    markByAdmin?: true
    price?: true
    priceType?: true
    discount?: true
    discountType?: true
    discountExpiry?: true
    isActive?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieSeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieSeries to aggregate.
     */
    where?: MovieSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieSeries to fetch.
     */
    orderBy?: MovieSeriesOrderByWithRelationInput | MovieSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieSeries
    **/
    _count?: true | MovieSeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieSeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieSeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieSeriesMaxAggregateInputType
  }

  export type GetMovieSeriesAggregateType<T extends MovieSeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieSeries[P]>
      : GetScalarType<T[P], AggregateMovieSeries[P]>
  }




  export type MovieSeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieSeriesWhereInput
    orderBy?: MovieSeriesOrderByWithAggregationInput | MovieSeriesOrderByWithAggregationInput[]
    by: MovieSeriesScalarFieldEnum[] | MovieSeriesScalarFieldEnum
    having?: MovieSeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieSeriesCountAggregateInputType | true
    _avg?: MovieSeriesAvgAggregateInputType
    _sum?: MovieSeriesSumAggregateInputType
    _min?: MovieSeriesMinAggregateInputType
    _max?: MovieSeriesMaxAggregateInputType
  }

  export type MovieSeriesGroupByOutputType = {
    id: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre: $Enums.Genre[]
    director: string[]
    cast: string[]
    streamingPlatform: $Enums.StreamingPlatform[]
    accessLink: string[]
    rating: number
    viewCount: number
    markByAdmin: boolean
    price: number
    priceType: $Enums.PriceType
    discount: number | null
    discountType: $Enums.DiscountType | null
    discountExpiry: Date | null
    isActive: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: MovieSeriesCountAggregateOutputType | null
    _avg: MovieSeriesAvgAggregateOutputType | null
    _sum: MovieSeriesSumAggregateOutputType | null
    _min: MovieSeriesMinAggregateOutputType | null
    _max: MovieSeriesMaxAggregateOutputType | null
  }

  type GetMovieSeriesGroupByPayload<T extends MovieSeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieSeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieSeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieSeriesGroupByOutputType[P]>
            : GetScalarType<T[P], MovieSeriesGroupByOutputType[P]>
        }
      >
    >


  export type MovieSeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    posterUrl?: boolean
    description?: boolean
    releaseYear?: boolean
    genre?: boolean
    director?: boolean
    cast?: boolean
    streamingPlatform?: boolean
    accessLink?: boolean
    rating?: boolean
    viewCount?: boolean
    markByAdmin?: boolean
    price?: boolean
    priceType?: boolean
    discount?: boolean
    discountType?: boolean
    discountExpiry?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | MovieSeries$reviewsArgs<ExtArgs>
    watchlist?: boolean | MovieSeries$watchlistArgs<ExtArgs>
    purchaseRentHistory?: boolean | MovieSeries$purchaseRentHistoryArgs<ExtArgs>
    movieLike?: boolean | MovieSeries$movieLikeArgs<ExtArgs>
    _count?: boolean | MovieSeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieSeries"]>

  export type MovieSeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    posterUrl?: boolean
    description?: boolean
    releaseYear?: boolean
    genre?: boolean
    director?: boolean
    cast?: boolean
    streamingPlatform?: boolean
    accessLink?: boolean
    rating?: boolean
    viewCount?: boolean
    markByAdmin?: boolean
    price?: boolean
    priceType?: boolean
    discount?: boolean
    discountType?: boolean
    discountExpiry?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["movieSeries"]>

  export type MovieSeriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    posterUrl?: boolean
    description?: boolean
    releaseYear?: boolean
    genre?: boolean
    director?: boolean
    cast?: boolean
    streamingPlatform?: boolean
    accessLink?: boolean
    rating?: boolean
    viewCount?: boolean
    markByAdmin?: boolean
    price?: boolean
    priceType?: boolean
    discount?: boolean
    discountType?: boolean
    discountExpiry?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["movieSeries"]>

  export type MovieSeriesSelectScalar = {
    id?: boolean
    title?: boolean
    posterUrl?: boolean
    description?: boolean
    releaseYear?: boolean
    genre?: boolean
    director?: boolean
    cast?: boolean
    streamingPlatform?: boolean
    accessLink?: boolean
    rating?: boolean
    viewCount?: boolean
    markByAdmin?: boolean
    price?: boolean
    priceType?: boolean
    discount?: boolean
    discountType?: boolean
    discountExpiry?: boolean
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovieSeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "posterUrl" | "description" | "releaseYear" | "genre" | "director" | "cast" | "streamingPlatform" | "accessLink" | "rating" | "viewCount" | "markByAdmin" | "price" | "priceType" | "discount" | "discountType" | "discountExpiry" | "isActive" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["movieSeries"]>
  export type MovieSeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MovieSeries$reviewsArgs<ExtArgs>
    watchlist?: boolean | MovieSeries$watchlistArgs<ExtArgs>
    purchaseRentHistory?: boolean | MovieSeries$purchaseRentHistoryArgs<ExtArgs>
    movieLike?: boolean | MovieSeries$movieLikeArgs<ExtArgs>
    _count?: boolean | MovieSeriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieSeriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieSeriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MovieSeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieSeries"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      watchlist: Prisma.$WatchlistPayload<ExtArgs>[]
      purchaseRentHistory: Prisma.$PurchaseRentHistoryPayload<ExtArgs>[]
      movieLike: Prisma.$MovieLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      posterUrl: string
      description: string
      releaseYear: number
      genre: $Enums.Genre[]
      director: string[]
      cast: string[]
      streamingPlatform: $Enums.StreamingPlatform[]
      accessLink: string[]
      rating: number
      viewCount: number
      markByAdmin: boolean
      price: number
      priceType: $Enums.PriceType
      discount: number | null
      discountType: $Enums.DiscountType | null
      discountExpiry: Date | null
      isActive: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["movieSeries"]>
    composites: {}
  }

  type MovieSeriesGetPayload<S extends boolean | null | undefined | MovieSeriesDefaultArgs> = $Result.GetResult<Prisma.$MovieSeriesPayload, S>

  type MovieSeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieSeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieSeriesCountAggregateInputType | true
    }

  export interface MovieSeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieSeries'], meta: { name: 'MovieSeries' } }
    /**
     * Find zero or one MovieSeries that matches the filter.
     * @param {MovieSeriesFindUniqueArgs} args - Arguments to find a MovieSeries
     * @example
     * // Get one MovieSeries
     * const movieSeries = await prisma.movieSeries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieSeriesFindUniqueArgs>(args: SelectSubset<T, MovieSeriesFindUniqueArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieSeries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieSeriesFindUniqueOrThrowArgs} args - Arguments to find a MovieSeries
     * @example
     * // Get one MovieSeries
     * const movieSeries = await prisma.movieSeries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieSeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieSeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesFindFirstArgs} args - Arguments to find a MovieSeries
     * @example
     * // Get one MovieSeries
     * const movieSeries = await prisma.movieSeries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieSeriesFindFirstArgs>(args?: SelectSubset<T, MovieSeriesFindFirstArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieSeries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesFindFirstOrThrowArgs} args - Arguments to find a MovieSeries
     * @example
     * // Get one MovieSeries
     * const movieSeries = await prisma.movieSeries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieSeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieSeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieSeries
     * const movieSeries = await prisma.movieSeries.findMany()
     * 
     * // Get first 10 MovieSeries
     * const movieSeries = await prisma.movieSeries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieSeriesWithIdOnly = await prisma.movieSeries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieSeriesFindManyArgs>(args?: SelectSubset<T, MovieSeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieSeries.
     * @param {MovieSeriesCreateArgs} args - Arguments to create a MovieSeries.
     * @example
     * // Create one MovieSeries
     * const MovieSeries = await prisma.movieSeries.create({
     *   data: {
     *     // ... data to create a MovieSeries
     *   }
     * })
     * 
     */
    create<T extends MovieSeriesCreateArgs>(args: SelectSubset<T, MovieSeriesCreateArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieSeries.
     * @param {MovieSeriesCreateManyArgs} args - Arguments to create many MovieSeries.
     * @example
     * // Create many MovieSeries
     * const movieSeries = await prisma.movieSeries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieSeriesCreateManyArgs>(args?: SelectSubset<T, MovieSeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieSeries and returns the data saved in the database.
     * @param {MovieSeriesCreateManyAndReturnArgs} args - Arguments to create many MovieSeries.
     * @example
     * // Create many MovieSeries
     * const movieSeries = await prisma.movieSeries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieSeries and only return the `id`
     * const movieSeriesWithIdOnly = await prisma.movieSeries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieSeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieSeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieSeries.
     * @param {MovieSeriesDeleteArgs} args - Arguments to delete one MovieSeries.
     * @example
     * // Delete one MovieSeries
     * const MovieSeries = await prisma.movieSeries.delete({
     *   where: {
     *     // ... filter to delete one MovieSeries
     *   }
     * })
     * 
     */
    delete<T extends MovieSeriesDeleteArgs>(args: SelectSubset<T, MovieSeriesDeleteArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieSeries.
     * @param {MovieSeriesUpdateArgs} args - Arguments to update one MovieSeries.
     * @example
     * // Update one MovieSeries
     * const movieSeries = await prisma.movieSeries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieSeriesUpdateArgs>(args: SelectSubset<T, MovieSeriesUpdateArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieSeries.
     * @param {MovieSeriesDeleteManyArgs} args - Arguments to filter MovieSeries to delete.
     * @example
     * // Delete a few MovieSeries
     * const { count } = await prisma.movieSeries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieSeriesDeleteManyArgs>(args?: SelectSubset<T, MovieSeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieSeries
     * const movieSeries = await prisma.movieSeries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieSeriesUpdateManyArgs>(args: SelectSubset<T, MovieSeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieSeries and returns the data updated in the database.
     * @param {MovieSeriesUpdateManyAndReturnArgs} args - Arguments to update many MovieSeries.
     * @example
     * // Update many MovieSeries
     * const movieSeries = await prisma.movieSeries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieSeries and only return the `id`
     * const movieSeriesWithIdOnly = await prisma.movieSeries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieSeriesUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieSeriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieSeries.
     * @param {MovieSeriesUpsertArgs} args - Arguments to update or create a MovieSeries.
     * @example
     * // Update or create a MovieSeries
     * const movieSeries = await prisma.movieSeries.upsert({
     *   create: {
     *     // ... data to create a MovieSeries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieSeries we want to update
     *   }
     * })
     */
    upsert<T extends MovieSeriesUpsertArgs>(args: SelectSubset<T, MovieSeriesUpsertArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesCountArgs} args - Arguments to filter MovieSeries to count.
     * @example
     * // Count the number of MovieSeries
     * const count = await prisma.movieSeries.count({
     *   where: {
     *     // ... the filter for the MovieSeries we want to count
     *   }
     * })
    **/
    count<T extends MovieSeriesCountArgs>(
      args?: Subset<T, MovieSeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieSeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieSeriesAggregateArgs>(args: Subset<T, MovieSeriesAggregateArgs>): Prisma.PrismaPromise<GetMovieSeriesAggregateType<T>>

    /**
     * Group by MovieSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieSeriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieSeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieSeriesGroupByArgs['orderBy'] }
        : { orderBy?: MovieSeriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieSeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieSeries model
   */
  readonly fields: MovieSeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieSeries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieSeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends MovieSeries$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeries$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlist<T extends MovieSeries$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeries$watchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseRentHistory<T extends MovieSeries$purchaseRentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeries$purchaseRentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movieLike<T extends MovieSeries$movieLikeArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeries$movieLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieSeries model
   */
  interface MovieSeriesFieldRefs {
    readonly id: FieldRef<"MovieSeries", 'String'>
    readonly title: FieldRef<"MovieSeries", 'String'>
    readonly posterUrl: FieldRef<"MovieSeries", 'String'>
    readonly description: FieldRef<"MovieSeries", 'String'>
    readonly releaseYear: FieldRef<"MovieSeries", 'Int'>
    readonly genre: FieldRef<"MovieSeries", 'Genre[]'>
    readonly director: FieldRef<"MovieSeries", 'String[]'>
    readonly cast: FieldRef<"MovieSeries", 'String[]'>
    readonly streamingPlatform: FieldRef<"MovieSeries", 'StreamingPlatform[]'>
    readonly accessLink: FieldRef<"MovieSeries", 'String[]'>
    readonly rating: FieldRef<"MovieSeries", 'Float'>
    readonly viewCount: FieldRef<"MovieSeries", 'Int'>
    readonly markByAdmin: FieldRef<"MovieSeries", 'Boolean'>
    readonly price: FieldRef<"MovieSeries", 'Float'>
    readonly priceType: FieldRef<"MovieSeries", 'PriceType'>
    readonly discount: FieldRef<"MovieSeries", 'Float'>
    readonly discountType: FieldRef<"MovieSeries", 'DiscountType'>
    readonly discountExpiry: FieldRef<"MovieSeries", 'DateTime'>
    readonly isActive: FieldRef<"MovieSeries", 'Boolean'>
    readonly isDeleted: FieldRef<"MovieSeries", 'Boolean'>
    readonly createdAt: FieldRef<"MovieSeries", 'DateTime'>
    readonly updatedAt: FieldRef<"MovieSeries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovieSeries findUnique
   */
  export type MovieSeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * Filter, which MovieSeries to fetch.
     */
    where: MovieSeriesWhereUniqueInput
  }

  /**
   * MovieSeries findUniqueOrThrow
   */
  export type MovieSeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * Filter, which MovieSeries to fetch.
     */
    where: MovieSeriesWhereUniqueInput
  }

  /**
   * MovieSeries findFirst
   */
  export type MovieSeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * Filter, which MovieSeries to fetch.
     */
    where?: MovieSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieSeries to fetch.
     */
    orderBy?: MovieSeriesOrderByWithRelationInput | MovieSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieSeries.
     */
    cursor?: MovieSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieSeries.
     */
    distinct?: MovieSeriesScalarFieldEnum | MovieSeriesScalarFieldEnum[]
  }

  /**
   * MovieSeries findFirstOrThrow
   */
  export type MovieSeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * Filter, which MovieSeries to fetch.
     */
    where?: MovieSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieSeries to fetch.
     */
    orderBy?: MovieSeriesOrderByWithRelationInput | MovieSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieSeries.
     */
    cursor?: MovieSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieSeries.
     */
    distinct?: MovieSeriesScalarFieldEnum | MovieSeriesScalarFieldEnum[]
  }

  /**
   * MovieSeries findMany
   */
  export type MovieSeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * Filter, which MovieSeries to fetch.
     */
    where?: MovieSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieSeries to fetch.
     */
    orderBy?: MovieSeriesOrderByWithRelationInput | MovieSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieSeries.
     */
    cursor?: MovieSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieSeries.
     */
    skip?: number
    distinct?: MovieSeriesScalarFieldEnum | MovieSeriesScalarFieldEnum[]
  }

  /**
   * MovieSeries create
   */
  export type MovieSeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieSeries.
     */
    data: XOR<MovieSeriesCreateInput, MovieSeriesUncheckedCreateInput>
  }

  /**
   * MovieSeries createMany
   */
  export type MovieSeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieSeries.
     */
    data: MovieSeriesCreateManyInput | MovieSeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieSeries createManyAndReturn
   */
  export type MovieSeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * The data used to create many MovieSeries.
     */
    data: MovieSeriesCreateManyInput | MovieSeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieSeries update
   */
  export type MovieSeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieSeries.
     */
    data: XOR<MovieSeriesUpdateInput, MovieSeriesUncheckedUpdateInput>
    /**
     * Choose, which MovieSeries to update.
     */
    where: MovieSeriesWhereUniqueInput
  }

  /**
   * MovieSeries updateMany
   */
  export type MovieSeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieSeries.
     */
    data: XOR<MovieSeriesUpdateManyMutationInput, MovieSeriesUncheckedUpdateManyInput>
    /**
     * Filter which MovieSeries to update
     */
    where?: MovieSeriesWhereInput
    /**
     * Limit how many MovieSeries to update.
     */
    limit?: number
  }

  /**
   * MovieSeries updateManyAndReturn
   */
  export type MovieSeriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * The data used to update MovieSeries.
     */
    data: XOR<MovieSeriesUpdateManyMutationInput, MovieSeriesUncheckedUpdateManyInput>
    /**
     * Filter which MovieSeries to update
     */
    where?: MovieSeriesWhereInput
    /**
     * Limit how many MovieSeries to update.
     */
    limit?: number
  }

  /**
   * MovieSeries upsert
   */
  export type MovieSeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieSeries to update in case it exists.
     */
    where: MovieSeriesWhereUniqueInput
    /**
     * In case the MovieSeries found by the `where` argument doesn't exist, create a new MovieSeries with this data.
     */
    create: XOR<MovieSeriesCreateInput, MovieSeriesUncheckedCreateInput>
    /**
     * In case the MovieSeries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieSeriesUpdateInput, MovieSeriesUncheckedUpdateInput>
  }

  /**
   * MovieSeries delete
   */
  export type MovieSeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
    /**
     * Filter which MovieSeries to delete.
     */
    where: MovieSeriesWhereUniqueInput
  }

  /**
   * MovieSeries deleteMany
   */
  export type MovieSeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieSeries to delete
     */
    where?: MovieSeriesWhereInput
    /**
     * Limit how many MovieSeries to delete.
     */
    limit?: number
  }

  /**
   * MovieSeries.reviews
   */
  export type MovieSeries$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * MovieSeries.watchlist
   */
  export type MovieSeries$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * MovieSeries.purchaseRentHistory
   */
  export type MovieSeries$purchaseRentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    where?: PurchaseRentHistoryWhereInput
    orderBy?: PurchaseRentHistoryOrderByWithRelationInput | PurchaseRentHistoryOrderByWithRelationInput[]
    cursor?: PurchaseRentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseRentHistoryScalarFieldEnum | PurchaseRentHistoryScalarFieldEnum[]
  }

  /**
   * MovieSeries.movieLike
   */
  export type MovieSeries$movieLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    where?: MovieLikeWhereInput
    orderBy?: MovieLikeOrderByWithRelationInput | MovieLikeOrderByWithRelationInput[]
    cursor?: MovieLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieLikeScalarFieldEnum | MovieLikeScalarFieldEnum[]
  }

  /**
   * MovieSeries without action
   */
  export type MovieSeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieSeries
     */
    select?: MovieSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieSeries
     */
    omit?: MovieSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieSeriesInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
    likesCount: number | null
    commentCount: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
    likesCount: number | null
    commentCount: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    movieSeriesId: string | null
    userId: string | null
    rating: number | null
    writtenReview: string | null
    isSpoiler: boolean | null
    likesCount: number | null
    commentCount: number | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    movieSeriesId: string | null
    userId: string | null
    rating: number | null
    writtenReview: string | null
    isSpoiler: boolean | null
    likesCount: number | null
    commentCount: number | null
    status: $Enums.ReviewStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    movieSeriesId: number
    userId: number
    rating: number
    writtenReview: number
    isSpoiler: number
    tags: number
    likesCount: number
    commentCount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
    likesCount?: true
    commentCount?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
    likesCount?: true
    commentCount?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    movieSeriesId?: true
    userId?: true
    rating?: true
    writtenReview?: true
    isSpoiler?: true
    likesCount?: true
    commentCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    movieSeriesId?: true
    userId?: true
    rating?: true
    writtenReview?: true
    isSpoiler?: true
    likesCount?: true
    commentCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    movieSeriesId?: true
    userId?: true
    rating?: true
    writtenReview?: true
    isSpoiler?: true
    tags?: true
    likesCount?: true
    commentCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    movieSeriesId: string
    userId: string
    rating: number
    writtenReview: string
    isSpoiler: boolean
    tags: string[]
    likesCount: number
    commentCount: number
    status: $Enums.ReviewStatus
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    rating?: boolean
    writtenReview?: boolean
    isSpoiler?: boolean
    tags?: boolean
    likesCount?: boolean
    commentCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | Review$commentArgs<ExtArgs>
    reviewLike?: boolean | Review$reviewLikeArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    rating?: boolean
    writtenReview?: boolean
    isSpoiler?: boolean
    tags?: boolean
    likesCount?: boolean
    commentCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    rating?: boolean
    writtenReview?: boolean
    isSpoiler?: boolean
    tags?: boolean
    likesCount?: boolean
    commentCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    rating?: boolean
    writtenReview?: boolean
    isSpoiler?: boolean
    tags?: boolean
    likesCount?: boolean
    commentCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieSeriesId" | "userId" | "rating" | "writtenReview" | "isSpoiler" | "tags" | "likesCount" | "commentCount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | Review$commentArgs<ExtArgs>
    reviewLike?: boolean | Review$reviewLikeArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      movieSeries: Prisma.$MovieSeriesPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>[]
      reviewLike: Prisma.$ReviewLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movieSeriesId: string
      userId: string
      rating: number
      writtenReview: string
      isSpoiler: boolean
      tags: string[]
      likesCount: number
      commentCount: number
      status: $Enums.ReviewStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieSeries<T extends MovieSeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeriesDefaultArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends Review$commentArgs<ExtArgs> = {}>(args?: Subset<T, Review$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewLike<T extends Review$reviewLikeArgs<ExtArgs> = {}>(args?: Subset<T, Review$reviewLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly movieSeriesId: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly writtenReview: FieldRef<"Review", 'String'>
    readonly isSpoiler: FieldRef<"Review", 'Boolean'>
    readonly tags: FieldRef<"Review", 'String[]'>
    readonly likesCount: FieldRef<"Review", 'Int'>
    readonly commentCount: FieldRef<"Review", 'Int'>
    readonly status: FieldRef<"Review", 'ReviewStatus'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.comment
   */
  export type Review$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Review.reviewLike
   */
  export type Review$reviewLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    cursor?: ReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    reviewId: string | null
    userId: string | null
    content: string | null
    replyTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    reviewId: string | null
    userId: string | null
    content: string | null
    replyTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    reviewId: number
    userId: number
    content: number
    replyTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    content?: true
    replyTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    content?: true
    replyTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    content?: true
    replyTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    reviewId: string
    userId: string
    content: string
    replyTo: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    content?: boolean
    replyTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    content?: boolean
    replyTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    content?: boolean
    replyTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    content?: boolean
    replyTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "userId" | "content" | "replyTo" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewId: string
      userId: string
      content: string
      replyTo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly reviewId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly replyTo: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model MovieLike
   */

  export type AggregateMovieLike = {
    _count: MovieLikeCountAggregateOutputType | null
    _min: MovieLikeMinAggregateOutputType | null
    _max: MovieLikeMaxAggregateOutputType | null
  }

  export type MovieLikeMinAggregateOutputType = {
    id: string | null
    movieSeriesId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isLike: boolean | null
  }

  export type MovieLikeMaxAggregateOutputType = {
    id: string | null
    movieSeriesId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isLike: boolean | null
  }

  export type MovieLikeCountAggregateOutputType = {
    id: number
    movieSeriesId: number
    userId: number
    createdAt: number
    updatedAt: number
    isLike: number
    _all: number
  }


  export type MovieLikeMinAggregateInputType = {
    id?: true
    movieSeriesId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
  }

  export type MovieLikeMaxAggregateInputType = {
    id?: true
    movieSeriesId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
  }

  export type MovieLikeCountAggregateInputType = {
    id?: true
    movieSeriesId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
    _all?: true
  }

  export type MovieLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieLike to aggregate.
     */
    where?: MovieLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLikes to fetch.
     */
    orderBy?: MovieLikeOrderByWithRelationInput | MovieLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieLikes
    **/
    _count?: true | MovieLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieLikeMaxAggregateInputType
  }

  export type GetMovieLikeAggregateType<T extends MovieLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieLike[P]>
      : GetScalarType<T[P], AggregateMovieLike[P]>
  }




  export type MovieLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieLikeWhereInput
    orderBy?: MovieLikeOrderByWithAggregationInput | MovieLikeOrderByWithAggregationInput[]
    by: MovieLikeScalarFieldEnum[] | MovieLikeScalarFieldEnum
    having?: MovieLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieLikeCountAggregateInputType | true
    _min?: MovieLikeMinAggregateInputType
    _max?: MovieLikeMaxAggregateInputType
  }

  export type MovieLikeGroupByOutputType = {
    id: string
    movieSeriesId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    isLike: boolean
    _count: MovieLikeCountAggregateOutputType | null
    _min: MovieLikeMinAggregateOutputType | null
    _max: MovieLikeMaxAggregateOutputType | null
  }

  type GetMovieLikeGroupByPayload<T extends MovieLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieLikeGroupByOutputType[P]>
            : GetScalarType<T[P], MovieLikeGroupByOutputType[P]>
        }
      >
    >


  export type MovieLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieLike"]>

  export type MovieLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieLike"]>

  export type MovieLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieLike"]>

  export type MovieLikeSelectScalar = {
    id?: boolean
    movieSeriesId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
  }

  export type MovieLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieSeriesId" | "userId" | "createdAt" | "updatedAt" | "isLike", ExtArgs["result"]["movieLike"]>
  export type MovieLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MovieLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MovieLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MovieLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieLike"
    objects: {
      movieSeries: Prisma.$MovieSeriesPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movieSeriesId: string
      userId: string
      createdAt: Date
      updatedAt: Date
      isLike: boolean
    }, ExtArgs["result"]["movieLike"]>
    composites: {}
  }

  type MovieLikeGetPayload<S extends boolean | null | undefined | MovieLikeDefaultArgs> = $Result.GetResult<Prisma.$MovieLikePayload, S>

  type MovieLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieLikeCountAggregateInputType | true
    }

  export interface MovieLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieLike'], meta: { name: 'MovieLike' } }
    /**
     * Find zero or one MovieLike that matches the filter.
     * @param {MovieLikeFindUniqueArgs} args - Arguments to find a MovieLike
     * @example
     * // Get one MovieLike
     * const movieLike = await prisma.movieLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieLikeFindUniqueArgs>(args: SelectSubset<T, MovieLikeFindUniqueArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieLikeFindUniqueOrThrowArgs} args - Arguments to find a MovieLike
     * @example
     * // Get one MovieLike
     * const movieLike = await prisma.movieLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeFindFirstArgs} args - Arguments to find a MovieLike
     * @example
     * // Get one MovieLike
     * const movieLike = await prisma.movieLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieLikeFindFirstArgs>(args?: SelectSubset<T, MovieLikeFindFirstArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeFindFirstOrThrowArgs} args - Arguments to find a MovieLike
     * @example
     * // Get one MovieLike
     * const movieLike = await prisma.movieLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieLikes
     * const movieLikes = await prisma.movieLike.findMany()
     * 
     * // Get first 10 MovieLikes
     * const movieLikes = await prisma.movieLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieLikeWithIdOnly = await prisma.movieLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieLikeFindManyArgs>(args?: SelectSubset<T, MovieLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieLike.
     * @param {MovieLikeCreateArgs} args - Arguments to create a MovieLike.
     * @example
     * // Create one MovieLike
     * const MovieLike = await prisma.movieLike.create({
     *   data: {
     *     // ... data to create a MovieLike
     *   }
     * })
     * 
     */
    create<T extends MovieLikeCreateArgs>(args: SelectSubset<T, MovieLikeCreateArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieLikes.
     * @param {MovieLikeCreateManyArgs} args - Arguments to create many MovieLikes.
     * @example
     * // Create many MovieLikes
     * const movieLike = await prisma.movieLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieLikeCreateManyArgs>(args?: SelectSubset<T, MovieLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovieLikes and returns the data saved in the database.
     * @param {MovieLikeCreateManyAndReturnArgs} args - Arguments to create many MovieLikes.
     * @example
     * // Create many MovieLikes
     * const movieLike = await prisma.movieLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovieLikes and only return the `id`
     * const movieLikeWithIdOnly = await prisma.movieLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovieLike.
     * @param {MovieLikeDeleteArgs} args - Arguments to delete one MovieLike.
     * @example
     * // Delete one MovieLike
     * const MovieLike = await prisma.movieLike.delete({
     *   where: {
     *     // ... filter to delete one MovieLike
     *   }
     * })
     * 
     */
    delete<T extends MovieLikeDeleteArgs>(args: SelectSubset<T, MovieLikeDeleteArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieLike.
     * @param {MovieLikeUpdateArgs} args - Arguments to update one MovieLike.
     * @example
     * // Update one MovieLike
     * const movieLike = await prisma.movieLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieLikeUpdateArgs>(args: SelectSubset<T, MovieLikeUpdateArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieLikes.
     * @param {MovieLikeDeleteManyArgs} args - Arguments to filter MovieLikes to delete.
     * @example
     * // Delete a few MovieLikes
     * const { count } = await prisma.movieLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieLikeDeleteManyArgs>(args?: SelectSubset<T, MovieLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieLikes
     * const movieLike = await prisma.movieLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieLikeUpdateManyArgs>(args: SelectSubset<T, MovieLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieLikes and returns the data updated in the database.
     * @param {MovieLikeUpdateManyAndReturnArgs} args - Arguments to update many MovieLikes.
     * @example
     * // Update many MovieLikes
     * const movieLike = await prisma.movieLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovieLikes and only return the `id`
     * const movieLikeWithIdOnly = await prisma.movieLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovieLike.
     * @param {MovieLikeUpsertArgs} args - Arguments to update or create a MovieLike.
     * @example
     * // Update or create a MovieLike
     * const movieLike = await prisma.movieLike.upsert({
     *   create: {
     *     // ... data to create a MovieLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieLike we want to update
     *   }
     * })
     */
    upsert<T extends MovieLikeUpsertArgs>(args: SelectSubset<T, MovieLikeUpsertArgs<ExtArgs>>): Prisma__MovieLikeClient<$Result.GetResult<Prisma.$MovieLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeCountArgs} args - Arguments to filter MovieLikes to count.
     * @example
     * // Count the number of MovieLikes
     * const count = await prisma.movieLike.count({
     *   where: {
     *     // ... the filter for the MovieLikes we want to count
     *   }
     * })
    **/
    count<T extends MovieLikeCountArgs>(
      args?: Subset<T, MovieLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieLikeAggregateArgs>(args: Subset<T, MovieLikeAggregateArgs>): Prisma.PrismaPromise<GetMovieLikeAggregateType<T>>

    /**
     * Group by MovieLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieLikeGroupByArgs['orderBy'] }
        : { orderBy?: MovieLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieLike model
   */
  readonly fields: MovieLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieSeries<T extends MovieSeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeriesDefaultArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieLike model
   */
  interface MovieLikeFieldRefs {
    readonly id: FieldRef<"MovieLike", 'String'>
    readonly movieSeriesId: FieldRef<"MovieLike", 'String'>
    readonly userId: FieldRef<"MovieLike", 'String'>
    readonly createdAt: FieldRef<"MovieLike", 'DateTime'>
    readonly updatedAt: FieldRef<"MovieLike", 'DateTime'>
    readonly isLike: FieldRef<"MovieLike", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MovieLike findUnique
   */
  export type MovieLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * Filter, which MovieLike to fetch.
     */
    where: MovieLikeWhereUniqueInput
  }

  /**
   * MovieLike findUniqueOrThrow
   */
  export type MovieLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * Filter, which MovieLike to fetch.
     */
    where: MovieLikeWhereUniqueInput
  }

  /**
   * MovieLike findFirst
   */
  export type MovieLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * Filter, which MovieLike to fetch.
     */
    where?: MovieLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLikes to fetch.
     */
    orderBy?: MovieLikeOrderByWithRelationInput | MovieLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieLikes.
     */
    cursor?: MovieLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieLikes.
     */
    distinct?: MovieLikeScalarFieldEnum | MovieLikeScalarFieldEnum[]
  }

  /**
   * MovieLike findFirstOrThrow
   */
  export type MovieLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * Filter, which MovieLike to fetch.
     */
    where?: MovieLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLikes to fetch.
     */
    orderBy?: MovieLikeOrderByWithRelationInput | MovieLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieLikes.
     */
    cursor?: MovieLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieLikes.
     */
    distinct?: MovieLikeScalarFieldEnum | MovieLikeScalarFieldEnum[]
  }

  /**
   * MovieLike findMany
   */
  export type MovieLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * Filter, which MovieLikes to fetch.
     */
    where?: MovieLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieLikes to fetch.
     */
    orderBy?: MovieLikeOrderByWithRelationInput | MovieLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieLikes.
     */
    cursor?: MovieLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieLikes.
     */
    skip?: number
    distinct?: MovieLikeScalarFieldEnum | MovieLikeScalarFieldEnum[]
  }

  /**
   * MovieLike create
   */
  export type MovieLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieLike.
     */
    data: XOR<MovieLikeCreateInput, MovieLikeUncheckedCreateInput>
  }

  /**
   * MovieLike createMany
   */
  export type MovieLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieLikes.
     */
    data: MovieLikeCreateManyInput | MovieLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieLike createManyAndReturn
   */
  export type MovieLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * The data used to create many MovieLikes.
     */
    data: MovieLikeCreateManyInput | MovieLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieLike update
   */
  export type MovieLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieLike.
     */
    data: XOR<MovieLikeUpdateInput, MovieLikeUncheckedUpdateInput>
    /**
     * Choose, which MovieLike to update.
     */
    where: MovieLikeWhereUniqueInput
  }

  /**
   * MovieLike updateMany
   */
  export type MovieLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieLikes.
     */
    data: XOR<MovieLikeUpdateManyMutationInput, MovieLikeUncheckedUpdateManyInput>
    /**
     * Filter which MovieLikes to update
     */
    where?: MovieLikeWhereInput
    /**
     * Limit how many MovieLikes to update.
     */
    limit?: number
  }

  /**
   * MovieLike updateManyAndReturn
   */
  export type MovieLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * The data used to update MovieLikes.
     */
    data: XOR<MovieLikeUpdateManyMutationInput, MovieLikeUncheckedUpdateManyInput>
    /**
     * Filter which MovieLikes to update
     */
    where?: MovieLikeWhereInput
    /**
     * Limit how many MovieLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovieLike upsert
   */
  export type MovieLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieLike to update in case it exists.
     */
    where: MovieLikeWhereUniqueInput
    /**
     * In case the MovieLike found by the `where` argument doesn't exist, create a new MovieLike with this data.
     */
    create: XOR<MovieLikeCreateInput, MovieLikeUncheckedCreateInput>
    /**
     * In case the MovieLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieLikeUpdateInput, MovieLikeUncheckedUpdateInput>
  }

  /**
   * MovieLike delete
   */
  export type MovieLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
    /**
     * Filter which MovieLike to delete.
     */
    where: MovieLikeWhereUniqueInput
  }

  /**
   * MovieLike deleteMany
   */
  export type MovieLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieLikes to delete
     */
    where?: MovieLikeWhereInput
    /**
     * Limit how many MovieLikes to delete.
     */
    limit?: number
  }

  /**
   * MovieLike without action
   */
  export type MovieLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieLike
     */
    select?: MovieLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieLike
     */
    omit?: MovieLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieLikeInclude<ExtArgs> | null
  }


  /**
   * Model ReviewLike
   */

  export type AggregateReviewLike = {
    _count: ReviewLikeCountAggregateOutputType | null
    _min: ReviewLikeMinAggregateOutputType | null
    _max: ReviewLikeMaxAggregateOutputType | null
  }

  export type ReviewLikeMinAggregateOutputType = {
    id: string | null
    reviewId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isLike: boolean | null
  }

  export type ReviewLikeMaxAggregateOutputType = {
    id: string | null
    reviewId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isLike: boolean | null
  }

  export type ReviewLikeCountAggregateOutputType = {
    id: number
    reviewId: number
    userId: number
    createdAt: number
    updatedAt: number
    isLike: number
    _all: number
  }


  export type ReviewLikeMinAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
  }

  export type ReviewLikeMaxAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
  }

  export type ReviewLikeCountAggregateInputType = {
    id?: true
    reviewId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
    _all?: true
  }

  export type ReviewLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewLike to aggregate.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewLikes
    **/
    _count?: true | ReviewLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewLikeMaxAggregateInputType
  }

  export type GetReviewLikeAggregateType<T extends ReviewLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewLike[P]>
      : GetScalarType<T[P], AggregateReviewLike[P]>
  }




  export type ReviewLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithAggregationInput | ReviewLikeOrderByWithAggregationInput[]
    by: ReviewLikeScalarFieldEnum[] | ReviewLikeScalarFieldEnum
    having?: ReviewLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewLikeCountAggregateInputType | true
    _min?: ReviewLikeMinAggregateInputType
    _max?: ReviewLikeMaxAggregateInputType
  }

  export type ReviewLikeGroupByOutputType = {
    id: string
    reviewId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    isLike: boolean
    _count: ReviewLikeCountAggregateOutputType | null
    _min: ReviewLikeMinAggregateOutputType | null
    _max: ReviewLikeMaxAggregateOutputType | null
  }

  type GetReviewLikeGroupByPayload<T extends ReviewLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewLikeGroupByOutputType[P]>
        }
      >
    >


  export type ReviewLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewLike"]>

  export type ReviewLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewLike"]>

  export type ReviewLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewLike"]>

  export type ReviewLikeSelectScalar = {
    id?: boolean
    reviewId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
  }

  export type ReviewLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "userId" | "createdAt" | "updatedAt" | "isLike", ExtArgs["result"]["reviewLike"]>
  export type ReviewLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewLike"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewId: string
      userId: string
      createdAt: Date
      updatedAt: Date
      isLike: boolean
    }, ExtArgs["result"]["reviewLike"]>
    composites: {}
  }

  type ReviewLikeGetPayload<S extends boolean | null | undefined | ReviewLikeDefaultArgs> = $Result.GetResult<Prisma.$ReviewLikePayload, S>

  type ReviewLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewLikeCountAggregateInputType | true
    }

  export interface ReviewLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewLike'], meta: { name: 'ReviewLike' } }
    /**
     * Find zero or one ReviewLike that matches the filter.
     * @param {ReviewLikeFindUniqueArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewLikeFindUniqueArgs>(args: SelectSubset<T, ReviewLikeFindUniqueArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewLikeFindUniqueOrThrowArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindFirstArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewLikeFindFirstArgs>(args?: SelectSubset<T, ReviewLikeFindFirstArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindFirstOrThrowArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewLikes
     * const reviewLikes = await prisma.reviewLike.findMany()
     * 
     * // Get first 10 ReviewLikes
     * const reviewLikes = await prisma.reviewLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewLikeWithIdOnly = await prisma.reviewLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewLikeFindManyArgs>(args?: SelectSubset<T, ReviewLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewLike.
     * @param {ReviewLikeCreateArgs} args - Arguments to create a ReviewLike.
     * @example
     * // Create one ReviewLike
     * const ReviewLike = await prisma.reviewLike.create({
     *   data: {
     *     // ... data to create a ReviewLike
     *   }
     * })
     * 
     */
    create<T extends ReviewLikeCreateArgs>(args: SelectSubset<T, ReviewLikeCreateArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewLikes.
     * @param {ReviewLikeCreateManyArgs} args - Arguments to create many ReviewLikes.
     * @example
     * // Create many ReviewLikes
     * const reviewLike = await prisma.reviewLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewLikeCreateManyArgs>(args?: SelectSubset<T, ReviewLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewLikes and returns the data saved in the database.
     * @param {ReviewLikeCreateManyAndReturnArgs} args - Arguments to create many ReviewLikes.
     * @example
     * // Create many ReviewLikes
     * const reviewLike = await prisma.reviewLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewLikes and only return the `id`
     * const reviewLikeWithIdOnly = await prisma.reviewLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewLike.
     * @param {ReviewLikeDeleteArgs} args - Arguments to delete one ReviewLike.
     * @example
     * // Delete one ReviewLike
     * const ReviewLike = await prisma.reviewLike.delete({
     *   where: {
     *     // ... filter to delete one ReviewLike
     *   }
     * })
     * 
     */
    delete<T extends ReviewLikeDeleteArgs>(args: SelectSubset<T, ReviewLikeDeleteArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewLike.
     * @param {ReviewLikeUpdateArgs} args - Arguments to update one ReviewLike.
     * @example
     * // Update one ReviewLike
     * const reviewLike = await prisma.reviewLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewLikeUpdateArgs>(args: SelectSubset<T, ReviewLikeUpdateArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewLikes.
     * @param {ReviewLikeDeleteManyArgs} args - Arguments to filter ReviewLikes to delete.
     * @example
     * // Delete a few ReviewLikes
     * const { count } = await prisma.reviewLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewLikeDeleteManyArgs>(args?: SelectSubset<T, ReviewLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewLikes
     * const reviewLike = await prisma.reviewLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewLikeUpdateManyArgs>(args: SelectSubset<T, ReviewLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewLikes and returns the data updated in the database.
     * @param {ReviewLikeUpdateManyAndReturnArgs} args - Arguments to update many ReviewLikes.
     * @example
     * // Update many ReviewLikes
     * const reviewLike = await prisma.reviewLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewLikes and only return the `id`
     * const reviewLikeWithIdOnly = await prisma.reviewLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewLike.
     * @param {ReviewLikeUpsertArgs} args - Arguments to update or create a ReviewLike.
     * @example
     * // Update or create a ReviewLike
     * const reviewLike = await prisma.reviewLike.upsert({
     *   create: {
     *     // ... data to create a ReviewLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewLike we want to update
     *   }
     * })
     */
    upsert<T extends ReviewLikeUpsertArgs>(args: SelectSubset<T, ReviewLikeUpsertArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeCountArgs} args - Arguments to filter ReviewLikes to count.
     * @example
     * // Count the number of ReviewLikes
     * const count = await prisma.reviewLike.count({
     *   where: {
     *     // ... the filter for the ReviewLikes we want to count
     *   }
     * })
    **/
    count<T extends ReviewLikeCountArgs>(
      args?: Subset<T, ReviewLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewLikeAggregateArgs>(args: Subset<T, ReviewLikeAggregateArgs>): Prisma.PrismaPromise<GetReviewLikeAggregateType<T>>

    /**
     * Group by ReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewLikeGroupByArgs['orderBy'] }
        : { orderBy?: ReviewLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewLike model
   */
  readonly fields: ReviewLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewLike model
   */
  interface ReviewLikeFieldRefs {
    readonly id: FieldRef<"ReviewLike", 'String'>
    readonly reviewId: FieldRef<"ReviewLike", 'String'>
    readonly userId: FieldRef<"ReviewLike", 'String'>
    readonly createdAt: FieldRef<"ReviewLike", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewLike", 'DateTime'>
    readonly isLike: FieldRef<"ReviewLike", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ReviewLike findUnique
   */
  export type ReviewLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike findUniqueOrThrow
   */
  export type ReviewLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike findFirst
   */
  export type ReviewLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewLikes.
     */
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike findFirstOrThrow
   */
  export type ReviewLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewLikes.
     */
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike findMany
   */
  export type ReviewLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLikes to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike create
   */
  export type ReviewLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewLike.
     */
    data: XOR<ReviewLikeCreateInput, ReviewLikeUncheckedCreateInput>
  }

  /**
   * ReviewLike createMany
   */
  export type ReviewLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewLikes.
     */
    data: ReviewLikeCreateManyInput | ReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewLike createManyAndReturn
   */
  export type ReviewLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewLikes.
     */
    data: ReviewLikeCreateManyInput | ReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewLike update
   */
  export type ReviewLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewLike.
     */
    data: XOR<ReviewLikeUpdateInput, ReviewLikeUncheckedUpdateInput>
    /**
     * Choose, which ReviewLike to update.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike updateMany
   */
  export type ReviewLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewLikes.
     */
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyInput>
    /**
     * Filter which ReviewLikes to update
     */
    where?: ReviewLikeWhereInput
    /**
     * Limit how many ReviewLikes to update.
     */
    limit?: number
  }

  /**
   * ReviewLike updateManyAndReturn
   */
  export type ReviewLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * The data used to update ReviewLikes.
     */
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyInput>
    /**
     * Filter which ReviewLikes to update
     */
    where?: ReviewLikeWhereInput
    /**
     * Limit how many ReviewLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewLike upsert
   */
  export type ReviewLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewLike to update in case it exists.
     */
    where: ReviewLikeWhereUniqueInput
    /**
     * In case the ReviewLike found by the `where` argument doesn't exist, create a new ReviewLike with this data.
     */
    create: XOR<ReviewLikeCreateInput, ReviewLikeUncheckedCreateInput>
    /**
     * In case the ReviewLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewLikeUpdateInput, ReviewLikeUncheckedUpdateInput>
  }

  /**
   * ReviewLike delete
   */
  export type ReviewLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter which ReviewLike to delete.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike deleteMany
   */
  export type ReviewLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewLikes to delete
     */
    where?: ReviewLikeWhereInput
    /**
     * Limit how many ReviewLikes to delete.
     */
    limit?: number
  }

  /**
   * ReviewLike without action
   */
  export type ReviewLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
  }


  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    movieSeriesId: string | null
    addedAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    movieSeriesId: string | null
    addedAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    userId: number
    movieSeriesId: number
    addedAt: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    userId?: true
    movieSeriesId?: true
    addedAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    userId?: true
    movieSeriesId?: true
    addedAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    userId?: true
    movieSeriesId?: true
    addedAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    userId: string
    movieSeriesId: string
    addedAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    addedAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieSeriesId" | "addedAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movieSeries: Prisma.$MovieSeriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      movieSeriesId: string
      addedAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movieSeries<T extends MovieSeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeriesDefaultArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly userId: FieldRef<"Watchlist", 'String'>
    readonly movieSeriesId: FieldRef<"Watchlist", 'String'>
    readonly addedAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseRentHistory
   */

  export type AggregatePurchaseRentHistory = {
    _count: PurchaseRentHistoryCountAggregateOutputType | null
    _avg: PurchaseRentHistoryAvgAggregateOutputType | null
    _sum: PurchaseRentHistorySumAggregateOutputType | null
    _min: PurchaseRentHistoryMinAggregateOutputType | null
    _max: PurchaseRentHistoryMaxAggregateOutputType | null
  }

  export type PurchaseRentHistoryAvgAggregateOutputType = {
    price: number | null
  }

  export type PurchaseRentHistorySumAggregateOutputType = {
    price: number | null
  }

  export type PurchaseRentHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    movieSeriesId: string | null
    purchaseType: $Enums.PriceType | null
    purchaseDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    price: number | null
    transactionId: string | null
    accessExpiry: Date | null
    isEmailSent: boolean | null
  }

  export type PurchaseRentHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    movieSeriesId: string | null
    purchaseType: $Enums.PriceType | null
    purchaseDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    price: number | null
    transactionId: string | null
    accessExpiry: Date | null
    isEmailSent: boolean | null
  }

  export type PurchaseRentHistoryCountAggregateOutputType = {
    id: number
    userId: number
    movieSeriesId: number
    purchaseType: number
    purchaseDate: number
    paymentStatus: number
    price: number
    transactionId: number
    accessExpiry: number
    isEmailSent: number
    _all: number
  }


  export type PurchaseRentHistoryAvgAggregateInputType = {
    price?: true
  }

  export type PurchaseRentHistorySumAggregateInputType = {
    price?: true
  }

  export type PurchaseRentHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    movieSeriesId?: true
    purchaseType?: true
    purchaseDate?: true
    paymentStatus?: true
    price?: true
    transactionId?: true
    accessExpiry?: true
    isEmailSent?: true
  }

  export type PurchaseRentHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    movieSeriesId?: true
    purchaseType?: true
    purchaseDate?: true
    paymentStatus?: true
    price?: true
    transactionId?: true
    accessExpiry?: true
    isEmailSent?: true
  }

  export type PurchaseRentHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    movieSeriesId?: true
    purchaseType?: true
    purchaseDate?: true
    paymentStatus?: true
    price?: true
    transactionId?: true
    accessExpiry?: true
    isEmailSent?: true
    _all?: true
  }

  export type PurchaseRentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseRentHistory to aggregate.
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRentHistories to fetch.
     */
    orderBy?: PurchaseRentHistoryOrderByWithRelationInput | PurchaseRentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseRentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseRentHistories
    **/
    _count?: true | PurchaseRentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseRentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseRentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseRentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseRentHistoryMaxAggregateInputType
  }

  export type GetPurchaseRentHistoryAggregateType<T extends PurchaseRentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseRentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseRentHistory[P]>
      : GetScalarType<T[P], AggregatePurchaseRentHistory[P]>
  }




  export type PurchaseRentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseRentHistoryWhereInput
    orderBy?: PurchaseRentHistoryOrderByWithAggregationInput | PurchaseRentHistoryOrderByWithAggregationInput[]
    by: PurchaseRentHistoryScalarFieldEnum[] | PurchaseRentHistoryScalarFieldEnum
    having?: PurchaseRentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseRentHistoryCountAggregateInputType | true
    _avg?: PurchaseRentHistoryAvgAggregateInputType
    _sum?: PurchaseRentHistorySumAggregateInputType
    _min?: PurchaseRentHistoryMinAggregateInputType
    _max?: PurchaseRentHistoryMaxAggregateInputType
  }

  export type PurchaseRentHistoryGroupByOutputType = {
    id: string
    userId: string
    movieSeriesId: string
    purchaseType: $Enums.PriceType
    purchaseDate: Date
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry: Date | null
    isEmailSent: boolean
    _count: PurchaseRentHistoryCountAggregateOutputType | null
    _avg: PurchaseRentHistoryAvgAggregateOutputType | null
    _sum: PurchaseRentHistorySumAggregateOutputType | null
    _min: PurchaseRentHistoryMinAggregateOutputType | null
    _max: PurchaseRentHistoryMaxAggregateOutputType | null
  }

  type GetPurchaseRentHistoryGroupByPayload<T extends PurchaseRentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseRentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseRentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseRentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseRentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseRentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    purchaseType?: boolean
    purchaseDate?: boolean
    paymentStatus?: boolean
    price?: boolean
    transactionId?: boolean
    accessExpiry?: boolean
    isEmailSent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseRentHistory"]>

  export type PurchaseRentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    purchaseType?: boolean
    purchaseDate?: boolean
    paymentStatus?: boolean
    price?: boolean
    transactionId?: boolean
    accessExpiry?: boolean
    isEmailSent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseRentHistory"]>

  export type PurchaseRentHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    purchaseType?: boolean
    purchaseDate?: boolean
    paymentStatus?: boolean
    price?: boolean
    transactionId?: boolean
    accessExpiry?: boolean
    isEmailSent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseRentHistory"]>

  export type PurchaseRentHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    movieSeriesId?: boolean
    purchaseType?: boolean
    purchaseDate?: boolean
    paymentStatus?: boolean
    price?: boolean
    transactionId?: boolean
    accessExpiry?: boolean
    isEmailSent?: boolean
  }

  export type PurchaseRentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieSeriesId" | "purchaseType" | "purchaseDate" | "paymentStatus" | "price" | "transactionId" | "accessExpiry" | "isEmailSent", ExtArgs["result"]["purchaseRentHistory"]>
  export type PurchaseRentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }
  export type PurchaseRentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }
  export type PurchaseRentHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieSeries?: boolean | MovieSeriesDefaultArgs<ExtArgs>
  }

  export type $PurchaseRentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseRentHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movieSeries: Prisma.$MovieSeriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      movieSeriesId: string
      purchaseType: $Enums.PriceType
      purchaseDate: Date
      paymentStatus: $Enums.PaymentStatus
      price: number
      transactionId: string
      accessExpiry: Date | null
      isEmailSent: boolean
    }, ExtArgs["result"]["purchaseRentHistory"]>
    composites: {}
  }

  type PurchaseRentHistoryGetPayload<S extends boolean | null | undefined | PurchaseRentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PurchaseRentHistoryPayload, S>

  type PurchaseRentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseRentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseRentHistoryCountAggregateInputType | true
    }

  export interface PurchaseRentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseRentHistory'], meta: { name: 'PurchaseRentHistory' } }
    /**
     * Find zero or one PurchaseRentHistory that matches the filter.
     * @param {PurchaseRentHistoryFindUniqueArgs} args - Arguments to find a PurchaseRentHistory
     * @example
     * // Get one PurchaseRentHistory
     * const purchaseRentHistory = await prisma.purchaseRentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseRentHistoryFindUniqueArgs>(args: SelectSubset<T, PurchaseRentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseRentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseRentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PurchaseRentHistory
     * @example
     * // Get one PurchaseRentHistory
     * const purchaseRentHistory = await prisma.purchaseRentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseRentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseRentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseRentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryFindFirstArgs} args - Arguments to find a PurchaseRentHistory
     * @example
     * // Get one PurchaseRentHistory
     * const purchaseRentHistory = await prisma.purchaseRentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseRentHistoryFindFirstArgs>(args?: SelectSubset<T, PurchaseRentHistoryFindFirstArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseRentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryFindFirstOrThrowArgs} args - Arguments to find a PurchaseRentHistory
     * @example
     * // Get one PurchaseRentHistory
     * const purchaseRentHistory = await prisma.purchaseRentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseRentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseRentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseRentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseRentHistories
     * const purchaseRentHistories = await prisma.purchaseRentHistory.findMany()
     * 
     * // Get first 10 PurchaseRentHistories
     * const purchaseRentHistories = await prisma.purchaseRentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseRentHistoryWithIdOnly = await prisma.purchaseRentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseRentHistoryFindManyArgs>(args?: SelectSubset<T, PurchaseRentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseRentHistory.
     * @param {PurchaseRentHistoryCreateArgs} args - Arguments to create a PurchaseRentHistory.
     * @example
     * // Create one PurchaseRentHistory
     * const PurchaseRentHistory = await prisma.purchaseRentHistory.create({
     *   data: {
     *     // ... data to create a PurchaseRentHistory
     *   }
     * })
     * 
     */
    create<T extends PurchaseRentHistoryCreateArgs>(args: SelectSubset<T, PurchaseRentHistoryCreateArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseRentHistories.
     * @param {PurchaseRentHistoryCreateManyArgs} args - Arguments to create many PurchaseRentHistories.
     * @example
     * // Create many PurchaseRentHistories
     * const purchaseRentHistory = await prisma.purchaseRentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseRentHistoryCreateManyArgs>(args?: SelectSubset<T, PurchaseRentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseRentHistories and returns the data saved in the database.
     * @param {PurchaseRentHistoryCreateManyAndReturnArgs} args - Arguments to create many PurchaseRentHistories.
     * @example
     * // Create many PurchaseRentHistories
     * const purchaseRentHistory = await prisma.purchaseRentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseRentHistories and only return the `id`
     * const purchaseRentHistoryWithIdOnly = await prisma.purchaseRentHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseRentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseRentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseRentHistory.
     * @param {PurchaseRentHistoryDeleteArgs} args - Arguments to delete one PurchaseRentHistory.
     * @example
     * // Delete one PurchaseRentHistory
     * const PurchaseRentHistory = await prisma.purchaseRentHistory.delete({
     *   where: {
     *     // ... filter to delete one PurchaseRentHistory
     *   }
     * })
     * 
     */
    delete<T extends PurchaseRentHistoryDeleteArgs>(args: SelectSubset<T, PurchaseRentHistoryDeleteArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseRentHistory.
     * @param {PurchaseRentHistoryUpdateArgs} args - Arguments to update one PurchaseRentHistory.
     * @example
     * // Update one PurchaseRentHistory
     * const purchaseRentHistory = await prisma.purchaseRentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseRentHistoryUpdateArgs>(args: SelectSubset<T, PurchaseRentHistoryUpdateArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseRentHistories.
     * @param {PurchaseRentHistoryDeleteManyArgs} args - Arguments to filter PurchaseRentHistories to delete.
     * @example
     * // Delete a few PurchaseRentHistories
     * const { count } = await prisma.purchaseRentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseRentHistoryDeleteManyArgs>(args?: SelectSubset<T, PurchaseRentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseRentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseRentHistories
     * const purchaseRentHistory = await prisma.purchaseRentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseRentHistoryUpdateManyArgs>(args: SelectSubset<T, PurchaseRentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseRentHistories and returns the data updated in the database.
     * @param {PurchaseRentHistoryUpdateManyAndReturnArgs} args - Arguments to update many PurchaseRentHistories.
     * @example
     * // Update many PurchaseRentHistories
     * const purchaseRentHistory = await prisma.purchaseRentHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseRentHistories and only return the `id`
     * const purchaseRentHistoryWithIdOnly = await prisma.purchaseRentHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseRentHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseRentHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseRentHistory.
     * @param {PurchaseRentHistoryUpsertArgs} args - Arguments to update or create a PurchaseRentHistory.
     * @example
     * // Update or create a PurchaseRentHistory
     * const purchaseRentHistory = await prisma.purchaseRentHistory.upsert({
     *   create: {
     *     // ... data to create a PurchaseRentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseRentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseRentHistoryUpsertArgs>(args: SelectSubset<T, PurchaseRentHistoryUpsertArgs<ExtArgs>>): Prisma__PurchaseRentHistoryClient<$Result.GetResult<Prisma.$PurchaseRentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseRentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryCountArgs} args - Arguments to filter PurchaseRentHistories to count.
     * @example
     * // Count the number of PurchaseRentHistories
     * const count = await prisma.purchaseRentHistory.count({
     *   where: {
     *     // ... the filter for the PurchaseRentHistories we want to count
     *   }
     * })
    **/
    count<T extends PurchaseRentHistoryCountArgs>(
      args?: Subset<T, PurchaseRentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseRentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseRentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseRentHistoryAggregateArgs>(args: Subset<T, PurchaseRentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPurchaseRentHistoryAggregateType<T>>

    /**
     * Group by PurchaseRentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseRentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseRentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseRentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseRentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseRentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseRentHistory model
   */
  readonly fields: PurchaseRentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseRentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseRentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movieSeries<T extends MovieSeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieSeriesDefaultArgs<ExtArgs>>): Prisma__MovieSeriesClient<$Result.GetResult<Prisma.$MovieSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseRentHistory model
   */
  interface PurchaseRentHistoryFieldRefs {
    readonly id: FieldRef<"PurchaseRentHistory", 'String'>
    readonly userId: FieldRef<"PurchaseRentHistory", 'String'>
    readonly movieSeriesId: FieldRef<"PurchaseRentHistory", 'String'>
    readonly purchaseType: FieldRef<"PurchaseRentHistory", 'PriceType'>
    readonly purchaseDate: FieldRef<"PurchaseRentHistory", 'DateTime'>
    readonly paymentStatus: FieldRef<"PurchaseRentHistory", 'PaymentStatus'>
    readonly price: FieldRef<"PurchaseRentHistory", 'Float'>
    readonly transactionId: FieldRef<"PurchaseRentHistory", 'String'>
    readonly accessExpiry: FieldRef<"PurchaseRentHistory", 'DateTime'>
    readonly isEmailSent: FieldRef<"PurchaseRentHistory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseRentHistory findUnique
   */
  export type PurchaseRentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRentHistory to fetch.
     */
    where: PurchaseRentHistoryWhereUniqueInput
  }

  /**
   * PurchaseRentHistory findUniqueOrThrow
   */
  export type PurchaseRentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRentHistory to fetch.
     */
    where: PurchaseRentHistoryWhereUniqueInput
  }

  /**
   * PurchaseRentHistory findFirst
   */
  export type PurchaseRentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRentHistory to fetch.
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRentHistories to fetch.
     */
    orderBy?: PurchaseRentHistoryOrderByWithRelationInput | PurchaseRentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseRentHistories.
     */
    cursor?: PurchaseRentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseRentHistories.
     */
    distinct?: PurchaseRentHistoryScalarFieldEnum | PurchaseRentHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseRentHistory findFirstOrThrow
   */
  export type PurchaseRentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRentHistory to fetch.
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRentHistories to fetch.
     */
    orderBy?: PurchaseRentHistoryOrderByWithRelationInput | PurchaseRentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseRentHistories.
     */
    cursor?: PurchaseRentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseRentHistories.
     */
    distinct?: PurchaseRentHistoryScalarFieldEnum | PurchaseRentHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseRentHistory findMany
   */
  export type PurchaseRentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRentHistories to fetch.
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRentHistories to fetch.
     */
    orderBy?: PurchaseRentHistoryOrderByWithRelationInput | PurchaseRentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseRentHistories.
     */
    cursor?: PurchaseRentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRentHistories.
     */
    skip?: number
    distinct?: PurchaseRentHistoryScalarFieldEnum | PurchaseRentHistoryScalarFieldEnum[]
  }

  /**
   * PurchaseRentHistory create
   */
  export type PurchaseRentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseRentHistory.
     */
    data: XOR<PurchaseRentHistoryCreateInput, PurchaseRentHistoryUncheckedCreateInput>
  }

  /**
   * PurchaseRentHistory createMany
   */
  export type PurchaseRentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseRentHistories.
     */
    data: PurchaseRentHistoryCreateManyInput | PurchaseRentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseRentHistory createManyAndReturn
   */
  export type PurchaseRentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseRentHistories.
     */
    data: PurchaseRentHistoryCreateManyInput | PurchaseRentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseRentHistory update
   */
  export type PurchaseRentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseRentHistory.
     */
    data: XOR<PurchaseRentHistoryUpdateInput, PurchaseRentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PurchaseRentHistory to update.
     */
    where: PurchaseRentHistoryWhereUniqueInput
  }

  /**
   * PurchaseRentHistory updateMany
   */
  export type PurchaseRentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseRentHistories.
     */
    data: XOR<PurchaseRentHistoryUpdateManyMutationInput, PurchaseRentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseRentHistories to update
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * Limit how many PurchaseRentHistories to update.
     */
    limit?: number
  }

  /**
   * PurchaseRentHistory updateManyAndReturn
   */
  export type PurchaseRentHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseRentHistories.
     */
    data: XOR<PurchaseRentHistoryUpdateManyMutationInput, PurchaseRentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseRentHistories to update
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * Limit how many PurchaseRentHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseRentHistory upsert
   */
  export type PurchaseRentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseRentHistory to update in case it exists.
     */
    where: PurchaseRentHistoryWhereUniqueInput
    /**
     * In case the PurchaseRentHistory found by the `where` argument doesn't exist, create a new PurchaseRentHistory with this data.
     */
    create: XOR<PurchaseRentHistoryCreateInput, PurchaseRentHistoryUncheckedCreateInput>
    /**
     * In case the PurchaseRentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseRentHistoryUpdateInput, PurchaseRentHistoryUncheckedUpdateInput>
  }

  /**
   * PurchaseRentHistory delete
   */
  export type PurchaseRentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
    /**
     * Filter which PurchaseRentHistory to delete.
     */
    where: PurchaseRentHistoryWhereUniqueInput
  }

  /**
   * PurchaseRentHistory deleteMany
   */
  export type PurchaseRentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseRentHistories to delete
     */
    where?: PurchaseRentHistoryWhereInput
    /**
     * Limit how many PurchaseRentHistories to delete.
     */
    limit?: number
  }

  /**
   * PurchaseRentHistory without action
   */
  export type PurchaseRentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRentHistory
     */
    select?: PurchaseRentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRentHistory
     */
    omit?: PurchaseRentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PaymentTransaction
   */

  export type AggregatePaymentTransaction = {
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  export type PaymentTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    paymentMethod: string | null
    createdAt: Date | null
  }

  export type PaymentTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    paymentMethod: string | null
    createdAt: Date | null
  }

  export type PaymentTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    transactionId: number
    status: number
    paymentMethod: number
    createdAt: number
    _all: number
  }


  export type PaymentTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentTransactionSumAggregateInputType = {
    amount?: true
  }

  export type PaymentTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transactionId?: true
    status?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type PaymentTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transactionId?: true
    status?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type PaymentTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    transactionId?: true
    status?: true
    paymentMethod?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransaction to aggregate.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTransactions
    **/
    _count?: true | PaymentTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type GetPaymentTransactionAggregateType<T extends PaymentTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTransaction[P]>
      : GetScalarType<T[P], AggregatePaymentTransaction[P]>
  }




  export type PaymentTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithAggregationInput | PaymentTransactionOrderByWithAggregationInput[]
    by: PaymentTransactionScalarFieldEnum[] | PaymentTransactionScalarFieldEnum
    having?: PaymentTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTransactionCountAggregateInputType | true
    _avg?: PaymentTransactionAvgAggregateInputType
    _sum?: PaymentTransactionSumAggregateInputType
    _min?: PaymentTransactionMinAggregateInputType
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type PaymentTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod: string
    createdAt: Date
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  type GetPaymentTransactionGroupByPayload<T extends PaymentTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transactionId?: boolean
    status?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transactionId?: boolean
    status?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    transactionId?: boolean
    status?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    transactionId?: boolean
    status?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
  }

  export type PaymentTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "transactionId" | "status" | "paymentMethod" | "createdAt", ExtArgs["result"]["paymentTransaction"]>
  export type PaymentTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      transactionId: string
      status: $Enums.PaymentStatus
      paymentMethod: string
      createdAt: Date
    }, ExtArgs["result"]["paymentTransaction"]>
    composites: {}
  }

  type PaymentTransactionGetPayload<S extends boolean | null | undefined | PaymentTransactionDefaultArgs> = $Result.GetResult<Prisma.$PaymentTransactionPayload, S>

  type PaymentTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTransactionCountAggregateInputType | true
    }

  export interface PaymentTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTransaction'], meta: { name: 'PaymentTransaction' } }
    /**
     * Find zero or one PaymentTransaction that matches the filter.
     * @param {PaymentTransactionFindUniqueArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTransactionFindUniqueArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTransactionFindUniqueOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTransactionFindFirstArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany()
     * 
     * // Get first 10 PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTransactionFindManyArgs>(args?: SelectSubset<T, PaymentTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTransaction.
     * @param {PaymentTransactionCreateArgs} args - Arguments to create a PaymentTransaction.
     * @example
     * // Create one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.create({
     *   data: {
     *     // ... data to create a PaymentTransaction
     *   }
     * })
     * 
     */
    create<T extends PaymentTransactionCreateArgs>(args: SelectSubset<T, PaymentTransactionCreateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTransactions.
     * @param {PaymentTransactionCreateManyArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTransactionCreateManyArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTransactions and returns the data saved in the database.
     * @param {PaymentTransactionCreateManyAndReturnArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTransaction.
     * @param {PaymentTransactionDeleteArgs} args - Arguments to delete one PaymentTransaction.
     * @example
     * // Delete one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.delete({
     *   where: {
     *     // ... filter to delete one PaymentTransaction
     *   }
     * })
     * 
     */
    delete<T extends PaymentTransactionDeleteArgs>(args: SelectSubset<T, PaymentTransactionDeleteArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTransaction.
     * @param {PaymentTransactionUpdateArgs} args - Arguments to update one PaymentTransaction.
     * @example
     * // Update one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTransactionUpdateArgs>(args: SelectSubset<T, PaymentTransactionUpdateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTransactions.
     * @param {PaymentTransactionDeleteManyArgs} args - Arguments to filter PaymentTransactions to delete.
     * @example
     * // Delete a few PaymentTransactions
     * const { count } = await prisma.paymentTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTransactionDeleteManyArgs>(args?: SelectSubset<T, PaymentTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTransactionUpdateManyArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions and returns the data updated in the database.
     * @param {PaymentTransactionUpdateManyAndReturnArgs} args - Arguments to update many PaymentTransactions.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTransaction.
     * @param {PaymentTransactionUpsertArgs} args - Arguments to update or create a PaymentTransaction.
     * @example
     * // Update or create a PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.upsert({
     *   create: {
     *     // ... data to create a PaymentTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTransactionUpsertArgs>(args: SelectSubset<T, PaymentTransactionUpsertArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionCountArgs} args - Arguments to filter PaymentTransactions to count.
     * @example
     * // Count the number of PaymentTransactions
     * const count = await prisma.paymentTransaction.count({
     *   where: {
     *     // ... the filter for the PaymentTransactions we want to count
     *   }
     * })
    **/
    count<T extends PaymentTransactionCountArgs>(
      args?: Subset<T, PaymentTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentTransactionAggregateArgs>(args: Subset<T, PaymentTransactionAggregateArgs>): Prisma.PrismaPromise<GetPaymentTransactionAggregateType<T>>

    /**
     * Group by PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTransaction model
   */
  readonly fields: PaymentTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentTransaction model
   */
  interface PaymentTransactionFieldRefs {
    readonly id: FieldRef<"PaymentTransaction", 'String'>
    readonly userId: FieldRef<"PaymentTransaction", 'String'>
    readonly amount: FieldRef<"PaymentTransaction", 'Float'>
    readonly transactionId: FieldRef<"PaymentTransaction", 'String'>
    readonly status: FieldRef<"PaymentTransaction", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"PaymentTransaction", 'String'>
    readonly createdAt: FieldRef<"PaymentTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTransaction findUnique
   */
  export type PaymentTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findUniqueOrThrow
   */
  export type PaymentTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findFirst
   */
  export type PaymentTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findFirstOrThrow
   */
  export type PaymentTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findMany
   */
  export type PaymentTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransactions to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction create
   */
  export type PaymentTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTransaction.
     */
    data: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
  }

  /**
   * PaymentTransaction createMany
   */
  export type PaymentTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTransaction createManyAndReturn
   */
  export type PaymentTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction update
   */
  export type PaymentTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTransaction.
     */
    data: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
    /**
     * Choose, which PaymentTransaction to update.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction updateMany
   */
  export type PaymentTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
  }

  /**
   * PaymentTransaction updateManyAndReturn
   */
  export type PaymentTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction upsert
   */
  export type PaymentTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTransaction to update in case it exists.
     */
    where: PaymentTransactionWhereUniqueInput
    /**
     * In case the PaymentTransaction found by the `where` argument doesn't exist, create a new PaymentTransaction with this data.
     */
    create: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
    /**
     * In case the PaymentTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
  }

  /**
   * PaymentTransaction delete
   */
  export type PaymentTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter which PaymentTransaction to delete.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction deleteMany
   */
  export type PaymentTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransactions to delete
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to delete.
     */
    limit?: number
  }

  /**
   * PaymentTransaction without action
   */
  export type PaymentTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
  }


  /**
   * Model AdminAnalytics
   */

  export type AggregateAdminAnalytics = {
    _count: AdminAnalyticsCountAggregateOutputType | null
    _avg: AdminAnalyticsAvgAggregateOutputType | null
    _sum: AdminAnalyticsSumAggregateOutputType | null
    _min: AdminAnalyticsMinAggregateOutputType | null
    _max: AdminAnalyticsMaxAggregateOutputType | null
  }

  export type AdminAnalyticsAvgAggregateOutputType = {
    totalPurchases: number | null
    totalRentals: number | null
    totalRevenue: number | null
    totalReviews: number | null
    totalApprovedReviews: number | null
  }

  export type AdminAnalyticsSumAggregateOutputType = {
    totalPurchases: number | null
    totalRentals: number | null
    totalRevenue: number | null
    totalReviews: number | null
    totalApprovedReviews: number | null
  }

  export type AdminAnalyticsMinAggregateOutputType = {
    id: string | null
    date: Date | null
    totalPurchases: number | null
    totalRentals: number | null
    totalRevenue: number | null
    totalReviews: number | null
    totalApprovedReviews: number | null
  }

  export type AdminAnalyticsMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    totalPurchases: number | null
    totalRentals: number | null
    totalRevenue: number | null
    totalReviews: number | null
    totalApprovedReviews: number | null
  }

  export type AdminAnalyticsCountAggregateOutputType = {
    id: number
    date: number
    totalPurchases: number
    totalRentals: number
    totalRevenue: number
    totalReviews: number
    totalApprovedReviews: number
    _all: number
  }


  export type AdminAnalyticsAvgAggregateInputType = {
    totalPurchases?: true
    totalRentals?: true
    totalRevenue?: true
    totalReviews?: true
    totalApprovedReviews?: true
  }

  export type AdminAnalyticsSumAggregateInputType = {
    totalPurchases?: true
    totalRentals?: true
    totalRevenue?: true
    totalReviews?: true
    totalApprovedReviews?: true
  }

  export type AdminAnalyticsMinAggregateInputType = {
    id?: true
    date?: true
    totalPurchases?: true
    totalRentals?: true
    totalRevenue?: true
    totalReviews?: true
    totalApprovedReviews?: true
  }

  export type AdminAnalyticsMaxAggregateInputType = {
    id?: true
    date?: true
    totalPurchases?: true
    totalRentals?: true
    totalRevenue?: true
    totalReviews?: true
    totalApprovedReviews?: true
  }

  export type AdminAnalyticsCountAggregateInputType = {
    id?: true
    date?: true
    totalPurchases?: true
    totalRentals?: true
    totalRevenue?: true
    totalReviews?: true
    totalApprovedReviews?: true
    _all?: true
  }

  export type AdminAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAnalytics to aggregate.
     */
    where?: AdminAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAnalytics to fetch.
     */
    orderBy?: AdminAnalyticsOrderByWithRelationInput | AdminAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAnalytics
    **/
    _count?: true | AdminAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAnalyticsMaxAggregateInputType
  }

  export type GetAdminAnalyticsAggregateType<T extends AdminAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAnalytics[P]>
      : GetScalarType<T[P], AggregateAdminAnalytics[P]>
  }




  export type AdminAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAnalyticsWhereInput
    orderBy?: AdminAnalyticsOrderByWithAggregationInput | AdminAnalyticsOrderByWithAggregationInput[]
    by: AdminAnalyticsScalarFieldEnum[] | AdminAnalyticsScalarFieldEnum
    having?: AdminAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAnalyticsCountAggregateInputType | true
    _avg?: AdminAnalyticsAvgAggregateInputType
    _sum?: AdminAnalyticsSumAggregateInputType
    _min?: AdminAnalyticsMinAggregateInputType
    _max?: AdminAnalyticsMaxAggregateInputType
  }

  export type AdminAnalyticsGroupByOutputType = {
    id: string
    date: Date
    totalPurchases: number
    totalRentals: number
    totalRevenue: number
    totalReviews: number
    totalApprovedReviews: number
    _count: AdminAnalyticsCountAggregateOutputType | null
    _avg: AdminAnalyticsAvgAggregateOutputType | null
    _sum: AdminAnalyticsSumAggregateOutputType | null
    _min: AdminAnalyticsMinAggregateOutputType | null
    _max: AdminAnalyticsMaxAggregateOutputType | null
  }

  type GetAdminAnalyticsGroupByPayload<T extends AdminAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AdminAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalPurchases?: boolean
    totalRentals?: boolean
    totalRevenue?: boolean
    totalReviews?: boolean
    totalApprovedReviews?: boolean
  }, ExtArgs["result"]["adminAnalytics"]>

  export type AdminAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalPurchases?: boolean
    totalRentals?: boolean
    totalRevenue?: boolean
    totalReviews?: boolean
    totalApprovedReviews?: boolean
  }, ExtArgs["result"]["adminAnalytics"]>

  export type AdminAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    totalPurchases?: boolean
    totalRentals?: boolean
    totalRevenue?: boolean
    totalReviews?: boolean
    totalApprovedReviews?: boolean
  }, ExtArgs["result"]["adminAnalytics"]>

  export type AdminAnalyticsSelectScalar = {
    id?: boolean
    date?: boolean
    totalPurchases?: boolean
    totalRentals?: boolean
    totalRevenue?: boolean
    totalReviews?: boolean
    totalApprovedReviews?: boolean
  }

  export type AdminAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "totalPurchases" | "totalRentals" | "totalRevenue" | "totalReviews" | "totalApprovedReviews", ExtArgs["result"]["adminAnalytics"]>

  export type $AdminAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAnalytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      totalPurchases: number
      totalRentals: number
      totalRevenue: number
      totalReviews: number
      totalApprovedReviews: number
    }, ExtArgs["result"]["adminAnalytics"]>
    composites: {}
  }

  type AdminAnalyticsGetPayload<S extends boolean | null | undefined | AdminAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AdminAnalyticsPayload, S>

  type AdminAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminAnalyticsCountAggregateInputType | true
    }

  export interface AdminAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAnalytics'], meta: { name: 'AdminAnalytics' } }
    /**
     * Find zero or one AdminAnalytics that matches the filter.
     * @param {AdminAnalyticsFindUniqueArgs} args - Arguments to find a AdminAnalytics
     * @example
     * // Get one AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAnalyticsFindUniqueArgs>(args: SelectSubset<T, AdminAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a AdminAnalytics
     * @example
     * // Get one AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsFindFirstArgs} args - Arguments to find a AdminAnalytics
     * @example
     * // Get one AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAnalyticsFindFirstArgs>(args?: SelectSubset<T, AdminAnalyticsFindFirstArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsFindFirstOrThrowArgs} args - Arguments to find a AdminAnalytics
     * @example
     * // Get one AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.findMany()
     * 
     * // Get first 10 AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAnalyticsWithIdOnly = await prisma.adminAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAnalyticsFindManyArgs>(args?: SelectSubset<T, AdminAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminAnalytics.
     * @param {AdminAnalyticsCreateArgs} args - Arguments to create a AdminAnalytics.
     * @example
     * // Create one AdminAnalytics
     * const AdminAnalytics = await prisma.adminAnalytics.create({
     *   data: {
     *     // ... data to create a AdminAnalytics
     *   }
     * })
     * 
     */
    create<T extends AdminAnalyticsCreateArgs>(args: SelectSubset<T, AdminAnalyticsCreateArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminAnalytics.
     * @param {AdminAnalyticsCreateManyArgs} args - Arguments to create many AdminAnalytics.
     * @example
     * // Create many AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAnalyticsCreateManyArgs>(args?: SelectSubset<T, AdminAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAnalytics and returns the data saved in the database.
     * @param {AdminAnalyticsCreateManyAndReturnArgs} args - Arguments to create many AdminAnalytics.
     * @example
     * // Create many AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAnalytics and only return the `id`
     * const adminAnalyticsWithIdOnly = await prisma.adminAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminAnalytics.
     * @param {AdminAnalyticsDeleteArgs} args - Arguments to delete one AdminAnalytics.
     * @example
     * // Delete one AdminAnalytics
     * const AdminAnalytics = await prisma.adminAnalytics.delete({
     *   where: {
     *     // ... filter to delete one AdminAnalytics
     *   }
     * })
     * 
     */
    delete<T extends AdminAnalyticsDeleteArgs>(args: SelectSubset<T, AdminAnalyticsDeleteArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminAnalytics.
     * @param {AdminAnalyticsUpdateArgs} args - Arguments to update one AdminAnalytics.
     * @example
     * // Update one AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAnalyticsUpdateArgs>(args: SelectSubset<T, AdminAnalyticsUpdateArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminAnalytics.
     * @param {AdminAnalyticsDeleteManyArgs} args - Arguments to filter AdminAnalytics to delete.
     * @example
     * // Delete a few AdminAnalytics
     * const { count } = await prisma.adminAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAnalyticsDeleteManyArgs>(args?: SelectSubset<T, AdminAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAnalyticsUpdateManyArgs>(args: SelectSubset<T, AdminAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAnalytics and returns the data updated in the database.
     * @param {AdminAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many AdminAnalytics.
     * @example
     * // Update many AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminAnalytics and only return the `id`
     * const adminAnalyticsWithIdOnly = await prisma.adminAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminAnalytics.
     * @param {AdminAnalyticsUpsertArgs} args - Arguments to update or create a AdminAnalytics.
     * @example
     * // Update or create a AdminAnalytics
     * const adminAnalytics = await prisma.adminAnalytics.upsert({
     *   create: {
     *     // ... data to create a AdminAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends AdminAnalyticsUpsertArgs>(args: SelectSubset<T, AdminAnalyticsUpsertArgs<ExtArgs>>): Prisma__AdminAnalyticsClient<$Result.GetResult<Prisma.$AdminAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsCountArgs} args - Arguments to filter AdminAnalytics to count.
     * @example
     * // Count the number of AdminAnalytics
     * const count = await prisma.adminAnalytics.count({
     *   where: {
     *     // ... the filter for the AdminAnalytics we want to count
     *   }
     * })
    **/
    count<T extends AdminAnalyticsCountArgs>(
      args?: Subset<T, AdminAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAnalyticsAggregateArgs>(args: Subset<T, AdminAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAdminAnalyticsAggregateType<T>>

    /**
     * Group by AdminAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AdminAnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAnalytics model
   */
  readonly fields: AdminAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminAnalytics model
   */
  interface AdminAnalyticsFieldRefs {
    readonly id: FieldRef<"AdminAnalytics", 'String'>
    readonly date: FieldRef<"AdminAnalytics", 'DateTime'>
    readonly totalPurchases: FieldRef<"AdminAnalytics", 'Int'>
    readonly totalRentals: FieldRef<"AdminAnalytics", 'Int'>
    readonly totalRevenue: FieldRef<"AdminAnalytics", 'Float'>
    readonly totalReviews: FieldRef<"AdminAnalytics", 'Int'>
    readonly totalApprovedReviews: FieldRef<"AdminAnalytics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AdminAnalytics findUnique
   */
  export type AdminAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which AdminAnalytics to fetch.
     */
    where: AdminAnalyticsWhereUniqueInput
  }

  /**
   * AdminAnalytics findUniqueOrThrow
   */
  export type AdminAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which AdminAnalytics to fetch.
     */
    where: AdminAnalyticsWhereUniqueInput
  }

  /**
   * AdminAnalytics findFirst
   */
  export type AdminAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which AdminAnalytics to fetch.
     */
    where?: AdminAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAnalytics to fetch.
     */
    orderBy?: AdminAnalyticsOrderByWithRelationInput | AdminAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAnalytics.
     */
    cursor?: AdminAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAnalytics.
     */
    distinct?: AdminAnalyticsScalarFieldEnum | AdminAnalyticsScalarFieldEnum[]
  }

  /**
   * AdminAnalytics findFirstOrThrow
   */
  export type AdminAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which AdminAnalytics to fetch.
     */
    where?: AdminAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAnalytics to fetch.
     */
    orderBy?: AdminAnalyticsOrderByWithRelationInput | AdminAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAnalytics.
     */
    cursor?: AdminAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAnalytics.
     */
    distinct?: AdminAnalyticsScalarFieldEnum | AdminAnalyticsScalarFieldEnum[]
  }

  /**
   * AdminAnalytics findMany
   */
  export type AdminAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which AdminAnalytics to fetch.
     */
    where?: AdminAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAnalytics to fetch.
     */
    orderBy?: AdminAnalyticsOrderByWithRelationInput | AdminAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAnalytics.
     */
    cursor?: AdminAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAnalytics.
     */
    skip?: number
    distinct?: AdminAnalyticsScalarFieldEnum | AdminAnalyticsScalarFieldEnum[]
  }

  /**
   * AdminAnalytics create
   */
  export type AdminAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminAnalytics.
     */
    data?: XOR<AdminAnalyticsCreateInput, AdminAnalyticsUncheckedCreateInput>
  }

  /**
   * AdminAnalytics createMany
   */
  export type AdminAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAnalytics.
     */
    data: AdminAnalyticsCreateManyInput | AdminAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAnalytics createManyAndReturn
   */
  export type AdminAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many AdminAnalytics.
     */
    data: AdminAnalyticsCreateManyInput | AdminAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminAnalytics update
   */
  export type AdminAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminAnalytics.
     */
    data: XOR<AdminAnalyticsUpdateInput, AdminAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which AdminAnalytics to update.
     */
    where: AdminAnalyticsWhereUniqueInput
  }

  /**
   * AdminAnalytics updateMany
   */
  export type AdminAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAnalytics.
     */
    data: XOR<AdminAnalyticsUpdateManyMutationInput, AdminAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which AdminAnalytics to update
     */
    where?: AdminAnalyticsWhereInput
    /**
     * Limit how many AdminAnalytics to update.
     */
    limit?: number
  }

  /**
   * AdminAnalytics updateManyAndReturn
   */
  export type AdminAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update AdminAnalytics.
     */
    data: XOR<AdminAnalyticsUpdateManyMutationInput, AdminAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which AdminAnalytics to update
     */
    where?: AdminAnalyticsWhereInput
    /**
     * Limit how many AdminAnalytics to update.
     */
    limit?: number
  }

  /**
   * AdminAnalytics upsert
   */
  export type AdminAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminAnalytics to update in case it exists.
     */
    where: AdminAnalyticsWhereUniqueInput
    /**
     * In case the AdminAnalytics found by the `where` argument doesn't exist, create a new AdminAnalytics with this data.
     */
    create: XOR<AdminAnalyticsCreateInput, AdminAnalyticsUncheckedCreateInput>
    /**
     * In case the AdminAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAnalyticsUpdateInput, AdminAnalyticsUncheckedUpdateInput>
  }

  /**
   * AdminAnalytics delete
   */
  export type AdminAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
    /**
     * Filter which AdminAnalytics to delete.
     */
    where: AdminAnalyticsWhereUniqueInput
  }

  /**
   * AdminAnalytics deleteMany
   */
  export type AdminAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAnalytics to delete
     */
    where?: AdminAnalyticsWhereInput
    /**
     * Limit how many AdminAnalytics to delete.
     */
    limit?: number
  }

  /**
   * AdminAnalytics without action
   */
  export type AdminAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAnalytics
     */
    select?: AdminAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAnalytics
     */
    omit?: AdminAnalyticsOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    profilePhoto: 'profilePhoto',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SecurityDetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isEmailVerified: 'isEmailVerified',
    otpToken: 'otpToken',
    emailVerifyAttemptNo: 'emailVerifyAttemptNo',
    failedResetPassAttemptNo: 'failedResetPassAttemptNo',
    failedOTPAttemptNo: 'failedOTPAttemptNo',
    lastAttemptTime: 'lastAttemptTime',
    failedLoginAttemptNo: 'failedLoginAttemptNo',
    lastLoginTime: 'lastLoginTime',
    suspendUntil: 'suspendUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SecurityDetailsScalarFieldEnum = (typeof SecurityDetailsScalarFieldEnum)[keyof typeof SecurityDetailsScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    machineId: 'machineId',
    securityDetailsId: 'securityDetailsId',
    type: 'type',
    browser: 'browser',
    name: 'name',
    os: 'os',
    ip: 'ip',
    userAgent: 'userAgent',
    location: 'location',
    isActive: 'isActive',
    isPreferred: 'isPreferred',
    isInfected: 'isInfected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const MovieSeriesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    posterUrl: 'posterUrl',
    description: 'description',
    releaseYear: 'releaseYear',
    genre: 'genre',
    director: 'director',
    cast: 'cast',
    streamingPlatform: 'streamingPlatform',
    accessLink: 'accessLink',
    rating: 'rating',
    viewCount: 'viewCount',
    markByAdmin: 'markByAdmin',
    price: 'price',
    priceType: 'priceType',
    discount: 'discount',
    discountType: 'discountType',
    discountExpiry: 'discountExpiry',
    isActive: 'isActive',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieSeriesScalarFieldEnum = (typeof MovieSeriesScalarFieldEnum)[keyof typeof MovieSeriesScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    movieSeriesId: 'movieSeriesId',
    userId: 'userId',
    rating: 'rating',
    writtenReview: 'writtenReview',
    isSpoiler: 'isSpoiler',
    tags: 'tags',
    likesCount: 'likesCount',
    commentCount: 'commentCount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    userId: 'userId',
    content: 'content',
    replyTo: 'replyTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const MovieLikeScalarFieldEnum: {
    id: 'id',
    movieSeriesId: 'movieSeriesId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isLike: 'isLike'
  };

  export type MovieLikeScalarFieldEnum = (typeof MovieLikeScalarFieldEnum)[keyof typeof MovieLikeScalarFieldEnum]


  export const ReviewLikeScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isLike: 'isLike'
  };

  export type ReviewLikeScalarFieldEnum = (typeof ReviewLikeScalarFieldEnum)[keyof typeof ReviewLikeScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieSeriesId: 'movieSeriesId',
    addedAt: 'addedAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const PurchaseRentHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieSeriesId: 'movieSeriesId',
    purchaseType: 'purchaseType',
    purchaseDate: 'purchaseDate',
    paymentStatus: 'paymentStatus',
    price: 'price',
    transactionId: 'transactionId',
    accessExpiry: 'accessExpiry',
    isEmailSent: 'isEmailSent'
  };

  export type PurchaseRentHistoryScalarFieldEnum = (typeof PurchaseRentHistoryScalarFieldEnum)[keyof typeof PurchaseRentHistoryScalarFieldEnum]


  export const PaymentTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    transactionId: 'transactionId',
    status: 'status',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt'
  };

  export type PaymentTransactionScalarFieldEnum = (typeof PaymentTransactionScalarFieldEnum)[keyof typeof PaymentTransactionScalarFieldEnum]


  export const AdminAnalyticsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    totalPurchases: 'totalPurchases',
    totalRentals: 'totalRentals',
    totalRevenue: 'totalRevenue',
    totalReviews: 'totalReviews',
    totalApprovedReviews: 'totalApprovedReviews'
  };

  export type AdminAnalyticsScalarFieldEnum = (typeof AdminAnalyticsScalarFieldEnum)[keyof typeof AdminAnalyticsScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'Genre[]'
   */
  export type ListEnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre[]'>
    


  /**
   * Reference to a field of type 'Genre'
   */
  export type EnumGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genre'>
    


  /**
   * Reference to a field of type 'StreamingPlatform[]'
   */
  export type ListEnumStreamingPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamingPlatform[]'>
    


  /**
   * Reference to a field of type 'StreamingPlatform'
   */
  export type EnumStreamingPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamingPlatform'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PriceType'
   */
  export type EnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType'>
    


  /**
   * Reference to a field of type 'PriceType[]'
   */
  export type ListEnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType[]'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    


  /**
   * Reference to a field of type 'DiscountType[]'
   */
  export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    profilePhoto?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    securityDetails?: XOR<SecurityDetailsNullableScalarRelationFilter, SecurityDetailsWhereInput> | null
    review?: ReviewListRelationFilter
    comment?: CommentListRelationFilter
    watchlist?: WatchlistListRelationFilter
    purchaseRentHistory?: PurchaseRentHistoryListRelationFilter
    paymentTransaction?: PaymentTransactionListRelationFilter
    notification?: NotificationListRelationFilter
    movieLike?: MovieLikeListRelationFilter
    reviewLike?: ReviewLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    securityDetails?: SecurityDetailsOrderByWithRelationInput
    review?: ReviewOrderByRelationAggregateInput
    comment?: CommentOrderByRelationAggregateInput
    watchlist?: WatchlistOrderByRelationAggregateInput
    purchaseRentHistory?: PurchaseRentHistoryOrderByRelationAggregateInput
    paymentTransaction?: PaymentTransactionOrderByRelationAggregateInput
    notification?: NotificationOrderByRelationAggregateInput
    movieLike?: MovieLikeOrderByRelationAggregateInput
    reviewLike?: ReviewLikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profilePhoto?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    securityDetails?: XOR<SecurityDetailsNullableScalarRelationFilter, SecurityDetailsWhereInput> | null
    review?: ReviewListRelationFilter
    comment?: CommentListRelationFilter
    watchlist?: WatchlistListRelationFilter
    purchaseRentHistory?: PurchaseRentHistoryListRelationFilter
    paymentTransaction?: PaymentTransactionListRelationFilter
    notification?: NotificationListRelationFilter
    movieLike?: MovieLikeListRelationFilter
    reviewLike?: ReviewLikeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SecurityDetailsWhereInput = {
    AND?: SecurityDetailsWhereInput | SecurityDetailsWhereInput[]
    OR?: SecurityDetailsWhereInput[]
    NOT?: SecurityDetailsWhereInput | SecurityDetailsWhereInput[]
    id?: StringFilter<"SecurityDetails"> | string
    userId?: StringFilter<"SecurityDetails"> | string
    isEmailVerified?: BoolFilter<"SecurityDetails"> | boolean
    otpToken?: StringNullableFilter<"SecurityDetails"> | string | null
    emailVerifyAttemptNo?: IntFilter<"SecurityDetails"> | number
    failedResetPassAttemptNo?: IntFilter<"SecurityDetails"> | number
    failedOTPAttemptNo?: IntFilter<"SecurityDetails"> | number
    lastAttemptTime?: DateTimeFilter<"SecurityDetails"> | Date | string
    failedLoginAttemptNo?: IntFilter<"SecurityDetails"> | number
    lastLoginTime?: DateTimeFilter<"SecurityDetails"> | Date | string
    suspendUntil?: DateTimeNullableFilter<"SecurityDetails"> | Date | string | null
    createdAt?: DateTimeFilter<"SecurityDetails"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    device?: DeviceListRelationFilter
  }

  export type SecurityDetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isEmailVerified?: SortOrder
    otpToken?: SortOrderInput | SortOrder
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    lastAttemptTime?: SortOrder
    failedLoginAttemptNo?: SortOrder
    lastLoginTime?: SortOrder
    suspendUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    device?: DeviceOrderByRelationAggregateInput
  }

  export type SecurityDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SecurityDetailsWhereInput | SecurityDetailsWhereInput[]
    OR?: SecurityDetailsWhereInput[]
    NOT?: SecurityDetailsWhereInput | SecurityDetailsWhereInput[]
    isEmailVerified?: BoolFilter<"SecurityDetails"> | boolean
    otpToken?: StringNullableFilter<"SecurityDetails"> | string | null
    emailVerifyAttemptNo?: IntFilter<"SecurityDetails"> | number
    failedResetPassAttemptNo?: IntFilter<"SecurityDetails"> | number
    failedOTPAttemptNo?: IntFilter<"SecurityDetails"> | number
    lastAttemptTime?: DateTimeFilter<"SecurityDetails"> | Date | string
    failedLoginAttemptNo?: IntFilter<"SecurityDetails"> | number
    lastLoginTime?: DateTimeFilter<"SecurityDetails"> | Date | string
    suspendUntil?: DateTimeNullableFilter<"SecurityDetails"> | Date | string | null
    createdAt?: DateTimeFilter<"SecurityDetails"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    device?: DeviceListRelationFilter
  }, "id" | "userId">

  export type SecurityDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isEmailVerified?: SortOrder
    otpToken?: SortOrderInput | SortOrder
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    lastAttemptTime?: SortOrder
    failedLoginAttemptNo?: SortOrder
    lastLoginTime?: SortOrder
    suspendUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SecurityDetailsCountOrderByAggregateInput
    _avg?: SecurityDetailsAvgOrderByAggregateInput
    _max?: SecurityDetailsMaxOrderByAggregateInput
    _min?: SecurityDetailsMinOrderByAggregateInput
    _sum?: SecurityDetailsSumOrderByAggregateInput
  }

  export type SecurityDetailsScalarWhereWithAggregatesInput = {
    AND?: SecurityDetailsScalarWhereWithAggregatesInput | SecurityDetailsScalarWhereWithAggregatesInput[]
    OR?: SecurityDetailsScalarWhereWithAggregatesInput[]
    NOT?: SecurityDetailsScalarWhereWithAggregatesInput | SecurityDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityDetails"> | string
    userId?: StringWithAggregatesFilter<"SecurityDetails"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"SecurityDetails"> | boolean
    otpToken?: StringNullableWithAggregatesFilter<"SecurityDetails"> | string | null
    emailVerifyAttemptNo?: IntWithAggregatesFilter<"SecurityDetails"> | number
    failedResetPassAttemptNo?: IntWithAggregatesFilter<"SecurityDetails"> | number
    failedOTPAttemptNo?: IntWithAggregatesFilter<"SecurityDetails"> | number
    lastAttemptTime?: DateTimeWithAggregatesFilter<"SecurityDetails"> | Date | string
    failedLoginAttemptNo?: IntWithAggregatesFilter<"SecurityDetails"> | number
    lastLoginTime?: DateTimeWithAggregatesFilter<"SecurityDetails"> | Date | string
    suspendUntil?: DateTimeNullableWithAggregatesFilter<"SecurityDetails"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SecurityDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SecurityDetails"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    machineId?: StringFilter<"Device"> | string
    securityDetailsId?: StringFilter<"Device"> | string
    type?: EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType
    browser?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    os?: StringFilter<"Device"> | string
    ip?: StringNullableFilter<"Device"> | string | null
    userAgent?: StringFilter<"Device"> | string
    location?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    isPreferred?: BoolFilter<"Device"> | boolean
    isInfected?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    securityDetails?: XOR<SecurityDetailsScalarRelationFilter, SecurityDetailsWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    machineId?: SortOrder
    securityDetailsId?: SortOrder
    type?: SortOrder
    browser?: SortOrder
    name?: SortOrder
    os?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    isInfected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    securityDetails?: SecurityDetailsOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    machineId?: StringFilter<"Device"> | string
    securityDetailsId?: StringFilter<"Device"> | string
    type?: EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType
    browser?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    os?: StringFilter<"Device"> | string
    ip?: StringNullableFilter<"Device"> | string | null
    userAgent?: StringFilter<"Device"> | string
    location?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    isPreferred?: BoolFilter<"Device"> | boolean
    isInfected?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    securityDetails?: XOR<SecurityDetailsScalarRelationFilter, SecurityDetailsWhereInput>
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    machineId?: SortOrder
    securityDetailsId?: SortOrder
    type?: SortOrder
    browser?: SortOrder
    name?: SortOrder
    os?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    isInfected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    machineId?: StringWithAggregatesFilter<"Device"> | string
    securityDetailsId?: StringWithAggregatesFilter<"Device"> | string
    type?: EnumDeviceTypeWithAggregatesFilter<"Device"> | $Enums.DeviceType
    browser?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    os?: StringWithAggregatesFilter<"Device"> | string
    ip?: StringNullableWithAggregatesFilter<"Device"> | string | null
    userAgent?: StringWithAggregatesFilter<"Device"> | string
    location?: StringWithAggregatesFilter<"Device"> | string
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    isPreferred?: BoolWithAggregatesFilter<"Device"> | boolean
    isInfected?: BoolWithAggregatesFilter<"Device"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type MovieSeriesWhereInput = {
    AND?: MovieSeriesWhereInput | MovieSeriesWhereInput[]
    OR?: MovieSeriesWhereInput[]
    NOT?: MovieSeriesWhereInput | MovieSeriesWhereInput[]
    id?: StringFilter<"MovieSeries"> | string
    title?: StringFilter<"MovieSeries"> | string
    posterUrl?: StringFilter<"MovieSeries"> | string
    description?: StringFilter<"MovieSeries"> | string
    releaseYear?: IntFilter<"MovieSeries"> | number
    genre?: EnumGenreNullableListFilter<"MovieSeries">
    director?: StringNullableListFilter<"MovieSeries">
    cast?: StringNullableListFilter<"MovieSeries">
    streamingPlatform?: EnumStreamingPlatformNullableListFilter<"MovieSeries">
    accessLink?: StringNullableListFilter<"MovieSeries">
    rating?: FloatFilter<"MovieSeries"> | number
    viewCount?: IntFilter<"MovieSeries"> | number
    markByAdmin?: BoolFilter<"MovieSeries"> | boolean
    price?: FloatFilter<"MovieSeries"> | number
    priceType?: EnumPriceTypeFilter<"MovieSeries"> | $Enums.PriceType
    discount?: FloatNullableFilter<"MovieSeries"> | number | null
    discountType?: EnumDiscountTypeNullableFilter<"MovieSeries"> | $Enums.DiscountType | null
    discountExpiry?: DateTimeNullableFilter<"MovieSeries"> | Date | string | null
    isActive?: BoolFilter<"MovieSeries"> | boolean
    isDeleted?: BoolFilter<"MovieSeries"> | boolean
    createdAt?: DateTimeFilter<"MovieSeries"> | Date | string
    updatedAt?: DateTimeFilter<"MovieSeries"> | Date | string
    reviews?: ReviewListRelationFilter
    watchlist?: WatchlistListRelationFilter
    purchaseRentHistory?: PurchaseRentHistoryListRelationFilter
    movieLike?: MovieLikeListRelationFilter
  }

  export type MovieSeriesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    posterUrl?: SortOrder
    description?: SortOrder
    releaseYear?: SortOrder
    genre?: SortOrder
    director?: SortOrder
    cast?: SortOrder
    streamingPlatform?: SortOrder
    accessLink?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    markByAdmin?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    discount?: SortOrderInput | SortOrder
    discountType?: SortOrderInput | SortOrder
    discountExpiry?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    watchlist?: WatchlistOrderByRelationAggregateInput
    purchaseRentHistory?: PurchaseRentHistoryOrderByRelationAggregateInput
    movieLike?: MovieLikeOrderByRelationAggregateInput
  }

  export type MovieSeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: MovieSeriesWhereInput | MovieSeriesWhereInput[]
    OR?: MovieSeriesWhereInput[]
    NOT?: MovieSeriesWhereInput | MovieSeriesWhereInput[]
    posterUrl?: StringFilter<"MovieSeries"> | string
    description?: StringFilter<"MovieSeries"> | string
    releaseYear?: IntFilter<"MovieSeries"> | number
    genre?: EnumGenreNullableListFilter<"MovieSeries">
    director?: StringNullableListFilter<"MovieSeries">
    cast?: StringNullableListFilter<"MovieSeries">
    streamingPlatform?: EnumStreamingPlatformNullableListFilter<"MovieSeries">
    accessLink?: StringNullableListFilter<"MovieSeries">
    rating?: FloatFilter<"MovieSeries"> | number
    viewCount?: IntFilter<"MovieSeries"> | number
    markByAdmin?: BoolFilter<"MovieSeries"> | boolean
    price?: FloatFilter<"MovieSeries"> | number
    priceType?: EnumPriceTypeFilter<"MovieSeries"> | $Enums.PriceType
    discount?: FloatNullableFilter<"MovieSeries"> | number | null
    discountType?: EnumDiscountTypeNullableFilter<"MovieSeries"> | $Enums.DiscountType | null
    discountExpiry?: DateTimeNullableFilter<"MovieSeries"> | Date | string | null
    isActive?: BoolFilter<"MovieSeries"> | boolean
    isDeleted?: BoolFilter<"MovieSeries"> | boolean
    createdAt?: DateTimeFilter<"MovieSeries"> | Date | string
    updatedAt?: DateTimeFilter<"MovieSeries"> | Date | string
    reviews?: ReviewListRelationFilter
    watchlist?: WatchlistListRelationFilter
    purchaseRentHistory?: PurchaseRentHistoryListRelationFilter
    movieLike?: MovieLikeListRelationFilter
  }, "id" | "title">

  export type MovieSeriesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    posterUrl?: SortOrder
    description?: SortOrder
    releaseYear?: SortOrder
    genre?: SortOrder
    director?: SortOrder
    cast?: SortOrder
    streamingPlatform?: SortOrder
    accessLink?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    markByAdmin?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    discount?: SortOrderInput | SortOrder
    discountType?: SortOrderInput | SortOrder
    discountExpiry?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieSeriesCountOrderByAggregateInput
    _avg?: MovieSeriesAvgOrderByAggregateInput
    _max?: MovieSeriesMaxOrderByAggregateInput
    _min?: MovieSeriesMinOrderByAggregateInput
    _sum?: MovieSeriesSumOrderByAggregateInput
  }

  export type MovieSeriesScalarWhereWithAggregatesInput = {
    AND?: MovieSeriesScalarWhereWithAggregatesInput | MovieSeriesScalarWhereWithAggregatesInput[]
    OR?: MovieSeriesScalarWhereWithAggregatesInput[]
    NOT?: MovieSeriesScalarWhereWithAggregatesInput | MovieSeriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovieSeries"> | string
    title?: StringWithAggregatesFilter<"MovieSeries"> | string
    posterUrl?: StringWithAggregatesFilter<"MovieSeries"> | string
    description?: StringWithAggregatesFilter<"MovieSeries"> | string
    releaseYear?: IntWithAggregatesFilter<"MovieSeries"> | number
    genre?: EnumGenreNullableListFilter<"MovieSeries">
    director?: StringNullableListFilter<"MovieSeries">
    cast?: StringNullableListFilter<"MovieSeries">
    streamingPlatform?: EnumStreamingPlatformNullableListFilter<"MovieSeries">
    accessLink?: StringNullableListFilter<"MovieSeries">
    rating?: FloatWithAggregatesFilter<"MovieSeries"> | number
    viewCount?: IntWithAggregatesFilter<"MovieSeries"> | number
    markByAdmin?: BoolWithAggregatesFilter<"MovieSeries"> | boolean
    price?: FloatWithAggregatesFilter<"MovieSeries"> | number
    priceType?: EnumPriceTypeWithAggregatesFilter<"MovieSeries"> | $Enums.PriceType
    discount?: FloatNullableWithAggregatesFilter<"MovieSeries"> | number | null
    discountType?: EnumDiscountTypeNullableWithAggregatesFilter<"MovieSeries"> | $Enums.DiscountType | null
    discountExpiry?: DateTimeNullableWithAggregatesFilter<"MovieSeries"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"MovieSeries"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"MovieSeries"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MovieSeries"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MovieSeries"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    movieSeriesId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    writtenReview?: StringFilter<"Review"> | string
    isSpoiler?: BoolFilter<"Review"> | boolean
    tags?: StringNullableListFilter<"Review">
    likesCount?: IntFilter<"Review"> | number
    commentCount?: IntFilter<"Review"> | number
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: CommentListRelationFilter
    reviewLike?: ReviewLikeListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    writtenReview?: SortOrder
    isSpoiler?: SortOrder
    tags?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieSeries?: MovieSeriesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByRelationAggregateInput
    reviewLike?: ReviewLikeOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    movieSeriesId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    writtenReview?: StringFilter<"Review"> | string
    isSpoiler?: BoolFilter<"Review"> | boolean
    tags?: StringNullableListFilter<"Review">
    likesCount?: IntFilter<"Review"> | number
    commentCount?: IntFilter<"Review"> | number
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: CommentListRelationFilter
    reviewLike?: ReviewLikeListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    writtenReview?: SortOrder
    isSpoiler?: SortOrder
    tags?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    movieSeriesId?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    writtenReview?: StringWithAggregatesFilter<"Review"> | string
    isSpoiler?: BoolWithAggregatesFilter<"Review"> | boolean
    tags?: StringNullableListFilter<"Review">
    likesCount?: IntWithAggregatesFilter<"Review"> | number
    commentCount?: IntWithAggregatesFilter<"Review"> | number
    status?: EnumReviewStatusWithAggregatesFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    reviewId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    replyTo?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    replyTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    review?: ReviewOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    reviewId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    replyTo?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    replyTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    reviewId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    replyTo?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type MovieLikeWhereInput = {
    AND?: MovieLikeWhereInput | MovieLikeWhereInput[]
    OR?: MovieLikeWhereInput[]
    NOT?: MovieLikeWhereInput | MovieLikeWhereInput[]
    id?: StringFilter<"MovieLike"> | string
    movieSeriesId?: StringFilter<"MovieLike"> | string
    userId?: StringFilter<"MovieLike"> | string
    createdAt?: DateTimeFilter<"MovieLike"> | Date | string
    updatedAt?: DateTimeFilter<"MovieLike"> | Date | string
    isLike?: BoolFilter<"MovieLike"> | boolean
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MovieLikeOrderByWithRelationInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
    movieSeries?: MovieSeriesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MovieLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieLikeWhereInput | MovieLikeWhereInput[]
    OR?: MovieLikeWhereInput[]
    NOT?: MovieLikeWhereInput | MovieLikeWhereInput[]
    movieSeriesId?: StringFilter<"MovieLike"> | string
    userId?: StringFilter<"MovieLike"> | string
    createdAt?: DateTimeFilter<"MovieLike"> | Date | string
    updatedAt?: DateTimeFilter<"MovieLike"> | Date | string
    isLike?: BoolFilter<"MovieLike"> | boolean
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MovieLikeOrderByWithAggregationInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
    _count?: MovieLikeCountOrderByAggregateInput
    _max?: MovieLikeMaxOrderByAggregateInput
    _min?: MovieLikeMinOrderByAggregateInput
  }

  export type MovieLikeScalarWhereWithAggregatesInput = {
    AND?: MovieLikeScalarWhereWithAggregatesInput | MovieLikeScalarWhereWithAggregatesInput[]
    OR?: MovieLikeScalarWhereWithAggregatesInput[]
    NOT?: MovieLikeScalarWhereWithAggregatesInput | MovieLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovieLike"> | string
    movieSeriesId?: StringWithAggregatesFilter<"MovieLike"> | string
    userId?: StringWithAggregatesFilter<"MovieLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MovieLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MovieLike"> | Date | string
    isLike?: BoolWithAggregatesFilter<"MovieLike"> | boolean
  }

  export type ReviewLikeWhereInput = {
    AND?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    OR?: ReviewLikeWhereInput[]
    NOT?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    id?: StringFilter<"ReviewLike"> | string
    reviewId?: StringFilter<"ReviewLike"> | string
    userId?: StringFilter<"ReviewLike"> | string
    createdAt?: DateTimeFilter<"ReviewLike"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewLike"> | Date | string
    isLike?: BoolFilter<"ReviewLike"> | boolean
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewLikeOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
    review?: ReviewOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    OR?: ReviewLikeWhereInput[]
    NOT?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    reviewId?: StringFilter<"ReviewLike"> | string
    userId?: StringFilter<"ReviewLike"> | string
    createdAt?: DateTimeFilter<"ReviewLike"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewLike"> | Date | string
    isLike?: BoolFilter<"ReviewLike"> | boolean
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewLikeOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
    _count?: ReviewLikeCountOrderByAggregateInput
    _max?: ReviewLikeMaxOrderByAggregateInput
    _min?: ReviewLikeMinOrderByAggregateInput
  }

  export type ReviewLikeScalarWhereWithAggregatesInput = {
    AND?: ReviewLikeScalarWhereWithAggregatesInput | ReviewLikeScalarWhereWithAggregatesInput[]
    OR?: ReviewLikeScalarWhereWithAggregatesInput[]
    NOT?: ReviewLikeScalarWhereWithAggregatesInput | ReviewLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewLike"> | string
    reviewId?: StringWithAggregatesFilter<"ReviewLike"> | string
    userId?: StringWithAggregatesFilter<"ReviewLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewLike"> | Date | string
    isLike?: BoolWithAggregatesFilter<"ReviewLike"> | boolean
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    movieSeriesId?: StringFilter<"Watchlist"> | string
    addedAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    addedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movieSeries?: MovieSeriesOrderByWithRelationInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    userId?: StringFilter<"Watchlist"> | string
    movieSeriesId?: StringFilter<"Watchlist"> | string
    addedAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    addedAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    userId?: StringWithAggregatesFilter<"Watchlist"> | string
    movieSeriesId?: StringWithAggregatesFilter<"Watchlist"> | string
    addedAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type PurchaseRentHistoryWhereInput = {
    AND?: PurchaseRentHistoryWhereInput | PurchaseRentHistoryWhereInput[]
    OR?: PurchaseRentHistoryWhereInput[]
    NOT?: PurchaseRentHistoryWhereInput | PurchaseRentHistoryWhereInput[]
    id?: StringFilter<"PurchaseRentHistory"> | string
    userId?: StringFilter<"PurchaseRentHistory"> | string
    movieSeriesId?: StringFilter<"PurchaseRentHistory"> | string
    purchaseType?: EnumPriceTypeFilter<"PurchaseRentHistory"> | $Enums.PriceType
    purchaseDate?: DateTimeFilter<"PurchaseRentHistory"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"PurchaseRentHistory"> | $Enums.PaymentStatus
    price?: FloatFilter<"PurchaseRentHistory"> | number
    transactionId?: StringFilter<"PurchaseRentHistory"> | string
    accessExpiry?: DateTimeNullableFilter<"PurchaseRentHistory"> | Date | string | null
    isEmailSent?: BoolFilter<"PurchaseRentHistory"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
  }

  export type PurchaseRentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    purchaseType?: SortOrder
    purchaseDate?: SortOrder
    paymentStatus?: SortOrder
    price?: SortOrder
    transactionId?: SortOrder
    accessExpiry?: SortOrderInput | SortOrder
    isEmailSent?: SortOrder
    user?: UserOrderByWithRelationInput
    movieSeries?: MovieSeriesOrderByWithRelationInput
  }

  export type PurchaseRentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseRentHistoryWhereInput | PurchaseRentHistoryWhereInput[]
    OR?: PurchaseRentHistoryWhereInput[]
    NOT?: PurchaseRentHistoryWhereInput | PurchaseRentHistoryWhereInput[]
    userId?: StringFilter<"PurchaseRentHistory"> | string
    movieSeriesId?: StringFilter<"PurchaseRentHistory"> | string
    purchaseType?: EnumPriceTypeFilter<"PurchaseRentHistory"> | $Enums.PriceType
    purchaseDate?: DateTimeFilter<"PurchaseRentHistory"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"PurchaseRentHistory"> | $Enums.PaymentStatus
    price?: FloatFilter<"PurchaseRentHistory"> | number
    transactionId?: StringFilter<"PurchaseRentHistory"> | string
    accessExpiry?: DateTimeNullableFilter<"PurchaseRentHistory"> | Date | string | null
    isEmailSent?: BoolFilter<"PurchaseRentHistory"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movieSeries?: XOR<MovieSeriesScalarRelationFilter, MovieSeriesWhereInput>
  }, "id">

  export type PurchaseRentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    purchaseType?: SortOrder
    purchaseDate?: SortOrder
    paymentStatus?: SortOrder
    price?: SortOrder
    transactionId?: SortOrder
    accessExpiry?: SortOrderInput | SortOrder
    isEmailSent?: SortOrder
    _count?: PurchaseRentHistoryCountOrderByAggregateInput
    _avg?: PurchaseRentHistoryAvgOrderByAggregateInput
    _max?: PurchaseRentHistoryMaxOrderByAggregateInput
    _min?: PurchaseRentHistoryMinOrderByAggregateInput
    _sum?: PurchaseRentHistorySumOrderByAggregateInput
  }

  export type PurchaseRentHistoryScalarWhereWithAggregatesInput = {
    AND?: PurchaseRentHistoryScalarWhereWithAggregatesInput | PurchaseRentHistoryScalarWhereWithAggregatesInput[]
    OR?: PurchaseRentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PurchaseRentHistoryScalarWhereWithAggregatesInput | PurchaseRentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseRentHistory"> | string
    userId?: StringWithAggregatesFilter<"PurchaseRentHistory"> | string
    movieSeriesId?: StringWithAggregatesFilter<"PurchaseRentHistory"> | string
    purchaseType?: EnumPriceTypeWithAggregatesFilter<"PurchaseRentHistory"> | $Enums.PriceType
    purchaseDate?: DateTimeWithAggregatesFilter<"PurchaseRentHistory"> | Date | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"PurchaseRentHistory"> | $Enums.PaymentStatus
    price?: FloatWithAggregatesFilter<"PurchaseRentHistory"> | number
    transactionId?: StringWithAggregatesFilter<"PurchaseRentHistory"> | string
    accessExpiry?: DateTimeNullableWithAggregatesFilter<"PurchaseRentHistory"> | Date | string | null
    isEmailSent?: BoolWithAggregatesFilter<"PurchaseRentHistory"> | boolean
  }

  export type PaymentTransactionWhereInput = {
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    id?: StringFilter<"PaymentTransaction"> | string
    userId?: StringFilter<"PaymentTransaction"> | string
    amount?: FloatFilter<"PaymentTransaction"> | number
    transactionId?: StringFilter<"PaymentTransaction"> | string
    status?: EnumPaymentStatusFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    paymentMethod?: StringFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    userId?: StringFilter<"PaymentTransaction"> | string
    amount?: FloatFilter<"PaymentTransaction"> | number
    transactionId?: StringFilter<"PaymentTransaction"> | string
    status?: EnumPaymentStatusFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    paymentMethod?: StringFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentTransactionCountOrderByAggregateInput
    _avg?: PaymentTransactionAvgOrderByAggregateInput
    _max?: PaymentTransactionMaxOrderByAggregateInput
    _min?: PaymentTransactionMinOrderByAggregateInput
    _sum?: PaymentTransactionSumOrderByAggregateInput
  }

  export type PaymentTransactionScalarWhereWithAggregatesInput = {
    AND?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    OR?: PaymentTransactionScalarWhereWithAggregatesInput[]
    NOT?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    userId?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    amount?: FloatWithAggregatesFilter<"PaymentTransaction"> | number
    transactionId?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    paymentMethod?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentTransaction"> | Date | string
  }

  export type AdminAnalyticsWhereInput = {
    AND?: AdminAnalyticsWhereInput | AdminAnalyticsWhereInput[]
    OR?: AdminAnalyticsWhereInput[]
    NOT?: AdminAnalyticsWhereInput | AdminAnalyticsWhereInput[]
    id?: StringFilter<"AdminAnalytics"> | string
    date?: DateTimeFilter<"AdminAnalytics"> | Date | string
    totalPurchases?: IntFilter<"AdminAnalytics"> | number
    totalRentals?: IntFilter<"AdminAnalytics"> | number
    totalRevenue?: FloatFilter<"AdminAnalytics"> | number
    totalReviews?: IntFilter<"AdminAnalytics"> | number
    totalApprovedReviews?: IntFilter<"AdminAnalytics"> | number
  }

  export type AdminAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
  }

  export type AdminAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminAnalyticsWhereInput | AdminAnalyticsWhereInput[]
    OR?: AdminAnalyticsWhereInput[]
    NOT?: AdminAnalyticsWhereInput | AdminAnalyticsWhereInput[]
    date?: DateTimeFilter<"AdminAnalytics"> | Date | string
    totalPurchases?: IntFilter<"AdminAnalytics"> | number
    totalRentals?: IntFilter<"AdminAnalytics"> | number
    totalRevenue?: FloatFilter<"AdminAnalytics"> | number
    totalReviews?: IntFilter<"AdminAnalytics"> | number
    totalApprovedReviews?: IntFilter<"AdminAnalytics"> | number
  }, "id">

  export type AdminAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
    _count?: AdminAnalyticsCountOrderByAggregateInput
    _avg?: AdminAnalyticsAvgOrderByAggregateInput
    _max?: AdminAnalyticsMaxOrderByAggregateInput
    _min?: AdminAnalyticsMinOrderByAggregateInput
    _sum?: AdminAnalyticsSumOrderByAggregateInput
  }

  export type AdminAnalyticsScalarWhereWithAggregatesInput = {
    AND?: AdminAnalyticsScalarWhereWithAggregatesInput | AdminAnalyticsScalarWhereWithAggregatesInput[]
    OR?: AdminAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AdminAnalyticsScalarWhereWithAggregatesInput | AdminAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAnalytics"> | string
    date?: DateTimeWithAggregatesFilter<"AdminAnalytics"> | Date | string
    totalPurchases?: IntWithAggregatesFilter<"AdminAnalytics"> | number
    totalRentals?: IntWithAggregatesFilter<"AdminAnalytics"> | number
    totalRevenue?: FloatWithAggregatesFilter<"AdminAnalytics"> | number
    totalReviews?: IntWithAggregatesFilter<"AdminAnalytics"> | number
    totalApprovedReviews?: IntWithAggregatesFilter<"AdminAnalytics"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityDetailsCreateInput = {
    id?: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSecurityDetailsInput
    device?: DeviceCreateNestedManyWithoutSecurityDetailsInput
  }

  export type SecurityDetailsUncheckedCreateInput = {
    id?: string
    userId: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device?: DeviceUncheckedCreateNestedManyWithoutSecurityDetailsInput
  }

  export type SecurityDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSecurityDetailsNestedInput
    device?: DeviceUpdateManyWithoutSecurityDetailsNestedInput
  }

  export type SecurityDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUncheckedUpdateManyWithoutSecurityDetailsNestedInput
  }

  export type SecurityDetailsCreateManyInput = {
    id?: string
    userId: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    machineId?: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip?: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails: SecurityDetailsCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    machineId?: string
    securityDetailsId: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip?: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    securityDetailsId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyInput = {
    id?: string
    machineId?: string
    securityDetailsId: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip?: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    securityDetailsId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieSeriesCreateInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutMovieSeriesInput
    watchlist?: WatchlistCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesUncheckedCreateInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieSeriesInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutMovieSeriesNestedInput
    watchlist?: WatchlistUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUpdateManyWithoutMovieSeriesNestedInput
  }

  export type MovieSeriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutMovieSeriesNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutMovieSeriesNestedInput
  }

  export type MovieSeriesCreateManyInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieSeriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieSeriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    movieSeries: MovieSeriesCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewInput
    comment?: CommentCreateNestedManyWithoutReviewInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    movieSeriesId: string
    userId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    comment?: CommentUpdateManyWithoutReviewNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    movieSeriesId: string
    userId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutCommentInput
    user: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    reviewId: string
    userId: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutCommentNestedInput
    user?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    reviewId: string
    userId: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
    movieSeries: MovieSeriesCreateNestedOneWithoutMovieLikeInput
    user: UserCreateNestedOneWithoutMovieLikeInput
  }

  export type MovieLikeUncheckedCreateInput = {
    id?: string
    movieSeriesId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type MovieLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutMovieLikeNestedInput
    user?: UserUpdateOneRequiredWithoutMovieLikeNestedInput
  }

  export type MovieLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieLikeCreateManyInput = {
    id?: string
    movieSeriesId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type MovieLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
    review: ReviewCreateNestedOneWithoutReviewLikeInput
    user: UserCreateNestedOneWithoutReviewLikeInput
  }

  export type ReviewLikeUncheckedCreateInput = {
    id?: string
    reviewId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUpdateOneRequiredWithoutReviewLikeNestedInput
    user?: UserUpdateOneRequiredWithoutReviewLikeNestedInput
  }

  export type ReviewLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewLikeCreateManyInput = {
    id?: string
    reviewId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WatchlistCreateInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
    movieSeries: MovieSeriesCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    userId: string
    movieSeriesId: string
    addedAt?: Date | string
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateManyInput = {
    id?: string
    userId: string
    movieSeriesId: string
    addedAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRentHistoryCreateInput = {
    id?: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
    user: UserCreateNestedOneWithoutPurchaseRentHistoryInput
    movieSeries: MovieSeriesCreateNestedOneWithoutPurchaseRentHistoryInput
  }

  export type PurchaseRentHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    movieSeriesId: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
  }

  export type PurchaseRentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPurchaseRentHistoryNestedInput
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutPurchaseRentHistoryNestedInput
  }

  export type PurchaseRentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseRentHistoryCreateManyInput = {
    id?: string
    userId: string
    movieSeriesId: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
  }

  export type PurchaseRentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseRentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentTransactionCreateInput = {
    id?: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentTransactionInput
  }

  export type PaymentTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod?: string
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentTransactionNestedInput
  }

  export type PaymentTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod?: string
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminAnalyticsCreateInput = {
    id?: string
    date?: Date | string
    totalPurchases?: number
    totalRentals?: number
    totalRevenue?: number
    totalReviews?: number
    totalApprovedReviews?: number
  }

  export type AdminAnalyticsUncheckedCreateInput = {
    id?: string
    date?: Date | string
    totalPurchases?: number
    totalRentals?: number
    totalRevenue?: number
    totalReviews?: number
    totalApprovedReviews?: number
  }

  export type AdminAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalRentals?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalApprovedReviews?: IntFieldUpdateOperationsInput | number
  }

  export type AdminAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalRentals?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalApprovedReviews?: IntFieldUpdateOperationsInput | number
  }

  export type AdminAnalyticsCreateManyInput = {
    id?: string
    date?: Date | string
    totalPurchases?: number
    totalRentals?: number
    totalRevenue?: number
    totalReviews?: number
    totalApprovedReviews?: number
  }

  export type AdminAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalRentals?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalApprovedReviews?: IntFieldUpdateOperationsInput | number
  }

  export type AdminAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPurchases?: IntFieldUpdateOperationsInput | number
    totalRentals?: IntFieldUpdateOperationsInput | number
    totalRevenue?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalApprovedReviews?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SecurityDetailsNullableScalarRelationFilter = {
    is?: SecurityDetailsWhereInput | null
    isNot?: SecurityDetailsWhereInput | null
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type PurchaseRentHistoryListRelationFilter = {
    every?: PurchaseRentHistoryWhereInput
    some?: PurchaseRentHistoryWhereInput
    none?: PurchaseRentHistoryWhereInput
  }

  export type PaymentTransactionListRelationFilter = {
    every?: PaymentTransactionWhereInput
    some?: PaymentTransactionWhereInput
    none?: PaymentTransactionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type MovieLikeListRelationFilter = {
    every?: MovieLikeWhereInput
    some?: MovieLikeWhereInput
    none?: MovieLikeWhereInput
  }

  export type ReviewLikeListRelationFilter = {
    every?: ReviewLikeWhereInput
    some?: ReviewLikeWhereInput
    none?: ReviewLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseRentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecurityDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isEmailVerified?: SortOrder
    otpToken?: SortOrder
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    lastAttemptTime?: SortOrder
    failedLoginAttemptNo?: SortOrder
    lastLoginTime?: SortOrder
    suspendUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityDetailsAvgOrderByAggregateInput = {
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    failedLoginAttemptNo?: SortOrder
  }

  export type SecurityDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isEmailVerified?: SortOrder
    otpToken?: SortOrder
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    lastAttemptTime?: SortOrder
    failedLoginAttemptNo?: SortOrder
    lastLoginTime?: SortOrder
    suspendUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isEmailVerified?: SortOrder
    otpToken?: SortOrder
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    lastAttemptTime?: SortOrder
    failedLoginAttemptNo?: SortOrder
    lastLoginTime?: SortOrder
    suspendUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityDetailsSumOrderByAggregateInput = {
    emailVerifyAttemptNo?: SortOrder
    failedResetPassAttemptNo?: SortOrder
    failedOTPAttemptNo?: SortOrder
    failedLoginAttemptNo?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type SecurityDetailsScalarRelationFilter = {
    is?: SecurityDetailsWhereInput
    isNot?: SecurityDetailsWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
    securityDetailsId?: SortOrder
    type?: SortOrder
    browser?: SortOrder
    name?: SortOrder
    os?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    isInfected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
    securityDetailsId?: SortOrder
    type?: SortOrder
    browser?: SortOrder
    name?: SortOrder
    os?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    isInfected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    machineId?: SortOrder
    securityDetailsId?: SortOrder
    type?: SortOrder
    browser?: SortOrder
    name?: SortOrder
    os?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    isPreferred?: SortOrder
    isInfected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type EnumGenreNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel> | null
    has?: $Enums.Genre | EnumGenreFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Genre[] | ListEnumGenreFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStreamingPlatformNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamingPlatform[] | ListEnumStreamingPlatformFieldRefInput<$PrismaModel> | null
    has?: $Enums.StreamingPlatform | EnumStreamingPlatformFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.StreamingPlatform[] | ListEnumStreamingPlatformFieldRefInput<$PrismaModel>
    hasSome?: $Enums.StreamingPlatform[] | ListEnumStreamingPlatformFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDiscountTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableFilter<$PrismaModel> | $Enums.DiscountType | null
  }

  export type MovieSeriesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    posterUrl?: SortOrder
    description?: SortOrder
    releaseYear?: SortOrder
    genre?: SortOrder
    director?: SortOrder
    cast?: SortOrder
    streamingPlatform?: SortOrder
    accessLink?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    markByAdmin?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    discountExpiry?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSeriesAvgOrderByAggregateInput = {
    releaseYear?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type MovieSeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    posterUrl?: SortOrder
    description?: SortOrder
    releaseYear?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    markByAdmin?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    discountExpiry?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSeriesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    posterUrl?: SortOrder
    description?: SortOrder
    releaseYear?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    markByAdmin?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    discountExpiry?: SortOrder
    isActive?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSeriesSumOrderByAggregateInput = {
    releaseYear?: SortOrder
    rating?: SortOrder
    viewCount?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type MovieSeriesScalarRelationFilter = {
    is?: MovieSeriesWhereInput
    isNot?: MovieSeriesWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    writtenReview?: SortOrder
    isSpoiler?: SortOrder
    tags?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    writtenReview?: SortOrder
    isSpoiler?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    writtenReview?: SortOrder
    isSpoiler?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
    likesCount?: SortOrder
    commentCount?: SortOrder
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    replyTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    replyTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    replyTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieLikeCountOrderByAggregateInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type MovieLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type MovieLikeMinOrderByAggregateInput = {
    id?: SortOrder
    movieSeriesId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type ReviewLikeCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type ReviewLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type ReviewLikeMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    addedAt?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PurchaseRentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    purchaseType?: SortOrder
    purchaseDate?: SortOrder
    paymentStatus?: SortOrder
    price?: SortOrder
    transactionId?: SortOrder
    accessExpiry?: SortOrder
    isEmailSent?: SortOrder
  }

  export type PurchaseRentHistoryAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PurchaseRentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    purchaseType?: SortOrder
    purchaseDate?: SortOrder
    paymentStatus?: SortOrder
    price?: SortOrder
    transactionId?: SortOrder
    accessExpiry?: SortOrder
    isEmailSent?: SortOrder
  }

  export type PurchaseRentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieSeriesId?: SortOrder
    purchaseType?: SortOrder
    purchaseDate?: SortOrder
    paymentStatus?: SortOrder
    price?: SortOrder
    transactionId?: SortOrder
    accessExpiry?: SortOrder
    isEmailSent?: SortOrder
  }

  export type PurchaseRentHistorySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PaymentTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AdminAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
  }

  export type AdminAnalyticsAvgOrderByAggregateInput = {
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
  }

  export type AdminAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
  }

  export type AdminAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
  }

  export type AdminAnalyticsSumOrderByAggregateInput = {
    totalPurchases?: SortOrder
    totalRentals?: SortOrder
    totalRevenue?: SortOrder
    totalReviews?: SortOrder
    totalApprovedReviews?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<SecurityDetailsCreateWithoutUserInput, SecurityDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityDetailsCreateOrConnectWithoutUserInput
    connect?: SecurityDetailsWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type PurchaseRentHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutUserInput, PurchaseRentHistoryUncheckedCreateWithoutUserInput> | PurchaseRentHistoryCreateWithoutUserInput[] | PurchaseRentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutUserInput | PurchaseRentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseRentHistoryCreateManyUserInputEnvelope
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
  }

  export type PaymentTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MovieLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieLikeCreateWithoutUserInput, MovieLikeUncheckedCreateWithoutUserInput> | MovieLikeCreateWithoutUserInput[] | MovieLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutUserInput | MovieLikeCreateOrConnectWithoutUserInput[]
    createMany?: MovieLikeCreateManyUserInputEnvelope
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
  }

  export type ReviewLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type SecurityDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SecurityDetailsCreateWithoutUserInput, SecurityDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityDetailsCreateOrConnectWithoutUserInput
    connect?: SecurityDetailsWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutUserInput, PurchaseRentHistoryUncheckedCreateWithoutUserInput> | PurchaseRentHistoryCreateWithoutUserInput[] | PurchaseRentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutUserInput | PurchaseRentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseRentHistoryCreateManyUserInputEnvelope
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
  }

  export type PaymentTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MovieLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieLikeCreateWithoutUserInput, MovieLikeUncheckedCreateWithoutUserInput> | MovieLikeCreateWithoutUserInput[] | MovieLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutUserInput | MovieLikeCreateOrConnectWithoutUserInput[]
    createMany?: MovieLikeCreateManyUserInputEnvelope
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
  }

  export type ReviewLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SecurityDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<SecurityDetailsCreateWithoutUserInput, SecurityDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityDetailsCreateOrConnectWithoutUserInput
    upsert?: SecurityDetailsUpsertWithoutUserInput
    disconnect?: SecurityDetailsWhereInput | boolean
    delete?: SecurityDetailsWhereInput | boolean
    connect?: SecurityDetailsWhereUniqueInput
    update?: XOR<XOR<SecurityDetailsUpdateToOneWithWhereWithoutUserInput, SecurityDetailsUpdateWithoutUserInput>, SecurityDetailsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type PurchaseRentHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutUserInput, PurchaseRentHistoryUncheckedCreateWithoutUserInput> | PurchaseRentHistoryCreateWithoutUserInput[] | PurchaseRentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutUserInput | PurchaseRentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseRentHistoryUpsertWithWhereUniqueWithoutUserInput | PurchaseRentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseRentHistoryCreateManyUserInputEnvelope
    set?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    disconnect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    delete?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    update?: PurchaseRentHistoryUpdateWithWhereUniqueWithoutUserInput | PurchaseRentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseRentHistoryUpdateManyWithWhereWithoutUserInput | PurchaseRentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseRentHistoryScalarWhereInput | PurchaseRentHistoryScalarWhereInput[]
  }

  export type PaymentTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutUserInput | PaymentTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutUserInput | PaymentTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutUserInput | PaymentTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MovieLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieLikeCreateWithoutUserInput, MovieLikeUncheckedCreateWithoutUserInput> | MovieLikeCreateWithoutUserInput[] | MovieLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutUserInput | MovieLikeCreateOrConnectWithoutUserInput[]
    upsert?: MovieLikeUpsertWithWhereUniqueWithoutUserInput | MovieLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieLikeCreateManyUserInputEnvelope
    set?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    disconnect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    delete?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    update?: MovieLikeUpdateWithWhereUniqueWithoutUserInput | MovieLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieLikeUpdateManyWithWhereWithoutUserInput | MovieLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieLikeScalarWhereInput | MovieLikeScalarWhereInput[]
  }

  export type ReviewLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutUserInput | ReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutUserInput | ReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutUserInput | ReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SecurityDetailsCreateWithoutUserInput, SecurityDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityDetailsCreateOrConnectWithoutUserInput
    upsert?: SecurityDetailsUpsertWithoutUserInput
    disconnect?: SecurityDetailsWhereInput | boolean
    delete?: SecurityDetailsWhereInput | boolean
    connect?: SecurityDetailsWhereUniqueInput
    update?: XOR<XOR<SecurityDetailsUpdateToOneWithWhereWithoutUserInput, SecurityDetailsUpdateWithoutUserInput>, SecurityDetailsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutUserInput, PurchaseRentHistoryUncheckedCreateWithoutUserInput> | PurchaseRentHistoryCreateWithoutUserInput[] | PurchaseRentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutUserInput | PurchaseRentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseRentHistoryUpsertWithWhereUniqueWithoutUserInput | PurchaseRentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseRentHistoryCreateManyUserInputEnvelope
    set?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    disconnect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    delete?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    update?: PurchaseRentHistoryUpdateWithWhereUniqueWithoutUserInput | PurchaseRentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseRentHistoryUpdateManyWithWhereWithoutUserInput | PurchaseRentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseRentHistoryScalarWhereInput | PurchaseRentHistoryScalarWhereInput[]
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutUserInput | PaymentTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutUserInput | PaymentTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutUserInput | PaymentTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MovieLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieLikeCreateWithoutUserInput, MovieLikeUncheckedCreateWithoutUserInput> | MovieLikeCreateWithoutUserInput[] | MovieLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutUserInput | MovieLikeCreateOrConnectWithoutUserInput[]
    upsert?: MovieLikeUpsertWithWhereUniqueWithoutUserInput | MovieLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieLikeCreateManyUserInputEnvelope
    set?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    disconnect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    delete?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    update?: MovieLikeUpdateWithWhereUniqueWithoutUserInput | MovieLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieLikeUpdateManyWithWhereWithoutUserInput | MovieLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieLikeScalarWhereInput | MovieLikeScalarWhereInput[]
  }

  export type ReviewLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutUserInput | ReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutUserInput | ReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutUserInput | ReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSecurityDetailsInput = {
    create?: XOR<UserCreateWithoutSecurityDetailsInput, UserUncheckedCreateWithoutSecurityDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedManyWithoutSecurityDetailsInput = {
    create?: XOR<DeviceCreateWithoutSecurityDetailsInput, DeviceUncheckedCreateWithoutSecurityDetailsInput> | DeviceCreateWithoutSecurityDetailsInput[] | DeviceUncheckedCreateWithoutSecurityDetailsInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityDetailsInput | DeviceCreateOrConnectWithoutSecurityDetailsInput[]
    createMany?: DeviceCreateManySecurityDetailsInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutSecurityDetailsInput = {
    create?: XOR<DeviceCreateWithoutSecurityDetailsInput, DeviceUncheckedCreateWithoutSecurityDetailsInput> | DeviceCreateWithoutSecurityDetailsInput[] | DeviceUncheckedCreateWithoutSecurityDetailsInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityDetailsInput | DeviceCreateOrConnectWithoutSecurityDetailsInput[]
    createMany?: DeviceCreateManySecurityDetailsInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSecurityDetailsNestedInput = {
    create?: XOR<UserCreateWithoutSecurityDetailsInput, UserUncheckedCreateWithoutSecurityDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityDetailsInput
    upsert?: UserUpsertWithoutSecurityDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityDetailsInput, UserUpdateWithoutSecurityDetailsInput>, UserUncheckedUpdateWithoutSecurityDetailsInput>
  }

  export type DeviceUpdateManyWithoutSecurityDetailsNestedInput = {
    create?: XOR<DeviceCreateWithoutSecurityDetailsInput, DeviceUncheckedCreateWithoutSecurityDetailsInput> | DeviceCreateWithoutSecurityDetailsInput[] | DeviceUncheckedCreateWithoutSecurityDetailsInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityDetailsInput | DeviceCreateOrConnectWithoutSecurityDetailsInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutSecurityDetailsInput | DeviceUpsertWithWhereUniqueWithoutSecurityDetailsInput[]
    createMany?: DeviceCreateManySecurityDetailsInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutSecurityDetailsInput | DeviceUpdateWithWhereUniqueWithoutSecurityDetailsInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutSecurityDetailsInput | DeviceUpdateManyWithWhereWithoutSecurityDetailsInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutSecurityDetailsNestedInput = {
    create?: XOR<DeviceCreateWithoutSecurityDetailsInput, DeviceUncheckedCreateWithoutSecurityDetailsInput> | DeviceCreateWithoutSecurityDetailsInput[] | DeviceUncheckedCreateWithoutSecurityDetailsInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutSecurityDetailsInput | DeviceCreateOrConnectWithoutSecurityDetailsInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutSecurityDetailsInput | DeviceUpsertWithWhereUniqueWithoutSecurityDetailsInput[]
    createMany?: DeviceCreateManySecurityDetailsInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutSecurityDetailsInput | DeviceUpdateWithWhereUniqueWithoutSecurityDetailsInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutSecurityDetailsInput | DeviceUpdateManyWithWhereWithoutSecurityDetailsInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type SecurityDetailsCreateNestedOneWithoutDeviceInput = {
    create?: XOR<SecurityDetailsCreateWithoutDeviceInput, SecurityDetailsUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: SecurityDetailsCreateOrConnectWithoutDeviceInput
    connect?: SecurityDetailsWhereUniqueInput
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type SecurityDetailsUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<SecurityDetailsCreateWithoutDeviceInput, SecurityDetailsUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: SecurityDetailsCreateOrConnectWithoutDeviceInput
    upsert?: SecurityDetailsUpsertWithoutDeviceInput
    connect?: SecurityDetailsWhereUniqueInput
    update?: XOR<XOR<SecurityDetailsUpdateToOneWithWhereWithoutDeviceInput, SecurityDetailsUpdateWithoutDeviceInput>, SecurityDetailsUncheckedUpdateWithoutDeviceInput>
  }

  export type MovieSeriesCreategenreInput = {
    set: $Enums.Genre[]
  }

  export type MovieSeriesCreatedirectorInput = {
    set: string[]
  }

  export type MovieSeriesCreatecastInput = {
    set: string[]
  }

  export type MovieSeriesCreatestreamingPlatformInput = {
    set: $Enums.StreamingPlatform[]
  }

  export type MovieSeriesCreateaccessLinkInput = {
    set: string[]
  }

  export type ReviewCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<ReviewCreateWithoutMovieSeriesInput, ReviewUncheckedCreateWithoutMovieSeriesInput> | ReviewCreateWithoutMovieSeriesInput[] | ReviewUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieSeriesInput | ReviewCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: ReviewCreateManyMovieSeriesInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type WatchlistCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<WatchlistCreateWithoutMovieSeriesInput, WatchlistUncheckedCreateWithoutMovieSeriesInput> | WatchlistCreateWithoutMovieSeriesInput[] | WatchlistUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutMovieSeriesInput | WatchlistCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: WatchlistCreateManyMovieSeriesInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type PurchaseRentHistoryCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput> | PurchaseRentHistoryCreateWithoutMovieSeriesInput[] | PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput | PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: PurchaseRentHistoryCreateManyMovieSeriesInputEnvelope
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
  }

  export type MovieLikeCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<MovieLikeCreateWithoutMovieSeriesInput, MovieLikeUncheckedCreateWithoutMovieSeriesInput> | MovieLikeCreateWithoutMovieSeriesInput[] | MovieLikeUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutMovieSeriesInput | MovieLikeCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: MovieLikeCreateManyMovieSeriesInputEnvelope
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<ReviewCreateWithoutMovieSeriesInput, ReviewUncheckedCreateWithoutMovieSeriesInput> | ReviewCreateWithoutMovieSeriesInput[] | ReviewUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieSeriesInput | ReviewCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: ReviewCreateManyMovieSeriesInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<WatchlistCreateWithoutMovieSeriesInput, WatchlistUncheckedCreateWithoutMovieSeriesInput> | WatchlistCreateWithoutMovieSeriesInput[] | WatchlistUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutMovieSeriesInput | WatchlistCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: WatchlistCreateManyMovieSeriesInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type PurchaseRentHistoryUncheckedCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput> | PurchaseRentHistoryCreateWithoutMovieSeriesInput[] | PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput | PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: PurchaseRentHistoryCreateManyMovieSeriesInputEnvelope
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
  }

  export type MovieLikeUncheckedCreateNestedManyWithoutMovieSeriesInput = {
    create?: XOR<MovieLikeCreateWithoutMovieSeriesInput, MovieLikeUncheckedCreateWithoutMovieSeriesInput> | MovieLikeCreateWithoutMovieSeriesInput[] | MovieLikeUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutMovieSeriesInput | MovieLikeCreateOrConnectWithoutMovieSeriesInput[]
    createMany?: MovieLikeCreateManyMovieSeriesInputEnvelope
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
  }

  export type MovieSeriesUpdategenreInput = {
    set?: $Enums.Genre[]
    push?: $Enums.Genre | $Enums.Genre[]
  }

  export type MovieSeriesUpdatedirectorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MovieSeriesUpdatecastInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MovieSeriesUpdatestreamingPlatformInput = {
    set?: $Enums.StreamingPlatform[]
    push?: $Enums.StreamingPlatform | $Enums.StreamingPlatform[]
  }

  export type MovieSeriesUpdateaccessLinkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPriceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriceType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType | null
  }

  export type ReviewUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<ReviewCreateWithoutMovieSeriesInput, ReviewUncheckedCreateWithoutMovieSeriesInput> | ReviewCreateWithoutMovieSeriesInput[] | ReviewUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieSeriesInput | ReviewCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMovieSeriesInput | ReviewUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: ReviewCreateManyMovieSeriesInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMovieSeriesInput | ReviewUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMovieSeriesInput | ReviewUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type WatchlistUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<WatchlistCreateWithoutMovieSeriesInput, WatchlistUncheckedCreateWithoutMovieSeriesInput> | WatchlistCreateWithoutMovieSeriesInput[] | WatchlistUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutMovieSeriesInput | WatchlistCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutMovieSeriesInput | WatchlistUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: WatchlistCreateManyMovieSeriesInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutMovieSeriesInput | WatchlistUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutMovieSeriesInput | WatchlistUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type PurchaseRentHistoryUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput> | PurchaseRentHistoryCreateWithoutMovieSeriesInput[] | PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput | PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: PurchaseRentHistoryUpsertWithWhereUniqueWithoutMovieSeriesInput | PurchaseRentHistoryUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: PurchaseRentHistoryCreateManyMovieSeriesInputEnvelope
    set?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    disconnect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    delete?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    update?: PurchaseRentHistoryUpdateWithWhereUniqueWithoutMovieSeriesInput | PurchaseRentHistoryUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: PurchaseRentHistoryUpdateManyWithWhereWithoutMovieSeriesInput | PurchaseRentHistoryUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: PurchaseRentHistoryScalarWhereInput | PurchaseRentHistoryScalarWhereInput[]
  }

  export type MovieLikeUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<MovieLikeCreateWithoutMovieSeriesInput, MovieLikeUncheckedCreateWithoutMovieSeriesInput> | MovieLikeCreateWithoutMovieSeriesInput[] | MovieLikeUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutMovieSeriesInput | MovieLikeCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: MovieLikeUpsertWithWhereUniqueWithoutMovieSeriesInput | MovieLikeUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: MovieLikeCreateManyMovieSeriesInputEnvelope
    set?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    disconnect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    delete?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    update?: MovieLikeUpdateWithWhereUniqueWithoutMovieSeriesInput | MovieLikeUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: MovieLikeUpdateManyWithWhereWithoutMovieSeriesInput | MovieLikeUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: MovieLikeScalarWhereInput | MovieLikeScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<ReviewCreateWithoutMovieSeriesInput, ReviewUncheckedCreateWithoutMovieSeriesInput> | ReviewCreateWithoutMovieSeriesInput[] | ReviewUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieSeriesInput | ReviewCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMovieSeriesInput | ReviewUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: ReviewCreateManyMovieSeriesInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMovieSeriesInput | ReviewUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMovieSeriesInput | ReviewUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<WatchlistCreateWithoutMovieSeriesInput, WatchlistUncheckedCreateWithoutMovieSeriesInput> | WatchlistCreateWithoutMovieSeriesInput[] | WatchlistUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutMovieSeriesInput | WatchlistCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutMovieSeriesInput | WatchlistUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: WatchlistCreateManyMovieSeriesInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutMovieSeriesInput | WatchlistUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutMovieSeriesInput | WatchlistUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<PurchaseRentHistoryCreateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput> | PurchaseRentHistoryCreateWithoutMovieSeriesInput[] | PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput | PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: PurchaseRentHistoryUpsertWithWhereUniqueWithoutMovieSeriesInput | PurchaseRentHistoryUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: PurchaseRentHistoryCreateManyMovieSeriesInputEnvelope
    set?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    disconnect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    delete?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    connect?: PurchaseRentHistoryWhereUniqueInput | PurchaseRentHistoryWhereUniqueInput[]
    update?: PurchaseRentHistoryUpdateWithWhereUniqueWithoutMovieSeriesInput | PurchaseRentHistoryUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: PurchaseRentHistoryUpdateManyWithWhereWithoutMovieSeriesInput | PurchaseRentHistoryUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: PurchaseRentHistoryScalarWhereInput | PurchaseRentHistoryScalarWhereInput[]
  }

  export type MovieLikeUncheckedUpdateManyWithoutMovieSeriesNestedInput = {
    create?: XOR<MovieLikeCreateWithoutMovieSeriesInput, MovieLikeUncheckedCreateWithoutMovieSeriesInput> | MovieLikeCreateWithoutMovieSeriesInput[] | MovieLikeUncheckedCreateWithoutMovieSeriesInput[]
    connectOrCreate?: MovieLikeCreateOrConnectWithoutMovieSeriesInput | MovieLikeCreateOrConnectWithoutMovieSeriesInput[]
    upsert?: MovieLikeUpsertWithWhereUniqueWithoutMovieSeriesInput | MovieLikeUpsertWithWhereUniqueWithoutMovieSeriesInput[]
    createMany?: MovieLikeCreateManyMovieSeriesInputEnvelope
    set?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    disconnect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    delete?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    connect?: MovieLikeWhereUniqueInput | MovieLikeWhereUniqueInput[]
    update?: MovieLikeUpdateWithWhereUniqueWithoutMovieSeriesInput | MovieLikeUpdateWithWhereUniqueWithoutMovieSeriesInput[]
    updateMany?: MovieLikeUpdateManyWithWhereWithoutMovieSeriesInput | MovieLikeUpdateManyWithWhereWithoutMovieSeriesInput[]
    deleteMany?: MovieLikeScalarWhereInput | MovieLikeScalarWhereInput[]
  }

  export type ReviewCreatetagsInput = {
    set: string[]
  }

  export type MovieSeriesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MovieSeriesCreateWithoutReviewsInput, MovieSeriesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutReviewsInput
    connect?: MovieSeriesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutReviewInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewLikeCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewLikeUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type ReviewUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type MovieSeriesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<MovieSeriesCreateWithoutReviewsInput, MovieSeriesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutReviewsInput
    upsert?: MovieSeriesUpsertWithoutReviewsInput
    connect?: MovieSeriesWhereUniqueInput
    update?: XOR<XOR<MovieSeriesUpdateToOneWithWhereWithoutReviewsInput, MovieSeriesUpdateWithoutReviewsInput>, MovieSeriesUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type CommentUpdateManyWithoutReviewNestedInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewInput | CommentUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewInput | CommentUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewInput | CommentUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewLikeUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutReviewInput | ReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutReviewInput | ReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutReviewInput | ReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewInput | CommentUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewInput | CommentUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewInput | CommentUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutReviewInput | ReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutReviewInput | ReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutReviewInput | ReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutCommentInput = {
    create?: XOR<ReviewCreateWithoutCommentInput, ReviewUncheckedCreateWithoutCommentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutCommentInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<ReviewCreateWithoutCommentInput, ReviewUncheckedCreateWithoutCommentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutCommentInput
    upsert?: ReviewUpsertWithoutCommentInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutCommentInput, ReviewUpdateWithoutCommentInput>, ReviewUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>, UserUncheckedUpdateWithoutCommentInput>
  }

  export type MovieSeriesCreateNestedOneWithoutMovieLikeInput = {
    create?: XOR<MovieSeriesCreateWithoutMovieLikeInput, MovieSeriesUncheckedCreateWithoutMovieLikeInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutMovieLikeInput
    connect?: MovieSeriesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMovieLikeInput = {
    create?: XOR<UserCreateWithoutMovieLikeInput, UserUncheckedCreateWithoutMovieLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovieLikeInput
    connect?: UserWhereUniqueInput
  }

  export type MovieSeriesUpdateOneRequiredWithoutMovieLikeNestedInput = {
    create?: XOR<MovieSeriesCreateWithoutMovieLikeInput, MovieSeriesUncheckedCreateWithoutMovieLikeInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutMovieLikeInput
    upsert?: MovieSeriesUpsertWithoutMovieLikeInput
    connect?: MovieSeriesWhereUniqueInput
    update?: XOR<XOR<MovieSeriesUpdateToOneWithWhereWithoutMovieLikeInput, MovieSeriesUpdateWithoutMovieLikeInput>, MovieSeriesUncheckedUpdateWithoutMovieLikeInput>
  }

  export type UserUpdateOneRequiredWithoutMovieLikeNestedInput = {
    create?: XOR<UserCreateWithoutMovieLikeInput, UserUncheckedCreateWithoutMovieLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovieLikeInput
    upsert?: UserUpsertWithoutMovieLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovieLikeInput, UserUpdateWithoutMovieLikeInput>, UserUncheckedUpdateWithoutMovieLikeInput>
  }

  export type ReviewCreateNestedOneWithoutReviewLikeInput = {
    create?: XOR<ReviewCreateWithoutReviewLikeInput, ReviewUncheckedCreateWithoutReviewLikeInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewLikeInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewLikeInput = {
    create?: XOR<UserCreateWithoutReviewLikeInput, UserUncheckedCreateWithoutReviewLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewLikeInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutReviewLikeNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewLikeInput, ReviewUncheckedCreateWithoutReviewLikeInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewLikeInput
    upsert?: ReviewUpsertWithoutReviewLikeInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutReviewLikeInput, ReviewUpdateWithoutReviewLikeInput>, ReviewUncheckedUpdateWithoutReviewLikeInput>
  }

  export type UserUpdateOneRequiredWithoutReviewLikeNestedInput = {
    create?: XOR<UserCreateWithoutReviewLikeInput, UserUncheckedCreateWithoutReviewLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewLikeInput
    upsert?: UserUpsertWithoutReviewLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewLikeInput, UserUpdateWithoutReviewLikeInput>, UserUncheckedUpdateWithoutReviewLikeInput>
  }

  export type UserCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    connect?: UserWhereUniqueInput
  }

  export type MovieSeriesCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<MovieSeriesCreateWithoutWatchlistInput, MovieSeriesUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutWatchlistInput
    connect?: MovieSeriesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistInput
    upsert?: UserUpsertWithoutWatchlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistInput, UserUpdateWithoutWatchlistInput>, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type MovieSeriesUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<MovieSeriesCreateWithoutWatchlistInput, MovieSeriesUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutWatchlistInput
    upsert?: MovieSeriesUpsertWithoutWatchlistInput
    connect?: MovieSeriesWhereUniqueInput
    update?: XOR<XOR<MovieSeriesUpdateToOneWithWhereWithoutWatchlistInput, MovieSeriesUpdateWithoutWatchlistInput>, MovieSeriesUncheckedUpdateWithoutWatchlistInput>
  }

  export type UserCreateNestedOneWithoutPurchaseRentHistoryInput = {
    create?: XOR<UserCreateWithoutPurchaseRentHistoryInput, UserUncheckedCreateWithoutPurchaseRentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseRentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type MovieSeriesCreateNestedOneWithoutPurchaseRentHistoryInput = {
    create?: XOR<MovieSeriesCreateWithoutPurchaseRentHistoryInput, MovieSeriesUncheckedCreateWithoutPurchaseRentHistoryInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutPurchaseRentHistoryInput
    connect?: MovieSeriesWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPurchaseRentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseRentHistoryInput, UserUncheckedCreateWithoutPurchaseRentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseRentHistoryInput
    upsert?: UserUpsertWithoutPurchaseRentHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseRentHistoryInput, UserUpdateWithoutPurchaseRentHistoryInput>, UserUncheckedUpdateWithoutPurchaseRentHistoryInput>
  }

  export type MovieSeriesUpdateOneRequiredWithoutPurchaseRentHistoryNestedInput = {
    create?: XOR<MovieSeriesCreateWithoutPurchaseRentHistoryInput, MovieSeriesUncheckedCreateWithoutPurchaseRentHistoryInput>
    connectOrCreate?: MovieSeriesCreateOrConnectWithoutPurchaseRentHistoryInput
    upsert?: MovieSeriesUpsertWithoutPurchaseRentHistoryInput
    connect?: MovieSeriesWhereUniqueInput
    update?: XOR<XOR<MovieSeriesUpdateToOneWithWhereWithoutPurchaseRentHistoryInput, MovieSeriesUpdateWithoutPurchaseRentHistoryInput>, MovieSeriesUncheckedUpdateWithoutPurchaseRentHistoryInput>
  }

  export type UserCreateNestedOneWithoutPaymentTransactionInput = {
    create?: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentTransactionNestedInput = {
    create?: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransactionInput
    upsert?: UserUpsertWithoutPaymentTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentTransactionInput, UserUpdateWithoutPaymentTransactionInput>, UserUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type NestedEnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDiscountTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableFilter<$PrismaModel> | $Enums.DiscountType | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type SecurityDetailsCreateWithoutUserInput = {
    id?: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device?: DeviceCreateNestedManyWithoutSecurityDetailsInput
  }

  export type SecurityDetailsUncheckedCreateWithoutUserInput = {
    id?: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device?: DeviceUncheckedCreateNestedManyWithoutSecurityDetailsInput
  }

  export type SecurityDetailsCreateOrConnectWithoutUserInput = {
    where: SecurityDetailsWhereUniqueInput
    create: XOR<SecurityDetailsCreateWithoutUserInput, SecurityDetailsUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    movieSeries: MovieSeriesCreateNestedOneWithoutReviewsInput
    comment?: CommentCreateNestedManyWithoutReviewInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    movieSeriesId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    reviewId: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    addedAt?: Date | string
    movieSeries: MovieSeriesCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    movieSeriesId: string
    addedAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseRentHistoryCreateWithoutUserInput = {
    id?: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
    movieSeries: MovieSeriesCreateNestedOneWithoutPurchaseRentHistoryInput
  }

  export type PurchaseRentHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    movieSeriesId: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
  }

  export type PurchaseRentHistoryCreateOrConnectWithoutUserInput = {
    where: PurchaseRentHistoryWhereUniqueInput
    create: XOR<PurchaseRentHistoryCreateWithoutUserInput, PurchaseRentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PurchaseRentHistoryCreateManyUserInputEnvelope = {
    data: PurchaseRentHistoryCreateManyUserInput | PurchaseRentHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod?: string
    createdAt?: Date | string
  }

  export type PaymentTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod?: string
    createdAt?: Date | string
  }

  export type PaymentTransactionCreateOrConnectWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    create: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput>
  }

  export type PaymentTransactionCreateManyUserInputEnvelope = {
    data: PaymentTransactionCreateManyUserInput | PaymentTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovieLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
    movieSeries: MovieSeriesCreateNestedOneWithoutMovieLikeInput
  }

  export type MovieLikeUncheckedCreateWithoutUserInput = {
    id?: string
    movieSeriesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type MovieLikeCreateOrConnectWithoutUserInput = {
    where: MovieLikeWhereUniqueInput
    create: XOR<MovieLikeCreateWithoutUserInput, MovieLikeUncheckedCreateWithoutUserInput>
  }

  export type MovieLikeCreateManyUserInputEnvelope = {
    data: MovieLikeCreateManyUserInput | MovieLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
    review: ReviewCreateNestedOneWithoutReviewLikeInput
  }

  export type ReviewLikeUncheckedCreateWithoutUserInput = {
    id?: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewLikeCreateOrConnectWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    create: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type ReviewLikeCreateManyUserInputEnvelope = {
    data: ReviewLikeCreateManyUserInput | ReviewLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SecurityDetailsUpsertWithoutUserInput = {
    update: XOR<SecurityDetailsUpdateWithoutUserInput, SecurityDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<SecurityDetailsCreateWithoutUserInput, SecurityDetailsUncheckedCreateWithoutUserInput>
    where?: SecurityDetailsWhereInput
  }

  export type SecurityDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: SecurityDetailsWhereInput
    data: XOR<SecurityDetailsUpdateWithoutUserInput, SecurityDetailsUncheckedUpdateWithoutUserInput>
  }

  export type SecurityDetailsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateManyWithoutSecurityDetailsNestedInput
  }

  export type SecurityDetailsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUncheckedUpdateManyWithoutSecurityDetailsNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    movieSeriesId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    writtenReview?: StringFilter<"Review"> | string
    isSpoiler?: BoolFilter<"Review"> | boolean
    tags?: StringNullableListFilter<"Review">
    likesCount?: IntFilter<"Review"> | number
    commentCount?: IntFilter<"Review"> | number
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    reviewId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    replyTo?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    movieSeriesId?: StringFilter<"Watchlist"> | string
    addedAt?: DateTimeFilter<"Watchlist"> | Date | string
  }

  export type PurchaseRentHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseRentHistoryWhereUniqueInput
    update: XOR<PurchaseRentHistoryUpdateWithoutUserInput, PurchaseRentHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseRentHistoryCreateWithoutUserInput, PurchaseRentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PurchaseRentHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseRentHistoryWhereUniqueInput
    data: XOR<PurchaseRentHistoryUpdateWithoutUserInput, PurchaseRentHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseRentHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseRentHistoryScalarWhereInput
    data: XOR<PurchaseRentHistoryUpdateManyMutationInput, PurchaseRentHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseRentHistoryScalarWhereInput = {
    AND?: PurchaseRentHistoryScalarWhereInput | PurchaseRentHistoryScalarWhereInput[]
    OR?: PurchaseRentHistoryScalarWhereInput[]
    NOT?: PurchaseRentHistoryScalarWhereInput | PurchaseRentHistoryScalarWhereInput[]
    id?: StringFilter<"PurchaseRentHistory"> | string
    userId?: StringFilter<"PurchaseRentHistory"> | string
    movieSeriesId?: StringFilter<"PurchaseRentHistory"> | string
    purchaseType?: EnumPriceTypeFilter<"PurchaseRentHistory"> | $Enums.PriceType
    purchaseDate?: DateTimeFilter<"PurchaseRentHistory"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"PurchaseRentHistory"> | $Enums.PaymentStatus
    price?: FloatFilter<"PurchaseRentHistory"> | number
    transactionId?: StringFilter<"PurchaseRentHistory"> | string
    accessExpiry?: DateTimeNullableFilter<"PurchaseRentHistory"> | Date | string | null
    isEmailSent?: BoolFilter<"PurchaseRentHistory"> | boolean
  }

  export type PaymentTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    update: XOR<PaymentTransactionUpdateWithoutUserInput, PaymentTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput>
  }

  export type PaymentTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    data: XOR<PaymentTransactionUpdateWithoutUserInput, PaymentTransactionUncheckedUpdateWithoutUserInput>
  }

  export type PaymentTransactionUpdateManyWithWhereWithoutUserInput = {
    where: PaymentTransactionScalarWhereInput
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentTransactionScalarWhereInput = {
    AND?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
    OR?: PaymentTransactionScalarWhereInput[]
    NOT?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
    id?: StringFilter<"PaymentTransaction"> | string
    userId?: StringFilter<"PaymentTransaction"> | string
    amount?: FloatFilter<"PaymentTransaction"> | number
    transactionId?: StringFilter<"PaymentTransaction"> | string
    status?: EnumPaymentStatusFilter<"PaymentTransaction"> | $Enums.PaymentStatus
    paymentMethod?: StringFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type MovieLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: MovieLikeWhereUniqueInput
    update: XOR<MovieLikeUpdateWithoutUserInput, MovieLikeUncheckedUpdateWithoutUserInput>
    create: XOR<MovieLikeCreateWithoutUserInput, MovieLikeUncheckedCreateWithoutUserInput>
  }

  export type MovieLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: MovieLikeWhereUniqueInput
    data: XOR<MovieLikeUpdateWithoutUserInput, MovieLikeUncheckedUpdateWithoutUserInput>
  }

  export type MovieLikeUpdateManyWithWhereWithoutUserInput = {
    where: MovieLikeScalarWhereInput
    data: XOR<MovieLikeUpdateManyMutationInput, MovieLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type MovieLikeScalarWhereInput = {
    AND?: MovieLikeScalarWhereInput | MovieLikeScalarWhereInput[]
    OR?: MovieLikeScalarWhereInput[]
    NOT?: MovieLikeScalarWhereInput | MovieLikeScalarWhereInput[]
    id?: StringFilter<"MovieLike"> | string
    movieSeriesId?: StringFilter<"MovieLike"> | string
    userId?: StringFilter<"MovieLike"> | string
    createdAt?: DateTimeFilter<"MovieLike"> | Date | string
    updatedAt?: DateTimeFilter<"MovieLike"> | Date | string
    isLike?: BoolFilter<"MovieLike"> | boolean
  }

  export type ReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    update: XOR<ReviewLikeUpdateWithoutUserInput, ReviewLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type ReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    data: XOR<ReviewLikeUpdateWithoutUserInput, ReviewLikeUncheckedUpdateWithoutUserInput>
  }

  export type ReviewLikeUpdateManyWithWhereWithoutUserInput = {
    where: ReviewLikeScalarWhereInput
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewLikeScalarWhereInput = {
    AND?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
    OR?: ReviewLikeScalarWhereInput[]
    NOT?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
    id?: StringFilter<"ReviewLike"> | string
    reviewId?: StringFilter<"ReviewLike"> | string
    userId?: StringFilter<"ReviewLike"> | string
    createdAt?: DateTimeFilter<"ReviewLike"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewLike"> | Date | string
    isLike?: BoolFilter<"ReviewLike"> | boolean
  }

  export type UserCreateWithoutSecurityDetailsInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecurityDetailsInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecurityDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityDetailsInput, UserUncheckedCreateWithoutSecurityDetailsInput>
  }

  export type DeviceCreateWithoutSecurityDetailsInput = {
    id?: string
    machineId?: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip?: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUncheckedCreateWithoutSecurityDetailsInput = {
    id?: string
    machineId?: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip?: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutSecurityDetailsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSecurityDetailsInput, DeviceUncheckedCreateWithoutSecurityDetailsInput>
  }

  export type DeviceCreateManySecurityDetailsInputEnvelope = {
    data: DeviceCreateManySecurityDetailsInput | DeviceCreateManySecurityDetailsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSecurityDetailsInput = {
    update: XOR<UserUpdateWithoutSecurityDetailsInput, UserUncheckedUpdateWithoutSecurityDetailsInput>
    create: XOR<UserCreateWithoutSecurityDetailsInput, UserUncheckedCreateWithoutSecurityDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityDetailsInput, UserUncheckedUpdateWithoutSecurityDetailsInput>
  }

  export type UserUpdateWithoutSecurityDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithWhereUniqueWithoutSecurityDetailsInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutSecurityDetailsInput, DeviceUncheckedUpdateWithoutSecurityDetailsInput>
    create: XOR<DeviceCreateWithoutSecurityDetailsInput, DeviceUncheckedCreateWithoutSecurityDetailsInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutSecurityDetailsInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutSecurityDetailsInput, DeviceUncheckedUpdateWithoutSecurityDetailsInput>
  }

  export type DeviceUpdateManyWithWhereWithoutSecurityDetailsInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutSecurityDetailsInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    machineId?: StringFilter<"Device"> | string
    securityDetailsId?: StringFilter<"Device"> | string
    type?: EnumDeviceTypeFilter<"Device"> | $Enums.DeviceType
    browser?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    os?: StringFilter<"Device"> | string
    ip?: StringNullableFilter<"Device"> | string | null
    userAgent?: StringFilter<"Device"> | string
    location?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    isPreferred?: BoolFilter<"Device"> | boolean
    isInfected?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type SecurityDetailsCreateWithoutDeviceInput = {
    id?: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSecurityDetailsInput
  }

  export type SecurityDetailsUncheckedCreateWithoutDeviceInput = {
    id?: string
    userId: string
    isEmailVerified?: boolean
    otpToken?: string | null
    emailVerifyAttemptNo?: number
    failedResetPassAttemptNo?: number
    failedOTPAttemptNo?: number
    lastAttemptTime?: Date | string
    failedLoginAttemptNo?: number
    lastLoginTime?: Date | string
    suspendUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityDetailsCreateOrConnectWithoutDeviceInput = {
    where: SecurityDetailsWhereUniqueInput
    create: XOR<SecurityDetailsCreateWithoutDeviceInput, SecurityDetailsUncheckedCreateWithoutDeviceInput>
  }

  export type SecurityDetailsUpsertWithoutDeviceInput = {
    update: XOR<SecurityDetailsUpdateWithoutDeviceInput, SecurityDetailsUncheckedUpdateWithoutDeviceInput>
    create: XOR<SecurityDetailsCreateWithoutDeviceInput, SecurityDetailsUncheckedCreateWithoutDeviceInput>
    where?: SecurityDetailsWhereInput
  }

  export type SecurityDetailsUpdateToOneWithWhereWithoutDeviceInput = {
    where?: SecurityDetailsWhereInput
    data: XOR<SecurityDetailsUpdateWithoutDeviceInput, SecurityDetailsUncheckedUpdateWithoutDeviceInput>
  }

  export type SecurityDetailsUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSecurityDetailsNestedInput
  }

  export type SecurityDetailsUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerifyAttemptNo?: IntFieldUpdateOperationsInput | number
    failedResetPassAttemptNo?: IntFieldUpdateOperationsInput | number
    failedOTPAttemptNo?: IntFieldUpdateOperationsInput | number
    lastAttemptTime?: DateTimeFieldUpdateOperationsInput | Date | string
    failedLoginAttemptNo?: IntFieldUpdateOperationsInput | number
    lastLoginTime?: DateTimeFieldUpdateOperationsInput | Date | string
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateWithoutMovieSeriesInput = {
    id?: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewInput
    comment?: CommentCreateNestedManyWithoutReviewInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutMovieSeriesInput = {
    id?: string
    userId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutMovieSeriesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMovieSeriesInput, ReviewUncheckedCreateWithoutMovieSeriesInput>
  }

  export type ReviewCreateManyMovieSeriesInputEnvelope = {
    data: ReviewCreateManyMovieSeriesInput | ReviewCreateManyMovieSeriesInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistCreateWithoutMovieSeriesInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutMovieSeriesInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutMovieSeriesInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutMovieSeriesInput, WatchlistUncheckedCreateWithoutMovieSeriesInput>
  }

  export type WatchlistCreateManyMovieSeriesInputEnvelope = {
    data: WatchlistCreateManyMovieSeriesInput | WatchlistCreateManyMovieSeriesInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseRentHistoryCreateWithoutMovieSeriesInput = {
    id?: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
    user: UserCreateNestedOneWithoutPurchaseRentHistoryInput
  }

  export type PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput = {
    id?: string
    userId: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
  }

  export type PurchaseRentHistoryCreateOrConnectWithoutMovieSeriesInput = {
    where: PurchaseRentHistoryWhereUniqueInput
    create: XOR<PurchaseRentHistoryCreateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput>
  }

  export type PurchaseRentHistoryCreateManyMovieSeriesInputEnvelope = {
    data: PurchaseRentHistoryCreateManyMovieSeriesInput | PurchaseRentHistoryCreateManyMovieSeriesInput[]
    skipDuplicates?: boolean
  }

  export type MovieLikeCreateWithoutMovieSeriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
    user: UserCreateNestedOneWithoutMovieLikeInput
  }

  export type MovieLikeUncheckedCreateWithoutMovieSeriesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type MovieLikeCreateOrConnectWithoutMovieSeriesInput = {
    where: MovieLikeWhereUniqueInput
    create: XOR<MovieLikeCreateWithoutMovieSeriesInput, MovieLikeUncheckedCreateWithoutMovieSeriesInput>
  }

  export type MovieLikeCreateManyMovieSeriesInputEnvelope = {
    data: MovieLikeCreateManyMovieSeriesInput | MovieLikeCreateManyMovieSeriesInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutMovieSeriesInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMovieSeriesInput, ReviewUncheckedUpdateWithoutMovieSeriesInput>
    create: XOR<ReviewCreateWithoutMovieSeriesInput, ReviewUncheckedCreateWithoutMovieSeriesInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMovieSeriesInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMovieSeriesInput, ReviewUncheckedUpdateWithoutMovieSeriesInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMovieSeriesInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMovieSeriesInput>
  }

  export type WatchlistUpsertWithWhereUniqueWithoutMovieSeriesInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutMovieSeriesInput, WatchlistUncheckedUpdateWithoutMovieSeriesInput>
    create: XOR<WatchlistCreateWithoutMovieSeriesInput, WatchlistUncheckedCreateWithoutMovieSeriesInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutMovieSeriesInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutMovieSeriesInput, WatchlistUncheckedUpdateWithoutMovieSeriesInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutMovieSeriesInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutMovieSeriesInput>
  }

  export type PurchaseRentHistoryUpsertWithWhereUniqueWithoutMovieSeriesInput = {
    where: PurchaseRentHistoryWhereUniqueInput
    update: XOR<PurchaseRentHistoryUpdateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedUpdateWithoutMovieSeriesInput>
    create: XOR<PurchaseRentHistoryCreateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedCreateWithoutMovieSeriesInput>
  }

  export type PurchaseRentHistoryUpdateWithWhereUniqueWithoutMovieSeriesInput = {
    where: PurchaseRentHistoryWhereUniqueInput
    data: XOR<PurchaseRentHistoryUpdateWithoutMovieSeriesInput, PurchaseRentHistoryUncheckedUpdateWithoutMovieSeriesInput>
  }

  export type PurchaseRentHistoryUpdateManyWithWhereWithoutMovieSeriesInput = {
    where: PurchaseRentHistoryScalarWhereInput
    data: XOR<PurchaseRentHistoryUpdateManyMutationInput, PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesInput>
  }

  export type MovieLikeUpsertWithWhereUniqueWithoutMovieSeriesInput = {
    where: MovieLikeWhereUniqueInput
    update: XOR<MovieLikeUpdateWithoutMovieSeriesInput, MovieLikeUncheckedUpdateWithoutMovieSeriesInput>
    create: XOR<MovieLikeCreateWithoutMovieSeriesInput, MovieLikeUncheckedCreateWithoutMovieSeriesInput>
  }

  export type MovieLikeUpdateWithWhereUniqueWithoutMovieSeriesInput = {
    where: MovieLikeWhereUniqueInput
    data: XOR<MovieLikeUpdateWithoutMovieSeriesInput, MovieLikeUncheckedUpdateWithoutMovieSeriesInput>
  }

  export type MovieLikeUpdateManyWithWhereWithoutMovieSeriesInput = {
    where: MovieLikeScalarWhereInput
    data: XOR<MovieLikeUpdateManyMutationInput, MovieLikeUncheckedUpdateManyWithoutMovieSeriesInput>
  }

  export type MovieSeriesCreateWithoutReviewsInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlist?: WatchlistCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesCreateOrConnectWithoutReviewsInput = {
    where: MovieSeriesWhereUniqueInput
    create: XOR<MovieSeriesCreateWithoutReviewsInput, MovieSeriesUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type CommentCreateWithoutReviewInput = {
    id?: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutReviewInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput>
  }

  export type CommentCreateManyReviewInputEnvelope = {
    data: CommentCreateManyReviewInput | CommentCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ReviewLikeCreateWithoutReviewInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
    user: UserCreateNestedOneWithoutReviewLikeInput
  }

  export type ReviewLikeUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewLikeCreateOrConnectWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    create: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type ReviewLikeCreateManyReviewInputEnvelope = {
    data: ReviewLikeCreateManyReviewInput | ReviewLikeCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type MovieSeriesUpsertWithoutReviewsInput = {
    update: XOR<MovieSeriesUpdateWithoutReviewsInput, MovieSeriesUncheckedUpdateWithoutReviewsInput>
    create: XOR<MovieSeriesCreateWithoutReviewsInput, MovieSeriesUncheckedCreateWithoutReviewsInput>
    where?: MovieSeriesWhereInput
  }

  export type MovieSeriesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MovieSeriesWhereInput
    data: XOR<MovieSeriesUpdateWithoutReviewsInput, MovieSeriesUncheckedUpdateWithoutReviewsInput>
  }

  export type MovieSeriesUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUpdateManyWithoutMovieSeriesNestedInput
  }

  export type MovieSeriesUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUncheckedUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutMovieSeriesNestedInput
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutReviewInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutReviewInput, CommentUncheckedUpdateWithoutReviewInput>
    create: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutReviewInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutReviewInput, CommentUncheckedUpdateWithoutReviewInput>
  }

  export type CommentUpdateManyWithWhereWithoutReviewInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewLikeUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    update: XOR<ReviewLikeUpdateWithoutReviewInput, ReviewLikeUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type ReviewLikeUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    data: XOR<ReviewLikeUpdateWithoutReviewInput, ReviewLikeUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewLikeUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewLikeScalarWhereInput
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewCreateWithoutCommentInput = {
    id?: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    movieSeries: MovieSeriesCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutCommentInput = {
    id?: string
    movieSeriesId: string
    userId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutCommentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCommentInput, ReviewUncheckedCreateWithoutCommentInput>
  }

  export type UserCreateWithoutCommentInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type ReviewUpsertWithoutCommentInput = {
    update: XOR<ReviewUpdateWithoutCommentInput, ReviewUncheckedUpdateWithoutCommentInput>
    create: XOR<ReviewCreateWithoutCommentInput, ReviewUncheckedCreateWithoutCommentInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutCommentInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutCommentInput, ReviewUncheckedUpdateWithoutCommentInput>
  }

  export type ReviewUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieSeriesCreateWithoutMovieLikeInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutMovieSeriesInput
    watchlist?: WatchlistCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesUncheckedCreateWithoutMovieLikeInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieSeriesInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesCreateOrConnectWithoutMovieLikeInput = {
    where: MovieSeriesWhereUniqueInput
    create: XOR<MovieSeriesCreateWithoutMovieLikeInput, MovieSeriesUncheckedCreateWithoutMovieLikeInput>
  }

  export type UserCreateWithoutMovieLikeInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMovieLikeInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMovieLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovieLikeInput, UserUncheckedCreateWithoutMovieLikeInput>
  }

  export type MovieSeriesUpsertWithoutMovieLikeInput = {
    update: XOR<MovieSeriesUpdateWithoutMovieLikeInput, MovieSeriesUncheckedUpdateWithoutMovieLikeInput>
    create: XOR<MovieSeriesCreateWithoutMovieLikeInput, MovieSeriesUncheckedCreateWithoutMovieLikeInput>
    where?: MovieSeriesWhereInput
  }

  export type MovieSeriesUpdateToOneWithWhereWithoutMovieLikeInput = {
    where?: MovieSeriesWhereInput
    data: XOR<MovieSeriesUpdateWithoutMovieLikeInput, MovieSeriesUncheckedUpdateWithoutMovieLikeInput>
  }

  export type MovieSeriesUpdateWithoutMovieLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutMovieSeriesNestedInput
    watchlist?: WatchlistUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutMovieSeriesNestedInput
  }

  export type MovieSeriesUncheckedUpdateWithoutMovieLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutMovieSeriesNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesNestedInput
  }

  export type UserUpsertWithoutMovieLikeInput = {
    update: XOR<UserUpdateWithoutMovieLikeInput, UserUncheckedUpdateWithoutMovieLikeInput>
    create: XOR<UserCreateWithoutMovieLikeInput, UserUncheckedCreateWithoutMovieLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovieLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovieLikeInput, UserUncheckedUpdateWithoutMovieLikeInput>
  }

  export type UserUpdateWithoutMovieLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMovieLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewCreateWithoutReviewLikeInput = {
    id?: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    movieSeries: MovieSeriesCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewInput
    comment?: CommentCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutReviewLikeInput = {
    id?: string
    movieSeriesId: string
    userId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutReviewLikeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewLikeInput, ReviewUncheckedCreateWithoutReviewLikeInput>
  }

  export type UserCreateWithoutReviewLikeInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewLikeInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewLikeInput, UserUncheckedCreateWithoutReviewLikeInput>
  }

  export type ReviewUpsertWithoutReviewLikeInput = {
    update: XOR<ReviewUpdateWithoutReviewLikeInput, ReviewUncheckedUpdateWithoutReviewLikeInput>
    create: XOR<ReviewCreateWithoutReviewLikeInput, ReviewUncheckedCreateWithoutReviewLikeInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutReviewLikeInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutReviewLikeInput, ReviewUncheckedUpdateWithoutReviewLikeInput>
  }

  export type ReviewUpdateWithoutReviewLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    comment?: CommentUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type UserUpsertWithoutReviewLikeInput = {
    update: XOR<UserUpdateWithoutReviewLikeInput, UserUncheckedUpdateWithoutReviewLikeInput>
    create: XOR<UserCreateWithoutReviewLikeInput, UserUncheckedCreateWithoutReviewLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewLikeInput, UserUncheckedUpdateWithoutReviewLikeInput>
  }

  export type UserUpdateWithoutReviewLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWatchlistInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
  }

  export type MovieSeriesCreateWithoutWatchlistInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesUncheckedCreateWithoutWatchlistInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieSeriesInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesCreateOrConnectWithoutWatchlistInput = {
    where: MovieSeriesWhereUniqueInput
    create: XOR<MovieSeriesCreateWithoutWatchlistInput, MovieSeriesUncheckedCreateWithoutWatchlistInput>
  }

  export type UserUpsertWithoutWatchlistInput = {
    update: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
    create: XOR<UserCreateWithoutWatchlistInput, UserUncheckedCreateWithoutWatchlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistInput, UserUncheckedUpdateWithoutWatchlistInput>
  }

  export type UserUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieSeriesUpsertWithoutWatchlistInput = {
    update: XOR<MovieSeriesUpdateWithoutWatchlistInput, MovieSeriesUncheckedUpdateWithoutWatchlistInput>
    create: XOR<MovieSeriesCreateWithoutWatchlistInput, MovieSeriesUncheckedCreateWithoutWatchlistInput>
    where?: MovieSeriesWhereInput
  }

  export type MovieSeriesUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: MovieSeriesWhereInput
    data: XOR<MovieSeriesUpdateWithoutWatchlistInput, MovieSeriesUncheckedUpdateWithoutWatchlistInput>
  }

  export type MovieSeriesUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUpdateManyWithoutMovieSeriesNestedInput
  }

  export type MovieSeriesUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutMovieSeriesNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutMovieSeriesNestedInput
  }

  export type UserCreateWithoutPurchaseRentHistoryInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchaseRentHistoryInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchaseRentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseRentHistoryInput, UserUncheckedCreateWithoutPurchaseRentHistoryInput>
  }

  export type MovieSeriesCreateWithoutPurchaseRentHistoryInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutMovieSeriesInput
    watchlist?: WatchlistCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesUncheckedCreateWithoutPurchaseRentHistoryInput = {
    id?: string
    title: string
    posterUrl: string
    description: string
    releaseYear: number
    genre?: MovieSeriesCreategenreInput | $Enums.Genre[]
    director?: MovieSeriesCreatedirectorInput | string[]
    cast?: MovieSeriesCreatecastInput | string[]
    streamingPlatform?: MovieSeriesCreatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesCreateaccessLinkInput | string[]
    rating?: number
    viewCount?: number
    markByAdmin?: boolean
    price: number
    priceType: $Enums.PriceType
    discount?: number | null
    discountType?: $Enums.DiscountType | null
    discountExpiry?: Date | string | null
    isActive?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieSeriesInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutMovieSeriesInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutMovieSeriesInput
  }

  export type MovieSeriesCreateOrConnectWithoutPurchaseRentHistoryInput = {
    where: MovieSeriesWhereUniqueInput
    create: XOR<MovieSeriesCreateWithoutPurchaseRentHistoryInput, MovieSeriesUncheckedCreateWithoutPurchaseRentHistoryInput>
  }

  export type UserUpsertWithoutPurchaseRentHistoryInput = {
    update: XOR<UserUpdateWithoutPurchaseRentHistoryInput, UserUncheckedUpdateWithoutPurchaseRentHistoryInput>
    create: XOR<UserCreateWithoutPurchaseRentHistoryInput, UserUncheckedCreateWithoutPurchaseRentHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseRentHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseRentHistoryInput, UserUncheckedUpdateWithoutPurchaseRentHistoryInput>
  }

  export type UserUpdateWithoutPurchaseRentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseRentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieSeriesUpsertWithoutPurchaseRentHistoryInput = {
    update: XOR<MovieSeriesUpdateWithoutPurchaseRentHistoryInput, MovieSeriesUncheckedUpdateWithoutPurchaseRentHistoryInput>
    create: XOR<MovieSeriesCreateWithoutPurchaseRentHistoryInput, MovieSeriesUncheckedCreateWithoutPurchaseRentHistoryInput>
    where?: MovieSeriesWhereInput
  }

  export type MovieSeriesUpdateToOneWithWhereWithoutPurchaseRentHistoryInput = {
    where?: MovieSeriesWhereInput
    data: XOR<MovieSeriesUpdateWithoutPurchaseRentHistoryInput, MovieSeriesUncheckedUpdateWithoutPurchaseRentHistoryInput>
  }

  export type MovieSeriesUpdateWithoutPurchaseRentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutMovieSeriesNestedInput
    watchlist?: WatchlistUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUpdateManyWithoutMovieSeriesNestedInput
  }

  export type MovieSeriesUncheckedUpdateWithoutPurchaseRentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    posterUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    genre?: MovieSeriesUpdategenreInput | $Enums.Genre[]
    director?: MovieSeriesUpdatedirectorInput | string[]
    cast?: MovieSeriesUpdatecastInput | string[]
    streamingPlatform?: MovieSeriesUpdatestreamingPlatformInput | $Enums.StreamingPlatform[]
    accessLink?: MovieSeriesUpdateaccessLinkInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    markByAdmin?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    discountExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutMovieSeriesNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutMovieSeriesNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutMovieSeriesNestedInput
  }

  export type UserCreateWithoutPaymentTransactionInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    notification?: NotificationCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentTransactionInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
  }

  export type UserUpsertWithoutPaymentTransactionInput = {
    update: XOR<UserUpdateWithoutPaymentTransactionInput, UserUncheckedUpdateWithoutPaymentTransactionInput>
    create: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentTransactionInput, UserUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type UserUpdateWithoutPaymentTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    notification?: NotificationUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsCreateNestedOneWithoutUserInput
    review?: ReviewCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    watchlist?: WatchlistCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: string
    email: string
    name: string
    profilePhoto?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    securityDetails?: SecurityDetailsUncheckedCreateNestedOneWithoutUserInput
    review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    watchlist?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedCreateNestedManyWithoutUserInput
    paymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    movieLike?: MovieLikeUncheckedCreateNestedManyWithoutUserInput
    reviewLike?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUpdateOneWithoutUserNestedInput
    review?: ReviewUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityDetails?: SecurityDetailsUncheckedUpdateOneWithoutUserNestedInput
    review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    watchlist?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    purchaseRentHistory?: PurchaseRentHistoryUncheckedUpdateManyWithoutUserNestedInput
    paymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    movieLike?: MovieLikeUncheckedUpdateManyWithoutUserNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    movieSeriesId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    reviewId: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    movieSeriesId: string
    addedAt?: Date | string
  }

  export type PurchaseRentHistoryCreateManyUserInput = {
    id?: string
    movieSeriesId: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
  }

  export type PaymentTransactionCreateManyUserInput = {
    id?: string
    amount: number
    transactionId: string
    status: $Enums.PaymentStatus
    paymentMethod?: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MovieLikeCreateManyUserInput = {
    id?: string
    movieSeriesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewLikeCreateManyUserInput = {
    id?: string
    reviewId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutReviewsNestedInput
    comment?: CommentUpdateManyWithoutReviewNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRentHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutPurchaseRentHistoryNestedInput
  }

  export type PurchaseRentHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseRentHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    movieSeries?: MovieSeriesUpdateOneRequiredWithoutMovieLikeNestedInput
  }

  export type MovieLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieSeriesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    review?: ReviewUpdateOneRequiredWithoutReviewLikeNestedInput
  }

  export type ReviewLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceCreateManySecurityDetailsInput = {
    id?: string
    machineId?: string
    type: $Enums.DeviceType
    browser: string
    name: string
    os: string
    ip?: string | null
    userAgent: string
    location: string
    isActive: boolean
    isPreferred: boolean
    isInfected: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateWithoutSecurityDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateWithoutSecurityDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyWithoutSecurityDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    type?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    browser?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPreferred?: BoolFieldUpdateOperationsInput | boolean
    isInfected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyMovieSeriesInput = {
    id?: string
    userId: string
    rating?: number
    writtenReview: string
    isSpoiler?: boolean
    tags?: ReviewCreatetagsInput | string[]
    likesCount?: number
    commentCount?: number
    status?: $Enums.ReviewStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCreateManyMovieSeriesInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type PurchaseRentHistoryCreateManyMovieSeriesInput = {
    id?: string
    userId: string
    purchaseType: $Enums.PriceType
    purchaseDate?: Date | string
    paymentStatus: $Enums.PaymentStatus
    price: number
    transactionId: string
    accessExpiry?: Date | string | null
    isEmailSent?: boolean
  }

  export type MovieLikeCreateManyMovieSeriesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type ReviewUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    comment?: CommentUpdateManyWithoutReviewNestedInput
    reviewLike?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewLike?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    writtenReview?: StringFieldUpdateOperationsInput | string
    isSpoiler?: BoolFieldUpdateOperationsInput | boolean
    tags?: ReviewUpdatetagsInput | string[]
    likesCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRentHistoryUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPurchaseRentHistoryNestedInput
  }

  export type PurchaseRentHistoryUncheckedUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseRentHistoryUncheckedUpdateManyWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchaseType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    price?: FloatFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    accessExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailSent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieLikeUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMovieLikeNestedInput
  }

  export type MovieLikeUncheckedUpdateWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieLikeUncheckedUpdateManyWithoutMovieSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentCreateManyReviewInput = {
    id?: string
    userId: string
    content: string
    replyTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewLikeCreateManyReviewInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean
  }

  export type CommentUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    replyTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewLikeUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutReviewLikeNestedInput
  }

  export type ReviewLikeUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewLikeUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}