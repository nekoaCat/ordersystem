import axios from 'axios';
import { onMounted,ref } from 'vue'
export function useDogs() {
  let dogList = ref(['https://ygking.top/img/cover.jpg'])
  async function addDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.value.push('https://vpn.ygking.top/' + result.data.message)
    } catch (error) {
      console.error('获取随机狗图片失败:', error);
    }
  }
  onMounted(() => {
    addDog();
  });
  return { dogList, addDog };
}
