import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

import styles from './app.module.scss';

import { AiOutlineMenu } from 'react-icons/ai';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

type ticketType = {
  id: number;
  solicitante: string;
  mecanismo: string;
  categoria: string;
  subcategoria: string;
  data_abertura: Date;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState<ticketType[]>([]);

  useEffect(() => {
    api.get('/tickets').then((response) => {
      setTickets(response.data);
      setIsLoading(false);
    });
  }, []);

  async function handleDelete(id: number) {
    api.post(`/tickets/${id}`).then((response) => {
      console.log(response);
    });
  }

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
          {isLoading ? (
            <div className={styles.isLoading}>
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          ) : (
            <tbody>
              {tickets.map((ticket: any) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.mecanismo}</td>
                  <td>{ticket.solicitante}</td>
                  <td>{ticket.categoria}</td>
                  <td>{ticket.subcategoria}</td>
                  <td>
                    {new Date(ticket.data_abertura).toLocaleDateString(
                      'pt-BR',
                      {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      }
                    )}
                  </td>
                  <td>
                    <div className={styles.dropdown}>
                      <AiOutlineMenu size={24} />
                      <div id="myDropdown" className={styles.dropdownContent}>
                        <a href="/" onClick={() => handleDelete(ticket.id)}>
                          Deletar
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </main>
  );
}
