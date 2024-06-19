<template>
  <mdui-top-app-bar padding-top style="background-color: rgba(var(--mdui-color-primary-container, 0.8))">
    <div style="flex-grow: 1"></div>
    <img src="https://s21.ax1x.com/2024/04/07/pFq2AoR.png" alt="alternative" style="width: 2.5rem; height: 2.5rem;">
    <div style="flex-grow: 1"></div>
    <mdui-top-app-bar-title>MineLive</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
  </mdui-top-app-bar>

  <div style="display: flex;margin-top: 8px;margin-bottom: 8px">
    <div style="flex-grow: 1"></div>
    <img class="img-fluid" src="https://s21.ax1x.com/2024/06/04/pkJywCR.png" alt="alternative" width=400px>
    <div style="flex-grow: 1"></div>
    <div class="mdui-prose" style="margin-bottom: 8px">
      <br>
      <h2 id="typewriter" style="font-weight: bold;width: 290px">生意兴隆，财源广进</h2>
      <h3>海口美兰英霆文化工作室</h3>
      <br>
      <div style="display: flex; justify-content: space-between">
        <mdui-button variant="tonal" href="https://qm.qq.com/q/5DEOJw49xu" target="_blank">联系我们</mdui-button>
      </div>
      <br>
    </div>
    <div style="flex-grow: 1"></div>
  </div>
  <mdui-divider></mdui-divider>

  <div class="mdui-prose" style="margin: 8px;">
    <h3 style="margin-top: 16px;">为什么选择我们 ？</h3>
    <div style="display: flex; justify-content: space-between; margin: 16px" id="cardBtn">
      <mdui-card variant="outlined" clickable class="mdui-card">
        <mdui-icon class="mdui-icon" name="access_time_filled"></mdui-icon>
        <h4>持续发展</h4>
      </mdui-card>
      <mdui-card variant="outlined" clickable class="mdui-card">
        <mdui-icon class="mdui-icon" name="work"></mdui-icon>
        <h4>诚信经营</h4>
      </mdui-card>
      <mdui-card variant="outlined" clickable class="mdui-card">
        <mdui-icon class="mdui-icon" name="account_balance_wallet"></mdui-icon>
        <h4>价格实惠</h4>
      </mdui-card>
    </div>
  </div>
  <mdui-divider></mdui-divider>

</template>

<script>
import init from '../js/home';
export default {
  mounted() {
    init();
  }
}
</script>

<style>
.mdui-prose {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.mdui-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 160px;
  margin-left: 20px;
  margin-right: 20px;
}
.mdui-icon {
  font-size: 32px;
}
</style>
