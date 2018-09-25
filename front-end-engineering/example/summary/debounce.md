### 防抖封装



```javascript
// 一个简单实现

let timer;
window.onscroll = function() {
    if(timer) {
       clearTimeout(timer)
    }
    timer = setTimeout(function(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        timer = undefined;        
    }, 200)
}

```



##### 完整封装

```javascript



```





