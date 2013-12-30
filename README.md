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
* box-sizing: content-box|border-box|inherit;
* content-box:这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。
* border-box:为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
  通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
* inherit	规定应从父元素继承 box-sizing 属性的值。
