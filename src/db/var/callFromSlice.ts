import { getSpanMark } from "@/assets/utilts";


export const callFromSlice = `
  <div>
  <h2>Что это?</h2>
  <p>Последовательность действий, необходимых для того, чтобы ${getSpanMark('запустить какую-нибудь')} функцию из слайса</p>
  <h2>Зачем это?</h2>
  <p>Нужно, когда созданную функцию в слайсе ${getSpanMark("необходимо запустить")}, поскольку есть только один способ</p>
  <h2>Что для этого нужно?</h2>
  <ol>
    <li><p>Создать саму функцию, допустим по добавлению товара (addProduct) и добавить её в блок reducers в слайсе</p></li>
    <li><p>Экспортировать экшн-функцию из блока slise.actions</p></li>
    <li><p>Внутри компонента добавить конструкцию ${getSpanMark('const dispatch = useDispatch()')}</p></li>
    <li><p>Положить в ${getSpanMark('dispatch()')} вызов экшн функции</p></li>
    <li><p><a target="_blank" href="https://www.figma.com/design/HiST4ZegXBM38vqfg4NRe6/Untitled?node-id=7-2&node-type=FRAME&t=yMVXpWsOhE6E0gFx-0">Ссылка на схему</a></p></li>
  </ol>
</div>
`
