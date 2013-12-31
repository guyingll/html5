# html5 , css3 ,javascript

### clear: both;
clear: both使文档回到常规流，既清除同行元素，不允许其它元素与之在一行内。

### float: left;
float:left(左浮动)他使得指定元素脱离普通的文档流而产生的特别的布局特性。
并且FLOAT必需应用在块级元素之上，也就是说浮动并不应用于内联标签。或者换句话来说当应用了FLOAT那么这个元素将被指定为块级元素。
用于并列多个块。

### display: inline-block;
很多时候我们必须使一些块元素并排显示，一般想到的是必须使用浮动，但是块元素浮动给边距(margin)的时候在IE下会出现加倍的BUG，
所以很多时候不得不把这个块元素套在一个内联元素里面，然后给内联元素浮动和边距。
display:inline-block简单来说就是将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行内，
允许空格。

### border-top:2px solid #999999;
solid：实线
边框2像素的实线(颜色的#999999)

### box-sizing: content-box|border-box|inherit;
* content-box:这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。
* border-box:为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
  通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
* inherit	规定应从父元素继承 box-sizing 属性的值。

### box-orient: horizontal|vertical|inline-axis|block-axis|inherit;
* horizontal	在水平行中从左向右排列子元素。
* vertical	    从上向下垂直排列子元素。
* inline-axis	沿着行内轴来排列子元素（映射为 horizontal）。
* block-axis	沿着块轴来排列子元素（映射为 vertical）。
* inherit	    应该从父元素继承 box-orient 属性的值。

### box-direction: normal|reverse|inherit;
normal	以默认方向显示子元素。
reverse	以反方向显示子元素。
inherit	应该从子元素继承 box-direction 属性的值

### box-pack: start|end|center|justify;
* start
对于正常方向的框，首个子元素的左边缘被放在左侧（最后的子元素后是所有剩余的空间）
对于相反方向的框，最后子元素的右边缘被放在右侧（首个子元素前是所有剩余的空间）
* end
对于正常方向的框，最后子元素的右边缘被放在右侧（首个子元素前是所有剩余的空间）。
对于相反方向的框，首个子元素的左边缘被放在左侧（最后子元素后是所有剩余的空间）。
* center	均等地分割多余空间，其中一半空间被置于首个子元素前，另一半被置于最后一个子元素后
* justify	在每个子元素之间分割多余的空间（首个子元素前和最后一个子元素后没有多余的空间）。

### box-flex: value;
* value	元素的可伸缩行。柔性是相对的，例如 box-flex 为 2 的子元素两倍于 box-flex 为 1 的子元素。

### box-align: start|end|center|baseline|stretch;
* start
对于正常方向的框，每个子元素的上边缘沿着框的顶边放置。
对于反方向的框，每个子元素的下边缘沿着框的底边放置。
* end
对于正常方向的框，每个子元素的下边缘沿着框的底边放置。
对于反方向的框，每个子元素的上边缘沿着框的顶边放置。
* center	均等地分割多余的空间，一半位于子元素之上，另一半位于子元素之下。
* baseline	如果 box-orient 是inline-axis或horizontal，所有子元素均与其基线对齐。
* stretch	拉伸子元素以填充包含块

### border-image
 url	设置所有 border-image-* 属性的简写属性。

### border-radius
 value 设置所有四个 border-*-radius 属性的简写属性。

### box-shadow: h-shadow v-shadow blur spread color inset;
 注释：box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。

* h-shadow	必需。水平阴影的位置。允许负值。
* v-shadow	必需。垂直阴影的位置。允许负值。
* blur	可选。模糊距离。
* spread	可选。阴影的尺寸。
* color	可选。阴影的颜色。请参阅 CSS 颜色值。
* inset	可选。将外部阴影 (outset) 改为内部阴影。

### @font-face 自定义字体

    title{
        font: bold 36px myfont,verdana,sans-serif;
        text-shadow:2px 2px 3px #aaaaaa;
    }
    @font-face {
        font-family: 'myfont';
        src: url("../other/YaHei.Consolas.1.12.ttf");
    }

### gradient 渐变
* linear-gradient：线性渐变
> background: -webkit-linear-gradient(tops,#ffffff,#006699); 自上到下渐变
* radial-gradient：放射渐变
> background: -webkit-radial-gradient(center,circle,#ffffff 0%,#006699 200%); 中间向外放射渐变

### rgba(0,0,0,0.5)
最后一位参数表示透明度：

    #title{
        font: bold 36px myfont,verdana,sans-serif;
        text-shadow:rgba(0,0,0,0.5) 2px 2px 3px;
    }

### hsla(120,100%,50%,0.1);
* 语法：
length || percentage || percentage|| opacity
* 取值：
1. length ：
Hue(色调)。 0(或360)表示红色，120表示绿色，240表示蓝色，当然可取其他数值来确定其它颜色；
2. percentage ：
Saturation(饱和度)。 取值为0%到100%之间的值；
3. percentage ：
Lightness(亮度)。 取值为0%到100%之间的值；
4. opacity ：
alpha(透明度)。 取值在0到1之间；