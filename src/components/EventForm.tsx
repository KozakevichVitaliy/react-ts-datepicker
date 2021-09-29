import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Moment } from 'moment'
import React, { ReactElement, useState } from 'react'
import { useTypedUseSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { formatDate } from '../utils/date'
import { rules } from '../utils/rules'

interface Props {
  guests: IUser[]
  submit: (event: IEvent) => void
}

export default function EventForm({ guests, submit }: Props): ReactElement {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    guest: '',
    date: '',
    description: ''
  } as IEvent)
  const { user } = useTypedUseSelector(state => state.authReducer)

  const selectDate = (date: Moment | null) => {
    if (date) setEvent({ ...event, date: formatDate(date.toDate()) })
  }

  const submitForm = () => {
    submit({ ...event, author: user.username })
  }

  return (
    <Form
      onFinish={submitForm}
    >
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required('Please input your event description!')]}
      >
        <Input 
          onChange={e => setEvent({ ...event, description: e.target.value })}
          value={event.description} 
        />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required('Please input date event!')]}
      >
        <DatePicker
          onChange={(data) => selectDate(data)} 
        />
      </Form.Item>
      <Form.Item
        label="Guests list"
        name="guests"
        rules={[rules.required('Please select guests!')]}
      >
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {  
            guests.map(guest => {
              return (
                <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>
              )
            })
          }
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type="primary" htmlType="submit" >
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
