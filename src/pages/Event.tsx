import { Button, Modal, Row } from 'antd'
import React, { ReactElement, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'


export default function Event(): ReactElement {
  const [modalVisible, setModalVisible] = useState(false)
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
        <EventForm />
      </Modal>
    </div>
  )
}
