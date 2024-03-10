const Hero = () => {
  const images = [
    { src: "images/banner-1.jpg", width: 1920, height: 1080 },
    { src: "images/banner-2.jpg", width: 1920, height: 1080 },
    { src: "images/banner-3.jpg", width: 1920, height: 1080 },
    { src: "images/banner-4.jpg", width: 1920, height: 1080 },
  ]

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        {/* TODO: Hero Section */}
        Hero Section here (carousel)
      </div>
    </div>
  )
}

export default Hero
