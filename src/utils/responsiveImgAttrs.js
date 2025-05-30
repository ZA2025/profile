const responsiveImgAttrs = (src, sizes, widths, defaultSize, className = "", alt = "", heights = []) => {
    const dimensions = widths.map((width, index) => ({
      width,
      height: heights[index] || undefined,
      default: width === defaultSize,
    }));
  
    const srcset = dimensions.map(dim => `${src} ${dim.width}w`).join(', ');
  
    const defaultDimension = dimensions.find(dim => dim.default) || dimensions[0];
    const width = defaultDimension.width;
    const height = defaultDimension.height;
  
    return {
      src,
      sizes,
      srcset,
      width,
      height,
      alt,
      class: className
    };
  };
  
  export default responsiveImgAttrs;
  