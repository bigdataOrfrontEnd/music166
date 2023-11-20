import React, { useMemo } from 'react'
import { FullscreenExitOutlined, DeleteOutlined } from '@ant-design/icons'
import { WidthProvider, Responsive } from 'react-grid-layout'
import styles from './index.module.less'
import MyCalen from '@/views/Calendar'

export default function GridLayout(props: any) {
  const { padding, cols, rowHeight, onDrop, cardLayouts, onRemove } = props
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), [])
  const renderItem = (item: any) => {
    console.log('执行', item)
    const { i, name } = item
    return (
      <div className={styles['card-item']} key={i}>
        <div className={styles['MyDragHandleClassName']}>
          <div className={styles['title']}>{name}</div>
          <div className={styles['actions']}>
            <FullscreenExitOutlined />
            <DeleteOutlined onClick={() => onRemove(i)} />
          </div>
        </div>
        <div className={styles['card-content']}>1111</div>
      </div>
    )
  }
  // const onDragStop = (layouts: any, oldItem: any, newItem: any) => {
  //   console.log('onDragStop')
  // }
  const onLayoutChange = (layout: any) => {
    console.log('onLayoutChange', layout)
  }
  return (
    <div className={styles['grid-layout']}>
      <ResponsiveReactGridLayout
        //  items之间magin [x, y]单位默认px
        margin={padding}
        // 此布局的列数
        cols={{ lg: cols }}
        //// 行高有一个默认高度,但是你可以改变他在断点处
        rowHeight={rowHeight}
        measureBeforeMount={false}
        breakpoints={{ lg: 600 }}
        // 设置为 true，用户可以从外部拖拽项到网格中。
        // 当设置为 true 时，你还需要提供 onDrop 属性来处理拖拽项被放置到网格中的情况。
        //要配合onDrop使用
        isDroppable={true}
        draggableHandle={`.${styles['MyDragHandleClassName']}`}
        // onDragStop={onDragStop}
        // 压缩方向
        compactType="vertical"
        // 当元素从外部放入网格时调用。
        onDrop={onDrop}
        // layout 是一个对象数组
        // 格式化为{x: number, y: number, w: number, h: number}
        // 布局中的索引必须与每个项组件上使用的键匹配。
        // 如果选择使用自定义关键点，可以在布局中指定该键
        // 对象数组就像这样
        // {i: string, x: number, y: number, w: number, h: number}

        layouts={cardLayouts}
        // 回调保存布局
        // 得到布局数据在拖拽完成
        onLayoutChange={onLayoutChange}
        // 定义呈现调整大小就是正常的栅栏布局
        // 's' - South handle (bottom-center)
        // 'w' - West handle (left-center)
        // 'e' - East handle (right-center)
        // 'n' - North handle (top-center)
        // 'sw' - Southwest handle (bottom-left)
        // 'nw' - Northwest handle (top-left)
        // 'se' - Southeast handle (bottom-right)
        // 'ne' - Northeast handle (top-right)
        // resizeHandle={['w', 'e']}
      >
        {cardLayouts.lg.map(renderItem)}
      </ResponsiveReactGridLayout>
    </div>
  )
}
GridLayout.defaultProps = {
  padding: [16, 16],
  cols: 12,
  rowHeight: 36
}
