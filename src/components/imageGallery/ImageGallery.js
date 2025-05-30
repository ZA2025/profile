import responsiveImgAttrs from "@/utils/responsiveImgAttrs";

const ImageGallery = ({ image, alt }) => {
  if (!image) return null;

  const { src, sizes, srcset, width, height } = responsiveImgAttrs(
    [image.src],
    image.sizes,
    image.dimensions.map((dim) => dim.width),
    image.dimensions.find((dim) => dim.default)?.width,
    "imageGalleryImage",
    `${alt} - Image`, // optional
    image.dimensions.map((dim) => dim.height)
  );

  return (
    <div className="project-images">
      <div className="image-wrapper">
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          srcSet={srcset}
          width={width}
          height={height || width}
          priority
          className="imageGalleryImage"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
