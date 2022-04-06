import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../../component/Layout";
import { addApolloState, initializeApollo } from "../../../libs/apollo/apolloClient";
import { GetMemoIdListDocument, GetMemoIdListQuery, GetMemoListItemDocument, GetMemoListItemQuery, useGetMemoListItemQuery } from "../../../libs/apollo/graphql";

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetMemoIdListQuery>({ query: GetMemoIdListDocument });
  const paths = data.memo.map(({id}) => {
      return { params: {id: String(id) } }
  })
  return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  await apolloClient.query<GetMemoListItemQuery>({ query: GetMemoListItemDocument, variables: { memoId: Number(params?.id) } });
  return addApolloState(apolloClient, { props: {} });
};

const MemoListItemPage: NextPage = () => {
  const rouetr = useRouter()
  const { id } = rouetr.query
  const { data } = useGetMemoListItemQuery({ variables: { memoId: Number(id) } })

  return (
    <Layout>
      <p>{data?.memo_by_pk?.memo}</p>
    </Layout>
  )
}

gql`
  query GetMemoIdList {
    memo {
      id
    }
  }
  query GetMemoListItem($memoId: Int!) {
    memo_by_pk(id: $memoId) {
      id
      memo
    }
  }
`

export default MemoListItemPage
