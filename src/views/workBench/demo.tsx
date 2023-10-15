import React, { useMemo } from 'react'
import { WidthProvider, Responsive } from 'react-grid-layout'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
export default function Demo() {
  //   const layouts = [
  //     { i: 'a', x: 0, y: 0, w: 1, h: 2 },
  //     { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  //     { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  //   ]
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 4, h: 8 },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ]
  }
  const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), [])
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="a">
        <div className='height:100%'>
            <div><button></button></div>
            <div className='height:100%-100px'>
                <table ></table>
            </div>
        </div>
      </div>
      <div key="b">2</div>
      <div key="c">3</div>
    </ResponsiveGridLayout>
  )
}
