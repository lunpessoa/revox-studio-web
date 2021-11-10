<template>
	<div class="input-holder">
		<b-input
			required
			id="password"
			class="input-password"
			:type="fieldType"
			name="password"
			:value="value"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
			:minlength="min"
			:maxlength="max"
		/>
		<div class="eye" @click="togglePasswordType">
			<EyeClose v-if="showPassword" />
			<EyeOpen v-else color="#B0B0B0"/>
		</div>
	</div>
</template>

<script>
import EyeOpen from '@/components/Shared/Icons/EyeOpen';
import EyeClose from '@/components/Shared/Icons/EyeClose';

export default {
	name: 'PasswordInput',
	components: {
		EyeOpen,
		EyeClose,
	},
	props: {
		value: {
			type: String,
		},
		min: String,
		max: String,
		placeholder: {
			type: String
		}
	},
	data: () => ({
		showPassword: false,
	}),
	methods: {
		togglePasswordType() {
			this.showPassword = !this.showPassword;
		},
	},
	computed: {
		fieldType() {
			return this.showPassword ? 'text' : 'password';
		},
	},
};
</script>

<style scoped lang="scss">
.input-holder {
	position: relative;
}
.eye {
	position: absolute;
	top: 30%;
	right: 15px;
	cursor: pointer;
}
.input-password {
 padding-right: 35px;
}

</style>
