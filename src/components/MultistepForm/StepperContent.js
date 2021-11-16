import { Box, Button, Divider, Popover, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { steps } from './data';
import { DataContext } from './MultistepForm';
import "./StepperContent.css"

const StepperContent = () => {
    const [activeStep, setActiveStep,handleReset,handleBack] = useContext(DataContext);
    console.log(activeStep)
    const [mainData,setMainData] = useState(steps)
    console.log(mainData)
    const [queItem,setQueItem] = useState([])
    const [stepScore,setStepScore] = useState()
    const [queId ,setQueId] = useState()
    const [optionInfo,setOptionInfo] = useState()
    const [maxError,setMaxError] = useState(false)
    const [minError,setMinError] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    console.log(queItem)

    // const dataInfo = mainData[activeStep]?.map(main => main.info.length)
    // console.log(dataInfo)


    const handleNext = () => {
       if(minError === true){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
       }
       else{
        setActiveStep((prevActiveStep) => prevActiveStep);
       }
        console.log(queId)
        console.log("active: ",activeStep)

    //    let collectLength;
    //     mainData.map((main,index) => {
    //         console.log(index)
    //         if(index === activeStep){
    //            console.log(main.info.length)
    //             collectLength = main.info.length;   
    //         }
    //     })
      };

    const handleClose = () => {
        setAnchorEl(null);
        setMaxError(false)
      };

    useEffect(() =>  {
            const totalScore = queItem.reduce((total,item) =>  total + item.score ,0)
            console.log(totalScore)
            setStepScore(totalScore)
    },[queItem])

    const handleOption = (opt,info,event) => {
        console.log(info.options)
       console.log(mainData[activeStep].info)
        console.log(opt.score)
        console.log(opt.queId)
        setQueId(opt.queId)
        const max = 2;
        // setOptionInfo(opt.option)
        const newItem = [...queItem, opt]
        console.log(newItem)
        // setQueItem(newItem)
        const dataItemLength = newItem.filter(x => info.id === opt.queId).length
        console.log(dataItemLength)

        if(dataItemLength <= 1){
            setMinError(false)
        }
        if(dataItemLength <= 2){
            setMinError(true)
        }
        //set-max-value
        if(max){
            if(dataItemLength < max + 1){
                setQueItem(newItem)
                setMinError(true)
            }
            else{
                setMaxError(true)
                setAnchorEl(event.currentTarget);
            }
        }
        // else{
        //     setQueItem(newItem)
        // }

        
        

        //value_count 

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

        // const count = storage.filter(item => item.status === '0').length; // 6


// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)
      

// var data= [
//     {day:'Friday'   , name: 'John'      },
//     {day:'Friday'   , name: 'John'      },
//     {day:'Friday'   , name: 'Marium'    },
//     {day:'Wednesday', name: 'Stephanie' },
//     {day:'Monday'   , name: 'Chris'     },
//     {day:'Monday'   , name: 'Marium'    },
//     ];
    
// console.log(getUniqueDataCount(newItem, 'queId'));   
// const countData = getUniqueDataCount(newItem, 'queId')
// console.log(Object.values(countData))

// function getUniqueDataCount(objArr, propName) {
//   let data = [];
//   objArr.forEach(function (d, index) {
//       if (d[propName]) {
//           data.push(d[propName]);
//       }
//   });
//   console.log(data)
//   let uniqueList = [...new Set(data)];
//   console.log(uniqueList)

//   let dataSet = {};
//     uniqueList.forEach(unique => {
//         dataSet[unique] = data.filter(x => x === unique).length
//     })
//     console.log(dataSet)
    
//   return dataSet;
// }
        
        setMainData(mainData?.map((main) => {
                return {...main, info : main.info.map(subInfo => {
                        return{...subInfo, clicked : true , options : subInfo.options.map((data,index) => {
                            if(data.queId === opt.queId && data.id === opt.id && dataItemLength < max + 1){
                                return{...data, isActive : true }
                            }
                            else{
                                return {...data}
                            }

                        })}
                })}
        }))
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleRemove = (opt) => {
        console.log(opt)
        // console.log(setStepScore)
        const filteredItem = queItem.filter((ind) => {
            return ind.option !== opt.option 
          });
          console.log(filteredItem)
          setQueItem(filteredItem)
        setMainData(mainData?.map((main) => {
            return {...main, info : main.info.map(subInfo => {
                    return{...subInfo, clicked : false, options : subInfo.options.map(data => {
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
                                    <Button aria-describedby={id} key={index} className={opt.isActive ? "active-btn" : ""} variant="outlined" style={{marginLeft:"0.6vh",marginTop:"2vh"}} onClick={(event) => opt.isActive? handleRemove(opt,event) : handleOption(opt,info,event)} > {opt.option}</Button>
                                ))
                            }
                            
                            </div>
                         {/* ))
                     } */}
                    </div>
                ))
            }
            <br />
            { maxError ? 
            // <p style={{color:'red'}}>maximum two value</p> 
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
             <Typography sx={{ p: 2 }}>Two maximum value will be allowed</Typography>
      </Popover>  
              : ''}
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