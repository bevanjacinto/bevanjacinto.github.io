import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "@fontsource/poppins";
import { useState } from "react";
import { blue } from "@mui/material/colors";

const pages = ["About", "Experience", "Education", "Projects"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "black", width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            color="primary"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "poppins",
              letterSpacing: "0.2rem",
              fontWeight: 600,
              fontSize: 25,
              textDecoration: "none",
            }}
          >
            Bevan Jacinto
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "poppins",
                  fontSize: 12,
                  fontWeight: 500,
                  mr: 5,
                  letterSpacing: "0.1rem",
                  borderRadius: 4,
                  border: "1.8px solid",
                  paddingX: "18px",
                  "&:hover": {
                    background: "white",
                    color: "black",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    color="secondary"
                    sx={{ fontFamily: "poppins" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Container
            disableGutters
            sx={{
              display: { sm: "flex", md: "none" },
              background: "red",
              maxWidth: "170px",
            }}
          >
            <Typography
              variant="h6"
              component="a"
              href="#app-bar-with-responsive-menu"
              color="primary"
              sx={{
                mr: 1,
                fontFamily: "poppins",
                letterSpacing: "0.2rem",
                fontWeight: 600,
                fontSize: 16,
                textDecoration: "none",
              }}
            >
              Bevan Jacinto
            </Typography>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
