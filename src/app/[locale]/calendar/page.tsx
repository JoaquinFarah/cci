// "use client"
// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import multiMonthPlugin from '@fullcalendar/multimonth';
// import dayjs from 'dayjs';
// import Swal from 'sweetalert2';

// export default function Calendar() {
//   const events = [   
//     { 
//       title: 'SIMEI - Fiera Milano', 
//       start: dayjs('2024-12-12T8:00:00').toDate(),
//       end: dayjs('2024-12-15T12:00:00').toDate(),
//       color: 'orange',
//       description: 'Nos encontramos en la recta final para sumarse a la misión VIP de la Cámara de Comercio Italiana de Mendoza a la feria SIMEI 2024, que se llevará a cabo en Fiera Milano del 12 al 15 de noviembre. Este es el evento más importante del mundo para el sector enológico, y como parte de nuestra misión VIP, tendrán acceso exclusivo a una serie de beneficios únicos.<br/><br/>Eventos y Temas Destacados en SIMEI 2024:<br/>1. Vino: Técnica, Sostenibilidad y Nuevos Estilos<br/>- Estabilización tartárica, desalcoholización, crianza en madera y cerámica.<br/>- Influencia del cambio climático, sostenibilidad y legislación sobre ingredientes del vino.<br/>2. BeerForum: Oportunidad de Actualización para el Sector Cervecero<br/>- Producción y caracterización de cereales, malta, lúpulo.<br/>- Valorización de aromas, selección de levaduras, cervezas IGA, uso de subproductos.<br/>3. Distillo: Futuros y Tendencias en el Mundo de los Spirits<br/>- Análisis del mercado de spirits y destilados, estudios de caso reales.<br/>- Futuro del brandy italiano, vermut, whisky y Calvados.<br/>4. Aceite de Oliva: Técnica, Marketing, Diseño y Economía<br/>- Encuentros organizados por Olio Officina sobre Mosh y Moah, aceites para conservas, aceites aromatizados.<br/>- Clasificación mercadotécnica, envases y diseño, calidad sensorial y etiquetado.<br/><br/>Con un programa tan completo y variado, SIMEI 2024 promete ser una experiencia transformadora y enriquecedora para todos los asistentes.<br/>Para más información o para confirmar su participación, por favor contacte a nuestro equipo lo antes posible.'
//     },
//     { 
//       title: 'MacFrut 2024', 
//       start: dayjs('2024-05-08T10:00:00').toDate(),
//       end: dayjs('2024-05-10T02:00:00').toDate(),
//       color: 'green',
//       description: 'del 08 al 10 de Mayo',                 
//     },    
//     { title: 'Sitevinitech', 
//         start: dayjs('2024-05-15T12:00:00').toDate(),
//         end: dayjs('2024-05-17T12:00:00').toDate(),
//         color: 'black',
//         description: 'del 15 al 17 de Mayo' 
//     },
//     { title: 'Expo San Juan Mineria', 
//         start: dayjs('2024-05-21T12:00:00').toDate(),
//         end: dayjs('2024-05-23T12:00:00').toDate(),
//         color: 'blue',
//         description: 'del 21 al 23 de Mayo' 
//     },
//     { title: 'Jornadas de Ciencias Económicas', 
//         start: dayjs('2024-08-28T06:00:00').toDate(),
//         end: dayjs('2024-08-30T10:00:00').toDate(),
//         color: 'purple',
//         description: 'del 28 al 30 de Agosto' 
//     },
//     { title: 'Economía Para Todos', 
//         start: dayjs('2024-09-21T06:00:00').toDate(),
//         end: dayjs('2024-09-21T15:00:00').toDate(),
//         color: 'blue',
//         description: '21 de Septiembre'         
//     },
//     { title: 'Economía Para Todos', 
//         start: dayjs('2024-10-12T06:00:00').toDate(),
//         end: dayjs('2024-10-12T15:00:00').toDate(),
//         color: 'blue',
//         description: '12 de Octubre'
//     },
//     { title: 'Capacitaciones Ospitalità', 
//         start: dayjs('2024-10-17T18:00:00').toDate(),
//         end: dayjs('2024-10-17T22:00:00').toDate(),
//         color: 'red',
//         description: 'La Cámara de Comercio Italiana de Mendoza junto a la Municipalidad de Mendoza le invitan a obtener el sello de calidad “Ospitalità Italiana”. Es un reconocimiento a nivel mundial que destaca la excelencia en la hospitalidad y autenticidad italiana.<br/><br/>El jueves 17 de octubre a las 18:00, se desarrollará una capacitación en la Municipalidad de Mendoza, dirigida a todos los interesados en obtener la certificación. Se brindarán detalles sobre el proceso y los beneficios asociados a este reconocimiento internacional.',
//         footer: 'Puede inscribirse a la misma hacien click<a href="https://forms.gle/DfeaZ3onYD1RVZ3N6"> <u>AQUI</u></a>'
         
//     },
    
//   ];

//   const handleEventClick = (clickInfo) => {
//     Swal.fire({
//       title: clickInfo.event.title,
//       html: clickInfo.event.extendedProps.description,
//       icon: 'info',
//       confirmButtonText: 'Cerrar',
//       confirmButtonColor: 'red',
//       width: '80%',
//       backdrop: true,
//       footer: clickInfo.event.extendedProps.footer || '',
      
//     });
//   };

//   return (
//     <div className="">
//       <h1 className="text-2xl font-bold">Calendar</h1>
//       <hr className="mt-10"/>
//       <div className="">
//         <FullCalendar                
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
//           initialView={"multiMonthYear"}
//           headerToolbar={{
//             left: 'prev,next, today',
//             center: 'title',
//             right: 'dayGridMonth, timeGridWeek, timeGridDay, multiMonthYear'
//           }}
//           height={'100vh'}
//           events={events}
//           eventDisplay='block'
//           eventClick={handleEventClick}
//         />        
//       </div>
//       <p className="mt-10">Espacio para poner descripciones de los eventos, imagenes o mas info
        
//       </p>
//     </div>
//   )
// }



"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

export default function Calendar() {
const events = [   
{ 
    title: 'SIMEI - Fiera Milano', 
    start: dayjs('2024-12-12T8:00:00').toDate(),
    end: dayjs('2024-12-15T12:00:00').toDate(),
    color: 'orange',
    description: 'Nos encontramos en la recta final para sumarse a la misión VIP de la Cámara de Comercio Italiana de Mendoza a la feria SIMEI 2024, que se llevará a cabo en Fiera Milano del 12 al 15 de noviembre. Este es el evento más importante del mundo para el sector enológico, y como parte de nuestra misión VIP, tendrán acceso exclusivo a una serie de beneficios únicos.<br/><br/>Eventos y Temas Destacados en SIMEI 2024:<br/>1. Vino: Técnica, Sostenibilidad y Nuevos Estilos<br/>- Estabilización tartárica, desalcoholización, crianza en madera y cerámica.<br/>- Influencia del cambio climático, sostenibilidad y legislación sobre ingredientes del vino.<br/>2. BeerForum: Oportunidad de Actualización para el Sector Cervecero<br/>- Producción y caracterización de cereales, malta, lúpulo.<br/>- Valorización de aromas, selección de levaduras, cervezas IGA, uso de subproductos.<br/>3. Distillo: Futuros y Tendencias en el Mundo de los Spirits<br/>- Análisis del mercado de spirits y destilados, estudios de caso reales.<br/>- Futuro del brandy italiano, vermut, whisky y Calvados.<br/>4. Aceite de Oliva: Técnica, Marketing, Diseño y Economía<br/>- Encuentros organizados por Olio Officina sobre Mosh y Moah, aceites para conservas, aceites aromatizados.<br/>- Clasificación mercadotécnica, envases y diseño, calidad sensorial y etiquetado.<br/><br/>Con un programa tan completo y variado, SIMEI 2024 promete ser una experiencia transformadora y enriquecedora para todos los asistentes.<br/>Para más información o para confirmar su participación, por favor contacte a nuestro equipo lo antes posible.',
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>'
},
{ 
    title: 'MacFrut 2024', 
    start: dayjs('2024-05-08T10:00:00').toDate(),
    end: dayjs('2024-05-10T02:00:00').toDate(),
    color: 'green',
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>'               
},    
{ title: 'Sitevinitech', 
    start: dayjs('2024-05-15T12:00:00').toDate(),
    end: dayjs('2024-05-17T12:00:00').toDate(),
    color: 'black',
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>' 
},
{ title: 'Expo San Juan Mineria', 
    start: dayjs('2024-05-21T12:00:00').toDate(),
    end: dayjs('2024-05-23T12:00:00').toDate(),
    color: 'blue',
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>' 
},
{ title: 'Jornadas de Ciencias Económicas', 
    start: dayjs('2024-08-28T06:00:00').toDate(),
    end: dayjs('2024-08-30T10:00:00').toDate(),
    color: 'purple',
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>' 
},
{ title: 'Economía Para Todos', 
    start: dayjs('2024-09-21T06:00:00').toDate(),
    end: dayjs('2024-09-21T15:00:00').toDate(),
    color: 'blue',  
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>'     
},
{ title: 'Economía Para Todos', 
    start: dayjs('2024-10-12T06:00:00').toDate(),
    end: dayjs('2024-10-12T15:00:00').toDate(),
    color: 'blue',
    footer:'<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnMgsFzKBWLbcbvlRgwnzTrFcQsPVBMcWwvSZFPGHLDckdPQZhJgqNHxjknLqFsbFMLrM" target="_blank" autofocus>Para participar del evento, haga click <u>AQUI</u></a>'
},
{ title: 'Capacitaciones Ospitalità', 
    start: dayjs('2024-10-17T18:00:00').toDate(),
    end: dayjs('2024-10-17T22:00:00').toDate(),
    color: 'red',
    description: 'La Cámara de Comercio Italiana de Mendoza junto a la Municipalidad de Mendoza le invitan a obtener el sello de calidad “Ospitalità Italiana”. Es un reconocimiento a nivel mundial que destaca la excelencia en la hospitalidad y autenticidad italiana.<br/><br/>El jueves 17 de octubre a las 18:00, se desarrollará una capacitación en la Municipalidad de Mendoza, dirigida a todos los interesados en obtener la certificación. Se brindarán detalles sobre el proceso y los beneficios asociados a este reconocimiento internacional.',
    footer: 'Puede inscribirse a la misma hacien click<a href="https://forms.gle/DfeaZ3onYD1RVZ3N6"> <u>AQUI</u></a>'                 
},

];

  React.useEffect(() => {
    // Agregar estilos personalizados
    const style = document.createElement('style');
    style.textContent = `
      .justified-text {
        text-align: center;
      }
      .custom-html-container {
        max-height: 300px;
        overflow-y: auto;
      }
    `;
    document.head.appendChild(style);

    // Limpiar los estilos al desmontar el componente
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleEventClick = (clickInfo) => {
    Swal.fire({
      title: clickInfo.event.title,
      html: `<div class="justified-text">${clickInfo.event.extendedProps.description || ''}</div>`,
      icon: 'info',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: 'red',
      width: '80%',
      backdrop: true,
      footer: clickInfo.event.extendedProps.footer || '',
      customClass: {
        htmlContainer: 'custom-html-container'
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold">Calendar</h1>
      <hr className="mt-10"/>
      <div className="">
        <FullCalendar                
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
          initialView={"multiMonthYear"}
          headerToolbar={{
            left: 'prev,next, today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, timeGridDay, multiMonthYear'
          }}
          height={'100vh'}
          events={events}
          eventDisplay='block'
          eventClick={handleEventClick}
        />        
      </div>
      <p className="mt-10">Espacio para poner descripciones de los eventos, imagenes o mas info
        
      </p>
    </div>
  )
}
