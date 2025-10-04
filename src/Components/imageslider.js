import "./../Styles/imageslider.style.css";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/500/350?random=1",
    "https://picsum.photos/500/350?random=2",
    "https://picsum.photos/500/350?random=3",
    "https://picsum.photos/500/350?random=4",
  ];

  return (
    <div className="stack-wrapper">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`stack-${index}`}
          className={`stack-img img-${index}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
