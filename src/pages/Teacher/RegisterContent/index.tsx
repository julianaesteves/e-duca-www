import style from './registerContent.module.scss'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { Select } from '../../../components/Select'
import { useState, useEffect } from 'react'
import { SelectType } from './SelectType'
import PostService from '../../../services/post.service'

type Props = {
  onClose?: () => void
}

export const RegisterContent = ({ onClose }: Props) => {
  const [habilities, setHabilities] = useState<any[]>([])
  const [hability, setHability] = useState()
  const [type, setType] = useState(0)
  const [title, setTitle] = useState()
  const [workload, setWorkload] = useState()
  const [texto, setTexto] = useState()
  const [url, setUrl] = useState()

  const data = {
    titulo: title,
    tempoEstimado: workload,
    habilidade: {
      codigo: hability
    },
    texto: texto,
    url: url
    // urlVideo: urlVideo
  }

  useEffect(() => {
    PostService.getHability().then(
      (response: any) => {
        setHabilities(response.data)
      },
      (error: any) => {
        console.log('Caquita no get codigo', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('Deu problema no codigo')
          // AuthService.logout();
          // navigate("/login");
          // window.location.reload();
        }
      }
    )
  }, [])

  const registerContent = () => {
    PostService.registerContent(data).then(
      (response: any) => {
        console.log(response.data)
      },
      (error: any) => {
        console.log('Private page', error.response)
        // Invalid token
        if (error.response && error.response.status === 403) {
          console.log('Deu problema')
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
          placeholder="Selecione uma habilidade"
          text="Habilidade"
          value={habilities}
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
          placeholder="https://videoaula.com/exemplo"
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
        onChange={(e: any) => setWorkload(e.target.value)}
      />
      <div className={style.cBtn}>
        <Button className={style.btnBack} title="Voltar" onClick={onClose} />
        <Button
          className={style.btnRegister}
          title="Cadastrar"
          onClick={registerContent}
        />
      </div>
    </div>
  )
}
