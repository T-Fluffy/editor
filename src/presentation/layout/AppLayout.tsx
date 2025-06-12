import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix,
  Chip, Accordion, AccordionHeader, AccordionBody, Input
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon,
  Cog6ToothIcon, InboxIcon, PowerIcon
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon, ChevronDownIcon, MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import React from 'react';

interface Props { children: ReactNode }

export default function AppLayout({ children }: Props) {
  const [open, setOpen] = React.useState<number>(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Header */}
      <header className="w-full bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-semibold">📝 <Link to="/" className="hover:underline">Editor</Link></div>
        <nav>
          <Link to="/" className="mx-2 hover:underline">Docs</Link>
          <Link to="/editor/new" className="mx-2 hover:underline">New</Link>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:block h-full bg-black w-64 border-r">
          <Card className="h-full w-full p-4 shadow-none">
            <div className="mb-2 flex items-center gap-4">
              <Typography variant="h5" color="blue-gray" >Sidebar</Typography>
            </div>
            <div className="p-2">
              <Input 
                color="blue" 
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                label="Search"
              />
            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)} className="p-3">
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {["Analytics","Reporting","Projects"].map(text => (
                      <ListItem key={text}>
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5" />
                        </ListItemPrefix>
                        {text}
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>

              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />
                }
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)} className="p-3">
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    E‑Commerce
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {["Orders","Products"].map(text => (
                      <ListItem key={text}>
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5" />
                        </ListItemPrefix>
                        {text}
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>

              <hr className="my-2 border-blue-gray-50" />

              <ListItem>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
                <ListItemSuffix>
                  <Chip value="14" size="sm" color="blue-gray" className="rounded-full" />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Card>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}