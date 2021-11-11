<template>
	<div id="tab-component">
		<b-tabs 
			:align="center ? 'center' : ''" 
			content-class="mt-5" 
			:nav-class="['tabs-title', stretch && 'stretch']" 
			@input="(item) => {this.$emit('input', item)}"
		>
			<b-tab v-for="(item, index) in titles" :key="item" :title="item" :active="index === 0">
				<slot :name="item">
					<component :is="components[index]" v-if="components"></component>
				</slot>
			</b-tab>
		</b-tabs>
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    titles: {
      type: Array,
      required: true
    },
    components: {
      type: Array,
      required: true
    },
    center: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import "Tabs.scss";
</style>
