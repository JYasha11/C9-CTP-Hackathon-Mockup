'use client';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import CTPLogo from '../assets/ctp-logo-square.png';

export default function NavbarWithDropdown() {
    return (
        <Navbar fluid rounded className="flex items-center justify-center py-4 bg-gray-100">
            <Navbar.Brand href="">
                <img
                    alt=""
                    className="place-items-start ml-24 rounded-md mr-3 h-14"
                    src={CTPLogo}
                />
            </Navbar.Brand>
            <div className="flex items-center justify-center space-x-4">
                <Dropdown inline label="Get Involved">
                    <Dropdown.Item>CUNY Colleges</Dropdown.Item>
                    <Dropdown.Item>Volunteers</Dropdown.Item>
                    <Dropdown.Item>Employers</Dropdown.Item>
                </Dropdown>
                <Dropdown inline label="Students">
                    <Dropdown.Item>Apply</Dropdown.Item>
                    <Dropdown.Item>Fellows</Dropdown.Item>
                    <Dropdown.Item>Hackathons</Dropdown.Item>
                </Dropdown>
                <Dropdown inline label="About Us">
                    <Dropdown.Item>Program</Dropdown.Item>
                    <Dropdown.Item>Staff</Dropdown.Item>
                    <Dropdown.Item>Advisory Board</Dropdown.Item>
                </Dropdown>
            </div>
        </Navbar>
    );
}
