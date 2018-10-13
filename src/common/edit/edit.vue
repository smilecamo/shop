<template>
  <div>
    <Form :label-width="80" width='320'>
      <FormItem :label="$t('shop.name')">
        <Input v-model="name" placeholder="请输入商品名称"/>
      </FormItem>
      <FormItem :label="$t('shop.name1')" v-show="show">
        <Input v-model="name1" placeholder="请输入商品名称"/>
      </FormItem>
      <FormItem :label="$t('shop.cost')">
        <Input v-model="price" placeholder="请输入成本价"/>
      </FormItem>
      <FormItem :label="$t('shop.price')" v-show="show">
        <Input v-model="current" placeholder="请输入当前价"/>
      </FormItem>
      <FormItem :label="$t('shop.sort')">
        <Select v-model="sort">
          <Option v-for='item in sortList' :key='item.id' :value="item.id">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('shop.brand')">
        <Select v-model="brand">
          <Option v-for='item in brandList' :key='item.id' :value="item.id">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('shop.supplier')">
        <Select v-model="supplier">
          <Option v-for='item in supplierList' :key='item.id' :value="item.id">{{item.name}}</Option>
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
        <div class="demo-upload-list" v-for="item in thumbnail" :key="item.url">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
              <Icon type="ios-trash-outline"
              @click.native="handleThumbnailRemove()"
              ></Icon>
            </div>
        </div>
        <Upload
          name="uploadFile"
          ref="upload"
          action="http://47.100.31.2:8083/merchandise/uploadPicture/upload"
          :header="headers"
          :show-upload-list="false"
          :default-file-list="thumbnail"
          :before-upload = 'uploadThumbnailBefore'
          :on-success='uploadThumbnailSucess'
          :on-error='uploadThumbnailError'
          :max-size="4096"
          :accept='Accept'
          :with-credentials='true'
          style="width:58px; cursor: pointer">
          <div style="width: 160px;height: 100px; border: 1px dotted #000;line-height: 100px;border-radius:10px;text-align:center">
            <Icon type="ios-camera" size="40"></Icon>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="图集">
        <div class="demo-upload-list" v-for="item in imgList" :key="item.img">
          <div>
            <img :src="item.img">
            <div class="demo-upload-list-cover">
              <Icon type="ios-trash-outline" @click.native="handleRemove(item.id)"></Icon>
            </div>
          </div>
        </div>
        <Upload
          name="uploadFile"
          ref="upload"
          action="http://47.100.31.2:8083/merchandise/uploadPicture/upload"
          :show-upload-list="false"
          :default-file-list="imgList"
          :before-upload = 'uploadBefore'
          :on-success='uploadSucess'
          :on-error='uploadError'
          :max-size="2048"
          :accept='Accept'
          style="width:58px; cursor: pointer">
          <div style="width: 160px;height: 100px; border: 1px dotted #000;line-height: 100px;border-radius:10px;text-align:center">
            <Icon type="ios-camera" size="40"></Icon>
          </div>
        </Upload>
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
    name1: {
      get () {
        return this.$store.state.name1
      },
      set (value) {
        this.$store.commit('name1', value)
      }
    },
    show: {
      get () {
        return this.$store.state.show
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
    supplierList: {
      get () {
        return this.$store.state.supplierList
      },
      set (value) {
        this.$store.commit('supplierList', value)
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
    thumbnail: {
      get () {
        return this.$store.state.thumbnail
      },
      set (value) {
        this.$store.commit('thumbnail', value)
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
    // *********多张
    // 移除当前图片
    handleRemove (file) {
      console.log(file)
      this.$axios({
        method: 'POST',
        url: '/api/merchandise/atlas/delAtlas',
        params: {
          'id': file
        }
      })
        .then((res) => {
          alert(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 上传之前判断是否大于定义的数量
    uploadBefore () {
      if (this.imgList.length >= 9) {
        this.$Message.error('超出上传文件最大的上传数量')
        return false
      }
    },
    // 上传成功
    uploadSucess (file) {
      this.$Message.success('成功')
      console.log(file)
      this.imgLists.push({id: null, deal_id: null, sort: null, img: file.data})
      console.log(this.imgLists)
      this.$store.commit('imgList', this.imgLists)
    },
    uploadError () {
      this.$Message.error('上传失败')
    },
    // *********单张
    // 移除当前图片
    handleThumbnailRemove () {
      this.$store.commit('thumbnail', [])
      this.$store.commit('icon', '')
    },
    // 上传之前判断是否大于定义的数量
    uploadThumbnailBefore () {
      if (this.thumbnail.length >= 1) {
        this.$Message.error('超出上传文件最大的上传数量')
        return false
      }
    },
    // 上传成功
    uploadThumbnailSucess (file) {
      this.$Message.success('成功')
      let ads = []
      let ad = 'url=' + file.data
      ads.push(this.$qs.parse(ad))
      this.$store.commit('thumbnail', ads)
      this.$store.commit('icon', file.data)
      console.log(file)
    },
    uploadThumbnailError (file) {
      this.$Message.error('上传失败')
      console.log(file)
    }
  },
  data () {
    return {
      // 控制管理员和用户显示会员价
      // 分类列表
      sortList: [],
      files: '',
      imgLists: [],
      bas: '',
      // 品牌列表
      brandList: [],
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      // 图片类型限制
      Accept: '.jpg, .png,.jpeg',
      // 文本编辑器设置
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
.demo-upload-list{
  display: inline-block;
  width: 160px;
  height: 100px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
  margin-right: 20px;
}
.demo-upload-list img{
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover{
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 50px;
  background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
  display: block;
}
.demo-upload-list-cover i{
  color: #fff;
  font-size: 40px;
  line-height: 100px;
  cursor: pointer;
  margin: 0 2px;
  }
</style>
