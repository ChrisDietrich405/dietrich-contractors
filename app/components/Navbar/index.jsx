import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import AdbIcon from "@mui/icons-material/Adb";
import { AiFillInstagram } from "react-icons/ai";
import { SiNextdoor } from "react-icons/si";
import { UserContext } from "../context/UserContext";

import styles from "./styles.module.css";

let pages = [
  { pageTitle: "Services", pageLink: "/services" },
  { pageTitle: "Contact", pageLink: "/contact" },
  { pageTitle: "Login", pageLink: "/admin-login", protected: true },
  { pageTitle: "Admin bill", pageLink: "/admin-bill", private: true },
  { pageTitle: "Logout", pageLink: "/admin-login", private: true },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLoggedIn, setIsLoggedIn, logOutUser } =
    React.useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    pages = pages.filter((page) => {
      if (!page.protected && !page.private) {
        return true;
      }
      if (isLoggedIn && !page.protected && page.private) {
        return true;
      }
      if (!isLoggedIn && page.protected && !page.private) {
        return true;
      }
    });
  }, [isLoggedIn]);

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", color: "#000" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              src="/dclogo.png"
              width={50}
              height={50}
              alt="Company Logo"
            />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dietrich Contractors
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page, index) => {
                return (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={page.pageLink}> {page.pageTitle}</Link>
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dietrich Contractors
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                  }}
                >
                  <Link className={styles.pageLinks} href={page.pageLink}>
                    {page.pageTitle}
                  </Link>
                </Button>
              );
            })}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              justifyContent: "space-between",
              width: "100px",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.instagram.com/dietrichcontractors/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className={styles.social_media_icon_instagram} />
            </a>
            <a
              href="https://nextdoor.com/pages/dietrich-contractors-brooklyn-md/?init_source=search&query=dietrich%20contractors"
              target="_blank"
              rel="noreferrer"
            >
              <SiNextdoor className={styles.social_media_icon_nextdoor} />
            </a>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
