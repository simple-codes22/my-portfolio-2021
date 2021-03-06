import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField, Typography, Button, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { supabase } from "../../Backend/supabaseClient";

const contactStyle = makeStyles(theme => ({
    root: {
        color: 'white !important'
    },
    main: {
        display: 'flex !important',
        flexDirection:'column !important',
        alignItems:'center !important',
        margin: 0,
    },
    Title: {
        fontSize: '3rem !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '2.4rem !important',
        },
        [theme.breakpoints.down('tablet')]: {
            fontsize: '2.25rem !important',
        },
        [theme.breakpoints.down(650)]: {
            fontSize: '2rem !important',
        }
    },
    Info: {
        margin: '20px !important',
        fontSize: "1.37rem !important",
        width: '55% !important',
        textAlign: 'center !important',
        [theme.breakpoints.down('laptop')]: {
            fontSize: '1.3rem !important',
            width: '760px !important',
        },
        [theme.breakpoints.down('mini')]: {
            width: '700px !important',
            fontSize: '1rem !important',
        },
        [theme.breakpoints.down('tablet')]: {
            width: '635px !important',
            fontSize: '.86rem !important',
        },
        [theme.breakpoints.down(675)]: {
            width: '560px !important',
            fontSize: '.77rem !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '530px !important',
            fontSize: '.7rem !important',
        },
        [theme.breakpoints.down('mobile')]: {
            width: '330px !important',
            fontSize: '.7rem !important',
        }
    },
    form: {
        display: 'flex !important',
        flexDirection: 'column !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        margin: '40px !important',
        [theme.breakpoints.down('smart')]: {
            margin: '20px !important',
        }
    },
    textBox: {
        margin: '20px !important',
        [theme.breakpoints.down('tablet')]: {
            margin: '10px !important',
        },
        [theme.breakpoints.down(650)]: {
            margin: '2px !important',
        },
    },
    textField: {
        borderRadius: '0 !important',
        outlineColor: 'white !important',
        borderColor: 'white !important',
        width: '350px !important',
        outline: 'white !important',
        margin: '14px !important',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff60 !important',
            borderRadius: '2px !important',
            color: 'white !important',
        },
        [theme.breakpoints.down('mini')]: {
            width: '250px !important',
            height: '60px !important',
        },
        [theme.breakpoints.down(675)]: {
            width: '230px !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '220px !important',
            margin: '7px !important',
            '& label': {
                fontSize: '15px !important',
            }
        }, 
        [theme.breakpoints.down(400)]: {
            width: '320px !important',
            // height: ''
            '& label': {
                fontSize: '12px !important',
            }
        }
    },
    mainText: {
        color: '#ececec !important',
        borderColor: '#ffffff63 !important',
    },
    textarea: {
        width: '635px',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff63 !important',
            borderRadius: '2px !important',
            color: 'white !important',
        },
        '&:focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue !important'
        },
        [theme.breakpoints.down('mini')]: {
            width: '530px !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '480px !important',
            '& label': {
                fontSize: '15px !important',
            }
        },
        [theme.breakpoints.down('mobile')]: {
            width: '320px !important',
            '& label': {
                fontSize: '12px !important',
            }
        }
    },
    alertStyle: {
        width: '500px !important',
        height: '35px !important',
        marginBottom: '10px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        [theme.breakpoints.down('mini')]: {
            width: '450px !important',
            height: '30px !important',
            fontSize: '10px !important',
            margin: '10px !important',
        },
        [theme.breakpoints.down('smart')]: {
            width: '350px !important',
            height: '20px !important',
            fontSize: '9px !important',
        }, [theme.breakpoints.down('mobile')]: {
            width: '300px !important',
            height: '35px !important',
            fontSize: '11px !important',
            textAlign: 'center !important',
        }
    },
    submitButton: {
        [theme.breakpoints.down('laptop')]: {
            margin: '5px',
            // width
        }, [theme.breakpoints.down('mobile')]: {
            margin: '10px !important',
            letterSpacing: '.27px',
        }
    }
}))

const Contact = () => {
    const useStyle = contactStyle();
    const [message, changeMessage] = useState({
        'Full Name': '',
        'E-mail': '',
        'Message': '',
    });

    const sendMessage = async () => {
        await supabase
        .from('Contact message')
        .insert(message);
        return;
    }
    const [alert, setAlert] = useState({severity: '', on: false, message: ''})
    
    const AlertSection = () => {
        if (alert.on) {
            if (alert.severity === 'error') {
                return(
                    <Alert 
                        className={useStyle.alertStyle} 
                        style={{
                                height: '35px !important',
                                fontSize: '11px !important',
                                textAlign: 'center !important',
                            }}
                        severity={alert.severity}
                    >
                        {alert.message}
                    </Alert>
                )
            }
            return (
                <Alert className={useStyle.alertStyle} severity={alert.severity}>{alert.message}</Alert>
            )
        }
        return (<></>)
    };

    return (
        <Box component='div' className={useStyle.root}>
            <Box component='section' className={useStyle.main}>
                <Typography
                    variant='h4' 
                    className={useStyle.Title}
                >
                    Get In Touch
                </Typography>
                <Typography
                    variant='body1' 
                    className={useStyle.Info}
                >
                    If you want to get in touch with me about a project collaboration or you just want to say hi, 
                    kindly fill the form below and I'll get back to you as soon as possible.
                </Typography>
                <Box component='form' className={useStyle.form}>
                    <Box 
                        component='div' 
                        className={useStyle.textBox}
                    >
                        <TextField className={useStyle.textField} onChange={elem => {changeMessage({'Full Name': elem.target.value, 'E-mail': message['E-mail'], Message: message['Message']})}} label='Full Name' InputLabelProps={{style: {color: '#fff'}}} inputProps={{className: useStyle.mainText}} required type='text' variant='outlined' />
                        <TextField className={useStyle.textField} onChange={elem => {changeMessage({'Full Name': message['Full Name'], 'E-mail': elem.target.value, Message: message['Message']})}} type='email' InputLabelProps={{style: {color: '#ffffff'}}} inputProps={{className: useStyle.mainText}} label='E-Mail' required variant='outlined' />
                    </Box>
                    <Box 
                        component='div' 
                        className={useStyle.textBox}
                    >
                        <TextField label='Your Message' onChange={elem => {changeMessage({'Full Name': message['Full Name'], 'E-mail': message['E-mail'], Message: elem.target.value})}} required className={useStyle.textarea} rows="10" InputLabelProps={{style: {color: '#fff'}}} multiline inputProps={{className: useStyle.mainText}} variant='outlined'></TextField>
                    </Box>
                    <AlertSection />
                    <Button 
                        variant='contained'
                        endIcon={<SendIcon />} 
                        onClick={(elem) => {
                            elem.preventDefault();
                            if (message['Full Name'].length < 2 || message['E-mail'] < 2 || message['Message'] < 2) {
                                setAlert({severity:'error' , on: true, message: 'The text in the required fields should be greater than 1 character'})
                                return
                            }
                            else {
                                sendMessage();
                                setAlert({severity:'success' , on: true, message: 'Message sent successfully!!'})
                                return;
                            }
                        }}
                        className={useStyle.submitButton}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact
