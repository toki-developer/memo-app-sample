import { gql } from "@apollo/client"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { Layout } from "../../../component/Layout"
import { useRequireLogin } from "../../../hooks/useRequireLogin"
import { useEditMemoMutation, useGetMemoQuery } from "../../../libs/apollo/graphql"

const EditMemoPage: NextPage = () => {
  useRequireLogin()
  const [memo, setMemo] = useState<string>("")
  const router = useRouter()
  const { id } = router.query
  const [editMemo] = useEditMemoMutation();


  useGetMemoQuery({variables: { memoId: Number(id) }, skip: !id, onCompleted: ({memo_by_pk}) => {
    if(!memo_by_pk)return;
    setMemo(memo_by_pk.memo)
  } })

  const handleInputMemo = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    setMemo(event.target.value)
  }
  const handleBackPage = () => {
    router.push("/")
  }
  const handleEditMemo = () => {
    editMemo({variables: {memoId: Number(id), memo}})
    router.push("/")
  }

  return (
    <Layout>
      <textarea onChange={handleInputMemo} value={memo} />
      <div>
        <button onClick={handleBackPage} >戻る</button>
        <button onClick={handleEditMemo}>メモを編集</button>
      </div>
    </Layout>
  )
}

export default EditMemoPage

gql`
  query GetMemo($memoId: Int!) {
    memo_by_pk(id: $memoId) {
      ...MemoInfo
    }
  }
`
gql`
  mutation EditMemo($memoId: Int!, $memo: String!) {
    update_memo_by_pk(pk_columns: {id: $memoId}, _set: {memo: $memo}) {
      ...MemoInfo
    }
  }
`
