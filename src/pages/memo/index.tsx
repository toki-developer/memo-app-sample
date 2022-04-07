import { gql } from '@apollo/client';
import type { NextPage } from 'next'
import Link from 'next/link';
import { Layout } from '../../component/Layout';
import { MemoListResultFragment, useGetMemoListQuery } from '../../libs/apollo/graphql';

const MemoListItem = ({id, memo}: MemoListResultFragment) => {
  return (
    <div>
      <Link href={`/memo/${id}`}>
        {memo}
      </Link>
    </div>
  )
}

const MemoListPage: NextPage = () => {
  const { data } = useGetMemoListQuery()

  return (
    <Layout>
      <h2>メモ一覧</h2>
      <div>
        {data?.memo.map((item)=>(
          <MemoListItem {...item} key={item.id} />
        ))}
      </div>
    </Layout>
  )
}

export default MemoListPage

gql`
  query GetMemoList {
    memo {
      ...MemoListResult
    }
  }
`

gql`
  fragment MemoListResult on memo {
    id
    memo
  }
`
