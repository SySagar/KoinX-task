import { Stack, Typography, Link } from "@mui/material";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Stack 
    className="container"
     width={"100%"} 
     position={"sticky"}
     sx={{
      backgroundColor: 'white',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
     }}
      top={0}>
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
              textTransform: 'capitalize'
            }}
            style={{ border: "1px solid #0052FE" }}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
