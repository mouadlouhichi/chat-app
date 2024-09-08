
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Account"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }, ExtArgs["result"]["account"]>
  composites: {}
}

/**
 * Model Account
 * 
 */
export type Account = runtime.Types.DefaultSelection<AccountPayload>
export type DirectMessageInfoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "DirectMessageInfo"
  objects: {
    user: UserPayload<ExtArgs>
    to_user: UserPayload<ExtArgs>
    channel: MessageChannelPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    channel_id: string
    user_id: string
    to_user_id: string
    open: boolean
  }, ExtArgs["result"]["directMessageInfo"]>
  composites: {}
}

/**
 * Model DirectMessageInfo
 * 
 */
export type DirectMessageInfo = runtime.Types.DefaultSelection<DirectMessageInfoPayload>
export type MessageChannelPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "MessageChannel"
  objects: {
    group: GroupPayload<ExtArgs> | null
    messages: MessagePayload<ExtArgs>[]
    directMessages: DirectMessageInfoPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    type: ChannelType
    group_id: string | null
    last_message_id: number | null
  }, ExtArgs["result"]["messageChannel"]>
  composites: {}
}

/**
 * Model MessageChannel
 * 
 */
export type MessageChannel = runtime.Types.DefaultSelection<MessageChannelPayload>
export type GroupPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Group"
  objects: {
    owner: UserPayload<ExtArgs>
    channel: MessageChannelPayload<ExtArgs>
    members: MemberPayload<ExtArgs>[]
    invites: GroupInvitePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    unique_name: string
    icon_hash: number | null
    banner_hash: number | null
    channel_id: string
    owner_id: string
    public: boolean
  }, ExtArgs["result"]["group"]>
  composites: {}
}

/**
 * Model Group
 * 
 */
export type Group = runtime.Types.DefaultSelection<GroupPayload>
export type GroupInvitePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "GroupInvite"
  objects: {
    group: GroupPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    group_id: string
    code: string
  }, ExtArgs["result"]["groupInvite"]>
  composites: {}
}

/**
 * Model GroupInvite
 * 
 */
export type GroupInvite = runtime.Types.DefaultSelection<GroupInvitePayload>
export type MemberPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Member"
  objects: {
    group: GroupPayload<ExtArgs>
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    group_id: string
    user_id: string
    admin: boolean
  }, ExtArgs["result"]["member"]>
  composites: {}
}

/**
 * Model Member
 * 
 */
export type Member = runtime.Types.DefaultSelection<MemberPayload>
export type MessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Message"
  objects: {
    author: UserPayload<ExtArgs>
    channel: MessageChannelPayload<ExtArgs>
    attachment: AttachmentPayload<ExtArgs> | null
    reply_to: MessagePayload<ExtArgs> | null
    replies: MessagePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    author_id: string
    channel_id: string
    content: string
    timestamp: Date
    attachment_id: string | null
    embeds: Prisma.JsonValue | null
    reply_id: number | null
  }, ExtArgs["result"]["message"]>
  composites: {}
}

/**
 * Model Message
 * 
 */
export type Message = runtime.Types.DefaultSelection<MessagePayload>
export type SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Session"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    sessionToken: string
    userId: string
    expires: Date
  }, ExtArgs["result"]["session"]>
  composites: {}
}

/**
 * Model Session
 * 
 */
export type Session = runtime.Types.DefaultSelection<SessionPayload>
export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    accounts: AccountPayload<ExtArgs>[]
    sessions: SessionPayload<ExtArgs>[]
    messages: MessagePayload<ExtArgs>[]
    ownedGroups: GroupPayload<ExtArgs>[]
    memberships: MemberPayload<ExtArgs>[]
    sentDirectMessages: DirectMessageInfoPayload<ExtArgs>[]
    receivedDirectMessages: DirectMessageInfoPayload<ExtArgs>[]
    createdEmotes: EmotePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    email: string | null
    emailVerified: Date | null
    image: string | null
    banner_hash: number | null
    is_ai: boolean
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type EmotePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Emote"
  objects: {
    creator: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    creatorId: string
    timestamp: Date
    hash: string | null
  }, ExtArgs["result"]["emote"]>
  composites: {}
}

/**
 * Model Emote
 * 
 */
export type Emote = runtime.Types.DefaultSelection<EmotePayload>
export type AttachmentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Attachment"
  objects: {
    messages: MessagePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    url: string
    type: AttachmentType | null
    bytes: number
    width: number | null
    height: number | null
  }, ExtArgs["result"]["attachment"]>
  composites: {}
}

/**
 * Model Attachment
 * 
 */
export type Attachment = runtime.Types.DefaultSelection<AttachmentPayload>

/**
 * Enums
 */

export const ChannelType: {
  DM: 'DM',
  GROUP: 'GROUP'
};

export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType]


export const AttachmentType: {
  image: 'image',
  video: 'video',
  raw: 'raw'
};

export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.directMessageInfo`: Exposes CRUD operations for the **DirectMessageInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectMessageInfos
    * const directMessageInfos = await prisma.directMessageInfo.findMany()
    * ```
    */
  get directMessageInfo(): Prisma.DirectMessageInfoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.messageChannel`: Exposes CRUD operations for the **MessageChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageChannels
    * const messageChannels = await prisma.messageChannel.findMany()
    * ```
    */
  get messageChannel(): Prisma.MessageChannelDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.groupInvite`: Exposes CRUD operations for the **GroupInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupInvites
    * const groupInvites = await prisma.groupInvite.findMany()
    * ```
    */
  get groupInvite(): Prisma.GroupInviteDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.emote`: Exposes CRUD operations for the **Emote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emotes
    * const emotes = await prisma.emote.findMany()
    * ```
    */
  get emote(): Prisma.EmoteDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    DirectMessageInfo: 'DirectMessageInfo',
    MessageChannel: 'MessageChannel',
    Group: 'Group',
    GroupInvite: 'GroupInvite',
    Member: 'Member',
    Message: 'Message',
    Session: 'Session',
    User: 'User',
    Emote: 'Emote',
    Attachment: 'Attachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'directMessageInfo' | 'messageChannel' | 'group' | 'groupInvite' | 'member' | 'message' | 'session' | 'user' | 'emote' | 'attachment'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: AccountPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      DirectMessageInfo: {
        payload: DirectMessageInfoPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DirectMessageInfoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectMessageInfoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>
          }
          findFirst: {
            args: Prisma.DirectMessageInfoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectMessageInfoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>
          }
          findMany: {
            args: Prisma.DirectMessageInfoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>[]
          }
          create: {
            args: Prisma.DirectMessageInfoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>
          }
          createMany: {
            args: Prisma.DirectMessageInfoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DirectMessageInfoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>
          }
          update: {
            args: Prisma.DirectMessageInfoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>
          }
          deleteMany: {
            args: Prisma.DirectMessageInfoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DirectMessageInfoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DirectMessageInfoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DirectMessageInfoPayload>
          }
          aggregate: {
            args: Prisma.DirectMessageInfoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDirectMessageInfo>
          }
          groupBy: {
            args: Prisma.DirectMessageInfoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DirectMessageInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectMessageInfoCountArgs<ExtArgs>,
            result: $Utils.Optional<DirectMessageInfoCountAggregateOutputType> | number
          }
        }
      }
      MessageChannel: {
        payload: MessageChannelPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MessageChannelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageChannelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>
          }
          findFirst: {
            args: Prisma.MessageChannelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageChannelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>
          }
          findMany: {
            args: Prisma.MessageChannelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>[]
          }
          create: {
            args: Prisma.MessageChannelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>
          }
          createMany: {
            args: Prisma.MessageChannelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageChannelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>
          }
          update: {
            args: Prisma.MessageChannelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>
          }
          deleteMany: {
            args: Prisma.MessageChannelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageChannelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageChannelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessageChannelPayload>
          }
          aggregate: {
            args: Prisma.MessageChannelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessageChannel>
          }
          groupBy: {
            args: Prisma.MessageChannelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageChannelCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageChannelCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: GroupPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupInvite: {
        payload: GroupInvitePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GroupInviteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupInviteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>
          }
          findFirst: {
            args: Prisma.GroupInviteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupInviteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>
          }
          findMany: {
            args: Prisma.GroupInviteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>[]
          }
          create: {
            args: Prisma.GroupInviteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>
          }
          createMany: {
            args: Prisma.GroupInviteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupInviteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>
          }
          update: {
            args: Prisma.GroupInviteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>
          }
          deleteMany: {
            args: Prisma.GroupInviteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupInviteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupInviteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupInvitePayload>
          }
          aggregate: {
            args: Prisma.GroupInviteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupInvite>
          }
          groupBy: {
            args: Prisma.GroupInviteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupInviteCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupInviteCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: MemberPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: MessagePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: SessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Emote: {
        payload: EmotePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EmoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>
          }
          findFirst: {
            args: Prisma.EmoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>
          }
          findMany: {
            args: Prisma.EmoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>[]
          }
          create: {
            args: Prisma.EmoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>
          }
          createMany: {
            args: Prisma.EmoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>
          }
          update: {
            args: Prisma.EmoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>
          }
          deleteMany: {
            args: Prisma.EmoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EmotePayload>
          }
          aggregate: {
            args: Prisma.EmoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmote>
          }
          groupBy: {
            args: Prisma.EmoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmoteCountArgs<ExtArgs>,
            result: $Utils.Optional<EmoteCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: AttachmentPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type MessageChannelCountOutputType
   */


  export type MessageChannelCountOutputType = {
    messages: number
    directMessages: number
  }

  export type MessageChannelCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messages?: boolean | MessageChannelCountOutputTypeCountMessagesArgs
    directMessages?: boolean | MessageChannelCountOutputTypeCountDirectMessagesArgs
  }

  // Custom InputTypes

  /**
   * MessageChannelCountOutputType without action
   */
  export type MessageChannelCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannelCountOutputType
     */
    select?: MessageChannelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MessageChannelCountOutputType without action
   */
  export type MessageChannelCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * MessageChannelCountOutputType without action
   */
  export type MessageChannelCountOutputTypeCountDirectMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DirectMessageInfoWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */


  export type GroupCountOutputType = {
    members: number
    invites: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    invites?: boolean | GroupCountOutputTypeCountInvitesArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupInviteWhereInput
  }



  /**
   * Count Type MessageCountOutputType
   */


  export type MessageCountOutputType = {
    replies: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    replies?: boolean | MessageCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    sessions: number
    messages: number
    ownedGroups: number
    memberships: number
    sentDirectMessages: number
    receivedDirectMessages: number
    createdEmotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    ownedGroups?: boolean | UserCountOutputTypeCountOwnedGroupsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    sentDirectMessages?: boolean | UserCountOutputTypeCountSentDirectMessagesArgs
    receivedDirectMessages?: boolean | UserCountOutputTypeCountReceivedDirectMessagesArgs
    createdEmotes?: boolean | UserCountOutputTypeCountCreatedEmotesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedGroupsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentDirectMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DirectMessageInfoWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedDirectMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DirectMessageInfoWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEmotesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmoteWhereInput
  }



  /**
   * Count Type AttachmentCountOutputType
   */


  export type AttachmentCountOutputType = {
    messages: number
  }

  export type AttachmentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messages?: boolean | AttachmentCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * AttachmentCountOutputType without action
   */
  export type AttachmentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachmentCountOutputType
     */
    select?: AttachmentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AttachmentCountOutputType without action
   */
  export type AttachmentCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> = $Types.GetResult<AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Types.GetResult<AccountPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AccountFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AccountFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model DirectMessageInfo
   */


  export type AggregateDirectMessageInfo = {
    _count: DirectMessageInfoCountAggregateOutputType | null
    _min: DirectMessageInfoMinAggregateOutputType | null
    _max: DirectMessageInfoMaxAggregateOutputType | null
  }

  export type DirectMessageInfoMinAggregateOutputType = {
    channel_id: string | null
    user_id: string | null
    to_user_id: string | null
    open: boolean | null
  }

  export type DirectMessageInfoMaxAggregateOutputType = {
    channel_id: string | null
    user_id: string | null
    to_user_id: string | null
    open: boolean | null
  }

  export type DirectMessageInfoCountAggregateOutputType = {
    channel_id: number
    user_id: number
    to_user_id: number
    open: number
    _all: number
  }


  export type DirectMessageInfoMinAggregateInputType = {
    channel_id?: true
    user_id?: true
    to_user_id?: true
    open?: true
  }

  export type DirectMessageInfoMaxAggregateInputType = {
    channel_id?: true
    user_id?: true
    to_user_id?: true
    open?: true
  }

  export type DirectMessageInfoCountAggregateInputType = {
    channel_id?: true
    user_id?: true
    to_user_id?: true
    open?: true
    _all?: true
  }

  export type DirectMessageInfoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessageInfo to aggregate.
     */
    where?: DirectMessageInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageInfos to fetch.
     */
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectMessageInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectMessageInfos
    **/
    _count?: true | DirectMessageInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectMessageInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectMessageInfoMaxAggregateInputType
  }

  export type GetDirectMessageInfoAggregateType<T extends DirectMessageInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectMessageInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectMessageInfo[P]>
      : GetScalarType<T[P], AggregateDirectMessageInfo[P]>
  }




  export type DirectMessageInfoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DirectMessageInfoWhereInput
    orderBy?: Enumerable<DirectMessageInfoOrderByWithAggregationInput>
    by: DirectMessageInfoScalarFieldEnum[]
    having?: DirectMessageInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectMessageInfoCountAggregateInputType | true
    _min?: DirectMessageInfoMinAggregateInputType
    _max?: DirectMessageInfoMaxAggregateInputType
  }


  export type DirectMessageInfoGroupByOutputType = {
    channel_id: string
    user_id: string
    to_user_id: string
    open: boolean
    _count: DirectMessageInfoCountAggregateOutputType | null
    _min: DirectMessageInfoMinAggregateOutputType | null
    _max: DirectMessageInfoMaxAggregateOutputType | null
  }

  type GetDirectMessageInfoGroupByPayload<T extends DirectMessageInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DirectMessageInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectMessageInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectMessageInfoGroupByOutputType[P]>
            : GetScalarType<T[P], DirectMessageInfoGroupByOutputType[P]>
        }
      >
    >


  export type DirectMessageInfoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    channel_id?: boolean
    user_id?: boolean
    to_user_id?: boolean
    open?: boolean
    user?: boolean | UserArgs<ExtArgs>
    to_user?: boolean | UserArgs<ExtArgs>
    channel?: boolean | MessageChannelArgs<ExtArgs>
  }, ExtArgs["result"]["directMessageInfo"]>

  export type DirectMessageInfoSelectScalar = {
    channel_id?: boolean
    user_id?: boolean
    to_user_id?: boolean
    open?: boolean
  }

  export type DirectMessageInfoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    to_user?: boolean | UserArgs<ExtArgs>
    channel?: boolean | MessageChannelArgs<ExtArgs>
  }


  type DirectMessageInfoGetPayload<S extends boolean | null | undefined | DirectMessageInfoArgs> = $Types.GetResult<DirectMessageInfoPayload, S>

  type DirectMessageInfoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DirectMessageInfoFindManyArgs, 'select' | 'include'> & {
      select?: DirectMessageInfoCountAggregateInputType | true
    }

  export interface DirectMessageInfoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectMessageInfo'], meta: { name: 'DirectMessageInfo' } }
    /**
     * Find zero or one DirectMessageInfo that matches the filter.
     * @param {DirectMessageInfoFindUniqueArgs} args - Arguments to find a DirectMessageInfo
     * @example
     * // Get one DirectMessageInfo
     * const directMessageInfo = await prisma.directMessageInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirectMessageInfoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirectMessageInfoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DirectMessageInfo'> extends True ? Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one DirectMessageInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirectMessageInfoFindUniqueOrThrowArgs} args - Arguments to find a DirectMessageInfo
     * @example
     * // Get one DirectMessageInfo
     * const directMessageInfo = await prisma.directMessageInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirectMessageInfoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectMessageInfoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first DirectMessageInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoFindFirstArgs} args - Arguments to find a DirectMessageInfo
     * @example
     * // Get one DirectMessageInfo
     * const directMessageInfo = await prisma.directMessageInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirectMessageInfoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirectMessageInfoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DirectMessageInfo'> extends True ? Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first DirectMessageInfo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoFindFirstOrThrowArgs} args - Arguments to find a DirectMessageInfo
     * @example
     * // Get one DirectMessageInfo
     * const directMessageInfo = await prisma.directMessageInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirectMessageInfoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectMessageInfoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more DirectMessageInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectMessageInfos
     * const directMessageInfos = await prisma.directMessageInfo.findMany()
     * 
     * // Get first 10 DirectMessageInfos
     * const directMessageInfos = await prisma.directMessageInfo.findMany({ take: 10 })
     * 
     * // Only select the `channel_id`
     * const directMessageInfoWithChannel_idOnly = await prisma.directMessageInfo.findMany({ select: { channel_id: true } })
     * 
    **/
    findMany<T extends DirectMessageInfoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectMessageInfoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a DirectMessageInfo.
     * @param {DirectMessageInfoCreateArgs} args - Arguments to create a DirectMessageInfo.
     * @example
     * // Create one DirectMessageInfo
     * const DirectMessageInfo = await prisma.directMessageInfo.create({
     *   data: {
     *     // ... data to create a DirectMessageInfo
     *   }
     * })
     * 
    **/
    create<T extends DirectMessageInfoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DirectMessageInfoCreateArgs<ExtArgs>>
    ): Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many DirectMessageInfos.
     *     @param {DirectMessageInfoCreateManyArgs} args - Arguments to create many DirectMessageInfos.
     *     @example
     *     // Create many DirectMessageInfos
     *     const directMessageInfo = await prisma.directMessageInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirectMessageInfoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectMessageInfoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DirectMessageInfo.
     * @param {DirectMessageInfoDeleteArgs} args - Arguments to delete one DirectMessageInfo.
     * @example
     * // Delete one DirectMessageInfo
     * const DirectMessageInfo = await prisma.directMessageInfo.delete({
     *   where: {
     *     // ... filter to delete one DirectMessageInfo
     *   }
     * })
     * 
    **/
    delete<T extends DirectMessageInfoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DirectMessageInfoDeleteArgs<ExtArgs>>
    ): Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one DirectMessageInfo.
     * @param {DirectMessageInfoUpdateArgs} args - Arguments to update one DirectMessageInfo.
     * @example
     * // Update one DirectMessageInfo
     * const directMessageInfo = await prisma.directMessageInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirectMessageInfoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DirectMessageInfoUpdateArgs<ExtArgs>>
    ): Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more DirectMessageInfos.
     * @param {DirectMessageInfoDeleteManyArgs} args - Arguments to filter DirectMessageInfos to delete.
     * @example
     * // Delete a few DirectMessageInfos
     * const { count } = await prisma.directMessageInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirectMessageInfoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectMessageInfoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMessageInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectMessageInfos
     * const directMessageInfo = await prisma.directMessageInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirectMessageInfoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DirectMessageInfoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirectMessageInfo.
     * @param {DirectMessageInfoUpsertArgs} args - Arguments to update or create a DirectMessageInfo.
     * @example
     * // Update or create a DirectMessageInfo
     * const directMessageInfo = await prisma.directMessageInfo.upsert({
     *   create: {
     *     // ... data to create a DirectMessageInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectMessageInfo we want to update
     *   }
     * })
    **/
    upsert<T extends DirectMessageInfoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DirectMessageInfoUpsertArgs<ExtArgs>>
    ): Prisma__DirectMessageInfoClient<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of DirectMessageInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoCountArgs} args - Arguments to filter DirectMessageInfos to count.
     * @example
     * // Count the number of DirectMessageInfos
     * const count = await prisma.directMessageInfo.count({
     *   where: {
     *     // ... the filter for the DirectMessageInfos we want to count
     *   }
     * })
    **/
    count<T extends DirectMessageInfoCountArgs>(
      args?: Subset<T, DirectMessageInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectMessageInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectMessageInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectMessageInfoAggregateArgs>(args: Subset<T, DirectMessageInfoAggregateArgs>): Prisma.PrismaPromise<GetDirectMessageInfoAggregateType<T>>

    /**
     * Group by DirectMessageInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageInfoGroupByArgs} args - Group by arguments.
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
      T extends DirectMessageInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectMessageInfoGroupByArgs['orderBy'] }
        : { orderBy?: DirectMessageInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DirectMessageInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectMessageInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectMessageInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectMessageInfoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    to_user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    channel<T extends MessageChannelArgs<ExtArgs> = {}>(args?: Subset<T, MessageChannelArgs<ExtArgs>>): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DirectMessageInfo base type for findUnique actions
   */
  export type DirectMessageInfoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageInfo to fetch.
     */
    where: DirectMessageInfoWhereUniqueInput
  }

  /**
   * DirectMessageInfo findUnique
   */
  export interface DirectMessageInfoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DirectMessageInfoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirectMessageInfo findUniqueOrThrow
   */
  export type DirectMessageInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageInfo to fetch.
     */
    where: DirectMessageInfoWhereUniqueInput
  }


  /**
   * DirectMessageInfo base type for findFirst actions
   */
  export type DirectMessageInfoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageInfo to fetch.
     */
    where?: DirectMessageInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageInfos to fetch.
     */
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessageInfos.
     */
    cursor?: DirectMessageInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessageInfos.
     */
    distinct?: Enumerable<DirectMessageInfoScalarFieldEnum>
  }

  /**
   * DirectMessageInfo findFirst
   */
  export interface DirectMessageInfoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DirectMessageInfoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirectMessageInfo findFirstOrThrow
   */
  export type DirectMessageInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageInfo to fetch.
     */
    where?: DirectMessageInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageInfos to fetch.
     */
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessageInfos.
     */
    cursor?: DirectMessageInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessageInfos.
     */
    distinct?: Enumerable<DirectMessageInfoScalarFieldEnum>
  }


  /**
   * DirectMessageInfo findMany
   */
  export type DirectMessageInfoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessageInfos to fetch.
     */
    where?: DirectMessageInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessageInfos to fetch.
     */
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectMessageInfos.
     */
    cursor?: DirectMessageInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessageInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessageInfos.
     */
    skip?: number
    distinct?: Enumerable<DirectMessageInfoScalarFieldEnum>
  }


  /**
   * DirectMessageInfo create
   */
  export type DirectMessageInfoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectMessageInfo.
     */
    data: XOR<DirectMessageInfoCreateInput, DirectMessageInfoUncheckedCreateInput>
  }


  /**
   * DirectMessageInfo createMany
   */
  export type DirectMessageInfoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectMessageInfos.
     */
    data: Enumerable<DirectMessageInfoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DirectMessageInfo update
   */
  export type DirectMessageInfoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectMessageInfo.
     */
    data: XOR<DirectMessageInfoUpdateInput, DirectMessageInfoUncheckedUpdateInput>
    /**
     * Choose, which DirectMessageInfo to update.
     */
    where: DirectMessageInfoWhereUniqueInput
  }


  /**
   * DirectMessageInfo updateMany
   */
  export type DirectMessageInfoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectMessageInfos.
     */
    data: XOR<DirectMessageInfoUpdateManyMutationInput, DirectMessageInfoUncheckedUpdateManyInput>
    /**
     * Filter which DirectMessageInfos to update
     */
    where?: DirectMessageInfoWhereInput
  }


  /**
   * DirectMessageInfo upsert
   */
  export type DirectMessageInfoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectMessageInfo to update in case it exists.
     */
    where: DirectMessageInfoWhereUniqueInput
    /**
     * In case the DirectMessageInfo found by the `where` argument doesn't exist, create a new DirectMessageInfo with this data.
     */
    create: XOR<DirectMessageInfoCreateInput, DirectMessageInfoUncheckedCreateInput>
    /**
     * In case the DirectMessageInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectMessageInfoUpdateInput, DirectMessageInfoUncheckedUpdateInput>
  }


  /**
   * DirectMessageInfo delete
   */
  export type DirectMessageInfoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    /**
     * Filter which DirectMessageInfo to delete.
     */
    where: DirectMessageInfoWhereUniqueInput
  }


  /**
   * DirectMessageInfo deleteMany
   */
  export type DirectMessageInfoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessageInfos to delete
     */
    where?: DirectMessageInfoWhereInput
  }


  /**
   * DirectMessageInfo without action
   */
  export type DirectMessageInfoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
  }



  /**
   * Model MessageChannel
   */


  export type AggregateMessageChannel = {
    _count: MessageChannelCountAggregateOutputType | null
    _avg: MessageChannelAvgAggregateOutputType | null
    _sum: MessageChannelSumAggregateOutputType | null
    _min: MessageChannelMinAggregateOutputType | null
    _max: MessageChannelMaxAggregateOutputType | null
  }

  export type MessageChannelAvgAggregateOutputType = {
    last_message_id: number | null
  }

  export type MessageChannelSumAggregateOutputType = {
    last_message_id: number | null
  }

  export type MessageChannelMinAggregateOutputType = {
    id: string | null
    type: ChannelType | null
    group_id: string | null
    last_message_id: number | null
  }

  export type MessageChannelMaxAggregateOutputType = {
    id: string | null
    type: ChannelType | null
    group_id: string | null
    last_message_id: number | null
  }

  export type MessageChannelCountAggregateOutputType = {
    id: number
    type: number
    group_id: number
    last_message_id: number
    _all: number
  }


  export type MessageChannelAvgAggregateInputType = {
    last_message_id?: true
  }

  export type MessageChannelSumAggregateInputType = {
    last_message_id?: true
  }

  export type MessageChannelMinAggregateInputType = {
    id?: true
    type?: true
    group_id?: true
    last_message_id?: true
  }

  export type MessageChannelMaxAggregateInputType = {
    id?: true
    type?: true
    group_id?: true
    last_message_id?: true
  }

  export type MessageChannelCountAggregateInputType = {
    id?: true
    type?: true
    group_id?: true
    last_message_id?: true
    _all?: true
  }

  export type MessageChannelAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageChannel to aggregate.
     */
    where?: MessageChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageChannels to fetch.
     */
    orderBy?: Enumerable<MessageChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageChannels
    **/
    _count?: true | MessageChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageChannelMaxAggregateInputType
  }

  export type GetMessageChannelAggregateType<T extends MessageChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageChannel[P]>
      : GetScalarType<T[P], AggregateMessageChannel[P]>
  }




  export type MessageChannelGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageChannelWhereInput
    orderBy?: Enumerable<MessageChannelOrderByWithAggregationInput>
    by: MessageChannelScalarFieldEnum[]
    having?: MessageChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageChannelCountAggregateInputType | true
    _avg?: MessageChannelAvgAggregateInputType
    _sum?: MessageChannelSumAggregateInputType
    _min?: MessageChannelMinAggregateInputType
    _max?: MessageChannelMaxAggregateInputType
  }


  export type MessageChannelGroupByOutputType = {
    id: string
    type: ChannelType
    group_id: string | null
    last_message_id: number | null
    _count: MessageChannelCountAggregateOutputType | null
    _avg: MessageChannelAvgAggregateOutputType | null
    _sum: MessageChannelSumAggregateOutputType | null
    _min: MessageChannelMinAggregateOutputType | null
    _max: MessageChannelMaxAggregateOutputType | null
  }

  type GetMessageChannelGroupByPayload<T extends MessageChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageChannelGroupByOutputType[P]>
            : GetScalarType<T[P], MessageChannelGroupByOutputType[P]>
        }
      >
    >


  export type MessageChannelSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    group_id?: boolean
    last_message_id?: boolean
    group?: boolean | GroupArgs<ExtArgs>
    messages?: boolean | MessageChannel$messagesArgs<ExtArgs>
    directMessages?: boolean | MessageChannel$directMessagesArgs<ExtArgs>
    _count?: boolean | MessageChannelCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["messageChannel"]>

  export type MessageChannelSelectScalar = {
    id?: boolean
    type?: boolean
    group_id?: boolean
    last_message_id?: boolean
  }

  export type MessageChannelInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    group?: boolean | GroupArgs<ExtArgs>
    messages?: boolean | MessageChannel$messagesArgs<ExtArgs>
    directMessages?: boolean | MessageChannel$directMessagesArgs<ExtArgs>
    _count?: boolean | MessageChannelCountOutputTypeArgs<ExtArgs>
  }


  type MessageChannelGetPayload<S extends boolean | null | undefined | MessageChannelArgs> = $Types.GetResult<MessageChannelPayload, S>

  type MessageChannelCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageChannelFindManyArgs, 'select' | 'include'> & {
      select?: MessageChannelCountAggregateInputType | true
    }

  export interface MessageChannelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageChannel'], meta: { name: 'MessageChannel' } }
    /**
     * Find zero or one MessageChannel that matches the filter.
     * @param {MessageChannelFindUniqueArgs} args - Arguments to find a MessageChannel
     * @example
     * // Get one MessageChannel
     * const messageChannel = await prisma.messageChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageChannelFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageChannelFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MessageChannel'> extends True ? Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one MessageChannel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageChannelFindUniqueOrThrowArgs} args - Arguments to find a MessageChannel
     * @example
     * // Get one MessageChannel
     * const messageChannel = await prisma.messageChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageChannelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageChannelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first MessageChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelFindFirstArgs} args - Arguments to find a MessageChannel
     * @example
     * // Get one MessageChannel
     * const messageChannel = await prisma.messageChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageChannelFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageChannelFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MessageChannel'> extends True ? Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first MessageChannel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelFindFirstOrThrowArgs} args - Arguments to find a MessageChannel
     * @example
     * // Get one MessageChannel
     * const messageChannel = await prisma.messageChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageChannelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageChannelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more MessageChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageChannels
     * const messageChannels = await prisma.messageChannel.findMany()
     * 
     * // Get first 10 MessageChannels
     * const messageChannels = await prisma.messageChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageChannelWithIdOnly = await prisma.messageChannel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageChannelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageChannelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a MessageChannel.
     * @param {MessageChannelCreateArgs} args - Arguments to create a MessageChannel.
     * @example
     * // Create one MessageChannel
     * const MessageChannel = await prisma.messageChannel.create({
     *   data: {
     *     // ... data to create a MessageChannel
     *   }
     * })
     * 
    **/
    create<T extends MessageChannelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageChannelCreateArgs<ExtArgs>>
    ): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many MessageChannels.
     *     @param {MessageChannelCreateManyArgs} args - Arguments to create many MessageChannels.
     *     @example
     *     // Create many MessageChannels
     *     const messageChannel = await prisma.messageChannel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageChannelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageChannelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MessageChannel.
     * @param {MessageChannelDeleteArgs} args - Arguments to delete one MessageChannel.
     * @example
     * // Delete one MessageChannel
     * const MessageChannel = await prisma.messageChannel.delete({
     *   where: {
     *     // ... filter to delete one MessageChannel
     *   }
     * })
     * 
    **/
    delete<T extends MessageChannelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageChannelDeleteArgs<ExtArgs>>
    ): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one MessageChannel.
     * @param {MessageChannelUpdateArgs} args - Arguments to update one MessageChannel.
     * @example
     * // Update one MessageChannel
     * const messageChannel = await prisma.messageChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageChannelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageChannelUpdateArgs<ExtArgs>>
    ): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more MessageChannels.
     * @param {MessageChannelDeleteManyArgs} args - Arguments to filter MessageChannels to delete.
     * @example
     * // Delete a few MessageChannels
     * const { count } = await prisma.messageChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageChannelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageChannelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageChannels
     * const messageChannel = await prisma.messageChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageChannelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageChannelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageChannel.
     * @param {MessageChannelUpsertArgs} args - Arguments to update or create a MessageChannel.
     * @example
     * // Update or create a MessageChannel
     * const messageChannel = await prisma.messageChannel.upsert({
     *   create: {
     *     // ... data to create a MessageChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageChannel we want to update
     *   }
     * })
    **/
    upsert<T extends MessageChannelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageChannelUpsertArgs<ExtArgs>>
    ): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of MessageChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelCountArgs} args - Arguments to filter MessageChannels to count.
     * @example
     * // Count the number of MessageChannels
     * const count = await prisma.messageChannel.count({
     *   where: {
     *     // ... the filter for the MessageChannels we want to count
     *   }
     * })
    **/
    count<T extends MessageChannelCountArgs>(
      args?: Subset<T, MessageChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageChannelAggregateArgs>(args: Subset<T, MessageChannelAggregateArgs>): Prisma.PrismaPromise<GetMessageChannelAggregateType<T>>

    /**
     * Group by MessageChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageChannelGroupByArgs} args - Group by arguments.
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
      T extends MessageChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageChannelGroupByArgs['orderBy'] }
        : { orderBy?: MessageChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessageChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageChannelClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    group<T extends GroupArgs<ExtArgs> = {}>(args?: Subset<T, GroupArgs<ExtArgs>>): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    messages<T extends MessageChannel$messagesArgs<ExtArgs> = {}>(args?: Subset<T, MessageChannel$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    directMessages<T extends MessageChannel$directMessagesArgs<ExtArgs> = {}>(args?: Subset<T, MessageChannel$directMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MessageChannel base type for findUnique actions
   */
  export type MessageChannelFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * Filter, which MessageChannel to fetch.
     */
    where: MessageChannelWhereUniqueInput
  }

  /**
   * MessageChannel findUnique
   */
  export interface MessageChannelFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MessageChannelFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageChannel findUniqueOrThrow
   */
  export type MessageChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * Filter, which MessageChannel to fetch.
     */
    where: MessageChannelWhereUniqueInput
  }


  /**
   * MessageChannel base type for findFirst actions
   */
  export type MessageChannelFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * Filter, which MessageChannel to fetch.
     */
    where?: MessageChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageChannels to fetch.
     */
    orderBy?: Enumerable<MessageChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageChannels.
     */
    cursor?: MessageChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageChannels.
     */
    distinct?: Enumerable<MessageChannelScalarFieldEnum>
  }

  /**
   * MessageChannel findFirst
   */
  export interface MessageChannelFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MessageChannelFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MessageChannel findFirstOrThrow
   */
  export type MessageChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * Filter, which MessageChannel to fetch.
     */
    where?: MessageChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageChannels to fetch.
     */
    orderBy?: Enumerable<MessageChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageChannels.
     */
    cursor?: MessageChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageChannels.
     */
    distinct?: Enumerable<MessageChannelScalarFieldEnum>
  }


  /**
   * MessageChannel findMany
   */
  export type MessageChannelFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * Filter, which MessageChannels to fetch.
     */
    where?: MessageChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageChannels to fetch.
     */
    orderBy?: Enumerable<MessageChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageChannels.
     */
    cursor?: MessageChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageChannels.
     */
    skip?: number
    distinct?: Enumerable<MessageChannelScalarFieldEnum>
  }


  /**
   * MessageChannel create
   */
  export type MessageChannelCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageChannel.
     */
    data: XOR<MessageChannelCreateInput, MessageChannelUncheckedCreateInput>
  }


  /**
   * MessageChannel createMany
   */
  export type MessageChannelCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageChannels.
     */
    data: Enumerable<MessageChannelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MessageChannel update
   */
  export type MessageChannelUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageChannel.
     */
    data: XOR<MessageChannelUpdateInput, MessageChannelUncheckedUpdateInput>
    /**
     * Choose, which MessageChannel to update.
     */
    where: MessageChannelWhereUniqueInput
  }


  /**
   * MessageChannel updateMany
   */
  export type MessageChannelUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageChannels.
     */
    data: XOR<MessageChannelUpdateManyMutationInput, MessageChannelUncheckedUpdateManyInput>
    /**
     * Filter which MessageChannels to update
     */
    where?: MessageChannelWhereInput
  }


  /**
   * MessageChannel upsert
   */
  export type MessageChannelUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageChannel to update in case it exists.
     */
    where: MessageChannelWhereUniqueInput
    /**
     * In case the MessageChannel found by the `where` argument doesn't exist, create a new MessageChannel with this data.
     */
    create: XOR<MessageChannelCreateInput, MessageChannelUncheckedCreateInput>
    /**
     * In case the MessageChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageChannelUpdateInput, MessageChannelUncheckedUpdateInput>
  }


  /**
   * MessageChannel delete
   */
  export type MessageChannelDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
    /**
     * Filter which MessageChannel to delete.
     */
    where: MessageChannelWhereUniqueInput
  }


  /**
   * MessageChannel deleteMany
   */
  export type MessageChannelDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageChannels to delete
     */
    where?: MessageChannelWhereInput
  }


  /**
   * MessageChannel.messages
   */
  export type MessageChannel$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * MessageChannel.directMessages
   */
  export type MessageChannel$directMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    where?: DirectMessageInfoWhereInput
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    cursor?: DirectMessageInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMessageInfoScalarFieldEnum>
  }


  /**
   * MessageChannel without action
   */
  export type MessageChannelArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageChannel
     */
    select?: MessageChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageChannelInclude<ExtArgs> | null
  }



  /**
   * Model Group
   */


  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    icon_hash: number | null
    banner_hash: number | null
  }

  export type GroupSumAggregateOutputType = {
    icon_hash: number | null
    banner_hash: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
    icon_hash: number | null
    banner_hash: number | null
    channel_id: string | null
    owner_id: string | null
    public: boolean | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    unique_name: string | null
    icon_hash: number | null
    banner_hash: number | null
    channel_id: string | null
    owner_id: string | null
    public: boolean | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    unique_name: number
    icon_hash: number
    banner_hash: number
    channel_id: number
    owner_id: number
    public: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    icon_hash?: true
    banner_hash?: true
  }

  export type GroupSumAggregateInputType = {
    icon_hash?: true
    banner_hash?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    icon_hash?: true
    banner_hash?: true
    channel_id?: true
    owner_id?: true
    public?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    icon_hash?: true
    banner_hash?: true
    channel_id?: true
    owner_id?: true
    public?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    unique_name?: true
    icon_hash?: true
    banner_hash?: true
    channel_id?: true
    owner_id?: true
    public?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: Enumerable<GroupOrderByWithAggregationInput>
    by: GroupScalarFieldEnum[]
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }


  export type GroupGroupByOutputType = {
    id: string
    name: string
    unique_name: string
    icon_hash: number | null
    banner_hash: number | null
    channel_id: string
    owner_id: string
    public: boolean
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unique_name?: boolean
    icon_hash?: boolean
    banner_hash?: boolean
    channel_id?: boolean
    owner_id?: boolean
    public?: boolean
    owner?: boolean | UserArgs<ExtArgs>
    channel?: boolean | MessageChannelArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    invites?: boolean | Group$invitesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    unique_name?: boolean
    icon_hash?: boolean
    banner_hash?: boolean
    channel_id?: boolean
    owner_id?: boolean
    public?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    owner?: boolean | UserArgs<ExtArgs>
    channel?: boolean | MessageChannelArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    invites?: boolean | Group$invitesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeArgs<ExtArgs>
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupArgs> = $Types.GetResult<GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Group'> extends True ? Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Group'> extends True ? Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    owner<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    channel<T extends MessageChannelArgs<ExtArgs> = {}>(args?: Subset<T, MessageChannelArgs<ExtArgs>>): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findMany', never>| Null>;

    invites<T extends Group$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Group$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Group base type for findUnique actions
   */
  export type GroupFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUnique
   */
  export interface GroupFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group base type for findFirst actions
   */
  export type GroupFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: Enumerable<GroupScalarFieldEnum>
  }

  /**
   * Group findFirst
   */
  export interface GroupFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: Enumerable<GroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Group.invites
   */
  export type Group$invitesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    where?: GroupInviteWhereInput
    orderBy?: Enumerable<GroupInviteOrderByWithRelationInput>
    cursor?: GroupInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupInviteScalarFieldEnum>
  }


  /**
   * Group without action
   */
  export type GroupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model GroupInvite
   */


  export type AggregateGroupInvite = {
    _count: GroupInviteCountAggregateOutputType | null
    _min: GroupInviteMinAggregateOutputType | null
    _max: GroupInviteMaxAggregateOutputType | null
  }

  export type GroupInviteMinAggregateOutputType = {
    group_id: string | null
    code: string | null
  }

  export type GroupInviteMaxAggregateOutputType = {
    group_id: string | null
    code: string | null
  }

  export type GroupInviteCountAggregateOutputType = {
    group_id: number
    code: number
    _all: number
  }


  export type GroupInviteMinAggregateInputType = {
    group_id?: true
    code?: true
  }

  export type GroupInviteMaxAggregateInputType = {
    group_id?: true
    code?: true
  }

  export type GroupInviteCountAggregateInputType = {
    group_id?: true
    code?: true
    _all?: true
  }

  export type GroupInviteAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupInvite to aggregate.
     */
    where?: GroupInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvites to fetch.
     */
    orderBy?: Enumerable<GroupInviteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupInvites
    **/
    _count?: true | GroupInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupInviteMaxAggregateInputType
  }

  export type GetGroupInviteAggregateType<T extends GroupInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupInvite[P]>
      : GetScalarType<T[P], AggregateGroupInvite[P]>
  }




  export type GroupInviteGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupInviteWhereInput
    orderBy?: Enumerable<GroupInviteOrderByWithAggregationInput>
    by: GroupInviteScalarFieldEnum[]
    having?: GroupInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupInviteCountAggregateInputType | true
    _min?: GroupInviteMinAggregateInputType
    _max?: GroupInviteMaxAggregateInputType
  }


  export type GroupInviteGroupByOutputType = {
    group_id: string
    code: string
    _count: GroupInviteCountAggregateOutputType | null
    _min: GroupInviteMinAggregateOutputType | null
    _max: GroupInviteMaxAggregateOutputType | null
  }

  type GetGroupInviteGroupByPayload<T extends GroupInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GroupInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupInviteGroupByOutputType[P]>
            : GetScalarType<T[P], GroupInviteGroupByOutputType[P]>
        }
      >
    >


  export type GroupInviteSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    code?: boolean
    group?: boolean | GroupArgs<ExtArgs>
  }, ExtArgs["result"]["groupInvite"]>

  export type GroupInviteSelectScalar = {
    group_id?: boolean
    code?: boolean
  }

  export type GroupInviteInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    group?: boolean | GroupArgs<ExtArgs>
  }


  type GroupInviteGetPayload<S extends boolean | null | undefined | GroupInviteArgs> = $Types.GetResult<GroupInvitePayload, S>

  type GroupInviteCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupInviteFindManyArgs, 'select' | 'include'> & {
      select?: GroupInviteCountAggregateInputType | true
    }

  export interface GroupInviteDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupInvite'], meta: { name: 'GroupInvite' } }
    /**
     * Find zero or one GroupInvite that matches the filter.
     * @param {GroupInviteFindUniqueArgs} args - Arguments to find a GroupInvite
     * @example
     * // Get one GroupInvite
     * const groupInvite = await prisma.groupInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupInviteFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupInviteFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GroupInvite'> extends True ? Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one GroupInvite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupInviteFindUniqueOrThrowArgs} args - Arguments to find a GroupInvite
     * @example
     * // Get one GroupInvite
     * const groupInvite = await prisma.groupInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupInviteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupInviteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first GroupInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteFindFirstArgs} args - Arguments to find a GroupInvite
     * @example
     * // Get one GroupInvite
     * const groupInvite = await prisma.groupInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupInviteFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupInviteFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GroupInvite'> extends True ? Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first GroupInvite that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteFindFirstOrThrowArgs} args - Arguments to find a GroupInvite
     * @example
     * // Get one GroupInvite
     * const groupInvite = await prisma.groupInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupInviteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupInviteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more GroupInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupInvites
     * const groupInvites = await prisma.groupInvite.findMany()
     * 
     * // Get first 10 GroupInvites
     * const groupInvites = await prisma.groupInvite.findMany({ take: 10 })
     * 
     * // Only select the `group_id`
     * const groupInviteWithGroup_idOnly = await prisma.groupInvite.findMany({ select: { group_id: true } })
     * 
    **/
    findMany<T extends GroupInviteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupInviteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a GroupInvite.
     * @param {GroupInviteCreateArgs} args - Arguments to create a GroupInvite.
     * @example
     * // Create one GroupInvite
     * const GroupInvite = await prisma.groupInvite.create({
     *   data: {
     *     // ... data to create a GroupInvite
     *   }
     * })
     * 
    **/
    create<T extends GroupInviteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupInviteCreateArgs<ExtArgs>>
    ): Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many GroupInvites.
     *     @param {GroupInviteCreateManyArgs} args - Arguments to create many GroupInvites.
     *     @example
     *     // Create many GroupInvites
     *     const groupInvite = await prisma.groupInvite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupInviteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupInviteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupInvite.
     * @param {GroupInviteDeleteArgs} args - Arguments to delete one GroupInvite.
     * @example
     * // Delete one GroupInvite
     * const GroupInvite = await prisma.groupInvite.delete({
     *   where: {
     *     // ... filter to delete one GroupInvite
     *   }
     * })
     * 
    **/
    delete<T extends GroupInviteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupInviteDeleteArgs<ExtArgs>>
    ): Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one GroupInvite.
     * @param {GroupInviteUpdateArgs} args - Arguments to update one GroupInvite.
     * @example
     * // Update one GroupInvite
     * const groupInvite = await prisma.groupInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupInviteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupInviteUpdateArgs<ExtArgs>>
    ): Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more GroupInvites.
     * @param {GroupInviteDeleteManyArgs} args - Arguments to filter GroupInvites to delete.
     * @example
     * // Delete a few GroupInvites
     * const { count } = await prisma.groupInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupInviteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupInviteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupInvites
     * const groupInvite = await prisma.groupInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupInviteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupInviteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupInvite.
     * @param {GroupInviteUpsertArgs} args - Arguments to update or create a GroupInvite.
     * @example
     * // Update or create a GroupInvite
     * const groupInvite = await prisma.groupInvite.upsert({
     *   create: {
     *     // ... data to create a GroupInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupInvite we want to update
     *   }
     * })
    **/
    upsert<T extends GroupInviteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupInviteUpsertArgs<ExtArgs>>
    ): Prisma__GroupInviteClient<$Types.GetResult<GroupInvitePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of GroupInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteCountArgs} args - Arguments to filter GroupInvites to count.
     * @example
     * // Count the number of GroupInvites
     * const count = await prisma.groupInvite.count({
     *   where: {
     *     // ... the filter for the GroupInvites we want to count
     *   }
     * })
    **/
    count<T extends GroupInviteCountArgs>(
      args?: Subset<T, GroupInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupInviteAggregateArgs>(args: Subset<T, GroupInviteAggregateArgs>): Prisma.PrismaPromise<GetGroupInviteAggregateType<T>>

    /**
     * Group by GroupInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInviteGroupByArgs} args - Group by arguments.
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
      T extends GroupInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupInviteGroupByArgs['orderBy'] }
        : { orderBy?: GroupInviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroupInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupInviteClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    group<T extends GroupArgs<ExtArgs> = {}>(args?: Subset<T, GroupArgs<ExtArgs>>): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GroupInvite base type for findUnique actions
   */
  export type GroupInviteFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvite to fetch.
     */
    where: GroupInviteWhereUniqueInput
  }

  /**
   * GroupInvite findUnique
   */
  export interface GroupInviteFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupInviteFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupInvite findUniqueOrThrow
   */
  export type GroupInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvite to fetch.
     */
    where: GroupInviteWhereUniqueInput
  }


  /**
   * GroupInvite base type for findFirst actions
   */
  export type GroupInviteFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvite to fetch.
     */
    where?: GroupInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvites to fetch.
     */
    orderBy?: Enumerable<GroupInviteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupInvites.
     */
    cursor?: GroupInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupInvites.
     */
    distinct?: Enumerable<GroupInviteScalarFieldEnum>
  }

  /**
   * GroupInvite findFirst
   */
  export interface GroupInviteFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupInviteFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupInvite findFirstOrThrow
   */
  export type GroupInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvite to fetch.
     */
    where?: GroupInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvites to fetch.
     */
    orderBy?: Enumerable<GroupInviteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupInvites.
     */
    cursor?: GroupInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupInvites.
     */
    distinct?: Enumerable<GroupInviteScalarFieldEnum>
  }


  /**
   * GroupInvite findMany
   */
  export type GroupInviteFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvites to fetch.
     */
    where?: GroupInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvites to fetch.
     */
    orderBy?: Enumerable<GroupInviteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupInvites.
     */
    cursor?: GroupInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvites.
     */
    skip?: number
    distinct?: Enumerable<GroupInviteScalarFieldEnum>
  }


  /**
   * GroupInvite create
   */
  export type GroupInviteCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupInvite.
     */
    data: XOR<GroupInviteCreateInput, GroupInviteUncheckedCreateInput>
  }


  /**
   * GroupInvite createMany
   */
  export type GroupInviteCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupInvites.
     */
    data: Enumerable<GroupInviteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GroupInvite update
   */
  export type GroupInviteUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupInvite.
     */
    data: XOR<GroupInviteUpdateInput, GroupInviteUncheckedUpdateInput>
    /**
     * Choose, which GroupInvite to update.
     */
    where: GroupInviteWhereUniqueInput
  }


  /**
   * GroupInvite updateMany
   */
  export type GroupInviteUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupInvites.
     */
    data: XOR<GroupInviteUpdateManyMutationInput, GroupInviteUncheckedUpdateManyInput>
    /**
     * Filter which GroupInvites to update
     */
    where?: GroupInviteWhereInput
  }


  /**
   * GroupInvite upsert
   */
  export type GroupInviteUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupInvite to update in case it exists.
     */
    where: GroupInviteWhereUniqueInput
    /**
     * In case the GroupInvite found by the `where` argument doesn't exist, create a new GroupInvite with this data.
     */
    create: XOR<GroupInviteCreateInput, GroupInviteUncheckedCreateInput>
    /**
     * In case the GroupInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupInviteUpdateInput, GroupInviteUncheckedUpdateInput>
  }


  /**
   * GroupInvite delete
   */
  export type GroupInviteDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
    /**
     * Filter which GroupInvite to delete.
     */
    where: GroupInviteWhereUniqueInput
  }


  /**
   * GroupInvite deleteMany
   */
  export type GroupInviteDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupInvites to delete
     */
    where?: GroupInviteWhereInput
  }


  /**
   * GroupInvite without action
   */
  export type GroupInviteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvite
     */
    select?: GroupInviteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInviteInclude<ExtArgs> | null
  }



  /**
   * Model Member
   */


  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    group_id: string | null
    user_id: string | null
    admin: boolean | null
  }

  export type MemberMaxAggregateOutputType = {
    group_id: string | null
    user_id: string | null
    admin: boolean | null
  }

  export type MemberCountAggregateOutputType = {
    group_id: number
    user_id: number
    admin: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    group_id?: true
    user_id?: true
    admin?: true
  }

  export type MemberMaxAggregateInputType = {
    group_id?: true
    user_id?: true
    admin?: true
  }

  export type MemberCountAggregateInputType = {
    group_id?: true
    user_id?: true
    admin?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: Enumerable<MemberOrderByWithAggregationInput>
    by: MemberScalarFieldEnum[]
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }


  export type MemberGroupByOutputType = {
    group_id: string
    user_id: string
    admin: boolean
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    group_id?: boolean
    user_id?: boolean
    admin?: boolean
    group?: boolean | GroupArgs<ExtArgs>
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    group_id?: boolean
    user_id?: boolean
    admin?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    group?: boolean | GroupArgs<ExtArgs>
    user?: boolean | UserArgs<ExtArgs>
  }


  type MemberGetPayload<S extends boolean | null | undefined | MemberArgs> = $Types.GetResult<MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Member'> extends True ? Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Member'> extends True ? Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `group_id`
     * const memberWithGroup_idOnly = await prisma.member.findMany({ select: { group_id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberCreateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>
    ): Prisma__MemberClient<$Types.GetResult<MemberPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    group<T extends GroupArgs<ExtArgs> = {}>(args?: Subset<T, GroupArgs<ExtArgs>>): Prisma__GroupClient<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Member base type for findUnique actions
   */
  export type MemberFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUnique
   */
  export interface MemberFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MemberFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member base type for findFirst actions
   */
  export type MemberFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: Enumerable<MemberScalarFieldEnum>
  }

  /**
   * Member findFirst
   */
  export interface MemberFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MemberFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: Enumerable<MemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }


  /**
   * Member without action
   */
  export type MemberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    reply_id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    reply_id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    author_id: string | null
    channel_id: string | null
    content: string | null
    timestamp: Date | null
    attachment_id: string | null
    reply_id: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    author_id: string | null
    channel_id: string | null
    content: string | null
    timestamp: Date | null
    attachment_id: string | null
    reply_id: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    author_id: number
    channel_id: number
    content: number
    timestamp: number
    attachment_id: number
    embeds: number
    reply_id: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    reply_id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    reply_id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    author_id?: true
    channel_id?: true
    content?: true
    timestamp?: true
    attachment_id?: true
    reply_id?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    author_id?: true
    channel_id?: true
    content?: true
    timestamp?: true
    attachment_id?: true
    reply_id?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    author_id?: true
    channel_id?: true
    content?: true
    timestamp?: true
    attachment_id?: true
    embeds?: true
    reply_id?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: MessageScalarFieldEnum[]
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: number
    author_id: string
    channel_id: string
    content: string
    timestamp: Date
    attachment_id: string | null
    embeds: JsonValue | null
    reply_id: number | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    channel_id?: boolean
    content?: boolean
    timestamp?: boolean
    attachment_id?: boolean
    embeds?: boolean
    reply_id?: boolean
    author?: boolean | UserArgs<ExtArgs>
    channel?: boolean | MessageChannelArgs<ExtArgs>
    attachment?: boolean | AttachmentArgs<ExtArgs>
    reply_to?: boolean | MessageArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    author_id?: boolean
    channel_id?: boolean
    content?: boolean
    timestamp?: boolean
    attachment_id?: boolean
    embeds?: boolean
    reply_id?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | UserArgs<ExtArgs>
    channel?: boolean | MessageChannelArgs<ExtArgs>
    attachment?: boolean | AttachmentArgs<ExtArgs>
    reply_to?: boolean | MessageArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeArgs<ExtArgs>
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> = $Types.GetResult<MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    channel<T extends MessageChannelArgs<ExtArgs> = {}>(args?: Subset<T, MessageChannelArgs<ExtArgs>>): Prisma__MessageChannelClient<$Types.GetResult<MessageChannelPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    attachment<T extends AttachmentArgs<ExtArgs> = {}>(args?: Subset<T, AttachmentArgs<ExtArgs>>): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    reply_to<T extends MessageArgs<ExtArgs> = {}>(args?: Subset<T, MessageArgs<ExtArgs>>): Prisma__MessageClient<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    replies<T extends Message$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUnique
   */
  export interface MessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MessageFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message findFirst
   */
  export interface MessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends MessageFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: Enumerable<MessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message.replies
   */
  export type Message$repliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message without action
   */
  export type MessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> = $Types.GetResult<SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Types.GetResult<SessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    banner_hash: number | null
  }

  export type UserSumAggregateOutputType = {
    banner_hash: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    banner_hash: number | null
    is_ai: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    banner_hash: number | null
    is_ai: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    banner_hash: number
    is_ai: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    banner_hash?: true
  }

  export type UserSumAggregateInputType = {
    banner_hash?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    banner_hash?: true
    is_ai?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    banner_hash?: true
    is_ai?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    banner_hash?: true
    is_ai?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string | null
    emailVerified: Date | null
    image: string | null
    banner_hash: number | null
    is_ai: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    banner_hash?: boolean
    is_ai?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    sentDirectMessages?: boolean | User$sentDirectMessagesArgs<ExtArgs>
    receivedDirectMessages?: boolean | User$receivedDirectMessagesArgs<ExtArgs>
    createdEmotes?: boolean | User$createdEmotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    banner_hash?: boolean
    is_ai?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    sentDirectMessages?: boolean | User$sentDirectMessagesArgs<ExtArgs>
    receivedDirectMessages?: boolean | User$receivedDirectMessagesArgs<ExtArgs>
    createdEmotes?: boolean | User$createdEmotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AccountPayload<ExtArgs>, T, 'findMany', never>| Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    ownedGroups<T extends User$ownedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GroupPayload<ExtArgs>, T, 'findMany', never>| Null>;

    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MemberPayload<ExtArgs>, T, 'findMany', never>| Null>;

    sentDirectMessages<T extends User$sentDirectMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentDirectMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    receivedDirectMessages<T extends User$receivedDirectMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedDirectMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DirectMessageInfoPayload<ExtArgs>, T, 'findMany', never>| Null>;

    createdEmotes<T extends User$createdEmotesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEmotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * User.ownedGroups
   */
  export type User$ownedGroupsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: Enumerable<GroupOrderByWithRelationInput>
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupScalarFieldEnum>
  }


  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: Enumerable<MemberOrderByWithRelationInput>
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MemberScalarFieldEnum>
  }


  /**
   * User.sentDirectMessages
   */
  export type User$sentDirectMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    where?: DirectMessageInfoWhereInput
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    cursor?: DirectMessageInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMessageInfoScalarFieldEnum>
  }


  /**
   * User.receivedDirectMessages
   */
  export type User$receivedDirectMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessageInfo
     */
    select?: DirectMessageInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInfoInclude<ExtArgs> | null
    where?: DirectMessageInfoWhereInput
    orderBy?: Enumerable<DirectMessageInfoOrderByWithRelationInput>
    cursor?: DirectMessageInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMessageInfoScalarFieldEnum>
  }


  /**
   * User.createdEmotes
   */
  export type User$createdEmotesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    where?: EmoteWhereInput
    orderBy?: Enumerable<EmoteOrderByWithRelationInput>
    cursor?: EmoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EmoteScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Emote
   */


  export type AggregateEmote = {
    _count: EmoteCountAggregateOutputType | null
    _min: EmoteMinAggregateOutputType | null
    _max: EmoteMaxAggregateOutputType | null
  }

  export type EmoteMinAggregateOutputType = {
    id: string | null
    name: string | null
    creatorId: string | null
    timestamp: Date | null
    hash: string | null
  }

  export type EmoteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    creatorId: string | null
    timestamp: Date | null
    hash: string | null
  }

  export type EmoteCountAggregateOutputType = {
    id: number
    name: number
    creatorId: number
    timestamp: number
    hash: number
    _all: number
  }


  export type EmoteMinAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    timestamp?: true
    hash?: true
  }

  export type EmoteMaxAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    timestamp?: true
    hash?: true
  }

  export type EmoteCountAggregateInputType = {
    id?: true
    name?: true
    creatorId?: true
    timestamp?: true
    hash?: true
    _all?: true
  }

  export type EmoteAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emote to aggregate.
     */
    where?: EmoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotes to fetch.
     */
    orderBy?: Enumerable<EmoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emotes
    **/
    _count?: true | EmoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmoteMaxAggregateInputType
  }

  export type GetEmoteAggregateType<T extends EmoteAggregateArgs> = {
        [P in keyof T & keyof AggregateEmote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmote[P]>
      : GetScalarType<T[P], AggregateEmote[P]>
  }




  export type EmoteGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EmoteWhereInput
    orderBy?: Enumerable<EmoteOrderByWithAggregationInput>
    by: EmoteScalarFieldEnum[]
    having?: EmoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmoteCountAggregateInputType | true
    _min?: EmoteMinAggregateInputType
    _max?: EmoteMaxAggregateInputType
  }


  export type EmoteGroupByOutputType = {
    id: string
    name: string
    creatorId: string
    timestamp: Date
    hash: string | null
    _count: EmoteCountAggregateOutputType | null
    _min: EmoteMinAggregateOutputType | null
    _max: EmoteMaxAggregateOutputType | null
  }

  type GetEmoteGroupByPayload<T extends EmoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EmoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmoteGroupByOutputType[P]>
            : GetScalarType<T[P], EmoteGroupByOutputType[P]>
        }
      >
    >


  export type EmoteSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creatorId?: boolean
    timestamp?: boolean
    hash?: boolean
    creator?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["emote"]>

  export type EmoteSelectScalar = {
    id?: boolean
    name?: boolean
    creatorId?: boolean
    timestamp?: boolean
    hash?: boolean
  }

  export type EmoteInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    creator?: boolean | UserArgs<ExtArgs>
  }


  type EmoteGetPayload<S extends boolean | null | undefined | EmoteArgs> = $Types.GetResult<EmotePayload, S>

  type EmoteCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EmoteFindManyArgs, 'select' | 'include'> & {
      select?: EmoteCountAggregateInputType | true
    }

  export interface EmoteDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emote'], meta: { name: 'Emote' } }
    /**
     * Find zero or one Emote that matches the filter.
     * @param {EmoteFindUniqueArgs} args - Arguments to find a Emote
     * @example
     * // Get one Emote
     * const emote = await prisma.emote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmoteFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmoteFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Emote'> extends True ? Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Emote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmoteFindUniqueOrThrowArgs} args - Arguments to find a Emote
     * @example
     * // Get one Emote
     * const emote = await prisma.emote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Emote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteFindFirstArgs} args - Arguments to find a Emote
     * @example
     * // Get one Emote
     * const emote = await prisma.emote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmoteFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmoteFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Emote'> extends True ? Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Emote that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteFindFirstOrThrowArgs} args - Arguments to find a Emote
     * @example
     * // Get one Emote
     * const emote = await prisma.emote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Emotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emotes
     * const emotes = await prisma.emote.findMany()
     * 
     * // Get first 10 Emotes
     * const emotes = await prisma.emote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emoteWithIdOnly = await prisma.emote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EmotePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Emote.
     * @param {EmoteCreateArgs} args - Arguments to create a Emote.
     * @example
     * // Create one Emote
     * const Emote = await prisma.emote.create({
     *   data: {
     *     // ... data to create a Emote
     *   }
     * })
     * 
    **/
    create<T extends EmoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmoteCreateArgs<ExtArgs>>
    ): Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Emotes.
     *     @param {EmoteCreateManyArgs} args - Arguments to create many Emotes.
     *     @example
     *     // Create many Emotes
     *     const emote = await prisma.emote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emote.
     * @param {EmoteDeleteArgs} args - Arguments to delete one Emote.
     * @example
     * // Delete one Emote
     * const Emote = await prisma.emote.delete({
     *   where: {
     *     // ... filter to delete one Emote
     *   }
     * })
     * 
    **/
    delete<T extends EmoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmoteDeleteArgs<ExtArgs>>
    ): Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Emote.
     * @param {EmoteUpdateArgs} args - Arguments to update one Emote.
     * @example
     * // Update one Emote
     * const emote = await prisma.emote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmoteUpdateArgs<ExtArgs>>
    ): Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Emotes.
     * @param {EmoteDeleteManyArgs} args - Arguments to filter Emotes to delete.
     * @example
     * // Delete a few Emotes
     * const { count } = await prisma.emote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emotes
     * const emote = await prisma.emote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emote.
     * @param {EmoteUpsertArgs} args - Arguments to update or create a Emote.
     * @example
     * // Update or create a Emote
     * const emote = await prisma.emote.upsert({
     *   create: {
     *     // ... data to create a Emote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emote we want to update
     *   }
     * })
    **/
    upsert<T extends EmoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmoteUpsertArgs<ExtArgs>>
    ): Prisma__EmoteClient<$Types.GetResult<EmotePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Emotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteCountArgs} args - Arguments to filter Emotes to count.
     * @example
     * // Count the number of Emotes
     * const count = await prisma.emote.count({
     *   where: {
     *     // ... the filter for the Emotes we want to count
     *   }
     * })
    **/
    count<T extends EmoteCountArgs>(
      args?: Subset<T, EmoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmoteAggregateArgs>(args: Subset<T, EmoteAggregateArgs>): Prisma.PrismaPromise<GetEmoteAggregateType<T>>

    /**
     * Group by Emote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmoteGroupByArgs} args - Group by arguments.
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
      T extends EmoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmoteGroupByArgs['orderBy'] }
        : { orderBy?: EmoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Emote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmoteClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    creator<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Emote base type for findUnique actions
   */
  export type EmoteFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * Filter, which Emote to fetch.
     */
    where: EmoteWhereUniqueInput
  }

  /**
   * Emote findUnique
   */
  export interface EmoteFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EmoteFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Emote findUniqueOrThrow
   */
  export type EmoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * Filter, which Emote to fetch.
     */
    where: EmoteWhereUniqueInput
  }


  /**
   * Emote base type for findFirst actions
   */
  export type EmoteFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * Filter, which Emote to fetch.
     */
    where?: EmoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotes to fetch.
     */
    orderBy?: Enumerable<EmoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emotes.
     */
    cursor?: EmoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emotes.
     */
    distinct?: Enumerable<EmoteScalarFieldEnum>
  }

  /**
   * Emote findFirst
   */
  export interface EmoteFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EmoteFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Emote findFirstOrThrow
   */
  export type EmoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * Filter, which Emote to fetch.
     */
    where?: EmoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotes to fetch.
     */
    orderBy?: Enumerable<EmoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emotes.
     */
    cursor?: EmoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emotes.
     */
    distinct?: Enumerable<EmoteScalarFieldEnum>
  }


  /**
   * Emote findMany
   */
  export type EmoteFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * Filter, which Emotes to fetch.
     */
    where?: EmoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotes to fetch.
     */
    orderBy?: Enumerable<EmoteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emotes.
     */
    cursor?: EmoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotes.
     */
    skip?: number
    distinct?: Enumerable<EmoteScalarFieldEnum>
  }


  /**
   * Emote create
   */
  export type EmoteCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Emote.
     */
    data: XOR<EmoteCreateInput, EmoteUncheckedCreateInput>
  }


  /**
   * Emote createMany
   */
  export type EmoteCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emotes.
     */
    data: Enumerable<EmoteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Emote update
   */
  export type EmoteUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Emote.
     */
    data: XOR<EmoteUpdateInput, EmoteUncheckedUpdateInput>
    /**
     * Choose, which Emote to update.
     */
    where: EmoteWhereUniqueInput
  }


  /**
   * Emote updateMany
   */
  export type EmoteUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emotes.
     */
    data: XOR<EmoteUpdateManyMutationInput, EmoteUncheckedUpdateManyInput>
    /**
     * Filter which Emotes to update
     */
    where?: EmoteWhereInput
  }


  /**
   * Emote upsert
   */
  export type EmoteUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Emote to update in case it exists.
     */
    where: EmoteWhereUniqueInput
    /**
     * In case the Emote found by the `where` argument doesn't exist, create a new Emote with this data.
     */
    create: XOR<EmoteCreateInput, EmoteUncheckedCreateInput>
    /**
     * In case the Emote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmoteUpdateInput, EmoteUncheckedUpdateInput>
  }


  /**
   * Emote delete
   */
  export type EmoteDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
    /**
     * Filter which Emote to delete.
     */
    where: EmoteWhereUniqueInput
  }


  /**
   * Emote deleteMany
   */
  export type EmoteDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emotes to delete
     */
    where?: EmoteWhereInput
  }


  /**
   * Emote without action
   */
  export type EmoteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emote
     */
    select?: EmoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmoteInclude<ExtArgs> | null
  }



  /**
   * Model Attachment
   */


  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    bytes: number | null
    width: number | null
    height: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    bytes: number | null
    width: number | null
    height: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    type: AttachmentType | null
    bytes: number | null
    width: number | null
    height: number | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    type: AttachmentType | null
    bytes: number | null
    width: number | null
    height: number | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    name: number
    url: number
    type: number
    bytes: number
    width: number
    height: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    bytes?: true
    width?: true
    height?: true
  }

  export type AttachmentSumAggregateInputType = {
    bytes?: true
    width?: true
    height?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    bytes?: true
    width?: true
    height?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    bytes?: true
    width?: true
    height?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    bytes?: true
    width?: true
    height?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Enumerable<AttachmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: Enumerable<AttachmentOrderByWithAggregationInput>
    by: AttachmentScalarFieldEnum[]
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }


  export type AttachmentGroupByOutputType = {
    id: string
    name: string
    url: string
    type: AttachmentType | null
    bytes: number
    width: number | null
    height: number | null
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    bytes?: boolean
    width?: boolean
    height?: boolean
    messages?: boolean | Attachment$messagesArgs<ExtArgs>
    _count?: boolean | AttachmentCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    bytes?: boolean
    width?: boolean
    height?: boolean
  }

  export type AttachmentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messages?: boolean | Attachment$messagesArgs<ExtArgs>
    _count?: boolean | AttachmentCountOutputTypeArgs<ExtArgs>
  }


  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentArgs> = $Types.GetResult<AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AttachmentFindManyArgs, 'select' | 'include'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttachmentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Attachment'> extends True ? Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Attachment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttachmentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Attachment'> extends True ? Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Attachment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttachmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
    **/
    create<T extends AttachmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Attachments.
     *     @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     *     @example
     *     // Create many Attachments
     *     const attachment = await prisma.attachment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttachmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
    **/
    delete<T extends AttachmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttachmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttachmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttachmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
    **/
    upsert<T extends AttachmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Types.GetResult<AttachmentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    messages<T extends Attachment$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<MessagePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Attachment base type for findUnique actions
   */
  export type AttachmentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUnique
   */
  export interface AttachmentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttachmentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment base type for findFirst actions
   */
  export type AttachmentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Enumerable<AttachmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: Enumerable<AttachmentScalarFieldEnum>
  }

  /**
   * Attachment findFirst
   */
  export interface AttachmentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AttachmentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Enumerable<AttachmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: Enumerable<AttachmentScalarFieldEnum>
  }


  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Enumerable<AttachmentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: Enumerable<AttachmentScalarFieldEnum>
  }


  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }


  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: Enumerable<AttachmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
  }


  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }


  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
  }


  /**
   * Attachment.messages
   */
  export type Attachment$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Attachment without action
   */
  export type AttachmentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const DirectMessageInfoScalarFieldEnum: {
    channel_id: 'channel_id',
    user_id: 'user_id',
    to_user_id: 'to_user_id',
    open: 'open'
  };

  export type DirectMessageInfoScalarFieldEnum = (typeof DirectMessageInfoScalarFieldEnum)[keyof typeof DirectMessageInfoScalarFieldEnum]


  export const MessageChannelScalarFieldEnum: {
    id: 'id',
    type: 'type',
    group_id: 'group_id',
    last_message_id: 'last_message_id'
  };

  export type MessageChannelScalarFieldEnum = (typeof MessageChannelScalarFieldEnum)[keyof typeof MessageChannelScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unique_name: 'unique_name',
    icon_hash: 'icon_hash',
    banner_hash: 'banner_hash',
    channel_id: 'channel_id',
    owner_id: 'owner_id',
    public: 'public'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupInviteScalarFieldEnum: {
    group_id: 'group_id',
    code: 'code'
  };

  export type GroupInviteScalarFieldEnum = (typeof GroupInviteScalarFieldEnum)[keyof typeof GroupInviteScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    group_id: 'group_id',
    user_id: 'user_id',
    admin: 'admin'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    channel_id: 'channel_id',
    content: 'content',
    timestamp: 'timestamp',
    attachment_id: 'attachment_id',
    embeds: 'embeds',
    reply_id: 'reply_id'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    banner_hash: 'banner_hash',
    is_ai: 'is_ai'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmoteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creatorId: 'creatorId',
    timestamp: 'timestamp',
    hash: 'hash'
  };

  export type EmoteScalarFieldEnum = (typeof EmoteScalarFieldEnum)[keyof typeof EmoteScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    type: 'type',
    bytes: 'bytes',
    width: 'width',
    height: 'height'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
  }

  export type DirectMessageInfoWhereInput = {
    AND?: Enumerable<DirectMessageInfoWhereInput>
    OR?: Enumerable<DirectMessageInfoWhereInput>
    NOT?: Enumerable<DirectMessageInfoWhereInput>
    channel_id?: StringFilter | string
    user_id?: StringFilter | string
    to_user_id?: StringFilter | string
    open?: BoolFilter | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    to_user?: XOR<UserRelationFilter, UserWhereInput>
    channel?: XOR<MessageChannelRelationFilter, MessageChannelWhereInput>
  }

  export type DirectMessageInfoOrderByWithRelationInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    to_user_id?: SortOrder
    open?: SortOrder
    user?: UserOrderByWithRelationInput
    to_user?: UserOrderByWithRelationInput
    channel?: MessageChannelOrderByWithRelationInput
  }

  export type DirectMessageInfoWhereUniqueInput = {
    user_id_to_user_id?: DirectMessageInfoUser_idTo_user_idCompoundUniqueInput
  }

  export type DirectMessageInfoOrderByWithAggregationInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    to_user_id?: SortOrder
    open?: SortOrder
    _count?: DirectMessageInfoCountOrderByAggregateInput
    _max?: DirectMessageInfoMaxOrderByAggregateInput
    _min?: DirectMessageInfoMinOrderByAggregateInput
  }

  export type DirectMessageInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirectMessageInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirectMessageInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirectMessageInfoScalarWhereWithAggregatesInput>
    channel_id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    to_user_id?: StringWithAggregatesFilter | string
    open?: BoolWithAggregatesFilter | boolean
  }

  export type MessageChannelWhereInput = {
    AND?: Enumerable<MessageChannelWhereInput>
    OR?: Enumerable<MessageChannelWhereInput>
    NOT?: Enumerable<MessageChannelWhereInput>
    id?: StringFilter | string
    type?: EnumChannelTypeFilter | ChannelType
    group_id?: StringNullableFilter | string | null
    last_message_id?: IntNullableFilter | number | null
    group?: XOR<GroupRelationFilter, GroupWhereInput> | null
    messages?: MessageListRelationFilter
    directMessages?: DirectMessageInfoListRelationFilter
  }

  export type MessageChannelOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    group_id?: SortOrderInput | SortOrder
    last_message_id?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    directMessages?: DirectMessageInfoOrderByRelationAggregateInput
  }

  export type MessageChannelWhereUniqueInput = {
    id?: string
  }

  export type MessageChannelOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    group_id?: SortOrderInput | SortOrder
    last_message_id?: SortOrderInput | SortOrder
    _count?: MessageChannelCountOrderByAggregateInput
    _avg?: MessageChannelAvgOrderByAggregateInput
    _max?: MessageChannelMaxOrderByAggregateInput
    _min?: MessageChannelMinOrderByAggregateInput
    _sum?: MessageChannelSumOrderByAggregateInput
  }

  export type MessageChannelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageChannelScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageChannelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageChannelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: EnumChannelTypeWithAggregatesFilter | ChannelType
    group_id?: StringNullableWithAggregatesFilter | string | null
    last_message_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type GroupWhereInput = {
    AND?: Enumerable<GroupWhereInput>
    OR?: Enumerable<GroupWhereInput>
    NOT?: Enumerable<GroupWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    icon_hash?: IntNullableFilter | number | null
    banner_hash?: IntNullableFilter | number | null
    channel_id?: StringFilter | string
    owner_id?: StringFilter | string
    public?: BoolFilter | boolean
    owner?: XOR<UserRelationFilter, UserWhereInput>
    channel?: XOR<MessageChannelRelationFilter, MessageChannelWhereInput>
    members?: MemberListRelationFilter
    invites?: GroupInviteListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    icon_hash?: SortOrderInput | SortOrder
    banner_hash?: SortOrderInput | SortOrder
    channel_id?: SortOrder
    owner_id?: SortOrder
    public?: SortOrder
    owner?: UserOrderByWithRelationInput
    channel?: MessageChannelOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
    invites?: GroupInviteOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = {
    id?: string
    unique_name?: string
    channel_id?: string
  }

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    icon_hash?: SortOrderInput | SortOrder
    banner_hash?: SortOrderInput | SortOrder
    channel_id?: SortOrder
    owner_id?: SortOrder
    public?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    unique_name?: StringWithAggregatesFilter | string
    icon_hash?: IntNullableWithAggregatesFilter | number | null
    banner_hash?: IntNullableWithAggregatesFilter | number | null
    channel_id?: StringWithAggregatesFilter | string
    owner_id?: StringWithAggregatesFilter | string
    public?: BoolWithAggregatesFilter | boolean
  }

  export type GroupInviteWhereInput = {
    AND?: Enumerable<GroupInviteWhereInput>
    OR?: Enumerable<GroupInviteWhereInput>
    NOT?: Enumerable<GroupInviteWhereInput>
    group_id?: StringFilter | string
    code?: StringFilter | string
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type GroupInviteOrderByWithRelationInput = {
    group_id?: SortOrder
    code?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupInviteWhereUniqueInput = {
    code?: string
  }

  export type GroupInviteOrderByWithAggregationInput = {
    group_id?: SortOrder
    code?: SortOrder
    _count?: GroupInviteCountOrderByAggregateInput
    _max?: GroupInviteMaxOrderByAggregateInput
    _min?: GroupInviteMinOrderByAggregateInput
  }

  export type GroupInviteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupInviteScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupInviteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupInviteScalarWhereWithAggregatesInput>
    group_id?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
  }

  export type MemberWhereInput = {
    AND?: Enumerable<MemberWhereInput>
    OR?: Enumerable<MemberWhereInput>
    NOT?: Enumerable<MemberWhereInput>
    group_id?: StringFilter | string
    user_id?: StringFilter | string
    admin?: BoolFilter | boolean
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    group_id?: SortOrder
    user_id?: SortOrder
    admin?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = {
    group_id_user_id?: MemberGroup_idUser_idCompoundUniqueInput
  }

  export type MemberOrderByWithAggregationInput = {
    group_id?: SortOrder
    user_id?: SortOrder
    admin?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<MemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MemberScalarWhereWithAggregatesInput>
    group_id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    admin?: BoolWithAggregatesFilter | boolean
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: IntFilter | number
    author_id?: StringFilter | string
    channel_id?: StringFilter | string
    content?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    attachment_id?: StringNullableFilter | string | null
    embeds?: JsonNullableFilter
    reply_id?: IntNullableFilter | number | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    channel?: XOR<MessageChannelRelationFilter, MessageChannelWhereInput>
    attachment?: XOR<AttachmentRelationFilter, AttachmentWhereInput> | null
    reply_to?: XOR<MessageRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    channel_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    attachment_id?: SortOrderInput | SortOrder
    embeds?: SortOrderInput | SortOrder
    reply_id?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    channel?: MessageChannelOrderByWithRelationInput
    attachment?: AttachmentOrderByWithRelationInput
    reply_to?: MessageOrderByWithRelationInput
    replies?: MessageOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = {
    id?: number
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    channel_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    attachment_id?: SortOrderInput | SortOrder
    embeds?: SortOrderInput | SortOrder
    reply_id?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    author_id?: StringWithAggregatesFilter | string
    channel_id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    attachment_id?: StringNullableWithAggregatesFilter | string | null
    embeds?: JsonNullableWithAggregatesFilter
    reply_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    banner_hash?: IntNullableFilter | number | null
    is_ai?: BoolFilter | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    messages?: MessageListRelationFilter
    ownedGroups?: GroupListRelationFilter
    memberships?: MemberListRelationFilter
    sentDirectMessages?: DirectMessageInfoListRelationFilter
    receivedDirectMessages?: DirectMessageInfoListRelationFilter
    createdEmotes?: EmoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    banner_hash?: SortOrderInput | SortOrder
    is_ai?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    ownedGroups?: GroupOrderByRelationAggregateInput
    memberships?: MemberOrderByRelationAggregateInput
    sentDirectMessages?: DirectMessageInfoOrderByRelationAggregateInput
    receivedDirectMessages?: DirectMessageInfoOrderByRelationAggregateInput
    createdEmotes?: EmoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    banner_hash?: SortOrderInput | SortOrder
    is_ai?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    banner_hash?: IntNullableWithAggregatesFilter | number | null
    is_ai?: BoolWithAggregatesFilter | boolean
  }

  export type EmoteWhereInput = {
    AND?: Enumerable<EmoteWhereInput>
    OR?: Enumerable<EmoteWhereInput>
    NOT?: Enumerable<EmoteWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    creatorId?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    hash?: StringNullableFilter | string | null
    creator?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EmoteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    timestamp?: SortOrder
    hash?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
  }

  export type EmoteWhereUniqueInput = {
    id?: string
  }

  export type EmoteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    timestamp?: SortOrder
    hash?: SortOrderInput | SortOrder
    _count?: EmoteCountOrderByAggregateInput
    _max?: EmoteMaxOrderByAggregateInput
    _min?: EmoteMinOrderByAggregateInput
  }

  export type EmoteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmoteScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmoteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmoteScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    creatorId?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    hash?: StringNullableWithAggregatesFilter | string | null
  }

  export type AttachmentWhereInput = {
    AND?: Enumerable<AttachmentWhereInput>
    OR?: Enumerable<AttachmentWhereInput>
    NOT?: Enumerable<AttachmentWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    type?: EnumAttachmentTypeNullableFilter | AttachmentType | null
    bytes?: IntFilter | number
    width?: IntNullableFilter | number | null
    height?: IntNullableFilter | number | null
    messages?: MessageListRelationFilter
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    bytes?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type AttachmentWhereUniqueInput = {
    id?: string
  }

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    bytes?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AttachmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<AttachmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AttachmentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    type?: EnumAttachmentTypeNullableWithAggregatesFilter | AttachmentType | null
    bytes?: IntWithAggregatesFilter | number
    width?: IntNullableWithAggregatesFilter | number | null
    height?: IntNullableWithAggregatesFilter | number | null
  }

  export type AccountCreateInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectMessageInfoCreateInput = {
    open?: boolean
    user: UserCreateNestedOneWithoutSentDirectMessagesInput
    to_user: UserCreateNestedOneWithoutReceivedDirectMessagesInput
    channel: MessageChannelCreateNestedOneWithoutDirectMessagesInput
  }

  export type DirectMessageInfoUncheckedCreateInput = {
    channel_id: string
    user_id: string
    to_user_id: string
    open?: boolean
  }

  export type DirectMessageInfoUpdateInput = {
    open?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSentDirectMessagesNestedInput
    to_user?: UserUpdateOneRequiredWithoutReceivedDirectMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutDirectMessagesNestedInput
  }

  export type DirectMessageInfoUncheckedUpdateInput = {
    channel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoCreateManyInput = {
    channel_id: string
    user_id: string
    to_user_id: string
    open?: boolean
  }

  export type DirectMessageInfoUpdateManyMutationInput = {
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoUncheckedUpdateManyInput = {
    channel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageChannelCreateInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    group?: GroupCreateNestedOneWithoutChannelInput
    messages?: MessageCreateNestedManyWithoutChannelInput
    directMessages?: DirectMessageInfoCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelUncheckedCreateInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    group?: GroupUncheckedCreateNestedOneWithoutChannelInput
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
    directMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUpdateOneWithoutChannelNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
    directMessages?: DirectMessageInfoUpdateManyWithoutChannelNestedInput
  }

  export type MessageChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUncheckedUpdateOneWithoutChannelNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    directMessages?: DirectMessageInfoUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type MessageChannelCreateManyInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
  }

  export type MessageChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GroupCreateInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    public?: boolean
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    channel: MessageChannelCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
    invites?: GroupInviteCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    channel_id: string
    owner_id: string
    public?: boolean
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invites?: GroupInviteUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    public?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    invites?: GroupInviteUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    channel_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invites?: GroupInviteUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    channel_id: string
    owner_id: string
    public?: boolean
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    channel_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupInviteCreateInput = {
    code: string
    group: GroupCreateNestedOneWithoutInvitesInput
  }

  export type GroupInviteUncheckedCreateInput = {
    group_id: string
    code: string
  }

  export type GroupInviteUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type GroupInviteUncheckedUpdateInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type GroupInviteCreateManyInput = {
    group_id: string
    code: string
  }

  export type GroupInviteUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type GroupInviteUncheckedUpdateManyInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateInput = {
    admin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MemberUncheckedCreateInput = {
    group_id: string
    user_id: string
    admin?: boolean
  }

  export type MemberUpdateInput = {
    admin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberCreateManyInput = {
    group_id: string
    user_id: string
    admin?: boolean
  }

  export type MemberUpdateManyMutationInput = {
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberUncheckedUpdateManyInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateInput = {
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author: UserCreateNestedOneWithoutMessagesInput
    channel: MessageChannelCreateNestedOneWithoutMessagesInput
    attachment?: AttachmentCreateNestedOneWithoutMessagesInput
    reply_to?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReply_toInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
    replies?: MessageUncheckedCreateNestedManyWithoutReply_toInput
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutMessagesNestedInput
    attachment?: AttachmentUpdateOneWithoutMessagesNestedInput
    reply_to?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: MessageUncheckedUpdateManyWithoutReply_toNestedInput
  }

  export type MessageCreateManyInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmoteCreateInput = {
    id: string
    name: string
    timestamp?: Date | string
    hash?: string | null
    creator: UserCreateNestedOneWithoutCreatedEmotesInput
  }

  export type EmoteUncheckedCreateInput = {
    id: string
    name: string
    creatorId: string
    timestamp?: Date | string
    hash?: string | null
  }

  export type EmoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutCreatedEmotesNestedInput
  }

  export type EmoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmoteCreateManyInput = {
    id: string
    name: string
    creatorId: string
    timestamp?: Date | string
    hash?: string | null
  }

  export type EmoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttachmentCreateInput = {
    id: string
    name: string
    url: string
    type?: AttachmentType | null
    bytes: number
    width?: number | null
    height?: number | null
    messages?: MessageCreateNestedManyWithoutAttachmentInput
  }

  export type AttachmentUncheckedCreateInput = {
    id: string
    name: string
    url: string
    type?: AttachmentType | null
    bytes: number
    width?: number | null
    height?: number | null
    messages?: MessageUncheckedCreateNestedManyWithoutAttachmentInput
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    bytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: MessageUpdateManyWithoutAttachmentNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    bytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: MessageUncheckedUpdateManyWithoutAttachmentNestedInput
  }

  export type AttachmentCreateManyInput = {
    id: string
    name: string
    url: string
    type?: AttachmentType | null
    bytes: number
    width?: number | null
    height?: number | null
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    bytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    bytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type MessageChannelRelationFilter = {
    is?: MessageChannelWhereInput | null
    isNot?: MessageChannelWhereInput | null
  }

  export type DirectMessageInfoUser_idTo_user_idCompoundUniqueInput = {
    user_id: string
    to_user_id: string
  }

  export type DirectMessageInfoCountOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    to_user_id?: SortOrder
    open?: SortOrder
  }

  export type DirectMessageInfoMaxOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    to_user_id?: SortOrder
    open?: SortOrder
  }

  export type DirectMessageInfoMinOrderByAggregateInput = {
    channel_id?: SortOrder
    user_id?: SortOrder
    to_user_id?: SortOrder
    open?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumChannelTypeFilter = {
    equals?: ChannelType
    in?: Enumerable<ChannelType>
    notIn?: Enumerable<ChannelType>
    not?: NestedEnumChannelTypeFilter | ChannelType
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type DirectMessageInfoListRelationFilter = {
    every?: DirectMessageInfoWhereInput
    some?: DirectMessageInfoWhereInput
    none?: DirectMessageInfoWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectMessageInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageChannelCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    group_id?: SortOrder
    last_message_id?: SortOrder
  }

  export type MessageChannelAvgOrderByAggregateInput = {
    last_message_id?: SortOrder
  }

  export type MessageChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    group_id?: SortOrder
    last_message_id?: SortOrder
  }

  export type MessageChannelMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    group_id?: SortOrder
    last_message_id?: SortOrder
  }

  export type MessageChannelSumOrderByAggregateInput = {
    last_message_id?: SortOrder
  }

  export type EnumChannelTypeWithAggregatesFilter = {
    equals?: ChannelType
    in?: Enumerable<ChannelType>
    notIn?: Enumerable<ChannelType>
    not?: NestedEnumChannelTypeWithAggregatesFilter | ChannelType
    _count?: NestedIntFilter
    _min?: NestedEnumChannelTypeFilter
    _max?: NestedEnumChannelTypeFilter
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type GroupInviteListRelationFilter = {
    every?: GroupInviteWhereInput
    some?: GroupInviteWhereInput
    none?: GroupInviteWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    icon_hash?: SortOrder
    banner_hash?: SortOrder
    channel_id?: SortOrder
    owner_id?: SortOrder
    public?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    icon_hash?: SortOrder
    banner_hash?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    icon_hash?: SortOrder
    banner_hash?: SortOrder
    channel_id?: SortOrder
    owner_id?: SortOrder
    public?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unique_name?: SortOrder
    icon_hash?: SortOrder
    banner_hash?: SortOrder
    channel_id?: SortOrder
    owner_id?: SortOrder
    public?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    icon_hash?: SortOrder
    banner_hash?: SortOrder
  }

  export type GroupInviteCountOrderByAggregateInput = {
    group_id?: SortOrder
    code?: SortOrder
  }

  export type GroupInviteMaxOrderByAggregateInput = {
    group_id?: SortOrder
    code?: SortOrder
  }

  export type GroupInviteMinOrderByAggregateInput = {
    group_id?: SortOrder
    code?: SortOrder
  }

  export type MemberGroup_idUser_idCompoundUniqueInput = {
    group_id: string
    user_id: string
  }

  export type MemberCountOrderByAggregateInput = {
    group_id?: SortOrder
    user_id?: SortOrder
    admin?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    group_id?: SortOrder
    user_id?: SortOrder
    admin?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    group_id?: SortOrder
    user_id?: SortOrder
    admin?: SortOrder
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type AttachmentRelationFilter = {
    is?: AttachmentWhereInput | null
    isNot?: AttachmentWhereInput | null
  }

  export type MessageRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    channel_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    attachment_id?: SortOrder
    embeds?: SortOrder
    reply_id?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    reply_id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    channel_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    attachment_id?: SortOrder
    reply_id?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    channel_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    attachment_id?: SortOrder
    reply_id?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    reply_id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type EmoteListRelationFilter = {
    every?: EmoteWhereInput
    some?: EmoteWhereInput
    none?: EmoteWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    banner_hash?: SortOrder
    is_ai?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    banner_hash?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    banner_hash?: SortOrder
    is_ai?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    banner_hash?: SortOrder
    is_ai?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    banner_hash?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EmoteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    timestamp?: SortOrder
    hash?: SortOrder
  }

  export type EmoteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    timestamp?: SortOrder
    hash?: SortOrder
  }

  export type EmoteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creatorId?: SortOrder
    timestamp?: SortOrder
    hash?: SortOrder
  }

  export type EnumAttachmentTypeNullableFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableFilter | AttachmentType | null
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    bytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type EnumAttachmentTypeNullableWithAggregatesFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableWithAggregatesFilter | AttachmentType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumAttachmentTypeNullableFilter
    _max?: NestedEnumAttachmentTypeNullableFilter
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSentDirectMessagesInput = {
    create?: XOR<UserCreateWithoutSentDirectMessagesInput, UserUncheckedCreateWithoutSentDirectMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentDirectMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedDirectMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedDirectMessagesInput, UserUncheckedCreateWithoutReceivedDirectMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedDirectMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageChannelCreateNestedOneWithoutDirectMessagesInput = {
    create?: XOR<MessageChannelCreateWithoutDirectMessagesInput, MessageChannelUncheckedCreateWithoutDirectMessagesInput>
    connectOrCreate?: MessageChannelCreateOrConnectWithoutDirectMessagesInput
    connect?: MessageChannelWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentDirectMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentDirectMessagesInput, UserUncheckedCreateWithoutSentDirectMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentDirectMessagesInput
    upsert?: UserUpsertWithoutSentDirectMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSentDirectMessagesInput, UserUncheckedUpdateWithoutSentDirectMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedDirectMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedDirectMessagesInput, UserUncheckedCreateWithoutReceivedDirectMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedDirectMessagesInput
    upsert?: UserUpsertWithoutReceivedDirectMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReceivedDirectMessagesInput, UserUncheckedUpdateWithoutReceivedDirectMessagesInput>
  }

  export type MessageChannelUpdateOneRequiredWithoutDirectMessagesNestedInput = {
    create?: XOR<MessageChannelCreateWithoutDirectMessagesInput, MessageChannelUncheckedCreateWithoutDirectMessagesInput>
    connectOrCreate?: MessageChannelCreateOrConnectWithoutDirectMessagesInput
    upsert?: MessageChannelUpsertWithoutDirectMessagesInput
    connect?: MessageChannelWhereUniqueInput
    update?: XOR<MessageChannelUpdateWithoutDirectMessagesInput, MessageChannelUncheckedUpdateWithoutDirectMessagesInput>
  }

  export type GroupCreateNestedOneWithoutChannelInput = {
    create?: XOR<GroupCreateWithoutChannelInput, GroupUncheckedCreateWithoutChannelInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChannelInput
    connect?: GroupWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChannelInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChannelInput>, Enumerable<MessageUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChannelInput>
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type DirectMessageInfoCreateNestedManyWithoutChannelInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutChannelInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutChannelInput>
    createMany?: DirectMessageInfoCreateManyChannelInputEnvelope
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
  }

  export type GroupUncheckedCreateNestedOneWithoutChannelInput = {
    create?: XOR<GroupCreateWithoutChannelInput, GroupUncheckedCreateWithoutChannelInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChannelInput
    connect?: GroupWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChannelInput>, Enumerable<MessageUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChannelInput>
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type DirectMessageInfoUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutChannelInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutChannelInput>
    createMany?: DirectMessageInfoCreateManyChannelInputEnvelope
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
  }

  export type EnumChannelTypeFieldUpdateOperationsInput = {
    set?: ChannelType
  }

  export type GroupUpdateOneWithoutChannelNestedInput = {
    create?: XOR<GroupCreateWithoutChannelInput, GroupUncheckedCreateWithoutChannelInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChannelInput
    upsert?: GroupUpsertWithoutChannelInput
    disconnect?: boolean
    delete?: boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutChannelInput, GroupUncheckedUpdateWithoutChannelInput>
  }

  export type MessageUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChannelInput>, Enumerable<MessageUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChannelInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChannelInput>
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChannelInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChannelInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type DirectMessageInfoUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutChannelInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutChannelInput>
    upsert?: Enumerable<DirectMessageInfoUpsertWithWhereUniqueWithoutChannelInput>
    createMany?: DirectMessageInfoCreateManyChannelInputEnvelope
    set?: Enumerable<DirectMessageInfoWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    delete?: Enumerable<DirectMessageInfoWhereUniqueInput>
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    update?: Enumerable<DirectMessageInfoUpdateWithWhereUniqueWithoutChannelInput>
    updateMany?: Enumerable<DirectMessageInfoUpdateManyWithWhereWithoutChannelInput>
    deleteMany?: Enumerable<DirectMessageInfoScalarWhereInput>
  }

  export type GroupUncheckedUpdateOneWithoutChannelNestedInput = {
    create?: XOR<GroupCreateWithoutChannelInput, GroupUncheckedCreateWithoutChannelInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChannelInput
    upsert?: GroupUpsertWithoutChannelInput
    disconnect?: boolean
    delete?: boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutChannelInput, GroupUncheckedUpdateWithoutChannelInput>
  }

  export type MessageUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChannelInput>, Enumerable<MessageUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChannelInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChannelInput>
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChannelInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChannelInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type DirectMessageInfoUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutChannelInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutChannelInput>
    upsert?: Enumerable<DirectMessageInfoUpsertWithWhereUniqueWithoutChannelInput>
    createMany?: DirectMessageInfoCreateManyChannelInputEnvelope
    set?: Enumerable<DirectMessageInfoWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    delete?: Enumerable<DirectMessageInfoWhereUniqueInput>
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    update?: Enumerable<DirectMessageInfoUpdateWithWhereUniqueWithoutChannelInput>
    updateMany?: Enumerable<DirectMessageInfoUpdateManyWithWhereWithoutChannelInput>
    deleteMany?: Enumerable<DirectMessageInfoScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutOwnedGroupsInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageChannelCreateNestedOneWithoutGroupInput = {
    create?: XOR<MessageChannelCreateWithoutGroupInput, MessageChannelUncheckedCreateWithoutGroupInput>
    connectOrCreate?: MessageChannelCreateOrConnectWithoutGroupInput
    connect?: MessageChannelWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<MemberCreateWithoutGroupInput>, Enumerable<MemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutGroupInput>
    createMany?: MemberCreateManyGroupInputEnvelope
    connect?: Enumerable<MemberWhereUniqueInput>
  }

  export type GroupInviteCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupInviteCreateWithoutGroupInput>, Enumerable<GroupInviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupInviteCreateOrConnectWithoutGroupInput>
    createMany?: GroupInviteCreateManyGroupInputEnvelope
    connect?: Enumerable<GroupInviteWhereUniqueInput>
  }

  export type MemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<MemberCreateWithoutGroupInput>, Enumerable<MemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutGroupInput>
    createMany?: MemberCreateManyGroupInputEnvelope
    connect?: Enumerable<MemberWhereUniqueInput>
  }

  export type GroupInviteUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupInviteCreateWithoutGroupInput>, Enumerable<GroupInviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupInviteCreateOrConnectWithoutGroupInput>
    createMany?: GroupInviteCreateManyGroupInputEnvelope
    connect?: Enumerable<GroupInviteWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    upsert?: UserUpsertWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type MessageChannelUpdateOneRequiredWithoutGroupNestedInput = {
    create?: XOR<MessageChannelCreateWithoutGroupInput, MessageChannelUncheckedCreateWithoutGroupInput>
    connectOrCreate?: MessageChannelCreateOrConnectWithoutGroupInput
    upsert?: MessageChannelUpsertWithoutGroupInput
    connect?: MessageChannelWhereUniqueInput
    update?: XOR<MessageChannelUpdateWithoutGroupInput, MessageChannelUncheckedUpdateWithoutGroupInput>
  }

  export type MemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<MemberCreateWithoutGroupInput>, Enumerable<MemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<MemberUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: MemberCreateManyGroupInputEnvelope
    set?: Enumerable<MemberWhereUniqueInput>
    disconnect?: Enumerable<MemberWhereUniqueInput>
    delete?: Enumerable<MemberWhereUniqueInput>
    connect?: Enumerable<MemberWhereUniqueInput>
    update?: Enumerable<MemberUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<MemberUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<MemberScalarWhereInput>
  }

  export type GroupInviteUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<GroupInviteCreateWithoutGroupInput>, Enumerable<GroupInviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupInviteCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<GroupInviteUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: GroupInviteCreateManyGroupInputEnvelope
    set?: Enumerable<GroupInviteWhereUniqueInput>
    disconnect?: Enumerable<GroupInviteWhereUniqueInput>
    delete?: Enumerable<GroupInviteWhereUniqueInput>
    connect?: Enumerable<GroupInviteWhereUniqueInput>
    update?: Enumerable<GroupInviteUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<GroupInviteUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<GroupInviteScalarWhereInput>
  }

  export type MemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<MemberCreateWithoutGroupInput>, Enumerable<MemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<MemberUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: MemberCreateManyGroupInputEnvelope
    set?: Enumerable<MemberWhereUniqueInput>
    disconnect?: Enumerable<MemberWhereUniqueInput>
    delete?: Enumerable<MemberWhereUniqueInput>
    connect?: Enumerable<MemberWhereUniqueInput>
    update?: Enumerable<MemberUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<MemberUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<MemberScalarWhereInput>
  }

  export type GroupInviteUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<GroupInviteCreateWithoutGroupInput>, Enumerable<GroupInviteUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupInviteCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<GroupInviteUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: GroupInviteCreateManyGroupInputEnvelope
    set?: Enumerable<GroupInviteWhereUniqueInput>
    disconnect?: Enumerable<GroupInviteWhereUniqueInput>
    delete?: Enumerable<GroupInviteWhereUniqueInput>
    connect?: Enumerable<GroupInviteWhereUniqueInput>
    update?: Enumerable<GroupInviteUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<GroupInviteUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<GroupInviteScalarWhereInput>
  }

  export type GroupCreateNestedOneWithoutInvitesInput = {
    create?: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitesInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitesInput
    upsert?: GroupUpsertWithoutInvitesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutInvitesInput, GroupUncheckedUpdateWithoutInvitesInput>
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageChannelCreateNestedOneWithoutMessagesInput = {
    create?: XOR<MessageChannelCreateWithoutMessagesInput, MessageChannelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MessageChannelCreateOrConnectWithoutMessagesInput
    connect?: MessageChannelWhereUniqueInput
  }

  export type AttachmentCreateNestedOneWithoutMessagesInput = {
    create?: XOR<AttachmentCreateWithoutMessagesInput, AttachmentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessagesInput
    connect?: AttachmentWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutReply_toInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReply_toInput>, Enumerable<MessageUncheckedCreateWithoutReply_toInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReply_toInput>
    createMany?: MessageCreateManyReply_toInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutReply_toInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReply_toInput>, Enumerable<MessageUncheckedCreateWithoutReply_toInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReply_toInput>
    createMany?: MessageCreateManyReply_toInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageChannelUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<MessageChannelCreateWithoutMessagesInput, MessageChannelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MessageChannelCreateOrConnectWithoutMessagesInput
    upsert?: MessageChannelUpsertWithoutMessagesInput
    connect?: MessageChannelWhereUniqueInput
    update?: XOR<MessageChannelUpdateWithoutMessagesInput, MessageChannelUncheckedUpdateWithoutMessagesInput>
  }

  export type AttachmentUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<AttachmentCreateWithoutMessagesInput, AttachmentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AttachmentCreateOrConnectWithoutMessagesInput
    upsert?: AttachmentUpsertWithoutMessagesInput
    disconnect?: boolean
    delete?: boolean
    connect?: AttachmentWhereUniqueInput
    update?: XOR<AttachmentUpdateWithoutMessagesInput, AttachmentUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    upsert?: MessageUpsertWithoutRepliesInput
    disconnect?: boolean
    delete?: boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateManyWithoutReply_toNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReply_toInput>, Enumerable<MessageUncheckedCreateWithoutReply_toInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReply_toInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutReply_toInput>
    createMany?: MessageCreateManyReply_toInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutReply_toInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutReply_toInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageUncheckedUpdateManyWithoutReply_toNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutReply_toInput>, Enumerable<MessageUncheckedCreateWithoutReply_toInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutReply_toInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutReply_toInput>
    createMany?: MessageCreateManyReply_toInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutReply_toInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutReply_toInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<GroupCreateWithoutOwnerInput>, Enumerable<GroupUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutOwnerInput>
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: Enumerable<GroupWhereUniqueInput>
  }

  export type MemberCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MemberCreateWithoutUserInput>, Enumerable<MemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutUserInput>
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: Enumerable<MemberWhereUniqueInput>
  }

  export type DirectMessageInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutUserInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutUserInput>
    createMany?: DirectMessageInfoCreateManyUserInputEnvelope
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
  }

  export type DirectMessageInfoCreateNestedManyWithoutTo_userInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutTo_userInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutTo_userInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutTo_userInput>
    createMany?: DirectMessageInfoCreateManyTo_userInputEnvelope
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
  }

  export type EmoteCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<EmoteCreateWithoutCreatorInput>, Enumerable<EmoteUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<EmoteCreateOrConnectWithoutCreatorInput>
    createMany?: EmoteCreateManyCreatorInputEnvelope
    connect?: Enumerable<EmoteWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<GroupCreateWithoutOwnerInput>, Enumerable<GroupUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutOwnerInput>
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: Enumerable<GroupWhereUniqueInput>
  }

  export type MemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MemberCreateWithoutUserInput>, Enumerable<MemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutUserInput>
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: Enumerable<MemberWhereUniqueInput>
  }

  export type DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutUserInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutUserInput>
    createMany?: DirectMessageInfoCreateManyUserInputEnvelope
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
  }

  export type DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutTo_userInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutTo_userInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutTo_userInput>
    createMany?: DirectMessageInfoCreateManyTo_userInputEnvelope
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
  }

  export type EmoteUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<EmoteCreateWithoutCreatorInput>, Enumerable<EmoteUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<EmoteCreateOrConnectWithoutCreatorInput>
    createMany?: EmoteCreateManyCreatorInputEnvelope
    connect?: Enumerable<EmoteWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type MessageUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<GroupCreateWithoutOwnerInput>, Enumerable<GroupUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<GroupUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: Enumerable<GroupWhereUniqueInput>
    disconnect?: Enumerable<GroupWhereUniqueInput>
    delete?: Enumerable<GroupWhereUniqueInput>
    connect?: Enumerable<GroupWhereUniqueInput>
    update?: Enumerable<GroupUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<GroupUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<GroupScalarWhereInput>
  }

  export type MemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MemberCreateWithoutUserInput>, Enumerable<MemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MemberCreateManyUserInputEnvelope
    set?: Enumerable<MemberWhereUniqueInput>
    disconnect?: Enumerable<MemberWhereUniqueInput>
    delete?: Enumerable<MemberWhereUniqueInput>
    connect?: Enumerable<MemberWhereUniqueInput>
    update?: Enumerable<MemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MemberScalarWhereInput>
  }

  export type DirectMessageInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutUserInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DirectMessageInfoUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DirectMessageInfoCreateManyUserInputEnvelope
    set?: Enumerable<DirectMessageInfoWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    delete?: Enumerable<DirectMessageInfoWhereUniqueInput>
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    update?: Enumerable<DirectMessageInfoUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DirectMessageInfoUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DirectMessageInfoScalarWhereInput>
  }

  export type DirectMessageInfoUpdateManyWithoutTo_userNestedInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutTo_userInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutTo_userInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutTo_userInput>
    upsert?: Enumerable<DirectMessageInfoUpsertWithWhereUniqueWithoutTo_userInput>
    createMany?: DirectMessageInfoCreateManyTo_userInputEnvelope
    set?: Enumerable<DirectMessageInfoWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    delete?: Enumerable<DirectMessageInfoWhereUniqueInput>
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    update?: Enumerable<DirectMessageInfoUpdateWithWhereUniqueWithoutTo_userInput>
    updateMany?: Enumerable<DirectMessageInfoUpdateManyWithWhereWithoutTo_userInput>
    deleteMany?: Enumerable<DirectMessageInfoScalarWhereInput>
  }

  export type EmoteUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Enumerable<EmoteCreateWithoutCreatorInput>, Enumerable<EmoteUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<EmoteCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<EmoteUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: EmoteCreateManyCreatorInputEnvelope
    set?: Enumerable<EmoteWhereUniqueInput>
    disconnect?: Enumerable<EmoteWhereUniqueInput>
    delete?: Enumerable<EmoteWhereUniqueInput>
    connect?: Enumerable<EmoteWhereUniqueInput>
    update?: Enumerable<EmoteUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<EmoteUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<EmoteScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAuthorInput>, Enumerable<MessageUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: MessageCreateManyAuthorInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<GroupCreateWithoutOwnerInput>, Enumerable<GroupUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<GroupUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: Enumerable<GroupWhereUniqueInput>
    disconnect?: Enumerable<GroupWhereUniqueInput>
    delete?: Enumerable<GroupWhereUniqueInput>
    connect?: Enumerable<GroupWhereUniqueInput>
    update?: Enumerable<GroupUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<GroupUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<GroupScalarWhereInput>
  }

  export type MemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MemberCreateWithoutUserInput>, Enumerable<MemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MemberCreateManyUserInputEnvelope
    set?: Enumerable<MemberWhereUniqueInput>
    disconnect?: Enumerable<MemberWhereUniqueInput>
    delete?: Enumerable<MemberWhereUniqueInput>
    connect?: Enumerable<MemberWhereUniqueInput>
    update?: Enumerable<MemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MemberScalarWhereInput>
  }

  export type DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutUserInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DirectMessageInfoUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DirectMessageInfoCreateManyUserInputEnvelope
    set?: Enumerable<DirectMessageInfoWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    delete?: Enumerable<DirectMessageInfoWhereUniqueInput>
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    update?: Enumerable<DirectMessageInfoUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DirectMessageInfoUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DirectMessageInfoScalarWhereInput>
  }

  export type DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput = {
    create?: XOR<Enumerable<DirectMessageInfoCreateWithoutTo_userInput>, Enumerable<DirectMessageInfoUncheckedCreateWithoutTo_userInput>>
    connectOrCreate?: Enumerable<DirectMessageInfoCreateOrConnectWithoutTo_userInput>
    upsert?: Enumerable<DirectMessageInfoUpsertWithWhereUniqueWithoutTo_userInput>
    createMany?: DirectMessageInfoCreateManyTo_userInputEnvelope
    set?: Enumerable<DirectMessageInfoWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    delete?: Enumerable<DirectMessageInfoWhereUniqueInput>
    connect?: Enumerable<DirectMessageInfoWhereUniqueInput>
    update?: Enumerable<DirectMessageInfoUpdateWithWhereUniqueWithoutTo_userInput>
    updateMany?: Enumerable<DirectMessageInfoUpdateManyWithWhereWithoutTo_userInput>
    deleteMany?: Enumerable<DirectMessageInfoScalarWhereInput>
  }

  export type EmoteUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Enumerable<EmoteCreateWithoutCreatorInput>, Enumerable<EmoteUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<EmoteCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<EmoteUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: EmoteCreateManyCreatorInputEnvelope
    set?: Enumerable<EmoteWhereUniqueInput>
    disconnect?: Enumerable<EmoteWhereUniqueInput>
    delete?: Enumerable<EmoteWhereUniqueInput>
    connect?: Enumerable<EmoteWhereUniqueInput>
    update?: Enumerable<EmoteUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<EmoteUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<EmoteScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCreatedEmotesInput = {
    create?: XOR<UserCreateWithoutCreatedEmotesInput, UserUncheckedCreateWithoutCreatedEmotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEmotesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreatedEmotesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEmotesInput, UserUncheckedCreateWithoutCreatedEmotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEmotesInput
    upsert?: UserUpsertWithoutCreatedEmotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCreatedEmotesInput, UserUncheckedUpdateWithoutCreatedEmotesInput>
  }

  export type MessageCreateNestedManyWithoutAttachmentInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAttachmentInput>, Enumerable<MessageUncheckedCreateWithoutAttachmentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAttachmentInput>
    createMany?: MessageCreateManyAttachmentInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutAttachmentInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAttachmentInput>, Enumerable<MessageUncheckedCreateWithoutAttachmentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAttachmentInput>
    createMany?: MessageCreateManyAttachmentInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type NullableEnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: AttachmentType | null
  }

  export type MessageUpdateManyWithoutAttachmentNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAttachmentInput>, Enumerable<MessageUncheckedCreateWithoutAttachmentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAttachmentInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutAttachmentInput>
    createMany?: MessageCreateManyAttachmentInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutAttachmentInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutAttachmentInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutAttachmentNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutAttachmentInput>, Enumerable<MessageUncheckedCreateWithoutAttachmentInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutAttachmentInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutAttachmentInput>
    createMany?: MessageCreateManyAttachmentInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutAttachmentInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutAttachmentInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumChannelTypeFilter = {
    equals?: ChannelType
    in?: Enumerable<ChannelType>
    notIn?: Enumerable<ChannelType>
    not?: NestedEnumChannelTypeFilter | ChannelType
  }

  export type NestedEnumChannelTypeWithAggregatesFilter = {
    equals?: ChannelType
    in?: Enumerable<ChannelType>
    notIn?: Enumerable<ChannelType>
    not?: NestedEnumChannelTypeWithAggregatesFilter | ChannelType
    _count?: NestedIntFilter
    _min?: NestedEnumChannelTypeFilter
    _max?: NestedEnumChannelTypeFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedEnumAttachmentTypeNullableFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableFilter | AttachmentType | null
  }

  export type NestedEnumAttachmentTypeNullableWithAggregatesFilter = {
    equals?: AttachmentType | null
    in?: Enumerable<AttachmentType> | null
    notIn?: Enumerable<AttachmentType> | null
    not?: NestedEnumAttachmentTypeNullableWithAggregatesFilter | AttachmentType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumAttachmentTypeNullableFilter
    _max?: NestedEnumAttachmentTypeNullableFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutSentDirectMessagesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSentDirectMessagesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSentDirectMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentDirectMessagesInput, UserUncheckedCreateWithoutSentDirectMessagesInput>
  }

  export type UserCreateWithoutReceivedDirectMessagesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutReceivedDirectMessagesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutReceivedDirectMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedDirectMessagesInput, UserUncheckedCreateWithoutReceivedDirectMessagesInput>
  }

  export type MessageChannelCreateWithoutDirectMessagesInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    group?: GroupCreateNestedOneWithoutChannelInput
    messages?: MessageCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelUncheckedCreateWithoutDirectMessagesInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    group?: GroupUncheckedCreateNestedOneWithoutChannelInput
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelCreateOrConnectWithoutDirectMessagesInput = {
    where: MessageChannelWhereUniqueInput
    create: XOR<MessageChannelCreateWithoutDirectMessagesInput, MessageChannelUncheckedCreateWithoutDirectMessagesInput>
  }

  export type UserUpsertWithoutSentDirectMessagesInput = {
    update: XOR<UserUpdateWithoutSentDirectMessagesInput, UserUncheckedUpdateWithoutSentDirectMessagesInput>
    create: XOR<UserCreateWithoutSentDirectMessagesInput, UserUncheckedCreateWithoutSentDirectMessagesInput>
  }

  export type UserUpdateWithoutSentDirectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentDirectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutReceivedDirectMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedDirectMessagesInput, UserUncheckedUpdateWithoutReceivedDirectMessagesInput>
    create: XOR<UserCreateWithoutReceivedDirectMessagesInput, UserUncheckedCreateWithoutReceivedDirectMessagesInput>
  }

  export type UserUpdateWithoutReceivedDirectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedDirectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type MessageChannelUpsertWithoutDirectMessagesInput = {
    update: XOR<MessageChannelUpdateWithoutDirectMessagesInput, MessageChannelUncheckedUpdateWithoutDirectMessagesInput>
    create: XOR<MessageChannelCreateWithoutDirectMessagesInput, MessageChannelUncheckedCreateWithoutDirectMessagesInput>
  }

  export type MessageChannelUpdateWithoutDirectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUpdateOneWithoutChannelNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
  }

  export type MessageChannelUncheckedUpdateWithoutDirectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUncheckedUpdateOneWithoutChannelNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type GroupCreateWithoutChannelInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    public?: boolean
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    members?: MemberCreateNestedManyWithoutGroupInput
    invites?: GroupInviteCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutChannelInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    owner_id: string
    public?: boolean
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invites?: GroupInviteUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutChannelInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutChannelInput, GroupUncheckedCreateWithoutChannelInput>
  }

  export type MessageCreateWithoutChannelInput = {
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author: UserCreateNestedOneWithoutMessagesInput
    attachment?: AttachmentCreateNestedOneWithoutMessagesInput
    reply_to?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReply_toInput
  }

  export type MessageUncheckedCreateWithoutChannelInput = {
    id?: number
    author_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
    replies?: MessageUncheckedCreateNestedManyWithoutReply_toInput
  }

  export type MessageCreateOrConnectWithoutChannelInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageCreateManyChannelInputEnvelope = {
    data: Enumerable<MessageCreateManyChannelInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageInfoCreateWithoutChannelInput = {
    open?: boolean
    user: UserCreateNestedOneWithoutSentDirectMessagesInput
    to_user: UserCreateNestedOneWithoutReceivedDirectMessagesInput
  }

  export type DirectMessageInfoUncheckedCreateWithoutChannelInput = {
    user_id: string
    to_user_id: string
    open?: boolean
  }

  export type DirectMessageInfoCreateOrConnectWithoutChannelInput = {
    where: DirectMessageInfoWhereUniqueInput
    create: XOR<DirectMessageInfoCreateWithoutChannelInput, DirectMessageInfoUncheckedCreateWithoutChannelInput>
  }

  export type DirectMessageInfoCreateManyChannelInputEnvelope = {
    data: Enumerable<DirectMessageInfoCreateManyChannelInput>
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutChannelInput = {
    update: XOR<GroupUpdateWithoutChannelInput, GroupUncheckedUpdateWithoutChannelInput>
    create: XOR<GroupCreateWithoutChannelInput, GroupUncheckedCreateWithoutChannelInput>
  }

  export type GroupUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    public?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    invites?: GroupInviteUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invites?: GroupInviteUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
  }

  export type MessageUpdateManyWithWhereWithoutChannelInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: IntFilter | number
    author_id?: StringFilter | string
    channel_id?: StringFilter | string
    content?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    attachment_id?: StringNullableFilter | string | null
    embeds?: JsonNullableFilter
    reply_id?: IntNullableFilter | number | null
  }

  export type DirectMessageInfoUpsertWithWhereUniqueWithoutChannelInput = {
    where: DirectMessageInfoWhereUniqueInput
    update: XOR<DirectMessageInfoUpdateWithoutChannelInput, DirectMessageInfoUncheckedUpdateWithoutChannelInput>
    create: XOR<DirectMessageInfoCreateWithoutChannelInput, DirectMessageInfoUncheckedCreateWithoutChannelInput>
  }

  export type DirectMessageInfoUpdateWithWhereUniqueWithoutChannelInput = {
    where: DirectMessageInfoWhereUniqueInput
    data: XOR<DirectMessageInfoUpdateWithoutChannelInput, DirectMessageInfoUncheckedUpdateWithoutChannelInput>
  }

  export type DirectMessageInfoUpdateManyWithWhereWithoutChannelInput = {
    where: DirectMessageInfoScalarWhereInput
    data: XOR<DirectMessageInfoUpdateManyMutationInput, DirectMessageInfoUncheckedUpdateManyWithoutDirectMessagesInput>
  }

  export type DirectMessageInfoScalarWhereInput = {
    AND?: Enumerable<DirectMessageInfoScalarWhereInput>
    OR?: Enumerable<DirectMessageInfoScalarWhereInput>
    NOT?: Enumerable<DirectMessageInfoScalarWhereInput>
    channel_id?: StringFilter | string
    user_id?: StringFilter | string
    to_user_id?: StringFilter | string
    open?: BoolFilter | boolean
  }

  export type UserCreateWithoutOwnedGroupsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutOwnedGroupsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutOwnedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
  }

  export type MessageChannelCreateWithoutGroupInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    messages?: MessageCreateNestedManyWithoutChannelInput
    directMessages?: DirectMessageInfoCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelUncheckedCreateWithoutGroupInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
    directMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelCreateOrConnectWithoutGroupInput = {
    where: MessageChannelWhereUniqueInput
    create: XOR<MessageChannelCreateWithoutGroupInput, MessageChannelUncheckedCreateWithoutGroupInput>
  }

  export type MemberCreateWithoutGroupInput = {
    admin?: boolean
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MemberUncheckedCreateWithoutGroupInput = {
    user_id: string
    admin?: boolean
  }

  export type MemberCreateOrConnectWithoutGroupInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput>
  }

  export type MemberCreateManyGroupInputEnvelope = {
    data: Enumerable<MemberCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type GroupInviteCreateWithoutGroupInput = {
    code: string
  }

  export type GroupInviteUncheckedCreateWithoutGroupInput = {
    code: string
  }

  export type GroupInviteCreateOrConnectWithoutGroupInput = {
    where: GroupInviteWhereUniqueInput
    create: XOR<GroupInviteCreateWithoutGroupInput, GroupInviteUncheckedCreateWithoutGroupInput>
  }

  export type GroupInviteCreateManyGroupInputEnvelope = {
    data: Enumerable<GroupInviteCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedGroupsInput = {
    update: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
  }

  export type UserUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type MessageChannelUpsertWithoutGroupInput = {
    update: XOR<MessageChannelUpdateWithoutGroupInput, MessageChannelUncheckedUpdateWithoutGroupInput>
    create: XOR<MessageChannelCreateWithoutGroupInput, MessageChannelUncheckedCreateWithoutGroupInput>
  }

  export type MessageChannelUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: MessageUpdateManyWithoutChannelNestedInput
    directMessages?: DirectMessageInfoUpdateManyWithoutChannelNestedInput
  }

  export type MessageChannelUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
    directMessages?: DirectMessageInfoUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutGroupInput, MemberUncheckedUpdateWithoutGroupInput>
    create: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutGroupInput, MemberUncheckedUpdateWithoutGroupInput>
  }

  export type MemberUpdateManyWithWhereWithoutGroupInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutMembersInput>
  }

  export type MemberScalarWhereInput = {
    AND?: Enumerable<MemberScalarWhereInput>
    OR?: Enumerable<MemberScalarWhereInput>
    NOT?: Enumerable<MemberScalarWhereInput>
    group_id?: StringFilter | string
    user_id?: StringFilter | string
    admin?: BoolFilter | boolean
  }

  export type GroupInviteUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupInviteWhereUniqueInput
    update: XOR<GroupInviteUpdateWithoutGroupInput, GroupInviteUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupInviteCreateWithoutGroupInput, GroupInviteUncheckedCreateWithoutGroupInput>
  }

  export type GroupInviteUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupInviteWhereUniqueInput
    data: XOR<GroupInviteUpdateWithoutGroupInput, GroupInviteUncheckedUpdateWithoutGroupInput>
  }

  export type GroupInviteUpdateManyWithWhereWithoutGroupInput = {
    where: GroupInviteScalarWhereInput
    data: XOR<GroupInviteUpdateManyMutationInput, GroupInviteUncheckedUpdateManyWithoutInvitesInput>
  }

  export type GroupInviteScalarWhereInput = {
    AND?: Enumerable<GroupInviteScalarWhereInput>
    OR?: Enumerable<GroupInviteScalarWhereInput>
    NOT?: Enumerable<GroupInviteScalarWhereInput>
    group_id?: StringFilter | string
    code?: StringFilter | string
  }

  export type GroupCreateWithoutInvitesInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    public?: boolean
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    channel: MessageChannelCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutInvitesInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    channel_id: string
    owner_id: string
    public?: boolean
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutInvitesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
  }

  export type GroupUpsertWithoutInvitesInput = {
    update: XOR<GroupUpdateWithoutInvitesInput, GroupUncheckedUpdateWithoutInvitesInput>
    create: XOR<GroupCreateWithoutInvitesInput, GroupUncheckedCreateWithoutInvitesInput>
  }

  export type GroupUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    public?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    channel_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutMembersInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    public?: boolean
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    channel: MessageChannelCreateNestedOneWithoutGroupInput
    invites?: GroupInviteCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    channel_id: string
    owner_id: string
    public?: boolean
    invites?: GroupInviteUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    public?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutGroupNestedInput
    invites?: GroupInviteUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    channel_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    invites?: GroupInviteUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type MessageChannelCreateWithoutMessagesInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    group?: GroupCreateNestedOneWithoutChannelInput
    directMessages?: DirectMessageInfoCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelUncheckedCreateWithoutMessagesInput = {
    id: string
    type: ChannelType
    group_id?: string | null
    last_message_id?: number | null
    group?: GroupUncheckedCreateNestedOneWithoutChannelInput
    directMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutChannelInput
  }

  export type MessageChannelCreateOrConnectWithoutMessagesInput = {
    where: MessageChannelWhereUniqueInput
    create: XOR<MessageChannelCreateWithoutMessagesInput, MessageChannelUncheckedCreateWithoutMessagesInput>
  }

  export type AttachmentCreateWithoutMessagesInput = {
    id: string
    name: string
    url: string
    type?: AttachmentType | null
    bytes: number
    width?: number | null
    height?: number | null
  }

  export type AttachmentUncheckedCreateWithoutMessagesInput = {
    id: string
    name: string
    url: string
    type?: AttachmentType | null
    bytes: number
    width?: number | null
    height?: number | null
  }

  export type AttachmentCreateOrConnectWithoutMessagesInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutMessagesInput, AttachmentUncheckedCreateWithoutMessagesInput>
  }

  export type MessageCreateWithoutRepliesInput = {
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author: UserCreateNestedOneWithoutMessagesInput
    channel: MessageChannelCreateNestedOneWithoutMessagesInput
    attachment?: AttachmentCreateNestedOneWithoutMessagesInput
    reply_to?: MessageCreateNestedOneWithoutRepliesInput
  }

  export type MessageUncheckedCreateWithoutRepliesInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
  }

  export type MessageCreateOrConnectWithoutRepliesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type MessageCreateWithoutReply_toInput = {
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author: UserCreateNestedOneWithoutMessagesInput
    channel: MessageChannelCreateNestedOneWithoutMessagesInput
    attachment?: AttachmentCreateNestedOneWithoutMessagesInput
    replies?: MessageCreateNestedManyWithoutReply_toInput
  }

  export type MessageUncheckedCreateWithoutReply_toInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    replies?: MessageUncheckedCreateNestedManyWithoutReply_toInput
  }

  export type MessageCreateOrConnectWithoutReply_toInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReply_toInput, MessageUncheckedCreateWithoutReply_toInput>
  }

  export type MessageCreateManyReply_toInputEnvelope = {
    data: Enumerable<MessageCreateManyReply_toInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type MessageChannelUpsertWithoutMessagesInput = {
    update: XOR<MessageChannelUpdateWithoutMessagesInput, MessageChannelUncheckedUpdateWithoutMessagesInput>
    create: XOR<MessageChannelCreateWithoutMessagesInput, MessageChannelUncheckedCreateWithoutMessagesInput>
  }

  export type MessageChannelUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUpdateOneWithoutChannelNestedInput
    directMessages?: DirectMessageInfoUpdateManyWithoutChannelNestedInput
  }

  export type MessageChannelUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | ChannelType
    group_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_message_id?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUncheckedUpdateOneWithoutChannelNestedInput
    directMessages?: DirectMessageInfoUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type AttachmentUpsertWithoutMessagesInput = {
    update: XOR<AttachmentUpdateWithoutMessagesInput, AttachmentUncheckedUpdateWithoutMessagesInput>
    create: XOR<AttachmentCreateWithoutMessagesInput, AttachmentUncheckedCreateWithoutMessagesInput>
  }

  export type AttachmentUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    bytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttachmentUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType | null
    bytes?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageUpsertWithoutRepliesInput = {
    update: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type MessageUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutMessagesNestedInput
    attachment?: AttachmentUpdateOneWithoutMessagesNestedInput
    reply_to?: MessageUpdateOneWithoutRepliesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageUpsertWithWhereUniqueWithoutReply_toInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReply_toInput, MessageUncheckedUpdateWithoutReply_toInput>
    create: XOR<MessageCreateWithoutReply_toInput, MessageUncheckedCreateWithoutReply_toInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReply_toInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReply_toInput, MessageUncheckedUpdateWithoutReply_toInput>
  }

  export type MessageUpdateManyWithWhereWithoutReply_toInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRepliesInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
    createdEmotes?: EmoteUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
    createdEmotes?: EmoteUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutAuthorInput = {
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    channel: MessageChannelCreateNestedOneWithoutMessagesInput
    attachment?: AttachmentCreateNestedOneWithoutMessagesInput
    reply_to?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReply_toInput
  }

  export type MessageUncheckedCreateWithoutAuthorInput = {
    id?: number
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
    replies?: MessageUncheckedCreateNestedManyWithoutReply_toInput
  }

  export type MessageCreateOrConnectWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
  }

  export type MessageCreateManyAuthorInputEnvelope = {
    data: Enumerable<MessageCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutOwnerInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    public?: boolean
    channel: MessageChannelCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
    invites?: GroupInviteCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnerInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    channel_id: string
    public?: boolean
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invites?: GroupInviteUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupCreateManyOwnerInputEnvelope = {
    data: Enumerable<GroupCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutUserInput = {
    admin?: boolean
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateWithoutUserInput = {
    group_id: string
    admin?: boolean
  }

  export type MemberCreateOrConnectWithoutUserInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberCreateManyUserInputEnvelope = {
    data: Enumerable<MemberCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageInfoCreateWithoutUserInput = {
    open?: boolean
    to_user: UserCreateNestedOneWithoutReceivedDirectMessagesInput
    channel: MessageChannelCreateNestedOneWithoutDirectMessagesInput
  }

  export type DirectMessageInfoUncheckedCreateWithoutUserInput = {
    channel_id: string
    to_user_id: string
    open?: boolean
  }

  export type DirectMessageInfoCreateOrConnectWithoutUserInput = {
    where: DirectMessageInfoWhereUniqueInput
    create: XOR<DirectMessageInfoCreateWithoutUserInput, DirectMessageInfoUncheckedCreateWithoutUserInput>
  }

  export type DirectMessageInfoCreateManyUserInputEnvelope = {
    data: Enumerable<DirectMessageInfoCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageInfoCreateWithoutTo_userInput = {
    open?: boolean
    user: UserCreateNestedOneWithoutSentDirectMessagesInput
    channel: MessageChannelCreateNestedOneWithoutDirectMessagesInput
  }

  export type DirectMessageInfoUncheckedCreateWithoutTo_userInput = {
    channel_id: string
    user_id: string
    open?: boolean
  }

  export type DirectMessageInfoCreateOrConnectWithoutTo_userInput = {
    where: DirectMessageInfoWhereUniqueInput
    create: XOR<DirectMessageInfoCreateWithoutTo_userInput, DirectMessageInfoUncheckedCreateWithoutTo_userInput>
  }

  export type DirectMessageInfoCreateManyTo_userInputEnvelope = {
    data: Enumerable<DirectMessageInfoCreateManyTo_userInput>
    skipDuplicates?: boolean
  }

  export type EmoteCreateWithoutCreatorInput = {
    id: string
    name: string
    timestamp?: Date | string
    hash?: string | null
  }

  export type EmoteUncheckedCreateWithoutCreatorInput = {
    id: string
    name: string
    timestamp?: Date | string
    hash?: string | null
  }

  export type EmoteCreateOrConnectWithoutCreatorInput = {
    where: EmoteWhereUniqueInput
    create: XOR<EmoteCreateWithoutCreatorInput, EmoteUncheckedCreateWithoutCreatorInput>
  }

  export type EmoteCreateManyCreatorInputEnvelope = {
    data: Enumerable<EmoteCreateManyCreatorInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
    create: XOR<MessageCreateWithoutAuthorInput, MessageUncheckedCreateWithoutAuthorInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAuthorInput, MessageUncheckedUpdateWithoutAuthorInput>
  }

  export type MessageUpdateManyWithWhereWithoutAuthorInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutOwnedGroupsInput>
  }

  export type GroupScalarWhereInput = {
    AND?: Enumerable<GroupScalarWhereInput>
    OR?: Enumerable<GroupScalarWhereInput>
    NOT?: Enumerable<GroupScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    unique_name?: StringFilter | string
    icon_hash?: IntNullableFilter | number | null
    banner_hash?: IntNullableFilter | number | null
    channel_id?: StringFilter | string
    owner_id?: StringFilter | string
    public?: BoolFilter | boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
  }

  export type MemberUpdateManyWithWhereWithoutUserInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutMembershipsInput>
  }

  export type DirectMessageInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: DirectMessageInfoWhereUniqueInput
    update: XOR<DirectMessageInfoUpdateWithoutUserInput, DirectMessageInfoUncheckedUpdateWithoutUserInput>
    create: XOR<DirectMessageInfoCreateWithoutUserInput, DirectMessageInfoUncheckedCreateWithoutUserInput>
  }

  export type DirectMessageInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: DirectMessageInfoWhereUniqueInput
    data: XOR<DirectMessageInfoUpdateWithoutUserInput, DirectMessageInfoUncheckedUpdateWithoutUserInput>
  }

  export type DirectMessageInfoUpdateManyWithWhereWithoutUserInput = {
    where: DirectMessageInfoScalarWhereInput
    data: XOR<DirectMessageInfoUpdateManyMutationInput, DirectMessageInfoUncheckedUpdateManyWithoutSentDirectMessagesInput>
  }

  export type DirectMessageInfoUpsertWithWhereUniqueWithoutTo_userInput = {
    where: DirectMessageInfoWhereUniqueInput
    update: XOR<DirectMessageInfoUpdateWithoutTo_userInput, DirectMessageInfoUncheckedUpdateWithoutTo_userInput>
    create: XOR<DirectMessageInfoCreateWithoutTo_userInput, DirectMessageInfoUncheckedCreateWithoutTo_userInput>
  }

  export type DirectMessageInfoUpdateWithWhereUniqueWithoutTo_userInput = {
    where: DirectMessageInfoWhereUniqueInput
    data: XOR<DirectMessageInfoUpdateWithoutTo_userInput, DirectMessageInfoUncheckedUpdateWithoutTo_userInput>
  }

  export type DirectMessageInfoUpdateManyWithWhereWithoutTo_userInput = {
    where: DirectMessageInfoScalarWhereInput
    data: XOR<DirectMessageInfoUpdateManyMutationInput, DirectMessageInfoUncheckedUpdateManyWithoutReceivedDirectMessagesInput>
  }

  export type EmoteUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EmoteWhereUniqueInput
    update: XOR<EmoteUpdateWithoutCreatorInput, EmoteUncheckedUpdateWithoutCreatorInput>
    create: XOR<EmoteCreateWithoutCreatorInput, EmoteUncheckedCreateWithoutCreatorInput>
  }

  export type EmoteUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EmoteWhereUniqueInput
    data: XOR<EmoteUpdateWithoutCreatorInput, EmoteUncheckedUpdateWithoutCreatorInput>
  }

  export type EmoteUpdateManyWithWhereWithoutCreatorInput = {
    where: EmoteScalarWhereInput
    data: XOR<EmoteUpdateManyMutationInput, EmoteUncheckedUpdateManyWithoutCreatedEmotesInput>
  }

  export type EmoteScalarWhereInput = {
    AND?: Enumerable<EmoteScalarWhereInput>
    OR?: Enumerable<EmoteScalarWhereInput>
    NOT?: Enumerable<EmoteScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    creatorId?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    hash?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutCreatedEmotesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutCreatedEmotesInput = {
    id: string
    name?: string
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    banner_hash?: number | null
    is_ai?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    sentDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutUserInput
    receivedDirectMessages?: DirectMessageInfoUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutCreatedEmotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEmotesInput, UserUncheckedCreateWithoutCreatedEmotesInput>
  }

  export type UserUpsertWithoutCreatedEmotesInput = {
    update: XOR<UserUpdateWithoutCreatedEmotesInput, UserUncheckedUpdateWithoutCreatedEmotesInput>
    create: XOR<UserCreateWithoutCreatedEmotesInput, UserUncheckedCreateWithoutCreatedEmotesInput>
  }

  export type UserUpdateWithoutCreatedEmotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEmotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    is_ai?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    sentDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutUserNestedInput
    receivedDirectMessages?: DirectMessageInfoUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type MessageCreateWithoutAttachmentInput = {
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author: UserCreateNestedOneWithoutMessagesInput
    channel: MessageChannelCreateNestedOneWithoutMessagesInput
    reply_to?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReply_toInput
  }

  export type MessageUncheckedCreateWithoutAttachmentInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
    replies?: MessageUncheckedCreateNestedManyWithoutReply_toInput
  }

  export type MessageCreateOrConnectWithoutAttachmentInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAttachmentInput, MessageUncheckedCreateWithoutAttachmentInput>
  }

  export type MessageCreateManyAttachmentInputEnvelope = {
    data: Enumerable<MessageCreateManyAttachmentInput>
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutAttachmentInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAttachmentInput, MessageUncheckedUpdateWithoutAttachmentInput>
    create: XOR<MessageCreateWithoutAttachmentInput, MessageUncheckedCreateWithoutAttachmentInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAttachmentInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAttachmentInput, MessageUncheckedUpdateWithoutAttachmentInput>
  }

  export type MessageUpdateManyWithWhereWithoutAttachmentInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type MessageCreateManyChannelInput = {
    id?: number
    author_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
  }

  export type DirectMessageInfoCreateManyChannelInput = {
    user_id: string
    to_user_id: string
    open?: boolean
  }

  export type MessageUpdateWithoutChannelInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
    attachment?: AttachmentUpdateOneWithoutMessagesNestedInput
    reply_to?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: MessageUncheckedUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DirectMessageInfoUpdateWithoutChannelInput = {
    open?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSentDirectMessagesNestedInput
    to_user?: UserUpdateOneRequiredWithoutReceivedDirectMessagesNestedInput
  }

  export type DirectMessageInfoUncheckedUpdateWithoutChannelInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoUncheckedUpdateManyWithoutDirectMessagesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberCreateManyGroupInput = {
    user_id: string
    admin?: boolean
  }

  export type GroupInviteCreateManyGroupInput = {
    code: string
  }

  export type MemberUpdateWithoutGroupInput = {
    admin?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MemberUncheckedUpdateWithoutGroupInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberUncheckedUpdateManyWithoutMembersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupInviteUpdateWithoutGroupInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type GroupInviteUncheckedUpdateWithoutGroupInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type GroupInviteUncheckedUpdateManyWithoutInvitesInput = {
    code?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyReply_toInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MessageUpdateWithoutReply_toInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutMessagesNestedInput
    attachment?: AttachmentUpdateOneWithoutMessagesNestedInput
    replies?: MessageUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateWithoutReply_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    replies?: MessageUncheckedUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountCreateManyUserInput = {
    id: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id: string
    sessionToken: string
    expires: Date | string
  }

  export type MessageCreateManyAuthorInput = {
    id?: number
    channel_id: string
    content: string
    timestamp?: Date | string
    attachment_id?: string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
  }

  export type GroupCreateManyOwnerInput = {
    id: string
    name: string
    unique_name: string
    icon_hash?: number | null
    banner_hash?: number | null
    channel_id: string
    public?: boolean
  }

  export type MemberCreateManyUserInput = {
    group_id: string
    admin?: boolean
  }

  export type DirectMessageInfoCreateManyUserInput = {
    channel_id: string
    to_user_id: string
    open?: boolean
  }

  export type DirectMessageInfoCreateManyTo_userInput = {
    channel_id: string
    user_id: string
    open?: boolean
  }

  export type EmoteCreateManyCreatorInput = {
    id: string
    name: string
    timestamp?: Date | string
    hash?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    channel?: MessageChannelUpdateOneRequiredWithoutMessagesNestedInput
    attachment?: AttachmentUpdateOneWithoutMessagesNestedInput
    reply_to?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment_id?: NullableStringFieldUpdateOperationsInput | string | null
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: MessageUncheckedUpdateManyWithoutReply_toNestedInput
  }

  export type GroupUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    public?: BoolFieldUpdateOperationsInput | boolean
    channel?: MessageChannelUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    invites?: GroupInviteUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    channel_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invites?: GroupInviteUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutOwnedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unique_name?: StringFieldUpdateOperationsInput | string
    icon_hash?: NullableIntFieldUpdateOperationsInput | number | null
    banner_hash?: NullableIntFieldUpdateOperationsInput | number | null
    channel_id?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberUpdateWithoutUserInput = {
    admin?: BoolFieldUpdateOperationsInput | boolean
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutUserInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberUncheckedUpdateManyWithoutMembershipsInput = {
    group_id?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoUpdateWithoutUserInput = {
    open?: BoolFieldUpdateOperationsInput | boolean
    to_user?: UserUpdateOneRequiredWithoutReceivedDirectMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutDirectMessagesNestedInput
  }

  export type DirectMessageInfoUncheckedUpdateWithoutUserInput = {
    channel_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoUncheckedUpdateManyWithoutSentDirectMessagesInput = {
    channel_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoUpdateWithoutTo_userInput = {
    open?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSentDirectMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutDirectMessagesNestedInput
  }

  export type DirectMessageInfoUncheckedUpdateWithoutTo_userInput = {
    channel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectMessageInfoUncheckedUpdateManyWithoutReceivedDirectMessagesInput = {
    channel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    open?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmoteUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmoteUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmoteUncheckedUpdateManyWithoutCreatedEmotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyAttachmentInput = {
    id?: number
    author_id: string
    channel_id: string
    content: string
    timestamp?: Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: number | null
  }

  export type MessageUpdateWithoutAttachmentInput = {
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutMessagesNestedInput
    channel?: MessageChannelUpdateOneRequiredWithoutMessagesNestedInput
    reply_to?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReply_toNestedInput
  }

  export type MessageUncheckedUpdateWithoutAttachmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    embeds?: NullableJsonNullValueInput | InputJsonValue
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: MessageUncheckedUpdateManyWithoutReply_toNestedInput
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