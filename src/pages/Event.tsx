import { Button, Modal, Row } from 'antd'
import React, { ReactElement, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedUseSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'


export default function Event(): ReactElement {
  const [modalVisible, setModalVisible] = useState(false)
  const { fetchGuests, createEvent } = useActions()
  const { guests,  } = useTypedUseSelector(state => state.eventReducer)

  useEffect(() => {
    fetchGuests()
  }, [])

  const addNewEvent = (event: IEvent) => {
    createEvent(event)
    setModalVisible(false)
  }

  return (
    <div>
      <EventCalendar events={[]} />
      <Row justify='center'>
          <Button onClick={() => setModalVisible(true)}>Add event!</Button>
      </Row>
      <Modal
        title='Add event!'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm 
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </div>
  )
}
