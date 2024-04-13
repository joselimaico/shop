import { SidebarOption } from "@/interfaces";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const SidebarOptions: SidebarOption[] = [
  {
    Icon: IoPersonOutline,
    label: "Perfil",
    url: "/",
  },
  {
    Icon: IoTicketOutline,
    label: "Ordenes",
    url: "/",
  },
  {
    Icon: IoLogInOutline,
    label: "Ingresar",
    url: "/",
  },
  {
    Icon: IoLogOutOutline,
    label: "Salir",
    url: "/",
  },
];

export const AdminSidebarOptions: SidebarOption[] = [
  {
    Icon: IoShirtOutline,
    label: "Productos",
    url: "/",
  },
  {
    Icon: IoTicketOutline,
    label: "Ordenes",
    url: "/",
  },
  {
    Icon: IoPeopleOutline,
    label: "Usuarios",
    url: "/",
  },
  
];
