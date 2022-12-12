import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <p>Envíos gratis en Argentina.</p>
                <p><b>e-mail: </b>ventaonline@mundolibre.com</p>

            </div>
            <p>Teléfono: 0810-333-libre (55273) </p>
            <div className='link_redes'>
                <a href="https://wa.me/?" text="text=urlencodedtext" target='blank'><i className="bi bi-whatsapp" /></a>
                <a href="https://es-la.facebook.com/" target='blank'><i className="bi bi-facebook" /></a>  <a href="https://www.instagram.com/" target='blank'><i className="bi bi-instagram" /></a>
            </div>
            <div className='linkMenu'>
                <a href="#top">Menú <i className="bi bi-box-arrow-up"></i></a>
            </div>
        </div >
    )
}
