"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';



function Calendar() {
  return (
    <div className="">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <hr className="mt-20"/>
        <div className="">

        <FullCalendar 
        
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
        initialView={"multiMonthYear"}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear'
        }}
        height={'100vh'}
        
        />


        </div>
    </div>
  )
}

export default Calendar
