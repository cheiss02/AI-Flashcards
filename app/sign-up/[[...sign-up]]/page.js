import { AppBar, Container, Button, Toolbar, Typography, Box } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage(){
    return <Container maxWidth="100vw">
        <AppBar position="static" sx = {{backgroundColor: '3f51b5'}}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Flashcard SaaS
                </Typography>
                <Button color="inherit" endIcon={<LoginIcon />}>
                    <Link href= "/sign-in" passHref >
                    Login
                    </Link>
                </Button>
                <Button color="inherit" endIcon={<LogoutIcon />}>
                    <Link href= "/sign-up" passHref>
                    Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        >
            <Typography variant="h4">Sign Up</Typography>
            <SignUp/>
        </Box>
    </Container>
}