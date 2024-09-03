import { getSpanMark } from "@/assets/utilts";


export const slice = `
  <div>
  <h2>Что это?</h2>
  <p>Самостоятельный кусок кода, в который вынесены все ${getSpanMark('функции, запросы на бэк и переменные')}</p>
  <h2>Зачем это?</h2>
  <p>Упростить работу с кодом, поскольку слайсы позволяют  ${getSpanMark("объединить всё, что связано с какой-то сущность")},
  например с продуктами, пользователями, комментариями, работниками, категориями и тд. </p>
  <h2>Что для этого нужно?</h2>
  <ol>
    <li><p>Создать отдельный файл и в этом файле создать переменную, в которую надо получить вызов фунции ${getSpanMark("createSlice()")}</p></li>
    <li><p>Добавить в вызов функции createSlice() объект с настройкам</p></li>
    <li><p>Этот объект обязательно должен состоять из полей name, initialState, reducers</p></li>
    <li><p>Если есть запрос на сервер, то нужно использовать extraReducer</p></li>
    <li><p><a target="_blank" href="https://www.figma.com/design/HiST4ZegXBM38vqfg4NRe6/Untitled?node-id=10-25&node-type=FRAME&t=yMVXpWsOhE6E0gFx-0">Ссылка на схему</a></p></li>
  </ol>
</div>
`
