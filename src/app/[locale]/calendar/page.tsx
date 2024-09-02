"use client"
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';
import dayjs from 'dayjs';


function Calendar() {

  const events = [
    
    { title: 'TEST Event 1', 
    start: dayjs('2024-8-12T12:00:00').toDate(),
    end: dayjs('2024-8-14T12:00:00').toDate(),
    color: 'red' },

    { title: 'TEST Event 2', 
    start: dayjs('2024-9-12T12:00:00').toDate(),
    end: dayjs('2024-9-14T12:00:00').toDate(),
    color: 'green' },
    
    { title: 'TEST Event 3', 
    start: dayjs('2024-1-02T8:00:00').toDate(),
    end: dayjs('2024-1-03T12:00:00').toDate(),
    color: 'orange' },

    { title: 'TEST Event 4', 
    start: dayjs('2024-10-17T10:00:00').toDate(),
    end: dayjs('2024-10-17T02:00:00').toDate(),
    color: 'purple' },

    { title: 'TEST Event 5', 
    start: dayjs('2024-4-12T12:00:00').toDate(),
    end: dayjs('2024-4-13T12:00:00').toDate(),
    color: 'yellow' },

    { title: 'TEST Event 6', 
    start: dayjs('2024-3-12T12:00:00').toDate(),
    end: dayjs('2024-3-14T12:00:00').toDate(),
    color: 'blue' },

    { title: 'TEST Event 8', 
    start: dayjs('2024-9-02T06:00:00').toDate(),
    end: dayjs('2024-9-02T10:00:00').toDate(),
    color: 'red', },

    { title: 'TEST Event 9', 
        start: dayjs('2024-9-02T06:00:00').toDate(),
        end: dayjs('2024-9-02T15:00:00').toDate(),
        color: 'blue', },



  ];

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

        
        
        
        
        />


        </div>
    </div>
  )
}

export default Calendar
