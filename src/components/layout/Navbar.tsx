import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface AppNavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const AppNavbar = ({
  logo = {
    url: "/",
    src: "/images/logo.png",
    alt: "logo",
    title: "CariKOL",
  },
  menu = [
    {
      title: "For Kol",
      url: "#",
      items: [
        {
          title: "Buat Ratecard Tiktok",

          url: "#",
        },
        {
          title: "Buat Ratecard Instaram",

          url: "#",
        },
        {
          title: "Buat Ratecard Tiktok",

          url: "#",
        },
        {
          title: "Cari Campaign",

          url: "#",
        },
      ],
    },
    {
      title: "For Brand",
      url: "#",
      items: [
        {
          title: "Cek Ratecard Tiktok",
          url: "#",
        },
        {
          title: "Cek Ratecard Tiktok",
          url: "#",
        },
        {
          title: "Cek Ratecard Tiktok",
          url: "#",
        },
        {
          title: "Cari KOL",

          url: "#",
        },
      ],
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
}: AppNavbarProps) => {
  return (
    <section className="py-4 sticky top-0 z-50  backdrop-blur-2xl">
      <div className="w-11/12 max-w-7xl mx-auto">
        <nav className="hidden justify-between lg:flex gap-6">
          <div className="flex items-center gap-6 w-full">
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src}
                width={48}
                height={48}
                className="max-h-8"
                alt={logo.alt}
              />
              <div className="text-xl font-bold text-teal-600 sm:text-2xl">
                {logo.title}
              </div>
            </a>
            <div className="flex w-full items-center justify-end">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-6">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href={auth.login.url}
              className="block px-3 py-1 text-center text-white bg-teal-800 border-2 border-teal-800 rounded-full hover:bg-teal-900"
            >
              {auth.login.title}
            </a>
            <a
              href={auth.signup.url}
              className="block px-3 py-1 text-center text-teal-800 border-2 border-teal-800 rounded-full hover:text-teal-900 hover:border-teal-900 w-max"
            >
              {auth.signup.title}
            </a>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                width={48}
                height={48}
                src={logo.src}
                className="max-h-8"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image
                        width={48}
                        height={48}
                        src={logo.src}
                        className="max-h-8"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <a
                      href={auth.login.url}
                      className="block px-3 py-1 text-center text-white bg-teal-800 border-2 border-teal-800 rounded-full hover:bg-teal-900"
                    >
                      {auth.login.title}
                    </a>
                    <a
                      href={auth.signup.url}
                      className="block px-3 py-1 text-center text-teal-800 !border-2 !border-teal-800 rounded-full hover:text-teal-900 hover:border-teal-900"
                    >
                      {auth.signup.title}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent hover:bg-white">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default AppNavbar;
