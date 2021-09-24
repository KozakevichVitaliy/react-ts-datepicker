import React, { ReactElement } from 'react'
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'

interface Props {
  events: IEvent[]
}

export default function EventCalendar({}: Props): ReactElement {
  return (
    <Calendar />
  )
}
