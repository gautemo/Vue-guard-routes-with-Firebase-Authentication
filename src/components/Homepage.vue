<template>
  <a href="https://gaute.app" target="_blank" rel="noopener">
    <svg :height="size" :width="size" viewBox="0 0 496 512">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#2AFADF;stop-opacity:1"></stop>
          <stop offset="100%" style="stop-color:#4C83FF;stop-opacity:1"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#grad1)"
        d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
      ></path>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    size: String
  }
};
</script>

<style scoped>
a:hover svg {
  animation: spin 4s linear infinite;
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
a:hover svg{
  width: 26px;
  height: 26px;
}
a svg, a {
  transition: all 0.4s ease;
}
a{
    margin: 0 5px;
}
a:hover{
    margin: 0 2px;
}
</style>