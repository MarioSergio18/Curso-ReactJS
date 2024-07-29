import './index.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="Page-App pagina">

      <header className='cabeçalho'>
        <h2 className='Titulo'> Estudos em ReactJS. <i className='fa fa-heart'></i> </h2>
      </header>

      <section className='seçao'>
        <h3 className='sub-titulo'> Pelo Prof° Brunex. </h3>

        <input type="text" placeholder='Digite Aqui'/>
        <br />
        <select>
          <option> item 1 </option>
          <option> item 2 </option>
          <option> item 3 </option>
        </select>
        <br />
        <button> Clique Aqui </button>

        <ul>
          <li>
          <Link to='/contato'> Ir para Contatos </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}