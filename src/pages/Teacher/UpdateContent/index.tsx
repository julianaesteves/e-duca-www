import style from '../RegisterContent/registerContent.module.scss'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { Select } from '../../../components/Select'
import { useEffect, useState } from 'react'
import { SelectType } from '../RegisterContent/SelectType'
import { UpdateSuccess } from './UpdateSuccess'
import { Modal } from '../../../components/Modal'
import PostService from '../../../services/post.service'

type Props = {
  onClose?: () => void
}

export const UpdateContent = ({ onClose }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [habilities, setHabilities] = useState<any[]>([])
  const [hability, setHability] = useState(0)
  const [type, setType] = useState(0)

  const [title, setTitle] = useState()
  const [workload, setworkload] = useState()
  const [texto, setTexto] = useState()
  const [url, setUrl] = useState()

  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    PostService.getHability().then(
      (response: any) => {
        setHabilities(response.data)
      },
      (error: any) => {
        console.log('TEACHER/UpdateContent/getHability: Erro', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('TEACHER/UpdateContent/getHability: Erro de autenticação')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }, [])

  function handleUpdateContent(id: number) {

    const data = {
      titulo: title,
      habilidade:  hability,
      texto: texto

    }

    PostService.updateContent(id, data).then(
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
        text="Título:"
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
          placeholder="https://videoaula.com/exemplo "
          value={url}
          onChange={(e: any) => setUrl(e.target.value)}
        />
      ) : type === 2 ? (
        
        <Input
          text="Texto:"
          type="text"
          placeholder="exemplo"
          value={texto}
          onChange={(e: any) => setTexto(e.target.value)}
        />
      ) : null}

      <Input
        text="Carga horária estimada:"
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
          // onChange={handleUpdateContent}
          onClick={handleUpdateContent}
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
