<template>
	<div class="search-input-wrapper">
		<input
			class="search-input"
			:v-model="vModel"
			:placeholder="placeholder"
      		@input="handleInput"
		/>
		<MagnifyingGlassIcon />
	</div>
</template>
<script>
import MagnifyingGlassIcon from "@/components/Shared/Icons/MagnifyingGlassIcon";

export default {
	name: "SearchInput",
	components: { MagnifyingGlassIcon },
	props: [
		'vModel',
		'placeholder',
	],
	data: () => {
		return {}
	},
  methods: {
	  handleInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.search-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 330px;
  width: 460px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: $white;
  padding: 10px 20px;
  border-radius: 20px;

  .search-input {
    flex: 1 1 auto;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;

    &:focus {
      outline: none;
    }
  }

  .search-input::placeholder {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0px;
      text-align: left;
  }
}
</style>
