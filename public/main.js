// const { getHeapSpaceStatistics } = require("v8");
// const { getMaxListeners } = require("process");

// console.log('我是main.js')
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)//打印出请求响应
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        };
    };
    request.send()
};
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status ===200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        };
    };
    request.send()
};
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = ()=>{
        // console.log(request.response)
        //创建 div 标签
        const div = document.createElement('div')
        //填写 div 内容
        div.innerHTML = request.response
        //插到 body 里面
        document.body.appendChild(div)
    };
    request.onerror = ()=>{}
    request.send()
};
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = ()=>{
        // console.log(request.response)
        // 创建 script 标签
        const script = document.createElement('script')
        // 填写 script 内容
        script.innerHTML = request.response
        // 插到body里面
        document.body.appendChild(script)        
    };
    request.onerror = ()=>{}
    request.send()
};

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", '/style.css');
    request.onreadystatechange = () =>{//readyState = 1
        console.log(request.readyState);
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
              // 创建 style 标签
              const style = document.createElement('style')
              // 填写 style 内容
              style.innerHTML = request.response
              // 插到 head 里面
              document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            };
        };
    };
    request.send() //readyState = 2
};
