import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./ModalDialog.css"
import Chart from "react-google-charts";

const data = [

  ['ID', 'Recovered', 'Death Rate', 'Region', 'Cases'],

  ['CAN', 80.66, 1.67, 'North America', 3373990],
  ['DEU', 79.84, 1.36, 'Europe', 8190230],
  ['DNK', 78.6, 1.84, 'Europe', 552309],
  ['EGY', 72.73, 2.78, 'Middle East', 7971620],
  ['GBR', 80.05, 2, 'Europe', 6180157],
  ['IRN', 72.49, 1.7, 'Middle East', 7313714],
  ['IRQ', 68.09, 4.77, 'Middle East', 3109076],
  ['ISR', 81.55, 2.96, 'Middle East', 748560],
  ['RUS', 68.6, 1.54, 'Europe', 14185000],
  ['USA', 78.09, 2.05, 'North America', 30700700],

]



function ModalDialog() {

  const [isShow, invokeModal] = useState(false)
  
  const initModal = () => {
    return invokeModal(!false)
  }

  const openModal = () => {  document.querySelector(".file").style.display = 'block' }

  const closeModal = () => { document.querySelector(".file").style.display = 'none' }
  return (
    <>
    <span onClick={openModal} className= "fills" > Statistics </span>
    
    <div className='file'>
                  

      <div show={isShow} className="mainZ">

        <Modal.Header closeButton onClick={closeModal}>  <Modal.Title> Bubble-Chart</Modal.Title> </Modal.Header>
        
        <Modal.Body>

        <div className="chart">
        
        <Chart 
          width={'980px'}
          height={'380px'}
          loader={<div>Loading Chart</div>}
          chartType="BubbleChart"
          data={data}
          options={{
            title:
              'Corona Cases Details',
            hAxis: { title: 'Recovered' },
            vAxis: { title: 'Death Rate' },
            bubble: { textStyle: { fontSize: 11 } },
          }}
          rootProps={{ 'data-testid': '1' }}
        />           
    </div>


        </Modal.Body>
        
        <div className='footZ'> <Button variant="danger" onClick={closeModal}>  Close </Button>   </div>
      </div>

    </div>
    </>
  )
}
export default ModalDialog