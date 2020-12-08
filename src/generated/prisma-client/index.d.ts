// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  crime: (where?: CrimeWhereInput) => Promise<boolean>;

  station: (where?: StationWhereInput) => Promise<boolean>;

  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  crime: (where: CrimeWhereUniqueInput) => CrimeNullablePromise;
  crimes: (args?: {
    where?: CrimeWhereInput;
    orderBy?: CrimeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Crime>;
  crimesConnection: (args?: {
    where?: CrimeWhereInput;
    orderBy?: CrimeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CrimeConnectionPromise;

  station: (where: StationWhereUniqueInput) => StationNullablePromise;
  stations: (args?: {
    where?: StationWhereInput;
    orderBy?: StationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Station>;
  stationsConnection: (args?: {
    where?: StationWhereInput;
    orderBy?: StationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => StationConnectionPromise;


  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCrime: (data: CrimeCreateInput) => CrimePromise;
  updateCrime: (args: {
    data: CrimeUpdateInput;
    where: CrimeWhereUniqueInput;
  }) => CrimePromise;
  updateManyCrimes: (args: {
    data: CrimeUpdateManyMutationInput;
    where?: CrimeWhereInput;
  }) => BatchPayloadPromise;
  upsertCrime: (args: {
    where: CrimeWhereUniqueInput;
    create: CrimeCreateInput;
    update: CrimeUpdateInput;
  }) => CrimePromise;
  deleteCrime: (where: CrimeWhereUniqueInput) => CrimePromise;
  deleteManyCrimes: (where?: CrimeWhereInput) => BatchPayloadPromise;

  createStation: (data: StationCreateInput) => StationPromise;
  updateStation: (args: {
    data: StationUpdateInput;
    where: StationWhereUniqueInput;
  }) => StationPromise;
  updateManyStations: (args: {
    data: StationUpdateManyMutationInput;
    where?: StationWhereInput;
  }) => BatchPayloadPromise;
  upsertStation: (args: {
    where: StationWhereUniqueInput;
    create: StationCreateInput;
    update: StationUpdateInput;
  }) => StationPromise;
  deleteStation: (where: StationWhereUniqueInput) => StationPromise;
  deleteManyStations: (where?: StationWhereInput) => BatchPayloadPromise;


  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  crime: (
    where?: CrimeSubscriptionWhereInput
  ) => CrimeSubscriptionPayloadSubscription;

  station: (
    where?: StationSubscriptionWhereInput
  ) => StationSubscriptionPayloadSubscription;

  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CrimeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "gu_ASC"
  | "gu_DESC"
  | "murder_ASC"
  | "murder_DESC"
  | "robbery_ASC"
  | "robbery_DESC"
  | "rape_ASC"
  | "rape_DESC"
  | "theft_ASC"
  | "theft_DESC"
  | "violence_ASC"
  | "violence_DESC";


export type StationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "stationName_ASC"
  | "stationName_DESC"
  | "X_ASC"
  | "X_DESC"
  | "Y_ASC"
  | "Y_DESC"
  | "stationAddress_ASC"
  | "stationAddress_DESC";


export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CrimeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CrimeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  gu?: Maybe<String>;
  gu_not?: Maybe<String>;
  gu_in?: Maybe<String[] | String>;
  gu_not_in?: Maybe<String[] | String>;
  gu_lt?: Maybe<String>;
  gu_lte?: Maybe<String>;
  gu_gt?: Maybe<String>;
  gu_gte?: Maybe<String>;
  gu_contains?: Maybe<String>;
  gu_not_contains?: Maybe<String>;
  gu_starts_with?: Maybe<String>;
  gu_not_starts_with?: Maybe<String>;
  gu_ends_with?: Maybe<String>;
  gu_not_ends_with?: Maybe<String>;
  murder?: Maybe<Int>;
  murder_not?: Maybe<Int>;
  murder_in?: Maybe<Int[] | Int>;
  murder_not_in?: Maybe<Int[] | Int>;
  murder_lt?: Maybe<Int>;
  murder_lte?: Maybe<Int>;
  murder_gt?: Maybe<Int>;
  murder_gte?: Maybe<Int>;
  robbery?: Maybe<Int>;
  robbery_not?: Maybe<Int>;
  robbery_in?: Maybe<Int[] | Int>;
  robbery_not_in?: Maybe<Int[] | Int>;
  robbery_lt?: Maybe<Int>;
  robbery_lte?: Maybe<Int>;
  robbery_gt?: Maybe<Int>;
  robbery_gte?: Maybe<Int>;
  rape?: Maybe<Int>;
  rape_not?: Maybe<Int>;
  rape_in?: Maybe<Int[] | Int>;
  rape_not_in?: Maybe<Int[] | Int>;
  rape_lt?: Maybe<Int>;
  rape_lte?: Maybe<Int>;
  rape_gt?: Maybe<Int>;
  rape_gte?: Maybe<Int>;
  theft?: Maybe<Int>;
  theft_not?: Maybe<Int>;
  theft_in?: Maybe<Int[] | Int>;
  theft_not_in?: Maybe<Int[] | Int>;
  theft_lt?: Maybe<Int>;
  theft_lte?: Maybe<Int>;
  theft_gt?: Maybe<Int>;
  theft_gte?: Maybe<Int>;
  violence?: Maybe<Int>;
  violence_not?: Maybe<Int>;
  violence_in?: Maybe<Int[] | Int>;
  violence_not_in?: Maybe<Int[] | Int>;
  violence_lt?: Maybe<Int>;
  violence_lte?: Maybe<Int>;
  violence_gt?: Maybe<Int>;
  violence_gte?: Maybe<Int>;
  AND?: Maybe<CrimeWhereInput[] | CrimeWhereInput>;
  OR?: Maybe<CrimeWhereInput[] | CrimeWhereInput>;
  NOT?: Maybe<CrimeWhereInput[] | CrimeWhereInput>;
}


export type StationWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface StationWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  stationName?: Maybe<String>;
  stationName_not?: Maybe<String>;
  stationName_in?: Maybe<String[] | String>;
  stationName_not_in?: Maybe<String[] | String>;
  stationName_lt?: Maybe<String>;
  stationName_lte?: Maybe<String>;
  stationName_gt?: Maybe<String>;
  stationName_gte?: Maybe<String>;
  stationName_contains?: Maybe<String>;
  stationName_not_contains?: Maybe<String>;
  stationName_starts_with?: Maybe<String>;
  stationName_not_starts_with?: Maybe<String>;
  stationName_ends_with?: Maybe<String>;
  stationName_not_ends_with?: Maybe<String>;
  X?: Maybe<Float>;
  X_not?: Maybe<Float>;
  X_in?: Maybe<Float[] | Float>;
  X_not_in?: Maybe<Float[] | Float>;
  X_lt?: Maybe<Float>;
  X_lte?: Maybe<Float>;
  X_gt?: Maybe<Float>;
  X_gte?: Maybe<Float>;
  Y?: Maybe<Float>;
  Y_not?: Maybe<Float>;
  Y_in?: Maybe<Float[] | Float>;
  Y_not_in?: Maybe<Float[] | Float>;
  Y_lt?: Maybe<Float>;
  Y_lte?: Maybe<Float>;
  Y_gt?: Maybe<Float>;
  Y_gte?: Maybe<Float>;
  stationAddress?: Maybe<String>;
  stationAddress_not?: Maybe<String>;
  stationAddress_in?: Maybe<String[] | String>;
  stationAddress_not_in?: Maybe<String[] | String>;
  stationAddress_lt?: Maybe<String>;
  stationAddress_lte?: Maybe<String>;
  stationAddress_gt?: Maybe<String>;
  stationAddress_gte?: Maybe<String>;
  stationAddress_contains?: Maybe<String>;
  stationAddress_not_contains?: Maybe<String>;
  stationAddress_starts_with?: Maybe<String>;
  stationAddress_not_starts_with?: Maybe<String>;
  stationAddress_ends_with?: Maybe<String>;
  stationAddress_not_ends_with?: Maybe<String>;
  AND?: Maybe<StationWhereInput[] | StationWhereInput>;
  OR?: Maybe<StationWhereInput[] | StationWhereInput>;
  NOT?: Maybe<StationWhereInput[] | StationWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface CrimeCreateInput {
  id?: Maybe<ID_Input>;
  gu: String;
  murder: Int;
  robbery: Int;
  rape: Int;
  theft: Int;
  violence: Int;
}

export interface CrimeUpdateInput {
  gu?: Maybe<String>;
  murder?: Maybe<Int>;
  robbery?: Maybe<Int>;
  rape?: Maybe<Int>;
  theft?: Maybe<Int>;
  violence?: Maybe<Int>;
}

export interface CrimeUpdateManyMutationInput {
  gu?: Maybe<String>;
  murder?: Maybe<Int>;
  robbery?: Maybe<Int>;
  rape?: Maybe<Int>;
  theft?: Maybe<Int>;
  violence?: Maybe<Int>;
}


export interface StationCreateInput {
  id?: Maybe<ID_Input>;
  stationName: String;
  X: Float;
  Y: Float;
  stationAddress: String;
}

export interface StationUpdateInput {
  stationName?: Maybe<String>;
  X?: Maybe<Float>;
  Y?: Maybe<Float>;
  stationAddress?: Maybe<String>;
}

export interface StationUpdateManyMutationInput {
  stationName?: Maybe<String>;
  X?: Maybe<Float>;
  Y?: Maybe<Float>;
  stationAddress?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface CrimeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CrimeWhereInput>;
  AND?: Maybe<CrimeSubscriptionWhereInput[] | CrimeSubscriptionWhereInput>;
  OR?: Maybe<CrimeSubscriptionWhereInput[] | CrimeSubscriptionWhereInput>;
  NOT?: Maybe<CrimeSubscriptionWhereInput[] | CrimeSubscriptionWhereInput>;
}


export interface StationSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<StationWhereInput>;
  AND?: Maybe<StationSubscriptionWhereInput[] | StationSubscriptionWhereInput>;
  OR?: Maybe<StationSubscriptionWhereInput[] | StationSubscriptionWhereInput>;
  NOT?: Maybe<StationSubscriptionWhereInput[] | StationSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Crime {
  id: ID_Output;
  gu: String;
  murder: Int;
  robbery: Int;
  rape: Int;
  theft: Int;
  violence: Int;
}

export interface CrimePromise extends Promise<Crime>, Fragmentable {
  id: () => Promise<ID_Output>;
  gu: () => Promise<String>;
  murder: () => Promise<Int>;
  robbery: () => Promise<Int>;
  rape: () => Promise<Int>;
  theft: () => Promise<Int>;
  violence: () => Promise<Int>;
}

export interface CrimeSubscription
  extends Promise<AsyncIterator<Crime>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gu: () => Promise<AsyncIterator<String>>;
  murder: () => Promise<AsyncIterator<Int>>;
  robbery: () => Promise<AsyncIterator<Int>>;
  rape: () => Promise<AsyncIterator<Int>>;
  theft: () => Promise<AsyncIterator<Int>>;
  violence: () => Promise<AsyncIterator<Int>>;
}

export interface CrimeNullablePromise
  extends Promise<Crime | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  gu: () => Promise<String>;
  murder: () => Promise<Int>;
  robbery: () => Promise<Int>;
  rape: () => Promise<Int>;
  theft: () => Promise<Int>;
  violence: () => Promise<Int>;
}

export interface CrimeConnection {
  pageInfo: PageInfo;
  edges: CrimeEdge[];
}

export interface CrimeConnectionPromise
  extends Promise<CrimeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CrimeEdge>>() => T;
  aggregate: <T = AggregateCrimePromise>() => T;
}

export interface CrimeConnectionSubscription
  extends Promise<AsyncIterator<CrimeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CrimeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCrimeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CrimeEdge {
  node: Crime;
  cursor: String;
}

export interface CrimeEdgePromise extends Promise<CrimeEdge>, Fragmentable {
  node: <T = CrimePromise>() => T;
  cursor: () => Promise<String>;
}

export interface CrimeEdgeSubscription
  extends Promise<AsyncIterator<CrimeEdge>>,
    Fragmentable {
  node: <T = CrimeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCrime {
  count: Int;
}

export interface AggregateCrimePromise
  extends Promise<AggregateCrime>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCrimeSubscription
  extends Promise<AsyncIterator<AggregateCrime>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Station {
  id: ID_Output;
  stationName: String;
  X: Float;
  Y: Float;
  stationAddress: String;
}

export interface StationPromise extends Promise<Station>, Fragmentable {
  id: () => Promise<ID_Output>;
  stationName: () => Promise<String>;
  X: () => Promise<Float>;
  Y: () => Promise<Float>;
  stationAddress: () => Promise<String>;
}

export interface StationSubscription
  extends Promise<AsyncIterator<Station>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  stationName: () => Promise<AsyncIterator<String>>;
  X: () => Promise<AsyncIterator<Float>>;
  Y: () => Promise<AsyncIterator<Float>>;
  stationAddress: () => Promise<AsyncIterator<String>>;
}

export interface StationNullablePromise
  extends Promise<Station | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  stationName: () => Promise<String>;
  X: () => Promise<Float>;
  Y: () => Promise<Float>;
  stationAddress: () => Promise<String>;
}

export interface StationConnection {
  pageInfo: PageInfo;
  edges: StationEdge[];
}

export interface StationConnectionPromise
  extends Promise<StationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StationEdge>>() => T;
  aggregate: <T = AggregateStationPromise>() => T;
}

export interface StationConnectionSubscription
  extends Promise<AsyncIterator<StationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStationSubscription>() => T;
}

export interface StationEdge {
  node: Station;
  cursor: String;
}

export interface StationEdgePromise extends Promise<StationEdge>, Fragmentable {
  node: <T = StationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StationEdgeSubscription
  extends Promise<AsyncIterator<StationEdge>>,
    Fragmentable {
  node: <T = StationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStation {
  count: Int;
}

export interface AggregateStationPromise
  extends Promise<AggregateStation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStationSubscription
  extends Promise<AsyncIterator<AggregateStation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CrimeSubscriptionPayload {
  mutation: MutationType;
  node: Crime;
  updatedFields: String[];
  previousValues: CrimePreviousValues;
}

export interface CrimeSubscriptionPayloadPromise
  extends Promise<CrimeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CrimePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CrimePreviousValuesPromise>() => T;
}

export interface CrimeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CrimeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CrimeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CrimePreviousValuesSubscription>() => T;
}

export interface CrimePreviousValues {
  id: ID_Output;
  gu: String;
  murder: Int;
  robbery: Int;
  rape: Int;
  theft: Int;
  violence: Int;
}

export interface CrimePreviousValuesPromise
  extends Promise<CrimePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  gu: () => Promise<String>;
  murder: () => Promise<Int>;
  robbery: () => Promise<Int>;
  rape: () => Promise<Int>;
  theft: () => Promise<Int>;
  violence: () => Promise<Int>;
}

export interface CrimePreviousValuesSubscription
  extends Promise<AsyncIterator<CrimePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  gu: () => Promise<AsyncIterator<String>>;
  murder: () => Promise<AsyncIterator<Int>>;
  robbery: () => Promise<AsyncIterator<Int>>;
  rape: () => Promise<AsyncIterator<Int>>;
  theft: () => Promise<AsyncIterator<Int>>;
  violence: () => Promise<AsyncIterator<Int>>;
}


export interface StationSubscriptionPayload {
  mutation: MutationType;
  node: Station;
  updatedFields: String[];
  previousValues: StationPreviousValues;
}

export interface StationSubscriptionPayloadPromise
  extends Promise<StationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StationPreviousValuesPromise>() => T;
}

export interface StationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StationPreviousValuesSubscription>() => T;
}

export interface StationPreviousValues {
  id: ID_Output;
  stationName: String;
  X: Float;
  Y: Float;
  stationAddress: String;
}

export interface StationPreviousValuesPromise
  extends Promise<StationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  stationName: () => Promise<String>;
  X: () => Promise<Float>;
  Y: () => Promise<Float>;
  stationAddress: () => Promise<String>;
}

export interface StationPreviousValuesSubscription
  extends Promise<AsyncIterator<StationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  stationName: () => Promise<AsyncIterator<String>>;
  X: () => Promise<AsyncIterator<Float>>;
  Y: () => Promise<AsyncIterator<Float>>;
  stationAddress: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Crime",
    embedded: false

  },
  {
    name: "Station",
    embedded: false

  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
