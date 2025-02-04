'use client';
import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

export default function ImageEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvas = useRef<fabric.Canvas | null>(null);

  // 初始化画布
  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
        width: 1024,
        height: 1024
      });
      canvasRef.current.style.border = '4px solid rgba(220, 220, 220, 0.8)'; // 外边框样式
      canvasRef.current.style.borderRadius = '16px';
    }

    return () => {
      fabricCanvas.current?.dispose();
    };
  }, []);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // 解决跨域问题
      img.src = e.target?.result as string;
  
      img.onload = () => {
        // 清空当前画布
        fabricCanvas.current?.clear();
  
        fabric.Image.fromURL(img.src, (fabricImg) => {
          // 获取画布宽度和高度
          const canvasWidth = fabricCanvas.current?.getWidth() || 1024;
          const canvasHeight = fabricCanvas.current?.getHeight() || 1024;
  
          // 计算居中位置
          // @ts-ignore
          const left = (canvasWidth - fabricImg.width) / 2;
          // @ts-ignore
          const top = (canvasHeight - fabricImg.height) / 2;
  
          // 设置图片的位置
          fabricImg.set({ left, top });
  
          // 将图片添加到画布
          fabricCanvas.current?.add(fabricImg);
          fabricCanvas.current?.renderAll();
        });
      };
    };
    reader.readAsDataURL(file);
  };

  // 保存图片
  const saveImage = () => {
    if (!fabricCanvas.current) return;

    // 获取 Canvas 的 Data URL
    const dataURL = fabricCanvas.current.toDataURL({
      format: 'png', // 保存为 PNG 格式
      quality: 1.0   // 图片质量 (0-1)
    });

    // 创建下载链接
    const link = document.createElement('a');
    link.download = 'processed-image.png'; // 下载文件名
    link.href = dataURL;
    link.click();
  };

  // 恢复原图
  const resetImage = (img: fabric.Image) => {
    // 清空所有滤镜
    img.filters = [];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 复古风格
  const applySepiaEffect = (img: fabric.Image) => {
    // 复古风格通过调整 RGB 通道实现
    img.filters = [
      new fabric.Image.filters.Sepia({
        // 调整复古效果的强度 (0-1)
        sepia: 0.8
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 模糊效果
  const applyBlurEffect = (img: fabric.Image) => {
    // 模糊效果
    img.filters = [
      //@ts-ignore
      new fabric.Image.filters.Blur({
        blur: 0.8 // 调整模糊强度，0-1之间
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };
  

  // 油画效果
  const applyOilPaintingEffect = (img: fabric.Image) => {
    // 模拟油画效果
    img.filters = [
      new fabric.Image.filters.Saturation({
        saturation: 0.3 // 减少饱和度，使颜色看起来更加柔和
      }),
      new fabric.Image.filters.Contrast({
        contrast: 0.7 // 提高对比度，使油画效果更明显
      }),
      new fabric.Image.filters.Brightness({
        brightness: 0.2 // 提高亮度
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };
  

  // 素描风格
  const applySketchEffect = (img: fabric.Image) => {
    // 使用灰度化滤镜
    img.filters = [
      new fabric.Image.filters.Grayscale(), // 转换为灰度图
  
      // 边缘检测矩阵，增加边缘的清晰度
      new fabric.Image.filters.Convolute({
        matrix: [
          -1, -1, -1,
          -1,  9, -1, // 使用更高的值以增强边缘
          -1, -1, -1
        ]
      }),
  
      // 锐化滤镜，增强细节
      new fabric.Image.filters.Convolute({
        matrix: [
          0, -1, 0,
          -1,  5, -1, // 这个矩阵有助于图像锐化
          0, -1, 0
        ]
      }),
  
      // 增加对比度和亮度，增强素描效果
      new fabric.Image.filters.Brightness({
        brightness: 0.1
      }),
      new fabric.Image.filters.Contrast({
        contrast: 0.3 // 适度提高对比度
      })
    ];
  
    // 应用所有滤镜
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 负片风格
  const applyNegativeEffect = (img: fabric.Image) => {
    // 负片风格通过反转 RGB 通道实现
    img.filters = [
      new fabric.Image.filters.Invert()
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 暖色调
  const applyWarmToneEffect = (img: fabric.Image) => {
    // 暖色调通过调整 RGB 通道的权重实现
    img.filters = [
      new fabric.Image.filters.BlendColor({
        // 设置暖色调颜色（橙色）
        color: '#ffa500',
        // 调整混合模式为叠加
        mode: 'multiply',
        // 调整透明度
        alpha: 0.5
      }),
      new fabric.Image.filters.Brightness({
        // 增强亮度
        brightness: 0.1
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 黑白风格
  const applyBlackAndWhiteEffect = (img: fabric.Image) => {
    // 黑白风格通过去除彩色信息实现
    img.filters = [
      new fabric.Image.filters.Grayscale(), // 转换为灰度图
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 复古彩色风格
  const applyVintageColorEffect = (img: fabric.Image) => {
    // 复古彩色风格通过减少亮度和改变色调实现
    img.filters = [
      new fabric.Image.filters.Saturation({
        saturation: -0.5 // 降低饱和度，使图片显得有些褪色
      }),
      new fabric.Image.filters.Brightness({
        brightness: -0.2 // 降低亮度
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 冷色调
  const applyCoolToneEffect = (img: fabric.Image) => {
    // 冷色调通过调整颜色通道的比例实现
    img.filters = [
      new fabric.Image.filters.BlendColor({
        color: '#00bfff', // 蓝色调
        mode: 'multiply',
        alpha: 0.4
      }),
      new fabric.Image.filters.Brightness({
        brightness: -0.1 // 降低亮度，增强冷色感觉
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 高对比度
  const applyHighContrastEffect = (img: fabric.Image) => {
    // 增加对比度
    img.filters = [
      new fabric.Image.filters.Contrast({
        contrast: 0.8 // 增加对比度
      })
    ];
    img.applyFilters();
    fabricCanvas.current?.renderAll();
  };

  // 渲染效果选择按钮
  const renderEffectButtons = () => {
    const effects = [
      { name: '恢复原图', handler: resetImage },
      { name: '复古风格', handler: applySepiaEffect },
      { name: '素描风格', handler: applySketchEffect },
      { name: '负片风格', handler: applyNegativeEffect },
      { name: '暖色调风格', handler: applyWarmToneEffect },
      { name: '黑白风格', handler: applyBlackAndWhiteEffect },
      { name: '油画风格', handler: applyOilPaintingEffect },
      { name: '复古彩色风格', handler: applyVintageColorEffect },
      { name: '冷色调', handler: applyCoolToneEffect },
      { name: '高对比度', handler: applyHighContrastEffect },
    ];

    return effects.map((effect, index) => (
      <button
        key={index}
        onClick={() => {
          const img = fabricCanvas.current?.getObjects()[0] as fabric.Image;
          effect.handler(img);
        }}
        className='text-gray-200 font-bold text-2xl hover:text-blue-300'
      >
        {effect.name}
      </button>
    ));
  };

  return (
    <div className='flex flex-col mx-8 my-8 p-10 bg-transparent/30 rounded-lg
      shadow-lg'>
      <div className='flex flex-col gap-3 mb-5'>
        <div className='flex items-center mb-4'>
          <input
            type="file"
            onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
            className='text-white font-semibold'
          />
          <InteractiveHoverButton
            type="button"
            onClick={saveImage}
          >
            保存图片
          </InteractiveHoverButton>
          <span className='text-sm text-gray-400 ml-4'>
            图片尺寸应小于1024 x 1024
          </span>
        </div>
        <div className='flex gap-2'>
          {renderEffectButtons()}
        </div>
      </div>
      {/* 图片 */}
      <canvas ref={canvasRef} />
    </div>
  );
}