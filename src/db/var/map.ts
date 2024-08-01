

export const map = `
  <div>
  <h2>Что это?</h2>
  <p>Это встроенная для всех массивов функция для <span class="mark">изменения (преобразования)</span> элементов по заданному условию. Грубо говоря, 
  <span class="mark">берём один массив и на его основе, с таким же количеством элементов, делаем новый массив, изменённый</span></p>
  <h2>Зачем это?</h2>
  <p>Функцию вызываем тогда, когда хотим <span class="mark">изменить один или несколько элементов</span>, 
  например, добавить объекту новый ключ или изменить значение ключей или что-то сделать с числовыми элементами массива</p>
  <h2>Что для этого нужно?</h2>
  <ol>
    <li><p>Функция filter принимает в себя один аргумент - коллбек(простую стрелочную функцию)</p></li>
    <li><p>Сам коллбек может принимать в качестве параметров элемент массива, индекс элемента и сам массив</p></li>
    <li><p>ВСЁ, что ВОЗВРАЩАЕТ коллбек и будет новыми, изменёнными элементами массива - вернёт коллбек число 123, значит массив 
    будет состоять из числе 123; вернёт коллбек новый объект с новыми или изменёнными ключами - это всё будет элементами нового массива</p></li>
  </ol>
</div>
`
