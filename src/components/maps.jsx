import React from 'react';

const MapaGoogle = () => (
  <div className="mapa">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26780.141224650306!2d-68.82972467006074!3d-32.963742038420506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0d12f4d107b5%3A0xf3445ec24057fb6c!2sCentro%20de%20informaci%C3%B3n%20tur%C3%ADstica%20N%C2%B04%20-%20Maip%C3%BA%20-%20Estaci%C3%B3n%20Guti%C3%A9rrez!5e0!3m2!1ses-419!2sar!4v1718752769635!5m2!1ses-419!2sar" 
    width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
);

export default MapaGoogle;
