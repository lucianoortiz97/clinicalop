import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { NavbarLogo } from "./NavbarLogo.jsx";
import { SearchIcon } from "./SearchIcon.jsx";
import { Link } from "react-router-dom";
import profilePic from "../../assets/images/avatar.png"

export default function App() {
  return (
    <Navbar >
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link to="/">
            <NavbarLogo />
          </Link>
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4">
          <NavbarItem>
            <Link color="foreground" to="pacientes">
              Pacientes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="medicos" aria-current="page" color="foreground">
              Medicos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="turnos">
              Turnos
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              size="sm"
              src={profilePic}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">Luciano Ortiz Penzo</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
