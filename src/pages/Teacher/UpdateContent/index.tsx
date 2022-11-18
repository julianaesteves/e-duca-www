import style from '../RegisterContent/registerContent.module.scss'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { Select } from '../../../components/Select'
import { useState } from 'react'
import { SelectType } from '../RegisterContent/SelectType'
import { UpdateSuccess } from './UpdateSuccess'
import { Modal } from '../../../components/Modal'
import PostService from '../../../services/post.service'

type Props = {
  onClose?: () => void
}

export const UpdateContent = ({ onClose }: Props) => {
  const [habilities, setHabilities] = useState<any[]>([])
  const [hability, setHability] = useState(0)
  const [type, setType] = useState(0)

  const [title, setTitle] = useState()
  const [workload, setworkload] = useState()
  const [texto, setTexto] = useState()
  const [article, setArticle] = useState()
  const [url, setUrl] = useState()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleUpdateContent = (id: number) => {
    PostService.updateContent(id).then(
      (response: any) => {
        console.log(response.data)
      },
      (error: any) => {
        console.log('UPDATE/PROFESSOR/updateContent: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('UPDATE/PROFESSOR/updateContent: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }

  return (
    <div className={style.box}>
      <Input
        text="Title:"
        type="text"
        placeholder="exemplo"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <div className={style.cSelect}>
        <Select
          text="Habilidade"
          value={hability}
          onChange={(e: any) => setHability(e.target.value)}
        >
          {habilities?.map((habilidade) => {
            return (
              <>
                <option key={habilidade.idHabilidade}>
                  {habilidade.codigo}
                </option>
                ;
              </>
            )
          })}
        </Select>
        <Select
          text="Tipo"
          value={type}
          onChange={(e: any) => setType(Number(e.target.value))}
        >
          {SelectType.map((item) => (
            <>
              <option value={item.id}> {item.title}</option>
            </>
          ))}
        </Select>
      </div>
      {type === 1 ? (
        <Input
          text="URL:"
          type="url"
          placeholder="ex. https://vidioaula.com/exemplo "
          value={url}
          onChange={(e: any) => setUrl(e.target.value)}
        />
      ) : type === 2 ? (
        <Input
          text="Artigo:"
          type="number"
          placeholder="exemplo"
          value={article}
          onChange={(e: any) => setArticle(e.target.value)}
        />
      ) : type === 3 ? (
        <Input
          text="Texto:"
          type="text"
          placeholder="exemplo"
          value={texto}
          onChange={(e: any) => setTexto(e.target.value)}
        />
      ) : null}

      <Input
        text="Carga horária estimada::"
        type="number"
        placeholder="exemplo"
        value={workload}
        onChange={(e: any) => setworkload(e.target.value)}
      />
      <div className={style.cBtn}>
        <Button className={style.btnBack} title="Voltar" onClick={onClose} />
        <Button
          className={style.btnRegister}
          title="Atualizar"
          onChange={handleUpdateContent}
          onClick={() => setIsModalVisible(true)}
        />

        {isModalVisible ? (
          <>
            <Modal
              isOpen={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            >
              <UpdateSuccess onClose={() => setIsModalVisible(false)} />
            </Modal>
          </>
        ) : null}
      </div>
    </div>
  )
}
