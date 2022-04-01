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

/** aggregate avg on columns */
export type Memo_Avg_Fields = {
  __typename?: 'memo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "memo". All fields are combined with a logical 'AND'. */
export type Memo_Bool_Exp = {
  _and?: InputMaybe<Array<Memo_Bool_Exp>>;
  _not?: InputMaybe<Memo_Bool_Exp>;
  _or?: InputMaybe<Array<Memo_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "memo" */
export enum Memo_Constraint {
  /** unique or primary key constraint */
  MemoPkey = 'memo_pkey'
}

/** input type for incrementing numeric columns in table "memo" */
export type Memo_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "memo" */
export type Memo_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Memo_Max_Fields = {
  __typename?: 'memo_max_fields';
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Memo_Min_Fields = {
  __typename?: 'memo_min_fields';
  id?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
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
  Memo = 'memo'
}

/** input type for updating data in table "memo" */
export type Memo_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  memo?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Memo_Stddev_Fields = {
  __typename?: 'memo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Memo_Stddev_Pop_Fields = {
  __typename?: 'memo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Memo_Stddev_Samp_Fields = {
  __typename?: 'memo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Memo_Sum_Fields = {
  __typename?: 'memo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "memo" */
export enum Memo_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Memo = 'memo'
}

/** aggregate var_pop on columns */
export type Memo_Var_Pop_Fields = {
  __typename?: 'memo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Memo_Var_Samp_Fields = {
  __typename?: 'memo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Memo_Variance_Fields = {
  __typename?: 'memo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "memo" */
  delete_memo?: Maybe<Memo_Mutation_Response>;
  /** delete single row from the table: "memo" */
  delete_memo_by_pk?: Maybe<Memo>;
  /** insert data into the table: "memo" */
  insert_memo?: Maybe<Memo_Mutation_Response>;
  /** insert a single row into the table: "memo" */
  insert_memo_one?: Maybe<Memo>;
  /** update data of the table: "memo" */
  update_memo?: Maybe<Memo_Mutation_Response>;
  /** update single row of the table: "memo" */
  update_memo_by_pk?: Maybe<Memo>;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "memo" */
  memo: Array<Memo>;
  /** fetch aggregated fields from the table: "memo" */
  memo_aggregate: Memo_Aggregate;
  /** fetch data from the table: "memo" using primary key columns */
  memo_by_pk?: Maybe<Memo>;
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

export type GetMemoTestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemoTestQuery = (
  { __typename?: 'query_root' }
  & { memo: Array<(
    { __typename?: 'memo' }
    & Pick<Memo, 'id' | 'memo'>
  )> }
);


export const GetMemoTestDocument = gql`
    query getMemoTest {
  memo {
    id
    memo
  }
}
    `;

/**
 * __useGetMemoTestQuery__
 *
 * To run a query within a React component, call `useGetMemoTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemoTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemoTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMemoTestQuery(baseOptions?: Apollo.QueryHookOptions<GetMemoTestQuery, GetMemoTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemoTestQuery, GetMemoTestQueryVariables>(GetMemoTestDocument, options);
      }
export function useGetMemoTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemoTestQuery, GetMemoTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemoTestQuery, GetMemoTestQueryVariables>(GetMemoTestDocument, options);
        }
export type GetMemoTestQueryHookResult = ReturnType<typeof useGetMemoTestQuery>;
export type GetMemoTestLazyQueryHookResult = ReturnType<typeof useGetMemoTestLazyQuery>;
export type GetMemoTestQueryResult = Apollo.QueryResult<GetMemoTestQuery, GetMemoTestQueryVariables>;