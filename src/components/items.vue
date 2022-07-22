<template>
  <div class="res-table">
    <vxe-toolbar perfect>
      <template #buttons>
        <vxe-input v-model="qForm.filterText" type="search" placeholder="全表搜索" @keyup=""></vxe-input>
      </template>
    </vxe-toolbar>
    <vxe-table
        border
        size="medium"
        ref="xTable"
        highlight-hover-row
        show-overflow
        max-height="800"
        :data="state.records"
        :edit-config="{trigger:'dblclick', mode: 'row'}"
        @mouseup="getSelected"
    >
      <vxe-column field="command" title="命令" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.command" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="desc" title="说明" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.desc" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="" title="操作">
        <template #default="{row}">
          <vxe-button type="text" status="primary" @click="saveRow(row)">保存</vxe-button>
          <vxe-button type="text" status="danger" @click="deleteRow(row)">删除</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();

const getSelected = async () => {
  let selected = window.getSelection()
  if (!!selected) {
    await toClipboard(selected.toString());
  }
}

const state =reactive({
  records: []
})

const qForm = reactive({
  filterText: ''
})


const saveRow = async (row: any)=> {

}

const deleteRow = async (row: any)=> {

}

</script>

<style lang="scss">
.res-table {
  width: 100%;
}
</style>