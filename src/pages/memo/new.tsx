import { gql } from "@apollo/client"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { Layout } from "../../component/Layout"
import { useAuth0User } from "../../hooks/useAuth0User"
import { useRequireLogin } from "../../hooks/useRequireLogin"
import { useCreateMemoMutation } from "../../libs/apollo/graphql"

const AddMemoPage: NextPage = () => {
  useRequireLogin()
  const {userId} = useAuth0User()
  const [memo, setMemo] = useState<string>("")
  const router = useRouter()
  const [createMemo] = useCreateMemoMutation({refetchQueries: ["GetMyMemoList"]})

  const handleInputMemo = (event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    setMemo(event.target.value)
  }
  const handleBackPage = () => {
    router.push("/")
  }
  const handleCreateMemo = () => {
    createMemo({variables: {memo, userId }})
    router.push("/")
  }

  return (
    <Layout>
      <textarea onChange={handleInputMemo} value={memo} />
      <div>
        <button onClick={handleBackPage} >戻る</button>
        <button onClick={handleCreateMemo}>メモを投稿</button>
      </div>
    </Layout>
  )
}

export default AddMemoPage

gql`
  mutation CreateMemo($memo: String!, $userId: Int!) {
    insert_memo_one(object: {memo: $memo, userId: $userId}) {
      id
    }
  }
`