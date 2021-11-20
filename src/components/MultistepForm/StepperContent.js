import { Box, Button, Divider, Grid, Popover, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { steps } from './data';
import { DataContext } from './MultistepForm';
import "./StepperContent.css"
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const StepperContent = () => {
    const [activeStep, setActiveStep, handleReset, handleBack] = useContext(DataContext);
    console.log(activeStep)
    const [mainData, setMainData] = useState(steps)
    console.log(mainData)
    const [queItem, setQueItem] = useState([])
    const [stepScore, setStepScore] = useState()
    const [maxError, setMaxError] = useState(false)
    const [SolveQueErr, setSolveQueErr] = useState(false)
    const [SolveQueErrInfo, setSolveQueErrInfo] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    console.log(queItem)

    //next-step-handler
    const handleNext = () => {
        if (SolveQueErr === true) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            console.log("active: ", activeStep)
            setSolveQueErr(null)
            setSolveQueErrInfo(false)
        }
        else {
            setSolveQueErrInfo(true)
        }
    };

    //pop-over-max-close
    const handleClose = () => {
        setAnchorEl(null);
        setMaxError(false)
    };

    useEffect(() => {
        const totalScore = queItem.reduce((total, item) => total + item.score, 0)
        console.log(totalScore)
        setStepScore(totalScore)
        //function-countData-which-are-active
        console.log(getUniqueDataCount(queItem, 'queId'));
        const countData = getUniqueDataCount(queItem, 'queId')

        //min-data-check-and-all-que-check
        let val = []
        let minData = []
        mainData[activeStep].info.map((sub, index) => {
            console.log(countData[sub.id])
            let minCount = countData[sub.id]
            console.log(minCount)
            val.push(minCount)
            console.log(val)
            const afterVal = val.filter(x => x !== undefined)
            console.log(afterVal)

            //min-value-undefined-check
            if (sub.min !== undefined) {
                minData.push(sub.min)
            }
            else {
                minData.push(1)
            }
            console.log(minData)
            console.log(minData === afterVal)

            //array-match-for-minData-and-countValue
            function areEqual(array1, array2) {
                if (array1.length === array2.length) {
                    return array1.every((element, index) => {
                        if (element <= array2[index]) {
                            // console.log(element)
                            return true;
                        }
                        return false;
                    });
                }
                return false;
            }

            //areEqual-function
            console.log(areEqual(minData, afterVal));
            const resultData = areEqual(minData, afterVal)
            console.log(resultData)

            //next-step-check
            if (minCount >= 1 && afterVal.length === mainData[activeStep].info.length && resultData === true) {
                setSolveQueErr(true)
            }
            else {
                setSolveQueErr(false)
            }
        })

        //function-for-count-data-which-was-active
        function getUniqueDataCount(objArr, propName) {
            let data = [];
            objArr.forEach(function (d, index) {
                if (d[propName]) {
                    data.push(d[propName]);
                }
            });
            console.log(data)
            let uniqueList = [...new Set(data)];
            console.log(uniqueList)

            let dataSet = {};
            uniqueList.forEach(unique => {
                dataSet[unique] = data.filter(x => x === unique).length
            })
            console.log(dataSet)

            return dataSet;
        }

    }, [queItem, activeStep, mainData, SolveQueErr])


    //option-active-button-handler
    const handleOption = (opt, info, event) => {
        setSolveQueErrInfo(false)
        //find-max-val
        const max = info.max ? info.max : info.options.length;
        console.log(max)

        //put-active-item
        const newItem = [...queItem, opt]
        console.log(newItem)

        //same-active-item-count
        const dataItemLength = newItem.filter(x => x.queId === opt.queId).length
        console.log(dataItemLength)


        //set-max-value
        if (max) {
            if (dataItemLength < max + 1) {
                setQueItem(newItem)
            }
            else {
                setMaxError(true)
                setAnchorEl(event.currentTarget);
            }
        }
        else {
            setQueItem(newItem)
        }

        //set-isActive-in-mainData-after-clicked
        setMainData(mainData?.map((main) => {
            return {
                ...main, info: main.info.map(subInfo => {
                    return {
                        ...subInfo, options: subInfo.options.map((data, index) => {
                            if (data.queId === opt.queId && data.id === opt.id && dataItemLength < max + 1) {
                                return { ...data, isActive: true }
                            }
                            else {
                                return { ...data }
                            }

                        })
                    }
                })
            }
        }))
    }

    //popover
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    //remove-active-value-handler
    const handleRemove = (opt) => {
        console.log(opt)
        //filter-item-for-score-reduce-when-isActive-false
        const filteredItem = queItem.filter((ind) => {
            return ind.option !== opt.option
        });
        console.log(filteredItem)

        //set-the-filtered-item-in-state
        setQueItem(filteredItem)

        //set-isActive-false-in-main-state
        setMainData(mainData?.map((main) => {
            return {
                ...main, info: main.info.map(subInfo => {
                    return {
                        ...subInfo, options: subInfo.options.map(data => {
                            if (data.queId === opt.queId && data.id === opt.id) {
                                return { ...data, isActive: false }
                            }
                            else {
                                return { ...data }
                            }
                        })
                    }
                })
            }
        }))
    }

    return (
        <Box sx={{ mb: 2 }}>
            <h3> Score : {stepScore}</h3>
            <h4>  {"step " + (activeStep + 1) + "/" + steps.length}</h4>
            {SolveQueErrInfo ? <Grid className="min-error-info" container>
                <Grid item >
                    <ErrorOutlineOutlinedIcon />
                </Grid>
                <Grid item xs={7} style={{ fontWeight: '500' }}>
                    You have to select minimum option !
                </Grid>
            </Grid> : null}
            <br />
            {
                mainData[activeStep].info?.map((info, index) => (
                    <div key={index}>
                        <div >
                            {info.question}
                        </div>
                        <div>
                            {
                                info.options.map((opt, index) => (
                                    <Button aria-describedby={id} key={index} className={opt.isActive ? "active-btn" : ""} variant="outlined" style={{ marginLeft: "0.6vh", marginTop: "2vh" }} onClick={(event) => opt.isActive ? handleRemove(opt, event) : handleOption(opt, info, event, index)} > {opt.option}</Button>
                                ))
                            }

                        </div>
                    </div>
                ))
            }
            <br />
            {maxError ? 
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
            <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
            >
                Previous
            </Button>
            <Button
                variant="contained"
                size="large"
                onClick={() => { activeStep < (steps.length - 1) ? handleNext() : handleReset() }}
                sx={{ mt: 1, ml: "70%" }}
            >{activeStep < (steps.length - 1) ? "Next" : "Finish & Reset"}</Button>
        </Box>
    );
};

export default StepperContent;