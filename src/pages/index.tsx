import { gql } from '@apollo/client';
import type { NextPage } from 'next'
import { Layout } from '../component/Layout';
import { useGetMemoTestQuery } from '../libs/apollo/graphql';

const Home: NextPage = () => {
  const { data } = useGetMemoTestQuery()
  return (
    <Layout>
      <p>ここはTOPページ</p>
    </Layout>
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
