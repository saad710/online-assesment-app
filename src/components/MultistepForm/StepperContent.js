import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { steps } from './data';
import { DataContext } from './MultistepForm';
import "./StepperContent.css"

const StepperContent = () => {
    const [activeStep, setActiveStep,handleNext,handleReset,handleBack] = useContext(DataContext);
    console.log(activeStep)
    const [mainData,setMainData] = useState(steps)
    console.log(mainData)
    const [queItem,setQueItem] = useState([])
    const [stepScore,setStepScore] = useState()
    const [queId ,setQueId] = useState()
    const [optionInfo,setOptionInfo] = useState([""])
    console.log(queItem)

    useEffect(() =>  {
            const totalScore = queItem.reduce((total,item) =>  total + item.score ,0)
            console.log(totalScore)
            setStepScore(totalScore)
        
    },[queItem])
    
    const handleOption = (opt) => {
        console.log(opt.score)
        console.log(opt.queId)
        setQueId(opt.queId)
        // setOptionInfo(opt.option)
        const newItem = [...queItem, opt]
        console.log(newItem)
        setQueItem(newItem)
        // const getItem = newItem?.map(elem => {
        //    if(elem.queId === opt.queId){
        //     return { ...elem ,score : opt.score  };
        //    }
        //    else{
        //        return {...elem }
        //    }
        //   })
        //   console.log(getItem)
        // let removeMatchQue = {};
        // newItem.forEach((user) => {
        //     removeMatchQue[user.option] = user; 
        // });
        // setQueItem(Object.values(removeMatchQue))
        // console.log(Object.values(removeMatchQue));
      
        
        setMainData(mainData?.map((main) => {
                return {...main, info : main.info.map(subInfo => {
                        return{...subInfo, options : subInfo.options.map(data => {
                            if(data.queId === opt.queId && data.id === opt.id){
                                return{...data, isActive : true}
                            }
                            else{
                                return {...data}
                            }
                        })}
                })}
        }))
    }


    const handleRemove = (opt) => {
        console.log(opt)
        // console.log(setStepScore)
        setStepScore(stepScore - opt.score)
        setMainData(mainData?.map((main) => {
            return {...main, info : main.info.map(subInfo => {
                    return{...subInfo, options : subInfo.options.map(data => {
                        if(data.queId === opt.queId && data.id === opt.id){
                            return{...data, isActive : false}
                        }
                        else{
                            return {...data}
                        }
                    })}
            })}
    }))


    }
 
  

    return (
        <Box sx={{ mb: 2 }}>
            <h3> Score : {stepScore}</h3>
            <h4>  {"step " +(activeStep + 1) + "/" + steps.length}</h4>
            {/* <Typography variant="h2">{steps[activeStep].info.title}</Typography>
            <Typography variant="h6">{steps[activeStep].info.info_descrition}</Typography> */}
            {
                mainData[activeStep].info?.map((info,index) =>(
                    <div key={index}>
                        <div >
                        {info.question}
                        </div>
                     {/* {
                         optionInfo?.map((option,index) => ( */}
                            <div>
                            {
                                info.options.map((opt,index) => (
                                    <Button  key={index} className={opt.isActive ? "active-btn" : ""} variant="outlined" style={{marginLeft:"0.6vh",marginTop:"2vh"}} onClick={() => opt.isActive? handleRemove(opt) : handleOption(opt)} > {opt.option}</Button>
                                ))
                            }
                            </div>
                         {/* ))
                     } */}
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
             variant ="contained"
             disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous
            </Button>
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