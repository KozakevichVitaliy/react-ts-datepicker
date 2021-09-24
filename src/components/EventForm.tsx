import { Button, DatePicker, Form, Input, Row } from 'antd'
import Select from 'rc-select'
import React, { ReactElement } from 'react'
import { rules } from '../utils/rules'

interface Props {
  
}

export default function EventForm({}: Props): ReactElement {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required('Please input your event description!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required('Please input date event!')]}
      >
        <DatePicker  />
      </Form.Item>
      <Form.Item>
      <Select >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
          <Button type="primary" htmlType="submit" >
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
