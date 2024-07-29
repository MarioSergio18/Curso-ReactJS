import './index.scss'
import { Link } from 'react-router-dom'

export default function Contato () {
    
    
    
    return(
    <div className='Page-Contatos pagina'>
        <header className='cabeçalho'>
            <Link to='/'>
                <i className='fa fa-arrow-left voltar'></i> 
            </Link>
            <h1 className='Titulo'> Contatos: </h1>
        </header>
        
        <section className='seçao'>
            <h1 className='Sub-titulo'>Entre Em Contato !</h1>
            <img className='icone-de-contato' src="/assets/images/contato.png" alt="icone de contatos" />
        </section>
    </div>
    )
}