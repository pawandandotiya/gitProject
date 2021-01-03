var image=null;
function UploadImage()
{
  var file=document.getElementById("finput");
  image=new SimpleImage(file);
  var canvas=document.getElementById("can");
  image.drawTo(canvas);
}

function MakeGrayScale()
{
  var image2=new SimpleImage(image);
  for(var pixel of image2.values())
    {
      var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
  var imgcanvas =document.getElementById("can1");
  image2.drawTo(imgcanvas);
}

function MakeRed()
{
  var image2=new SimpleImage(image);
  for(var pixel of image2.values())
    {
      pixel.setRed(255);
    }
   var imgcanvas =document.getElementById("can2");
  image2.drawTo(imgcanvas);
}

function MakeBlue()
{
  var image2=new SimpleImage(image);
  for(var pixel of image2.values())
    {
      pixel.setBlue(255);
    }
   var imgcanvas =document.getElementById("can6");
  image2.drawTo(imgcanvas);
}

function MakeBlur()
{
  var image2=new SimpleImage(image);
  for(var pixel of image2.values())
    {
      var x=pixel.getRed();
      var y=pixel.getBlue();
      var z=pixel.getGreen();
      pixel.setRed((z+y)/2);
      pixel.setBlue((x+z)/2);
      pixel.setGreen((y+x)/2);
    }
   var imgcanvas =document.getElementById("can4");
  image2.drawTo(imgcanvas);
}

function MakeRainbow()
{
  var image2=new SimpleImage(image);
  var y=image2.getHeight();
  for(var pixel of image2.values())
    {
      
      if(pixel.getY()<=y/7)
        {
          pixel.setRed(255);
        }
      else if(pixel.getY()>y/7&&pixel.getY()<=2*y/7)
        {
         pixel.setRed(255);pixel.setGreen(127);
        }
      else if(pixel.getY()>2*y/7&&pixel.getY()<=3*y/7)
        {
          pixel.setRed(255);pixel.setGreen(255);
        }
      else if(pixel.getY()>3*y/7&&pixel.getY()<=4*y/7)
        {
         pixel.setGreen(255);
        }
      else if(pixel.getY()>4*y/7&&pixel.getY()<=5*y/7)
        {
          pixel.setBlue(255);
        }
      else if(pixel.getY()>5*y/7&&pixel.getY()<=6*y/7)
        {
          pixel.setRed(75);pixel.setBlue(130);
        }
      else
        {
          pixel.setRed(148);pixel.setBlue(211);
        }
    }
   var imgcanvas =document.getElementById("can3");
  image2.drawTo(imgcanvas);
}

function Reset()
{
  var imgcanvas =document.getElementById("can5");
  image.drawTo(imgcanvas);
}