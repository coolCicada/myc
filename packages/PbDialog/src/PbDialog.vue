<template>
  <div class="pb-dialog">
    <van-dialog
      :key="Math.random()"
      v-model="dialogStatus"
      theme="round-button"
      :show-confirm-button="curOptions.showConfirmButton"
      :show-cancel-button="curOptions.showCancelButton"
      :confirm-button-text="curOptions.confirmButtonText"
      :cancel-button-text="curOptions.cancelButtonText"
      :get-container="getContainer"
      :before-close="handleBeforeClose"
      @confirm="handleConfirm"
    >
      <div
        class="pb-dialog__img"
        :class="{
          'pb-dialog__img__loading': curOptions.type === 'loading',
        }"
      >
        <template v-if="curOptions.type">
          img1
        </template>
        <template v-else>
          img2
        </template>
      </div>
      <div class="pb-dialog__title">
        {{ curOptions.title }}
      </div>
      <div
        v-if="curOptions.message"
        class="pb-dialog__desc"
      >
        {{ curOptions.message }}
      </div>
    </van-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  NavBar, Cell, CellGroup, GridItem, Sidebar, SidebarItem, Dialog,
} from 'vant';

Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Dialog);

@Component({
  name: 'pbDialog',
})
export default class PbDialog extends Vue {
  @Prop({
    type: String,
    default: '',
  })
  title?: string

  @Prop({
    type: String,
    default: '',
  })
  desc?: ''

  @Prop({
    type: String,
    default: '',
  })
  showConfirmButton?: false

  @Prop({
    type: Boolean,
    default: false,
  })
  showCancelButton?: boolean

  @Prop({
    type: String,
    default: '我知道了',
  })
  confirmButtonText?: string

  @Prop({
    type: String,
    default: '取消',
  })
  cancelButtonText?: string

  defaultOptions: any = {
    value: true,
    type: 'error',
    title: '',
    width: '',
    theme: null,
    message: '',
    overlay: true,
    className: '',
    allowHtml: true,
    lockScroll: true,
    transition: 'van-dialog-bounce',
    beforeClose: null,
    overlayClass: '',
    overlayStyle: null,
    messageAlign: '',
    getContainer: 'body',
    cancelButtonText: '',
    cancelButtonColor: null,
    confirmButtonText: '',
    confirmButtonColor: null,
    showConfirmButton: true,
    showCancelButton: false,
    closeOnPopstate: true,
    closeOnClickOverlay: false,
    confirmCallback: () => {
      console.log('a');
    },
    cancelCallback: () => {
      console.log('a');
    },
    // callback: (action : string) => {
    //   instance[action === 'confirm' ? 'resolve' : 'reject'](action);
    // },
  }

  curOptions: any = {}

  dialogStatus = false;

  get getIconSrc(): string {
    if (this.defaultOptions.type === 'success') {
      return '@/assets/icon_remind@3x.png';
    }
    return '../../../assets/icon_remind@3x.png';
  }

  getContainer() {
    return document.querySelector('.pb-dialog');
  }

  alert(options: any) {
    this.curOptions = { ...this.defaultOptions, ...options };
    this.dialogStatus = true;
  }

  handleConfirm() {
    if (this.curOptions && this.curOptions.confirmCallback) {
      if (typeof (this.curOptions.confirmCallback) === 'function') {
        this.curOptions.confirmCallback();
      }
    }
  }

  handleBeforeClose(action: string, done: (status?: any) => void) {
    if (action === 'cancel') {
      done();
      return;
    }
    if (this.curOptions && this.curOptions.beforeClose) {
      if (typeof (this.curOptions.beforeClose) === 'function') {
        this.curOptions.beforeClose(action, done);
        return;
      }
    }
    done();
  }

  close() {
    this.curOptions = this.defaultOptions;
    this.dialogStatus = false;
  }
}
</script>

<style lang="less">
  .pb-dialog {
    .van-dialog {
      width: calc(100% - 18px);
      top: unset;
      bottom: 34px;
      transform: translateX(-50%);

      &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &__footer {
        padding: 0;
        box-sizing: border-box;
        min-height: 36px;
        .van-button {
          margin: 30px 18px 18px 18px
        }
      }
      &__cancel {
        height: 45px;
        background: #F0F0F0;
        border-radius: 50px;
        color: rgba(0,0,0,0.84);
        margin-right: 9px;
      }
      &__confirm {
        height: 45px;
        background: rgba(0,0,0,0.84);
        border-radius: 50px;
      }
    }
    &__img {
      width: 48px;
      height: 48px;
      margin-top: 30px;
      img {
        width: 100%;
      }
      &__loading {
        img {
          animation: loadingImage 1s infinite linear;
        }
      }
    }
    &__title {
      margin-top: 28px;
      font-size: 18px;
      color: rgba(0,0,0,0.84);
      letter-spacing: 0;
      text-align: center;
      line-height: 25px
    }
    &__desc {
      font-size: 15px;
      color: rgba(0,0,0,0.60);
      text-align: center;
      margin-top: 6px;
    }
    &__button_group {
      margin-top: 30px;
      // drgba(19, 14, 14, 0.6)
      div {
        background: rgba(0,0,0,0.84);
        border-radius: 100px;
        color: #fff;
      }
    }
    @keyframes loadingImage {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
  }

  }

</style>
