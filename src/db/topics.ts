import { filter } from "@/db/var/filter";
import { map } from "@/db/var/map";
import { destructurization } from "@/db/var/destructurization";
import { rtk } from "./var/rtk";
import { useSelectorDescription } from "./var/useSelector";
import { useDispatchDescription } from "./var/useDispatch";
import { routing } from "./var/routing";
import { useNavigate } from "./var/useNavigate";

export const topics = [
  {id:1, title: 'Метод filter()', description: filter},
  {id:2, title: 'Метод map()', description: map},
  {id:3, title: 'Деструктуризация (...)', description: destructurization},
  {id:4, title: 'Redux Toolkit', description: rtk},
  {id:5, title: 'useSelector', description: useSelectorDescription},
  {id:6, title: 'useDispatch', description: useDispatchDescription},
  {id:7, title: 'Маршрутизация (роутинг)', description: routing},
  {id:8, title: 'useNavigate', description: useNavigate},
]
