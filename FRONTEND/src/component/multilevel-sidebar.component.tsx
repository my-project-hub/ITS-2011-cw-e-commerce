import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router";

export default function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };

  const navigate = useNavigate();


  return (
    <Card className="bg-white relative border-r-2 h-screen rounded-none w-full max-w-[15rem] p-1 shadow-xl shadow-blue-gray-900/5" placeholder={""} onPointerEnterCapture={""} onPointerLeaveCapture={""}>
      <div className="mb-2 p-4 border-b-0">
        {/* <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography> */}
        <div className="flex justify-between items-center">
             <img className="self-center" src="https://remosnextjs.vercel.app/images/logo/logo.png" width={"100px"} alt="" />
             {/* <img className="self-center" src="/src/assets/img/logo/logo-jshop.png" width={"100px"} alt="" /> */}
             <FontAwesomeIcon fontSize={"25px"} icon={faBars}  className="cursor-pointer"/>
        </div>
      </div>
      <List className="text-[1rem]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Accordion 
          open={open === 1} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          // icon={
          //   <ChevronDownIcon
          //     strokeWidth={2.5}
          //     className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""} relative`}
          //   />
          // }
        >
          <ListItem className="p-0" selected={open === 1} onClick={() => { navigate("/dashboard"); } } placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="text-[1rem] mr-auto font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={<ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <ListItem className="p-0" selected={open === 2}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <ListItemPrefix placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography  className="mr-auto font-normal text-[1rem]" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  placeholder={undefined}>
                Product
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="text-[1rem]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Categories
              </ListItem>
              <ListItem className="text-[1rem]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Brands
              </ListItem>
              <ListItem className="text-[1rem]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Attributes
              </ListItem>
              <ListItem className="text-[1rem]">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Bundle deals
              </ListItem>
              <ListItem className="text-[1rem]" onClick={() => {navigate("/products")}}  placeholder={""} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <ListItemPrefix  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Orders
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Rating Reviews
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Store
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Discount
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
        </ListItem>
        
        <ListItem className=" bottom-0">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}