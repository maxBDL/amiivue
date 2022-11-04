<script setup>

const props = defineProps({
	amiibo: {
		type: Object,
		required: true
	}

})
</script>

<template>
        <div class="col-4 col-12-medium">
						<section class="middle">
							<img
								:src="props.amiibo.image" />
							<header>
								<h2>{{props.amiibo.character}}</h2>
							</header>
							<p>{{props.amiibo.gameSeries}}</p>
						</section>
					</div>
</template>