import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Form, UploadProps, Image } from 'antd'
import { Button, message, Upload } from 'antd'

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<any>([])
  const [isImage, setIsImage] = useState(true)
  const props: UploadProps = {
    name: 'file',
    showUploadList: false,
    fileList,
    accept: 'image/png, image/jpeg',
    customRequest: async ({ file }: any) => {
      setIsImage(true)
      console.log(file)
      if (isImage) {
        const base64 = await new Promise((resolve) => {
          const fileRender = new FileReader()
          fileRender.readAsDataURL(file)
          fileRender.onload = () => {
            resolve(fileRender.result)
          }
        })
        if (base64) {
          const val = {
            file,
            url: base64
          }
          setFileList([val])
          form.setFieldValue('img', { file })
        }
      }
    },
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    }
  }
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const needForm = document.querySelector('.neededFormEle')
      const formData = new FormData(needForm as any)

      console.log(values)
    })
    console.log('开始收集书局 ')
  }
  return (
    <Form onFinish={handleSubmit} form={form} className="neededFormEle">
      <Form.Item label="img" name="img" validateTrigger={['onBlur']}>
        <>
          {fileList.map((file: any, index: any) => {
            return isImage ? (
              <Image src={file.url} key={index} />
            ) : (
              <span key={index}>暂无图片</span>
            )
          })}
        </>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="name" name="name">
        <input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}

export default App
