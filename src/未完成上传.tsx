import { Button, Form, Modal } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import CardForm from './components/Form'

export default function App() {
  // axios.defaults.baseURL = 'http://localhost:8080'
  // axios.defaults.headers.post['Content-Type'] =
  //   'application/x-www-form-urlencoded'
  // axios.get('/').then(function (res) {
  //   console.log(res.data)
  // })
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
    handleSubmit()
  }
  const handleSubmit = () => {
    form.validateFields().then(async (values) => {
      console.log(values)
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const showAddForm = () => {
    setIsModalOpen(true)
    console.log('add')
  }
  const showUpdateForm = (data: any) => {
    setIsModalOpen(true)
    console.log('update')
    handleSubmit()
  }
  const data = {
    cardFull: 'b',
    cardId: 5,
    cardName: '345'
  }
  return (
    <div>
      <Button onClick={showAddForm}>新增</Button>
      <Button
        onClick={() => {
          showUpdateForm({
            cardFull: 'b',
            cardId: 5,
            cardName: '345'
          })
        }}
      >
        修改
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* initData={{}} form={form} */}
        <CardForm form={form} initData={data} />
      </Modal>
    </div>
  )
}
