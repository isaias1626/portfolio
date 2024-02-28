import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
      doloremque, reiciendis modi autem magni atque recusandae, itaque
      perferendis molestias fuga rem quod aperiam! Beatae reiciendis perferendis
      nam. Quidem, aliquid libero.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=isaias1626&show_icons=true&theme=dark&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=isaias1626&layout=compact&langs_count=15&theme=dark" />
    </GithubSecao>
  </section>
)

export default Sobre
