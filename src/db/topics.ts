import { filter } from "@/db/var/filter";
import { map } from "@/db/var/map";
import { destructurization } from "@/db/var/destructurization";
import { rtk } from "./var/rtk";

export const topics = [
  {id:1, title: 'Метод filter()', description: filter},
  {id:2, title: 'Метод map()', description: map},
  {id:3, title: 'Деструктуризация (...)', description: destructurization},
  {id:4, title: 'Redux Toolkit', description: rtk},
]
