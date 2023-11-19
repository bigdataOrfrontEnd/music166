import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Form, UploadProps, Image } from 'antd'
import { Button, message, Upload } from 'antd'

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<any>([])

  const props: UploadProps = {
    onPreview: async (file) => {
      console.log(file)
      let src = file.url as string
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader()
          // reader.readAsDataURL(file.originFileObj as RcFile);
          // reader.onload = () => resolve(reader.result as string);
        })
      }
      // const image = new Image();
      // image.src = src;
      // const imgWindow = window.open(src);
      // imgWindow?.document.write(image.outerHTML);
    },

    name: 'file',
    listType: 'picture-card',
    showUploadList: {
      showPreviewIcon: false,
      showRemoveIcon: false
    },
    onRemove: (file) => {
      console.log(file)
      setFileList([])
    },
    fileList,
    accept: 'image/png, image/jpeg',
    customRequest: async ({ file }: any) => {
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
    },
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
        <Upload {...props}>
          <Button icon={<UploadOutlined />}></Button>
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
