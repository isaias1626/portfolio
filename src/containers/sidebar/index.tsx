import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Isaias Rocha</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        isaias1626
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>
        <FontAwesomeIcon icon={faSun} /> &nbsp;| &nbsp;
        <FontAwesomeIcon icon={faMoon} />
      </BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
