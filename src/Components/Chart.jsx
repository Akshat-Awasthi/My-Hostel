import React from 'react'

const Chart = () => {
  return (
    <div>
        <Bar 
                    data={{
                        labels:Feedback.map((data)=>data.label),
                    datasets: [
                        {
                            label:"No. of Students",
                            data: Feedback.map((data)=>data.Value),
                            backgroundColor:[
                                "rgb(0,128,0)",
                                "rgb(220,20,60)",
                            ],
                            borderRadius:5,
                        },
                    ]}} />
    </div>
  )
}

export default Chart