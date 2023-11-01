import {
  Stack,
  Typography,
  Select,
  MenuItem,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery';
import DoneIcon from '@mui/icons-material/Done';
import Faq from './Faq'

export default function Application() {
  const [age, setAge] = React.useState(10);
  const [income, setIncome] = React.useState(1);
  const [gainValue, setGainValue] = React.useState(0);
  const [term , setTerm] = React.useState("");
  const isPhone = useMediaQuery('(max-width:500px)');

  const [purchasePrice,setPurchasePrice] = React.useState(0);
  const [salePrice,setSalePrice] = React.useState(0);
  const [expense,setExpense] = React.useState(0);
  const [tax,setTax] = React.useState(0);
  const [taxPrice,SetTaxPrice] = React.useState(0);
  const [discount,setDiscount] = React.useState(0);
  const [netCapitalGain,setNetCapitalGain] = React.useState(0);
  // const [taxPaid,setTaxPaid] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTermChange = (event) => {
    setIncome(event.target.value);
  };

  const calculateGain = () => {
    let gain = salePrice - purchasePrice- expense;
    setGainValue(gain);
  };

  const calculateTax = () => {

    if(income === 1){
    SetTaxPrice("45001");
    setTax("5092 + 32.5");
    }
    else if(income === 2){
      SetTaxPrice("120001");
      setTax("29467 + 37");
    }
    else if(income === 3){
      SetTaxPrice("180001");
      setTax("51667 + 45");
    }

    if(term === "long" && gainValue > 0){
      const discountAccquired = (0.5)*gainValue;
      setDiscount(discountAccquired);

      const netGain = gainValue - discountAccquired;
      setNetCapitalGain(netGain);
    }
    else{
      setDiscount(0);
      const netGain = gainValue;
      setNetCapitalGain(netGain);
    }
    
  }

  React.useEffect(() => {
    calculateGain();
    calculateTax();

  }, [purchasePrice, salePrice, expense,income,term,gainValue]);

  return (
    <Stack className="application-container" padding={3} direction={"row"} gap={3}>
      <Stack
        className="left"
        padding={3}
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "white",
          flexGrow: 1,
          borderRadius: "10px",
        }}
      >
        <Typography variant={(isPhone) ? "body1" : "h5"}
         fontWeight={"bold"}>
          Free Crypto Tax Calculator Australia
        </Typography>

        <Stack
          className="form-container"
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Stack
          className="upper-info"
            direction={"row"}
            gap={(isPhone)? 2 : 6}
            width={"100%"}
            justifyContent={"left"}
            alignItems={"center"}
          >
            <Stack
              className="finYear"
              direction={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Typography sx={{ color: "#0F1629" }} 
              variant={(isPhone) ? "caption" : "body2"}
              >
                Financial Year
              </Typography>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                sx={{
                  width: "200px",
                  height: "45px",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                  fontSize: (isPhone)? "0.8rem" : "1rem",
                }}
              >
                <MenuItem value={10}>FY 2023-24</MenuItem>
              </Select>
            </Stack>

            <Stack
              className="country"
              direction={"row"}
              alignItems={"center"}
              gap={1}
            >
              <Typography sx={{ color: "#0F1629" }}
              variant={(isPhone) ? "caption" : "body2"}
               >
                Country
              </Typography>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                sx={{
                  width: "200px",
                  height: "45px",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                  fontSize: (isPhone)? "0.8rem" : "1rem",
                }}
              >
                <MenuItem value={10}>
                  <Stack direction={"row"} gap={1}>
                    <img src="svg/flag.svg" alt="" />
                    FY 2023-24
                  </Stack>
                </MenuItem>
              </Select>
            </Stack>
          </Stack>

          <Divider
            sx={{
              width: "100%",
              height: "1px",
            }}
          />

          <Stack
            className="bottom-info"
            width={"100%"}
            justifyContent={"center"}
            alignItems={"left"}
            gap={4}
          >
            <Stack className="price-info" direction={"row"} gap={6}>
              <Stack className="purchase-info" gap={1}>
                <Typography
                variant={(isPhone) ? "caption" : "body2"}
                >Enter purchase price of Crypto</Typography>
                <TextField
                onChange={(e) => setPurchasePrice(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    flexGrow: "1",
                    minWidth: "350px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#EFF2F5",
                      },
                      "&:hover fieldset": {
                        borderColor: "#EFF2F5",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#EFF2F5",
                      },
                    },
                    backgroundColor: "#EFF2F5",
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                />
              </Stack>

              <Stack className="sale-info" gap={1}>
                <Typography
                variant={(isPhone) ? "caption" : "body2"}
                >Enter sale price of Crypto</Typography>
                <TextField
                onChange={(e) => setSalePrice(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    flexGrow: "1",
                    minWidth: "350px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#EFF2F5",
                      },
                      "&:hover fieldset": {
                        borderColor: "#EFF2F5",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#EFF2F5",
                      },
                    },
                    backgroundColor: "#EFF2F5",
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                />
              </Stack>
            </Stack>

            <Stack
              direction={"row"}
              width={"100%"}
              className="expense"
              justifyContent={"start"}
              alignItems={"top"}
              gap={6}
            >
              <Stack gap={1}>
                <Typography
                variant={(isPhone) ? "caption" : "body2"}
                >Enter your expenses</Typography>
                <TextField
                className="expense-input"
                onChange={(e) => setExpense(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: "350px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#EFF2F5",
                      },
                      "&:hover fieldset": {
                        borderColor: "#EFF2F5",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#EFF2F5",
                      },
                    },
                    backgroundColor: "#EFF2F5",
                    borderRadius: "10px",
                  }}
                  variant="outlined"
                />
              </Stack>

              <Stack className="investment" gap={1}>
                <Typography
                variant={(isPhone) ? "bosy1" : "body2"}
                >Investment type</Typography>

                <Stack direction={"row"} gap={2}>
                  <Stack
                    className="short-term"
                    paddingBottom={"1.5rem"}
                    position={"relative"}
                  >
                    <Button
                      variant="outlined"
                      className={`${term === "short" ? "selected-button" : ""}`}
                      onClick={() => setTerm("short")}
                      sx={{
                        padding: "10px",
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        paddingRight: "50px",
                        color: "#0F1629",
                        height: "50px",
                      }}
                      style={{
                        border: "1px solid #0F1629",
                      }}
                    >
                      Short Term
                      {
                        (term === "short")  && <DoneIcon sx={{position: 'absolute', right: '15px'}} />
                      }
                    </Button>
                    <Typography
                      position={"absolute"}
                      bottom={0}
                      variant="caption"
                      sx={{
                        color: "#0F1629",
                      }}
                    >
                      {"< 12 months"}
                    </Typography>
                  </Stack>

                  <Stack
                    className="long-term"
                    paddingBottom={"1.5rem"}
                    position={"relative"}
                  >
                    <Button
                    className={`${term === "long" ? "selected-button" : ""}`}
                      variant="outlined"
                      onClick={() => setTerm("long")}
                      sx={{
                        padding: "10px",
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        paddingRight: "50px",
                        color: "#0F1629",
                        height: "50px",
                      }}
                      style={{
                        border: "1px solid #0F1629",
                      }}
                    >
                      Long Term
                      {
                        (term === "long")  && <DoneIcon sx={{position: 'absolute', right: '15px'}} />
                      }
                    </Button>
                    <Typography
                      position={"absolute"}
                      bottom={0}
                      variant="caption"
                      sx={{
                        color: "#0F1629",
                      }}
                    >
                      {"> 12 months"}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack
          className="income"
            direction={"row"}
            width={"100%"}
            justifyContent={"center"}
            gap={6}
          >
            <Stack className="annual-income" gap={1}>
              <Typography sx={{ color: "#0F1629" }} variant="body2">
                Select Your Annual Income
              </Typography>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={income}
                onChange={handleTermChange}
                sx={{
                  width: "350px",
                  height: "50px",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                }}
              >
                <MenuItem value={1}> 0 - $45,000</MenuItem>
                <MenuItem value={2}> $45000 - $120,000</MenuItem>
                <MenuItem value={3}> $120,000 - $180,000</MenuItem>
              </Select>
            </Stack>

            <Stack
              className="tax-rate"
              flexGrow={1}
              gap={1}
              justifyContent={"start"}
              alignItems={"start"}
              marginTop={4}
            >
              <Typography variant="body2">Tax Rate</Typography>
              <Typography variant="caption" >
              $ {tax}% of excess over ${taxPrice}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction={"row"} 
          display={(term === "long" && gainValue>0) ? "flex" : "none"}
          gap={6}
           width={"100%"}
            className="gains">
            <Stack gap={1} width={"100%"} paddingTop={1}>
              <Typography>Capital gains amount</Typography>
              <TextField
              className="capital-gains-value"
                value={gainValue ? gainValue : "0.00"}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon sx={{ color: "black" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "350px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#EFF2F5",
                    },
                    "&:hover fieldset": {
                      borderColor: "#EFF2F5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#EFF2F5",
                    },
                  },
                  backgroundColor: "#EFF2F5",
                  borderRadius: "10px",
                }}
                variant="outlined"
              />
            </Stack>

            <Stack className="discount" gap={1} width={"100%"} paddingTop={1}>
              <Typography>Discount for long term gains</Typography>
              <TextField
              className="discount-value"
              value={discount ? discount : "0.00"}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyIcon sx={{ color: "black" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: "350px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#EFF2F5",
                    },
                    "&:hover fieldset": {
                      borderColor: "#EFF2F5",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#EFF2F5",
                    },
                  },
                  backgroundColor: "#EFF2F5",
                  borderRadius: "10px",
                }}
                variant="outlined"
              />
            </Stack>
          </Stack>

          <Stack
            className="result"
            direction={"row"}
            paddingTop={4}
            width={"100%"}
            gap={6}
          >
            <Stack
              className="capital-gains"
              padding={2}
              flexGrow={1}
              paddingInline={7}
              borderRadius={2}
              sx={{
                background: "#EBF9F4",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Typography>Net Capital gains tax amount</Typography>
              <Typography variant="h5" color={"#0FBA83"} fontWeight={"bold"}>
                {
                  (netCapitalGain) ? `${netCapitalGain}` : "$0.00"
                }
              </Typography>
            </Stack>
            <Stack
              className="tax"
              padding={2}
              flexGrow={1}
              paddingInline={7}
              borderRadius={2}
              sx={{
                background: "#EBF2FF",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Typography>The tax you need to pay*</Typography>
              <Typography variant="h5" color={"#0141CF"} fontWeight={"bold"}>
                $0.00
              </Typography>
            </Stack>
          </Stack>
        </Stack>


        <Stack className="faq">
        <Faq />
        </Stack>

      </Stack>
      <Stack className="right">
        <Stack
          className="blue-card"
          sx={{
            borderRadius: "10px",
            background: "#0052FE",
          }}
          maxWidth={"380px"}
        >
          <Stack padding={3} justifyContent={"center"} alignItems={"center"} gap={2}>
           
           <Stack maxWidth={'100%'}  justifyContent={'center'} alignItems={'center'} >

            <Typography
              color={"white"}
              maxWidth={"80%"}
              textAlign={"center"}
              fontWeight={"bold"}
              >
              Get Started with KoinX for FREE
            </Typography>

                </Stack>

                <Stack  justifyContent={'center'} alignItems={'center'}>
                <Typography
             color={"white"}
             variant="caption"
             maxWidth={"85%"}
             textAlign={"center"}
             >
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </Typography>
                </Stack>

                <Stack paddingTop={6}>
                    <img src="svg/image.svg" alt="" />
                </Stack>

                <Stack paddingTop={6}>
                    <Button
                    variant="contained"
                    sx={{
                        background: "white",
                        color: "black",
                        textTransform: "capitalize",
                        fontSize: "0.9rem",
                        '&:hover': {
                            background: 'white',
                            color: 'black'
                        }
                    }}

                    >
                    Get Started for FREE
                    <ArrowForwardIcon />
                    </Button>
                    </Stack>
    
          </Stack>
        </Stack>
        
      </Stack>
    </Stack>
  );
}
