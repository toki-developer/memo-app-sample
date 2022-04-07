import { gql } from '@apollo/client';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { Layout } from '../component/Layout';
import { useAuth0User } from '../hooks/useAuth0User';
import { useRequireLogin } from '../hooks/useRequireLogin';
import { MemoInfoFragment, useDeleteMemoMutation, useGetMyMemoListQuery } from '../libs/apollo/graphql';

const MemoItem = ({id, memo}: MemoInfoFragment) => {
  const router = useRouter()

  const [deleteMemo] = useDeleteMemoMutation({variables: {memoId: id}, refetchQueries: ["GetMyMemoList"] })

  const handleEditMemo = () => {
    router.push(`/memo/${id}/edit`)
  }
  const handleDeleteMemo = () => {
    deleteMemo()
  }

  return (
    <div>
      <p>{memo}</p>
      <div>
        <button onClick={handleEditMemo}>編集</button>
        <button onClick={handleDeleteMemo}>削除</button>
      </div>
      <hr />
    </div>
  )
}

const Home: NextPage = () => {
  useRequireLogin()
  const router = useRouter()
  const { userId } = useAuth0User()
  const { data } = useGetMyMemoListQuery({variables: {userId}})

  const handleCreateMemo = () => {
    router.push("/memo/new")
  }

  return (
    <Layout>
      <div>
        <button onClick={handleCreateMemo}>メモを投稿</button>
      </div>
      <div>
        {data?.memo.map((item)=>(
          <MemoItem {...item} key={item.id} />
        ))}
      </div>
    </Layout>
  )
}

export default Home

gql`
  query GetMyMemoList($userId: Int!) {
    memo(where: {userId: {_eq: $userId}}) {
      ...MemoInfo
    }
  }
`

gql`
  fragment MemoInfo on memo {
    id
    memo
  }
`

gql`
  mutation DeleteMemo($memoId: Int!) {
    delete_memo_by_pk(id: $memoId) {
      id
    }
  }
`