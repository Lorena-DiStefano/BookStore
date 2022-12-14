import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className= 'footer footer_text'>                
                <p> <i className="bi bi-truck"></i> Envíos sin cargo</p>
            </div>
            <div className='footer_data'>
                <p><b>e-mail: </b>ventaonline@mundolibre.com</p>
                <p>Teléfono: 0810-333-libre (55273) </p>
            </div>
            <div className='link_redes'>
                <a href="https://wa.me/?" text="text=urlencodedtext" target='blank'><i className="bi bi-whatsapp" /></a>
                <a href="https://www.instagram.com/" target='blank'><i className="bi bi-instagram"/></a>                
                <a href="https://www.twitter.com/" target='blank'><i className="bi bi-twitter"></i></a>                
                <a href="https://es-la.facebook.com/" target='blank'><i className="bi bi-facebook" /></a>
            </div>
            <div className='linkMenu'>
                <a href="#top">Menú <i className="bi bi-box-arrow-up"></i></a>
            </div>
        </div >
    )
}
