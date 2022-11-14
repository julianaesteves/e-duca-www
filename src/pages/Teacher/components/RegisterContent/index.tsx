import style from './registerContent.module.scss'
import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Select } from '../../../../components/Select'
import { useState } from 'react'
import { SelectType } from './SelectType'
import { SelectHability } from './SelectHability'
import axios from 'axios'

type Props = {
  onClose?: () => void
}

export const RegisterContent = ({ onClose }: Props) => {
  const [hability, setHability] = useState(0)
  const [type, setType] = useState(0)
  const [title, setTitle] = useState()
  const [workload, setWorkload] = useState()
  const [texto, setTexto] = useState()
  const [article, setArticle] = useState()
  const [url, setUrl] = useState()

  const data = {
    titulo: title,
    tempoEstimado: workload,
    texto: texto,
    artigo: article,
    url: url,
    // urlVideo: urlVideo
  }

  const registerContent = () => {
    axios.post("http://localhost:8080/api/conteudos", data)
    .then(function (response) {
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(data);
    
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
          {SelectHability.map((item, index) => {
            return (
              <>
                <option key={index}>{item.title}</option>;
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
        <>
        <label>Artigo:</label>
        <input
          type="file"
          placeholder="exemplo"
          value={article}
          onChange={(e: any) => setArticle(e.target.value)}
        />
        </>
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
