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
          <Option v-for='item in sortList' :key='item.id' :value="item.name">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('shop.brand')">
        <Select v-model="brand">
          <Option v-for='item in brandList' :key='item.id' :value="item.name">{{item.name}}</Option>
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
      <FormItem label="图集">
        <span style="margin: 0 10px">
          <img-inputer
          ref="image"
          auto-uoload=false
          v-model="files"
          theme="light"
          size="small"
          />
          <Button>删除</Button>
        </span>
        <span style="margin: 0 10px">
          <img-inputer
          ref="image1"
          auto-uoload=false
          v-model="bas"
          theme="light"
          size="small"
          />
          <Button>删除</Button>
        </span>
      </FormItem>
      <Button @click="imgs">aaa</Button>
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
    },
    imgList: {
      get () {
        return this.$store.state.imgList
      }
    }
  },
  mounted () {
    this.$axios({
      method: 'GET',
      url: '/api/merchandise/sort/list'
    })
      .then((res) => {
        this.sortList = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
    this.$axios({
      method: 'GET',
      url: '/api/merchandise/brand/list'
    })
      .then((res) => {
        this.brandList = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    imgChange () {
      console.log(this)
    },
    imgs () {
      const base64 = this.$refs.image.$el.querySelector('.img-inputer__preview-img').src
      const base641 = this.$refs.image1.$el.querySelector('.img-inputer__preview-img').src
      const base642 = this.$refs.image2.$el.querySelector('.img-inputer__preview-img').src
      console.log(base64, base641, base642)
    }
  },
  data () {
    return {
      shows: this.$store.show,
      sortList: [],
      files: '',
      bas: '',
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
