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
  onClose: () => void
  contentId?: number
}

export const UpdateContent = ({ onClose, contentId }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [habilities, setHabilities] = useState<any[]>([])
  const [hability, setHability] = useState()
  const [type, setType] = useState(0)
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState<boolean>(false)
  const [workload, setWorkload] = useState('')
  const [workloadError, setWorkloadError] = useState<boolean>(false)
  const [texto, setTexto] = useState('')
  const [textoError, setTextoError] = useState<boolean>(false)
  const [videoId, setVideoId] = useState('')
  const [videoIdError, setVideoIdError] = useState<boolean>(false)
  const [invalid, setInvalid] = useState<boolean>(false)

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

  const data = {
    titulo: title,
    habilidade: {
      codigo: hability
    },
    texto: texto,
    tempoEstimado: workload,
    urlVideo: `https://www.youtube.com/embed/${videoId}`
  }

  function handleUpdateContent() {
    if (
      data.titulo != '' &&
      data.habilidade.codigo != '' &&
      (data.texto != '' || videoId != '')
    ) {
      PostService.updateContent(contentId, data).then(
        (response: any) => {
          console.log(
            'UPDATE/PROFESSOR/updateContent: Conteúdo atualizado com sucesso',
            response.data
          )
          setIsModalVisible(false)
        },
        (error: any) => {
          console.log('UPDATE/PROFESSOR/updateContent: Erro', error.response)
          if (error.response && error.response.status === 403) {
            console.log('UPDATE/PROFESSOR/updateContent: Erro de autenticação')
          }
        }
      )
    }
    setInvalid(true)
  }

  return (
    <div className={style.box}>
      <Input
        text="Título:"
        type="text"
        placeholder="Exemplo"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        onBlur={() => {
          if (data.titulo === '') {
            setTitleError(true)
          }
        }}
      />
      <div className={style.error}>
        {titleError && <p>Título não pode ser vazio.</p>}
      </div>
      <div className={style.cSelect}>
        <Select
          text="Habilidade"
          value={hability}
          onChange={(e: any) => setHability(e.target.value)}
        >
          <option>Selecione uma habilidade</option>
          {habilities?.map((habilidade) => {
            return (
              <option key={habilidade.idHabilidade}>{habilidade.codigo}</option>
            )
          })}
        </Select>
        <Select
          text="Tipo"
          value={type}
          onChange={(e: any) => setType(Number(e.target.value))}
        >
          {SelectType.map((item) => (
            <option key={item.id} value={item.id}>
              {' '}
              {item.title}
            </option>
          ))}
        </Select>
      </div>
      {type === 1 ? (
        <>
          <Input
            text="Id do Vídeo"
            type="url"
            placeholder="https://www.youtube.com/IdVideo"
            value={videoId}
            onChange={(e: any) => setVideoId(e.target.value)}
            onBlur={() => {
              if (videoId === '') {
                setVideoIdError(true)
              }
            }}
          />
          <div className={style.error}>
            {videoIdError && <p>Id do vídeo não pode ser vazio.</p>}
          </div>
        </>
      ) : type === 2 ? (
        <>
          <Input
            text="Texto:"
            type="text"
            placeholder="exemplo"
            value={texto}
            onChange={(e: any) => setTexto(e.target.value)}
            onBlur={() => {
              if (data.texto === '') {
                setTextoError(true)
              }
            }}
          />
          <div className={style.error}>
            {textoError && <p>Texto deve estar entre 1 e 5000 caracteres.</p>}
          </div>
        </>
      ) : null}

      <Input
        text="Carga horária estimada:"
        type="number"
        placeholder="5"
        value={workload}
        onChange={(e: any) => setWorkload(e.target.value)}
        onBlur={() => {
          if (data.tempoEstimado === '') {
            setWorkloadError(true)
          }
        }}
      />
      <div className={style.error}>
        {workloadError && <p>Carga horária não pode ser vazia.</p>}
        {invalid && <p>Por favor, preencha todos os campos corretamente.</p>}
      </div>
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
