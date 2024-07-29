import './index.scss'
import { Link } from 'react-router-dom'


export default function NaoEncontrado () {



    return (
        <div className='Page-Not-Found'>
            <h2 className='Titulo'>
                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i> 
                </Link>
                |Pagina Não Encontrada| <br/> Error 404</h2>
            <img className='imagem_not_found' src="/assets/images/ilustration_not_found_404.jpg" alt="Imagem de Pagina não Encontrada" />
        </div>
    )
}