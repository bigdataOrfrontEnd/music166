import React, { useState } from 'react'
import { Form, Input, InputNumber, Upload, Radio, Button } from 'antd'
export default function CardForm({ form, initData }: any) {
  console.log(initData)

  form.setFieldsValue({ ...initData })
  const [fileList, setFileList] = useState<any>([])
  const [isImage, setIsImage] = useState(true)
  const props: any = {
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
  return (
    <Form name="basic" autoComplete="off" form={form}>
      <Form.Item label="卡片名称" name="cardName">
        <Input />
      </Form.Item>
      <Form.Item label="卡片id" name="cardId">
        <InputNumber />
      </Form.Item>
      <Form.Item label="是否全屏" name="cardFull">
        <Radio.Group>
          <Radio value="a">是</Radio>
          <Radio value="b">否</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="uploader" label="上传图片">
        <Upload {...props}>
          <Button>上传</Button>
        </Upload>
      </Form.Item>
    </Form>
  )
}
