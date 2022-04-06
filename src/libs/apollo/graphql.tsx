import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "memo" */
export type Memo = {
  __typename?: 'memo';
  id: Scalars['Int'];
  memo: Scalars['String'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int'];
};

/** aggregated selection of "memo" */
export type Memo_Aggregate = {
  __typename?: 'memo_aggregate';
  aggregate?: Maybe<Memo_Aggregate_Fields>;
  nodes: Array<Memo>;
};

/** aggregate fields of "memo" */
export type Memo_Aggregate_Fields = {
  __typename?: 'memo_aggregate_fields';
  avg?: Maybe<Memo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Memo_Max_Fields>;
  min?: Maybe<Memo_Min_Fields>;
  stddev?: Maybe<Memo_Stddev_Fields>;
  stddev_pop?: Maybe<Memo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Memo_Stddev_Samp_Fields>;
  sum?: Maybe<Memo_Sum_Fields>;
  var_pop?: Maybe<Memo_Var_Pop_Fields>;
  var_samp?: Maybe<Memo_Var_Samp_Fields>;
  variance?: Maybe<Memo_Variance_Fields>;
};


/** aggregate fields of "memo" */
export type Memo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Memo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "memo" */
export type Memo_Aggregate_Order_By = {
  avg?: InputMaybe<Memo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Memo_Max_Order_By>;
  min?: InputMaybe<Memo_Min_Order_By>;
  stddev?: InputMaybe<Memo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Memo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Memo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Memo_Sum_Order_By>;
  var_pop?: InputMaybe<Memo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Memo_Var_Samp_Order_By>;
  variance?: InputMaybe<Memo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "memo" */
export type Memo_Arr_Rel_Insert_Input = {
  data: Array<Memo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Memo_On_Conflict>;
};

/** aggregate avg on columns */
export type Memo_Avg_Fields = {
  __typename?: 'memo_avg_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "memo" */
export type Memo_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "memo". All fields are combined with a logical 'AND'. */
export type Memo_Bool_Exp = {
  _and?: InputMaybe<Array<Memo_Bool_Exp>>;
  _not?: InputMaybe<Memo_Bool_Exp>;
  _or?: InputMaybe<Array<Memo_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "memo" */
export enum Memo_Constraint {
  /** unique or primary key constraint */
  MemoPkey = 'memo_pkey'
}

/** input type for incrementing numeric columns in table "memo" */
export type Memo_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "memo" */
export type Memo_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Memo_Max_Fields = {
  __typename?: 'memo_max_fields';
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "memo" */
export type Memo_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Memo_Min_Fields = {
  __typename?: 'memo_min_fields';
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "memo" */
export type Memo_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "memo" */
export type Memo_Mutation_Response = {
  __typename?: 'memo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Memo>;
};

/** on_conflict condition type for table "memo" */
export type Memo_On_Conflict = {
  constraint: Memo_Constraint;
  update_columns?: Array<Memo_Update_Column>;
  where?: InputMaybe<Memo_Bool_Exp>;
};

/** Ordering options when selecting data from "memo". */
export type Memo_Order_By = {
  id?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memo */
export type Memo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "memo" */
export enum Memo_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "memo" */
export type Memo_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Memo_Stddev_Fields = {
  __typename?: 'memo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "memo" */
export type Memo_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Memo_Stddev_Pop_Fields = {
  __typename?: 'memo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "memo" */
export type Memo_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Memo_Stddev_Samp_Fields = {
  __typename?: 'memo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "memo" */
export type Memo_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Memo_Sum_Fields = {
  __typename?: 'memo_sum_fields';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "memo" */
export type Memo_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "memo" */
export enum Memo_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Memo_Var_Pop_Fields = {
  __typename?: 'memo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "memo" */
export type Memo_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Memo_Var_Samp_Fields = {
  __typename?: 'memo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "memo" */
export type Memo_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Memo_Variance_Fields = {
  __typename?: 'memo_variance_fields';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "memo" */
export type Memo_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "memo" */
  delete_memo?: Maybe<Memo_Mutation_Response>;
  /** delete single row from the table: "memo" */
  delete_memo_by_pk?: Maybe<Memo>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "memo" */
  insert_memo?: Maybe<Memo_Mutation_Response>;
  /** insert a single row into the table: "memo" */
  insert_memo_one?: Maybe<Memo>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "memo" */
  update_memo?: Maybe<Memo_Mutation_Response>;
  /** update single row of the table: "memo" */
  update_memo_by_pk?: Maybe<Memo>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_MemoArgs = {
  where: Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Memo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_MemoArgs = {
  objects: Array<Memo_Insert_Input>;
  on_conflict?: InputMaybe<Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Memo_OneArgs = {
  object: Memo_Insert_Input;
  on_conflict?: InputMaybe<Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MemoArgs = {
  _inc?: InputMaybe<Memo_Inc_Input>;
  _set?: InputMaybe<Memo_Set_Input>;
  where: Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Memo_By_PkArgs = {
  _inc?: InputMaybe<Memo_Inc_Input>;
  _set?: InputMaybe<Memo_Set_Input>;
  pk_columns: Memo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "memo" */
  memo: Array<Memo>;
  /** fetch aggregated fields from the table: "memo" */
  memo_aggregate: Memo_Aggregate;
  /** fetch data from the table: "memo" using primary key columns */
  memo_by_pk?: Maybe<Memo>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootMemoArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Query_RootMemo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Query_RootMemo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "memo" */
  memo: Array<Memo>;
  /** fetch aggregated fields from the table: "memo" */
  memo_aggregate: Memo_Aggregate;
  /** fetch data from the table: "memo" using primary key columns */
  memo_by_pk?: Maybe<Memo>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootMemoArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Subscription_RootMemo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


export type Subscription_RootMemo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  id: Scalars['Int'];
  /** An array relationship */
  memos: Array<Memo>;
  /** An aggregate relationship */
  memos_aggregate: Memo_Aggregate;
  name: Scalars['String'];
  uid: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserMemosArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMemos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memo_Order_By>>;
  where?: InputMaybe<Memo_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  memos?: InputMaybe<Memo_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUidKey = 'user_uid_key'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  memos?: InputMaybe<Memo_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  id?: InputMaybe<Order_By>;
  memos_aggregate?: InputMaybe<Memo_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uid = 'uid'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetMyMemoListQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetMyMemoListQuery = (
  { __typename?: 'query_root' }
  & { memo: Array<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id' | 'memo'>
  )> }
);

export type MemoInfoFragment = (
  { __typename?: 'memo' }
  & Pick<Memo, 'id' | 'memo'>
);

export type DeleteMemoMutationVariables = Exact<{
  memoId: Scalars['Int'];
}>;


export type DeleteMemoMutation = (
  { __typename?: 'mutation_root' }
  & { delete_memo_by_pk?: Maybe<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id'>
  )> }
);

export type GetMemoQueryVariables = Exact<{
  memoId: Scalars['Int'];
}>;


export type GetMemoQuery = (
  { __typename?: 'query_root' }
  & { memo_by_pk?: Maybe<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id' | 'memo'>
  )> }
);

export type EditMemoMutationVariables = Exact<{
  memoId: Scalars['Int'];
  memo: Scalars['String'];
}>;


export type EditMemoMutation = (
  { __typename?: 'mutation_root' }
  & { update_memo_by_pk?: Maybe<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id' | 'memo'>
  )> }
);

export type GetMemoIdListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemoIdListQuery = (
  { __typename?: 'query_root' }
  & { memo: Array<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id'>
  )> }
);

export type GetMemoListItemQueryVariables = Exact<{
  memoId: Scalars['Int'];
}>;


export type GetMemoListItemQuery = (
  { __typename?: 'query_root' }
  & { memo_by_pk?: Maybe<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id' | 'memo'>
  )> }
);

export type GetMemoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemoListQuery = (
  { __typename?: 'query_root' }
  & { memo: Array<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id' | 'memo'>
  )> }
);

export type MemoListResultFragment = (
  { __typename?: 'memo' }
  & Pick<Memo, 'id' | 'memo'>
);

export type CreateMemoMutationVariables = Exact<{
  memo: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type CreateMemoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_memo_one?: Maybe<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id'>
  )> }
);

export const MemoInfoFragmentDoc = gql`
    fragment MemoInfo on memo {
  id
  memo
}
    `;
export const MemoListResultFragmentDoc = gql`
    fragment MemoListResult on memo {
  id
  memo
}
    `;
export const GetMyMemoListDocument = gql`
    query GetMyMemoList($userId: Int!) {
  memo(where: {userId: {_eq: $userId}}) {
    ...MemoInfo
  }
}
    ${MemoInfoFragmentDoc}`;

/**
 * __useGetMyMemoListQuery__
 *
 * To run a query within a React component, call `useGetMyMemoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyMemoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyMemoListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetMyMemoListQuery(baseOptions: Apollo.QueryHookOptions<GetMyMemoListQuery, GetMyMemoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyMemoListQuery, GetMyMemoListQueryVariables>(GetMyMemoListDocument, options);
      }
export function useGetMyMemoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyMemoListQuery, GetMyMemoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyMemoListQuery, GetMyMemoListQueryVariables>(GetMyMemoListDocument, options);
        }
export type GetMyMemoListQueryHookResult = ReturnType<typeof useGetMyMemoListQuery>;
export type GetMyMemoListLazyQueryHookResult = ReturnType<typeof useGetMyMemoListLazyQuery>;
export type GetMyMemoListQueryResult = Apollo.QueryResult<GetMyMemoListQuery, GetMyMemoListQueryVariables>;
export const DeleteMemoDocument = gql`
    mutation DeleteMemo($memoId: Int!) {
  delete_memo_by_pk(id: $memoId) {
    id
  }
}
    `;
export type DeleteMemoMutationFn = Apollo.MutationFunction<DeleteMemoMutation, DeleteMemoMutationVariables>;

/**
 * __useDeleteMemoMutation__
 *
 * To run a mutation, you first call `useDeleteMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemoMutation, { data, loading, error }] = useDeleteMemoMutation({
 *   variables: {
 *      memoId: // value for 'memoId'
 *   },
 * });
 */
export function useDeleteMemoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMemoMutation, DeleteMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMemoMutation, DeleteMemoMutationVariables>(DeleteMemoDocument, options);
      }
export type DeleteMemoMutationHookResult = ReturnType<typeof useDeleteMemoMutation>;
export type DeleteMemoMutationResult = Apollo.MutationResult<DeleteMemoMutation>;
export type DeleteMemoMutationOptions = Apollo.BaseMutationOptions<DeleteMemoMutation, DeleteMemoMutationVariables>;
export const GetMemoDocument = gql`
    query GetMemo($memoId: Int!) {
  memo_by_pk(id: $memoId) {
    ...MemoInfo
  }
}
    ${MemoInfoFragmentDoc}`;

/**
 * __useGetMemoQuery__
 *
 * To run a query within a React component, call `useGetMemoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemoQuery({
 *   variables: {
 *      memoId: // value for 'memoId'
 *   },
 * });
 */
export function useGetMemoQuery(baseOptions: Apollo.QueryHookOptions<GetMemoQuery, GetMemoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemoQuery, GetMemoQueryVariables>(GetMemoDocument, options);
      }
export function useGetMemoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemoQuery, GetMemoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemoQuery, GetMemoQueryVariables>(GetMemoDocument, options);
        }
export type GetMemoQueryHookResult = ReturnType<typeof useGetMemoQuery>;
export type GetMemoLazyQueryHookResult = ReturnType<typeof useGetMemoLazyQuery>;
export type GetMemoQueryResult = Apollo.QueryResult<GetMemoQuery, GetMemoQueryVariables>;
export const EditMemoDocument = gql`
    mutation EditMemo($memoId: Int!, $memo: String!) {
  update_memo_by_pk(pk_columns: {id: $memoId}, _set: {memo: $memo}) {
    ...MemoInfo
  }
}
    ${MemoInfoFragmentDoc}`;
export type EditMemoMutationFn = Apollo.MutationFunction<EditMemoMutation, EditMemoMutationVariables>;

/**
 * __useEditMemoMutation__
 *
 * To run a mutation, you first call `useEditMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMemoMutation, { data, loading, error }] = useEditMemoMutation({
 *   variables: {
 *      memoId: // value for 'memoId'
 *      memo: // value for 'memo'
 *   },
 * });
 */
export function useEditMemoMutation(baseOptions?: Apollo.MutationHookOptions<EditMemoMutation, EditMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditMemoMutation, EditMemoMutationVariables>(EditMemoDocument, options);
      }
export type EditMemoMutationHookResult = ReturnType<typeof useEditMemoMutation>;
export type EditMemoMutationResult = Apollo.MutationResult<EditMemoMutation>;
export type EditMemoMutationOptions = Apollo.BaseMutationOptions<EditMemoMutation, EditMemoMutationVariables>;
export const GetMemoIdListDocument = gql`
    query GetMemoIdList {
  memo {
    id
  }
}
    `;

/**
 * __useGetMemoIdListQuery__
 *
 * To run a query within a React component, call `useGetMemoIdListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemoIdListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemoIdListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMemoIdListQuery(baseOptions?: Apollo.QueryHookOptions<GetMemoIdListQuery, GetMemoIdListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemoIdListQuery, GetMemoIdListQueryVariables>(GetMemoIdListDocument, options);
      }
export function useGetMemoIdListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemoIdListQuery, GetMemoIdListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemoIdListQuery, GetMemoIdListQueryVariables>(GetMemoIdListDocument, options);
        }
export type GetMemoIdListQueryHookResult = ReturnType<typeof useGetMemoIdListQuery>;
export type GetMemoIdListLazyQueryHookResult = ReturnType<typeof useGetMemoIdListLazyQuery>;
export type GetMemoIdListQueryResult = Apollo.QueryResult<GetMemoIdListQuery, GetMemoIdListQueryVariables>;
export const GetMemoListItemDocument = gql`
    query GetMemoListItem($memoId: Int!) {
  memo_by_pk(id: $memoId) {
    id
    memo
  }
}
    `;

/**
 * __useGetMemoListItemQuery__
 *
 * To run a query within a React component, call `useGetMemoListItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemoListItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemoListItemQuery({
 *   variables: {
 *      memoId: // value for 'memoId'
 *   },
 * });
 */
export function useGetMemoListItemQuery(baseOptions: Apollo.QueryHookOptions<GetMemoListItemQuery, GetMemoListItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemoListItemQuery, GetMemoListItemQueryVariables>(GetMemoListItemDocument, options);
      }
export function useGetMemoListItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemoListItemQuery, GetMemoListItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemoListItemQuery, GetMemoListItemQueryVariables>(GetMemoListItemDocument, options);
        }
export type GetMemoListItemQueryHookResult = ReturnType<typeof useGetMemoListItemQuery>;
export type GetMemoListItemLazyQueryHookResult = ReturnType<typeof useGetMemoListItemLazyQuery>;
export type GetMemoListItemQueryResult = Apollo.QueryResult<GetMemoListItemQuery, GetMemoListItemQueryVariables>;
export const GetMemoListDocument = gql`
    query GetMemoList {
  memo {
    ...MemoListResult
  }
}
    ${MemoListResultFragmentDoc}`;

/**
 * __useGetMemoListQuery__
 *
 * To run a query within a React component, call `useGetMemoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMemoListQuery(baseOptions?: Apollo.QueryHookOptions<GetMemoListQuery, GetMemoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemoListQuery, GetMemoListQueryVariables>(GetMemoListDocument, options);
      }
export function useGetMemoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemoListQuery, GetMemoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemoListQuery, GetMemoListQueryVariables>(GetMemoListDocument, options);
        }
export type GetMemoListQueryHookResult = ReturnType<typeof useGetMemoListQuery>;
export type GetMemoListLazyQueryHookResult = ReturnType<typeof useGetMemoListLazyQuery>;
export type GetMemoListQueryResult = Apollo.QueryResult<GetMemoListQuery, GetMemoListQueryVariables>;
export const CreateMemoDocument = gql`
    mutation CreateMemo($memo: String!, $userId: Int!) {
  insert_memo_one(object: {memo: $memo, userId: $userId}) {
    id
  }
}
    `;
export type CreateMemoMutationFn = Apollo.MutationFunction<CreateMemoMutation, CreateMemoMutationVariables>;

/**
 * __useCreateMemoMutation__
 *
 * To run a mutation, you first call `useCreateMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemoMutation, { data, loading, error }] = useCreateMemoMutation({
 *   variables: {
 *      memo: // value for 'memo'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateMemoMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemoMutation, CreateMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemoMutation, CreateMemoMutationVariables>(CreateMemoDocument, options);
      }
export type CreateMemoMutationHookResult = ReturnType<typeof useCreateMemoMutation>;
export type CreateMemoMutationResult = Apollo.MutationResult<CreateMemoMutation>;
export type CreateMemoMutationOptions = Apollo.BaseMutationOptions<CreateMemoMutation, CreateMemoMutationVariables>;