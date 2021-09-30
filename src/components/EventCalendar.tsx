import React, { ReactElement } from 'react'
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment';
import { formatDate } from '../utils/date';

interface Props {
  events: IEvent[]
}

export default function EventCalendar({ events }: Props): ReactElement {

  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate())
    const currentDayEvents = events.filter(ev => ev.date === formatedDate)
    console.log(value);
    
    return (
      <div>
        {
          currentDayEvents.map((ev, index) => 
            <div key={index}>{ ev.description }</div>
          )
        }
      </div>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender} 
    />
  )
}
