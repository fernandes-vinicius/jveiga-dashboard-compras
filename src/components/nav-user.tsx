"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ChevronsUpDownIcon,
  LogOutIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth/client";

const themeIcons = {
  system: MonitorIcon,
  dark: MoonIcon,
  light: SunIcon,
};

export function NavUser() {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const { theme, setTheme } = useTheme();

  const { data: session, isPending, error } = authClient.useSession();

  const CurrentThemeIcon =
    themeIcons[(theme as keyof typeof themeIcons) ?? "system"];

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  };

  if (isPending) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center gap-2">
            <Skeleton className="size-8 shrink-0 rounded-full" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-2" />
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (error) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar>
                <AvatarImage
                  src={session?.user?.image ?? ""}
                  alt={session?.user.name}
                />
                <AvatarFallback className="rounded-lg">
                  <UserIcon className="size-4" />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {session?.user.name}
                </span>
                <span className="truncate text-xs">{session?.user.email}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image ?? ""}
                    alt={session?.user.name}
                  />
                  <AvatarFallback>
                    <UserIcon className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-popover-foreground capitalize">
                    {session?.user.name}
                  </span>
                  <span className="truncate text-xs lowercase">
                    {session?.user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <CurrentThemeIcon />
                Aparência
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuContent
                  side={isMobile ? "top" : "right"}
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <MonitorIcon />
                    Usar tema do sistema
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <MoonIcon />
                    Tema escuro
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <SunIcon />
                    Tema claro
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOutIcon />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
