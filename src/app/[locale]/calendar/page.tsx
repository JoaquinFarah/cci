"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';



function Calendar() {
  return (
    <div className="">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <hr className="mt-20"/>
        <div className="">

        <FullCalendar 
        
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        height={'90vh'}
        
        />


        </div>
    </div>
  )
}

export default Calendar