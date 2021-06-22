import styles from './app.module.scss';

export default function App() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <table className={styles.tableContent}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Mecanismo</th>
              <th>Solicitante</th>
              <th>Categoria</th>
              <th>Subcategoria</th>
              <th>Data abertura</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Suporte</td>
              <td>Silvia</td>
              <td>Coletor</td>
              <td>Performance</td>
              <td>21/06/2021</td>
              <td>
                <button type="button">Encerrar</button>
                <button type="button">Excluir</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Suporte</td>
              <td>Maicon</td>
              <td>Linha de montagem</td>
              <td>Parado</td>
              <td>21/06/2021</td>
              <td>
                <button type="button">Encerrar</button>
                <button type="button">Excluir</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Suporte</td>
              <td>Fátima</td>
              <td>JD Edwards</td>
              <td>Morreu</td>
              <td>21/06/2021</td>
              <td>
                <button type="button" className="button1">
                  Encerrar
                </button>
                <button type="button" className="button2">
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
