export const Banner = () => {
  return (
    <picture className="w-full h-screen">
      <source
        media="(min-width: 640px)"
        srcSet="https://www.m-bank.mn/icons/landing/home_cover.png"
        alt="banner-lg"
      />
      <img
        src="https://www.m-bank.mn/icons/landing/home_cover_mobile.png"
        alt="banner-sm"
      />
    </picture>
  );
};
