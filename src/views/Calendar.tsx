import React, { useState } from 'react'
import { BadgeProps, Button } from 'antd'
import { Badge, Calendar, Col, Radio, Row, Select, Typography } from 'antd'
import type { Moment } from 'moment'
import moment from 'moment'
const getListData = (value: Moment) => {
  let listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' }
      ]
      break
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' }
      ]
      break
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' }
      ]
      break
    default:
  }
  return listData || []
}

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394
  }
}
export default function MyCalen() {
  const today = new Date()
  const [curData, setCurData] = useState<any>(today)

  const dateCellRender = (value: Moment) => {
    console.log(moment(value).format('YYYY-MM-DD'))

    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps['status']}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    )
  }
  const handleSelect = (date: Moment) => {
    console.log(date)
    setCurData(date)
  }
  return (
    <Calendar
      dateCellRender={dateCellRender}
      //   monthCellRender={monthCellRender}
      onSelect={handleSelect}
      value={moment(curData)}
      headerRender={({ value, onChange }) => {
        const start = 0
        const end = 12
        const monthOptions = []
        const current = value.clone()
        const localeData = value.localeData()
        const months = []
        for (let i = 0; i < 12; i++) {
          current.month(i)
          months.push(localeData.monthsShort(current))
        }

        for (let i = start; i < end; i++) {
          monthOptions.push(
            <Select.Option key={i} value={i} className="month-item">
              {months[i]}
            </Select.Option>
          )
        }

        const year = value.year()
        const month = value.month()
        const options = []
        for (let i = year - 10; i < year + 10; i += 1) {
          options.push(
            <Select.Option key={i} value={i} className="year-item">
              {i}
            </Select.Option>
          )
        }
        return (
          <div style={{ padding: 8 }}>
            <Row gutter={8}>
              <Col>
                <Select
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  value={year}
                  onChange={(newYear) => {
                    const now = value.clone().year(newYear)
                    onChange(now)
                  }}
                >
                  {options}
                </Select>
              </Col>
              <Col>
                <Select
                  dropdownMatchSelectWidth={false}
                  value={month}
                  onChange={(newMonth) => {
                    const now = value.clone().month(newMonth)
                    onChange(now)
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
              <Col>
                <Button
                  type="primary"
                  onClick={() => {
                    setCurData(new Date())
                  }}
                >
                  今天
                </Button>
              </Col>
            </Row>
          </div>
        )
      }}
      //   onPanelChange={onPanelChange}
    />
  )
}
