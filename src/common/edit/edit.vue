<template>
  <div>
    <Form :label-width="80" width='320'>
      <FormItem :label="$t('shop.name')">
        <Input v-model="name" placeholder="请输入商品名称"/>
      </FormItem>
      <FormItem :label="$t('shop.cost')">
        <Input v-model="price" placeholder="请输入成本价" />
      </FormItem>
      <FormItem :label="$t('shop.price')" v-show="shows">
        <Input v-model="current" placeholder="请输入当前价" />
      </FormItem>
      <FormItem :label="$t('shop.sort')">
        <Select v-model="sort">
          <Option v-for='item in sortList' :key='item.key' :value="item.key">{{item.value}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('shop.brand')">
        <Select v-model="brand">
          <Option v-for='item in brandList' :key='item.key' :value="item.key">{{item.value}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('shop.supplier')">
        <Select v-model="supplier">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('shop.introduction')">
        <Input v-model="abstract" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
      </FormItem>
      <FormItem :label="$t('shop.details')">
        <quill-editor class="wen" v-model="content" ref="myQuillEditor" :options="editorOption">
        </quill-editor>
      </FormItem>
      <FormItem :label="$t('shop.thumbnail')">
        <img-inputer
        auto-uoload=false
        v-model="file"
        theme="light"
        img-src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1537423892&di=6575bd863508da7588ce34e5af953b97&src=http://shuo.weiweiqi.com/wp-content/uploads/2017/08/tutu06.jpg'
        size="small"/>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
// import { mapActions } from 'vuex'
export default {
  components: {
    quillEditor
  },
  computed: {
    name: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.commit('name', value)
      }
    },
    price: {
      get () {
        return this.$store.state.price
      },
      set (value) {
        this.$store.commit('price', value)
      }
    },
    current: {
      get () {
        return this.$store.state.current
      },
      set (value) {
        this.$store.commit('current', value)
      }
    },
    sort: {
      get () {
        return this.$store.state.sort
      },
      set (value) {
        this.$store.commit('sort', value)
      }
    },
    brand: {
      get () {
        return this.$store.state.brand
      },
      set (value) {
        this.$store.commit('brand', value)
      }
    },
    supplier: {
      get () {
        return this.$store.state.supplier
      },
      set (value) {
        this.$store.commit('supplier', value)
      }
    },
    abstract: {
      get () {
        return this.$store.state.abstract
      },
      set (value) {
        this.$store.commit('abstract', value)
      }
    },
    details: {
      get () {
        return this.$store.state.details
      },
      set (value) {
        this.$store.commit('details', value)
      }
    },
    content: {
      get () {
        return this.$store.state.content
      },
      set (value) {
        this.$store.commit('content', value)
      }
    },
    file: {
      get () {
        return this.$store.state.file
      },
      set (value) {
        this.$store.commit('file', value)
      }
    }
  },
  created () {
    this.sortList = this.$store.state.sortList
    this.brandList = this.$store.state.brandList
  },
  data () {
    return {
      shows: this.show,
      sortList: [],
      brandList: [],
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
