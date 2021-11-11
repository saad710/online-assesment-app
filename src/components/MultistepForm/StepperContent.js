import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { steps } from './data';
import { DataContext } from './MultistepForm';
import "./StepperContent.css"

const StepperContent = () => {
    const [activeStep, setActiveStep,handleNext,handleReset] = useContext(DataContext);
    const [queItem,setQueItem] = useState([])
    const [stepScore,setStepScore] = useState()
    const [queId ,setQueId] = useState()
    const [optionInfo,setOptionInfo] = useState()
    console.log(queItem)

    useEffect(() =>  {
        if(queItem){
            const totalScore = queItem.reduce((total,item) => total + item.score ,0)
            console.log(totalScore)
            setStepScore(totalScore)
        }
    },[queItem])
    
    const handleOption = (opt) => {
        console.log(opt.score)
        console.log(opt.queId)
        setQueId(opt.queId)
        setOptionInfo(opt.option)
        const newItem = [...queItem, opt]
        console.log(newItem)
        setQueItem(newItem)
        // const optionValue = newItem.map(val => val.option)
        // console.log(optionValue)
        // setOptionInfo(optionValue)
        // const calculteScore = queItem.reduce(x,y => x.score + y.score )
    }

    return (
        <Box sx={{ mb: 2 }}>
            <h3> Score : {stepScore}</h3>
            <h4>  {"step " +(activeStep + 1) + "/" + steps.length}</h4>
            {/* <Typography variant="h2">{steps[activeStep].info.title}</Typography>
            <Typography variant="h6">{steps[activeStep].info.info_descrition}</Typography> */}
            {
                steps[activeStep].info.map((info,index) =>(
                    <div key={index}>
                        <div >
                        {info.question}
                        </div>
                      <div>
                            {
                                info.options.map((opt,index) => (
                                    <Button className={opt.option === optionInfo ? "active-btn" : ""} key={index} variant="outlined" style={{marginLeft:"0.6vh",marginTop:"2vh"}} onClick={() => handleOption(opt)} > {opt.option}</Button>
                                ))
                            }
                      </div>
                    </div>
                ))
            }
            <br />
            <Divider />
            {/* <br />
            {
                steps[activeStep].info.input ? steps[activeStep].info.input : null
            }
            <br /> */}
            <Button
            variant="contained"
            size="large"
            onClick={() => {activeStep < (steps.length -1) ? handleNext() : handleReset()}}
            sx={{ mt: 1, ml: "70%" }}
            >{activeStep < (steps.length -1) ? "Next" : "Finish & Reset"}</Button>
        </Box>
    );
};

export default StepperContent;