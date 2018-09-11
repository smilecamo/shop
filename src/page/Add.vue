<template>
  <div class="add-content">
    <span class="content-header">新增商品</span>
    <Divider dashed />
    <Form :model="formItem" :label-width="80" width= '320'>
      <FormItem label="商品名称">
        <Input v-model="formItem.name" placeholder="请输入商品名称" />
      </FormItem>
      <FormItem label="成本价">
        <Input v-model="formItem.price" placeholder="请输入成本价" />
      </FormItem>
      <FormItem label="商品分类">
        <Select v-model="formItem.sort">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
      </Select>
      </FormItem>
      <FormItem label="商品品牌">
        <Select v-model="formItem.brand">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
      </Select>
      </FormItem>
      <FormItem label="供应商">
        <Select v-model="formItem.supplier">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
      </Select>
      </FormItem>
      <FormItem label="商品简介">
        <Input v-model="formItem.abstract" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
      </FormItem>
      <FormItem label="商品详情">
        <quill-editor
          class="wen"
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </FormItem>
  </Form>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      formItem: {
        // 商品名称
        name: '',
        // 当前价
        price: '',
        // 商品分类
        sort: '',
        // 商品品牌
        brand: '',
        // 供应商
        supplier: '',
        // 商品简介
        abstract: '',
        // 商品详情
        details: ''
      },
      content: null,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'image', 'clean'],
            [{'list': 'ordered'}, { 'list': 'bullet' }],
            [{'indent': '-1'}, { 'indent': '+1' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': ['small', false, 'large', 'huge'] }]
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.add-content{
  margin-top: 20px;
}
.content-header{
  font-size: 20px;
}
</style>
