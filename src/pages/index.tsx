import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import { useGetMemoTestQuery } from '../libs/apollo/graphql'

const Home: NextPage = () => {
  const {data} = useGetMemoTestQuery();
  console.log(data)

  return (
    <div>
      <p>ここはTOPページ</p>
    </div>
  )
}

export default Home

gql`
  query getMemoTest {
    memo {
      id
      memo
    }
  }
`
