import React from 'react'
import {Provider,connect} from 'react-redux'
import store from '../redux/store'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import './edit.pcss'
import axios from 'axios'
let qs = require('qs');
let timer = ''

class Edit extends React.Component{
  state = {
    isShow : false,
    title:'',
    type:'',
    author:'',
    content:'',
    loading:false,
    loadingText:'操作成功',
    zoomimg:'',
    preview:'',
    initialContent: '<p>开始编辑吧!</p>',
  }
  handleChange = (content) => {
    console.log(content)
    this.setState({content})
    // this.props.dispatch(edit(content))
  }
  handleRawChange = (rawContent) => {
    // this.props.dispatch(edit(rawContent))
  }
  handleSave = () =>{
    clearTimeout(timer)
    let {title,type,author,content,zoomimg} = this.state
    if(!type){
      type = 1
    }
    if(!title  || !type || !author || !content ){
      this.setState({loading: !this.state.loading,loadingText:'请填写全部内容'})
      timer = setTimeout(()=>{
        this.setState({loading:!this.state.loading,loadingText:'操作成功'})
      },1000)
    }else {

    let instance = axios.create({
      headers:{'content-type': 'application/x-www-form-urlencoded'}
    })
    let data = qs.stringify({
      'title':title,
      'content':content,
      'type':type,
      'author':author,
      'zoomimg':zoomimg
    })
      instance.post('https://wx.zzwio.com/api/news_add.php',data)
        .then((res)=>{
          if (res.status === 200){
            this.setState({
              loading: !this.state.loading,
              initialContent: '<p>开始编辑吧!</p>',
              title:'',
              content:'',
              type:'',
              author:'',
              zoomimg:''
            })
            setTimeout(()=>{
              this.setState({isShow: !this.state.isShow,loading:!this.state.loading})
            },1000)
          }
        })
        .catch(()=>{
          console.log('err')
        })
    }
  }
  handleShowModal = () =>{
    this.setState({isShow: !this.state.isShow})
  }
  handleChangeTitle = (e) =>{
    this.setState({title:e.target.value})
  }
  handleChangeAuthor = (e) =>{
    this.setState({author:e.target.value})
  }
  handleChangeType = (e) =>{
    this.setState({type:e.target.value})
  }
  fileUpChange = (e) => {
    let that = this;
    var fileObj = e.target;
    that.setState({uploadfile:fileObj})
    var fileEnd = fileObj.value.slice(fileObj.value.lastIndexOf('.'));
    let fileTypeArr = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG', '.SVG', '.svg']
    const isJPG = fileTypeArr.indexOf(fileEnd);
    if (isJPG === -1) {
      alert('只能选择jpg/png格式的图片！');
      e.target.value = ''
      return
    }
    const isLt2M = fileObj.files[0].size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert('头像大小不能超过2M', Math.ceil(fileObj.files[0].size / 1024) + ' kb');
      e.target.value = ''
      return
    }
    that.setState({uploadfile_resize:isLt2M})
    var windowURL = window.URL || window.webkitURL;
    if (fileObj && fileObj.files && fileObj.files[0]) {
      var blob = windowURL.createObjectURL(fileObj.files[0]);
      that.setState({ preview: blob })
      var reader = new FileReader();
      reader.onload = function ( event ) {
        that.setState({zoomimg:event.target.result})
      };
    }
    reader.readAsDataURL( fileObj.files[0] );
  }
  render(){
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: this.state.initialContent,
      onChange: this.handleChange,
      // onRawChange: this.handleRawChange,
      allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
      image: true, // 开启图片插入功能
      video: true, // 开启视频插入功能
      audio: true, // 开启音频插入功能
      onSave:this.handleSave
    }
    let {title,type,author,isShow,loading,loadingText,preview} = this.state;
    return(
      <div className="edit-demo">
        <BraftEditor {...editorProps}/>
        {
          !this.state.isShow ?
            <div
              className='save'
              onClick={this.handleShowModal}
            >保存
            </div>
            :
            null
        }

        {
          isShow ?
            <div>
              <div className='modal-bg' onClick={this.handleShowModal}/>
              {
                loading ? <div className='toast'>{loadingText}</div> : null
              }
              <div className='modal'>
                <div className='modal-head'>
                  <h2>保存新闻</h2>
                  <img
                    className='close'
                    src={require('../img/close.png')}
                    onClick={this.handleShowModal}
                    alt="关闭"/>
                </div>
                <div className='input-group'>
                  <label>
                    标题
                    <input
                      type="text"
                      value={title}
                      onChange={this.handleChangeTitle} placeholder='标题'/>
                  </label>
                </div>
                <div className='input-group'>
                  <label>
                    作者
                    <input
                      type="text"
                      value={author}
                      onChange={this.handleChangeAuthor} placeholder='作者'/>
                  </label>
                </div>
                <div className='input-group'>
                  <label>
                    类型
                    {/*<select*/}
                      {/*value={type}*/}
                      {/*onChange={this.handleChangeType}>*/}
                      {/*<option value="1">黑科技</option>*/}
                      {/*<option value="2">型格</option>*/}
                      {/*<option value="3">性情</option>*/}
                      {/*<option value="4">座驾</option>*/}
                      {/*<option value="5">前端</option>*/}
                    {/*</select>*/}
                    <input
                      type="text"
                      value={type}
                      maxLength={10}
                      onChange={this.handleChangeType} placeholder='类型'/>
                  </label>
                </div>
                <div className='input-group'>
                  <label>
                    图片
                    <input
                      type="file"
                      onChange={this.fileUpChange}
                      accept="image/jpeg,image/jpg,image/png"
                      id="file_upload"
                      className="main-file-up"/>
                    <div className='file-modal'>选择文件</div>
                  </label>
                </div>
                <div className='input-group'>
                  <label>
                    预览
                    <img className='preview' src={preview && preview} alt=""/>
                  </label>
                </div>
                <div className='input-group'>
                  <label>
                    操作
                    <button onClick={this.handleSave} className='submit'>保存</button>
                  </label>
                </div>
              </div>
            </div>
            :
            null
        }
      </div>
    )
  }
}
const mapStateToProps = state =>({storeState:state})
const Main = connect(
  mapStateToProps
)(Edit)
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>