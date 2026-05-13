
import { onMounted,ref } from 'vue'
export function useSum() {
  const count = ref(0)

  let add = () => {
    count.value += 1;
  }
  onMounted(() => {
    add();
  });
  return { count, add };
}
