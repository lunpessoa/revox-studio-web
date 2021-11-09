<template>
  <svg :fill="color" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
    <path d="M14.3 5.7L3 17 3 21 7 21 18.3 9.7zM21.7 6.2l-2 2-3.9-3.9 2-2c.3-.4.9-.4 1.3-.1l1.3 1.3 1.3 1.3C22.1 5.3 22.1 5.9 21.7 6.2z"/>
  </svg>
</template>

<script>
export default {
  name: 'EditIcon',
  props: {
    color: {
      default: '#F8AE36'
    }
  }
}
</script>
