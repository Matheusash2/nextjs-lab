import Pessoa from "@/components/Pessoa"
import comAutorizacao from "@/hoc/comAutorizacao";
import { useState } from "react"

function Home() {
  let [idadeM, setIdade] = useState(17);
  const pessoas = [
    {
      nomePessoa: 'Marília', 
      idadePessoa: 30
    },
    {
      nomePessoa: 'Josemira', 
      idadePessoa: 59
    },
    {
      nomePessoa: 'Jose', 
      idadePessoa: 67
    }
  ];

  const incrementaidade = () => {
    setIdade(++idadeM);
  }

  return (
    <>
      <h1>Olá mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome='Matheus' idade={idadeM} />
      <Pessoa nome='Matheus 2' idade={29} />

      {pessoas.map(({nomePessoa, idadePessoa}, index) => {
        return <Pessoa
          nome={nomePessoa}
          idade={idadePessoa}
          key={index}
          />
      })}
      <button onClick={incrementaidade}>Incrementa idade do Matheus</button>
    </>
  )
}

export default comAutorizacao(Home);
