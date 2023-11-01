import { Stack, Typography, Link, IconButton, Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <Stack
      className="container"
      width={"100%"}
      position={"sticky"}
      sx={{
        backgroundColor: "white",
        zIndex: 100,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
      }}
      top={0}
    >
      <Stack
        className="header-main-body"
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={4}
        paddingBlock={2}
      >
        <img
          src="svg/logo.svg"
          style={{ width: "100px", height: "25px" }}
          alt=""
        />
        <Stack flexGrow={1}></Stack>
        <Stack
          className="header-links"
          direction={"row"}
          gap={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            component={Link}
            sx={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Features
          </Typography>

          <Typography
            component={Link}
            sx={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Exchanges
          </Typography>

          <Typography
            component={Link}
            sx={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            How it works?
          </Typography>

          <Typography
            component={Link}
            sx={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            Blog
          </Typography>

          <Typography
            component={Link}
            sx={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            About us
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "#0052FE",
              ".MuiButton-outlined": {},
              fontWeight: 600,
              paddingInline: "1.5rem",
              marginLeft: "1rem",
              textTransform: "capitalize",
            }}
            style={{ border: "1px solid #0052FE" }}
          >
            Sign in
          </Button>
        </Stack>

        <Stack className="hamburger">
          <IconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Drawer
            style={{
            }}
            anchor="right"
            open={open}
            onClose={() => toggleDrawer(false)}
          >
            <Stack minWidth={'260px'} position={'relative'}  height={'100%'}>
              <Stack
                padding={4}
                gap={3}
                height={'100%'}
                justifyContent={"top"}
                alignItems={"center"}
                position={'relative'}
              >
                <Stack
                width={'100%'}
                borderBottom={'1px solid #000'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingBottom={2}
                >

                <Typography
                  component={Link}
                  fontSize={19}
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",  
                  }}
                >
                  Features
                </Typography>
                  </Stack>
                  <Stack
                width={'100%'}
                borderBottom={'1px solid #000'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingBottom={2}
                >

                <Typography
                  component={Link}
                  fontSize={19}
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",  
                  }}
                >
                  Exchanges
                </Typography>
                  </Stack>

                <Stack
                width={'100%'}
                borderBottom={'1px solid #000'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingBottom={2}
                >

                <Typography
                  component={Link}
                  fontSize={19}
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",  
                  }}
                >
                  How it works?
                </Typography>
                  </Stack>

                <Stack
                width={'100%'}
                borderBottom={'1px solid #000'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingBottom={2}
                >

                <Typography
                  component={Link}
                  fontSize={19}
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",  
                  }}
                >
                  Blog
                </Typography>
                  </Stack>

                <Stack
                width={'100%'}
                borderBottom={'1px solid #000'}
                justifyContent={'center'}
                alignItems={'center'}
                paddingBottom={2}
                >

                <Typography
                  component={Link}
                  fontSize={19}
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textDecoration: "none",  
                  }}
                >
                  About Us
                </Typography>
                  </Stack>

                <Button
                  variant="outlined"
                  sx={{
                    color: "#0052FE",
                    width: '150px ',
                    position: 'absolute',
                    bottom: 25,
                    ".MuiButton-outlined": {},
                    fontWeight: 600,
                    paddingInline: "1.5rem",
                    height: '50px',
                    textTransform: "capitalize",
                  }}
                  style={{ border: "1px solid #0052FE" }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Drawer>
        </Stack>
      </Stack>
    </Stack>
  );
}
