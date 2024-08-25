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
import { UserContext } from "../../context/UserContext";

import styles from "./styles.module.css";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const allPages = [
  { pageTitle: "Services", pageLink: "/services" },
  { pageTitle: "Contact", pageLink: "/contact" },
  {
    pageTitle: "Login",
    pageLink: "/admin-login",
    private: false,
    validate: true,
  },
  {
    pageTitle: "Admin bill",
    pageLink: "/admin-bill",
    private: true,
    validate: true,
  },
  {
    pageTitle: "Logout",
    pageLink: "/admin-login",
    private: true,
    validate: true,
  },
  {
    pageTitle: "Admin Bill List",
    pageLink: "/admin-bill-list",
    private: true,
    validate: true,
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pages, setPages] = React.useState([]);
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
    const filteredPages = allPages.filter((page) => {
      if (!page.validate) {
        return true;
        //this is for the services and contact and will ignore the last 2 if statements
      }
      if (isLoggedIn && page.private) {
        return true;
        //show admin-bill and logout
      }
      if (!isLoggedIn && !page.private) {
        return true;
        //to login
      }

      return false;
    });
    setPages(filteredPages);
  }, [isLoggedIn]);

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
        color: "#000",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow with blur
        backdropFilter: "blur(10px)", // Blur effect
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              src="/newlogo.png"
              width={50}
              height={50}
              alt="Company Logo"
            />
          </Link>
          <Typography
            className={styles.title}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              mb: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dietrich Contractors
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
                  <MenuItem
                    sx={{ marginBottom: "15px" }}
                    key={index}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      textAlign="center"
                      className={styles.link_dropdown}
                    >
                      <Link href={page.pageLink}> {page.pageTitle}</Link>
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginBottom: "4px",
            }}
          >
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
