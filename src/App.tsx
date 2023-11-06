import { Button, Form, Modal } from 'antd'
import React, { useState } from 'react'
import CardForm from './components/Form'
const [form] = Form.useForm()
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
    handleSubmit()
  }
  const handleSubmit = () => {
    form.validateFields()
    console.log(form.validateFields())
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
  }
  return (
    <div>
      <Button onClick={showAddForm}>新增</Button>
      <Button
        onClick={() => {
          //   showUpdateForm()
        }}
      >
        修改
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* initData={{}} form={form} */}
        <CardForm form={form} />
      </Modal>
    </div>
  )
}
