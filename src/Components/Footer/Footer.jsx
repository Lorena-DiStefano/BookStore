import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <footer className="footer_container">
                <div className='data'>
                    <div>
                        <img src="../images/ML-green.png" alt="Logo Mundo Libre" className="logo" />
                    </div>
                    <div className='data_text'>
                        <ul>
                            <li><i className="bi bi-envelope-at"></i> info@mundolibre.com</li>
                            <li><i className="bi bi-headset"></i> 0810-333-libre (55273) </li>
                            <li><i className="bi bi-truck"></i> Envíos sin cargo</li>
                        </ul>
                    </div>
                </div>
                <div className='data_redes'>
                    <ul>
                        <li><a href="https://www.instagram.com/" target='blank'><i className="bi bi-instagram" /></a></li>
                        <li><a href="https://www.twitter.com/" target='blank'><i className="bi bi-twitter"></i></a></li>
                        <li><a href="https://wa.me/?" text="text=urlencodedtext" target='blank'><i className="bi bi-whatsapp" /></a></li>
                        <li><a href="https://es-la.facebook.com/" target='blank'><i className="bi bi-facebook" /></a></li>
                    </ul>
                </div>
            </footer>
        </div >
    )
}
