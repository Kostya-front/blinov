
  <template>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Дата
        </th>
        <th class="text-left">
          Время
        </th>
        <th class="text-left">
          Тема
        </th>
        <th class="text-left">
          Ссылка на занятие
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in lessons"
          :key="item.link"
      >
        <td>{{ item.date }}</td>
        <td>{{ item.duration }}</td>
        <td>{{ item.topic }}</td>
        <td>{{ item.link }}</td>
      </tr>
      </tbody>
    </v-table>
  </template>

<script>
import {lessons} from '../../db/lessons'

export default {
  name: 'GetLessons',
  data() {
    return {
      lessons
    }
  }
};
</script>

<style lang="scss" module>
.GetLessons {
  //
}
</style>
