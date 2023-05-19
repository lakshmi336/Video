var num=0;
var arrofVid=["waterfall1.mp4","waterfall2.mp4","waterfall3.mp4","waterfall4.mp4","waterfall5.mp4"]
var vidTag=document.querySelector("video")
function autoSlide()
{
    num++
    if(num<=arrofVid.length-1)
    {
        vidTag.src=`./${arrofVid[num]}`
    }
    else{
        num=0
        vidTag.src= `./${arrofVid[num]}`
    }
    setTimeout(autoSlide,10000)
}
autoSlide()