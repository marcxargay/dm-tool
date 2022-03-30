import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Character from '../../components/CharacterSheet'

const Characters: NextPage = () => {
  return (
    <Layout title='Characters'>
      <Character />
    </Layout>
  )
}

export default Characters