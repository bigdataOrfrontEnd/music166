import React from 'react'
import { Form, Input, InputNumber, Upload, Radio, Button } from 'antd'
export default function CardForm({ form, initData }: any) {
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
        <Upload>
          <Button>上床</Button>
        </Upload>
      </Form.Item>
    </Form>
  )
}
