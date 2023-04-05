<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"/>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar';
import Spinner from "@/components/Spinner";
import bus from './utils/bus';

export default {
  name: 'App',
  components: { Spinner, ToolBar },
  data() {
    return {
      loadingStatus: false,
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  beforeUnmount() {
    // bus 이벤트를 등록하고 나면, 계속 이벤트가 쌓이기 때문에 off를 해주어야 함.
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
}
</script>

<style>
body {
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
